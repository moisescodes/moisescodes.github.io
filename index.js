const THEME_DARK = "background-dark";
const THEME_LIGHT = "background-light";
const THEME_ROOT = document.querySelector("html");
const THEME_TOGGLE = document.querySelector("#themeSwitcher");

/**
 * Sets root and button classes based on given theme
 * @param {string} theme `background-light` or `background-dark`
 */
function setTheme(theme) {
  THEME_ROOT.className = theme;

  // Toggle gets the "opposite" of given theme
  if (theme === THEME_LIGHT) {
    THEME_TOGGLE.className = "dark";
  } else if (theme === THEME_DARK) {
    THEME_TOGGLE.className = "light";
  }
}

/**
 * Toggles the page theme based on current class of root theme element.
 */
function toggleTheme() {
  console.log("Switching themes...");

  if (THEME_ROOT.className === THEME_LIGHT) {
    localStorage.setItem("savedTheme", THEME_DARK);
    setTheme(THEME_DARK);
  } else {
    localStorage.setItem("savedTheme", THEME_LIGHT);
    setTheme(THEME_LIGHT);
  }
}

if (localStorage.getItem("savedTheme")) {
  console.log("Setting theme from storage...");
  setTheme(localStorage.getItem("savedTheme"));
}

THEME_TOGGLE.addEventListener("click", toggleTheme);
