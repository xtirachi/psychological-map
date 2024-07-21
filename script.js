document.getElementById('questionnaire').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const scores = {
        linguistic: 0,
        logicalMathematical: 0,
        bodilyKinesthetic: 0,
        naturalist: 0,
        spatial: 0,
    };
    
    // Calculate scores
    scores.linguistic += parseInt(formData.get('q1')) + parseInt(formData.get('q13'));
    scores.logicalMathematical += parseInt(formData.get('q2')) + parseInt(formData.get('q8')) + parseInt(formData.get('q9'));
    scores.bodilyKinesthetic += parseInt(formData.get('q3'));
    scores.naturalist += parseInt(formData.get('q4')) + parseInt(formData.get('q10'));
    scores.spatial += parseInt(formData.get('q5')) + parseInt(formData.get('q6')) + parseInt(formData.get('q7')) + parseInt(formData.get('q11')) + parseInt(formData.get('q12'));

    const resultText = `
        Linguistic Intelligence: ${scores.linguistic}
        Logical-Mathematical Intelligence: ${scores.logicalMathematical}
        Bodily-Kinesthetic Intelligence: ${scores.bodilyKinesthetic}
        Naturalist Intelligence: ${scores.naturalist}
        Spatial Intelligence: ${scores.spatial}
    `;

    const detailedResults = `
        Dil Zəkası\n
        Müəyyənləşdirici Bəyanatlar:
        "İngilis dilində yeni sözlər öyrənib, onları gündəlik danışıqda istifadə etmək mənim üçün çox maraqlıdır."
        "Qlobusda ölkə və şəhərləri tapmaq, onlar haqqında məlumatlar öyrənmək mənə zövq verir."
        İnterpretasiya:
        Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü dil zəkasına malikdir. Yeni sözləri öyrənmək və danışıqda istifadə etməkdən zövq alırlar və müxtəlif ölkələr və şəhərlər haqqında məlumat öyrənmək onları maraqlandırır.
        Valideynlər üçün Tövsiyələr:
        Oxuma Fəaliyyətləri:
        Fərqli kitabları, o cümlədən bədii, qeyri-bədii və poeziya oxumağa təşviq edin.
        Kitabxanaya mütəmadi səfərlər edin və uşağınıza maraqlandıqları kitabları seçməsinə icazə verin.
        Yazı Tapşırıqları:
        Gündəlik yazı fəaliyyətləri üçün jurnallar təmin edin.
        Hekayələr, şeirlər yazmağa və ya səyahət jurnalı saxlamağa təşviq edin.
        Dil Oyunları:
        Scrabble, Boggle və ya krossvord kimi söz oyunları oynayın.
        Lüğət və dil bacarıqlarını inkişaf etdirmək üçün nəzərdə tutulmuş tətbiqlər və onlayn oyunlar təqdim edin.
        Ünsiyyət İmkanları:
        Maraqları və cari hadisələr haqqında müzakirələrə qoşulun.
        Müzakirələr, hekayə anlatma və ya teatr klublarında iştirak etməyə təşviq edin.
        \n
        Məntiqi-Riyazi Zəka\n
        Müəyyənləşdirici Bəyanatlar:
        "İngiltərə funtunu manata çevirməyi və fərqli valyutalar arasındakı əlaqələri hesablamayı xoşlayıram."
        "Nyutonun işıq zərrəcikləri eksperimentni anlamaq mənə zövq verir."
        "Gizli şifrələri və cavabları tapmaq mənim üçün əyləncəlidir."
        İnterpretasiya:
        Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü məntiqi-riyazi zəkaya malikdir. Rəqəmlərlə işləmək, tapmacaları həll etmək və elmi eksperimentləri anlamaqdan zövq alırlar.
        Valideynlər üçün Tövsiyələr:
        Riyaziyyat və Elm Fəaliyyətləri:
        Riyaziyyat tapmacaları və məntiq oyunları təmin edin.
        Elm eksperimentləri və layihələrində iştirak etməyə təşviq edin.
        Problemlərin Həlli Oyunları:
        Şahmat, Sudoku və ya qaçış otağı çağırışları kimi strategiya oyunları oynayın.
        Kodlama fəaliyyətləri və robot dəstlərini təqdim edin.
        Təhsil Resursları:
        Riyaziyyat və elm mövzularına yönəlmiş təhsil saytları və tətbiqlərdən istifadə edin.
        Birlikdə sənədli filmlər və elm verilişləri izləyərək marağı artırın.
        Real Həyat Tətbiqləri:
        Büdcələmə, alış-veriş və yemək bişirməklə bağlı fəaliyyətlərdə iştirak edin.
        Elm muzeylərinə və planetariumlara səfərlər edin.
        \n
        Məkan Zəkası\n
        Müəyyənləşdirici Bəyanatlar:
        "Big Ben modelini qurmaq və onu əl ilə tamamlamağı sevirəm."
        "Öz yaradıcılığıma əsaslanan rəsmlər çəkməkdən zövq alıram."
        "London avtobusu, telefon qutusu kimi modelləri qurmaq məni həyəcanlandırır."
        "Körpü konstruktorunu inşa etməyin məni inkişaf etdirdiyini düşünürəm."
        "Virtual eynəklə virtual dünyaya səyahət etmək çox əyləncəlidir."
        İnterpretasiya:
        Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü məkan zəkasına malikdir. Onlar obyektləri vizuallaşdırma və manipulyasiya etmə bacarığına malikdirlər və yaradıcı və tikinti fəaliyyətlərindən zövq alırlar.
        Valideynlər üçün Tövsiyələr:
        İncəsənət və Əl İşləri:
        Rəsm, boyama və heykəltəraşlıq materialları təmin edin.
        Sənət və əl işləri layihələrində iştirak etməyə təşviq edin.
        Konstruktor Oyuncaqlar:
        LEGO, K’NEX və ya model dəstləri kimi tikinti dəstləri təmin edin.
        Modellər və strukturlar yaratmağa cəlb edin.
        Texnologiya və Virtual Reallıq:
        İmmersiv təcrübələr təqdim edən virtual reallıq tətbiqlərini araşdırın.
        Rəqəmsal sənət və modellər yaratmaq üçün dizayn proqramlarından və ya tətbiqlərdən istifadə edin.
        Vizual Oyunlar:
        Məkan düşünməyi tələb edən oyunlar oynayın, məsələn, Tetris və ya 3D tapmacalar.
        Pazl tapmacaları və xəritə oxuma kimi fəaliyyətlərdə iştirak edin.
        \n
        Bədən-Kinestetik Zəka\n
        Müəyyənləşdirici Bəyanatlar:
        "İngiltərənin məşhur idman növləri olan futbol və rugbi ilə məşğul olmaqdan zövq alıram."
        İnterpretasiya:
        Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü bədən-kinestetik zəkaya malikdir. Onlar fiziki fəaliyyətlərdə müvəffəqiyyət qazanır və praktik öyrənmə təcrübələrini sevirlər.
        Valideynlər üçün Tövsiyələr:
        İdman və Fiziki Fəaliyyətlər:
        Futbol, rugbi, gimnastika və ya rəqs kimi idman növlərində iştirak etməyə təşviq edin.
        Mütəmadi fiziki məşqlər və açıq havada oyun imkanları təmin edin.
        Praktik Öyrənmə:
        Praktik eksperimentlər və interaktiv öyrənmə vasitələrindən istifadə edin.
        Yemək bişirmək, bağçılıq və tikinti layihələri kimi praktiki fəaliyyətlərə cəlb edin.
        Hərəkət Oyunları:
        Fiziki koordinasiya və hərəkət tələb edən aktiv oyunlar oynayın.
        Rəqs və ya idman oyunları kimi fiziki fəaliyyəti əhatə edən video oyunlar təqdim edin.
        Fiziki Çağırışlar:
        Evdə və ya həyətdə maneə zolaqları və fiziki çağırışlar qurun.
        Döyüş sənətləri və ya macəra idman növlərində iştirak etməyə təşviq edin.
        \n
        Təbiət Zəkası\n
        Müəyyənləşdirici Bəyanatlar:
        "İngiltərənin flora və faunasını öyrənmək və onlarla maraqlanmaq mənim üçün çox əyləncəlidir."
        "Gül əkmə fəaliyyətini və həmin gülün inkişafını müşahidə etməyi sevirəm."
        İnterpretasiya:
        Bu bəyanatlara yüksək bal verən uşaq böyük ehtimalla güclü təbiət zəkasına malikdir. Onlar təbiətə maraq göstərir və bitki, heyvan və ətraf mühitlə bağlı fəaliyyətlərdən zövq alırlar.
        Valideynlər üçün Tövsiyələr:
        Təbiət Kəşfi:
        Parklara, botanika bağlarına və təbiət qoruqlarına mütəmadi səfərlər edin.
        Yürüyüş, quş müşahidəsi və təbiət gəzintiləri kimi fəaliyyətlərə təşviq edin.
        Bağçılıq:
        Toxum əkməkdən bitkilərə qulluq etməyə qədər bağçılıq layihələrinə cəlb edin.
        Müxtəlif bitki növləri və onların inkişaf prosesləri haqqında məlumat öyrənməyə imkan yaradın.
        Heyvan Qulluğu:
        Mümkünsə, ev heyvanlarına qayğı göstərməkdə və ya heyvan sığınacaqlarında könüllü işləməkdə iştirak edin.
        Müxtəlif heyvan növləri və onların yaşayış yerləri haqqında məlumat öyrətməyə təşviq edin.
        Ətraf Mühit Təhsili:
        Ətraf mühit problemləri və qorunmanın əhəmiyyəti haqqında müzakirələr aparın.
        Ekoloji layihələr və təkrar emal proqramlarında iştirak etməyə təşviq edin.
    `;

    const docDefinition = {
        content: [
            { text: 'Gardner\'s Multiple Intelligences Results', style: 'header' },
            resultText,
            { text: detailedResults, style: 'details' }
        ],
        styles: {
            header: { fontSize: 18, bold: true },
            details: { fontSize: 12, margin: [0, 10, 0, 10] }
        }
    };

    pdfMake.createPdf(docDefinition).getDataUrl((dataUrl) => {
        const iframe = document.createElement('iframe');
        iframe.src = dataUrl;
        iframe.className = 'w-full h-96';
        document.getElementById('pdf-viewer').appendChild(iframe);
        document.getElementById('result').classList.remove('hidden');
    });
});
