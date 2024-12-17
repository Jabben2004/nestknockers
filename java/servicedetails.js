// Sample data for demonstration
const serviceProviders = [
    { 
      name: "Coolair PH", 
      category: "AC Check-up", 
      rating: 4.5, 
      priceRange: [1200, 5000], 
      image: "resources/images/servicesimages/coolair.png",
      address: "123 Cool St., Taguig City, Metro Manila",
      description: "Professional air conditioning check-up and maintenance services to ensure optimal performance and longevity. Our team of experts conducts thorough inspections and precise diagnostics for all AC models.",
      specificServices: [
        { name: "AC Diagnostic", priceFactor: 0.2 },
        { name: "Freon Top-up", priceFactor: 0.15 },
        { name: "Filter Cleaning", priceFactor: 0.1 },
        { name: "Cooling Efficiency Test", priceFactor: 0.1 },
        { name: "Thermostat Calibration", priceFactor: 0.1 },
        { name: "Compressor Check", priceFactor: 0.2 },
        { name: "Electrical System Inspection", priceFactor: 0.15 }
      ]
    },
    { 
      name: "Breezefix Makati", 
      category: "AC Check-up", 
      rating: 4.3,
      priceRange: [1200, 7500],
      image: "resources/images/servicesimages/breezefix.png", 
      address: "456 Air Ave., Makati City, Metro Manila",
      description: "Reliable and efficient AC check-up and tune-up services aimed at keeping your air conditioning system in top condition. We specialize in early detection and repair of issues to prevent costly breakdowns.",
      specificServices: [
        { name: "Full System Inspection", priceFactor: 0.25 },
        { name: "Freon Leak Detection", priceFactor: 0.2 },
        { name: "Fan Motor Check", priceFactor: 0.1 },
        { name: "Thermostat Adjustment", priceFactor: 0.1 },
        { name: "Duct Cleaning", priceFactor: 0.15 },
        { name: "Drainage Inspection", priceFactor: 0.1 },
        { name: "Electrical Safety Test", priceFactor: 0.1 }
      ]
    },
    {
      name: "Chillmaster Services",
      category: "AC Check-up",
      rating: 4.6,
      priceRange: [1300, 6000],
      image: "resources/images/servicesimages/chillmaster.png",
      address: "789 Chill Blvd., Pasig City, Metro Manila",
      description: "Reliable and efficient AC check-up and tune-up services aimed at keeping your air conditioning system in top condition. We specialize in early detection and repair of issues to prevent costly breakdowns.",
      specificServices: [
        { name: "AC Diagnostic", priceFactor: 0.2 },
        { name: "Freon Top-up", priceFactor: 0.15 },
        { name: "Filter Cleaning", priceFactor: 0.1 },
        { name: "Cooling Efficiency Test", priceFactor: 0.1 },
        { name: "Thermostat Calibration", priceFactor: 0.1 },
        { name: "Compressor Check", priceFactor: 0.2 },
        { name: "Electrical System Inspection", priceFactor: 0.15 }
      ]

    },
    // Electric
    {
      name: "PowerUp PH",
      category: "Electrical",
      rating: 4.7,
      priceRange: [1000, 5500],
      image: "resources/images/servicesimages/powerup.png",
      address: "12 Voltage St., Quezon City, Metro Manila",
      description: "Expert electricians specializing in residential and commercial electrical services. Offering a wide range of services including installations, repairs, and maintenance.",
      specificServices: [
        { name: "Electrical Maintenance", priceFactor: 0.3, description: "Regular maintenance checks and tune-ups for optimal performance." },
        { name: "Installation", priceFactor: 0.4, description: "Professional installation of new electrical fixtures and systems." },
        { name: "Repairs", priceFactor: 0.3, description: "Quick and efficient repair of electrical faults and breakdowns." }
      ]
    },
    {
      name: "Voltcare Manila",
      category: "Electrical",
      rating: 4.5,
      priceRange: [1200, 6000],
      image: "resources/images/servicesimages/voltcare.png",
      address: "34 Electric Rd., Mandaluyong City, Metro Manila",
      description: "Skilled electricians for homes and businesses, providing top-notch electrical solutions.",
      specificServices: [
        { name: "Electrical Installation", priceFactor: 0.4, description: "Installation of new electrical outlets, switches, and fixtures." },
        { name: "Wiring Repair", priceFactor: 0.3, description: "Repair of faulty wiring and electrical circuits." },
        { name: "Circuit Checks", priceFactor: 0.3, description: "Thorough inspection and testing of electrical systems." }
      ]
    },
    {
      name: "Circuitfix",
      category: "Electrical",
      rating: 4.4,
      priceRange: [1500, 5000],
      image: "resources/images/servicesimages/circuitfix.png",
      address: "56 Bright Ave., Pasay City, Metro Manila",
      description: "Reliable electrical repair services with a focus on customer satisfaction.",
      specificServices: [
        { name: "Fuse Replacement", priceFactor: 0.2, description: "Quick and efficient replacement of faulty fuses." },
        { name: "Lighting Installation", priceFactor: 0.3, description: "Professional installation of various lighting fixtures and systems." },
        { name: "Safety Checks", priceFactor: 0.5, description: "Comprehensive safety inspections to identify potential hazards." }
      ]
    },
  //Plumbing
  {
    name: "Pipemasters PH",
    category: "Plumbing",
    rating: 4.4,
    priceRange: [1200, 6000],
    image: "resources/images/servicesimages/pipemasters.png",
    address: "21 Pipe St., Manila, Metro Manila",
    description: "Professional plumbing services specializing in leak repairs, pipe installation, and drain cleaning, ensuring reliable solutions to prevent future issues.",
    specificServices: [
      { name: "Leak Detection", priceFactor: 0.25 },
      { name: "Pipe Installation", priceFactor: 0.45 },
      { name: "Drain Cleaning", priceFactor: 0.2 },
      { name: "Fixture Replacement", priceFactor: 0.1 }
    ]
  },
  {
    name: "FlowPro Services",
    category: "Plumbing",
    rating: 4.5,
    priceRange: [1000, 5500],
    image: "resources/images/servicesimages/flowpro.png",
    address: "45 Flow Rd., Makati City, Metro Manila",
    description: "Experienced plumbing team offering comprehensive services including sewer line repair, water heater installation, and fixture replacement for both residential and commercial properties.",
    specificServices: [
      { name: "Sewer Line Repair", priceFactor: 0.3 },
      { name: "Water Heater Installation", priceFactor: 0.35 },
      { name: "Fixture Replacement", priceFactor: 0.15 },
      { name: "Pipe Inspection", priceFactor: 0.2 }
    ]
  },
  {
    name: "FixFlow PH",
    category: "Plumbing",
    rating: 4.6,
    priceRange: [1100, 6500],
    image: "resources/images/servicesimages/fixflow.png",
    address: "78 Aqua Blvd., Quezon City, Metro Manila",
    description: "Trusted plumbing service provider focused on efficient solutions, including toilet repair, pipe relining, and emergency services for urgent plumbing issues.",
    specificServices: [
      { name: "Toilet Repair", priceFactor: 0.2 },
      { name: "Pipe Relining", priceFactor: 0.4 },
      { name: "Emergency Plumbing", priceFactor: 0.3 },
      { name: "Water Pressure Testing", priceFactor: 0.1 }
    ]
  },
  //Painting
  {
    name: "ColorCraft PH",
    category: "Painting",
    rating: 4.6,
    priceRange: [2500, 12000],
    image: "resources/images/servicesimages/colorcraft.png",
    address: "123 Color St., Taguig City, Metro Manila",
    description: "High-quality painting services specializing in residential and commercial spaces. Our skilled team ensures smooth finishes, durable coats, and a vibrant look tailored to client preferences.",
    specificServices: [
      { name: "Interior Wall Painting", priceFactor: 0.4 },
      { name: "Exterior Wall Painting", priceFactor: 0.35 },
      { name: "Wallpaper Removal", priceFactor: 0.1 },
      { name: "Accent Wall Painting", priceFactor: 0.1 },
      { name: "Touch-Up Services", priceFactor: 0.05 }
    ]
  },
  {
    name: "Perfect Coat Painting",
    category: "Painting",
    rating: 4.5,
    priceRange: [3000, 15000],
    image: "resources/images/servicesimages/perfectcoat.png",
    address: "56 Splash Rd., Makati City, Metro Manila",
    description: "Transform your space with vibrant and lasting colors. We offer comprehensive painting services that include custom finishes, textured designs, and eco-friendly paint options.",
    specificServices: [
      { name: "Custom Wall Finishes", priceFactor: 0.3 },
      { name: "Textured Painting", priceFactor: 0.2 },
      { name: "Eco-Friendly Paint Application", priceFactor: 0.15 },
      { name: "Ceiling Painting", priceFactor: 0.2 },
      { name: "Detailed Trim Painting", priceFactor: 0.15 }
    ]
  },
  {
    name: "Prime Finish",
    category: "Painting",
    rating: 4.4,
    priceRange: [2800, 13000],
    image: "resources/images/servicesimages/primefinish.png",
    address: "89 Pro Ave., Pasig City, Metro Manila", 
    description: "Professional-grade painting services that emphasize precision and durability. We offer solutions for both new spaces and renovation projects, ensuring high-quality results every time.",
    specificServices: [
      { name: "Whole House Painting", priceFactor: 0.5 },
      { name: "Commercial Space Painting", priceFactor: 0.3 },
      { name: "Power Washing (Pre-Paint)", priceFactor: 0.1 },
      { name: "Minor Surface Repairs", priceFactor: 0.05 },
      { name: "Fence and Gate Painting", priceFactor: 0.05 }
    ]
  },
  //Moving
  {
    name: "Swiftmove PH",
    category: "Moving",
    rating: 4.4,
    priceRange: [3000, 15000],
    image: "resources/images/servicesimages/swiftmove.png",
    address: "123 Move Rd., Makati City, Metro Manila",
    description: "Reliable moving services for any relocation.",
    specificServices: [
      { name: "Packing", priceFactor: 0.3 },
      { name: "Transport", priceFactor: 0.5 },
      { name: "Unpacking", priceFactor: 0.2 }
  ]
  },
  {
    name: "Easy Transport Manila",
    category: "Moving",
    rating: 4.3,
    priceRange: [2500, 12000],
    image: "resources/images/servicesimages/easytransport.png",
    address: "78 Swift Ave., Quezon City, Metro Manila",
    description: "Trusted movers for residential and office relocation.",
    specificServices: [
      { name: "Residential Moving", priceFactor: 0.4 },
      { name: "Office Relocation", priceFactor: 0.4 },
      { name: "Packing Assistance", priceFactor: 0.2 }
  ]
  },
  {
    name: "Fast Track PH",
    category: "Moving",
    rating: 4.5,
    priceRange: [3200, 14000],
    image: "resources/images/servicesimages/fasttrack.png",
    address: "45 Lift Rd., Pasig City, Metro Manila",
    description: "Fast and careful moving services for stress-free relocation.",
    specificServices: [
      { name: "Comprehensive Moving", priceFactor: 0.5 },
      { name: "Packing and Unpacking", priceFactor: 0.3 },
      { name: "Furniture Assembly", priceFactor: 0.2 }
  ]
  },
  //Carpentry
  {
    name: "Woodworks PH",
    category: "Carpentry",
    rating: 4.4,
    priceRange: [1500, 6000],
    image: "resources/images/servicesimages/woodworks.png",
    address: "22 Wood St., Makati City, Metro Manila",
    description: "Skilled carpentry services providing custom wood solutions for residential and commercial spaces, specializing in furniture assembly, repair, and installation.",
    specificServices: [
      { name: "Furniture Assembly", priceFactor: 0.3 },
      { name: "Wood Repair", priceFactor: 0.25 },
      { name: "Custom Shelving", priceFactor: 0.2 },
      { name: "Door and Frame Installation", priceFactor: 0.25 }
    ]
  },
  {
    name: "Craftedby Manila",
    category: "Carpentry",
    rating: 4.5,
    priceRange: [2000, 7000],
    image: "resources/images/servicesimages/craftedby.png",
    address: "88 Wood Rd., Quezon City, Metro Manila",
    description: "Experienced craftsmen offering high-quality custom woodwork, focusing on detailed cabinetry, wooden fixtures, and repair services tailored to client needs.",
    specificServices: [
      { name: "Custom Cabinetry", priceFactor: 0.4 },
      { name: "Wood Polishing", priceFactor: 0.2 },
      { name: "Fixture Installation", priceFactor: 0.2 },
      { name: "Deck Repair", priceFactor: 0.2 }
    ]
  },
  {
    name: "Timbercraft PH",
    category: "Carpentry",
    rating: 4.6,
    priceRange: [1800, 6500],
    image: "resources/images/servicesimages/timbercraft.png",
    address: "65 Handi Ave., Pasig City, Metro Manila",
    description: "Dedicated carpentry service specializing in high-end woodwork and restoration, including custom furniture, refinishing, and precise wood cutting.",
    specificServices: [
      { name: "Furniture Refinishing", priceFactor: 0.35 },
      { name: "Wood Cutting and Shaping", priceFactor: 0.3 },
      { name: "Door Refinishing", priceFactor: 0.2 },
      { name: "Deck Installation", priceFactor: 0.15 }
    ]
  },
  //Landscaping
  {
    name: "GreenScape PH",
    category: "Landscaping",
    rating: 4.7,
    priceRange: [2000, 15000],
    image: "resources/images/servicesimages/greenscape.png",
    address: "10 Green Rd., Taguig City, Metro Manila",
    description: "Expert landscaping solutions focused on eco-friendly designs, sustainable materials, and lush greenery. GreenScape PH provides comprehensive landscaping services to transform outdoor spaces into beautiful, functional areas.",
    specificServices: [
      { name: "Garden Design & Installation", priceFactor: 0.4 },
      { name: "Eco-Friendly Hardscaping", priceFactor: 0.3 },
      { name: "Lawn Installation", priceFactor: 0.15 },
      { name: "Plant Selection & Placement", priceFactor: 0.1 },
      { name: "Seasonal Maintenance", priceFactor: 0.05 }
    ]
  },
  {
    name: "EcoGardin PH",
    category: "Landscaping",
    rating: 4.6,
    priceRange: [1800, 14000],
    image: "resources/images/servicesimages/ecogardin.png",
    address: "32 Green Ave., Makati City, Metro Manila", 
    description: "Sustainable and stylish landscaping services designed to enhance any outdoor space. EcoGardin PH specializes in low-water gardens, native plants, and organic materials for a greener, eco-conscious approach.",
    specificServices: [
      { name: "Native Plant Landscaping", priceFactor: 0.25 },
      { name: "Drought-Resistant Planting", priceFactor: 0.2 },
      { name: "Garden Path & Walkway Installation", priceFactor: 0.2 },
      { name: "Mulching & Soil Preparation", priceFactor: 0.15 },
      { name: "Water Feature Design", priceFactor: 0.2 }
    ]
  },
  {
    name: "LushLand",
    category: "Landscaping",
    rating: 4.5,
    priceRange: [2200, 13000],
    image: "resources/images/servicesimages/lushland.png",
    address: "45 Eco Blvd., Pasig City, Metro Manila", 
    description: "Professional landscaping services that bring a lush, vibrant look to any outdoor area. LushLand specializes in large and small-scale projects, from private gardens to commercial landscapes, ensuring lush, scenic environments.",
    specificServices: [
      { name: "Residential Garden Landscaping", priceFactor: 0.4 },
      { name: "Commercial Landscaping", priceFactor: 0.3 },
      { name: "Irrigation System Installation", priceFactor: 0.2 },
      { name: "Tree & Shrub Planting", priceFactor: 0.05 },
      { name: "Landscape Lighting", priceFactor: 0.05 }
    ]
  },
  //Cleaning
  {
    name: "SparkleClean PH",
    category: "Cleaning",
    rating: 4.5,
    priceRange: [800, 5000],
    image: "resources/images/servicesimages/sparkleclean.png",
    address: "100 Sparkle St., Makati City, Metro Manila",
    description: "Professional residential and commercial cleaning services.",
    specificServices: [
        { name: "Residential Cleaning", priceFactor: 0.4 },
        { name: "Commercial Cleaning", priceFactor: 0.4 },
        { name: "Deep Cleaning", priceFactor: 0.2 }
    ]
  },
  {
    name: "CleanSweep Manila",
    category: "Cleaning",
    rating: 4.6,
    priceRange: [1000, 6000],
    image: "resources/images/servicesimages/cleansweep.png",
    address: "50 Sweep Ave., Pasig City, Metro Manila",
    description: "Fast and efficient cleaning for all types of properties.",
    specificServices: [
        { name: "Deep Cleaning", priceFactor: 0.5 },
        { name: "Sanitization", priceFactor: 0.3 },
        { name: "Move-in/Move-out Cleaning", priceFactor: 0.2 }
    ]
  },
  {
    name: "FreshStart Cleaners",
    category: "Cleaning",
    rating: 4.4,
    priceRange: [900, 5500],
    image: "resources/images/servicesimages/freshstart.png",
    address: "200 Fresh Rd., Quezon City, Metro Manila",
    description: "High-quality cleaning services for a fresh start every time.",
    specificServices: [
        { name: "Standard Cleaning", priceFactor: 0.3 },
        { name: "Allergen Removal", priceFactor: 0.3 },
        { name: "Pet Odor Removal", priceFactor: 0.4 }
    ]
  },
  //Pests
  {
    name: "PestGuard PH",
    category: "Pests",
    rating: 4.5,
    priceRange: [1000, 4500],
    image: "resources/images/servicesimages/pestguard.png",
    address: "10 Guard St., Mandaluyong City, Metro Manila",
    description: "Reliable pest control services focused on safe and effective solutions to keep homes and businesses pest-free, specializing in prevention and treatment.",
    specificServices: [
      { name: "General Pest Inspection", priceFactor: 0.25 },
      { name: "Ant Control", priceFactor: 0.2 },
      { name: "Rodent Removal", priceFactor: 0.3 },
      { name: "Termite Inspection", priceFactor: 0.25 }
    ]
  },
  {
    name: "BugBusters Manila",
    category: "Pests",
    rating: 4.4,
    priceRange: [1200, 5000],
    image: "resources/images/servicesimages/bugbusters.png",
    address: "76 Bug Rd., Quezon City, Metro Manila",
    description: "Effective pest eradication services aimed at protecting residential and commercial spaces from insect infestations and maintaining a healthy environment.",
    specificServices: [
      { name: "Cockroach Control", priceFactor: 0.3 },
      { name: "Mosquito Treatment", priceFactor: 0.2 },
      { name: "Bed Bug Treatment", priceFactor: 0.25 },
      { name: "General Disinfection", priceFactor: 0.25 }
    ]
  },
  {
    name: "PestFree Services",
    category: "Pests",
    rating: 4.6,
    priceRange: [1500, 6000],
    image: "resources/images/servicesimages/pestfree.png",
    address: "34 Free Ave., Makati City, Metro Manila",
    description: "Trusted pest control provider offering advanced treatment options to eliminate and prevent pest problems, ensuring a safe and comfortable living space.",
    specificServices: [
      { name: "Termite Treatment", priceFactor: 0.35 },
      { name: "Rodent Control", priceFactor: 0.25 },
      { name: "Fly Control", priceFactor: 0.2 },
      { name: "Sanitization Services", priceFactor: 0.2 }
    ]
  },
  //Appliance Repair
  {
    name: "FixIt Appliances",
    category: "Appliances",
    rating: 4.6,
    priceRange: [1000, 5500],
    image: "resources/images/servicesimages/fixit.png",
    address: "123 Fix Rd., Taguig City, Metro Manila",
    description: "Reliable and efficient appliance repair services for a range of household devices. FixIt Appliances specializes in prompt, expert repairs for refrigerators, washers, ovens, and more.",
    specificServices: [
      { name: "Refrigerator Repair", priceFactor: 0.3 },
      { name: "Washing Machine Repair", priceFactor: 0.25 },
      { name: "Oven & Stove Repair", priceFactor: 0.2 },
      { name: "Microwave Repair", priceFactor: 0.15 },
      { name: "Small Appliance Repair", priceFactor: 0.1 }
    ]
  },
  {
    name: "AppliancePros Manila",
    category: "Appliances",
    rating: 4.5,
    priceRange: [1200, 6000],
    image: "resources/images/servicesimages/appliancepros.png",
    address: "456 Appliance St., Makati City, Metro Manila",
    description: "Professional appliance repair service in Metro Manila, specializing in quick and affordable fixes for major household appliances. AppliancePros Manila offers diagnostic, repair, and maintenance services.",
    specificServices: [
      { name: "Air Conditioner Repair", priceFactor: 0.3 },
      { name: "Dishwasher Repair", priceFactor: 0.25 },
      { name: "Dryer Repair", priceFactor: 0.2 },
      { name: "Water Heater Repair", priceFactor: 0.15 },
      { name: "Appliance Maintenance Service", priceFactor: 0.1 }
    ]
  },
  {
    name: "GadgetCare PH",
    category: "Appliances",
    rating: 4.3,
    priceRange: [1000, 6500],
    image: "resources/images/servicesimages/gadgetcare.png",
    address: "789 Gadget Blvd., Pasig City, Metro Manila", 
    description: "Comprehensive repair services for home appliances and gadgets. GadgetCare PH provides quality repair solutions for a variety of devices, ensuring long-lasting performance.",
    specificServices: [
      { name: "Television Repair", priceFactor: 0.3 },
      { name: "Vacuum Cleaner Repair", priceFactor: 0.2 },
      { name: "Blender & Mixer Repair", priceFactor: 0.15 },
      { name: "Home Audio Repair", priceFactor: 0.2 },
      { name: "General Gadget Repair", priceFactor: 0.15 }
    ]
  },
  //Window Washing
  {
    name: "PureView Cleaning",
    category: "Window Washing",
    rating: 4.4,
    priceRange: [800, 2000],
    image: "resources/images/servicesimages/pureview.png",
    address: "100 View St., Makati City, Metro Manila",
    description: "Expert window washing services ensuring spotless, streak-free windows for homes and offices, with options for interior and exterior cleaning.",
    specificServices: [
      { name: "Interior Window Cleaning", priceFactor: 0.3 },
      { name: "Exterior Window Cleaning", priceFactor: 0.35 },
      { name: "Screen Cleaning", priceFactor: 0.15 },
      { name: "Frame and Track Cleaning", priceFactor: 0.2 }
    ]
  },
  {
    name: "ClearView PH",
    category: "Window Washing",
    rating: 4.5,
    priceRange: [1000, 2500],
    image: "resources/images/servicesimages/clearview.png",
    address: "65 Clear Ave., Pasig City, Metro Manila",
    description: "Professional window cleaning solutions that remove dirt and grime from windows, screens, and tracks to enhance clarity and improve indoor lighting.",
    specificServices: [
      { name: "Standard Window Washing", priceFactor: 0.4 },
      { name: "Deep Window Cleaning", priceFactor: 0.35 },
      { name: "Track and Sill Cleaning", priceFactor: 0.15 },
      { name: "Water Spot Removal", priceFactor: 0.1 }
    ]
  },
  {
    name: "ShineBright Windows",
    category: "Window Washing",
    rating: 4.3,
    priceRange: [700, 6200],
    image: "resources/images/servicesimages/shinebright.png",
    address: "123 Shine Rd., Quezon City, Metro Manila",
    description: "Comprehensive window washing services for high-rise buildings, residential properties, and commercial spaces with advanced cleaning techniques for maximum shine.",
    specificServices: [
      { name: "High-Rise Window Cleaning", priceFactor: 0.5 },
      { name: "Residential Window Washing", priceFactor: 0.3 },
      { name: "Screen and Frame Cleaning", priceFactor: 0.1 },
      { name: "Exterior Spot Treatment", priceFactor: 0.1 }
    ]
  },
  //Gutter Cleaning
  {
    name: "GutterGuard PH",
    category: "Gutter Cleaning",
    rating: 4.6,
    priceRange: [1000, 3500],
    image: "resources/images/servicesimages/gutterguard.png",
    address: "12 Guard Rd., Taguig City, Metro Manila", 
    description: "Professional gutter cleaning services to prevent blockages, water damage, and other issues. GutterGuard PH ensures efficient, debris-free gutters for a safe and protected home.",
    specificServices: [
      { name: "Basic Gutter Cleaning", priceFactor: 0.3 },
      { name: "Downspout Clearing", priceFactor: 0.2 },
      { name: "Gutter Inspection", priceFactor: 0.1 },
      { name: "Debris Removal & Disposal", priceFactor: 0.2 },
      { name: "Minor Gutter Repair", priceFactor: 0.2 }
    ]
  },
  {
    name: "CleanFlow Services",
    category: "Gutter Cleaning",
    rating: 4.4,
    priceRange: [1200, 3000],
    image: "resources/images/servicesimages/cleanflow.png",
    address: "56 Flow St., Makati City, Metro Manila",
    description: "Reliable gutter cleaning services designed to keep water flowing smoothly and prevent clogging. CleanFlow Services offers comprehensive cleaning and maintenance options for long-lasting gutter performance.",
    specificServices: [
      { name: "Complete Gutter & Downspout Cleaning", priceFactor: 0.4 },
      { name: "Pressure Washing for Gutters", priceFactor: 0.3 },
      { name: "Roofline Inspection", priceFactor: 0.1 },
      { name: "Leaf & Debris Removal", priceFactor: 0.15 },
      { name: "Preventive Maintenance", priceFactor: 0.05 }
    ]
  },
  {
    name: "RainClear PH",
    category: "Gutter Cleaning",
    rating: 4.3,
    priceRange: [1500, 3500],
    image: "resources/images/servicesimages/rainclear.png",
    address: "34 Clear Blvd., Pasig City, Metro Manila", 
    description: "Experienced gutter cleaning and maintenance services to keep rainwater channels clear and functional. RainClear PH provides thorough cleaning to avoid overflow and protect your property.",
    specificServices: [
      { name: "Gutter Unclogging", priceFactor: 0.35 },
      { name: "Gutter Guard Installation", priceFactor: 0.3 },
      { name: "Water Flow Testing", priceFactor: 0.1 },
      { name: "Routine Maintenance", priceFactor: 0.15 },
      { name: "Minor Seal Repairs", priceFactor: 0.1 }
    ]
  },
  //Chimney Sweeping
  {
    name: "ChimneySafe PH",
    category: "Chimney Sweeping",
    rating: 4.6,
    priceRange: [1500, 4000],
    image: "resources/images/servicesimages/chimneysafe.png",
    address: "12 Safe St., Mandaluyong City, Metro Manila",
    description: "Professional chimney sweeping services to ensure safe, clean, and efficient chimney operation. ChimneySafe PH provides thorough cleaning to reduce soot buildup and minimize fire hazards.",
    specificServices: [
      { name: "Standard Chimney Sweeping", priceFactor: 0.4 },
      { name: "Creosote Removal", priceFactor: 0.3 },
      { name: "Chimney Cap Inspection", priceFactor: 0.1 },
      { name: "Flue Cleaning", priceFactor: 0.15 },
      { name: "Smoke Chamber Maintenance", priceFactor: 0.05 }
    ]
  },
  {
    name: "SweepMasters Manila",
    category: "Chimney Sweeping",
    rating: 4.4,
    priceRange: [1800, 4500],
    image: "resources/images/servicesimages/sweepmasters.png",
    address: "67 Sweep Rd., Quezon City, Metro Manila",
    description: "Comprehensive chimney cleaning services to improve fireplace efficiency and safety. SweepMasters Manila specializes in thorough cleanings and detailed inspections for optimal chimney performance.",
    specificServices: [
      { name: "Full-Service Chimney Sweep", priceFactor: 0.5 },
      { name: "Smoke Test & Inspection", priceFactor: 0.2 },
      { name: "Ash and Debris Removal", priceFactor: 0.15 },
      { name: "Fireplace Cleaning", priceFactor: 0.1 },
      { name: "Chimney Liner Check", priceFactor: 0.05 }
    ]
  },
  {
    name: "FlameSafe Chimney Care",
    category: "Chimney Sweeping",
    rating: 4.5,
    priceRange: [1600, 4200],
    image: "resources/images/servicesimages/flamesafe.png",
    address: "89 Flame St., Pasig City, Metro Manila", 
    description: "Reliable chimney sweeping services that prioritize home safety by ensuring clean and efficient chimneys. FlameSafe Chimney Care offers expert cleaning and preventive maintenance for long-lasting use.",
    specificServices: [
      { name: "Basic Chimney Sweep", priceFactor: 0.35 },
      { name: "Creosote Removal Service", priceFactor: 0.25 },
      { name: "Chimney Draft Testing", priceFactor: 0.1 },
      { name: "Firebox Cleaning", priceFactor: 0.2 },
      { name: "Chimney Crown Inspection", priceFactor: 0.1 }
    ]
  },
  //Pressure Washing
  {
    name: "BlastClean PH",
    category: "Pressure Washing",
    rating: 4.6,
    priceRange: [1800, 4000],
    image: "resources/images/servicesimages/blastclean.png",
    address: "101 Blast Ave., Makati City, Metro Manila",
    description: "High-quality pressure washing services for residential and commercial properties. BlastClean PH provides powerful, efficient cleaning solutions for driveways, sidewalks, patios, and building exteriors.",
    specificServices: [
      { name: "Driveway Cleaning", priceFactor: 0.3 },
      { name: "Sidewalk & Walkway Cleaning", priceFactor: 0.25 },
      { name: "Patio & Deck Washing", priceFactor: 0.2 },
      { name: "Building Exterior Washing", priceFactor: 0.15 },
      { name: "Graffiti Removal", priceFactor: 0.1 }
    ]
  },
  {
    name: "PressurePro Services",
    category: "Pressure Washing",
    rating: 4.5,
    priceRange: [1500, 3800],
    image: "resources/images/servicesimages/pressruepro.png",
    address: "78 Pro Rd., Quezon City, Metro Manila",
    description: "Professional pressure washing solutions tailored to restore and refresh various surfaces. PressurePro Services specializes in cleaning driveways, parking lots, and exterior walls for a pristine appearance.",
    specificServices: [
      { name: "Parking Lot Cleaning", priceFactor: 0.35 },
      { name: "Wall & Fence Washing", priceFactor: 0.2 },
      { name: "Gutter & Roof Cleaning", priceFactor: 0.15 },
      { name: "Patio Pressure Washing", priceFactor: 0.2 },
      { name: "Surface Preparation for Painting", priceFactor: 0.1 }
    ]
  },
  {
    name: "WashAway Manila",
    category: "Pressure Washing",
    rating: 4.4,
    priceRange: [1600, 4200],
    image: "resources/images/servicesimages/washaway.png",
    address: "56 Wash Blvd., Pasig City, Metro Manila",
    description: "Reliable pressure washing services that remove dirt, grime, and stains for a fresh, clean look. WashAway Manila offers specialized cleaning for various outdoor surfaces to enhance curb appeal.",
    specificServices: [
      { name: "Patio & Poolside Cleaning", priceFactor: 0.3 },
      { name: "Driveway & Sidewalk Pressure Washing", priceFactor: 0.25 },
      { name: "Stone & Brick Cleaning", priceFactor: 0.2 },
      { name: "Heavy Stain Removal", priceFactor: 0.15 },
      { name: "Commercial Building Wash", priceFactor: 0.1 }
    ]
  },
  //Furniture Repair
  {
    name: "RestoreIt PH",
    category: "Furniture Repair",
    rating: 4.5,
    priceRange: [1500, 6000],
    image: "resources/images/servicesimages/restoreit.png",
    address: "89 Restore Rd., Taguig City, Metro Manila",
    description: "High-quality pressure washing services for residential and commercial properties. BlastClean PH provides powerful, efficient cleaning solutions for driveways, sidewalks, patios, and building exteriors.",
    specificServices: [
      { name: "Driveway Cleaning", priceFactor: 0.3 },
      { name: "Sidewalk & Walkway Cleaning", priceFactor: 0.25 },
      { name: "Patio & Deck Washing", priceFactor: 0.2 },
      { name: "Building Exterior Washing", priceFactor: 0.15 },
      { name: "Graffiti Removal", priceFactor: 0.1 }
    ]
  },
  {
    name: "FurnitureFix Manila",
    category: "Furniture Repair",
    rating: 4.4,
    priceRange: [1800, 5500],
    image: "resources/images/servicesimages/furniturefix.png",
    address: "34 Fix Ave., Makati City, Metro Manila", 
    description: "Professional pressure washing solutions tailored to restore and refresh various surfaces. PressurePro Services specializes in cleaning driveways, parking lots, and exterior walls for a pristine appearance.",
    specificServices: [
      { name: "Parking Lot Cleaning", priceFactor: 0.35 },
      { name: "Wall & Fence Washing", priceFactor: 0.2 },
      { name: "Gutter & Roof Cleaning", priceFactor: 0.15 },
      { name: "Patio Pressure Washing", priceFactor: 0.2 },
      { name: "Surface Preparation for Painting", priceFactor: 0.1 }
  ]
  },
  {
    name: "Revive Furniture Services",
    category: "Furniture Repair",
    rating: 4.6,
    priceRange: [1200, 5000],
    image: "resources/images/servicesimages/revivefurniture.png",
    address: "45 Revive Blvd., Pasig City, Metro Manila", 
    description: "Reliable pressure washing services that remove dirt, grime, and stains for a fresh, clean look. WashAway Manila offers specialized cleaning for various outdoor surfaces to enhance curb appeal.",
    specificServices: [
      { name: "Patio & Poolside Cleaning", priceFactor: 0.3 },
      { name: "Driveway & Sidewalk Pressure Washing", priceFactor: 0.25 },
      { name: "Stone & Brick Cleaning", priceFactor: 0.2 },
      { name: "Heavy Stain Removal", priceFactor: 0.15 },
      { name: "Commercial Building Wash", priceFactor: 0.1 }
  ]
  },
  //Pool Installation
  {
    name: "AquaPool PH",
    category: "Pool Installation",
    rating: 4.6,
    priceRange: [50000, 250000],
    image: "resources/images/servicesimages/aquapool.png",
    address: "123 Aqua Blvd., Quezon City, Metro Manila",
    description: "Expert pool installation services designed to create customized, high-quality pools for any space. AquaPool PH specializes in durable pool builds with innovative designs and premium materials.",
    specificServices: [
      { name: "In-ground Pool Installation", priceFactor: 0.5 },
      { name: "Above-ground Pool Installation", priceFactor: 0.3 },
      { name: "Pool Plumbing & Filtration Setup", priceFactor: 0.1 },
      { name: "Pool Lighting Installation", priceFactor: 0.05 },
      { name: "Custom Pool Design", priceFactor: 0.05 }
    ]
  },
  {
    name: "ClearWaters Pool",
    category: "Pool Installation",
    rating: 4.5,
    priceRange: [60000, 275000],
    image: "resources/images/servicesimages/clearwaters.png",
    address: "56 Waters St., Pasig City, Metro Manila",
    description: "Professional pool installation services with a focus on quality and craftsmanship. ClearWaters Pool offers customized designs and efficient installations to transform outdoor spaces.",
    specificServices: [
      { name: "Fiberglass Pool Installation", priceFactor: 0.4 },
      { name: "Concrete Pool Construction", priceFactor: 0.4 },
      { name: "Pool Heater & Filter Setup", priceFactor: 0.1 },
      { name: "Water Feature Installation", priceFactor: 0.05 },
      { name: "Deck & Surround Installation", priceFactor: 0.05 }
    ]
  },
  {
    name: "BlueLagoon Pools",
    category: "Pool Installation",
    rating: 4.4,
    priceRange: [55000, 300000],
    image: "resources/images/servicesimages/bluelagoon.png",
    address: "78 Lagoon Rd., Makati City, Metro Manila", 
    description: "Customized pool installation services to create luxurious pools tailored to client specifications. BlueLagoon Pools provides full-service pool builds, including filtration and heating options.",
    specificServices: [
      { name: "Vinyl Pool Installation", priceFactor: 0.35 },
      { name: "Concrete Pool Installation", priceFactor: 0.4 },
      { name: "Heating & Filtration Setup", priceFactor: 0.1 },
      { name: "Pool Landscaping", priceFactor: 0.1 },
      { name: "Saltwater Pool Conversion", priceFactor: 0.05 }
    ]
  },
  //Junk Removal
  {
    name: "CleanOut PH",
    category: "Junk Removal",
    rating: 4.5,
    priceRange: [1000, 5000],
    image: "resources/images/servicesimages/cleanout.png",
    address: "101 Clean Ave., Makati City, Metro Manila",
    description: "Efficient junk removal services to help clear out unwanted items quickly and responsibly. CleanOut PH specializes in home, office, and commercial junk disposal.",
    specificServices: [
    { name: "Home Junk Removal", priceFactor: 0.4 },
    { name: "Office Junk Removal", priceFactor: 0.3 },
    { name: "Furniture Disposal", priceFactor: 0.15 },
    { name: "Electronics Recycling", priceFactor: 0.1 },
    { name: "Appliance Removal", priceFactor: 0.05 }
  ]
  },
  {
    name: "JunkAway Manila",
    category: "Junk Removal",
    rating: 4.6,
    priceRange: [1500, 6000],
    image: "resources/images/servicesimages/junkaway.png",
    address: "45 Away Rd., Pasig City, Metro Manila",
    description: "Reliable junk removal services for homes and businesses. JunkAway Manila handles a variety of removal needs from single items to full-scale cleanouts.",
    specificServices: [
      { name: "Household Junk Removal", priceFactor: 0.35 },
      { name: "Commercial Cleanouts", priceFactor: 0.4 },
      { name: "Yard Waste Removal", priceFactor: 0.1 },
      { name: "Mattress Disposal", priceFactor: 0.1 },
      { name: "Hazardous Waste Handling", priceFactor: 0.05 }
    ]
  },
  {
    name: "GoJunk PH",
    category: "Junk Removal",
    rating: 4.4,
    priceRange: [1200, 5500],
    image: "resources/images/servicesimages/gojunk.png",
    address: "89 Go Blvd., Quezon City, Metro Manila",
    description: "Comprehensive junk removal services designed to handle all types of clutter. GoJunk PH provides quick and efficient disposal options, from furniture to appliances.",
    specificServices: [
      { name: "Apartment Cleanouts", priceFactor: 0.3 },
      { name: "Furniture Disposal", priceFactor: 0.25 },
      { name: "Electronic Waste Removal", priceFactor: 0.2 },
      { name: "Construction Debris Removal", priceFactor: 0.15 },
      { name: "Recyclable Material Collection", priceFactor: 0.1 }
    ]
  },
  //Air Duct Cleaning
  {
    name: "CleanAir PH",
    category: "Air Duct Removal",
    rating: 4.5,
    priceRange: [2000, 6000],
    image: "resources/images/servicesimages/cleanair.png",
    address: "34 Air St., Mandaluyong City, Metro Manila",
    description: "Professional air duct removal services to ensure clean and efficient air systems. CleanAir PH specializes in safe removal and disposal of old ductwork, improving air quality and energy efficiency.",
    specificServices: [
      { name: "Residential Duct Removal", priceFactor: 0.4 },
      { name: "Commercial Duct Removal", priceFactor: 0.3 },
      { name: "Vent Cover Removal", priceFactor: 0.15 },
      { name: "Air Filter Replacement", priceFactor: 0.1 },
      { name: "Duct Disposal Service", priceFactor: 0.05 }
    ]
  },
  {
    name: "FreshAir Solutions",
    category: "Air Duct Removal",
    rating: 4.4,
    priceRange: [2500, 7000],
    image: "resources/images/servicesimages/freshair.png",
    address: "56 Fresh Blvd., Taguig City, Metro Manila",
    description: "Expert air duct removal services designed to enhance airflow and indoor air quality. FreshAir Solutions ensures complete removal and cleanup for residential and commercial spaces.",
    specificServices: [
      { name: "Duct Removal for Homes", priceFactor: 0.35 },
      { name: "Duct Removal for Offices", priceFactor: 0.35 },
      { name: "Vent Inspection & Removal", priceFactor: 0.1 },
      { name: "Mold and Dust Prevention", priceFactor: 0.1 },
      { name: "Ductwork Disposal", priceFactor: 0.1 }
  ]
  },
  {
    name: "AirClear PH",
    category: "Air Duct Removal",
    rating: 4.6,
    priceRange: [2200, 6500],
    image: "resources/images/servicesimages/airclear.png",
    address: "123 Clear Ave., Pasig City, Metro Manila",
    description: "Comprehensive air duct removal services with a focus on safety and air quality. AirClear PH provides efficient duct removal for improved ventilation and reduced allergens.",
    specificServices: [
      { name: "Home Duct Removal", priceFactor: 0.4 },
      { name: "Industrial Duct Removal", priceFactor: 0.3 },
      { name: "Vent Cleaning and Removal", priceFactor: 0.15 },
      { name: "Allergen and Dust Reduction", priceFactor: 0.1 },
      { name: "Recycling & Disposal Service", priceFactor: 0.05 }
    ]
  }
    ];


    function goToPage1() {
        window.location.href = "Homepage.html";
      }
      
      function goToPage2() {
        window.location.href = "Bookings.html";
      }
      
      function goToPage3() {
      }
      
      function goToPage4() {
      }
      
      function resetOtherIcons(activeIconId) {
        const icons = ["homeIcon"]; // Add other icons here if needed
        icons.forEach(iconId => {
          if (iconId !== activeIconId) {
            document.getElementById(iconId).src = "resources/images/icons/home.png";
          }
        });
      }
      
      function toggleSettingsPanel() {
        const settingsPanel = document.getElementById("settingsPanel");
        settingsPanel.classList.toggle("open");
      }


// Extract provider name from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const providerName = urlParams.get("name");

// Find the provider object that matches the selected provider name
const provider = serviceProviders.find(p => p.name === providerName);

if (provider) {
  // Populate main provider data
  document.getElementById("service-name").textContent = provider.name;
  document.getElementById("service-image").src = provider.image;
  document.getElementById("service-description").textContent = provider.description;
  document.getElementById("service-price").textContent = `Starting at ${provider.priceRange[0]} - ${provider.priceRange[1]} PHP`;
  document.getElementById("service-category").textContent = provider.category;
  document.getElementById("service-address").textContent = provider.address;

  // Calculate and display prices for specific services
  const specificServicesContainer = document.getElementById("specific-services");
  specificServicesContainer.innerHTML = ""; // Clear existing content

  provider.specificServices.forEach(service => {
    const minPrice = Math.floor(provider.priceRange[0] + (provider.priceRange[1] - provider.priceRange[0]) * service.priceFactor * 0.8);
    const maxPrice = Math.floor(provider.priceRange[0] + (provider.priceRange[1] - provider.priceRange[0]) * service.priceFactor);
  
    const serviceItem = document.createElement("div");
    serviceItem.classList.add("specific-service");
  
    serviceItem.innerHTML = `
      <label>
        <input type="checkbox" class="styled-checkbox" name="specificService" value="${service.name}">
        ${service.name}: ${minPrice} - ${maxPrice} PHP
      </label>
    `;
  
    specificServicesContainer.appendChild(serviceItem);
  });

} else {
  document.getElementById("service-name").textContent = "Service Not Found";
  document.getElementById("service-description").textContent = "The service provider could not be found. Please go back and try again.";
}


function bookService() {
  const selectedServices = [];
  document.querySelectorAll("input[name='specificService']:checked").forEach(checkbox => {
    const service = provider.specificServices.find(s => s.name === checkbox.value);
    if (service) selectedServices.push(service);
  });

  if (selectedServices.length === 0) {
    alert("Please select at least one service.");
    return;
  }

  // Save provider and selected services data to localStorage
  localStorage.setItem("selectedProvider", JSON.stringify(provider));
  localStorage.setItem("selectedServices", JSON.stringify(selectedServices));

  // Redirect to FinalizeBooking page
  window.location.href = "finalizeBooking.html";
}