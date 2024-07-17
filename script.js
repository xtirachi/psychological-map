const countryData = {
    england: [
        { question: "Yeni İngilis sözlərini öyrənmək və gündəlik danışıqda istifadə etmək mənim üçün çox maraqlıdır.", intelligence: "Verbal-Linguistic Intelligence" },
        { question: "İngiltərə funtunu manata çevirməyi və fərqli valyutalar arasındakı əlaqələri hesablamayı xoşlayıram.", intelligence: "Logical-Mathematical Intelligence" },
        { question: "İngiltərənin məşhur idman növləri olan futbol və rugbi ilə məşğul olmaqdan zövq alıram.", intelligence: "Bodily-Kinesthetic Intelligence" },
        { question: "İngiltərənin flora və faunasını öyrənmək və onlarla maraqlanmaq mənim üçün çox əyləncəlidir.", intelligence: "Naturalist Intelligence" }
        // Add remaining questions...
    ],
    japan: [
        { question: "Yapon dilində söz və ifadələri öyrənmək və istifadə etmək mənim üçün çox maraqlıdır.", intelligence: "Verbal-Linguistic Intelligence" },
        { question: "Yapon pulunu manata çevirərək hesablamağı xoşlayıram.", intelligence: "Logical-Mathematical Intelligence" },
        { question: "Yaponiyanın unikal bitki və heyvanlarını öyrənmək və onlarla maraqlanmaq mənim üçün çox əyləncəlidir.", intelligence: "Naturalist Intelligence" },
        { question: "Hachiko filminin musiqisini dinləmək mənim üçün çox maraqlıdır.", intelligence: "Musical-Rhythmic Intelligence" }
        // Add remaining questions...
    ],
    egypt: [
        { question: "Qədim Misir mədəniyyəti və fironlar haqqında kitablar oxumağı sevirəm.", intelligence: "Verbal-Linguistic Intelligence" },
        { question: "Misirdəki piramidalar haqqında məlumatlar öyrənməyi və onları dostlarımla bölüşməkdən zövq alıram.", intelligence: "Interpersonal Intelligence" },
        { question: "Misirin sirli tarixini öyrənərək özümü kəşf etməkdən zövq alıram.", intelligence: "Intrapersonal Intelligence" },
        { question: "Misir haqqında öyrəndiklərim əsasında gələcək hədəflərimi müəyyən edirəm.", intelligence: "Logical-Mathematical Intelligence" }
        // Add remaining questions...
    ]
};

let selectedCountry = '';
let selectedLanguage = 'az';

function selectCountry(country) {
    selectedCountry = country;
    document.querySelector('.country-selection').classList.add('hidden');
    document.querySelector('.language-selection').classList.remove('hidden');
}

function selectLanguage(language) {
    selectedLanguage = language;
    document.querySelector('.language-selection').classList.add('hidden');
    const questions = countryData[selectedCountry];
    let questionHtml = '';
    questions.forEach((q, index) => {
        questionHtml += `
            <div class="question">
                <label>${q.question}</label>
                <input type="range" min="0" max="5" value="0" id="q${index}" oninput="this.nextElementSibling.value = this.value">
                <output>0</output>
            </div>
        `;
    });

    document.querySelector('.survey-questions').innerHTML = questionHtml;
    document.querySelector('.survey-questions').classList.remove('hidden');
    document.querySelector('.complete-btn').classList.remove('hidden');
    document.querySelector('.back-btn').classList.remove('hidden');
}

function completeSurvey() {
    const questions = countryData[selectedCountry];
    let resultHtml = '<h1>Test nəticələri</h1>';
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

    resultHtml += `
        <h2>Giriş</h2>
        <p>Bu test uşaqların qabiliyyətlərini və maraqlarını müəyyən etmək üçün hazırlanmışdır. Howard Gardnerin Çoxnövlü İntellekt nəzəriyyəsinə əsaslanaraq, hər bir insanın fərqli güclü tərəfləri və zəka növləri var. Bu test, uşaqların bu zəka növlərinə görə maraqlarını və güclü tərəflərini aşkar etməyə kömək edir.</p>
        <h2>Uşaqların Güclü Tərəfləri</h2>
        <p>Test nəticələrinə əsasən, uşağınızın güclü tərəfləri və maraq dairələri aşağıdakı sahələrdədir. Bu sahələr uşağınızın qabiliyyətlərini və maraqlarını inkişaf etdirmək üçün idealdır. Əgər uşağınız bu sahələrdə yüksək nəticələr göstərirsə, bu sahələrdə fəaliyyət göstərmək və əlavə təcrübə qazanmaq onun üçün çox faydalı olacaqdır.</p>
        <h2>İxtiraçı Virtual Səyahətin Faydaları</h2>
        <p>İxtiraçı Virtual Səyahət, uşaqların qabiliyyətlərini inkişaf etdirmək və maraqlarını genişləndirmək üçün nəzərdə tutulmuş əyləncəli və təhsil dolu bir mühit təklif edir. Bu proqram, uşaqların müxtəlif sahələrdə bacarıqlarını artırmaq və yeni maraqlar kəşf etmələri üçün mükəmməl bir vasitədir. Test nəticələrinə əsaslanaraq, İxtiraçı Virtual Səyahət proqramı uşağınızın potensialını maksimuma çatdırmağa kömək edəcəkdir.</p>
        <butt
