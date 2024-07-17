const countryData = {
    england: [
        { question: "I find learning new English words and using them in daily conversation very interesting.", intelligence: "Verbal-Linguistic Intelligence" },
        { question: "I enjoy converting the British pound to manat and calculating relationships between different currencies.", intelligence: "Logical-Mathematical Intelligence" },
        { question: "I enjoy engaging in famous English sports like football and rugby.", intelligence: "Bodily-Kinesthetic Intelligence" },
        { question: "I find learning about England's flora and fauna and being interested in them very fun.", intelligence: "Naturalist Intelligence" }
        // Add remaining questions...
    ],
    japan: [
        { question: "I find learning and using words and expressions in Japanese very interesting.", intelligence: "Verbal-Linguistic Intelligence" },
        { question: "I enjoy converting Japanese currency to manat and calculating the amounts.", intelligence: "Logical-Mathematical Intelligence" },
        { question: "I find learning about Japan's unique plants and animals and being interested in them very fun.", intelligence: "Naturalist Intelligence" },
        { question: "I find listening to the music from the movie Hachiko very interesting.", intelligence: "Musical-Rhythmic Intelligence" }
        // Add remaining questions...
    ],
    egypt: [
        { question: "I enjoy reading books about ancient Egyptian culture and pharaohs.", intelligence: "Verbal-Linguistic Intelligence" },
        { question: "I enjoy learning about the pyramids in Egypt and sharing the information with my friends.", intelligence: "Interpersonal Intelligence" },
        { question: "I enjoy discovering Egypt's mysterious history and learning about myself.", intelligence: "Intrapersonal Intelligence" },
        { question: "I set my future goals based on what I learn about Egypt.", intelligence: "Logical-Mathematical Intelligence" }
        // Add remaining questions...
    ]
};

function selectCountry(country) {
    document.querySelector('.container').innerHTML = `
        <h1>Select Language</h1>
        <div class="language-selection">
            <button onclick="selectLanguage('${country}', 'az')">Azerbaijani</button>
            <button onclick="selectLanguage('${country}', 'ru')">Russian</button>
            <button onclick="selectLanguage('${country}', 'en')">English</button>
        </div>
    `;
}

function selectLanguage(country, language) {
    const questions = countryData[country];
    let questionHtml = '';
    questions.forEach((q, index) => {
        questionHtml += `
            <div class="question">
                <label>${q.question}</label>
                <input type="range" min="0" max="5" value="0" id="q${index}">
            </div>
        `;
    });

    document.querySelector('.container').innerHTML = `
        <h1>Survey</h1>
        <div class="survey-questions">
            ${questionHtml}
        </div>
        <div class="complete-btn">
            <button onclick="completeSurvey('${country}', '${language}')">Complete</button>
        </div>
    `;
}

function completeSurvey(country, language) {
    const questions = countryData[country];
    let resultHtml = '<h1>Survey Results</h1>';
    const scores = {};

    questions.forEach((q, index) => {
        const score = parseInt(document.getElementById(`q${index}`).value);
        if (!scores[q.intelligence]) {
            scores[q.intelligence] = 0;
        }
        scores[q.intelligence] += score;
    });

    for (const [intelligence, score] of Object.entries(scores)) {
        resultHtml += `<p>${intelligence}: ${score}</p>`;
    }

    document.querySelector('.container').innerHTML = resultHtml;
}
