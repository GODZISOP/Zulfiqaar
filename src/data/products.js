export const categories = [
  {
    id: 'automotive',
    name: 'Automotive Essentials',
    description: 'Keep your car road-ready with reliable automotive care, detailing, and travel essentials.',
    buttonText: 'Shop Automotive',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    itemCount: 1
  },
  {
    id: 'baby-care',
    name: 'Baby Care Favorites',
    description: 'Thoughtfully selected baby products and gentle daily essentials for caring families.',
    buttonText: 'Shop Baby Care',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80',
    itemCount: 1
  },
  {
    id: 'beauty-care',
    name: 'Beauty & Personal Care',
    description: 'Premium skincare, grooming essentials, and rejuvenating self-care routines.',
    buttonText: 'Shop Beauty',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    itemCount: 1
  },
  {
    id: 'grocery-gourmet',
    name: 'Grocery & Gourmet',
    description: 'Curated pantry staples, artisan snacks, and gourmet food selections for every table.',
    buttonText: 'Shop Grocery',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    itemCount: 1
  },
  {
    id: 'home-everyday',
    name: 'Home & Everyday Finds',
    description: 'Practical, stylish solutions for comfortable interiors, modern kitchen, and daily living.',
    buttonText: 'Shop Home',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    itemCount: 1
  }
];

export const products = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    name: 'Beauty and Personal Care',
    category: 'beauty-care',
    categoryName: 'Beauty and Personal Care',
    sku: 'MKB-BTY-016',
    price: '₨ 13',
    priceNumeric: 13,
    packSize: 'Daily Wellness & Glow Pack',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 3400,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 62,
    priceNote: 'Dermatologist Recommended',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    description: 'Find beauty and personal care favorites for simple routines, fresh starts, and a little extra time for yourself.',
    longDescription: 'MKB VENTURES GLOBAL LLC curates Beauty and Personal Care products designed to elevate your everyday morning and evening rituals. Clean formulations, skin-nourishing botanical extracts, and restorative ingredients that leave your skin radiant and fresh.',
    features: [
      'Nourishing, cruelty-free formulas with active botanical extracts',
      'Suitable for all skin types including sensitive skin',
      'Lightweight, non-greasy textures with subtle natural fragrances',
      'Eco-conscious recyclable packaging',
      'Long-lasting hydration and protective moisture barriers'
    ],
    tiers: [
      { range: '1 - 29 Units', price: '₨ 13', discount: 'Base Price' },
      { range: '30 - 149 Units', price: '₨ 11', discount: '15% OFF' },
      { range: '150+ Units', price: '₨ 9', discount: '30% Salon/Wholesale' }
    ],
    specs: [
      { label: 'Skin Type', value: 'All Skin Types' },
      { label: 'Formulation', value: 'Paraben-Free & Organic Active Extracts' },
      { label: 'Packaging', value: 'UV-Protected Eco Bottle' },
      { label: 'Shelf Life', value: '24 Months' }
    ]
  },
  {
    id: 4,
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
  },
  {
    id: 5,
    name: 'Home and Everyday Finds',
    category: 'home-everyday',
    categoryName: 'Home and Everyday Finds',
    sku: 'MKB-HOM-020',
    price: '₨ 32',
    priceNumeric: 32,
    packSize: 'Home Essentials Collection',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 1850,
    minOrder: '1 Unit',
    rating: 5.0,
    reviewCount: 49,
    priceNote: 'Premium Quality Tested',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
    description: 'Bring comfort and convenience home with useful finds for the kitchen, household, pets, office, outdoors, and more.',
    longDescription: 'Curated by MKB VENTURES GLOBAL LLC, Home and Everyday Finds combines functional modern design with durable craftsmanship. Perfect for home organization, smart living, office workspaces, and outdoor comfort.',
    features: [
      'Modern ergonomic design suited for contemporary interiors',
      'High-durability construction built for reliable daily household use',
      'Space-saving and multi-functional storage and living utility',
      'Easy assembly and straightforward low-maintenance cleaning',
      'Arrives safely packaged in reinforced drop-tested retail carton'
    ],
    tiers: [
      { range: '1 - 19 Units', price: '₨ 32', discount: 'Standard Price' },
      { range: '20 - 79 Units', price: '₨ 27', discount: '15% OFF' },
      { range: '80+ Units', price: '₨ 23', discount: '28% Bulk Distribution' }
    ],
    specs: [
      { label: 'Material', value: 'Premium Alloy & Eco Composite' },
      { label: 'Application', value: 'Indoor, Kitchen, Office & Outdoor' },
      { label: 'Warranty', value: '1 Year Full Replacement Guarantee' },
      { label: 'Assembly', value: 'Pre-assembled / Tool-free Setup' }
    ]
  }
];
