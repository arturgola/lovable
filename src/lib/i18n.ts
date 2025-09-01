import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  et: {
    translation: {
      // Navigation
      mainPage: 'Avaleht',
      gallery: 'Galerii',
      contact: 'Kontakt',
      
      // Main page
      aboutTitle: 'Eritellimusel uksed',
      aboutDescription: 'Oleme pühendunud kõrgekvaliteetsete eritellimusel uste valmistamisele. Meie uksed on valmistatud parimatest materjalidest ja valmistatud kogenud meistrite poolt.',
      learnMore: 'Loe rohkem',
      artistPlatform: 'Me tahame pakkuda kunstnikele platvormi, kus nad saaksid end maailmale näidata. Meie kogu sisaldab kaasaegset mööblit, keraamikat, skulptuure ja disaini. Disainerid ulatuvad tunnustatud meistritest kuni tekkivate talentideni, kusjuures igaühel on oma eripärane lähenemine või stiil, mis on mingil viisil ainulaadne.',
      uniqueMaterials: 'Unikaalsete ja eriliste materjalide kasutamisega, mis suudavad muuta mitmekesiseid interjööre ja stiile, püüavad meie disainid peegeldada kunstiliste päritolude ja oskuste mitmekesisust pidevalt muutuvas ja arenevas ruumis.',
      
      // Gallery
      galleryTitle: 'Meie tööd',
      galleryDescription: 'Vaata meie viimaste projektide galeriid',
      
      // Contact form
      contactTitle: 'Võta meiega ühendust',
      contactDescription: 'Täida allolev vorm ja me võtame teiega peagi ühendust',
      name: 'Nimi',
      email: 'E-post',
      message: 'Sõnum',
      submit: 'Saada',
      namePlaceholder: 'Teie nimi',
      emailPlaceholder: 'teie@email.ee',
      messagePlaceholder: 'Teie sõnum...',

      // Form validation
      nameRequired: 'Nimi on kohustuslik',
      emailRequired: 'E-post on kohustuslik',
      emailInvalid: 'Palun sisestage kehtiv e-posti aadress',
      messageRequired: 'Sõnum on kohustuslik',
      
      // Success messages
      formSuccess: 'Täname teiega ühendust võtmast! Vastame teile peagi.',

      // Footer
      rightsReserved: 'Kõik õigused kaitstud',
      termsAndConditions: 'Tingimused',
      privacyPolicy: 'Privaatsuspoliitika',

      // Language selection
      language: 'Keel',

      // New translations from Index.tsx
      sectionA: '(A)',
      furnitureWithValue: 'Mööbel väärtusega',
      designedWithPurpose: 'Disainitud eesmärgiga',
      ecoFriendlyDescription: 'Avasta keskkonnasõbralik mööbel kaasaegseks eluks, loodud looduse mõtlemisega',
      ecoFriendlyBrand: 'KESKKONNASÕBRALIK BRÄND',
      galleryButton: 'GALERII →',
      contactButton: 'KONTAKT →',
      craftedForDurability: 'Loodud vastupidavuseks, hinnatud kättesaadavuseks',
      sustainablePractices: 'Jätkusuutlikud praktikad ümberkasutamise kaudu',
      collaborateWithCommunities: 'Koostöö keskkonnahuviliste kogukondadega',
      section01: '01',
      section02: '02',
      section03: '03',
    }
  },
  en: {
    translation: {
      // Navigation
      mainPage: 'Home',
      gallery: 'Gallery',
      contact: 'Contact',
      
      // Main page
      aboutTitle: 'Askordoors OÜ',
      aboutDescription: 'We manufacture and install high-quality custom-made doors. Our products are crafted from the finest materials available and by the hands of experienced craftsmen.',
      learnMore: 'Learn more',
      artistPlatform: '<strong>We offer a wide range of doors</strong>: exterior doors for houses, exterior doors for apartments, exterior doors for apartment buildings, exterior doors with side panels, heritage conservation doors, exterior doors for buildings of historical or environmental value, double-leaf doors and much more',
      uniqueMaterials: 'All doors are made according to your wishes – you can send us a photo (e.g., of an existing door), a link from the internet, or simply a description of the desired door type. <strong>Delivery time is 3–5 weeks after a 50% prepayment</strong>.',
      
      // Gallery
      galleryTitle: 'Our Work',
      galleryDescription: 'Browse our gallery of recent projects',
      
      // Contact form
      contactTitle: 'Get in Touch',
      contactDescription: 'Fill out the form below and we\'ll get back to you shortly',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Submit',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Your message...',

      // Form validation
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      emailInvalid: 'Please enter a valid email address',
      messageRequired: 'Message is required',
      
      // Success messages
      formSuccess: 'Thank you for contacting us! We will respond shortly.',

      // Footer
      rightsReserved: 'All rights reserved',
      termsAndConditions: 'Terms & Conditions',
      privacyPolicy: 'Privacy Policy',

      // Language selection
      language: 'Language',

      // New translations from Index.tsx
      sectionA: '(A)',
      furnitureWithValue: 'Product with Value',
      designedWithPurpose: 'Designed with Purpose',
      ecoFriendlyDescription: 'Discover stylish doors for modern living',
      ecoFriendlyBrand: 'LOCAL BRAND',
      galleryButton: 'GALLERY →',
      contactButton: 'CONTACT →',
      craftedForDurability: 'Solid wood, interior door',
      sustainablePractices: 'Solid wood, thickness 43 mm',
      collaborateWithCommunities: 'Pine wood and HDF, 43 mm',
      section01: '01',
      section02: '02',
      section03: '03',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'et', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
