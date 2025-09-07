import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  et: {
    translation: {
      // Navigation
      mainPage: "Avaleht",
      gallery: "Galerii",
      contact: "Kontakt",

      // Main page
      aboutTitle: "Askordoors OÜ",
      aboutDescription:
        "Askordoors OÜ valmistab ja paigaldab kõrgekvaliteedilisi eritellimusel uksi. Meie tooted valmivad parimatest saadaolevatest materjalidest ning kogenud meistrite käe all.",
      artistPlatform:
        "<strong>Pakume laia valikut uksi</strong>: maja välisuksed, korteri välisuksed, kortermajade välisuksed, laiendiga välisuksed, muinsuskaitse uksed, välisuksed miljööväärtuslikule hoonele, kahepoolsed paarisuksed ning palju muud.",
      uniqueMaterials:
        "Kõiki uksi valmistame vastavalt Sinu soovile – võid saata foto (nt olemasolevast uksest), internetilingi või lihtsalt kirjelduse soovitud uksetüübist. Uste disaini saab kasutada välis- ja siseustel. <strong>Tarneaeg on 3–5 nädalat pärast 50% ettemaksu tasumist</strong>.",

      // Gallery
      galleryTitle: "Meie tööd",
      galleryDescription: "Vaadake meie hiljutiste projektide galeriid",
      galleryNotes: {
        door1: "Välisuks, nr 1001",
        door2: "Siseuks, nr 2001",
        door3: "Välisuks, nr 1002",
        doorA4: "Välisuks, nr 1003",
        doorA5: "Siseuks, nr 2002",
        doorA6: "Välisuks, nr 1004",
        doorA7_2: "Välisuks, nr 1005",
        doorA9_2: "Välisuks, nr 1006",
        doorA11: "Välisuks, nr 1007",
        door12: "Välisuks, nr 1008",
        doorA13_2: "Siseuks, nr 2003",
      },

      // Contact form
      contactTitle: "Võtke meiega ühendust",
      contactDescription: "Sobiva mõõdu ja tooni jaoks - Küsi pakkumist siit:",
      name: "Nimi",
      email: "E-post",
      phone: "Telefon",
      message: "Sõnum",
      submit: "Saada",
      namePlaceholder: "Teie nimi",
      emailPlaceholder: "teie@email.ee",
      phonePlaceholder: "Telefon (valikuline)",
      messagePlaceholder: "Teie sõnum...",

      // Form validation
      nameRequired: "Nimi on kohustuslik",
      emailRequired: "E-post on kohustuslik",
      emailInvalid: "Palun sisestage kehtiv e-posti aadress",
      phoneInvalid: "Palun sisestage kehtiv telefoninumber",
      messageRequired: "Sõnum on kohustuslik",

      // Success messages
      formSuccess: "Täname teiega ühendust võtmast! Vastame teile peagi.",

      // Footer
      rightsReserved: "Kõik õigused kaitstud",
      termsAndConditions: "Tingimused ja Tingimused",
      privacyPolicy: "Privaatsuspoliitika",

      // Language selection
      language: "Keel",

      // New translations from Index.tsx
      sectionA: "(A)",
      furnitureWithValue: "Toode väärtusega",
      designedWithPurpose: "Disainitud eesmärgiga",
      ecoFriendlyDescription: "Avastage stiilsed uksed kaasaegseks eluks",
      galleryButton: "GALERII →",
      contactButton: "KONTAKT →",
      section01: "01",
      section02: "02",
      section03: "03",
      speakDirectly: "Võtke meiega otse ühendust:",
    },
  },
  en: {
    translation: {
      // Navigation
      mainPage: "Home",
      gallery: "Gallery",
      contact: "Contact",

      // Main page
      aboutTitle: "Askordoors OÜ",
      aboutDescription:
        "Askordoors OÜ manufactures and installs high-quality custom-made doors. Our products are crafted from the finest materials available and by the hands of experienced craftsmen.",
      artistPlatform:
        "<strong>We offer a wide range of doors</strong>: exterior doors for houses, exterior doors for apartments, exterior doors for apartment buildings, exterior doors with side panels, heritage conservation doors, exterior doors for buildings of historical or environmental value, double-leaf doors, and much more.",
      uniqueMaterials:
        "All doors are made according to your wishes – you can send us a photo (e.g., of an existing door), a link from the internet, or simply a description of the desired door type. The design of doors can be used for exterior and interior doors. <strong>Delivery time is 3–5 weeks after a 50% prepayment</strong>.",

      // Gallery
      galleryTitle: "Our Work",
      galleryDescription: "Browse our gallery of recent projects",
      galleryNotes: {
        door1: "Exterior door, no. 1001",
        door2: "Interior door, no. 2001",
        door3: "Exterior door, no. 1002",
        doorA4: "Exterior door, no. 1003",
        doorA5: "Interior door, no. 2002",
        doorA6: "Exterior door, no. 1004",
        doorA7_2: "Exterior door, no. 1005",
        doorA9_2: "Exterior door, no. 1006",
        doorA11: "Exterior door, no. 1007",
        door12: "Exterior door, no. 1008",
        doorA13_2: "Interior door, no. 2003",
      },

      // Contact form
      contactTitle: "Get in Touch",
      contactDescription:
        "For the right size and shade – Request an offer here:",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      submit: "Submit",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      phonePlaceholder: "Phone (optional)",
      messagePlaceholder: "Your message...",

      // Form validation
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email address",
      phoneInvalid: "Please enter a valid phone number",
      messageRequired: "Message is required",

      // Success messages
      formSuccess: "Thank you for contacting us! We will respond shortly.",

      // Footer
      rightsReserved: "All rights reserved",
      termsAndConditions: "Terms & Conditions",
      privacyPolicy: "Privacy Policy",

      // Language selection
      language: "Language",

      // New translations from Index.tsx
      sectionA: "(A)",
      furnitureWithValue: "Product with Value",
      designedWithPurpose: "Designed with Purpose",
      ecoFriendlyDescription: "Discover stylish doors for modern living",
      galleryButton: "GALLERY →",
      contactButton: "CONTACT →",
      section01: "01",
      section02: "02",
      section03: "03",
      speakDirectly: "Speak with us directly:",
    },
  },
  fi: {
    translation: {
      // Navigation
      mainPage: "Etusivu",
      gallery: "Galleria",
      contact: "Yhteystiedot",

      // Main page
      aboutTitle: "Askordoors OÜ",
      aboutDescription:
        "Askordoors OÜ valmistaa ja asentaa korkealaatuisia mittatilausovia. Tuotteemme valmistetaan parhaista saatavilla olevista materiaaleista kokeneiden mestareiden käsissä.",
      artistPlatform:
        "<strong>Tarjoamme laajan valikoiman ovia</strong>: omakotitalon ulko-ovet, kerrostalon ulko-ovet, asuinkerrostalojen ulko-ovet, laajennetut ulko-ovet, suojellun rakennuksen ovet (räätälöidyt ovet, rakennusperintölailla suojellut ovet), ovet rakennuksiin, joilla on kulttuurihistoriallista arvoa, kaksiosaiset pariovet ja paljon muuta.",
      uniqueMaterials:
        "Kaikki ovet valmistetaan toiveidesi mukaan – voit lähettää valokuvan (esim. vanhasta ovesta), linkin internetistä tai yksinkertaisesti kuvauksen haluamastasi ovimallista. Ovien suunnittelua voidaan käyttää ulko- ja sisäovissa. <strong>Toimitusaika on 3–5 viikkoa 50 % ennakkomaksun jälkeen</strong>.",

      // Gallery
      galleryTitle: "Meidän työ",
      galleryDescription: "Tutustu viimeisimpien projektien galleriaan",
      galleryNotes: {
        door1: "Ulko-ovi, nro 1001",
        door2: "Sisäovi, nro 2001",
        door3: "Ulko-ovi, nro 1002",
        doorA4: "Ulko-ovi, nro 1003",
        doorA5: "Sisäovi, nro 2002",
        doorA6: "Ulko-ovi, nro 1004",
        doorA7_2: "Ulko-ovi, nro 1005",
        doorA9_2: "Ulko-ovi, nro 1006",
        doorA11: "Ulko-ovi, nro 1007",
        door12: "Ulko-ovi, nro 1008",
        doorA13_2: "Sisäovi, nro 2003",
      },

      // Contact form
      contactTitle: "Ota yhteyttä",
      contactDescription:
        "Sopivaa kokoa ja sävyä varten - Pyydä tarjous täältä:",
      name: "Nimi",
      email: "Sähköposti",
      phone: "Puhelin",
      message: "Viesti",
      submit: "Lähetä",
      namePlaceholder: "Sinun nimesi",
      emailPlaceholder: "sinun@email.fi",
      phonePlaceholder: "Puhelin (valinnainen)",
      messagePlaceholder: "Sinun viestisi...",

      // Form validation
      nameRequired: "Nimi on pakollinen",
      emailRequired: "Sähköposti on pakollinen",
      emailInvalid: "Anna kelvollinen sähköpostiosoite",
      phoneInvalid: "Anna kelvollinen puhelinnumero",
      messageRequired: "Viesti on pakollinen",

      // Success messages
      formSuccess: "Kiitos yhteydenotostasi! Vastaamme pian.",

      // Footer
      rightsReserved: "Kaikki oikeudet pidätetään",
      termsAndConditions: "Ehdot ja edellytykset",
      privacyPolicy: "Tietosuojakäytäntö",

      // Language selection
      language: "Kieli",

      // New translations from Index.tsx
      sectionA: "(A)",
      furnitureWithValue: "Tuote, jolla on arvoa",
      designedWithPurpose: "Suunniteltu tarkoituksella",
      ecoFriendlyDescription: "Tutustu tyylikkäisiin oviin moderniin elämään",
      galleryButton: "GALLERIA →",
      contactButton: "YHTEYS →",
      section01: "01",
      section02: "02",
      section03: "03",
      speakDirectly: "Ota meihin yhteyttä suoraan:",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "et", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
