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
      aboutTitle: 'Quality Custom Doors',
      aboutDescription: 'We are dedicated to creating high-quality custom doors. Our doors are made from the finest materials and crafted by experienced artisans.',
      learnMore: 'Learn more',
      artistPlatform: 'We want to provide artists a platform to show off to the world. Our collection includes contemporary work in furniture, ceramics, sculpture, and design. The designers range from well-known masters to emerging talents, each with their distinctive approach or style that is uniqueically unique in some manner.',
      uniqueMaterials: 'With the use of unique and special materials that can turn diverse interiors and styles, our designs aim to reflect the diversity of artistic origins and skills in a constantly changing and evolving space.',
      
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
      furnitureWithValue: 'Furniture with Value',
      designedWithPurpose: 'Designed with Purpose',
      ecoFriendlyDescription: 'Discover eco-friendly furniture for modern living, crafted with nature in mind',
      ecoFriendlyBrand: 'ECO-FRIENDLY BRAND',
      galleryButton: 'GALLERY →',
      contactButton: 'CONTACT →',
      craftedForDurability: 'Crafted for Durability, Priced for Accessibility',
      sustainablePractices: 'Sustainable Practices Through Repurposing',
      collaborateWithCommunities: 'Collaborate with eco focused communities',
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
