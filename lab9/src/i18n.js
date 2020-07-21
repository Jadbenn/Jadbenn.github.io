import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
            "searchteam":"I'm searching a team",
            "exhibition":"Exhibition",
            "about":"About us",
            "language":"Language",
            "title":"Online art meuseum",
            "copyright":"Copyright &copy; Online art meuseum 2020",
            "prev":"Previous",
            "next":"Next",
            "text1":"  A virtual museum is a digital entity that draws on the characteristics of a museum, in order to complement, enhance, or augment the museum experience through personalization, interactivity and richness of content. Virtual museums can perform as the digital footprint of a physical museum, or can act independently, while maintaining the authoritative status as bestowed by the International Council of Museums (ICOM) in its definition of a museum. In tandem with the ICOM mission of a physical museum, the virtual museum is also committed to public access; to both the knowledge systems imbedded in the collections and the systematic, and coherent organization of their display, as well as to their long-term preservation.",
            "text2":"Leave us a message with your email, we will contact you soon",
            "text3":"Your Email",
            "text4":"Your message",
            "text5":"Send",
            "text6":"Leave us a message with your email, we will contact you soon",
            "information":"Information",
            "text8":"This paysage was painted in 1950 by the painter Ellis Trom after his village was rebuilt after the second world war",
            "comments":"Comments"
        }
      },
      fr: {
        translations: {
            "searchteam":"Acceuil",
            "exhibition":"Exhibition",
            "about":"À propos",
            "language":"Language",
            "title":"Musée d'art en ligne",
            "copyright":"Copyright &copy; Musée d'art en ligne 2020",
            "prev":"Precedent",
            "next":"Suivant",
            "text1":"  Un musée virtuel est une entité numérique qui s'appuie sur les caractéristiques d'un musée, afin de compléter, d'améliorer ou d'augmenter l'expérience muséale par la personnalisation, l'interactivité et la richesse du contenu. Les musées virtuels peuvent jouer le rôle de l'empreinte numérique d'un musée physique, ou peuvent agir de manière indépendante, tout en conservant le statut d'autorité accordé par le Conseil international des musées (ICOM) dans sa définition d'un musée. En tandem avec la mission de l'ICOM d'un musée physique, le musée virtuel s'engage également pour l'accès public; à la fois aux systèmes de connaissances intégrés dans les collections et à l'organisation systématique et cohérente de leur présentation, ainsi qu'à leur conservation à long terme.",
            "text3":"Votre Email",
            "text4":"VOtre message",
            "text5":"Envoyer",
            "text6":"Laissez-nous un message avec votre email, nous vous contacterons bientôt",
            "information":"Information",
            "text8":"Ce paysage a été peint en 1950 par le peintre Ellis Trom après la reconstruction de son village après la seconde guerre mondiale",
            "comments":"Commentaires"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
