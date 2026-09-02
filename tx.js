/* Lexus TX — ONTARIO, rescanned live 2026-09-02 from postcode M3A 1B2.
 * Pool: 42 used TX (31 gas 350, 8 hybrid 500h) + 37 new within 25 km of M3A.
 * NEW STOCK IS 48 GAS TO 2 HYBRID province-wide — the 500h is allocation-limited,
 * so the used hybrids below are the only realistic way to get one without a queue.
 *
 * WARRANTY — the number that decides this car. The previous version of this file had
 * it WRONG: it used a 100,000 km cap, which is Genesis's figure, not Lexus's.
 *   Lexus basic           = 4 years / 80,000 km
 *   Lexus Certified (CPO) = 6 years / 120,000 km
 * At ~29,400 km/yr the km cap always binds, so CERTIFICATION IS WORTH 1.36 EXTRA YEARS —
 * more than a low odometer buys. A CPO 2024 with 25,000 km out-covers an uncertified
 * 2026 with 11 km. That inversion picks the car.
 *
 * PACKAGE LADDER, from Lexus Canada's own Build & Price (2026 TX 350 base $73,256.92):
 *   Luxury +$0 (the BASE package) · Ultra Luxury +$2,753 · Executive 7-Pass +$11,006
 *   F SPORT 3 +$11,629 · Executive 6-Pass +$11,756
 * So Luxury -> Ultra Luxury is only $2,753. Package is NOT the reason to pick one of
 * these cars; price and warranty are. The base TX 350 already includes the panoramic
 * roof, 20" alloys, front ventilated + front/rear heated seats, POWER-FOLDING 3rd row,
 * wireless CarPlay and the 14" screen.
 * Fuel: TX 350 = 11.5 L/100km, TX 500h = 8.6. Both take PREMIUM.
 * [y, engine, trim, price, km, colour, certified, isNew, sixSeat, distKm, city, url, note] */
window.TXCARS = [
 /* ---------- gas 350, used ---------- */
 [2024,"350","Ultra Luxury",66900,25022,"Cloudburst Grey",1,0,0,6,"Lexus on the Park, Toronto",
  "https://www.autotrader.ca/offers/lexus-tx-350-ultra-luxury-pkg-lexus-certified-awd-gasoline-grey-cat_ma43gr202144mt12047tr478970-38227ac6-5f6c-4510-bf55-42c10651619d",
  "THE BUY. Lexus Certified, top trim, at the dealer nearest Railside Rd — test drive and buy in one visit. Against their OWN new Luxury at $72,208 it is $5,308 cheaper, a higher grade, and carries 0.51 yr more cover."],
 [2024,"350","Ultra Luxury",63688,35415,"black",1,0,0,25,"Ontario Lexus dealer",
  "https://www.autotrader.ca/offers/lexus-tx-ultra-luxury-pkg-7passenger-heated-leather-seats-c-gasoline-black-cat_ma43gr202144mt12047tr478970-e5d98476-b7a6-4e89-acf4-395e7c2aa3a2",
  "Cheapest sensible car here: $3,212 under the grey Ultra for 0.35 fewer warranty years. 7-passenger, heated leather."],
 [2026,"350","Ultra Luxury (DEMO)",70588,11,"red",0,0,0,25,"Don Valley North Lexus, Markham",
  "https://www.autotrader.ca/offers/lexus-tx-tx-350-awd-gasoline-red-cat_ma43gr202144mt12047-6b88a4c5-a418-412f-a10a-04920b336aeb",
  "Odd one: 11 km, TOP trim, priced BELOW every new TX in Ontario. But it is a demo, NOT certified (so the 80,000 km cap applies) and the interior is black. Confirm the in-service date — the clock started when the dealer registered it."],
 [2025,"350","Ultra Luxury",71995,1200,"silver",0,0,0,25,"Ontario Lexus dealer",
  "https://www.autotrader.ca/offers/lexus-tx-ultra-luxury-gasoline-silver-cat_ma43gr202144mt12047-6c51b734-26b5-4b9c-803b-7a0885792726",
  "1,200 km and silver, but uncertified — so it costs more than the CPO cars AND covers you for less time."],
 [2024,"350","Luxury + pano",63588,21531,"n/a",0,0,0,25,"Ontario Lexus dealer",
  "https://www.autotrader.ca/offers/lexus-tx-luxury-panoroof-gasoline-cat_ma43gr202144mt12047tr478970-d0f39fcf-39b3-458d-9db5-a6f13550b011",
  "Lowest-km uncertified Luxury. The $63,688 CPO Ultra is $100 more for a higher trim AND more cover. No contest."],
 [2024,"350","Luxury",61995,32000,"black",0,0,0,25,"Ontario Lexus dealer",
  "https://www.autotrader.ca/offers/lexus-tx-luxury-gasoline-black-cat_ma43gr202144mt12047tr478970-27cd1e74-cb7b-4a04-972d-17d12237d9d5",""],
 [2024,"350","Luxury",58888,49344,"grey",0,0,0,25,"Ontario Lexus dealer",
  "https://www.autotrader.ca/offers/lexus-tx-tx-350-luxury-gasoline-grey-cat_ma43gr202144mt12047tr478970-8a14d8cf-85d1-4d23-8dfd-584d40a35810",
  "THE TRAP. Cheapest TX in Ontario and it is not a deal: uncertified at 49,344 km against an 80,000 km cap leaves ~12 months of warranty. You save $8,012 and buy a car that goes uncovered next autumn."],

 [2025,"350","Ultra Luxury 7-Pass",63800,66623,"white",1,0,0,25,"Ontario Lexus dealer",
  "https://www.autotrader.ca/offers/lexus-tx-ultra-luxury-7-passenger-gasoline-white-cat_ma43gr202144mt12047-2207ea80-52b1-4aeb-bb9f-440bb01137b3",
  "THE ~$64K 2025 — check the odometer before the badge. Certified and top package, but 66,623 km against the 120,000 km CPO cap leaves only 1.82 yr. Cheap-looking and short-covered, same trap as the $58,888."],
 [2025,"350","Luxury + cooled seats",66666,31981,"black",1,0,0,25,"Ontario Lexus dealer",
  "https://www.autotrader.ca/offers/lexus-tx-luxury-package-cooling-seats-gasoline-black-cat_ma43gr202144mt12047-af460857-ec71-425e-8e6d-ea67b9fbc1d8",
  "Certified 2025, 2.99 yr of cover. Luxury is the BASE package but only $2,753 below Ultra when new — the grey Ultra at $66,900 is $234 more for a higher package and 0.42 yr more cover."],
 /* ---------- hybrid 500h, used ---------- */
 [2025,"500h","F Sport",74990,27710,"silver",1,0,0,25,"Ontario Lexus dealer",
  "https://www.autotrader.ca/offers/lexus-tx-500h-f-sport-3-like-new-gas-electric-hybrid-silver-cat_ma43gr202144mt12048-16aa8d2f-83e0-400e-9ef6-c27f55d19ee6",
  "BEST HYBRID VALUE. Certified, silver, $3,005 under the grey F Sport for 0.75 fewer warranty years. 366 hp on 8.6 L/100km, and $15,235 below the cheapest NEW 500h in Ontario ($90,225)."],
 [2025,"500h","F Sport",77995,5770,"grey",1,0,0,24,"Brampton",
  "https://www.autotrader.ca/offers/lexus-tx-500h-f-sport-awd-navi-pano-roof-apple-carplay-gas-electric-hybrid-grey-cat_ma43gr202144mt12048-947adc0b-0f53-471e-abd9-7bbc5bdb79f7",
  "Certified, 5,770 km, the longest coverage of any TX here. $12,230 below the cheapest new hybrid — and with only 2 new 500h in all of Ontario, used is the only way to skip the allocation queue."],
 [2024,"500h","F Sport",70995,58747,"white",0,0,0,25,"Ontario dealer",
  "https://www.autotrader.ca/offers/lexus-tx-500h-f-sport-3-toit-pano-mark-levinson-navi-gas-electric-hybrid-white-cat_ma43gr202144mt12048-983bed37-a64d-4f8f-aea3-ac77cbed45a1",
  "Cheapest hybrid, but uncertified at 58,747 km — under 9 months of cover at your mileage. Pano roof, Mark Levinson."],
 /* ---------- new, for reference only ---------- */
 [2026,"350","Luxury",72208,35,"silver",0,1,0,6,"Lexus on the Park, Toronto",
  "https://www.autotrader.ca/offers/lexus-tx-350-luxury-awd-gasoline-silver-cat_ma43gr202144-9f714381-36fd-4d55-8ac8-59355fd6d411",
  "NEW, at your nearest store. Their own certified Ultra above is $5,308 cheaper, a higher trim, and better covered."],
 [2026,"350","Luxury",71809,74,"silver",0,1,0,25,"Don Valley North Lexus, Markham",
  "https://www.autotrader.ca/offers/lexus-tx-tx-350-gasoline-silver-cat_ma43gr202144-5ee974a2-cd05-4826-868f-357c535776f5",
  "NEW, cheapest of the 37 within 25 km of M3A."]
];
