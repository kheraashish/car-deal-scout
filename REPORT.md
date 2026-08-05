# Car Deal Scout — findings

**Live:** https://kheraashish.github.io/car-deal-scout/
30 vehicles · 200 km around Toronto · silver & blue only · AutoTrader, Clutch, LeaseBusters

---

## The recommendation

### 2025 Honda CR-V Hybrid **Touring** · Blue · 23,445 km · $44,990
**Parkway Honda, North York** · [listing](https://www.autotrader.ca/offers/honda-cr-v-touring-no-accidents-honda-certified-off-lease-gas-electric-hybrid-blue-cat_ma31gr200623va2625tr13122-7bc8ae5e-bc08-433d-9217-10209080634e)

Listing title, verbatim: **"NO ACCIDENTS | HONDA CERTIFIED | OFF LEASE"**.
Verified directly on the listing page, not taken from a sub-agent's report.

It is the only vehicle found that satisfies **every** constraint set across the
whole search:

| Test | Result |
|---|---|
| Colour rule | Blue |
| Hybrid | Yes |
| Premium / fully-loaded trim | **Touring — the TOP CR-V trim**, above EX-L |
| Accident history stated | **Yes, explicitly** — 3 of 29 used cars do |
| Franchise dealer | Honda franchise, brand-matched |
| Manufacturer Certified | **Honda Certified** — CPO warranty extension |
| Odometer | ~19,500 km/yr — unremarkable |
| Budget | $44,990 |

Off-lease is a positive here: a lease return means a single owner on a maintenance
schedule with a km cap, and Honda inspected it before Certifying.

**Cost:** ~$415 bi-weekly at 6.99%/48mo with $15,000 down · **$24,592 over 2 years**,
**$42,211 over 5** (fuel included at 20,000 km/yr).

That is **$6,307 less than a brand-new 2026 CR-V Touring over five years**, for one
model year, 23,445 km, and Certified warranty cover instead of factory-fresh.

**Before buying:** get the Certified inspection sheet and the exact CPO warranty
terms in writing, plus the Carfax. Confirm the in-service date — an off-lease car's
warranty clock started when the first owner took delivery, not when you buy it.

**Cheaper, if you relax one rule:** 2023 RAV4 Hybrid XSE, $43,890, Clutch —
**$36,780 over 5 years**, the cheapest here. But its listing does **not** state
accident history, so it fails the accident rule until a Carfax says otherwise.

---

## Six cars fail the franchise-or-Clutch rule

Every AutoTrader entry originally said "GTA dealer" because the seller had never been
checked. Reading the real seller off all 15 listings changed the shortlist:

| Vehicle | Price | Seller | Why excluded |
|---|---|---|---|
| 2026 CR-V Hybrid Sport | $44,300 | **Midway Nissan** | Nissan store selling a Honda — cannot Certify it, no Honda-trained techs |
| 2024 Subaru Ascent Onyx | $44,495 | Marino's Fine Cars | Independent lot |
| 2019 Acura MDX Tech | $30,990 | **Private Seller** | No dealer, no recourse |
| 2024 Grand Highlander Hyb | $54,888 | Strickland's Brantford **Chevrolet** | Wrong brand |
| 2025 CR-V Hybrid EX-L (takeover) | — | LeaseBusters private | Private assignment |
| 2023 RAV4 Prime (takeover) | — | LeaseBusters private | Private assignment |

The MDX exclusion is decisive: the only MDX in silver or blue under $46K — out of
**491 within 200 km** — is a private sale. Under this rule the MDX is simply
unavailable.

---

## What the analysis established

**Colour is the binding constraint, not budget.** Of the 98 newest hybrid CR-Vs:
black 38, white 26, grey 10, **silver 6, blue 3**. Silver+blue is ~9% of live
inventory. Grand Highlander is the exception at 29%. Acura MDX: 1 of 35 in-band, and
zero blue.

**$45K is the ceiling that matters.** Under $40K every low-km car was gas. At $45K,
low-km RAV4 Hybrids come into range. That last $5,000 changes the answer entirely.

**Low kilometres on an old car buy no warranty.** Coverage runs on two clocks — years
and kilometres — and the first one reached ends it. The 19,041 km 2022 RAV4 has
**expired** basic cover and 5 months of powertrain left; the calendar ran out
regardless of the mileage. 8 of 30 cars have no basic warranty; 5 more lose it within
a year.

**Term destroys equity.** Same Grand Highlander, zero down, sold at 24 months:

| Term | Bi-weekly | Equity at 24 mo |
|---|---|---|
| 48 mo | $812 | **+$6,873** |
| 60 mo | $668 | −$1,076 |
| 84 mo | $503 | **−$10,124** |

A $17,000 swing from term alone. The Brampton East Toyota quote was 84 months.

**Lease vs finance is decided by the residual.** If the car beats it, finance and
sell — you keep the upside. If it doesn't, lease and walk — the depreciation is the
lessor's problem. RAV4 beats it; Grand Highlander doesn't.

**Accelerated payoff at 7.99%.** Clearing a 48-month loan in 24 saves $1,780–$2,755
depending on price — a guaranteed 7.99% return. The Rule-of-78s penalty is only ~$59
at this term, so the real question is whether a **flat prepayment penalty** exists.
Ask: *"is this an open loan?"*

**Ontario trade-in credit.** Trading in means HST on the difference only — about
$5,200 on a $40,000 trade. That usually beats the $2,000–3,000 premium a private sale
earns.

---

## Open items

1. **Carfax on the Thornhill RAV4** — not included with AutoTrader dealer listings.
2. **2024 RAV4 XLE (Clutch, $39,390)** — odometer verified clean and monotonic, but
   the transmission was checked twice inside the first 1,502 km and the car then sat
   for six months. The report also contains the string "CAMVAP Transmission", almost
   certainly a glossary entry rather than a finding. Any Toyota dealer can pull the
   warranty-claim history by VIN — do that before considering it.
3. **In-service dates** are assumed from model year on every car except that one.
   Matters most for the two 2026 demos, whose warranty clock started before purchase.
4. **The 2025 CR-V "Sport" cars on Clutch are GAS**, confirmed by VIN and fuel field,
   despite Canada's Sport badge normally denoting the hybrid.

---

## Hidden costs to argue

- **Lease-end disposition fee, $350–450** — the most-missed cost in leasing.
- **Dealer add-ons** (admin, anti-theft, nitrogen, fuel surcharge) — $300–800 of pure
  margin, all negotiable.
- **A lease down payment is not refunded on a write-off.** Without GAP, it is gone.
- **Clutch's advertised bi-weekly excludes HST** — understated by ~13%.
- **On any takeover, check remaining free-km/yr before the payment.** One RAV4 Prime
  had 5,556 km/yr left — roughly $9,000 of overage at normal driving.

---

*Prices, kilometres, colour, distance and seller are read from live listings. Rates
and residuals marked `est` are estimates and must be confirmed before signing.
Inventory moves fast — one car sold between two sweeps on the same evening.
Re-run `/car-deal-scout` before acting.*
