document.addEventListener("DOMContentLoaded", function () {
  detectAndInitLanguage();

  // Main logic to determine language before i18next.init
  async function detectAndInitLanguage() {
    const lang = await getInitialLanguage();
    i18next
      .use(i18nextHttpBackend)
      .init({
        lng: lang,
        fallbackLng: 'en',
        backend: {
          loadPath: '/locales/{{lng}}.json'
        },
        interpolation: {
          escapeValue: false
        }
      }, function () {
        updateContent();
        handleDropdownsInit();
        window.addEventListener("resize", handleDropdownsInit);


      });
  }

  // Determine initial language
  async function getInitialLanguage() {
    const params = new URLSearchParams(window.location.search);
    const langFromUrl = params.get('lang');

    if (langFromUrl) {
      localStorage.setItem('preferredLang', langFromUrl);
      return langFromUrl;
    }

    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
      return savedLang;
    }

    // Fallback to IP-based detection
    try {
      const res = await fetch("https://ipapi.co/json");
      const data = await res.json();
      const country = data.country_name;

      console.log("IP-based country detected:", country);

      const countryToLangMap = {
        // English-speaking (default, fallback)
        "United States": "en",
        "United Kingdom": "en",

        // "India":"es",
        // Arabic-speaking
        "Saudi Arabia": "ar",
        "United Arab Emirates": "ar",
        "Qatar": "ar",
        "Egypt": "ar",
        "Jordan": "ar",
        "Morocco": "ar",
        "Tunisia": "ar",

        "Bangladesh": "bn",

        // Zulu / Afrikaans (fallback to English for now)
        "South Africa": "zu",

        // Spanish
        "Spain": "es",
        "Mexico": "es",
        "Colombia": "es",
        "Argentina": "es",
        "Peru": "es",
        "Chile": "es",

        // Portuguese
        "Portugal": "pt",
        "Brazil": "pt",

        // Indonesian / Malay
        "Indonesia": "id",
        "Malaysia": "ms",

        // Filipino
        "Philippines": "fil",

        // Korean
        "South Korea": "ko",

        // Chinese
        "China": "zh",
        "Taiwan": "zh",

        // Thai
        "Thailand": "th",

        // Irish Gaelic
        "Ireland": "ga",

        // Dutch
        "Netherlands": "nl",
        "Belgium": "nl",

        // Bosnian
        "Bosnia and Herzegovina": "bs",

        // Bulgarian
        "Bulgaria": "bg",

        // Croatian
        "Croatia": "hr",

        // Czech
        "Czech Republic": "cs",

        // Danish
        "Denmark": "da",

        // Estonian
        "Estonia": "et",

        // Finnish
        "Finland": "fi",

        // German
        "Germany": "de",
        "Austria": "de",
        "Switzerland": "de",

        // Hungarian
        "Hungary": "hu",

        // Icelandic
        "Iceland": "is",

        // Italian
        "Italy": "it",

        // Latvian
        "Latvia": "lv",

        // Lithuanian
        "Lithuania": "lt",

        // Luxembourgish
        "Luxembourg": "lb",

        // Macedonian
        "North Macedonia": "mk",

        // Maltese
        "Malta": "mt",

        // Romanian
        "Romania": "ro",

        // Montenegrin
        "Montenegro": "sr",

        // Norwegian
        "Norway": "no",

        // Polish
        "Poland": "pl",

        // Slovak
        "Slovakia": "sk",

        // Swedish
        "Sweden": "sv",

        // Ukrainian
        "Ukraine": "uk",

        // French
        "France": "fr",
        "Canada": "fr",

        // Russian
        "Russia": "ru"
      };

      const detectedLang = countryToLangMap[country] || 'en';
      localStorage.setItem('preferredLang', detectedLang);
      return detectedLang;
    } catch (e) {
      console.warn("IP detection failed:", e);
      return 'en'; // fallback
    }
  }

  // Set language when user selects it
  function setLanguage(langCode) {
    i18next.changeLanguage(langCode, () => {
      updateContent();
      localStorage.setItem('preferredLang', langCode);

      const url = new URL(window.location.href);
      url.searchParams.set("lang", langCode);
      window.history.replaceState(null, "", url);
    });
  }

  // Update all text from translations
  function updateContent() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.innerHTML = i18next.t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.placeholder = i18next.t(key);
    });

    document.querySelectorAll("[data-error-key]").forEach(el => {
      const key = el.getAttribute("data-error-key");
      el.textContent = i18next.t(key);
    });
  }

  // Dropdown logic
  function initDropdown1() {
    const dropdownSelected = document.getElementById('dropdownSelected1');
    const dropdownOptions = document.getElementById('dropdownOptions1');
    const selectedFlag = document.getElementById('selectedFlag1');
    const selectedLanguage = document.getElementById('selectedLanguage1');
    const arrowDown = dropdownSelected.querySelector('.arrow-down1'); // Arrow element

    // Toggle dropdown on click
    dropdownSelected.addEventListener("click", function (event) {
      dropdownOptions.classList.toggle("dropdown-open1");
      arrowDown.classList.toggle("dropdown-open1"); // Rotate arrow when dropdown opens
      event.stopPropagation(); // Prevent click from closing the dropdown
    });

    // Handle selection of an option
    document.querySelectorAll("#dropdownOptions1 .dropdown-option1").forEach((option) => {
      option.addEventListener("click", function () {
        const selectedValue = this.getAttribute("data-value");
        const flag = this.getAttribute("data-flag");
        const text = this.textContent.trim();

        selectedFlag.src = flag;
        selectedLanguage.textContent = text;

        setLanguage(selectedValue);
        dropdownOptions.classList.remove("dropdown-open1");
        arrowDown.classList.remove("dropdown-open1"); // Reset arrow on close
      });
    });

    // Close dropdown if click happens outside of it
    document.addEventListener("click", function (event) {
      if (!dropdownSelected.contains(event.target) && !dropdownOptions.contains(event.target)) {
        dropdownOptions.classList.remove("dropdown-open1");
        arrowDown.classList.remove("dropdown-open1");
      }
    });

    // Set dropdown display to current language
    const lang = i18next.language;
    const current = dropdownOptions.querySelector(`[data-value="${lang}"]`);
    if (current) {
      selectedFlag.src = current.getAttribute("data-flag");
      selectedLanguage.textContent = current.textContent.trim();
    }
  }
  function initDropdown() {
    const dropdownSelected = document.getElementById('dropdownSelected');
    const dropdownOptions = document.getElementById('dropdownOptions');
    const selectedFlag = document.getElementById('selectedFlag');
    const selectedLanguage = document.getElementById('selectedLanguage');
    const arrowDown = dropdownSelected.querySelector('.arrow-down'); // Arrow element

    // Toggle dropdown on click
    dropdownSelected.addEventListener("click", function (event) {
      dropdownOptions.classList.toggle("dropdown-open");
      arrowDown.classList.toggle("dropdown-open"); // Rotate arrow when dropdown opens
      event.stopPropagation(); // Prevent click from closing the dropdown
    });

    // Handle selection of an option
    document.querySelectorAll("#dropdownOptions .dropdown-option").forEach((option) => {
      option.addEventListener("click", function () {
        const selectedValue = this.getAttribute("data-value");
        const flag = this.getAttribute("data-flag");
        const text = this.textContent.trim();

        selectedFlag.src = flag;
        selectedLanguage.textContent = text;

        setLanguage(selectedValue);
        dropdownOptions.classList.remove("dropdown-open");
        arrowDown.classList.remove("dropdown-open"); // Reset arrow on close
      });
    });

    // Close dropdown if click happens outside of it
    document.addEventListener("click", function (event) {
      if (!dropdownSelected.contains(event.target) && !dropdownOptions.contains(event.target)) {
        dropdownOptions.classList.remove("dropdown-open");
        arrowDown.classList.remove("dropdown-open");
      }
    });

    // Set dropdown display to current language
    const lang = i18next.language;
    const current = dropdownOptions.querySelector(`[data-value="${lang}"]`);
    if (current) {
      selectedFlag.src = current.getAttribute("data-flag");
      selectedLanguage.textContent = current.textContent.trim();
    }
  }

  // Responsive dropdown initializer
  let desktopDropdownInitialized = false;
  let mobileDropdownInitialized = false;

  function handleDropdownsInit() {
    const width = window.innerWidth;

    if (width >= 769) {
      if (!desktopDropdownInitialized) {
        initDropdown();
        desktopDropdownInitialized = true;
      }
      mobileDropdownInitialized = false;
    }

    if (width <= 768) {
      if (!mobileDropdownInitialized) {
        initDropdown1();
        mobileDropdownInitialized = true;
      }
      desktopDropdownInitialized = false;
    }
  }


});
