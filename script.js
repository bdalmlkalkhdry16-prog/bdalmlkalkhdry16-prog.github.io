const languageButton = document.getElementById("language");
const nav = document.getElementById("nav");
const menuButton = document.getElementById("menu");
let currentLanguage = "ar";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.dir = language === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-ar][data-en]").forEach((element) => {
    const value = element.dataset[language];
    if (value !== undefined) element.innerHTML = value;
  });

  languageButton.textContent = language === "ar" ? "English" : "العربية";
  languageButton.setAttribute("aria-label", language === "ar" ? "Switch to English" : "التبديل إلى العربية");
  document.title = language === "ar"
    ? "عبدالملك سعيد الخدري | مطور حلول رقمية"
    : "Abdulmalik Saeed Al-Khudri | Digital Solutions Developer";

  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}

languageButton.addEventListener("click", () => {
  setLanguage(currentLanguage === "ar" ? "en" : "ar");
});

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
