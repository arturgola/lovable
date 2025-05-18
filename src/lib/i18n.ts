
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
      aboutTitle: 'Kvaliteetsed eritellimusel uksed',
      aboutDescription: 'Oleme pühendunud kõrgekvaliteetsete eritellimusel uste valmistamisele. Meie uksed on valmistatud parimatest materjalidest ja valmistatud kogenud meistrite poolt.',
      learnMore: 'Loe rohkem',
      
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
    }
  },
  en: {
    translation: {
      // Navigation
      mainPage: 'Main Page',
      gallery: 'Gallery',
      contact: 'Contact',
      
      // Main page
      aboutTitle: 'Quality Custom Doors',
      aboutDescription: 'We are dedicated to creating high-quality custom doors. Our doors are made from the finest materials and crafted by experienced artisans.',
      learnMore: 'Learn more',
      
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
