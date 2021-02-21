function switchTheme() {
  console.log("Switching themes...");
  const el = document.querySelector("html");
  const btn = document.querySelector("#themeSwitcher");

  if (el.className === "background-light") {
    el.className = "background-dark";
    btn.className = "light";
  } else {
    el.className = "background-light";
    btn.className = "dark";
  }
}

document.querySelector("#themeSwitcher").addEventListener("click", switchTheme);
