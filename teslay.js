/* Used Tesla Model Y — dual motor, white/red/blue, Ontario. Scanned live 2026-09-01.
 * AutoTrader: 196 used Model Y in 300 km of Toronto; 52 above $44,000. Clutch: 25.
 * Colour split on the AutoTrader page-1 sample: white 30, black 16, grey 27, blue 10, red 4.
 * RED IS ALMOST NON-EXISTENT: the only two red dual-motor cars run 78,000 and 84,152 km.
 *
 * FSD HARDWARE — the thing that actually decides this purchase:
 *   HW4/AI4 began shipping ~Jan 2023; HW3 cars were still being built into early 2023.
 *   Tesla has confirmed HW3 cars CANNOT run FSD v14 and can never do Unsupervised FSD.
 *   They get a cut-down "v14 Lite" instead. So 2024+ is the safe filter; 2023 is a coin
 *   flip that must be settled by build date / VIN with Tesla before you buy.
 * FSD LICENCE:
 *   Tesla ended one-time FSD purchases on 2026-02-14 (was C$11,000). It is now
 *   subscription-only at C$99/month in Canada. FSD bought BEFORE that date generally
 *   rides with the VIN on a private or third-party dealer sale — but Tesla routinely
 *   strips it from cars sold out of its own used inventory. VERIFY PER CAR: the
 *   touchscreen under Software should read "Full Self-Driving Capability".
 *
 * [y, trim, price, km, colour, hw, sellerType, seller, accidents, url, note]
 *   hw: "HW4" | "HW3" | "check" ;  sellerType: franchise | crossbrand | clutch | private */
window.TESLAY = [
 [2025,"Performance AWD",59500,19500,"white","HW4","private","Private Seller, Caledon Village","not stated",
  "https://www.autotrader.ca/offers/tesla-model-y-performance-electric-white-cat_ma51520gr201431-4e3f9f75-23d7-428f-bac0-d7b93638477b",
  "Best car in the set on every metric that is not a rule: newest, lowest km, HW4 beyond doubt. Fails your seller rule outright — private sale, no recourse."],
 [2024,"Long Range AWD",54798,35490,"blue","HW4","crossbrand","Parkway Nissan, Hamilton","not stated",
  "https://www.autotrader.ca/offers/tesla-model-y-long-range-electric-blue-cat_ma51520gr201431tr15328-02e7482d-8df1-4ab2-91d3-f789f31b0486",
  "VIN 7SAYGDEE8RF065853 — Fremont-built, position 10 'R' confirms 2024, so HW4. A Nissan store selling a Tesla; no Tesla tech, no certification. Note that NO franchise dealer can service a Tesla, so the cross-brand objection is weaker here than it was on the Honda."],
 [2024,"Long Range Dual Motor AWD",51999,63675,"blue","HW4","franchise","AutoTrader dealer","not stated",
  "https://www.autotrader.ca/offers/tesla-model-y-long-range-dual-motor-awd-electric-blue-cat_ma51520gr201431tr15328-82eeee0b-dc1b-4fe3-87b5-80a1ac6f8459",
  "HW4 and the cheapest 2024, but 63,675 km is not 'low mileage'."],
 [2023,"Long Range AWD",49999,33025,"white","check","franchise","AutoTrader dealer","not stated",
  "https://www.autotrader.ca/offers/tesla-model-y-long-range-electric-white-cat_ma51520gr201431tr15328-23795d1c-987e-43b4-960f-cc7909b5ebe6",
  "2023 straddles the HW3/HW4 cutover. Worth chasing ONLY if the build date confirms HW4 — otherwise you are buying a car locked out of FSD v14 forever."],
 [2022,"Long Range AWD",45998,27681,"white","HW3","franchise","AutoTrader dealer","clean Carfax claimed",
  "https://www.autotrader.ca/offers/tesla-model-y-long-range-awd-clean-carfax-electric-white-cat_ma51520gr201431tr15328-9eb85639-282c-4c63-9715-cbd1fd9ec0cb",
  "Low km and a clean-Carfax claim, but 2022 means HW3 — no FSD v14, ever. Fails the one requirement you actually named."],
 [2023,"Long Range AWD",44790,44242,"unknown","check","clutch","Clutch.ca","not stated",
  "https://www.clutch.ca/vehicles/125667",
  "VIN LRWYGDEE2PC136615 — Shanghai-built, 2023. Single owner, Clutch flags 'under 15,000 km/yr'. Passes your seller rule cleanly. But accidents are NOT stated, colour is not published, and the HW3/HW4 question is open."],
 [2023,"Long Range AWD",45690,53558,"unknown","check","clutch","Clutch.ca","not stated",
  "https://www.clutch.ca/vehicles/122700",
  "VIN LRWYGDEEXPC267176 — Shanghai-built, 2023, single owner. Same three unknowns as the car above, plus 9,316 more km."]
];
