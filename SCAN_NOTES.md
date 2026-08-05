# Scan notes — premium-trim, accident-verified used sweep (2026-08-05)

Sweep of AutoTrader.ca for **used RAV4 Hybrid and CR-V Hybrid, premium trims only**
(RAV4 Limited/XSE, CR-V Touring/EX-L), silver or blue, under 60,000 km, $36,000–$52,000,
within ~200 km of Toronto (postal M3A 1B2). Franchise-dealer or Clutch.ca sellers only.

Everything below was read off a **live listing** on 2026-08-05: price / km / seller / city
from each AutoTrader page `<title>`; accident wording quoted verbatim from the seller's
own description text. Nothing here is inferred or invented.

## Method + what blocked

- **AutoTrader.ca — worked.** The search recipe in the task returns a real server-rendered
  2 MB page; ~100 listings per make. Colour + fuel are in the slug (`-gas-electric-hybrid-<colour>-cat_`).
  I filtered to premium trims + silver/blue + hybrid, then **opened each candidate's detail page**
  to read the title (price/km/seller/city) and the seller description (accident wording).
- **Clutch.ca — blocked to a headless fetch.** `https://www.clutch.ca/cars/toyota/blue` returns
  a 200 but only an ~11 KB JavaScript shell with **zero `/vehicles/<id>` links and no server-rendered
  data** — the inventory renders client-side behind a bot wall. I could not read live Clutch inventory
  this session, so **no new Clutch cars were added.** The existing Clutch entries (from earlier sweeps,
  already in `deals.js`) were left intact. Re-run from a real browser to refresh Clutch.
- **VIN is not exposed** on AutoTrader detail pages (it sits behind the Carfax request), so new
  AutoTrader deals carry `vin: null`. Clutch entries that already had VINs keep them.
- **Do not trust AutoTrader's `accidentFree` / accident-chip flag.** It reads `true` on *every*
  listing — including an independent Sarnia lot whose ad makes no such claim — so it is a page
  default, not the car's record. The only reliable accident signal is the seller's own words.

## Counts — found vs kept

| Stage | Count |
|---|---|
| Premium hybrid RAV4/CR-V in silver or blue seen across the sweep | 15 |
| Rejected (seller / km / colour / distance) | 6 |
| **Kept and added to `deals.js`** | **9** |
| — of those, **accident status stated "no accidents" verbatim** | **1** |
| — premium franchise hybrids but accident status **NOT stated** (do not yet qualify) | 8 |

**The shortlist is thin on the rule that matters.** Out of every premium-trim hybrid in the
buyer's colours within range, exactly **one** listing actually states it has no accidents.
Everything else is silent — those cars are franchise premium hybrids that pass every other
test, but under the "must clearly state no accidents" rule they **do not qualify until a Carfax
is confirmed.** That is a real feature of the market, not a gap in the search.

## KEPT — the one accident-verified car

| Car | Seller | Colour | km | Price | Accident wording (verbatim) |
|---|---|---|---|---|---|
| 2025 Honda CR-V Hybrid **Touring** | **Parkway Honda**, North York (franchise, ~12 km) | Blue | 23,445 | $44,990 | **"NO ACCIDENTS \| HONDA CERTIFIED \| OFF LEASE"** |

This is the recommendation. Top CR-V trim, blue, low km, a Honda franchise, Honda-Certified
(inspection + transferable certified warranty), and the only one whose listing states the
accident line outright.

## KEPT — premium franchise hybrids, accident status NOT stated (confirm Carfax before they qualify)

| Car | Seller | Colour | km | Price | Note |
|---|---|---|---|---|---|
| 2025 Toyota RAV4 Hybrid **Limited** | Thornhill Toyota (franchise) | Blue | 36,762 | $47,888 | Only premium RAV4 hybrid in colour/range. Priced above MSRP. Silent on accidents. |
| 2025 Honda CR-V Hybrid **Touring** | Signature Honda (franchise) | Silver | 52,855 | $38,999 | Cheapest Touring; highest km of the keepers (still < 60k). Silent. |
| 2024 Honda CR-V Hybrid **Touring** | Toronto Honda (franchise) | Blue | 39,076 | $41,500 | Closest (~8 km). Silent. |
| 2025 Honda CR-V Hybrid **EX-L** | Toronto Honda (franchise) | Blue | 37,352 | $39,700 | Silent. |
| 2026 Honda CR-V Hybrid **EX-L** | Toronto Honda (franchise) | Blue | 8,041 | $47,300 | Near-new demo; near new-car money. Silent. |
| 2024 Honda CR-V Hybrid **EX-L** | Pickering Honda (franchise) | Canyon River Blue | 31,156 | $38,211 | Honda Certified, one owner — but never says "no accidents". |
| 2026 Honda CR-V Hybrid **EX-L** | Roadsport Honda (franchise) | Blue | 19,797 | $47,990 | Honda Certified 7yr/160k warranty. Silent on accidents. |
| 2024 Honda CR-V Hybrid **EX-L** | Roadsport Honda (franchise) | Blue | 31,143 | $41,490 | Honda Certified. Silent on accidents. |

## REJECTED — with the reason

| Car | Seller | Reason |
|---|---|---|
| 2025 RAV4 Hybrid Limited, blue, 37,785 km, $48,999 | Progressive Auto Sales, **Sarnia** | Independent lot **and** ~290 km out (outside 200 km) |
| 2025 CR-V Hybrid Touring, silver, **77,479 km**, $38,200 | Toronto Honda | Over the 60,000 km cap |
| 2025 CR-V Hybrid Touring, blue, **77,666 km**, $39,495 | **Scarborough Toyota** | Over 60k km **and** cross-brand (Toyota store selling a Honda) |
| 2023 CR-V Hybrid Touring, blue, **71,426 km**, $36,990 | Roadsport Honda | Over the 60,000 km cap |
| 2024 CR-V Hybrid EX-L, blue, **84,018 km**, $36,900 | Toronto Honda | Over the 60,000 km cap |
| 2026 CR-V Hybrid EX-L, "blue" slug but **Crystal Black Pearl** in the ad, 4,438 km, $48,594 | Honda Downtown | Car is actually **black** — colour rule (slug was wrong; caught by opening the listing) |

## Existing deals removed from `deals.js` (they failed the franchise-or-Clutch rule)

`verify.js` check #2 requires every `status:"used"` deal to be `franchise` or `clutch`.
These four were carried from earlier sweeps and fail it, so they were removed:

| Removed | Seller | sellerType | Why it fails |
|---|---|---|---|
| 2026 CR-V Hybrid Sport, silver | Midway Nissan | crossbrand | Nissan store selling a Honda |
| 2024 Subaru Ascent Onyx, blue | Marino's Fine Cars | independent | Independent lot |
| 2019 Acura MDX Tech, silver | Private Seller | private | Private sale, no dealer recourse |
| 2024 Grand Highlander Hybrid XLE, silver | Strickland's Brantford Chevrolet | crossbrand | Chevrolet store, wrong brand |

**Note on the MDX + `premiumFuel`:** Task 2 asked to set `premiumFuel: true` on the Acura MDX,
but the MDX is a private-seller listing that fails the franchise-or-Clutch rule (check #2), so it
was removed rather than kept. The premium-fuel penalty it illustrated is preserved in the header
comment (`MDX 11.0 L/100km, premium fuel`); no car in the current set requires premium gas.

## Reconciliation (data-science discipline, applied inline)

This is a personal car project with **no BigQuery source** — the reconciliation target is the
**live listing**, not a warehouse table, so the HP BQ-bound `data-science` skill was not fired
(it would run `bq` and hang the seat for no source). The discipline was applied directly:

- **price / km / colour / seller / city** — each traced to a specific AutoTrader `<title>` read
  2026-08-05 (URLs in `deals.js`). No value invented.
- **accidents** — verbatim seller wording where present; `"not stated"` where the listing is
  silent (never inferred as "no accidents" from silence).
- **lp100** — labelled ESTIMATE in the header; not queried. Values per the task's estimate table.
- **msrp / residualPct / depPct** — estimates on the new AutoTrader units (`residualSource:"estimated"`).
- **Payment self-tests** reproduced before baking into `verify.js`: biweekly finance
  $43,249.72 @ 4.79%/60mo = **$374.42** (target $374.43, within the $0.02 tolerance); biweekly
  lease cap $51,078.50 / MSRP $59,336 / 24mo @ 6.89% / 70% residual = **$306.24** (exact).

## Gate

`node verify.js` → all 6 checks PASS, exit 0 (run 2026-08-05). `deals.js` = 35 vehicles.
