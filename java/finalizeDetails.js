function toggleSettingsPanel() {
    const settingsPanel = document.getElementById("settingsPanel");
    settingsPanel.classList.toggle("open");
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
  
function resetOtherIcons(activeIconId) {
    const icons = ["homeIcon"]; // Add other icons here if needed
    icons.forEach(iconId => {
      if (iconId !== activeIconId) {
        document.getElementById(iconId).src = "resources/images/icons/home.png";
      }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const paymentMethodDropdown = document.getElementById("payment-method");
    const cardDetailsSection = document.getElementById("card-details");
    const gcashPhoneSection = document.getElementById("gcash-phone");
  
    // Initially hide both sections
    cardDetailsSection.style.display = "none";
    gcashPhoneSection.style.display = "none";
  
    paymentMethodDropdown.addEventListener("change", () => {
      const selectedPaymentMethod = paymentMethodDropdown.value;
  
      if (selectedPaymentMethod === "card") {
        cardDetailsSection.style.display = "block";
        gcashPhoneSection.style.display = "none";
      } else if (selectedPaymentMethod === "gcash") {
        cardDetailsSection.style.display = "none";
        gcashPhoneSection.style.display = "block";
      } else {
        // Handle other payment methods or default behavior
        cardDetailsSection.style.display = "none";
        gcashPhoneSection.style.display = "none";
      }
    });
  });
  

// Retrieve data from localStorage
const provider = JSON.parse(localStorage.getItem("selectedProvider"));
const selectedServices = JSON.parse(localStorage.getItem("selectedServices"));

// Populate the provider info
document.getElementById("provider-name").textContent = provider.name;
document.getElementById("provider-category").textContent = provider.category;
document.getElementById("provider-address").textContent = provider.address;
document.getElementById("provider-image").src = provider.image || "default-image.jpg";

// Display selected services with prices
const servicesList = document.getElementById("services-list");
let totalPrice = 0;

selectedServices.forEach(service => {
  const minPrice = Math.floor(provider.priceRange[0] + (provider.priceRange[1] - provider.priceRange[0]) * service.priceFactor * 0.8);
  const maxPrice = Math.floor(provider.priceRange[0] + (provider.priceRange[1] - provider.priceRange[0]) * service.priceFactor);

  const listItem = document.createElement("li");
  listItem.innerHTML = `
    ${service.name}: ${minPrice} - ${maxPrice} PHP
  `;
  servicesList.appendChild(listItem);

  totalPrice += minPrice;
});

// Append total price
const totalPriceElement = document.createElement("li");
totalPriceElement.innerHTML = `<strong>Total Estimated Price: ${totalPrice} PHP</strong>`;
servicesList.appendChild(totalPriceElement);

// Confirm booking and retrieve additional data
function confirmBooking() {
    // Retrieve user input from the form
    const homeAddress = document.getElementById("home-address").value;
    const timeFrame = document.getElementById("time-frame").value;
    const paymentMethod = document.getElementById("payment-method").value;
    const comments = document.getElementById("comments").value;

    // Collect selected services
    const selectedServices = [];
    document.querySelectorAll("input[name='specificService']:checked").forEach(checkbox => {
        selectedServices.push({ name: checkbox.value, price: checkbox.dataset.price });
    });

    // Retrieve existing bookings or initialize as an empty array
    let userBookings = JSON.parse(localStorage.getItem("userBookings")) || [];

    // Create new booking data, including provider category and a unique ID
    const bookingData = {
        id: Date.now(),  // Unique identifier
        providerName: provider.name,
        providerLogo: provider.image,
        providerCategory: provider.category,
        services: selectedServices,
        homeAddress,
        timeFrame,
        paymentMethod,
        comments,
        bookingDate: new Date().toLocaleString(),
        progressStep: 0  // Initialize progress step at 0
    };

    // Add the new booking to the array
    userBookings.push(bookingData);

    // Save the updated bookings array to localStorage
    localStorage.setItem("userBookings", JSON.stringify(userBookings));

    // Create a notification
    const notificationData = {
        message: `${provider.name} (${provider.category}) has been booked, currently awaiting approval.`,
        time: new Date().toLocaleString()
    };

    let notifications = JSON.parse(localStorage.getItem("notifications")) || [];
    notifications.push(notificationData);
    localStorage.setItem("notifications", JSON.stringify(notifications));

    // Redirect to Activity page
    window.location.href = "activity.html";
}

  