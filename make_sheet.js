/* Builds the master sheet data (JSON + CSV) for the Google Sheet.
 * Table 1 = every MODEL scouted: MSRP, out-the-door, rate offered, monthly at $15K down.
 * Table 2 = every LIVE LISTING from this week's scans, with its MSRP and link.
 * Nothing here is invented. Where a figure is assumed rather than quoted, its own
 * "source" column says so in words. Run: node make_sheet.js */
const fs = require("fs");
const load = f => { global.window = {}; require("./" + f); return window[Object.keys(window)[0]]; };

const HST = 0.13, OMVIC = 10, TIRE = 30, PLATES = 150;
const DOWN = 15000, TERM = 60;
const ASSUMED = 6.99;   // used only where no rate was quoted or published; labelled as such

// out the door = (advertised + dealer admin + OMVIC + tire levy) x 1.13 + plates
const otd = (adv, admin) => { const t = adv + admin + OMVIC + TIRE; return t + t * HST + PLATES; };
const pmt = (principal, apr, n) => { const r = apr / 100 / 12; return principal * r / (1 - Math.pow(1 + r, -n)); };
const money = n => (n == null || n === "" ? null : Math.round(n));
const q = s => `"${String(s == null ? "" : s).replace(/"/g, '""')}"`;

/* ---------- TABLE 1 : models scouted ----------
 * msrp = manufacturer sticker ex-freight; fr = freight+PDI+AC; adv = advertised/all-in if
 * that is the number that exists instead; admin = dealer fee (2,334 where quoted at Lexus
 * on the Park, else 495 assumed); rate = APR used for the payment; rateSrc says where it came from. */
const T1 = [
 // make, model, trim, msrp, fr, adv, admin, rate, rateSrc, dep, lp100, note
 ["Lexus","TX 350","Luxury (base pkg)",69855,2305,null,2334,2.9,"QUOTED - Lexus on the Park finance worksheet 2026-09-02, 'special rate', 60 mo",8,11.5,
  "Their worksheet totals $86,611 OTD: sell $73,258 (Lexus Canada 'from' price, freight already in) + $870 freight AGAIN + $2,334 dealer fees. About $2.7K above this row. Ask why freight is charged twice."],
 ["Lexus","TX 350","Ultra Luxury",72608,2305,null,2334,2.9,"QUOTED - same rate applies to all new TX 350",8,11.5,"Ultra Luxury = +$2,753 over Luxury. Advertised $74,913 matches 4 live listings."],
 ["Lexus","TX 350","Executive 7-Pass",80861,2305,null,2334,2.9,"QUOTED - finance; lease worksheet showed 1.9%/48 with $4,200 off",8,11.5,"Executive = +$11,006 over Luxury. Lease sheet: $939/mo, 24,000 km/yr, residual 42%."],
 ["Lexus","TX 500h","F SPORT Performance 2",85400,2305,null,2334,5.5,"PUBLISHED - Don Valley North Lexus, 60 mo (lease 5.9%/24, Lexus Canada 6.7%/48)",8,8.6,"Only 2 new 500h in Ontario ($90,225 / $93,704 - both ABOVE the $87,705 sticker). 366 hp."],
 ["Toyota","Grand Highlander","HYBRID XLE (2.5L NA)",56632,2030,null,495,ASSUMED,"ASSUMED = Toyota Canada published LEASE rate 6.99%/60; finance rate NOT obtained",8,6.8,"Toyota Canada all-in FROM $58,661.92. The 10-year-hold pick. NOT the turbo."],
 ["Toyota","Grand Highlander","HYBRID Limited (2.5L NA)",63967,2030,null,495,ASSUMED,"ASSUMED - see above",8,6.8,"Toyota Canada all-in FROM $65,996.92."],
 ["Toyota","Grand Highlander","Platinum HYBRID MAX (2.4 TURBO)",68227,2030,null,495,ASSUMED,"ASSUMED - see above",8,8.6,"Toyota Canada all-in FROM $70,256.92. Turbo - reintroduces the failure modes you are avoiding."],
 ["Toyota","Grand Highlander","XLE (gas 2.4T)",53232,2030,null,495,ASSUMED,"ASSUMED - see above",8,9.5,"Toyota Canada all-in FROM $55,261.92."],
 ["Toyota","Highlander","HYBRID XLE (2.5L NA)",null,null,61687,495,ASSUMED,"ASSUMED - finance rate not obtained",8,6.7,"Factory-order listing price; official MSRP not pulled. Smaller 3rd row than Grand Highlander."],
 ["Toyota","Highlander","HYBRID Limited (2.5L NA)",null,null,67067,495,ASSUMED,"ASSUMED - finance rate not obtained",8,6.7,"Factory-order listing price."],
 ["Hyundai","Palisade Hybrid","Ultimate Calligraphy (2.5T hybrid), 2027",null,null,69099,495,ASSUMED,"NOT OBTAINED - assumed 6.99%; ask Hamilton Hyundai",10,8.1,"329 hp / 339 lb-ft. Brown Nappa interior: 2 confirmed in Ontario, both Hamilton Hyundai, ETA late Oct."],
 ["Hyundai","Palisade Hybrid","Ultimate Calligraphy, 2026 (new, last year's MY)",null,null,66976,495,ASSUMED,"NOT OBTAINED - assumed 6.99%",10,8.1,"Silver, 25 km, listed at MSRP. $2,123 under the 2027."],
 ["Hyundai","Palisade","Ultimate Calligraphy (gas 3.8 V6)",null,null,null,495,null,"not priced new in this scan",10,11.9,"Scouted USED only (Clutch). Oil-consumption + transmission risk at high km."],
 ["Genesis","GV80","3.5T Prestige 7-Pass",null,null,96888,1540,2.99,"SEEN on a Genesis Yorkdale listing ('as low as 2.99%') - CPO car; CONFIRM for new",15,11.5,"Lowest-km franchise 2026 observed; official MSRP not verified. WORST depreciation measured (15%/yr top trim)."],
 ["Mitsubishi","Outlander PHEV","SEL",59823,0,55573,495,ASSUMED,"NOT OBTAINED - assumed 6.99%",18,3.2,"MSRP printed on listing; $4,250 off. 72 km EV range; 8.6 L/100km once flat. 10yr/160,000km powertrain."],
 ["Mitsubishi","Outlander PHEV","GT",63423,0,59173,495,ASSUMED,"NOT OBTAINED - assumed 6.99%",18,3.2,"$4,250 off MSRP. Best warranty in this set."],
 ["Mitsubishi","Outlander PHEV","GT Premium",64523,0,60273,495,ASSUMED,"NOT OBTAINED - assumed 6.99%",18,3.2,"297 hp, massage seats, semi-aniline (black only)."],
 ["Tesla","Model Y","Long Range AWD (new)",null,null,64990,0,ASSUMED,"NOT OBTAINED - Tesla finance; assumed 6.99%",14,null,"Tesla configurator, gas-savings box UNCHECKED. 5 SEATS. FSD is $99/mo subscription only since 2026-02-14."],
 ["Volvo","XC90","B6 Ultra",null,null,null,495,null,"scouted USED only",11,10.4,"4yr/80,000km warranty = 1.9 yr at your mileage. Highest maintenance here (~$1,248/yr)."],
 ["Porsche","Macan","base 2.0T / S",null,null,null,495,null,"scouted USED only (Porsche Approved)",11,11.2,"9 service visits in 5 yr at your mileage; 5 seats."],
];

const t1 = T1.map(r => {
  const [make,model,trim,msrp,fr,advIn,admin,rate,rateSrc,dep,lp,note] = r;
  const adv = advIn != null ? advIn : (msrp != null && fr != null ? msrp + fr : null);
  const out = adv != null ? otd(adv, admin) : null;
  const monthly = out != null && rate != null ? pmt(out - DOWN, rate, TERM) : null;
  return { make, model, trim, msrp: money(msrp), freight: money(fr), advertised: money(adv), admin,
           otd: money(out), rate, rateSrc, term: rate != null ? TERM : null, down: DOWN,
           monthly: monthly != null ? Math.round(monthly * 100) / 100 : null,
           dep, lp100: lp, note };
});

/* ---------- TABLE 2 : live inventory, this week's scans ---------- */
const rows = [];
const push = o => rows.push(o);
const LEXUS_MSRP = (eng, trim) => {
  if (eng === "500h") return [87705, "TX 500h F SPORT 2 sticker: $85,400 + $2,205 freight + $100 AC (Lexus of Vaughan)"];
  if (/executive/i.test(trim)) return [83166, "current-MY equivalent: $69,855 + $11,006 Executive + $2,305"];
  if (/ultra/i.test(trim))     return [74913, "current-MY equivalent: $69,855 + $2,753 Ultra + $2,305 (matches 4 live listings)"];
  return [72160, "current-MY equivalent: $69,855 Luxury + $2,305 (Lexus of Vaughan)"];
};
load("tx.js").forEach(r => {           // [y,eng,trim,price,km,col,cert,isNew,six,dist,city,url,note]
  const [m, ms] = LEXUS_MSRP(r[1], r[2]);
  push({ src:"Lexus TX scan 09-02", make:"Lexus", model:"TX "+r[1], trim:r[2], year:r[0], price:r[3], km:r[4],
         msrp:m, msrpSrc:ms, status:[r[7]?"NEW":"used", r[6]?"Lexus Certified":"", r[5]].filter(Boolean).join(" / "),
         seller:r[10], url:r[11] });
});
const TOY_MSRP = (model, trim, isMAX) => {
  if (model !== "Grand Highlander") return [null, "Highlander MSRP not pulled"];
  if (isMAX || /platinum/i.test(trim)) return [70257, "Toyota Canada Build & Price all-in FROM (Platinum Hybrid MAX)"];
  if (/limited/i.test(trim)) return [65997, "Toyota Canada Build & Price all-in FROM (Hybrid Limited)"];
  return [58662, "Toyota Canada Build & Price all-in FROM (Hybrid XLE)"];
};
load("toyota.js").forEach(r => {       // [model,y,trim,price,km,col,isMAX,isNew,url,note]
  const [m, ms] = TOY_MSRP(r[0], r[2], r[6]);
  push({ src:"Toyota scan 09-02", make:"Toyota", model:r[0], trim:r[2], year:r[1], price:r[3], km:r[4],
         msrp:m, msrpSrc:ms, status:[r[7]?"NEW":"used", r[6]?"HYBRID MAX (2.4 turbo)":"2.5L NA hybrid", r[5]].filter(Boolean).join(" / "),
         seller:"", url:r[8] });
});
const GV_MSRP = trim => {
  if (/prestige/i.test(trim)) return [85000, "Genesis Canada 2021 launch MSRP, 3.5T Prestige (later MY higher)"];
  if (/2\.5T/i.test(trim))     return [64500, "Genesis Canada 2021 launch MSRP, 2.5T Advanced"];
  return [80000, "Genesis Canada 2021 launch MSRP, 3.5T Advanced"];
};
load("gv80.js").forEach(r => {         // [y,trim,price,km,col,seats,sellerType,seller,url,flag,note]
  const [m, ms] = GV_MSRP(r[1]);
  push({ src:"Genesis scan 09-01", make:"Genesis", model:"GV80", trim:r[1], year:r[0], price:r[2], km:r[3],
         msrp:m, msrpSrc:ms, status:[r[6], r[5]+" seats", r[4], r[9]==="warn"?"VERIFY BEFORE YOU GO":""].filter(Boolean).join(" / "),
         seller:r[7], url:r[8] });
});
load("phev.js").forEach(r => {         // [trim,price,msrp,col,seats,pano,url,note]
  push({ src:"Outlander PHEV scan 09-01", make:"Mitsubishi", model:"Outlander PHEV", trim:r[0], year:2026, price:r[1], km:0,
         msrp:r[2], msrpSrc:"printed on the AutoTrader card", status:["NEW", "$"+(r[2]-r[1]).toLocaleString()+" off MSRP", r[3]].join(" / "),
         seller:"", url:r[6] });
});
load("palhyb.js").forEach(r => {       // [y,trim,p,msrp,km,col,url,note]
  push({ src:"Palisade Hybrid scan 09-01", make:"Hyundai", model:"Palisade Hybrid", trim:r[1], year:r[0], price:r[2], km:r[4],
         msrp:r[3]||null, msrpSrc:r[3]?"printed on the AutoTrader card":"not shown", status:[r[4]<=100?"NEW":"used", r[5]].filter(Boolean).join(" / "),
         seller:"", url:r[6] });
});
const PAL21 = trim => {
  if (/calligraphy|urban/i.test(trim)) return [54699, "Hyundai Canada 2021 MSRP, Ultimate Calligraphy (Urban = Calligraphy-based)"];
  if (/luxury/i.test(trim))            return [50899, "Hyundai Canada 2021 MSRP, Luxury 7-Pass"];
  if (/preferred/i.test(trim))         return [46199, "Hyundai Canada 2021 MSRP, Preferred"];
  if (/essential/i.test(trim))         return [41199, "Hyundai Canada 2021 MSRP, Essential AWD"];
  return [null, ""];
};
load("clutch.js").forEach(r => {       // [y,model,trim,price,km,bwAdv,lp100,premiumTrim,seats,pano,id,v,note]
  const isVolvo = r[1] === "XC90";
  const [m, ms] = isVolvo ? [null, "XC90 MSRP not pulled"] : PAL21(r[2]);
  push({ src:"Clutch.ca scan 09-01", make:isVolvo?"Volvo":"Hyundai", model:isVolvo?"XC90":"Palisade", trim:r[2], year:r[0], price:r[3], km:r[4],
         msrp:m, msrpSrc:ms, status:["Clutch.ca - no doc/admin fees", r[8]+" seats", r[7]?"premium trim":"NOT premium", r[9]?"pano":"no pano"].join(" / "),
         seller:"Clutch.ca", url:"https://www.clutch.ca/vehicles/"+r[10] });
});
load("teslay.js").forEach(r => {       // [y,trim,price,km,col,hw,sellerType,seller,acc,url,note]
  const lr = /long range/i.test(r[1]);
  push({ src:"Model Y scan 09-01", make:"Tesla", model:"Model Y", trim:r[1], year:r[0], price:r[2], km:r[3],
         msrp: lr ? 64990 : null, msrpSrc: lr ? "current Tesla configurator, LR AWD, incentives unchecked" : "Performance not priced",
         status:[r[5], r[6], r[4], r[8], "5 SEATS"].filter(Boolean).join(" / "), seller:r[7], url:r[9] });
});
rows.sort((a,b)=> (a.make+a.model).localeCompare(b.make+b.model) || a.price-b.price);

/* ---------- checks ---------- */
const bad = rows.filter(r => !/^https:\/\//.test(r.url || ""));
if (bad.length) throw new Error("rows without a link: " + bad.length);
if (new Set(rows.map(r=>r.url)).size !== rows.length) throw new Error("duplicate URL in table 2");
const check = t1.find(r => r.trim === "Luxury (base pkg)");
// sanity: $15K down at 2.9%/60 on the Luxury must land between $1,150 and $1,350
if (!(check.monthly > 1150 && check.monthly < 1350)) throw new Error("payment sanity failed: " + check.monthly);

/* ---------- emit ---------- */
const meta = { generated: new Date().toISOString().slice(0,10), down: DOWN, term: TERM, hst: HST,
               fees: { omvic: OMVIC, tire: TIRE, plates: PLATES, adminDefault: 495, adminLexusQuoted: 2334 },
               assumedRate: ASSUMED, site: "https://kheraashish.github.io/car-deal-scout/" };
fs.writeFileSync("car_deal_scout.json", JSON.stringify({ meta, table1: t1, table2: rows }, null, 1), "utf8");

const csv = [];
csv.push("TABLE 1 - MODELS SCOUTED");
csv.push(["Make","Model","Trim","MSRP","Freight+PDI+AC","Advertised","Dealer admin","OUT THE DOOR","Rate %","Rate source","Term mo","Down","Monthly","Dep %/yr","L/100km","Notes"].map(q).join(","));
t1.forEach(r => csv.push([r.make,r.model,r.trim,r.msrp,r.freight,r.advertised,r.admin,r.otd,r.rate,r.rateSrc,r.term,r.down,r.monthly,r.dep,r.lp100,r.note].map(q).join(",")));
csv.push(""); csv.push("");
csv.push(`TABLE 2 - LIVE INVENTORY (${rows.length} vehicles)`);
csv.push(["Make","Model","Trim","Year","Asking","MSRP","MSRP source","Odometer km","Status","Seller","Link","Scan"].map(q).join(","));
rows.forEach(r => csv.push([r.make,r.model,r.trim,r.year,r.price,r.msrp,r.msrpSrc,r.km,r.status,r.seller,r.url,r.src].map(q).join(",")));
fs.writeFileSync("car_deal_scout.csv", csv.join("\n"), "utf8");

console.log("wrote car_deal_scout.json + .csv");
console.log("  Table 1:", t1.length, "models |", t1.filter(r=>r.monthly!=null).length, "with a payment |",
            t1.filter(r=>/QUOTED|PUBLISHED/.test(r.rateSrc)).length, "rates quoted/published,",
            t1.filter(r=>/ASSUMED|NOT OBTAINED|SEEN/.test(r.rateSrc)).length, "assumed");
console.log("  Table 2:", rows.length, "listings |", rows.filter(r=>r.msrp).length, "with an MSRP | all links present, no dups");
console.log("  sanity: TX 350 Luxury OTD $"+check.otd.toLocaleString()+", monthly $"+check.monthly+" at "+check.rate+"%/"+TERM+" with $"+DOWN.toLocaleString()+" down");
