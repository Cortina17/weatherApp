import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    title: 'Weather APP',
                    detailTitle: '5-Day Forecast.',
                    languages: 'Languages',
                    fieldTitle: 'Get your weather info here!',
                    fieldSubTitle: 'Please, fill only the city field or both ZIP code and country.',
                    cityLabel: 'City',
                    zipLabel: 'ZIP Code',
                    countryLabel: 'Country Code',
                    searchBtn: 'Search',
                    tableTitle: 'Locations History',
                    tableCity: 'City',
                    tableTemp: 'Temperature',
                    tableDesc: 'Description',
                    tableForecast: '5-day forecast',
                    info: "Today's weather in...",
                    noInfo: "There's no information for the data entered.",
                    viewBtn: 'View',
                    backBtn: 'Back',
                    footer: 'All rights reserved.',
                }
            },
            es: {
                translation: {
                    title: 'Tiempo APP',
                    detailTitle: 'Previsión para 5 días.',
                    languages: 'Idiomas',
                    fieldTitle: 'Obtenga aquí su previsón meteorológica',
                    fieldSubTitle: 'Por favor, rellene solamente `Ciudad` o `CP` y `Código de país`.',
                    cityLabel: 'Ciudad',
                    zipLabel: 'Código Postal',
                    countryLabel: 'Código de país',
                    searchBtn: 'Buscar',
                    tableTitle: 'Historial de búsquedas',
                    tableCity: 'Ciudad',
                    tableTemp: 'Temperatura',
                    tableDesc: 'Descripción',
                    tableForecast: 'Previsión a 5 días',
                    info: "El tiempo de hoy en...",
                    noInfo: 'No hay datos para la búsqueada realizada.',
                    viewBtn: 'Ver',
                    backBtn: 'Volver',
                    footer: 'Todos los derechos reservados.',
                }
            },
            de: {
                translation: {
                    title: 'Wetter-App',
                    detailTitle: 'Vorhersage für 5 Tage.',
                    languages: 'Sprachen',
                    fieldTitle: 'Holen Sie sich hier Ihre Wetterinformationen!',
                    fieldSubTitle: 'Bitte füllen Sie nur das Feld "Stadt" aus oder geben Sie sowohl Postleitzahl als auch Land an.',
                    cityLabel: 'Stadt',
                    zipLabel: 'Postleitzahl',
                    countryLabel: 'Ländercode',
                    searchBtn: 'Suche',
                    tableTitle: 'Standorte Verlauf',
                    tableCity: 'Stadt',
                    tableTemp: 'Temperatur',
                    tableDesc: 'Beschreibung',
                    tableForecast: '5-Tage-Vorhersage',
                    info: "Das heutige Wetter in...",
                    noInfo: "Für die eingegebenen Daten liegen keine Informationen vor.",
                    viewBtn: 'Ansehen',
                    backBtn: 'Zurück',
                    footer: 'Alle Rechte vorbehalten.',
                }
            },
            fr: {
                translation: {
                    title: 'Application Météo',
                    detailTitle: 'Prévision pour 5 jours.',
                    languages: 'Langues',
                    fieldTitle: 'Obtenez vos informations météo ici !',
                    fieldSubTitle: "S'il vous plaît, remplissez uniquement le champ de la ville ou à la fois le code postal et le pays.",
                    cityLabel: 'Ville',
                    zipLabel: 'Code Postal',
                    countryLabel: 'Code de Pays',
                    searchBtn: 'Recherche',
                    tableTitle: 'Historique des emplacements',
                    tableCity: 'Ville',
                    tableTemp: 'Température',
                    tableDesc: 'Description',
                    tableForecast: 'Prévision de 5 jours',
                    info: "Météo d'aujourd'hui à...",
                    noInfo: "Il n'y a pas d'informations pour les données saisies.",
                    viewBtn: 'Voir',
                    backBtn: 'Retour',
                    footer: 'Tous droits réservés.',
                }
            },
            it: {
                translation: {
                    title: 'APP Meteo',
                    detailTitle: 'Previsioni per 5 giorni.',
                    languages: 'Lingue',
                    fieldTitle: 'Ottieni le informazioni sul meteo qui!',
                    fieldSubTitle: 'Per favore, compila solo il campo della città o sia il codice postale che il codice del paese.',
                    cityLabel: 'Città',
                    zipLabel: 'Codice postale',
                    countryLabel: 'Codice paese',
                    searchBtn: 'Cerca',
                    tableTitle: 'Cronologia delle località',
                    tableCity: 'Città',
                    tableTemp: 'Temperatura',
                    tableDesc: 'Descrizione',
                    tableForecast: 'Previsioni per 5 giorni',
                    info: "Il meteo di oggi a...",
                    noInfo: "Non ci sono informazioni per i dati inseriti.",
                    viewBtn: 'Visualizza',
                    backBtn: 'Indietro',
                    footer: 'Tutti i diritti riservati.'
                }
            }
        }
    });

export default i18n;