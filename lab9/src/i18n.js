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
            "SelectSport":"Select a sport",
            "searchteam":"I am looking for a team",
            "Reservation":"Book",
            "searchplayer":"I'm looking for a player",
            "Submit":"Submit",
            "Balls":"Balls and color shirts for each team are included in the prices.",
            "Soccer":"Soccer",
            "SelectDate":"Select an available date",
            "NumberPlayers":"Number of players",
            "Personalinfo":"Personal Information",
            "Firtname":"First Name",
            "Lastnam":"Last Name",
            "PhoneNum":"Phone Number",
            "Book":"Book",
            "Selectlevel":"Select the level",
            "language":"Language",
            "CompleteTeam":"Complete Team",
            "Rates":"Rates",
            "Prices":"Rates",

        }
      },
      fr: {
        translations: {
          "SelectSport":"Sélectionnez un sport",
          "searchteam":"Je recherche une équipe",
          "Reservation":"Réserver",
          "searchplayer":"Je recherche un joueur",
          "Submit":"Soumettre",
          "Balls":"Les balles et gilets colorés sont inclus dans le prix!",
          "Soccer":"Football",
          "SelectDate":"Sélectionnez une date disponible.",
          "NumberPlayers":"Nombre de joueurs",
          "Personalinfo":"Informations personnelles",
          "Firtname":"Prénom",
          "Lastnam":"Nom",
          "PhoneNum":"Numéro de téléphone",
          "Book":"Réserver",
          "Selectlevel":"Selectionnez un niveau",
          "language":"Langue",
          "CompleteTeam":"Compléter equipe",
          "Rates":"Tarifs",
          "Prices":"Nos Tarifs",
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
