
//Navigations

function goToSignIn() {
  window.location.href = "Signin.html";
}
function signIn() {
  window.location.href = "Homepage.html";
  alert("Sign In clicked");
}

function goToHomepage() {
  // Redirect to the homepage as guest
  window.location.href = "Homepage.html"; // Adjust the URL accordingly
}

function createAccount() {
  // Logic for redirecting to the sign-up page
  window.location.href = "Signup.html"; // Adjust the URL accordingly
}

function signUp() {
  // Logic for sign-up validation
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Further validation for name, phone, etc.
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  if (name && phone) {
    // Submit the form data to the server or handle it accordingly
    alert("Sign Up successful!");
    // Redirect to home or dashboard
    window.location.href = "homepage.html"; // Adjust the URL accordingly
  } else {
    alert("Please fill all the fields!");
  }
}


function goToPage1() {
  resetOtherIcons("homeIcon");
  window.location.href = "Homepage.html";
}

function goToPage2() {
  window.location.href = "Bookings.html";
}

function goToPage3() {
  window.location.href = "Notifications.html";
}

function goToPage4() {
  window.location.href = "Activity.html";
}

function toggleSettingsPanel() {
  const settingsPanel = document.getElementById("settingsPanel");
  settingsPanel.classList.toggle("open");
}

// Sample data for demonstration
const serviceProviders = [
  { 
    name: "Coolair PH", 
    category: "AC Check-up", 
    rating: 4.5, 
    priceRange: "1200-5000 PHP", 
    image: "resources/images/servicesimages/coolair.png", 
    address: "123 Cool St., Taguig City, Metro Manila"
  },
  { 
    name: "Breezefix Makati", 
    category: "AC Check-up", 
    rating: 4.3, 
    priceRange: "1200-5000 PHP",
    image: "resources/images/servicesimages/breezefix.png", 
    address: "456 Air Ave., Makati City, Metro Manila"
  },
  {
    name: "Chillmaster Services",
    category: "AC Check-up",
    rating: 4.6,
    priceRange: "1300 - 6000 PHP",
    image: "resources/images/servicesimages/chillmaster.png",
    address: "789 Chill Blvd., Pasig City, Metro Manila"
  },
  // Electric
  {
    name: "PowerUp PH",
    category: "Electrical",
    rating: 4.7,
    priceRange: "1000-5500 PHP",
    image: "resources/images/servicesimages/powerup.png",
    address: "12 Voltage St., Quezon City, Metro Manila"
},
{
    name: "Voltcare Manila",
    category: "Electrical",
    rating: 4.5,
    priceRange: "1200-6000 PHP",
    image: "resources/images/servicesimages/voltcare.png",
    address: "34 Electric Rd., Mandaluyong City, Metro Manila"
},
{
    name: "Circuitfix",
    category: "Electrical",
    rating: 4.4,
    priceRange: "1500-5000 PHP",
    image: "resources/images/servicesimages/circuitfix.png",
    address: "56 Bright Ave., Pasay City, Metro Manila"
},
//Plumbing
{
  name: "Pipemasters PH",
  category: "Plumbing",
  rating: 4.4,
  priceRange: "1200-6000 PHP",
  image: "resources/images/servicesimages/pipemasters.png",
  address: "21 Pipe St., Manila, Metro Manila"
},
{
  name: "FlowPro Services",
  category: "Plumbing",
  rating: 4.5,
  priceRange: "1000-5500 PHP",
  image: "resources/images/servicesimages/flowpro.png",
  address: "45 Flow Rd., Makati City, Metro Manila"
},
{
  name: "FixFlow PH",
  category: "Plumbing",
  rating: 4.6,
  priceRange: "1100-6500 PHP",
  image: "resources/images/servicesimages/fixflow.png",
  address: "78 Aqua Blvd., Quezon City, Metro Manila"
},
//Painting
{
  name: "ColorCraft PH",
  category: "Painting",
  rating: 4.6,
  priceRange: "2500-12000 PHP",
  image: "resources/images/servicesimages/colorcraft.png",
  address: "123 Color St., Taguig City, Metro Manila"
},
{
  name: "Perfect Coat Painting",
  category: "Painting",
  rating: 4.5,
  priceRange: "3000-15000 PHP",
  image: "resources/images/servicesimages/perfectcoat.png",
  address: "56 Splash Rd., Makati City, Metro Manila"
},
{
  name: "Prime Finish",
  category: "Painting",
  rating: 4.4,
  priceRange: "2800-13000 PHP",
  image: "resources/images/servicesimages/primefinish.png",
  address: "89 Pro Ave., Pasig City, Metro Manila"
},
//Moving
{
  name: "Swiftmove PH",
  category: "Moving",
  rating: 4.4,
  priceRange: "3000-15000 PHP",
  image: "resources/images/servicesimages/swiftmove.png",
  address: "123 Move Rd., Makati City, Metro Manila"
},
{
  name: "Easy Transport Manila",
  category: "Moving",
  rating: 4.3,
  priceRange: "2500-12000 PHP",
  image: "resources/images/servicesimages/easytransport.png",
  address: "78 Swift Ave., Quezon City, Metro Manila"
},
{
  name: "Fast Track PH",
  category: "Moving",
  rating: 4.5,
  priceRange: "3200-14000 PHP",
  image: "resources/images/servicesimages/fasttrack.png",
  address: "45 Lift Rd., Pasig City, Metro Manila"
},
//Carpentry
{
  name: "Woodworks PH",
  category: "Carpentry",
  rating: 4.4,
  priceRange: "1500-6000 PHP",
  image: "resources/images/servicesimages/woodworks.png",
  address: "22 Wood St., Makati City, Metro Manila"
},
{
  name: "Craftedby Manila",
  category: "Carpentry",
  rating: 4.5,
  priceRange: "2000-7000 PHP",
  image: "resources/images/servicesimages/craftedby.png",
  address: "88 Wood Rd., Quezon City, Metro Manila"
},
{
  name: "Timbercraft PH",
  category: "Carpentry",
  rating: 4.6,
  priceRange: "1800-6500 PHP",
  image: "resources/images/servicesimages/timbercraft.png",
  address: "65 Handi Ave., Pasig City, Metro Manila"
},
//Landscaping
{
  name: "GreenScape PH",
  category: "Landscaping",
  rating: 4.7,
  priceRange: "2000-15000 PHP",
  image: "resources/images/servicesimages/greenscape.png",
  address: "10 Green Rd., Taguig City, Metro Manila"
},
{
  name: "EcoGardin PH",
  category: "Landscaping",
  rating: 4.6,
  priceRange: "1800-14000 PHP",
  image: "resources/images/servicesimages/ecogardin.png",
  address: "32 Green Ave., Makati City, Metro Manila"
},
{
  name: "LushLand",
  category: "Landscaping",
  rating: 4.5,
  priceRange: "2200-13000 PHP",
  image: "resources/images/servicesimages/lushland.png",
  address: "45 Eco Blvd., Pasig City, Metro Manila"
},
//Cleaning
{
  name: "SparkleClean PH",
  category: "Cleaning",
  rating: 4.5,
  priceRange: "800-5000 PHP",
  image: "resources/images/servicesimages/sparkleclean.png",
  address: "100 Sparkle St., Makati City, Metro Manila"
},
{
  name: "CleanSweep Manila",
  category: "Cleaning",
  rating: 4.6,
  priceRange: "1000-6000 PHP",
  image: "resources/images/servicesimages/cleansweep.png",
  address: "50 Sweep Ave., Pasig City, Metro Manila"
},
{
  name: "FreshStart Cleaners",
  category: "Cleaning",
  rating: 4.4,
  priceRange: "900-5500 PHP",
  image: "resources/images/servicesimages/freshstart.png",
  address: "200 Fresh Rd., Quezon City, Metro Manila"
},
//Pests
{
  name: "PestGuard PH",
  category: "Pests",
  rating: 4.5,
  priceRange: "1000-4500 PHP",
  image: "resources/images/servicesimages/pestguard.png",
  address: "10 Guard St., Mandaluyong City, Metro Manila"
},
{
  name: "BugBusters Manila",
  category: "Pests",
  rating: 4.4,
  priceRange: "1200-5000 PHP",
  image: "resources/images/servicesimages/bugbusters.png",
  address: "76 Bug Rd., Quezon City, Metro Manila"
},
{
  name: "PestFree Services",
  category: "Pests",
  rating: 4.6,
  priceRange: "1500-6000 PHP",
  image: "resources/images/servicesimages/pestfree.png",
  address: "34 Free Ave., Makati City, Metro Manila"
},
//Appliance Repair
{
  name: "FixIt Appliances",
  category: "Appliances",
  rating: 4.6,
  priceRange: "1000-5500 PHP",
  image: "resources/images/servicesimages/fixit.png",
  address: "123 Fix Rd., Taguig City, Metro Manila"
},
{
  name: "AppliancePros Manila",
  category: "Appliances",
  rating: 4.5,
  priceRange: "1200-6000 PHP",
  image: "resources/images/servicesimages/appliancepros.png",
  address: "456 Appliance St., Makati City, Metro Manila"
},
{
  name: "GadgetCare PH",
  category: "Appliances",
  rating: 4.3,
  priceRange: "1000-6500 ",
  image: "resources/images/servicesimages/gadgetcare.png",
  address: "789 Gadget Blvd., Pasig City, Metro Manila"
},
//Window Washing
{
  name: "PureView Cleaning",
  category: "Window Washing",
  rating: 4.4,
  priceRange: "800-2000 PHP",
  image: "resources/images/servicesimages/pureview.png",
  address: "100 View St., Makati City, Metro Manila"
},
{
  name: "ClearView PH",
  category: "Window Washing",
  rating: 4.5,
  priceRange: "1000-2500 PHP",
  image: "resources/images/servicesimages/clearview.png",
  address: "65 Clear Ave., Pasig City, Metro Manila"
},
{
  name: "ShineBright Windows",
  category: "Window Washing",
  rating: 4.3,
  priceRange: "700-6200 PHP",
  image: "resources/images/servicesimages/shinebright.png",
  address: "123 Shine Rd., Quezon City, Metro Manila"
},
//Gutter Cleaning
{
  name: "GutterGuard PH",
  category: "Gutter Cleaning",
  rating: 4.6,
  priceRange: "1000-3500 PHP",
  image: "resources/images/servicesimages/gutterguard.png",
  address: "12 Guard Rd., Taguig City, Metro Manila"
},
{
  name: "CleanFlow Services",
  category: "Gutter Cleaning",
  rating: 4.4,
  priceRange: "1200-3000 PHP",
  image: "resources/images/servicesimages/cleanflow.png",
  address: "56 Flow St., Makati City, Metro Manila"
},
{
  name: "RainClear PH",
  category: "Gutter Cleaning",
  rating: 4.3,
  priceRange: "1500-3500 PHP",
  image: "resources/images/servicesimages/rainclear.png",
  address: "34 Clear Blvd., Pasig City, Metro Manila"
},
//Chimney Sweeping
{
  name: "ChimneySafe PH",
  category: "Chimney Sweeping",
  rating: 4.6,
  priceRange: "1500-4000 PHP",
  image: "resources/images/servicesimages/chimneysafe.png",
  address: "12 Safe St., Mandaluyong City, Metro Manila"
},
{
  name: "SweepMasters Manila",
  category: "Chimney Sweeping",
  rating: 4.4,
  priceRange: "1800-4500 PHP",
  image: "resources/images/servicesimages/sweepmasters.png",
  address: "67 Sweep Rd., Quezon City, Metro Manila"
},
{
  name: "FlameSafe Chimney Care",
  category: "Chimney Sweeping",
  rating: 4.5,
  priceRange: "1600-4,200 PHP",
  image: "resources/images/servicesimages/flamesafe.png",
  address: "89 Flame St., Pasig City, Metro Manila"
},
//Pressure Washing
{
  name: "BlastClean PH",
  category: "Pressure Washing",
  rating: 4.6,
  priceRange: "1800-4000 PHP",
  image: "resources/images/servicesimages/blastclean.png",
  address: "101 Blast Ave., Makati City, Metro Manila"
},
{
  name: "PressurePro Services",
  category: "Pressure Washing",
  rating: 4.5,
  priceRange: "1500-3800 PHP",
  image: "resources/images/servicesimages/pressruepro.png",
  address: "78 Pro Rd., Quezon City, Metro Manila"
},
{
  name: "WashAway Manila",
  category: "Pressure Washing",
  rating: 4.4,
  priceRange: "1600-4200 PHP",
  image: "resources/images/servicesimages/washaway.png",
  address: "56 Wash Blvd., Pasig City, Metro Manila"
},
//Furniture Repair
{
  name: "RestoreIt PH",
  category: "Furniture Repair",
  rating: 4.5,
  priceRange: "1500-6000 PHP",
  image: "resources/images/servicesimages/restoreit.png",
  address: "89 Restore Rd., Taguig City, Metro Manila"
},
{
  name: "FurnitureFix Manila",
  category: "Furniture Repair",
  rating: 4.4,
  priceRange: "1800-5500 PHP",
  image: "resources/images/servicesimages/furniturefix.png",
  address: "34 Fix Ave., Makati City, Metro Manila"
},
{
  name: "Revive Furniture Services",
  category: "Furniture Repair",
  rating: 4.6,
  priceRange: "1200-5000 PHP",
  image: "resources/images/servicesimages/revivefurniture.png",
  address: "45 Revive Blvd., Pasig City, Metro Manila"
},
//Pool Installation
{
  name: "AquaPool PH",
  category: "Pool Installation",
  rating: 4.6,
  priceRange: "50000-250000 PHP",
  image: "resources/images/servicesimages/aquapool.png",
  address: "123 Aqua Blvd., Quezon City, Metro Manila"
},
{
  name: "ClearWaters Pool",
  category: "Pool Installation",
  rating: 4.5,
  priceRange: "60000-275000 PHP",
  image: "resources/images/servicesimages/clearwaters.png",
  address: "56 Waters St., Pasig City, Metro Manila"
},
{
  name: "BlueLagoon Pools",
  category: "Pool Installation",
  rating: 4.4,
  priceRange: "55000-300000 PHP",
  image: "resources/images/servicesimages/bluelagoon.png",
  address: "78 Lagoon Rd., Makati City, Metro Manila"
},
//Junk Removal
{
  name: "CleanOut PH",
  category: "Junk Removal",
  rating: 4.5,
  priceRange: "1000-5000 PHP",
  image: "resources/images/servicesimages/cleanout.png",
  address: "101 Clean Ave., Makati City, Metro Manila"
},
{
  name: "JunkAway Manila",
  category: "Junk Removal",
  rating: 4.6,
  priceRange: "1500-6000 PHP",
  image: "resources/images/servicesimages/junkaway.png",
  address: "45 Away Rd., Pasig City, Metro Manila"
},
{
  name: "GoJunk PH",
  category: "Junk Removal",
  rating: 4.4,
  priceRange: "1200-5500 PHP",
  image: "resources/images/servicesimages/gojunk.png",
  address: "89 Go Blvd., Quezon City, Metro Manila"
},
//Air Duct Cleaning
{
  name: "CleanAir PH",
  category: "Air Duct Removal",
  rating: 4.5,
  priceRange: "2000-6000 PHP",
  image: "resources/images/servicesimages/cleanair.png",
  address: "34 Air St., Mandaluyong City, Metro Manila"
},
{
  name: "FreshAir Solutions",
  category: "Air Duct Removal",
  rating: 4.4,
  priceRange: "2500-7000 PHP",
  image: "resources/images/servicesimages/freshair.png",
  address: "56 Fresh Blvd., Taguig City, Metro Manila"
},
{
  name: "AirClear PH",
  category: "Air Duct Removal",
  rating: 4.6,
  priceRange: "2200-6500 PHP",
  image: "resources/images/servicesimages/airclear.png",
  address: "123 Clear Ave., Pasig City, Metro Manila"
},
  ];
  
  document.addEventListener("DOMContentLoaded", function() {
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCategory = urlParams.get("category");
  
    // If a category is passed, check the corresponding filter checkbox
    if (selectedCategory) {
      const checkboxes = document.querySelectorAll(".filter-options input[type='checkbox']");
      checkboxes.forEach(checkbox => {
        if (checkbox.value === selectedCategory) {
          checkbox.checked = true;
        }
      });
  
      // Optionally, you can call the filter function to update the displayed cards
      filterProviders();  // Assuming you have a filterProviders function to update the cards based on checked filters
    }
  });

  document.getElementById("minPrice").addEventListener("input", function() {
    const minPriceValue = document.getElementById("minPrice").value;
    document.getElementById("minPriceValue").textContent = `${minPriceValue} PHP`; // Update the displayed value
    filterProviders(); // Call filter function whenever the minimum price is changed
  });
  
  document.getElementById("maxPrice").addEventListener("input", function() {
    const maxPriceValue = document.getElementById("maxPrice").value;
    document.getElementById("maxPriceValue").textContent = `${maxPriceValue} PHP`; // Update the displayed value
    filterProviders(); // Call filter function whenever the maximum price is changed
  });
  
  function filterProviders() {
    const searchTerm = document.getElementById("searchBar").value.toLowerCase();
    const selectedCategories = Array.from(document.querySelectorAll('.filter-options input[name="category"]:checked'))
      .map(input => input.value);
    const selectedRatings = Array.from(document.querySelectorAll('.filter-options input[name="rating"]:checked'))
      .map(input => parseInt(input.value));
    const minPrice = parseInt(document.getElementById("minPrice").value);
    const maxPrice = parseInt(document.getElementById("maxPrice").value);
  
    // Filter the service providers based on the selected filters
    const filteredProviders = serviceProviders.filter(provider => {
      // Check for search term match (optional)
      const matchesSearchTerm = provider.name.toLowerCase().includes(searchTerm);
  
      // Check for selected categories
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(provider.category);
  
      // Check for selected ratings
      const matchesRating = selectedRatings.length === 0 || provider.rating >= Math.min(...selectedRatings);
  
      // Check for price range match (both minimum and maximum)
      const priceRangeArray = provider.priceRange.split("-");
      const minServicePrice = parseInt(priceRangeArray[0].trim());
      const maxServicePrice = parseInt(priceRangeArray[1].trim());
  
      // Validate price ranges
      const matchesMinPrice = minServicePrice >= minPrice;
      const matchesMaxPrice = maxServicePrice <= maxPrice;
  
      // A service is valid if its price range falls within the selected minimum and maximum price
      const matchesPriceRange = (matchesMinPrice && matchesMaxPrice);
  
      return matchesSearchTerm && matchesCategory && matchesRating && matchesPriceRange;
    });
  
    // Render the filtered service providers
    renderServiceProviders(filteredProviders);
  }
  
  // Attach filter function to filter panel inputs
  document.getElementById("searchBar").addEventListener("input", filterProviders);
  document.querySelectorAll('.filter-options input').forEach(input => {
    input.addEventListener("change", filterProviders);
  });
  
  function renderServiceProviders(providers) {
    const serviceList = document.querySelector(".service-list");
    serviceList.innerHTML = ""; // Clear previous entries
  
    providers.forEach((provider, index) => {
      const serviceCard = document.createElement("div");
      serviceCard.classList.add("service-card");
  
      serviceCard.innerHTML = `
        <div class="service-image-container">
          <a href="service-details.html?name=${encodeURIComponent(provider.name)}" class="service-image-link">
            <img src="${provider.image}" alt="${provider.name}" class="service-image">
          </a>
        </div>
        <div class="service-info">
          <div class="rating"><span>&#9733; ${provider.rating}</span> (${provider.rating})</div>
          <a href="service-details.html?name=${encodeURIComponent(provider.name)}" class="service-name">
            <h3>${provider.name}</h3>
          </a>
          <p>Starts From <span class="price">${provider.priceRange}</span></p>
          <p class="address"><strong>Address:</strong> ${provider.address}</p> <!-- Added address here -->
        </div>
      `;
  
      // Add animation with staggered delay
      setTimeout(() => {
        serviceCard.style.animation = "slideIn 0.5s forwards";
      }, index * 100); // 100ms delay between each card
  
      serviceList.appendChild(serviceCard);
    });
  }

// Example usage of renderServiceProviders
renderServiceProviders(serviceProviders);
  



//Settings
function toggleSettingsPanel() {
  document.getElementById("settingsPanel").classList.toggle("open");
}

// Placeholder functions for each setting option
function accountSettings() {
  alert("Account Settings clicked.");
}

function notificationsSettings() {
  alert("Notifications clicked.");
}

function privacySettings() {
  alert("Privacy & Security clicked.");
  window.location.href = "privacyandsecurity.html";
}

function helpSupport() {
  alert("Help & Support clicked.");
  window.location.href = "helpandsupport.html";
}

function logout() {
  alert("Log Out clicked.");
  // Add log-out logic here if necessary
}