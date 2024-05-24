function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Function to apply preferences
function applyPreferences() {
  var fontSize = getCookie('fontsize');
  var fontColor = getCookie('fontcolor');
  if (fontSize) {
    document.body.style.fontSize = fontSize + 'px';
    document.getElementById('fontsize').value = fontSize;
  }
  if (fontColor) {
    document.body.style.color = fontColor;
    document.getElementById('fontcolor').value = fontColor;
  }
}

// Apply saved preferences on page load
window.onload = applyPreferences;

// Handle form submission
document.getElementById('preferencesForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  var fontSize = document.getElementById('fontsize').value;
  var fontColor = document.getElementById('fontcolor').value;

  // Set cookies for preferences
  setCookie('fontsize', fontSize, 365);
  setCookie('fontcolor', fontColor, 365);

  // Apply preferences immediately
  document.body.style.fontSize = fontSize + 'px';
  document.body.style.color = fontColor;
});