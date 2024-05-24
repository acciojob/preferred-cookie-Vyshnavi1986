//your JS code here. If required.
const fontSize = getCookie("fontSize");
    const color = getCookie("color");
    if (fontSize) {
      document.body.style.fontSize = fontSize;
      document.getElementById("fontsize").value = fontSize;
    }
    if (color) {
      document.body.style.color = color;
      document.getElementById("color").value = color;
    }

    // Function to set user's preferences as cookies
    function setPreferences() {
      const fontSize = document.getElementById("fontsize").value + "px";
      const color = document.getElementById("color").value;
      document.body.style.fontSize = fontSize;
      document.body.style.color = color;
      document.cookie = "fontSize=" + fontSize + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
      document.cookie = "color=" + color + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    }

    // Function to retrieve a cookie by name
    function getCookie(name) {
      const cookies = document.cookie.split("; ");
      for (let i = 0; i < cookies.length; i++) {
        const parts = cookies[i].split("=");
        if (parts[0] === name) {
          return parts[1];
        }
      }
      return null;
    }