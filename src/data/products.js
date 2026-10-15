export const categories = [
  {
    id: 'home-kitchen',
    name: 'Home & Kitchen',
    description: 'Practical, premium solutions for comfortable interiors, modern cookware, and everyday kitchen essentials.',
    buttonText: 'Shop Kitchen',
    link: 'https://mkbventuresgloballlc.com/home/',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    itemCount: 1
  },
  {
    id: 'beauty-care',
    name: 'Beauty Care',
    description: 'Premium skincare, grooming essentials, and rejuvenating personal self-care routines.',
    buttonText: 'Shop Beauty',
    link: 'https://mkbventuresgloballlc.com/product-category/beauty-care/',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    itemCount: 1
  },
  {
    id: 'pet-supplies',
    name: 'Pet Supplies',
    description: 'High-grade pet essentials, grooming accessories, feeding tools, and daily pet care supplies.',
    buttonText: 'Shop Pets',
    link: 'https://mkbventuresgloballlc.com/product-category/pet-supplies/',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    itemCount: 1
  }
];

export const products = [
  {
    id: 1,
    name: 'Home & Kitchen Essentials',
    category: 'home-kitchen',
    categoryName: 'Home & Kitchen',
    sku: 'MKB-KIT-010',
    price: '₨ 28',
    priceNumeric: 28,
    packSize: 'Premium Kitchen & Cookware Set',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 2500,
    minOrder: '1 Unit',
    rating: 5.0,
    reviewCount: 46,
    priceNote: 'Wholesale & Retail Pricing Available',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    link: 'https://mkbventuresgloballlc.com/home/',
    description: 'Equip modern kitchens with premium non-stick cookware, food prep essentials, and heat-resistant silicone culinary accessories.',
    longDescription: 'Curated by MKB VENTURES GLOBAL LLC, Home & Kitchen Essentials provides durable, food-grade cookware, ergonomic knife sets, and space-saving organizers crafted for everyday family meals and professional kitchens.',
    features: [
      'Food-grade BPA-free materials and durable heat-resistant construction',
      'Ergonomic handles designed for comfort, grip, and safe cooking',
      'Easy to clean, stain-resistant, and dishwasher safe components',
      'Sleek modern aesthetics suited for contemporary kitchen countertops',
      'Commercial grade testing and guaranteed food safety standards'
    ],
    tiers: [
      { range: '1 - 19 Units', price: '₨ 28', discount: 'Retail Base' },
      { range: '20 - 99 Units', price: '₨ 24', discount: '14% Wholesale' },
      { range: '100+ Units', price: '₨ 20', discount: '28% Volume Tier' }
    ],
    specs: [
      { label: 'Category', value: 'Home & Kitchen Cookware' },
      { label: 'Material', value: 'Food-Grade Stainless & Silicone' },
      { label: 'Dishwasher Safe', value: 'Yes' },
      { label: 'Warranty', value: '1 Year Manufacturer Guarantee' }
    ]
  },
  {
    id: 2,
    name: 'Beauty Care Essentials',
    category: 'beauty-care',
    categoryName: 'Beauty Care',
    sku: 'MKB-BTY-016',
    price: '₨ 18',
    priceNumeric: 18,
    packSize: 'Daily Glow & Skincare Ritual Kit',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 3400,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 62,
    priceNote: 'Dermatologist Approved',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    link: 'https://mkbventuresgloballlc.com/product-category/beauty-care/',
    description: 'Find beauty and personal care favorites for simple routines, fresh starts, and a little extra time for yourself.',
    longDescription: 'MKB VENTURES GLOBAL LLC curates Beauty Care products designed to elevate your everyday morning and evening rituals. Clean formulations, skin-nourishing botanical extracts, and restorative ingredients that leave your skin radiant and fresh.',
    features: [
      'Nourishing, cruelty-free formulas with active botanical extracts',
      'Suitable for all skin types including sensitive skin',
      'Lightweight, non-greasy textures with subtle natural fragrances',
      'Eco-conscious recyclable packaging',
      'Long-lasting hydration and protective moisture barriers'
    ],
    tiers: [
      { range: '1 - 29 Units', price: '₨ 18', discount: 'Base Price' },
      { range: '30 - 149 Units', price: '₨ 15', discount: '16% OFF' },
      { range: '150+ Units', price: '₨ 12', discount: '33% Salon/Wholesale' }
    ],
    specs: [
      { label: 'Skin Type', value: 'All Skin Types' },
      { label: 'Formulation', value: 'Paraben-Free & Organic Active Extracts' },
      { label: 'Packaging', value: 'UV-Protected Eco Bottle' },
      { label: 'Shelf Life', value: '24 Months' }
    ]
  },
  {
    id: 3,
    name: 'Pet Supplies & Care Kit',
    category: 'pet-supplies',
    categoryName: 'Pet Supplies',
    sku: 'MKB-PET-022',
    price: '₨ 22',
    priceNumeric: 22,
    packSize: 'All-in-One Pet Grooming & Feeding Kit',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 1950,
    minOrder: '1 Unit',
    rating: 5.0,
    reviewCount: 51,
    priceNote: 'Veterinarian Recommended',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80',
    link: 'https://mkbventuresgloballlc.com/product-category/pet-supplies/',
    description: 'Care for your furry companions with reliable grooming tools, slow-feeder bowls, safe toys, and hygienic pet accessories.',
    longDescription: 'Selected with unconditional pet safety in mind by MKB VENTURES GLOBAL LLC, Pet Supplies brings non-toxic, highly durable grooming, feeding, and comfort accessories designed to keep dogs and cats active, healthy, and happy.',
    features: [
      'Non-toxic, chew-resistant BPA-free food grade materials',
      'Ergonomic de-shedding combs and gentle silicone bath scrubbers',
      'Non-slip stainless steel feeding bowls with splash guards',
      'Designed for dogs and cats of all breeds and sizes',
      'Easy to disinfect and built for high-energy pet play'
    ],
    tiers: [
      { range: '1 - 19 Units', price: '₨ 22', discount: 'Retail Base' },
      { range: '20 - 79 Units', price: '₨ 18', discount: '18% Wholesale' },
      { range: '80+ Units', price: '₨ 15', discount: '31% Bulk Distribution' }
    ],
    specs: [
      { label: 'Pet Type', value: 'Dogs, Cats & Small Pets' },
      { label: 'Material', value: 'Food-Grade Stainless & Eco-Silicone' },
      { label: 'Safety', value: '100% Non-Toxic & Chew-Resistant' },
      { label: 'Warranty', value: '1 Year Full Replacement Guarantee' }
    ]
  },
  {
    id: 4,
    name: 'Automotive Essentials',
    category: 'automotive',
    categoryName: 'Automotive Essentials',
    sku: 'MKB-AUTO-012',
    price: '₨ 25',
    priceNumeric: 25,
    packSize: 'Complete Roadside & Car Care Kit',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 1450,
    minOrder: '1 Unit',
    rating: 5.0,
    reviewCount: 38,
    priceNote: 'Wholesale & Retail Pricing Available',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80',
    link: 'https://mkbventuresgloballlc.com/',
    description: 'Keep your car ready for the road with practical automotive essentials selected for everyday care, organization, and convenience.',
    longDescription: 'Curated by MKB VENTURES GLOBAL LLC, Automotive Essentials provides reliable tools, maintenance accessories, and organized storage solutions engineered for modern commuters and long road trips.',
    features: [
      'Comprehensive roadside emergency and maintenance utility',
      'Compact, durable organizer bag with reinforced carry handles',
      'High-grade materials tested for temperature extremes and vehicle safety',
      'Suitable for sedans, SUVs, trucks, and commercial fleet use',
      'Standard manufacturer-backed quality assurance'
    ],
    tiers: [
      { range: '1 - 19 Units', price: '₨ 25', discount: 'Retail Base' },
      { range: '20 - 99 Units', price: '₨ 22', discount: '12% Wholesale' },
      { range: '100+ Units', price: '₨ 19', discount: '24% Volume Tier' }
    ],
    specs: [
      { label: 'Category', value: 'Automotive Maintenance & Accessories' },
      { label: 'Package Type', value: 'Heavy-Duty Storage Case' },
      { label: 'Compatibility', value: 'Universal Vehicle Fit' },
      { label: 'Warranty', value: '1 Year Manufacturer Warranty' }
    ]
  },
  {
    id: 5,
    name: 'Baby Care Favorites',
    category: 'baby-care',
    categoryName: 'Baby Care Favorites',
    sku: 'MKB-BABY-014',
    price: '₨ 19',
    priceNumeric: 19,
    packSize: 'Gentle Care Bundle',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 2100,
    minOrder: '1 Unit',
    rating: 5.0,
    reviewCount: 56,
    priceNote: 'Wholesale Bulk Tier Available',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80',
    link: 'https://mkbventuresgloballlc.com/',
    description: 'Make little moments easier with thoughtful baby products, from daily care basics to handy items for busy families.',
    longDescription: 'Selected with utmost gentleness and pediatric safety in mind by MKB VENTURES GLOBAL LLC, Baby Care Favorites includes gentle grooming essentials, hypoallergenic nursery comforts, and safe accessories that simplify parenting every day.',
    features: [
      'Hypoallergenic, BPA-free, and dermatologically tested safe materials',
      'Ultra-soft textures designed specifically for delicate infant skin',
      'Convenient travel-friendly packaging and easy-to-clean construction',
      'Trusted by parents and certified to international child safety benchmarks',
      'Ergonomic, easy-grip designs for seamless everyday feeding and care'
    ],
    tiers: [
      { range: '1 - 24 Units', price: '₨ 19', discount: 'Standard Price' },
      { range: '25 - 99 Units', price: '₨ 16', discount: '15% Bulk Order' },
      { range: '100+ Units', price: '₨ 14', discount: '26% Pallet Rate' }
    ],
    specs: [
      { label: 'Age Group', value: '0 - 36 Months' },
      { label: 'Safety Standard', value: 'BPA-Free / Pediatric Approved' },
      { label: 'Care Instructions', value: 'Washable & Sanitizable' },
      { label: 'Origin', value: 'Certified Global Sourcing' }
    ]
  },
  {
    id: 6,
    name: 'Grocery and Gourmet',
    category: 'grocery-gourmet',
    categoryName: 'Grocery and Gourmet',
    sku: 'MKB-GRO-018',
    price: '₨ 10',
    priceNumeric: 10,
    packSize: 'Pantry Fresh Box',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 4200,
    minOrder: '1 Unit',
    rating: 5.0,
    reviewCount: 74,
    priceNote: 'Wholesale & Household Tier Available',
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
    link: 'https://mkbventuresgloballlc.com/',
    description: 'Stock your pantry with grocery and gourmet food picks for everyday meals, snacks, and special treats.',
    longDescription: 'Sourced from verified farms and quality-certified producers, MKB VENTURES GLOBAL LLC brings you Grocery and Gourmet essentials that bring flavor, wholesome nutrition, and convenience to your dining table.',
    features: [
      'Carefully selected premium pantry staples and gourmet ingredients',
      'Airtight nitrogen-flushed packaging ensures ultimate freshness',
      'No artificial preservatives or unnecessary fillers',
      'Ideal for home cooking, gourmet hospitality, and bulk supply',
      'Standardized international quality and hygiene certifications'
    ],
    tiers: [
      { range: '1 - 49 Units', price: '₨ 10', discount: 'Regular Price' },
      { range: '50 - 199 Units', price: '₨ 8.50', discount: '15% Bulk' },
      { range: '200+ Units', price: '₨ 7.20', discount: '28% Commercial MOQ' }
    ],
    specs: [
      { label: 'Storage', value: 'Cool, Dry Environment' },
      { label: 'Dietary', value: '100% Halal & Vegetarian Friendly' },
      { label: 'Freshness Guarantee', value: 'Export Sealed Packaging' },
      { label: 'Packaging', value: 'Food-Grade Eco Pouch' }
    ]
  }
];
