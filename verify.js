#!/usr/bin/env node
/* verify.js — self-check gate for deals.js. Plain node, zero dependencies.
 * Run:  node verify.js   (exits non-zero if any check FAILS)
 *
 * Checks (see _SWARM_TASK Task 3):
 *   1. every deal has a url; none is a search-results page
 *   2. every deal has sellerType; every used deal is franchise or clutch
 *   3. every deal has accidents, lp100, depPct
 *   4. no duplicate id
 *   5. deals.js parses and window.DEALS.length matches the header "Count: N vehicles"
 *   6. the two payment self-tests hold (biweekly finance + biweekly lease, tol $0.02)
 */
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "deals.js");
const src = fs.readFileSync(file, "utf8");

// --- load window.DEALS in a minimal shim (no deps) ---
const sandbox = { window: {} };
new Function("window", src)(sandbox.window);
const D = sandbox.window.DEALS;

let failed = 0;
const report = (ok, name, detail) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? " — " + detail : ""}`);
  if (!ok) failed++;
};

// 1. urls present, no search pages
{
  const noUrl = D.filter(d => !d.url).map(d => d.id);
  const searchRe = /\/cars\/[a-z]|vehicle-search-result/;
  const bad = D.filter(d => d.url && searchRe.test(d.url)).map(d => d.id);
  report(noUrl.length === 0 && bad.length === 0, "1 url present + per-vehicle",
    noUrl.length ? `no url: ${noUrl}` : bad.length ? `search-page url: ${bad}` : `${D.length} urls ok`);
}

// 2. sellerType present; used must be franchise|clutch
{
  const noSeller = D.filter(d => !d.sellerType).map(d => d.id);
  const badUsed = D.filter(d => d.status === "used" && !["franchise", "clutch"].includes(d.sellerType))
    .map(d => `${d.id}(${d.sellerType})`);
  report(noSeller.length === 0 && badUsed.length === 0, "2 sellerType + used is franchise/clutch",
    noSeller.length ? `no sellerType: ${noSeller}` : badUsed.length ? `bad used seller: ${badUsed}` : "all used are franchise/clutch");
}

// 3. accidents, lp100, depPct present on every deal
{
  const req = ["accidents", "lp100", "depPct"];
  const miss = [];
  for (const d of D) for (const k of req) if (d[k] === undefined) miss.push(`${d.id}.${k}`);
  report(miss.length === 0, "3 accidents+lp100+depPct on every deal",
    miss.length ? `missing: ${miss.slice(0, 8)}${miss.length > 8 ? "…" : ""}` : `${D.length} deals complete`);
}

// 4. no duplicate id
{
  const ids = D.map(d => d.id);
  const dups = [...new Set(ids.filter((x, i) => ids.indexOf(x) !== i))];
  report(dups.length === 0, "4 no duplicate id", dups.length ? `dups: ${dups}` : `${ids.length} unique ids`);
}

// 5. length matches header "Count: N vehicles"
{
  const m = src.match(/Count:\s*(\d+)\s*vehicles/i);
  const headerCount = m ? Number(m[1]) : null;
  report(headerCount != null && headerCount === D.length, "5 length matches header count",
    m ? `header ${headerCount} vs length ${D.length}` : "no 'Count: N vehicles' line in header");
}

// 6. payment self-tests
{
  const biwFinance = (P, apr, mo) => { const r = apr / 100 / 26, n = mo / 12 * 26; return P * r / (1 - (1 + r) ** -n); };
  const biwLease = (cap, msrp, mo, apr, resPct) => {
    const res = resPct / 100 * msrp, mf = apr / 2400;
    const monthly = (cap - res) / mo + (cap + res) * mf;
    return monthly * 12 / 26;
  };
  const a = biwFinance(43249.72, 4.79, 60);
  const b = biwLease(51078.50, 59336, 24, 6.89, 70);
  const okA = Math.abs(a - 374.43) <= 0.02;
  const okB = Math.abs(b - 306.24) <= 0.02;
  report(okA && okB, "6 payment self-tests",
    `finance ${a.toFixed(2)} (want 374.43, ${okA ? "ok" : "OFF"}); lease ${b.toFixed(2)} (want 306.24, ${okB ? "ok" : "OFF"})`);
}

console.log(`\n${failed === 0 ? "ALL CHECKS PASS" : failed + " CHECK(S) FAILED"} — ${D.length} vehicles`);
process.exit(failed === 0 ? 0 : 1);
