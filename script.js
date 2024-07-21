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
        'Linguistic Intelligence': `
            <h3><strong>Dil Zəkası</strong></h3>
            <p><strong>Müəyyənləşdirici Bəyanatlar:</strong></p>
            <p>"İngilis dilində yeni sözlər öyrənib, onları gündəlik danışıqda istifadə etmək mənim üçün çox maraqlıdır."</p>
            <p>"Qlobusda ölkə və şəhərləri tapmaq, onlar haqqında məlumatlar öyrənmək mənə zövq verir."</p>
            <p><strong>İnterpretasiya:</strong></p>
            <p>Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü dil zəkasına malikdir. Yeni sözləri öyrənmək və danışıqda istifadə etməkdən zövq alırlar və müxtəlif ölkələr və şəhərlər haqqında məlumat öyrənmək onları maraqlandırır.</p>
            <p><strong>Valideynlər üçün Tövsiyələr:</strong></p>
            <p><strong>Oxuma Fəaliyyətləri:</strong></p>
            <p>Fərqli kitabları, o cümlədən bədii, qeyri-bədii və poeziya oxumağa təşviq edin.</p>
            <p>Kitabxanaya mütəmadi səfərlər edin və uşağınıza maraqlandıqları kitabları seçməsinə icazə verin.</p>
            <p><strong>Yazı Tapşırıqları:</strong></p>
            <p>Gündəlik yazı fəaliyyətləri üçün jurnallar təmin edin.</p>
            <p>Hekayələr, şeirlər yazmağa və ya səyahət jurnalı saxlamağa təşviq edin.</p>
            <p><strong>Dil Oyunları:</strong></p>
            <p>Scrabble, Boggle və ya krossvord kimi söz oyunları oynayın.</p>
            <p>Lüğət və dil bacarıqlarını inkişaf etdirmək üçün nəzərdə tutulmuş tətbiqlər və onlayn oyunlar təqdim edin.</p>
            <p><strong>Ünsiyyət İmkanları:</strong></p>
            <p>Maraqları və cari hadisələr haqqında müzakirələrə qoşulun.</p>
            <p>Müzakirələr, hekayə anlatma və ya teatr klublarında iştirak etməyə təşviq edin.</p>
        `,
        'Logical-Mathematical Intelligence': `
            <h3><strong>Məntiqi-Riyazi Zəka</strong></h3>
            <p><strong>Müəyyənləşdirici Bəyanatlar:</strong></p>
            <p>"İngiltərə funtunu manata çevirməyi və fərqli valyutalar arasındakı əlaqələri hesablamayı xoşlayıram."</p>
            <p>"Nyutonun işıq zərrəcikləri eksperimentni anlamaq mənə zövq verir."</p>
            <p>"Gizli şifrələri və cavabları tapmaq mənim üçün əyləncəlidir."</p>
            <p><strong>İnterpretasiya:</strong></p>
            <p>Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü məntiqi-riyazi zəkaya malikdir. Rəqəmlərlə işləmək, tapmacaları həll etmək və elmi eksperimentləri anlamaqdan zövq alırlar.</p>
            <p><strong>Valideynlər üçün Tövsiyələr:</strong></p>
            <p><strong>Riyaziyyat və Elm Fəaliyyətləri:</strong></p>
            <p>Riyaziyyat tapmacaları və məntiq oyunları təmin edin.</p>
            <p>Elm eksperimentləri və layihələrində iştirak etməyə təşviq edin.</p>
            <p><strong>Problemlərin Həlli Oyunları:</strong></p>
            <p>Şahmat, Sudoku və ya qaçış otağı çağırışları kimi strategiya oyunları oynayın.</p>
            <p>Kodlama fəaliyyətləri və robot dəstlərini təqdim edin.</p>
            <p><strong>Təhsil Resursları:</strong></p>
            <p>Riyaziyyat və elm mövzularına yönəlmiş təhsil saytları və tətbiqlərdən istifadə edin.</p>
            <p>Birlikdə sənədli filmlər və elm verilişləri izləyərək marağı artırın.</p>
            <p><strong>Real Həyat Tətbiqləri:</strong></p>
            <p>Büdcələmə, alış-veriş və yemək bişirməklə bağlı fəaliyyətlərdə iştirak edin.</p>
            <p>Elm muzeylərinə və planetariumlara səfərlər edin.</p>
        `,
        'Bodily-Kinesthetic Intelligence': `
            <h3><strong>Bədən-Kinestetik Zəka</strong></h3>
            <p><strong>Müəyyənləşdirici Bəyanatlar:</strong></p>
            <p>"İngiltərənin məşhur idman növləri olan futbol və rugbi ilə məşğul olmaqdan zövq alıram."</p>
            <p><strong>İnterpretasiya:</strong></p>
            <p>Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü bədən-kinestetik zəkaya malikdir. Onlar fiziki fəaliyyətlərdə müvəffəqiyyət qazanır və praktik öyrənmə təcrübələrini sevirlər.</p>
            <p><strong>Valideynlər üçün Tövsiyələr:</strong></p>
            <p><strong>İdman və Fiziki Fəaliyyətlər:</strong></p>
            <p>Futbol, rugbi, gimnastika və ya rəqs kimi idman növlərində iştirak etməyə təşviq edin.</p>
            <p>Mütəmadi fiziki məşqlər və açıq havada oyun imkanları təmin edin.</p>
            <p><strong>Praktik Öyrənmə:</strong></p>
            <p>Praktik eksperimentlər və interaktiv öyrənmə vasitələrindən istifadə edin.</p>
            <p>Yemək bişirmək, bağçılıq və tikinti layihələri kimi praktiki fəaliyyətlərə cəlb edin.</p>
            <p><strong>Hərəkət Oyunları:</strong></p>
            <p>Fiziki koordinasiya və hərəkət tələb edən aktiv oyunlar oynayın.</p>
            <p>Rəqs və ya idman oyunları kimi fiziki fəaliyyəti əhatə edən video oyunlar təqdim edin.</p>
            <p><strong>Fiziki Çağırışlar:</strong></p>
            <p>Evdə və ya həyətdə maneə zolaqları və fiziki çağırışlar qurun.</p>
            <p>Döyüş sənətləri və ya macəra idman növlərində iştirak etməyə təşviq edin.</p>
        `,
        'Naturalist Intelligence': `
            <h3><strong>Təbiət Zəkası</strong></h3>
            <p><strong>Müəyyənləşdirici Bəyanatlar:</strong></p>
            <p>"İngiltərənin flora və faunasını öyrənmək və onlarla maraqlanmaq mənim üçün çox əyləncəlidir."</p>
            <p>"Gül əkmə fəaliyyətini və həmin gülün inkişafını müşahidə etməyi sevirəm."</p>
            <p><strong>İnterpretasiya:</strong></p>
            <p>Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü təbiət zəkasına malikdir. Onlar təbiətə maraq göstərir və bitki, heyvan və ətraf mühitlə bağlı fəaliyyətlərdən zövq alırlar.</p>
            <p><strong>Valideynlər üçün Tövsiyələr:</strong></p>
            <p><strong>Təbiət Kəşfi:</strong></p>
            <p>Parklara, botanika bağlarına və təbiət qoruqlarına mütəmadi səfərlər edin.</p>
            <p>Yürüyüş, quş müşahidəsi və təbiət gəzintiləri kimi fəaliyyətlərə təşviq edin.</p>
            <p><strong>Bağçılıq:</strong></p>
            <p>Toxum əkməkdən bitkilərə qulluq etməyə qədər bağçılıq layihələrinə cəlb edin.</p>
            <p>Müxtəlif bitki növləri və onların inkişaf prosesləri haqqında məlumat öyrənməyə imkan yaradın.</p>
            <p><strong>Heyvan Qulluğu:</strong></p>
            <p>Mümkünsə, ev heyvanlarına qayğı göstərməkdə və ya heyvan sığınacaqlarında könüllü işləməkdə iştirak edin.</p>
            <p>Müxtəlif heyvan növləri və onların yaşayış yerləri haqqında məlumat öyrətməyə təşviq edin.</p>
            <p><strong>Ətraf Mühit Təhsili:</strong></p>
            <p>Ətraf mühit problemləri və qorunmanın əhəmiyyəti haqqında müzakirələr aparın.</p>
            <p>Ekoloji layihələr və təkrar emal proqramlarında iştirak etməyə təşviq edin.</p>
        `,
        'Spatial Intelligence': `
            <h3><strong>Məkan Zəkası</strong></h3>
            <p><strong>Müəyyənləşdirici Bəyanatlar:</strong></p>
            <p>"Big Ben modelini qurmaq və onu əl ilə tamamlamağı sevirəm."</p>
            <p>"Öz yaradıcılığıma əsaslanan rəsmlər çəkməkdən zövq alıram."</p>
            <p>"London avtobusu, telefon qutusu kimi modelləri qurmaq məni həyəcanlandırır."</p>
            <p>"Körpü konstruktorunu inşa etməyin məni inkişaf etdirdiyini düşünürəm."</p>
            <p>"Virtual eynəklə virtual dünyaya səyahət etmək çox əyləncəlidir."</p>
            <p><strong>İnterpretasiya:</strong></p>
            <p>Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü məkan zəkasına malikdir. Onlar obyektləri vizuallaşdırma və manipulyasiya etmə bacarığına malikdirlər və yaradıcı və tikinti fəaliyyətlərindən zövq alırlar.</p>
            <p><strong>Valideynlər üçün Tövsiyələr:</strong></p>
            <p><strong>İncəsənət və Əl İşləri:</strong></p>
            <p>Rəsm, boyama və heykəltəraşlıq materialları təmin edin.</p>
            <p>Sənət və əl işləri layihələrində iştirak etməyə təşviq edin.</p>
            <p><strong>Konstruktor Oyuncaqlar:</strong></p>
            <p>LEGO, K’NEX və ya model dəstləri kimi tikinti dəstləri təmin edin.</p>
            <p>Modellər və strukturlar yaratmağa cəlb edin.</p>
            <p><strong>Texnologiya və Virtual Reallıq:</strong></p>
            <p>İmmersiv təcrübələr təqdim edən virtual reallıq tətbiqlərini araşdırın.</p>
            <p>Rəqəmsal sənət və modellər yaratmaq üçün dizayn proqramlarından və ya tətbiqlərdən istifadə edin.</p>
            <p><strong>Vizual Oyunlar:</strong></p>
            <p>Məkan düşünməyi tələb edən oyunlar oynayın, məsələn, Tetris və ya 3D tapmacalar.</p>
            <p>Pazl tapmacaları və xəritə oxuma kimi fəaliyyətlərdə iştirak edin.</p>
        `,
        'Musical Intelligence': `
            <h3><strong>Musiqi Zəkası</strong></h3>
            <p><strong>Müəyyənləşdirici Bəyanatlar:</strong></p>
            <p>"Musiqi alətlərini öyrənmək və ifa etmək mənim üçün çox maraqlıdır."</p>
            <p>"Müxtəlif musiqi növlərini dinləməkdən və ifa etməkdən zövq alıram."</p>
            <p><strong>İnterpretasiya:</strong></p>
            <p>Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü musiqi zəkasına malikdir. Musiqi alətlərini öyrənmək və ifa etməkdən zövq alırlar və müxtəlif musiqi növlərini dinləmək onları maraqlandırır.</p>
            <p><strong>Valideynlər üçün Tövsiyələr:</strong></p>
            <p><strong>Musiqi Fəaliyyətləri:</strong></p>
            <p>Fərqli musiqi alətlərini öyrənmək və ifa etmək üçün dərslər təşkil edin.</p>
            <p>Müxtəlif musiqi növlərini dinləmək və ifa etmək üçün imkanlar yaradın.</p>
            <p><strong>Musiqi Tapşırıqları:</strong></p>
            <p>Musiqi yazmaq və ifa etmək üçün təşviq edin.</p>
            <p>Müxtəlif musiqi növlərini araşdırmaq və öyrənmək üçün imkanlar yaradın.</p>
            <p><strong>Musiqi Oyunları:</strong></p>
            <p>Musiqi oyunları oynayın və musiqi ilə əlaqəli fəaliyyətlərdə iştirak edin.</p>
            <p>Musiqi bacarıqlarını inkişaf etdirmək üçün nəzərdə tutulmuş tətbiqlər və onlayn oyunlar təqdim edin.</p>
        `,
        'Interpersonal Intelligence': `
            <h3><strong>İnsanlararası Zəka</strong></h3>
            <p><strong>Müəyyənləşdirici Bəyanatlar:</strong></p>
            <p>"Qrup fəaliyyətlərində və komanda işində iştirak etmək mənim üçün çox maraqlıdır."</p>
            <p>"Fərqli insanlar ilə ünsiyyət qurmaq və əməkdaşlıq etməkdən zövq alıram."</p>
            <p><strong>İnterpretasiya:</strong></p>
            <p>Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü insanlararası zəkaya malikdir. Qrup fəaliyyətlərində və komanda işində iştirak etməkdən zövq alırlar və fərqli insanlar ilə ünsiyyət qurmaq onları maraqlandırır.</p>
            <p><strong>Valideynlər üçün Tövsiyələr:</strong></p>
            <p><strong>Qrup Fəaliyyətləri:</strong></p>
            <p>Fərqli qrup fəaliyyətlərində və komanda işlərində iştirak etmək üçün imkanlar yaradın.</p>
            <p>Qrup oyunları və komanda işləri təşkil edin.</p>
            <p><strong>Ünsiyyət İmkanları:</strong></p>
            <p>Fərqli insanlar ilə ünsiyyət qurmaq və əməkdaşlıq etmək üçün imkanlar yaradın.</p>
            <p>Fərqli sosial fəaliyyətlərdə iştirak etməyə təşviq edin.</p>
        `,
        'Intrapersonal Intelligence': `
            <h3><strong>Özünüdərk Zəkası</strong></h3>
            <p><strong>Müəyyənləşdirici Bəyanatlar:</strong></p>
            <p>"Öz düşüncələrimi və hisslərimi anlamaq və ifadə etmək mənim üçün çox vacibdir."</p>
            <p>"Özünü inkişaf etdirmək və şəxsi hədəflərə çatmaq üçün çalışmaqdan zövq alıram."</p>
            <p><strong>İnterpretasiya:</strong></p>
            <p>Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü özünüdərk zəkasına malikdir. Öz düşüncələrini və hisslərini anlamaq və ifadə etməkdən zövq alırlar və özünü inkişaf etdirmək və şəxsi hədəflərə çatmaq onları maraqlandırır.</p>
            <p><strong>Valideynlər üçün Tövsiyələr:</strong></p>
            <p><strong>Özünü Anlama Fəaliyyətləri:</strong></p>
            <p>Öz düşüncələrini və hisslərini anlamaq və ifadə etmək üçün imkanlar yaradın.</p>
            <p>Özünü inkişaf etdirmək və şəxsi hədəflərə çatmaq üçün çalışmaq üçün təşviq edin.</p>
            <p><strong>Özünü İfadə Etmə İmkanları:</strong></p>
            <p>Özünü ifadə etmək və öz düşüncələrini və hisslərini paylaşmaq üçün imkanlar yaradın.</p>
            <p>Fərqli şəxsi inkişaf fəaliyyətlərində iştirak etməyə təşviq edin.</p>
        `
    };

    const additionalMessage = `
        <p><strong>vurğulamaq vacibdir ki, hər bir uşaq unikal və çoxsaylı zəka növlərinə malik ola bilər. Müxtəlif fəaliyyət və təcrübələr təqdim etməklə uşaqların tam potensialını araşdırmaq və inkişaf etdirmək mümkündür. Valideynlər və müəllimlər tərəfindən müntəzəm geribildirim və təşviq uşağın inkişafı üçün dəstək və zənginləşdirici mühit yaratmaqda böyük rol oynayır.</strong></p>
    `;

    const docDefinition = {
        content: [
            { text: 'Gardner\'in Çoxsaylı Zəka Testi Nəticələri', style: 'header' },
            { text: intelligenceDetails[predominantIntelligence] + additionalMessage, style: 'details' }
        ],
        styles: {
            header: { fontSize: 18, bold: true },
            details: { fontSize: 12, margin: [0, 10, 0, 10] }
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
