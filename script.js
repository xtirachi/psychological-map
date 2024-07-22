const sheetsUrls = {
    'Azerbaijan': {
        az: 'https://docs.google.com/spreadsheets/d/1x_BGKK-XFQQc_WIpCkB2tDDkPdJ_-iIrcobeOVcPBVQ/edit?usp=sharing',
        en: 'https://docs.google.com/spreadsheets/d/1x_BGKK-XFQQc_WIpCkB2tDDkPdJ_-iIrcobeOVcPBVQ/edit?usp=sharing',
        ru: 'https://docs.google.com/spreadsheets/d/1x_BGKK-XFQQc_WIpCkB2tDDkPdJ_-iIrcobeOVcPBVQ/edit?usp=sharing'
    },
    'Russia': {
        az: 'https://docs.google.com/spreadsheets/d/1x_BGKK-XFQQc_WIpCkB2tDDkPdJ_-iIrcobeOVcPBVQ/edit?usp=sharing',
        en: 'https://docs.google.com/spreadsheets/d/1x_BGKK-XFQQc_WIpCkB2tDDkPdJ_-iIrcobeOVcPBVQ/edit?usp=sharing',
        ru: 'https://docs.google.com/spreadsheets/d/1x_BGKK-XFQQc_WIpCkB2tDDkPdJ_-iIrcobeOVcPBVQ/edit?usp=sharing'
    },
    'England': {
        az: 'https://docs.google.com/spreadsheets/d/1x_BGKK-XFQQc_WIpCkB2tDDkPdJ_-iIrcobeOVcPBVQ/edit?usp=sharing',
        en: 'YOUR_Ehttps://docs.google.com/spreadsheets/d/1x_BGKK-XFQQc_WIpCkB2tDDkPdJ_-iIrcobeOVcPBVQ/edit?usp=sharingNGLISH_SHEET_PUBLISHED_URL',
        ru: 'https://docs.google.com/spreadsheets/d/1x_BGKK-XFQQc_WIpCkB2tDDkPdJ_-iIrcobeOVcPBVQ/edit?usp=sharing'
    }
};

let selectedCountry = '';
let selectedLanguage = '';

function selectCountry(country) {
    selectedCountry = country;
    document.getElementById('introduction').classList.add('hidden');
    document.getElementById('language-selection').classList.remove('hidden');
    const languageButtons = document.getElementById('language-buttons');
    languageButtons.innerHTML = `
        <button onclick="setLanguage('az')" class="bg-blue-500 text-white px-4 py-2 rounded">Azərbaycan</button>
        <button onclick="setLanguage('ru')" class="bg-blue-500 text-white px-4 py-2 rounded">Русский</button>
        <button onclick="setLanguage('en')" class="bg-blue-500 text-white px-4 py-2 rounded">English</button>
    `;
}

function setLanguage(language) {
    selectedLanguage = language;
    document.getElementById('language-selection').classList.add('hidden');
    document.getElementById('questionnaire-container').classList.remove('hidden');
    Tabletop.init({
        key: sheetsUrls[selectedCountry][language],
        callback: showQuestions,
        simpleSheet: true
    });
}

function showQuestions(data) {
    const form = document.getElementById('questionnaire');
    form.innerHTML = ''; // Clear previous questions

    data.forEach((row, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question mb-6';

        const questionText = document.createElement('p');
        questionText.textContent = row['Question text'];
        questionDiv.appendChild(questionText);

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'flex space-x-2 mb-4';

        for (let i = 0; i <= 4; i++) {
            const label = document.createElement('label');
            label.innerHTML = `<input type="radio" name="q${index + 1}" value="${i}" required> ${i}`;
            optionsDiv.appendChild(label);
        }

        questionDiv.appendChild(optionsDiv);
        form.appendChild(questionDiv);
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'bg-blue-500 text-white px-4 py-2 rounded';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const scores = {
        'Verbal-Linguistic Intelligence': 0,
        'Logical-Mathematical Intelligence': 0,
        'Visual-Spatial Intelligence': 0,
        'Bodily-Kinesthetic Intelligence': 0,
        'Interpersonal Intelligence': 0,
        'Naturalist Intelligence': 0,
        'Musical Intelligence': 0,
        'Intrapersonal Intelligence': 0
    };

    formData.forEach((value, key) => {
        const intelligenceType = getIntelligenceType(key);
        scores[intelligenceType] += parseInt(value);
    });

    const highestScore = Math.max(...Object.values(scores));
    const predominantIntelligence = Object.keys(scores).find(key => scores[key] === highestScore);

    fetchResultContent(predominantIntelligence);
}

function getIntelligenceType(questionId) {
    // Map question IDs to intelligence types
    // Ensure this map matches the question-to-intelligence mapping in your Google Sheet
    const intelligenceMapping = {
        q1: 'Verbal-Linguistic Intelligence',
        q2: 'Verbal-Linguistic Intelligence',
        q3: 'Logical-Mathematical Intelligence',
        q4: 'Logical-Mathematical Intelligence',
        q5: 'Visual-Spatial Intelligence',
        q6: 'Visual-Spatial Intelligence',
        q7: 'Bodily-Kinesthetic Intelligence',
        q8: 'Bodily-Kinesthetic Intelligence',
        q9: 'Interpersonal Intelligence',
        q10: 'Interpersonal Intelligence',
        q11: 'Naturalist Intelligence',
        q12: 'Naturalist Intelligence',
        q13: 'Musical Intelligence',
        q14: 'Musical Intelligence',
        q15: 'Intrapersonal Intelligence',
        q16: 'Intrapersonal Intelligence'
    };

    return intelligenceMapping[questionId];
}

function fetchResultContent(intelligenceType) {
    Tabletop.init({
        key: sheetsUrls[selectedCountry][selectedLanguage],
        callback: data => showResult(data, intelligenceType),
        simpleSheet: true
    });
}

function showResult(data, intelligenceType) {
    const resultContent = data.find(row => row['Intelligence Type'] === intelligenceType);
    if (resultContent) {
        const docDefinition = {
            content: [
                { text: `Results: ${intelligenceType}`, style: 'header' },
                { text: resultContent['Description'], style: 'subheader' },
                { text: resultContent['Tips'], style: 'bold' }
            ],
            styles: {
                header: { fontSize: 18, bold: true },
                subheader: { fontSize: 16, bold: true, margin: [0, 10, 0, 10] },
                bold: { bold: true, margin: [0, 10, 0, 10] },
                italic: { italics: true, margin: [0, 10, 0, 10] }
            }
        };

        const resultContainer = document.getElementById('pdf-viewer');
        resultContainer.innerHTML = ''; // Clear previous result

        pdfMake.createPdf(docDefinition).getDataUrl((dataUrl) => {
            const iframe = document.createElement('iframe');
            iframe.src = dataUrl;
            iframe.className = 'w-full h-96';
            resultContainer.appendChild(iframe);
            document.getElementById('result').classList.remove('hidden');
        });

        pdfMake.createPdf(docDefinition).download('test_results.pdf'); // Enable download on mobile
    }
}

function goBackToMain() {
    window.location.href = 'index.html';
}
