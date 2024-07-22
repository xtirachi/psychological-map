const translations = {
    en: {
        title: "Gardner's Multiple Intelligences Test",
        selectLanguage: "Please select a language:",
        part1: "Part 1: English Cultural Heritage and Travel Set",
        q1: "Do you enjoy learning new words in English and using them in everyday conversation?",
        q2: "Do you enjoy learning about English history and telling others about it?",
        q3: "Do you enjoy converting British pounds to your currency and calculating exchange rates?",
        q4: "Do you find it interesting to explore the structure and historical significance of Stonehenge?",
        submit: "Submit",
        resultTitle: "Result",
        backToMain: "Back to Main Page"
    },
    az: {
        title: "Gardner'in Çoxsaylı Zəka Testi",
        selectLanguage: "Zəhmət olmasa, bir dil seçin:",
        part1: "Part 1: İngiltərə Mədəni İrs və Səyahət Seti",
        q1: "İngilis dilində yeni sözlər öyrənib, onları gündəlik danışıqda istifadə etməkdən zövq alırsınızmı?",
        q2: "İngiltərənin tarixi haqqında məlumat öyrənməkdən və başqalarına danışmaqdan zövq alırsınızmı?",
        q3: "İngiltərə funtunu manata çevirməyi və fərqli valyutalar arasındakı əlaqələri hesablamayı xoşlayırsınızmı?",
        q4: "Stounhencin strukturunu və tarixi əhəmiyyətini araşdırmaq maraqlıdırmı?",
        submit: "Göndər",
        resultTitle: "Nəticə",
        backToMain: "Ana səhifəyə qayıt"
    },
    ru: {
        title: "Тест на множественный интеллект Гарднера",
        selectLanguage: "Пожалуйста, выберите язык:",
        part1: "Часть 1: Наследие и путешествия по Англии",
        q1: "Нравится ли вам изучать новые слова на английском языке и использовать их в повседневной речи?",
        q2: "Нравится ли вам узнавать об истории Англии и рассказывать об этом другим?",
        q3: "Нравится ли вам конвертировать британские фунты в вашу валюту и рассчитывать обменные курсы?",
        q4: "Интересно ли вам изучать структуру и историческое значение Стоунхенджа?",
        submit: "Отправить",
        resultTitle: "Результат",
        backToMain: "Вернуться на главную страницу"
    }
};

function setLanguage(language) {
    document.querySelectorAll('[data-translate]').forEach((element) => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    });
}
