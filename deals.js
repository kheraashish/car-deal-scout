/* Car Deal Scout — dataset. Overwritten by /car-deal-scout on each scan.
 * Scan: 2026-08-05 · AutoTrader.ca · 200 km around Toronto · new + used
 * Count: 35 vehicles (verify.js check #5 reads this number).
 * lp100 = combined L/100km (ESTIMATE, not queried). premiumFuel = requires premium gas.
 * Swept: Honda CR-V (4,165 listings, 1,700 hybrid) · Toyota RAV4 · Toyota Grand Highlander (65)
 *
 * PRICES + KM + COLOUR + DISTANCE are REAL, read off AutoTrader listings.
 * APR / RESIDUAL are NOT yet dealer-confirmed for these units — they carry the
 * rates observed on Ashish's own two quotes (Honda 4.79% fin / 1.99% lease 24mo,
 * Toyota 5.69% fin / 6.89% lease 24mo). verified:"listing" flags this.
 *
 * Schema — see SKILL.md. All money PRE-TAX. Residual is a % of MSRP, not price.
 */
window.DEALS = [

  /* ============ HONDA CR-V ============ */
  {
    id: "crv-exl-hybrid-pickering-demo",
    status: "demo",
    year: 2026, make: "Honda", model: "CR-V Hybrid", trim: "EX-L AWD",
    powertrain: "hybrid",
    lp100: 6.4,
    depPct: 10.5,
    accidents: "n/a (new/demo vehicle)",
    colour: "Silver", colourOk: true,
    seating: null, pano: false,
    km: 14500, vin: null, stock: null,
    dealer: "Acura Pickering", sellerType: "franchise", city: "Pickering, ON", distanceKm: 28,
    msrp: 48155, price: 48390, fees: 1540, incentives: 0,
    financeApr: 4.79, financeMonths: 60,
    leaseApr: 1.99, leaseMonths: 24, residualPct: 62, kmPerYear: 24000,
    residualSource: "estimated", carfax: null,
    url: "https://www.autotrader.ca/offers/honda-cr-v-ex-l-awd-gas-electric-hybrid-silver-cat_ma31gr200623va2625tr11828-aed9a4f5-bb9d-4b3e-870b-e98214391f90",
    evidence: [], verified: "listing",
    notes: [
      "EXACT spec match — CR-V EX-L Hybrid AWD in silver. The only one in 200km.",
      "BUT THE PRICE IS WRONG: $48,390 with 14,500 km, while BRAND NEW 2026 CR-V Hybrids in silver sit at $48,472 (Waterloo) and $49,247 (Brampton). You would pay new-car money for 14,500 km of someone else's driving. Either get this into the low $44Ks or buy new.",
      "14,500 km on a 2026 = heavy demo or a service loaner. Demand the in-service date — warranty runs from then, not from your purchase.",
      "Used units are rarely leaseable in Canada. Treat the finance column as the real option here; the lease figure is indicative only.",
      "Fees set to used-car level ($1,540: admin + OMVIC + levies + finance admin) — no freight/PDI on a used unit."
    ]
  },
  {
    id: "crv-sport-hybrid-waterloo-new",
    status: "new",
    year: 2026, make: "Honda", model: "CR-V Hybrid", trim: "Sport",
    powertrain: "hybrid",
    lp100: 6.4,
    depPct: 10.5,
    accidents: "n/a (new vehicle)",
    colour: "Silver", colourOk: true,
    seating: null, pano: false,
    km: 10, vin: null, stock: null,
    dealer: "Waterloo Honda", sellerType: "franchise", city: "Waterloo, ON", distanceKm: 93,
    msrp: 48472, price: 48472, fees: 3893, incentives: 500,
    financeApr: 4.79, financeMonths: 60,
    leaseApr: 1.99, leaseMonths: 24, residualPct: 72, kmPerYear: 24000,
    residualSource: "estimated", carfax: null,
    url: "https://www.autotrader.ca/offers/honda-cr-v-sport-gas-electric-hybrid-silver-cat_ma31gr200623va2625tr13120-315b8b54-44f8-4027-abaa-f7bd227a20db",
    evidence: [], verified: "listing",
    notes: [
      "Cheapest genuinely NEW silver hybrid CR-V found in the 200km radius.",
      "Sport trim, not EX-L — no leather, no memory seat. Sport does have a moonroof.",
      "93 km out. Worth the drive only if they hold the price; use it as leverage on a Toronto dealer first.",
      "1.99% subvented 24mo lease rate is the live Honda program seen on Ashish's own quote — confirm it still applies to Hybrid Sport."
    ]
  },
  {
    id: "crv-sport-hybrid-brampton-new",
    status: "new",
    year: 2026, make: "Honda", model: "CR-V Hybrid", trim: "Sport",
    powertrain: "hybrid",
    lp100: 6.4,
    depPct: 10.5,
    accidents: "n/a (new vehicle)",
    colour: "Silver", colourOk: true,
    seating: null, pano: false,
    km: 150, vin: null, stock: null,
    dealer: "Performance Honda Mayfield", sellerType: "franchise", city: "Brampton, ON", distanceKm: 31,
    msrp: 49247, price: 49247, fees: 3893, incentives: 500,
    financeApr: 4.79, financeMonths: 60,
    leaseApr: 1.99, leaseMonths: 24, residualPct: 72, kmPerYear: 24000,
    residualSource: "estimated", carfax: null,
    url: "https://www.autotrader.ca/offers/honda-cr-v-sport-gas-electric-hybrid-silver-cat_ma31gr200623va2625tr13120-8a0f3ba0-fe0e-484f-b4a3-68526ec158f1", evidence: [], verified: "listing",
    notes: [
      "Same trim as the Waterloo car, $775 more, but 62 km closer. Play the two against each other.",
      "Closest NEW silver hybrid CR-V to the GTA core."
    ]
  },
  {
    id: "crv-touring-hybrid-toronto-demo",
    status: "demo",
    year: 2026, make: "Honda", model: "CR-V Hybrid", trim: "Touring AWD",
    powertrain: "hybrid",
    lp100: 6.4,
    depPct: 10.5,
    accidents: "n/a (new/demo vehicle)",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 4275, vin: null, stock: null,
    dealer: "Toronto Honda", sellerType: "franchise", city: "Toronto, ON", distanceKm: 9,
    msrp: 55954, price: 52900, fees: 1540, incentives: 0,
    financeApr: 4.79, financeMonths: 60,
    leaseApr: 1.99, leaseMonths: 24, residualPct: 66, kmPerYear: 24000,
    residualSource: "estimated", carfax: null,
    url: "https://www.autotrader.ca/offers/honda-cr-v-touring-awd-gas-electric-hybrid-blue-cat_ma31gr200623va2625tr13122-da921b0f-e346-4d1c-bfb6-62a1e9a67f46",
    evidence: [], verified: "listing",
    notes: [
      "This is the demo that actually makes sense: Touring (top trim, above EX-L) at $52,900 with only 4,275 km, vs $55,954 for a new Touring in Stratford. ~$3,050 off for 4,275 km.",
      "Blue, 9 km from downtown. Best condition-adjusted value in the CR-V set.",
      "Touring adds leather, wireless charging, hands-free tailgate, premium audio over EX-L — you get MORE than the EX-L you asked for, for less than the Pickering EX-L demo.",
      "Used/demo — confirm leaseability, and get the in-service date."
    ]
  },

  /* ============ LEASE TAKEOVERS (LeaseBusters) ============
   * fixedLeaseBiweekly = the REAL inherited payment. Never recomputed.
   * No down payment on a takeover — just a transfer fee (~$500-600) + credit approval. */
  {
    id: "takeover-crv-exl-hybrid-northyork",
    status: "takeover",
    year: 2025, make: "Honda", model: "CR-V Hybrid", trim: "EX-L AWD",
    powertrain: "hybrid",
    lp100: 6.4,
    depPct: 10.5,
    accidents: "not stated",
    colour: "Canyon River Blue", colourOk: true,
    seating: null, pano: true,
    km: 20000, vin: null, stock: "LB 605170",
    dealer: "LeaseBusters private seller (Honda Finance)", sellerType: "private", city: "North York, ON", distanceKm: 9,
    msrp: 46873, price: 46873, fees: 600, incentives: 0,
    financeApr: 4.79, financeMonths: 60,
    leaseApr: 4.99, leaseMonths: 43, residualPct: 40, kmPerYear: 27906,
    fixedLeaseBiweekly: 336,      // seller-stated incl. tax; $330.04 pre-tax. SEE TAX NOTE.
    residualSource: "quoted", carfax: null,
    url: "https://www.leasebusters.com/details/605170/2025-Honda-CR-V%20Hybrid",
    evidence: ["detail page read 2026-08-04"], verified: "quote",
    notes: [
      "CONTRACT TERMS CONFIRMED off the listing detail page: Honda Finance · $715.09/mo before tax · biweekly $330.04 before tax / $336.00 stated incl. tax · PURCHASE OPTION AT END OF LEASE $18,749.25 · rate 4.99% · original term 60 months · expiry 2030-Mar-31 · total km allowance 120,000 · excess km $0.15 · NO money down · Excess Wear and Tear Package included.",
      "IT HAS THE PANORAMIC SUNROOF. Premium features list shows Power/Panoramic Sunroof, leather, navigation, blind-spot monitor. That is above the EX-L spec you asked for.",
      "TAX FIGURE DOES NOT RECONCILE — TREAT AS THE MAIN RISK. Seller states $715.09 before tax and $728.00 including tax, a 1.8% gap. Ontario HST is 13%, which would make it $808.06/mo = $372.95 biweekly, not $336. The seller-entered fields on this listing are unreliable (it also lists the transmission as 'Manual', which no CR-V Hybrid has). BUDGET $373 BIWEEKLY, not $336, until Honda Finance confirms in writing.",
      "Even at the pessimistic $373 biweekly it is still the cheapest route to a CR-V EX-L Hybrid in your colour, and it needs no down payment.",
      "Km allowance is genuinely good, not a trap: 120,000 total, 20,000 used with ~17 months elapsed. They drove ~14,100 km/yr against a 24,000 allowance, so the surplus rolls to you — 27,906 free km/yr for the rest of the term.",
      "THE CATCH: 43 months remaining, not the 24 you wanted. Runs to March 2030.",
      "COST TO OWN OUTRIGHT: 43 × $715.09 = $30,749 remaining payments, plus the $18,749.25 buyout = $49,498 before tax. A brand-new 2026 CR-V Hybrid Sport is $48,472 before fees. So do NOT take this over intending to buy it out — take it over to DRIVE it, and hand it back in 2030.",
      "Verify with Honda Finance before signing: the true tax-inclusive payment, that no excess wear or km overage has already accrued, the transfer fee, and that the transfer is approved in YOUR name."
    ]
  },
  {
    id: "takeover-rav4-prime-scarborough",
    status: "takeover",
    year: 2023, make: "Toyota", model: "RAV4 Prime", trim: "XSE AWD",
    powertrain: "hybrid",
    lp100: 6,
    depPct: 10,
    accidents: "not stated",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 88425, vin: null, stock: "LB 605182",
    dealer: "LeaseBusters private seller", sellerType: "private", city: "Scarborough, ON", distanceKm: 6,
    msrp: 56000, price: 56000, fees: 600, incentives: 0,
    financeApr: 5.69, financeMonths: 60,
    leaseApr: 0, leaseMonths: 25, residualPct: 41.7152, kmPerYear: 5556,
    fixedLeaseBiweekly: 468,      // $1,014/mo actual, inherited
    residualSource: "quoted", carfax: null,   // buyout $23,360.50 confirmed on detail page
    url: "https://www.leasebusters.com/details/605182/2023-Toyota-RAV4%20Prime", evidence: [], verified: "listing",
    notes: [
      "REJECT — included only to show what the takeover trap looks like, because you will meet more of these.",
      "5,556 free km/yr. That is not an allowance, it is a debt. The previous lessee burned 88,425 km and left you the remainder. At Toyota's ~$0.15/km overage, driving a normal 20,000 km/yr for the remaining 25 months costs you roughly $9,000 in penalties on top of the payment.",
      "$1,014/mo ($468 biweekly) for a car with 88,425 km on it. The term is right (25 months) and the colour is right, and it is still a bad deal.",
      "Rule this scan taught: on any takeover, check free-km-per-year BEFORE the payment."
    ]
  },

  /* ============ TOYOTA RAV4 ============ */
  {
    id: "rav4-hybrid-blue-22k-used",
    status: "used",
    year: 2025, make: "Toyota", model: "RAV4 Hybrid", trim: "(trim TBC)",
    powertrain: "hybrid",
    lp100: 6,
    depPct: 8.5,
    accidents: "Listing advertises no accidents (prior read — reconfirm the Carfax before purchase).",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 22721, vin: null, stock: null,
    dealer: "Brimell Toyota", sellerType: "franchise", city: "Toronto area, ON", distanceKm: 18,
    msrp: 46000, price: 45900, fees: 1540, incentives: 0,
    financeApr: 5.69, financeMonths: 60,
    leaseApr: 6.89, leaseMonths: 24, residualPct: 62, kmPerYear: 24000,
    residualSource: "estimated", carfax: null,
    url: "https://www.autotrader.ca/offers/toyota-rav4-gas-electric-hybrid-blue-cat_ma70gr201439va2399tr11876-a8cafb07-d894-4d40-ab82-fb871627a645", evidence: [], verified: "listing",
    notes: [
      "8,100 km fewer than the XLE above for $2,000 more — roughly fair, slightly in your favour.",
      "Listing advertises no accidents. Trim not stated in the listing — confirm it is XLE or better, not LE."
    ]
  },
  {
    id: "rav4-hybrid-limited-toronto-new",
    status: "new",
    year: 2026, make: "Toyota", model: "RAV4 Hybrid", trim: "Limited (factory order)",
    powertrain: "hybrid",
    lp100: 6,
    depPct: 8.5,
    accidents: "n/a (new/factory-order vehicle)",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 11, vin: null, stock: null,
    dealer: "Scarborough Toyota", sellerType: "franchise", city: "Toronto, ON", distanceKm: 11,
    msrp: 55137, price: 55137, fees: 4368, incentives: 0,
    financeApr: 5.69, financeMonths: 60,
    leaseApr: 6.89, leaseMonths: 24, residualPct: 74, kmPerYear: 24000,
    residualSource: "estimated", carfax: null,
    url: "https://www.autotrader.ca/offers/toyota-rav4-limited-factory-order-gas-electric-hybrid-blue-cat_ma70gr201439va2399tr15361-9b7f8c09-a101-4edf-ac1e-657aa2bd332f", evidence: [], verified: "listing",
    notes: [
      "New RAV4 Hybrid Limited, blue, 11 km away. Highest residual in the whole set (~74%) — RAV4 leases well.",
      "FACTORY ORDER: you are not driving this next week. Confirm the build/delivery window before you get attached.",
      "At 74% residual the 24-month lease is the strongest lease case here — the buyback is high, so depreciation you pay for is low."
    ]
  },

  /* ============ TOYOTA GRAND HIGHLANDER ============ */
  {
    id: "gh-xle-awd-blue-stratford-new",
    status: "new",
    year: 2026, make: "Toyota", model: "Grand Highlander", trim: "XLE AWD",
    powertrain: "gas",
    lp100: 9.8,
    depPct: 12,
    accidents: "n/a (new vehicle)",
    colour: "Blue", colourOk: true,
    seating: "bench", pano: false,
    km: 90, vin: null, stock: null,
    dealer: "Strickland's Stratford Toyota", sellerType: "franchise", city: "Stratford, ON", distanceKm: 134,
    msrp: 54921, price: 54921, fees: 4368, incentives: 0,
    financeApr: 5.69, financeMonths: 60,
    leaseApr: 6.89, leaseMonths: 24, residualPct: 70, kmPerYear: 24000,
    residualSource: "quoted", carfax: null,
    url: "https://www.autotrader.ca/offers/toyota-grand-highlander-xle-awd-gasoline-blue-cat_ma70gr202248-575bba68-3fbe-4130-9ca9-d602ed706ee6", evidence: [], verified: "listing",
    notes: [
      "BENCH-SEAT PATH. XLE is the trim that gives you the 8-seat second-row bench you asked for. Cheapest new Grand Highlander in the colour rule.",
      "XLE does NOT get the panoramic roof — it has a regular moonroof. This is the bench-vs-pano trade you asked to see both sides of.",
      "134 km out (Stratford). Round trip is a real cost and it is priced into the all-in figure.",
      "Gas, not hybrid. A GH Hybrid XLE in blue exists (Bolton, 28 km) but at $62,987 with 20,005 km — see below."
    ]
  },
  {
    id: "gh-xle-awd-silver-guelph-new",
    status: "new",
    year: 2026, make: "Toyota", model: "Grand Highlander", trim: "XLE AWD (Moonroof pkg)",
    powertrain: "gas",
    lp100: 9.8,
    depPct: 12,
    accidents: "n/a (new vehicle)",
    colour: "Silver", colourOk: true,
    seating: "bench", pano: false,
    km: 25, vin: null, stock: null,
    dealer: "Guelph Toyota", sellerType: "franchise", city: "Guelph, ON", distanceKm: 75,
    msrp: 57255, price: 57255, fees: 4368, incentives: 0,
    financeApr: 5.69, financeMonths: 60,
    leaseApr: 6.89, leaseMonths: 24, residualPct: 70, kmPerYear: 24000,
    residualSource: "quoted", carfax: null,
    url: "https://www.autotrader.ca/offers/toyota-grand-highlander-xle-awd-moonroof-liftgate-carplay-gasoline-silver-cat_ma70gr202248tr17571-3eab1662-d11e-4e8e-91eb-863177971d2e", evidence: [], verified: "listing",
    notes: [
      "BENCH-SEAT PATH, silver, new, 59 km closer than the Stratford car but $2,334 more.",
      "Listed with Moonroof + power liftgate + CarPlay. Confirm whether that moonroof is the panoramic — if it is, this single unit satisfies BOTH bench and pano and jumps to the top of the Grand Highlander list.",
      "This is the highest-value question in the whole scan. It needs a dealer call or a VIN window-sticker pull."
    ]
  },
  {
    id: "gh-hybrid-xle-bolton-used",
    status: "used",
    year: 2025, make: "Toyota", model: "Grand Highlander Hybrid", trim: "XLE AWD",
    powertrain: "hybrid",
    lp100: 6.8,
    depPct: 10.5,
    accidents: "not stated",
    colour: "Blue", colourOk: true,
    seating: "bench", pano: false,
    km: 20005, vin: null, stock: null,
    dealer: "Bolton Toyota", sellerType: "franchise", city: "Bolton, ON", distanceKm: 28,
    msrp: 61000, price: 62987, fees: 1540, incentives: 0,
    financeApr: 5.69, financeMonths: 60,
    leaseApr: 6.89, leaseMonths: 24, residualPct: 60, kmPerYear: 24000,
    residualSource: "estimated", carfax: null,
    url: "https://www.autotrader.ca/offers/toyota-grand-highlander-rid-xle-awd-heat-steer-wireless-carplay-android-gas-electric-hybrid-blue-cat_ma70gr202248va2866tr17571-2a57bfe5-af70-4cee-b5ff-2451ab05bb51", evidence: [], verified: "listing",
    notes: [
      "Ticks the most boxes at once: Grand Highlander + HYBRID + bench (XLE) + blue + only 28 km away.",
      "PRICED BADLY. $62,987 with 20,005 km, when a NEW gas GH XLE in blue is $54,921. You are paying an $8,066 premium over new for a used car — the hybrid powertrain does not justify that gap.",
      "Heated steering, wireless CarPlay. Good spec, wrong number. Counter in the mid-$50Ks or walk.",
      "This is the unit to watch: if it sits unsold for another month the price should break."
    ]
  },
  {
    id: "gh-limited-blue-toronto-new",
    status: "new",
    year: 2026, make: "Toyota", model: "Grand Highlander", trim: "Limited",
    powertrain: "gas",
    lp100: 9.8,
    depPct: 12,
    accidents: "n/a (new vehicle)",
    colour: "Blue", colourOk: true,
    seating: "captains", pano: true,
    km: 11, vin: null, stock: null,
    dealer: "Scarborough Toyota", sellerType: "franchise", city: "Toronto, ON", distanceKm: 11,
    msrp: 62412, price: 62412, fees: 4368, incentives: 0,
    financeApr: 5.69, financeMonths: 60,
    leaseApr: 6.89, leaseMonths: 24, residualPct: 70, kmPerYear: 24000,
    residualSource: "quoted", carfax: null,
    url: "https://www.autotrader.ca/offers/toyota-grand-highlander-limited-incoming-august-gasoline-blue-cat_ma70gr202248-261fc219-2bcf-47d5-beb4-4d29580e7106", evidence: [], verified: "listing",
    notes: [
      "PANORAMIC PATH. Limited is where the panoramic roof lives — and with it, second-row CAPTAIN'S CHAIRS, not the bench.",
      "Blue, 11 km away, incoming August. Closest Grand Highlander to you.",
      "This is the direct counterpart to the Stratford XLE: pano + captains at $62,412 vs bench + regular roof at $54,921. The panoramic roof is costing you ~$7,500 and the bench seat.",
      "At $62,412 + fees + HST this blows the $500 biweekly ceiling on a 60-month finance even with $15,000 down. It only fits as a 24-month lease."
    ]
  },
  

  /* ============ $30-45K BAND (AutoTrader) — the ceiling that unlocks hybrids ============
   * At $30-40K every low-km car was gas. Lifting the cap to $45K puts low-km
   * RAV4 Hybrids and even a 2026 CR-V Hybrid in range. This band is where the
   * money actually works. */
  {
    id: "at-rav4-hybrid-xle-2025-blue",
    status: "used",
    year: 2025, make: "Toyota", model: "RAV4 Hybrid", trim: "XLE AWD (moonroof)",
    powertrain: "hybrid",
    lp100: 6,
    accidents: "not stated",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 22243, vin: null, stock: null,
    dealer: "Thornhill Toyota", sellerType: "franchise", city: "Toronto area, ON", distanceKm: 11,
    msrp: 45000, price: 41888, fees: 1540, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 60, kmPerYear: 24000,
    residualSource: "estimated", carfax: null, depPct: 8.5,
    url: "https://www.autotrader.ca/offers/toyota-rav4-moonroof-smart-key-push-start-hybrid-xle-awd-gas-electric-hybrid-blue-cat_ma70gr201439va2399tr11876-7bcac281-7837-4ef8-b64c-6d9d908a1102",
    evidence: [], verified: "listing",
    notes: [
      "THIS IS THE CAR YOU ORIGINALLY ASKED FOR. RAV4 Hybrid, blue, XLE with moonroof, 22,243 km, 11 km from you, $41,888. It did not exist under a $40K cap — $45K is what buys it.",
      "~14,800 km/yr. Unremarkable odometer, nothing to verify.",
      "Best depreciation resistance of anything in your list (~8.5%/yr) AND it is the hybrid you wanted. Those two rarely coincide.",
      "Roughly 1.4 yr basic warranty and 3.4 yr powertrain remaining; hybrid components covered to 8yr/160,000 km.",
      "Get the Carfax before committing — this is an AutoTrader dealer listing, so unlike Clutch the report is not automatically included."
    ]
  },
  
  
  

  /* ============ $30-40K USED BUDGET (Clutch) — Honda / Toyota / Subaru ============
   * $15,000 down, balance at 7.99% over 48 months, possibly cleared in 24.
   * All GAS unless flagged. At this budget you get low km OR a hybrid, not both. */
  {
    id: "clutch-crv-sport-2025-silver",
    status: "used",
    year: 2025, make: "Honda", model: "CR-V", trim: "Sport AWD",
    powertrain: "gas",
    lp100: 8,
    accidents: "\"Clean claim history\" per Clutch Carfax.",
    colour: "Silver", colourOk: true,
    seating: null, pano: false,
    km: 23097, vin: "2HKRS4H56SH114602", stock: null,
    dealer: "Clutch.ca (delivered)", sellerType: "clutch", city: "Online / delivered", distanceKm: 0,
    msrp: 42000, price: 38590, fees: 120, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 55, kmPerYear: 24000,
    residualSource: "estimated", carfax: true, depPct: 10.5,
    url: "https://www.clutch.ca/vehicles/106839",
    evidence: [], verified: "listing",
    notes: [
      "THE HEDGE PICK. One model year old, so the steepest year of depreciation is already behind it — it holds ~85% of as-new price, vs the RAV4's abnormal 97%.",
      "GAS, NOT HYBRID — confirmed twice: Clutch lists the fuel as Gasoline and the VIN (2HKRS4H56...) matches the non-hybrid CR-V. In Canada the 2025 'Sport' badge is normally the hybrid trim, so this listing contradicts the usual lineup. CONFIRM THE POWERTRAIN BEFORE BUYING — a hybrid is worth meaningfully more than a gas car at the same price.",
      "MSRP set to ~$42,000 on the assumption it is a gas AWD. If it turns out to be the hybrid, as-new was ~$45,500 and this is a considerably better deal than the table shows.",
      "Clean claim history. Balance of Honda 3yr/60,000 km basic warranty remains on kilometres.",
      "Pick this over the RAV4 if you might keep the car longer than two years, or if you don't want to carry the RAV4's used-market-premium risk."
    ]
  },
  {
    id: "clutch-crv-sport-2025-blue",
    status: "used",
    year: 2025, make: "Honda", model: "CR-V", trim: "Sport AWD",
    powertrain: "gas",
    lp100: 8,
    accidents: "not stated",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 27908, vin: "2HKRS4H55SH100481", stock: null,
    dealer: "Clutch.ca (delivered)", sellerType: "clutch", city: "Online / delivered", distanceKm: 0,
    msrp: 42000, price: 39290, fees: 120, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 55, kmPerYear: 24000,
    residualSource: "estimated", carfax: true, depPct: 10.5,
    url: "https://www.clutch.ca/vehicles/115591",
    evidence: [], verified: "listing",
    notes: [
      "Blue twin of the silver 2025 CR-V Sport. $700 more for 4,811 more km — the silver car is the better buy of the two.",
      "Also confirmed GAS by VIN (2HKRS4H55...) and by Clutch's fuel field. Same powertrain caveat applies."
    ]
  },
  {
    id: "clutch-rav4-xle-2024-blue",
    status: "used",
    year: 2024, make: "Toyota", model: "RAV4", trim: "XLE AWD",
    powertrain: "gas",
    lp100: 7.8,
    accidents: "No accidents (CARFAX Canada #71006303: Ontario 'Normal' branding, no US history, monotonic odometer) — but see transmission-check note.",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 33057, vin: "2T3R1RFV0RW451529", stock: null,
    dealer: "Clutch.ca (delivered)", sellerType: "clutch", city: "Online / delivered", distanceKm: 0,
    msrp: 40500, price: 39390, fees: 120, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 55, kmPerYear: 24000,
    residualSource: "estimated", carfax: true, depPct: 9,
    inService: 2024.5,          // first service 2024-Jul-03 at 1,024 km (Carfax)
    flag: "TRANSMISSION HISTORY — do not buy unverified",
    url: "https://www.clutch.ca/vehicles/116850",
    evidence: ["CARFAX Canada report #71006303, read 2026-08-04"],
    verified: "carfax",
    notes: [
      "CARFAX READ IN FULL. Odometer is CLEAN: 1,024 (2024-Jul) -> 1,463 -> 1,502 -> 3,433 -> 13,440 -> 22,312 -> 30,054 (2026-May). Monotonic, no rollback, no gaps. Clutch's 33,057 km is 3,003 km past the last reading over ~67 days = ~16,400 km/yr, matching the trend. No accidents, Ontario 'Normal' branding, no US history, not stolen, no open recalls.",
      "BUT: TRANSMISSION CHECKED TWICE INSIDE THE FIRST 1,502 KM. 2024-Aug-16 at 1,320 km 'Drivability/performance checked, Transmission checked'; 2025-Jan-29 at 1,502 km 'Transmission checked' again. Nobody investigates a transmission twice on a nearly-new car unless someone is complaining.",
      "THE ODOMETER SHAPE AGREES: the car covered 478 km in the six months between Aug 2024 and Jan 2025 — it sat. Normal use only begins spring 2025. That is the profile of a car with an early problem that wasn't being driven while it was looked at.",
      "The report also contains the string 'CAMVAP Transmission'. CAMVAP is Canada's warranty-defect arbitration programme and a CAMVAP buyback is a manufacturer-repurchased lemon. That row carries n/a for date and odometer, which is how Carfax renders its GLOSSARY, and the summary panel did not flag a buyback branding — so it is PROBABLY a legend, not a finding. 'Probably' is not good enough when the word beside it matches the component checked twice at 1,300 km.",
      "ACTION BEFORE BUYING: any Toyota dealer can pull the full warranty-claim history by VIN in seconds. Ask in writing — were there transmission repairs or replacements, and has this vehicle ever been subject to a CAMVAP claim? Clean answer = good car. Transmission file = walk, because it will also be harder for YOU to resell in two years.",
      "Dealer-maintained throughout (Richmond Hill Toyota, then Yorkdale Toyota) and Krown rustproofed Nov 2024 by an owner who cared. Clutch Performance Ltd. appears 2025-Jul-21, so Clutch has had this car through once already and it came back within about a year.",
      "In-service mid-2024, so basic warranty (3yr/60,000 km) runs out around mid-2027 — under a year left, NOT the two years the model year implies."
    ]
  },
  {
    id: "clutch-rav4-xle-2022-blue",
    status: "used",
    year: 2022, make: "Toyota", model: "RAV4", trim: "XLE AWD",
    powertrain: "gas",
    lp100: 7.8,
    accidents: "not stated",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 49150, vin: null, stock: null,
    dealer: "Clutch.ca (delivered)", sellerType: "clutch", city: "Online / delivered", distanceKm: 0,
    msrp: 36500, price: 34690, fees: 120, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 55, kmPerYear: 24000,
    residualSource: "estimated", carfax: true, depPct: 8.5,
    url: "https://www.clutch.ca/vehicles/107092",
    evidence: [], verified: "listing",
    notes: [
      "$800 cheaper than the 19,041 km silver RAV4 but with 30,109 MORE kilometres. The silver car is far better value — this one is here to prove it.",
      "Same RAV4 used-market-premium risk: 95% of as-new price after four years."
    ]
  },
  {
    id: "clutch-forester-limited-2024",
    status: "used",
    year: 2024, make: "Subaru", model: "Forester", trim: "Limited AWD",
    powertrain: "gas",
    lp100: 8.5,
    accidents: "not stated",
    colour: "Silver", colourOk: true,
    seating: null, pano: false,
    km: 21357, vin: null, stock: null,
    dealer: "Clutch.ca (delivered)", sellerType: "clutch", city: "Online / delivered", distanceKm: 0,
    msrp: 41000, price: 37590, fees: 120, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 52, kmPerYear: 24000,
    residualSource: "estimated", carfax: true, depPct: 12,
    url: "https://www.clutch.ca/vehicles/118063",
    evidence: [], verified: "listing",
    notes: [
      "Best-equipped low-km Subaru in budget. Symmetrical AWD is genuinely better than the Toyota/Honda systems in snow.",
      "Depreciates faster than either Japanese rival — ~12%/yr vs RAV4's ~8.5%. Over two years that gap is roughly $2,700.",
      "CVT. Subaru's older boxer engines had oil-consumption and head-gasket history; the current generation is much improved, but a Carfax and service history still matter."
    ]
  },
  {
    id: "clutch-crosstrek-conv-2024",
    status: "used",
    year: 2024, make: "Subaru", model: "Crosstrek", trim: "Convenience AWD",
    powertrain: "gas",
    lp100: 8.1,
    accidents: "not stated",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 19712, vin: null, stock: null,
    dealer: "Clutch.ca (delivered)", sellerType: "clutch", city: "Online / delivered", distanceKm: 0,
    msrp: 31500, price: 28990, fees: 120, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 55, kmPerYear: 24000,
    residualSource: "estimated", carfax: true, depPct: 10,
    url: "https://www.clutch.ca/vehicles/117882",
    evidence: [], verified: "listing",
    notes: [
      "CHEAPEST TWO YEARS OF DRIVING in the whole set — but only because it is a smaller, cheaper car. Do not read the low cost as better value; it is less vehicle.",
      "Crosstrek is a compact hatch on stilts, not a compact SUV. Cargo and rear seat are a clear step below CR-V and RAV4. Drive one before you decide the size works.",
      "19,712 km on a 2024, AWD, base-ish trim. If budget discipline matters more than space, this is the honest answer."
    ]
  },
  {
    id: "clutch-crosstrek-onyx-2024",
    status: "used",
    year: 2024, make: "Subaru", model: "Crosstrek", trim: "Onyx AWD",
    powertrain: "gas",
    lp100: 8.1,
    accidents: "not stated",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 26168, vin: null, stock: null,
    dealer: "Clutch.ca (delivered)", sellerType: "clutch", city: "Online / delivered", distanceKm: 0,
    msrp: 34000, price: 30990, fees: 120, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 55, kmPerYear: 24000,
    residualSource: "estimated", carfax: true, depPct: 10.5,
    url: "https://www.clutch.ca/vehicles/119022",
    evidence: [], verified: "listing",
    notes: [
      "Onyx trim adds the better X-MODE, roof rails and a nicer interior over Convenience. $2,000 more for 6,456 more km.",
      "Same size caveat as the other Crosstrek."
    ]
  },
  {
    id: "clutch-outback-limited-2024",
    status: "used",
    year: 2024, make: "Subaru", model: "Outback", trim: "Limited AWD",
    powertrain: "gas",
    lp100: 8.9,
    accidents: "not stated",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 52550, vin: null, stock: null,
    dealer: "Clutch.ca (delivered)", sellerType: "clutch", city: "Online / delivered", distanceKm: 0,
    msrp: 45000, price: 36090, fees: 120, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 50, kmPerYear: 24000,
    residualSource: "estimated", carfax: true, depPct: 12.5,
    url: "https://www.clutch.ca/vehicles/115159",
    evidence: [], verified: "listing",
    notes: [
      "Most car for the money on paper: a $45,000 Outback Limited for $36,090, so the first owner absorbed $8,910 in two years.",
      "That is also the warning — it holds only 80% after two years, the weakest retention of the low-km options. It depreciates fast going in AND going out.",
      "52,550 km is nearly triple the Forester's. Bigger and more comfortable than everything else here for long drives."
    ]
  },
  {
    id: "clutch-venza-limited-2021",
    status: "used",
    year: 2021, make: "Toyota", model: "Venza", trim: "Limited AWD",
    powertrain: "hybrid",
    lp100: 6,
    accidents: "not stated",
    colour: "Silver", colourOk: true,
    seating: null, pano: true,
    km: 71041, vin: null, stock: null,
    dealer: "Clutch.ca (delivered)", sellerType: "clutch", city: "Online / delivered", distanceKm: 0,
    msrp: 48000, price: 35990, fees: 120, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 48, kmPerYear: 24000,
    residualSource: "estimated", carfax: true, depPct: 13,
    url: "https://www.clutch.ca/vehicles/105699",
    evidence: [], verified: "listing",
    notes: [
      "ONE OF ONLY TWO HYBRIDS IN YOUR BUDGET. Venza is hybrid-only in Canada, so this is a genuine Toyota hybrid AWD for $35,990.",
      "Limited trim gets the panoramic roof (Toyota's electrochromic 'Star Gaze' on this generation).",
      "71,041 km and five years old — the trade you make for a hybrid at this price. Toyota hybrid batteries are warranted 8yr/160,000 km, so battery coverage is still live.",
      "Weakest retention here (~75% held, ~13%/yr forward). Buy it to keep, not to flip in two years.",
      "Venza was discontinued after 2024, which softens resale further. Priced in, but worth knowing."
    ]
  },
  {
    id: "clutch-rav4-hybrid-se-2023",
    status: "used",
    year: 2023, make: "Toyota", model: "RAV4 Hybrid", trim: "SE AWD",
    powertrain: "hybrid",
    lp100: 6,
    accidents: "not stated",
    colour: "Silver", colourOk: true,
    seating: null, pano: false,
    km: 72875, vin: null, stock: null,
    dealer: "Clutch.ca (delivered)", sellerType: "clutch", city: "Online / delivered", distanceKm: 0,
    msrp: 42000, price: 35690, fees: 120, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 55, kmPerYear: 24000,
    residualSource: "estimated", carfax: true, depPct: 8.5,
    url: "https://www.clutch.ca/vehicles/108272",
    evidence: [], verified: "listing",
    notes: [
      "THE OTHER HYBRID IN BUDGET, and the better one — RAV4 Hybrid holds value far better than the Venza.",
      "72,875 km is the cost of entry. Toyota basic warranty (3yr/60,000 km) is expired on kilometres; hybrid battery coverage (8yr/160,000 km) is not.",
      "If hybrid is non-negotiable at this budget, this is the pick. If low kilometres matter more, take the 19,041 km gas RAV4 instead."
    ]
  },

  /* ============ CLUTCH.CA (no-haggle used, delivered) ============
   * NOTE Clutch advertises biweekly EXCLUDING HST. Their headline payment is on the
   * pre-tax price, so the real financed payment is ~13% higher. Fees here are the
   * OMVIC fee only (included in their price); HST + licensing are added by our math. */
  {
    id: "clutch-rav4-xle-2022-lowkm",
    status: "used",
    year: 2022, make: "Toyota", model: "RAV4", trim: "XLE",
    powertrain: "gas",
    lp100: 7.8,
    depPct: 8.5,
    accidents: "not stated",
    colour: "Silver", colourOk: true,
    seating: null, pano: false,
    km: 19041, vin: "2T3R1RFV7NC309108", stock: null,
    dealer: "Clutch.ca (delivered)", sellerType: "clutch", city: "Online / delivered", distanceKm: 0,
    msrp: 40000, price: 35490, fees: 120, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 6.89, leaseMonths: 24, residualPct: 55, kmPerYear: 24000,
    residualSource: "estimated", carfax: null,
    url: "https://www.clutch.ca/vehicles/112765",
    evidence: [], verified: "listing",
    notes: [
      "ODOMETER IS THE FIRST THING TO VERIFY. A 2022 RAV4 went on sale in late 2021, so this car is ~4.5 years old. 19,041 km is about 4,200 km/yr against a Canadian average of 15,000-20,000. That is not impossible — a second car, a retiree, or a 2021-22 work-from-home owner all produce this — but it is anomalous enough that it must be PROVEN, not assumed. Pull the Carfax odometer-reading history (Clutch includes it) and check that readings climb steadily across service visits and registrations. Then confirm the physical car agrees: tyres likely still original, minimal wear on the brake pedal rubber, driver's seat bolster and steering wheel. If the Carfax has a multi-year gap with no readings, walk away.",
      "If it checks out, the low mileage is genuinely valuable. If you would rather not do the detective work, the 2024 RAV4 XLE at 33,057 km is the same car two years newer with an unremarkable odometer.",
      "Clutch advertises $243 biweekly, but that EXCLUDES HST and licensing. Financing the tax too puts the real payment near $275. Our table shows the tax-inclusive number.",
      "No dealer to haggle with and no drive to collect — Clutch delivers, so last-mile travel cost is $0. That is worth real money against the 134 km Stratford Grand Highlander.",
      "Gas, not hybrid. XLE, so no leather.",
      "Clutch includes a 10-day money-back window and a Carfax on every unit — this is the one source where the VIN report is guaranteed rather than requested."
    ]
  },
  {
    id: "clutch-rav4-hybrid-xse-2023",
    status: "used",
    year: 2023, make: "Toyota", model: "RAV4 Hybrid", trim: "XSE",
    powertrain: "hybrid",
    lp100: 6,
    depPct: 8.5,
    accidents: "not stated",
    colour: "Silver", colourOk: true,
    seating: null, pano: false,
    km: 43259, vin: "2T35WRFV3PW172931", stock: null,
    dealer: "Clutch.ca (delivered)", sellerType: "clutch", city: "Online / delivered", distanceKm: 0,
    msrp: 48000, price: 43890, fees: 120, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 6.89, leaseMonths: 24, residualPct: 58, kmPerYear: 24000,
    residualSource: "estimated", carfax: null,
    url: "https://www.clutch.ca/vehicles/111237",
    evidence: [], verified: "listing",
    notes: [
      "Hybrid, XSE trim (sporty, above XLE), 43,259 km. Clutch headline $298 biweekly excl. HST.",
      "Compare directly against the 2025 RAV4 Hybrid XLE at $43,900/30,853 km from the AutoTrader sweep — same money, that one is 2 years newer with 12,000 fewer km. The AutoTrader unit wins unless Clutch's warranty and return window matter to you."
    ]
  },
  {
    id: "clutch-highlander-xle-2023",
    status: "used",
    year: 2023, make: "Toyota", model: "Highlander", trim: "XLE",
    powertrain: "gas",
    lp100: 9.5,
    depPct: 10,
    accidents: "not stated",
    colour: "Silver", colourOk: true,
    seating: "bench", pano: false,
    km: 68587, vin: "5TDKDRBH8PS526436", stock: null,
    dealer: "Clutch.ca (delivered)", sellerType: "clutch", city: "Online / delivered", distanceKm: 0,
    msrp: 52000, price: 39490, fees: 120, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 6.89, leaseMonths: 24, residualPct: 50, kmPerYear: 24000,
    residualSource: "estimated", carfax: null,
    url: "https://www.clutch.ca/vehicles/102323",
    evidence: [], verified: "listing",
    notes: [
      "Cheapest three-row in the whole scan at $39,490 — but it is a Highlander, NOT a Grand Highlander. Smaller third row and less cargo behind it; that is the difference you were shopping for.",
      "68,587 km. Outside 'genuinely low mileage'.",
      "Here as the budget three-row floor: if the Grand Highlander numbers don't work, this is what the compromise costs."
    ]
  },

  /* ============ PREMIUM-TRIM ACCIDENT-VERIFIED SWEEP (2026-08-05, AutoTrader live) ============
   * Used RAV4/CR-V Hybrid, PREMIUM trims only (RAV4 Limited/XSE, CR-V Touring/EX-L),
   * silver or blue, <60,000 km, $36-52k, franchise seller. price/km/seller/city read off
   * each listing's <title>; accident wording quoted verbatim from the seller's description.
   * ONLY the Parkway car states "no accidents"; the rest are silent -> accidents:"not stated",
   * which under the buyer's rule means they DO NOT yet qualify until a Carfax is confirmed.
   * msrp / residualPct / depPct are estimates (residualSource:"estimated"). */
  {
    id: "at-crv-touring-hybrid-parkway-2025-blue",
    status: "used",
    year: 2025, make: "Honda", model: "CR-V Hybrid", trim: "Touring AWD",
    powertrain: "hybrid",
    lp100: 6.4,
    depPct: 10.5,
    accidents: "NO ACCIDENTS | HONDA CERTIFIED | OFF LEASE (verbatim, seller listing title).",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 23445, vin: null, stock: null,
    dealer: "Parkway Honda", sellerType: "franchise", city: "North York, ON", distanceKm: 12,
    msrp: 50050, price: 44990, fees: 1540, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 62, kmPerYear: 24000,
    residualSource: "estimated", carfax: true,
    url: "https://www.autotrader.ca/offers/honda-cr-v-touring-no-accidents-honda-certified-off-lease-gas-electric-hybrid-blue-cat_ma31gr200623va2625tr13122-7bc8ae5e-bc08-433d-9217-10209080634e",
    evidence: ["AutoTrader listing read 2026-08-05: title + seller description"], verified: "listing",
    notes: [
      "THE ACCIDENT-VERIFIED PICK. The one premium hybrid in this sweep whose listing states it outright: 'NO ACCIDENTS | HONDA CERTIFIED | OFF LEASE'. Honda Certified means a Honda franchise inspected it and the balance of the certified warranty transfers.",
      "Top CR-V trim (Touring: leather, Bose, moonroof, heated steering, navigation), blue, 23,445 km, $44,990 at Parkway Honda in North York (~12 km).",
      "Off-lease one-owner. Certified history report is included — still read it, but this is the only car here you do not have to chase a Carfax for before it qualifies.",
      "Compare to the RAV4 Limited below: the Honda is cheaper and closer, the RAV4 holds value better. Both are blue premium hybrids under 40,000 km."
    ]
  },
  {
    id: "at-rav4-limited-hybrid-thornhill-2025-blue",
    status: "used",
    year: 2025, make: "Toyota", model: "RAV4 Hybrid", trim: "Limited AWD",
    powertrain: "hybrid",
    lp100: 6.0,
    depPct: 8.5,
    accidents: "not stated",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 36762, vin: null, stock: null,
    dealer: "Thornhill Toyota", sellerType: "franchise", city: "Vaughan, ON", distanceKm: 15,
    msrp: 46150, price: 47888, fees: 1540, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 60, kmPerYear: 24000,
    residualSource: "estimated", carfax: null,
    url: "https://www.autotrader.ca/offers/toyota-rav4-1owner-full-service-history-low-km-hybrid-limited-gas-electric-hybrid-blue-cat_ma70gr201439va2399tr4994-7f2612a9-ba52-467f-ba69-35c9f54deaff",
    evidence: ["AutoTrader listing read 2026-08-05: title + seller description"], verified: "listing",
    notes: [
      "The only PREMIUM-trim RAV4 Hybrid (Limited) in silver or blue inside 200 km. RAV4 Limited is the fully-loaded trim you asked for, blue, 36,762 km, Toyota franchise (Thornhill, ~15 km).",
      "ACCIDENT STATUS NOT STATED. The listing says 'One Previous Owner Only, Complete Service History, Excellent Condition' but never states the car is accident-free. Under the no-accidents rule it DOES NOT QUALIFY until a Carfax confirms it — get that in writing before considering it.",
      "Priced ABOVE MSRP: $47,888 asking against a ~$46,150 as-new Limited sticker. That is the RAV4 used-market premium; negotiate hard or the value is not there.",
      "Ask Thornhill about Toyota Certified — only the brand franchise can Certify, which adds inspection + extended powertrain cover and would also surface the accident history."
    ]
  },
  {
    id: "at-crv-touring-hybrid-signature-2025-silver",
    status: "used",
    year: 2025, make: "Honda", model: "CR-V Hybrid", trim: "Touring AWD",
    powertrain: "hybrid",
    lp100: 6.4,
    depPct: 10.5,
    accidents: "not stated",
    colour: "Silver", colourOk: true,
    seating: null, pano: false,
    km: 52855, vin: null, stock: null,
    dealer: "Signature Honda", sellerType: "franchise", city: "Scarborough, ON", distanceKm: 22,
    msrp: 50050, price: 38999, fees: 1540, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 55, kmPerYear: 24000,
    residualSource: "estimated", carfax: null,
    url: "https://www.autotrader.ca/offers/honda-cr-v-touring-awd-gas-electric-hybrid-silver-cat_ma31gr200623va2625tr13122-4baaf562-256a-40c5-ae02-5b2fb443f58f",
    evidence: ["AutoTrader listing read 2026-08-05: title"], verified: "listing",
    notes: [
      "Cheapest Touring hybrid in the sweep at $38,999 — but 52,855 km, the highest of the keepers (still under the 60,000 km cap). Silver, Honda franchise (Signature, Scarborough).",
      "ACCIDENT STATUS NOT STATED — generic listing, no accident claim. Confirm a Carfax before it qualifies.",
      "Trim confirmed Touring in the title; the description body pastes the gas-CR-V spec blurb, but title and slug both say Gas/Electric Hybrid — trust those. Verify the powertrain on the window sticker anyway."
    ]
  },
  {
    id: "at-crv-touring-hybrid-torontohonda-2024-blue",
    status: "used",
    year: 2024, make: "Honda", model: "CR-V Hybrid", trim: "Touring AWD",
    powertrain: "hybrid",
    lp100: 6.4,
    depPct: 10.5,
    accidents: "not stated",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 39076, vin: null, stock: null,
    dealer: "Toronto Honda", sellerType: "franchise", city: "Toronto, ON", distanceKm: 8,
    msrp: 49000, price: 41500, fees: 1540, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 55, kmPerYear: 24000,
    residualSource: "estimated", carfax: null,
    url: "https://www.autotrader.ca/offers/honda-cr-v-touring-awd-gas-electric-hybrid-blue-cat_ma31gr200623va2625tr13122-e165f0af-7704-4bf4-9b73-9213ef596ad8",
    evidence: ["AutoTrader listing read 2026-08-05: title"], verified: "listing",
    notes: [
      "Touring hybrid, blue, 39,076 km, $41,500 at Toronto Honda (~8 km, closest of the sweep).",
      "ACCIDENT STATUS NOT STATED — Toronto Honda's Market-Value-Pricing listings carry no accident claim. Confirm a Carfax before it qualifies."
    ]
  },
  {
    id: "at-crv-exl-hybrid-torontohonda-2025-blue",
    status: "used",
    year: 2025, make: "Honda", model: "CR-V Hybrid", trim: "EX-L AWD",
    powertrain: "hybrid",
    lp100: 6.4,
    depPct: 10.5,
    accidents: "not stated",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 37352, vin: null, stock: null,
    dealer: "Toronto Honda", sellerType: "franchise", city: "Toronto, ON", distanceKm: 8,
    msrp: 48000, price: 39700, fees: 1540, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 55, kmPerYear: 24000,
    residualSource: "estimated", carfax: null,
    url: "https://www.autotrader.ca/offers/honda-cr-v-ex-l-awd-gas-electric-hybrid-blue-cat_ma31gr200623va2625tr11828-4a20a1d1-7102-4416-9fa9-4348e9670c83",
    evidence: ["AutoTrader listing read 2026-08-05: title"], verified: "listing",
    notes: [
      "EX-L hybrid (the second premium CR-V trim you allow), blue, 37,352 km, $39,700 at Toronto Honda (~8 km).",
      "ACCIDENT STATUS NOT STATED — confirm a Carfax before it qualifies.",
      "EX-L gives leather + moonroof + power seats but not the Touring's Bose/nav. $5,290 cheaper than the Parkway Touring for that trade."
    ]
  },
  {
    id: "at-crv-exl-hybrid-torontohonda-2026-blue",
    status: "used",
    year: 2026, make: "Honda", model: "CR-V Hybrid", trim: "EX-L AWD",
    powertrain: "hybrid",
    lp100: 6.4,
    depPct: 10.5,
    accidents: "not stated",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 8041, vin: null, stock: null,
    dealer: "Toronto Honda", sellerType: "franchise", city: "Toronto, ON", distanceKm: 8,
    msrp: 48000, price: 47300, fees: 1540, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 62, kmPerYear: 24000,
    residualSource: "estimated", carfax: null,
    url: "https://www.autotrader.ca/offers/honda-cr-v-ex-l-awd-gas-electric-hybrid-blue-cat_ma31gr200623va2625tr11828-dab5689e-0f8a-47af-abfa-46bba4b2c009",
    evidence: ["AutoTrader listing read 2026-08-05: title"], verified: "listing",
    notes: [
      "Near-new: 2026 EX-L hybrid, blue, only 8,041 km, $47,300 at Toronto Honda — a demo/early resale a hair under new-car money. Get the in-service date; the warranty clock started before you buy.",
      "ACCIDENT STATUS NOT STATED — confirm a Carfax before it qualifies.",
      "At $47,300 with 8,041 km vs a Parkway Touring at $44,990/23,445 km, the Touring is the better car for less; this one's only edge is the lower odometer."
    ]
  },
  {
    id: "at-crv-exl-hybrid-pickering-2024-blue",
    status: "used",
    year: 2024, make: "Honda", model: "CR-V Hybrid", trim: "EX-L AWD",
    powertrain: "hybrid",
    lp100: 6.4,
    depPct: 10.5,
    accidents: "not stated",
    colour: "Canyon River Blue", colourOk: true,
    seating: null, pano: false,
    km: 31156, vin: null, stock: null,
    dealer: "Pickering Honda", sellerType: "franchise", city: "Pickering, ON", distanceKm: 28,
    msrp: 48000, price: 38211, fees: 1540, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 55, kmPerYear: 24000,
    residualSource: "estimated", carfax: true,
    url: "https://www.autotrader.ca/offers/honda-cr-v-ex-l-awd-leather-sunroof-carplay-gas-electric-hybrid-blue-cat_ma31gr200623va2625tr11828-b4ae5c63-01d9-44fe-b144-f8488c0a1284",
    evidence: ["AutoTrader listing read 2026-08-05: title + seller description"], verified: "listing",
    notes: [
      "Honda Certified EX-L hybrid, Canyon River Blue, 31,156 km, $38,211 at Pickering Honda (~28 km). Cheapest EX-L hybrid in the sweep.",
      "ACCIDENT STATUS NOT STATED VERBATIM. The listing says 'Certified' and 'ONE OWNER, serviced and maintained at dealership' but never the words 'no accidents'. Certification implies a clean-ish history, but confirm the Carfax accident line explicitly before it qualifies.",
      "Do not trust the accidentFree/accident-chip flag on the AutoTrader page — that field reads true on every listing (checked against an independent lot that makes no such claim), so it is a site default, not this car's record."
    ]
  },
  {
    id: "at-crv-exl-hybrid-roadsport-2026-blue",
    status: "used",
    year: 2026, make: "Honda", model: "CR-V Hybrid", trim: "EX-L AWD",
    powertrain: "hybrid",
    lp100: 6.4,
    depPct: 10.5,
    accidents: "not stated",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 19797, vin: null, stock: null,
    dealer: "Roadsport Honda", sellerType: "franchise", city: "Scarborough, ON", distanceKm: 22,
    msrp: 48000, price: 47990, fees: 1540, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 62, kmPerYear: 24000,
    residualSource: "estimated", carfax: true,
    url: "https://www.autotrader.ca/offers/honda-cr-v-ex-l-honda-certified-with-7yrs-160k-warranty-gas-electric-hybrid-blue-cat_ma31gr200623va2625tr11828-1bc5d3df-5a9d-4076-8a2b-0236b4dee9e9",
    evidence: ["AutoTrader listing read 2026-08-05: title + seller description"], verified: "listing",
    notes: [
      "Honda Certified EX-L hybrid with 7yr/160,000 km certified warranty, blue, 19,797 km, $47,990 at Roadsport Honda (~22 km). Longest warranty of the sweep.",
      "ACCIDENT STATUS NOT STATED VERBATIM — Roadsport's boilerplate promises 'no hidden surprises' and 'upfront about vehicle history' but does not state the accident line. Confirm the Carfax explicitly before it qualifies.",
      "$47,990 with 19,797 km is near new-car money; the certified 7yr/160k warranty is the reason to consider it over the cheaper EX-Ls."
    ]
  },
  {
    id: "at-crv-exl-hybrid-roadsport-2024-blue",
    status: "used",
    year: 2024, make: "Honda", model: "CR-V Hybrid", trim: "EX-L AWD",
    powertrain: "hybrid",
    lp100: 6.4,
    depPct: 10.5,
    accidents: "not stated",
    colour: "Blue", colourOk: true,
    seating: null, pano: false,
    km: 31143, vin: null, stock: null,
    dealer: "Roadsport Honda", sellerType: "franchise", city: "Scarborough, ON", distanceKm: 22,
    msrp: 48000, price: 41490, fees: 1540, incentives: 0,
    financeApr: 7.99, financeMonths: 48,
    leaseApr: 8.99, leaseMonths: 24, residualPct: 55, kmPerYear: 24000,
    residualSource: "estimated", carfax: true,
    url: "https://www.autotrader.ca/offers/honda-cr-v-ex-l-honda-certified-with-7yrs-160k-warranty-gas-electric-hybrid-blue-cat_ma31gr200623va2625tr11828-86e70b00-ebc5-48b9-984f-7371f8a8047f",
    evidence: ["AutoTrader listing read 2026-08-05: title"], verified: "listing",
    notes: [
      "Honda Certified EX-L hybrid, blue, 31,143 km, $41,490 at Roadsport Honda (~22 km). The 2024 sibling of the car above — 11,346 more km for $6,500 less.",
      "ACCIDENT STATUS NOT STATED VERBATIM — confirm the Carfax accident line before it qualifies."
    ]
  }

];

/* Scan coverage note — colour is the binding constraint.
 * Of the 98 newest hybrid CR-Vs within 200km: black 38, white 26, grey 10,
 * silver 6, blue 3, red 5, green 1. Silver+blue = 9% of live inventory.
 * Grand Highlander is the exception: 19 of 65 units (29%) are silver or blue.
 */
