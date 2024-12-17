// Navigations
// Redirect to Sign In page
function goToSignIn() {
  window.location.href = "Signin.html";
}

// Sign In Function
function signIn() {
  const phone = document.getElementById('phone').value;

  if (phone) {
    // Set account data for signed-in user
    localStorage.setItem('accountName', 'Josh Ben');  // Placeholder; replace with actual user name if available
    localStorage.setItem('accountPhone', phone);
    alert("Sign In successful!");
    window.location.href = "Homepage.html";
  } else {
    alert("Please enter your phone number.");
  }
}

// Redirect to Sign Up page
function createAccount() {
  window.location.href = "Signup.html";
}

// Sign Up Function
function signUp() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (name && phone) {
    // Set account data for newly signed-up user
    localStorage.setItem("accountName", name);
    localStorage.setItem("accountPhone", phone);
    alert("Sign Up successful!");
    window.location.href = "Homepage.html";
  } else {
    alert("Please fill all the fields!");
  }
}

// Function to handle "Continue as Guest"
function continueAsGuest() {
  localStorage.setItem("accountName", "Guest");
  localStorage.setItem("accountPhone", "Guest User");
  window.location.href = "Homepage.html";
}

// Function to display user details in account section
function displayUserDetails() {
  const name = localStorage.getItem("accountName") || "Guest";
  const phone = localStorage.getItem("accountPhone") || "Guest User";

  document.getElementById("accountName").textContent = name;
  document.getElementById("accountPhone").textContent = phone;
}

// Call displayUserDetails on every page load
document.addEventListener("DOMContentLoaded", () => {
  displayUserDetails();
});

// Toggle Settings Panel
function toggleSettingsPanel() {
  document.getElementById("settingsPanel").classList.toggle("open");
}

// Placeholder functions for other settings options
function accountSettings() {
  alert("Account Settings clicked.");
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
  alert("Logging out User.");
  localStorage.clear();  // Clear data on logout
  window.location.href = "Signin.html";
}

function goToHomepage() {
  // Redirect to the homepage as guest
  window.location.href = "Homepage.html"; // Adjust the URL accordingly
}

// Toggle settings panel visibility
function toggleSettingsPanel() {
  document.getElementById("settingsPanel").classList.toggle("open");
}

// Open Account Settings modal
function openAccountSettings() {
  window.location.href = "AccountSettings.html";
  document.getElementById("accountSettingsModal").style.display = "block";
}

// Close Account Settings modal
function closeAccountSettings() {
  document.getElementById("accountSettingsModal").style.display = "none";
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



// Update Profile Picture
function updateProfilePicture(event) {
  const profilePicture = document.getElementById("profilePicture");
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      profilePicture.src = e.target.result;
      localStorage.setItem('profilePicture', e.target.result); // Save in localStorage
    };
    reader.readAsDataURL(file);
  }
}

// Update Phone Number
function updatePhoneNumber() {
  const newPhoneNumber = document.getElementById("editPhoneNumber").value;
  if (newPhoneNumber) {
    document.getElementById("accountPhone").textContent = newPhoneNumber;
    localStorage.setItem('accountPhone', newPhoneNumber); // Save in localStorage
    alert("Phone number updated.");
  } else {
    alert("Please enter a valid phone number.");
  }
}

// Change Password
function changePassword() {
  const currentPassword = document.getElementById("currentPassword").value;
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Placeholder for password verification logic
  const savedPassword = localStorage.getItem('userPassword') || 'password123';

  if (currentPassword !== savedPassword) {
    alert("Current password is incorrect.");
  } else if (newPassword !== confirmPassword) {
    alert("New passwords do not match.");
  } else {
    localStorage.setItem('userPassword', newPassword); // Save new password
    alert("Password changed successfully.");
  }
}

// Load saved profile picture and phone number on page load
document.addEventListener("DOMContentLoaded", () => {
  const accountName = localStorage.getItem('accountName') || 'Guest User';
  const accountPhone = localStorage.getItem('accountPhone') || 'N/A';
  const profilePictureSrc = localStorage.getItem('profilePicture') || 'resources/images/logos/iconuser.png';

  document.getElementById('accountName').textContent = accountName;
  document.getElementById('accountPhone').textContent = accountPhone;
  document.getElementById('profilePicture').src = profilePictureSrc;
});


document.addEventListener("DOMContentLoaded", () => {
  const accountName = localStorage.getItem('accountName') || 'Guest';
  const accountPhone = localStorage.getItem('accountPhone') || 'N/A';

  document.getElementById('accountName').textContent = accountName;
  document.getElementById('accountPhone').textContent = phone;
});

// Load account details dynamically (placeholder)

document.addEventListener("DOMContentLoaded", () => {
  // Retrieve notifications from localStorage
  const notifications = JSON.parse(localStorage.getItem("notifications")) || [];

  const notificationList = document.getElementById("notification-list");

  // Reverse the order to display the most recent notifications at the top
  notifications.reverse().forEach(notification => {
    const notificationItem = document.createElement("div");
    notificationItem.classList.add("notification-item");

    notificationItem.innerHTML = `
      <p>${notification.message}</p>
      <small>${notification.time}</small>
    `;
    
    notificationList.appendChild(notificationItem);
  });
});

function filterAndRedirect(category) {
  window.location.href = `bookings.html?category=${encodeURIComponent(category)}`;
}