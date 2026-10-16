export const categories = [
  {
    id: 'home-living',
    name: 'Home & Modern Living',
    description: 'Precision-engineered cookware, ergonomic kitchen organizers, and contemporary lifestyle essentials.',
    buttonText: 'Shop Home & Living',
    link: '#',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'personal-care',
    name: 'Personal Care & Fragrances',
    description: 'Dermatologist-grade skincare, prestige botanical elixirs, and bespoke grooming rituals.',
    buttonText: 'Shop Personal Care',
    link: '#',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'smart-electronics',
    name: 'Smart Tech & Gadgets',
    description: 'Next-generation audio accessories, high-speed GaN power hubs, and modern electronics.',
    buttonText: 'Shop Electronics',
    link: '#',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'gourmet-pantry',
    name: 'Gourmet & Pantry Staples',
    description: 'Artisanal organic harvest, single-estate tea reserves, and authentic international ingredients.',
    buttonText: 'Shop Gourmet',
    link: '#',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  }
];

export const products = [
  {
    id: 1,
    name: 'Artisan Chef Cookware & Culinary Master Set',
    category: 'home-living',
    categoryName: 'Home & Modern Living',
    sku: 'ZLF-CKW-101',
    price: '$ 42',
    priceNumeric: 42,
    packSize: '10-Piece Hard-Anodized Induction Cookware Kit',
    availability: 'In Stock (Ready for Dispatch)',
    stockUnits: 3200,
    minOrder: '1 Master Unit',
    rating: 5.0,
    reviewCount: 68,
    priceNote: 'Direct Factory & Bulk Wholesale Tier Available',
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Equip modern kitchens with multi-layer granite non-stick coating, rapid heat-dispersion bases, and ergonomic cool-touch handles.',
    longDescription: 'Curated by ZULFEQUAR GLOBAL LLC, the Artisan Chef Cookware Set merges commercial durability with refined aesthetics. Crafted with food-grade die-cast aluminum and a stainless induction plate, it ensures effortless culinary performance on gas, electric, and induction stovetops.',
    features: [
      'Multi-layer non-stick surface, 100% free of PFOA, lead, and cadmium',
      'Heavy-gauge aluminum core for rapid, uniform heat distribution without hot spots',
      'Ergonomic cast stainless steel handles with heat-resistant silicone grips',
      'Tempered glass lids with steam ventilation for moisture retention',
      'Commercial-grade durability certified for international export benchmarks'
    ],
    tiers: [
      { range: '1 - 19 Units', price: '$ 42', discount: 'Retail Base' },
      { range: '20 - 99 Units', price: '$ 36', discount: '14% Wholesale' },
      { range: '100+ Units', price: '$ 30', discount: '28% Commercial Pallet' }
    ],
    specs: [
      { label: 'Category', value: 'Cookware & Kitchenware' },
      { label: 'Material', value: 'Die-Cast Aluminum & Induction Base' },
      { label: 'Stovetop Compatibility', value: 'Induction, Gas, Electric, Ceramic' },
      { label: 'Dishwasher Safe', value: 'Yes (Hand wash recommended)' },
      { label: 'Warranty', value: '2 Year Commercial Guarantee' }
    ]
  },
  {
    id: 2,
    name: 'Minimalist Ultrasonic Ceramic Aroma Diffuser',
    category: 'home-living',
    categoryName: 'Home & Modern Living',
    sku: 'ZLF-LIV-102',
    price: '$ 26',
    priceNumeric: 26,
    packSize: 'Sculpted Ceramic Mist Device with Ambient Warm Glow',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 2800,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 42,
    priceNote: 'Volume Tier Pricing',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Transform home ambiance with whisper-quiet ultrasonic atomization, handcrafted matte ceramic housing, and continuous natural fragrance.',
    longDescription: 'ZULFEQUAR GLOBAL LLC supplies premium wellness and lifestyle home hardware. This sculptural ultrasonic diffuser features a 280ml water reservoir, automatic shutoff safety mechanisms, and soft LED halo lighting suitable for bedrooms, executive offices, and luxury spas.',
    features: [
      'Whisper-quiet ultrasonic wave technology operating at under 20dB',
      'Handcrafted artisan matte ceramic cover with sleek modern contours',
      'Waterless auto-shutoff mechanism prevents overheating and dry burning',
      'Dual mist settings: 8 hours continuous or 16 hours intermittent operation',
      'BPA-free reservoir compatible with pure essential oils'
    ],
    tiers: [
      { range: '1 - 24 Units', price: '$ 26', discount: 'Standard Price' },
      { range: '25 - 99 Units', price: '$ 21', discount: '19% Bulk Discount' },
      { range: '100+ Units', price: '$ 17', discount: '34% Master Carton' }
    ],
    specs: [
      { label: 'Reservoir Capacity', value: '280 ml' },
      { label: 'Power Source', value: 'USB-C Universal Interface' },
      { label: 'Housing Material', value: 'Handmade Matte Ceramic & BPA-Free PP' },
      { label: 'Coverage Area', value: 'Up to 350 sq. ft.' }
    ]
  },
  {
    id: 3,
    name: 'Oud Royale Botanical Beard & Grooming Elixir',
    category: 'personal-care',
    categoryName: 'Personal Care & Fragrances',
    sku: 'ZLF-OUD-201',
    price: '$ 24',
    priceNumeric: 24,
    packSize: '50ml Amber Dropper Bottle (Gift Packaged)',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 4100,
    minOrder: '1 Unit',
    rating: 5.0,
    reviewCount: 89,
    priceNote: 'Barbershop & Salon Wholesale Available',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Nourish hair and beard fibers with cold-pressed Moroccan argan oil, golden jojoba, and rare Cambodian agarwood oud extract.',
    longDescription: 'Selected and formulated under strict botanical safety standards by ZULFEQUAR GLOBAL LLC. The Oud Royale Elixir delivers intense hydration without greasy residue, softening coarse textures while releasing an enigmatic, warm fragrance profile of smoky wood and amber.',
    features: [
      '100% natural cold-pressed organic carrier oils with authentic oud essence',
      'Non-greasy, fast-absorbing formula that soothes underlying dry skin',
      'Promotes follicle vitality, tames frizz, and imparts a natural sheen',
      'UV-protective dark amber glass packaging preserves bioactive potency',
      'Free from sulfates, parabens, phthalates, and synthetic alcohol'
    ],
    tiers: [
      { range: '1 - 29 Units', price: '$ 24', discount: 'Base Price' },
      { range: '30 - 119 Units', price: '$ 19', discount: '20% Salon Tier' },
      { range: '120+ Units', price: '$ 15', discount: '37% Wholesale MOQ' }
    ],
    specs: [
      { label: 'Volume', value: '50ml / 1.7 fl. oz.' },
      { label: 'Fragrance Profile', value: 'Smoky Oud, Warm Amber & Cedarwood' },
      { label: 'Key Actives', value: 'Organic Argan Oil, Jojoba & Vitamin E' },
      { label: 'Shelf Life', value: '30 Months' }
    ]
  },
  {
    id: 4,
    name: 'Hydra-Restore Bio-Peptide Facial Care Set',
    category: 'personal-care',
    categoryName: 'Personal Care & Fragrances',
    sku: 'ZLF-SKN-202',
    price: '$ 29',
    priceNumeric: 29,
    packSize: '3-Piece Skincare Treatment Regimen',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 3600,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 77,
    priceNote: 'Dermatologist Tested & Approved',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Restore cellular radiance with triple hyaluronic acid serum, peptide barrier defense cream, and gentle amino foaming cleanser.',
    longDescription: 'Curated by ZULFEQUAR GLOBAL LLC for premier beauty distributors and modern retail chains. Clinically calibrated to fortify the skin barrier, boost natural elasticity, and deliver deep 48-hour cellular hydration for all skin phototypes.',
    features: [
      'Triple-weight hyaluronic acid molecules penetrate deep epidermis layers',
      'Copper tri-peptides stimulate natural collagen synthesis and resilience',
      'Hypoallergenic, dermatologist-tested formula safe for reactive skin',
      'Eco-conscious luxury glass pump containers reduce plastic footprint',
      'Cruelty-free, vegan certified formulation'
    ],
    tiers: [
      { range: '1 - 19 Units', price: '$ 29', discount: 'Single Unit Price' },
      { range: '20 - 79 Units', price: '$ 23', discount: '20% Retailer Tier' },
      { range: '80+ Units', price: '$ 18', discount: '38% Master Carton' }
    ],
    specs: [
      { label: 'Skin Type', value: 'All Skin Types (including sensitive)' },
      { label: 'Formulation', value: 'Peptides, Niacinamide & Multi-HA' },
      { label: 'Packaging', value: 'Vacuum Airless Pump Jars' },
      { label: 'Safety Standard', value: 'FDA & GMP Certified Facility' }
    ]
  },
  {
    id: 5,
    name: 'AuraPro ANC Spatial Wireless Studio Headphones',
    category: 'smart-electronics',
    categoryName: 'Smart Tech & Gadgets',
    sku: 'ZLF-AUD-301',
    price: '$ 58',
    priceNumeric: 58,
    packSize: 'Over-Ear ANC Headset with Hard Protective Travel Case',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 2100,
    minOrder: '1 Unit',
    rating: 5.0,
    reviewCount: 94,
    priceNote: 'Wholesale Electronics Tier Available',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Immerse in studio-grade acoustic clarity with hybrid active noise cancellation, custom 40mm beryllium drivers, and 45-hour playback.',
    longDescription: 'Imported and distributed by ZULFEQUAR GLOBAL LLC. The AuraPro wireless headphone is calibrated for discerning professionals, travelers, and audiophiles. Features quad-microphone ENC for crystal clear conference calls and memory-foam ear cushions wrapped in breathable protein leather.',
    features: [
      'Hybrid Active Noise Cancellation filters up to 96% of low-frequency ambient sounds',
      'Custom-tuned 40mm titanium diaphragm drivers produce punchy bass and crystalline highs',
      '45-hour continuous battery life with quick-charge (10 mins = 5 hours playback)',
      'Multipoint Bluetooth 5.3 connection seamlessly toggles between laptop and phone',
      'Ultra-plush ergonomic memory foam cushions for fatigue-free all-day wear'
    ],
    tiers: [
      { range: '1 - 14 Units', price: '$ 58', discount: 'Base Wholesale' },
      { range: '15 - 59 Units', price: '$ 48', discount: '17% Distributor' },
      { range: '60+ Units', price: '$ 39', discount: '32% Bulk Pallet' }
    ],
    specs: [
      { label: 'Bluetooth Version', value: '5.3 Dual-Mode Low Latency' },
      { label: 'Battery Capacity', value: '800 mAh (Up to 45h Playtime)' },
      { label: 'Charging Input', value: 'USB-C Fast Charging (1.5h full)' },
      { label: 'Warranty', value: '1 Year Full Replacement Guarantee' }
    ]
  },
  {
    id: 6,
    name: 'HyperCharge 65W GaN Multi-Port Fast Charger',
    category: 'smart-electronics',
    categoryName: 'Smart Tech & Gadgets',
    sku: 'ZLF-PWR-302',
    price: '$ 22',
    priceNumeric: 22,
    packSize: '3-Port GaN Wall Adapter (2x USB-C + 1x USB-A)',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 4800,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 63,
    priceNote: 'High Velocity Retail Ready',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Power laptops, tablets, and smartphones simultaneously with cutting-edge Gallium Nitride (GaN III) semiconductor architecture.',
    longDescription: 'Engineered for international commerce and modern mobility by ZULFEQUAR GLOBAL LLC. 50% smaller than legacy silicon bricks with intelligent dynamic power allocation and comprehensive over-voltage, temperature, and short-circuit protection.',
    features: [
      'Next-gen GaN III semiconductor technology delivers cooler, faster charging',
      '65W maximum Power Delivery (PD 3.0 / PPS / QC 4+) charges MacBook Pro to 50% in 30 mins',
      'Simultaneous 3-device rapid charging with smart dynamic current allocation',
      'Foldable prongs and universal 100-240V international voltage compatibility',
      'Certified by CE, FCC, RoHS, and UL safety standards'
    ],
    tiers: [
      { range: '1 - 29 Units', price: '$ 22', discount: 'Retail Base' },
      { range: '30 - 119 Units', price: '$ 17.50', discount: '20% Volume' },
      { range: '120+ Units', price: '$ 13.80', discount: '37% Wholesale Carton' }
    ],
    specs: [
      { label: 'Total Output', value: '65W Max' },
      { label: 'Ports', value: '2x USB-C (PD 3.0) + 1x USB-A (QC 3.0)' },
      { label: 'Input Voltage', value: '100-240V ~ 50/60Hz 1.5A' },
      { label: 'Protection', value: 'Over-Current, Over-Voltage, Temp Guard' }
    ]
  },
  {
    id: 7,
    name: 'Saffron Gold Single-Origin Royal Reserve Tea',
    category: 'gourmet-pantry',
    categoryName: 'Gourmet & Pantry Staples',
    sku: 'ZLF-TEA-401',
    price: '$ 19',
    priceNumeric: 19,
    packSize: '250g Airtight Embossed Metal Caddy',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 5500,
    minOrder: '1 Master Unit',
    rating: 5.0,
    reviewCount: 112,
    priceNote: 'Export Grade Certified Halal',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Handpicked mountain highland black tea infused with whole Kashmiri saffron threads, cardamom pods, and organic dried rose petals.',
    longDescription: 'ZULFEQUAR GLOBAL LLC procures direct from sustainable highland tea estates. Our royal saffron blend undergoes traditional artisanal drying and nitrogen-sealed packaging to preserve maximum essential oils, delivering an amber brew with majestic aroma.',
    features: [
      '100% single-estate whole leaf black tea with authentic Grade A saffron',
      'Airtight embossed collector metal tin with internal double seal for freshness',
      'Rich in natural polyphenols and heart-healthy antioxidants',
      'Zero artificial flavors, chemical fragrances, or filler ingredients',
      '100% Halal certified, vegan, and non-GMO verified'
    ],
    tiers: [
      { range: '1 - 39 Units', price: '$ 19', discount: 'Standard Price' },
      { range: '40 - 149 Units', price: '$ 15.50', discount: '18% Retail Pack' },
      { range: '150+ Units', price: '$ 12.20', discount: '35% Export Tier' }
    ],
    specs: [
      { label: 'Net Weight', value: '250g / 8.8 oz' },
      { label: 'Ingredients', value: 'Highland Black Tea, Kashmiri Saffron, Cardamom' },
      { label: 'Packaging', value: 'Double-Sealed Food-Grade Metal Caddy' },
      { label: 'Shelf Life', value: '24 Months' }
    ]
  },
  {
    id: 8,
    name: 'Cold-Pressed Extra Virgin Olive Oil Reserve',
    category: 'gourmet-pantry',
    categoryName: 'Gourmet & Pantry Staples',
    sku: 'ZLF-OIL-402',
    price: '$ 21',
    priceNumeric: 21,
    packSize: '750ml Dark UV-Protective Marasca Bottle',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 4300,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 84,
    priceNote: 'Restaurant & Wholesale Bulk Rates',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'First cold-pressed single estate extra virgin olive oil with low acidity (<0.2%), grassy fruity notes, and a peppery polyphenol finish.',
    longDescription: 'Brought directly to commercial dining establishments and premium grocers by ZULFEQUAR GLOBAL LLC. Harvested by hand within 24 hours of pressing, our EVOO retains high levels of oleic acid and natural vitamin E, ideal for dressings, finishing, and healthy cooking.',
    features: [
      'First cold extraction strictly below 24°C preserves delicate antioxidants',
      'Ultra-low acidity (<0.2%) certifying top international premium EVOO tier',
      'Bottled in UV-coated dark green glass with anti-drip pourer spout',
      'Rich in oleocanthal and mono-unsaturated fatty acids for wellness',
      'Traceable single-estate harvest with batch testing certificates'
    ],
    tiers: [
      { range: '1 - 24 Units', price: '$ 21', discount: 'Single Bottle' },
      { range: '25 - 99 Units', price: '$ 17', discount: '19% Wholesale Case' },
      { range: '100+ Units', price: '$ 13.50', discount: '35% Commercial Pallet' }
    ],
    specs: [
      { label: 'Net Volume', value: '750ml / 25.4 fl. oz.' },
      { label: 'Acidity', value: '< 0.2% at bottling' },
      { label: 'Extraction', value: 'First Cold Mechanical Press' },
      { label: 'Origin', value: 'Mediterranean Single-Estate Certified' }
    ]
  }
];
