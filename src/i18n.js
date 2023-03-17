import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    title: 'Weather APP',
                    detailTitle: 'Forecast for 5 days.',
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
            }
        }
    });

export default i18n;