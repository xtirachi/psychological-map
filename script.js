document.getElementById('questionnaire').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const scores = {
        linguistic: 0,
        logicalMathematical: 0,
        bodilyKinesthetic: 0,
        naturalist: 0,
        spatial: 0,
        musical: 0,
        interpersonal: 0,
        intrapersonal: 0,
    };
    
    // Calculate scores
    scores.linguistic += parseInt(formData.get('q1')) + parseInt(formData.get('q13'));
    scores.logicalMathematical += parseInt(formData.get('q2')) + parseInt(formData.get('q8')) + parseInt(formData.get('q9'));
    scores.bodilyKinesthetic += parseInt(formData.get('q3'));
    scores.naturalist += parseInt(formData.get('q4')) + parseInt(formData.get('q10'));
    scores.spatial += parseInt(formData.get('q5')) + parseInt(formData.get('q6')) + parseInt(formData.get('q7')) + parseInt(formData.get('q11')) + parseInt(formData.get('q12'));

    const highestScore = Math.max(scores.linguistic, scores.logicalMathematical, scores.bodilyKinesthetic, scores.naturalist, scores.spatial, scores.musical, scores.interpersonal, scores.intrapersonal);
    let predominantIntelligence = '';

    if (highestScore === scores.linguistic) {
        predominantIntelligence = 'Linguistic Intelligence';
    } else if (highestScore === scores.logicalMathematical) {
        predominantIntelligence = 'Logical-Mathematical Intelligence';
    } else if (highestScore === scores.bodilyKinesthetic) {
        predominantIntelligence = 'Bodily-Kinesthetic Intelligence';
    } else if (highestScore === scores.naturalist) {
        predominantIntelligence = 'Naturalist Intelligence';
    } else if (highestScore === scores.spatial) {
        predominantIntelligence = 'Spatial Intelligence';
    } else if (highestScore === scores.musical) {
        predominantIntelligence = 'Musical Intelligence';
    } else if (highestScore === scores.interpersonal) {
        predominantIntelligence = 'Interpersonal Intelligence';
    } else if (highestScore === scores.intrapersonal) {
        predominantIntelligence = 'Intrapersonal Intelligence';
    }

    const intelligenceDetails = {
        'Linguistic Intelligence': [
            { text: 'Dil Zəkası', style: 'subheader' },
            { text: 'Müəyyənləşdirici Bəyanatlar:', style: 'bold' },
            '"İngilis dilində yeni sözlər öyrənib, onları gündəlik danışıqda istifadə etmək mənim üçün çox maraqlıdır."',
            '"Qlobusda ölkə və şəhərləri tapmaq, onlar haqqında məlumatlar öyrənmək mənə zövq verir."',
            { text: 'İnterpretasiya:', style: 'bold' },
            'Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü dil zəkasına malikdir. Yeni sözləri öyrənmək və danışıqda istifadə etməkdən zövq alırlar və müxtəlif ölkələr və şəhərlər haqqında məlumat öyrənmək onları maraqlandırır.',
            { text: 'Valideynlər üçün Tövsiyələr:', style: 'bold' },
            { text: 'Oxuma Fəaliyyətləri:', style: 'italic' },
            'Fərqli kitabları, o cümlədən bədii, qeyri-bədii və poeziya oxumağa təşviq edin.',
            'Kitabxanaya mütəmadi səfərlər edin və uşağınıza maraqlandıqları kitabları seçməsinə icazə verin.',
            { text: 'Yazı Tapşırıqları:', style: 'italic' },
            'Gündəlik yazı fəaliyyətləri üçün jurnallar təmin edin.',
            'Hekayələr, şeirlər yazmağa və ya səyahət jurnalı saxlamağa təşviq edin.',
            { text: 'Dil Oyunları:', style: 'italic' },
            'Scrabble, Boggle və ya krossvord kimi söz oyunları oynayın.',
            'Lüğət və dil bacarıqlarını inkişaf etdirmək üçün nəzərdə tutulmuş tətbiqlər və onlayn oyunlar təqdim edin.',
            { text: 'Ünsiyyət İmkanları:', style: 'italic' },
            'Maraqları və cari hadisələr haqqında müzakirələrə qoşulun.',
            'Müzakirələr, hekayə anlatma və ya teatr klublarında iştirak etməyə təşviq edin.'
        ],
        'Logical-Mathematical Intelligence': [
            { text: 'Məntiqi-Riyazi Zəka', style: 'subheader' },
            { text: 'Müəyyənləşdirici Bəyanatlar:', style: 'bold' },
            '"İngiltərə funtunu manata çevirməyi və fərqli valyutalar arasındakı əlaqələri hesablamayı xoşlayıram."',
            '"Nyutonun işıq zərrəcikləri eksperimentni anlamaq mənə zövq verir."',
            '"Gizli şifrələri və cavabları tapmaq mənim üçün əyləncəlidir."',
            { text: 'İnterpretasiya:', style: 'bold' },
            'Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü məntiqi-riyazi zəkaya malikdir. Rəqəmlərlə işləmək, tapmacaları həll etmək və elmi eksperimentləri anlamaqdan zövq alırlar.',
            { text: 'Valideynlər üçün Tövsiyələr:', style: 'bold' },
            { text: 'Riyaziyyat və Elm Fəaliyyətləri:', style: 'italic' },
            'Riyaziyyat tapmacaları və məntiq oyunları təmin edin.',
            'Elm eksperimentləri və layihələrində iştirak etməyə təşviq edin.',
            { text: 'Problemlərin Həlli Oyunları:', style: 'italic' },
            'Şahmat, Sudoku və ya qaçış otağı çağırışları kimi strategiya oyunları oynayın.',
            'Kodlama fəaliyyətləri və robot dəstlərini təqdim edin.',
            { text: 'Təhsil Resursları:', style: 'italic' },
            'Riyaziyyat və elm mövzularına yönəlmiş təhsil saytları və tətbiqlərdən istifadə edin.',
            'Birlikdə sənədli filmlər və elm verilişləri izləyərək marağı artırın.',
            { text: 'Real Həyat Tətbiqləri:', style: 'italic' },
            'Büdcələmə, alış-veriş və yemək bişirməklə bağlı fəaliyyətlərdə iştirak edin.',
            'Elm muzeylərinə və planetariumlara səfərlər edin.'
        ],
        'Bodily-Kinesthetic Intelligence': [
            { text: 'Bədən-Kinestetik Zəka', style: 'subheader' },
            { text: 'Müəyyənləşdirici Bəyanatlar:', style: 'bold' },
            '"İngiltərənin məşhur idman növləri olan futbol və rugbi ilə məşğul olmaqdan zövq alıram."',
            { text: 'İnterpretasiya:', style: 'bold' },
            'Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü bədən-kinestetik zəkaya malikdir. Onlar fiziki fəaliyyətlərdə müvəffəqiyyət qazanır və praktik öyrənmə təcrübələrini sevirlər.',
            { text: 'Valideynlər üçün Tövsiyələr:', style: 'bold' },
            { text: 'İdman və Fiziki Fəaliyyətlər:', style: 'italic' },
            'Futbol, rugbi, gimnastika və ya rəqs kimi idman növlərində iştirak etməyə təşviq edin.',
            'Mütəmadi fiziki məşqlər və açıq havada oyun imkanları təmin edin.',
            { text: 'Praktik Öyrənmə:', style: 'italic' },
            'Praktik eksperimentlər və interaktiv öyrənmə vasitələrindən istifadə edin.',
            'Yemək bişirmək, bağçılıq və tikinti layihələri kimi praktiki fəaliyyətlərə cəlb edin.',
            { text: 'Hərəkət Oyunları:', style: 'italic' },
            'Fiziki koordinasiya və hərəkət tələb edən aktiv oyunlar oynayın.',
            'Rəqs və ya idman oyunları kimi fiziki fəaliyyəti əhatə edən video oyunlar təqdim edin.',
            { text: 'Fiziki Çağırışlar:', style: 'italic' },
            'Evdə və ya həyətdə maneə zolaqları və fiziki çağırışlar qurun.',
            'Döyüş sənətləri və ya macəra idman növlərində iştirak etməyə təşviq edin.'
        ],
        'Naturalist Intelligence': [
            { text: 'Təbiət Zəkası', style: 'subheader' },
            { text: 'Müəyyənləşdirici Bəyanatlar:', style: 'bold' },
            '"İngiltərənin flora və faunasını öyrənmək və onlarla maraqlanmaq mənim üçün çox əyləncəlidir."',
            '"Gül əkmə fəaliyyətini və həmin gülün inkişafını müşahidə etməyi sevirəm."',
            { text: 'İnterpretasiya:', style: 'bold' },
            'Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü təbiət zəkasına malikdir. Onlar təbiətə maraq göstərir və bitki, heyvan və ətraf mühitlə bağlı fəaliyyətlərdən zövq alırlar.',
            { text: 'Valideynlər üçün Tövsiyələr:', style: 'bold' },
            { text: 'Təbiət Kəşfi:', style: 'italic' },
            'Parklara, botanika bağlarına və təbiət qoruqlarına mütəmadi səfərlər edin.',
            'Yürüyüş, quş müşahidəsi və təbiət gəzintiləri kimi fəaliyyətlərə təşviq edin.',
            { text: 'Bağçılıq:', style: 'italic' },
            'Toxum əkməkdən bitkilərə qulluq etməyə qədər bağçılıq layihələrinə cəlb edin.',
            'Müxtəlif bitki növləri və onların inkişaf prosesləri haqqında məlumat öyrənməyə imkan yaradın.',
            { text: 'Heyvan Qulluğu:', style: 'italic' },
            'Mümkünsə, ev heyvanlarına qayğı göstərməkdə və ya heyvan sığınacaqlarında könüllü işləməkdə iştirak edin.',
            'Müxtəlif heyvan növləri və onların yaşayış yerləri haqqında məlumat öyrətməyə təşviq edin.',
            { text: 'Ətraf Mühit Təhsili:', style: 'italic' },
            'Ətraf mühit problemləri və qorunmanın əhəmiyyəti haqqında müzakirələr aparın.',
            'Ekoloji layihələr və təkrar emal proqramlarında iştirak etməyə təşviq edin.'
        ],
        'Spatial Intelligence': [
            { text: 'Məkan Zəkası', style: 'subheader' },
            { text: 'Müəyyənləşdirici Bəyanatlar:', style: 'bold' },
            '"Big Ben modelini qurmaq və onu əl ilə tamamlamağı sevirəm."',
            '"Öz yaradıcılığıma əsaslanan rəsmlər çəkməkdən zövq alıram."',
            '"London avtobusu, telefon qutusu kimi modelləri qurmaq məni həyəcanlandırır."',
            '"Körpü konstruktorunu inşa etməyin məni inkişaf etdirdiyini düşünürəm."',
            '"Virtual eynəklə virtual dünyaya səyahət etmək çox əyləncəlidir."',
            { text: 'İnterpretasiya:', style: 'bold' },
            'Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü məkan zəkasına malikdir. Onlar obyektləri vizuallaşdırma və manipulyasiya etmə bacarığına malikdirlər və yaradıcı və tikinti fəaliyyətlərindən zövq alırlar.',
            { text: 'Valideynlər üçün Tövsiyələr:', style: 'bold' },
            { text: 'İncəsənət və Əl İşləri:', style: 'italic' },
            'Rəsm, boyama və heykəltəraşlıq materialları təmin edin.',
            'Sənət və əl işləri layihələrində iştirak etməyə təşviq edin.',
            { text: 'Konstruktor Oyuncaqlar:', style: 'italic' },
            'LEGO, K’NEX və ya model dəstləri kimi tikinti dəstləri təmin edin.',
            'Modellər və strukturlar yaratmağa cəlb edin.',
            { text: 'Texnologiya və Virtual Reallıq:', style: 'italic' },
            'İmmersiv təcrübələr təqdim edən virtual reallıq tətbiqlərini araşdırın.',
            'Rəqəmsal sənət və modellər yaratmaq üçün dizayn proqramlarından və ya tətbiqlərdən istifadə edin.',
            { text: 'Vizual Oyunlar:', style: 'italic' },
            'Məkan düşünməyi tələb edən oyunlar oynayın, məsələn, Tetris və ya 3D tapmacalar.',
            'Pazl tapmacaları və xəritə oxuma kimi fəaliyyətlərdə iştirak edin.'
        ],
        'Musical Intelligence': [
            { text: 'Musiqi Zəkası', style: 'subheader' },
            { text: 'Müəyyənləşdirici Bəyanatlar:', style: 'bold' },
            '"Musiqi alətlərini öyrənmək və ifa etmək mənim üçün çox maraqlıdır."',
            '"Müxtəlif musiqi növlərini dinləməkdən və ifa etməkdən zövq alıram."',
            { text: 'İnterpretasiya:', style: 'bold' },
            'Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü musiqi zəkasına malikdir. Musiqi alətlərini öyrənmək və ifa etməkdən zövq alırlar və müxtəlif musiqi növlərini dinləmək onları maraqlandırır.',
            { text: 'Valideynlər üçün Tövsiyələr:', style: 'bold' },
            { text: 'Musiqi Fəaliyyətləri:', style: 'italic' },
            'Fərqli musiqi alətlərini öyrənmək və ifa etmək üçün dərslər təşkil edin.',
            'Müxtəlif musiqi növlərini dinləmək və ifa etmək üçün imkanlar yaradın.',
            { text: 'Musiqi Tapşırıqları:', style: 'italic' },
            'Musiqi yazmaq və ifa etmək üçün təşviq edin.',
            'Müxtəlif musiqi növlərini araşdırmaq və öyrənmək üçün imkanlar yaradın.',
            { text: 'Musiqi Oyunları:', style: 'italic' },
            'Musiqi oyunları oynayın və musiqi ilə əlaqəli fəaliyyətlərdə iştirak edin.',
            'Musiqi bacarıqlarını inkişaf etdirmək üçün nəzərdə tutulmuş tətbiqlər və onlayn oyunlar təqdim edin.'
        ],
        'Interpersonal Intelligence': [
            { text: 'İnsanlararası Zəka', style: 'subheader' },
            { text: 'Müəyyənləşdirici Bəyanatlar:', style: 'bold' },
            '"Qrup fəaliyyətlərində və komanda işində iştirak etmək mənim üçün çox maraqlıdır."',
            '"Fərqli insanlar ilə ünsiyyət qurmaq və əməkdaşlıq etməkdən zövq alıram."',
            { text: 'İnterpretasiya:', style: 'bold' },
            'Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü insanlararası zəkaya malikdir. Qrup fəaliyyətlərində və komanda işində iştirak etməkdən zövq alırlar və fərqli insanlar ilə ünsiyyət qurmaq onları maraqlandırır.',
            { text: 'Valideynlər üçün Tövsiyələr:', style: 'bold' },
            { text: 'Qrup Fəaliyyətləri:', style: 'italic' },
            'Fərqli qrup fəaliyyətlərində və komanda işlərində iştirak etmək üçün imkanlar yaradın.',
            'Qrup oyunları və komanda işləri təşkil edin.',
            { text: 'Ünsiyyət İmkanları:', style: 'italic' },
            'Fərqli insanlar ilə ünsiyyət qurmaq və əməkdaşlıq etmək üçün imkanlar yaradın.',
            'Fərqli sosial fəaliyyətlərdə iştirak etməyə təşviq edin.'
        ],
        'Intrapersonal Intelligence': [
            { text: 'Özünüdərk Zəkası', style: 'subheader' },
            { text: 'Müəyyənləşdirici Bəyanatlar:', style: 'bold' },
            '"Öz düşüncələrimi və hisslərimi anlamaq və ifadə etmək mənim üçün çox vacibdir."',
            '"Özünü inkişaf etdirmək və şəxsi hədəflərə çatmaq üçün çalışmaqdan zövq alıram."',
            { text: 'İnterpretasiya:', style: 'bold' },
            'Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü özünüdərk zəkasına malikdir. Öz düşüncələrini və hisslərini anlamaq və ifadə etməkdən zövq alırlar və özünü inkişaf etdirmək və şəxsi hədəflərə çatmaq onları maraqlandırır.',
            { text: 'Valideynlər üçün Tövsiyələr:', style: 'bold' },
            { text: 'Özünü Anlama Fəaliyyətləri:', style: 'italic' },
            'Öz düşüncələrini və hisslərini anlamaq və ifadə etmək üçün imkanlar yaradın.',
            'Özünü inkişaf etdirmək və şəxsi hədəflərə çatmaq üçün çalışmaq üçün təşviq edin.',
            { text: 'Özünü İfadə Etmə İmkanları:', style: 'italic' },
            'Özünü ifadə etmək və öz düşüncələrini və hisslərini paylaşmaq üçün imkanlar yaradın.',
            'Fərqli şəxsi inkişaf fəaliyyətlərində iştirak etməyə təşviq edin.'
        ]
    };

    const additionalMessage = {
        text: 'vurğulamaq vacibdir ki, hər bir uşaq unikal və çoxsaylı zəka növlərinə malik ola bilər. Müxtəlif fəaliyyət və təcrübələr təqdim etməklə uşaqların tam potensialını araşdırmaq və inkişaf etdirmək mümkündür. Valideynlər və müəllimlər tərəfindən müntəzəm geribildirim və təşviq uşağın inkişafı üçün dəstək və zənginləşdirici mühit yaratmaqda böyük rol oynayır.',
        style: 'bold'
    };

    const docDefinition = {
        content: [
            { text: 'Gardner\'in Çoxsaylı Zəka Testi Nəticələri', style: 'header' },
            ...intelligenceDetails[predominantIntelligence],
            additionalMessage
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

    pdfMake.createPdf(docDefinition).download('test_neticesi.pdf'); // Enable download on mobile
});
