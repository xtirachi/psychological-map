document.getElementById('questionnaire-az-england').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const scores = {
                verbalLinguistic: 0,
                logicalMathematical: 0,
                visualSpatial: 0,
                bodilyKinesthetic: 0,
                interpersonal: 0,
                naturalist: 0,
                musical: 0,
                intrapersonal: 0
            };

            const ixtiraciKoduModal = document.getElementById('ixtiraciKoduModal');
            const ixtiraciKoduInput = document.getElementById('ixtiraciKoduInput');
            const ixtiraciKoduSubmit = document.getElementById('ixtiraciKoduSubmit');
            const questionnaireForm = document.getElementById('questionnaire-az-england');
            const ixtiraciKoduField = document.getElementById('ixtiraciKodu');

            ixtiraciKoduModal.classList.remove('hidden');

            ixtiraciKoduSubmit.addEventListener('click', function() {
                const ixtiraciKodu = ixtiraciKoduInput.value.trim();
                if (ixtiraciKodu) {
                    ixtiraciKoduField.value = ixtiraciKodu;
                    ixtiraciKoduModal.classList.add('hidden');
                    questionnaireForm.classList.remove('hidden');
                } else {
                    alert('Please enter İxtiraçı kodu.');
                }
            });
            
            // Calculate scores
            scores.verbalLinguistic += parseInt(formData.get('q1')) + parseInt(formData.get('q2'));
            scores.logicalMathematical += parseInt(formData.get('q3')) + parseInt(formData.get('q4'));
            scores.visualSpatial += parseInt(formData.get('q5')) + parseInt(formData.get('q6'));
            scores.bodilyKinesthetic += parseInt(formData.get('q7')) + parseInt(formData.get('q8'));
            scores.interpersonal += parseInt(formData.get('q9')) + parseInt(formData.get('q10'));
            scores.naturalist += parseInt(formData.get('q11')) + parseInt(formData.get('q12'));
            scores.musical += parseInt(formData.get('q13')) + parseInt(formData.get('q14'));
            scores.intrapersonal += parseInt(formData.get('q15')) + parseInt(formData.get('q16'));

            const highestScore = Math.max(...Object.values(scores));
            let predominantIntelligence = '';

            if (highestScore === scores.verbalLinguistic) {
                predominantIntelligence = 'Verbal-Linqvistik intellekt';
            } else if (highestScore === scores.logicalMathematical) {
                predominantIntelligence = 'Məntiqi-Riyazi intellekt';
            } else if (highestScore === scores.visualSpatial) {
                predominantIntelligence = 'Vizual-Məkan intellekti';
            } else if (highestScore === scores.bodilyKinesthetic) {
                predominantIntelligence = 'Bədən-Kinestetik intellekt';
            } else if (highestScore === scores.interpersonal) {
                predominantIntelligence = 'Şəxslərarası intellekt';
            } else if (highestScore === scores.naturalist) {
                predominantIntelligence = 'Naturalist intellekt';
            } else if (highestScore === scores.musical) {
                predominantIntelligence = 'Musiqi-Ritmik intellekt';
            } else if (highestScore === scores.intrapersonal) {
                predominantIntelligence = 'Şəxsdaxili intellekt';
            }

             if (!allAnswered) {
        alert('Please answer all questions.');
        return;
    }
            
            const country = "England";

            // Google Sheets integration
            const scriptURL = 'https://script.google.com/macros/s/AKfycbzFiL4xtKtKPzeAlOKk2s7Z3x0zUTdyIQv816sIux6yGWscRKWDhfWacMV2RUaEYXrT/exec'; // Replace with your Google Script URL
            const data = new URLSearchParams();
            data.append('ixtiraciKodu', ixtiraciKodu);
            data.append('country', country);
            data.append('predominantIntelligence', predominantIntelligence);

            fetch(scriptURL, { method: 'POST', body: data })
                .then(response => response.json())
                .then(data => console.log('Success:', data))
                .catch(error => console.error('Error:', error));

    const intelligenceDetails = {
        'Verbal-Linqvistik intellekt': [
            { text: 'Verbal-Linqvistik intellekt', style: 'subheader' },
            { text: 'Müəyyənləşdirici Suallar:', style: 'bold' },
            '"İngilis dilində yeni sözlər öyrənib, onları danışıqda istifadə etməkdən zövq alırsanmı?"',
            '"İngiltərənin tarixi haqqında öyrənmək və başqalarına danışmaq nə qədər maraqlıdır?"',
            { text: 'İnterpretasiya:', style: 'bold' },
            'Dil vasitəsilə biliklərin əldə edilməsi, həm yazılı, həm də şifahi nitqdə dil qaydalarından düzgün istifadə, dilin sosial-mədəni xırdalıqlarını anlama verbal-linqvistik intellektin göstəricilərinə aid edilir. Əgər uşaqda bu intellekt növü güclü inkişaf edibsə, o zaman onun oxumaq, danışmaq və yazmaq bacarıqları da güclü inkişaf edib. Belə uşaqlar sözlər vasitəsilə düşünür, erkən yaşda yazmaq və oxumaq vərdişlərinə yiyələnə bilirlər. Bu zəkaya sahib olan uşaqlar böyük bir söz ehtiyatına sahib olduqları üçün bütün problemləri müzakirə və inandırma yolu ilə həll edir, aldıqları informasiyalarla effektiv işləməyi bacarırlar. Onlar üçün öyrənmənin müzakirə və diskussiya formasında aparılması önəmlidir. Ən yaxşı tədris metodu mətn oxumaq, inşa yazmaq və ya diskussiyalar aparmaqdır. Bu intellekt növünün təzahürləri olan uşaqlar həm xarici, həm də yerli dilləri asanlıqla öyrənə bilirlər.',
            { text: 'Valideynlər üçün Tövsiyələr:', style: 'bold' },
            { text: 'Kitab oxuma vaxtı:', style: 'italic' },
            'Uşağınızla birgə oxuma saatları keçirin. Bu, dil bacarıqlarını inkişaf etdirməklə yanaşı, müzakirə və təhlil etmə vərdişlərini gücləndirəcəkdir.',
            { text: 'Hekayə yazma:', style: 'italic' },
            'Uşağınızı öz hekayələrini yazmağa təşviq edin. Bu, onların yaradıcı düşüncəsini və yazı qabiliyyətini inkişaf etdirəcək.',
            { text: 'Dil öyrənmə oyunları:', style: 'italic' },
            'Söz oyunları və krossvordlar oynamaq, onların söz ehtiyatını artırmaq və dildən daha effektiv istifadə etmə qabiliyyətini gücləndirəcək.',
            { text: 'Debat və müzakirələr:', style: 'italic' },
            'Müxtəlif mövzularda evdə müzakirələr aparmaq uşaqların fikirlərini düzgün ifadə etmək və başqalarının fikirlərini dinləmək bacarıqlarını inkişaf etdirir.',
            { text: 'Mümkün Peşə sahələri:', style: 'bold' },
            'Jurnalist: Yazılı və şifahi dillə məlumatların yayılması.\n' +
            'Yazıçı: Hekayələr, romanlar və məqalələr yazmaq.\n' +
            'Dil müəllimi: Xarici və yerli dilləri öyrətmək.\n' +
            'Redaktor: Mətnlərin redaktəsi və tərtibatı.\n' +
            'Hüquqşünas: Hüquqi sənədlərin tərtibi və məhkəmə nitqləri.'
        ],
        'Məntiqi-Riyazi intellekt': [
            { text: 'Məntiqi-Riyazi intellekt', style: 'subheader' },
            { text: 'Müəyyənləşdirici Suallar:', style: 'bold' },
            '"İngiltərə funtunu manata çevirmək və fərqli valyutalar arasındakı əlaqələrin hesablanması nə qədər rahatdır?"',
            '"Stounhencin strukturunu və tarixi əhəmiyyətini araşdırmaq maraqlıdırmı?"',
            { text: 'İnterpretasiya:', style: 'bold' },
            'Təsnif etmək, proqnozlaşdırmaq, tənqidi düşünmək, təhlil edərək nəticə çıxarmaq, müxtəlif mövzularda mühakimə yürütmək, qanunauyğunluqlara əsasən məlumatları analiz etmək, konseptual düşüncə, riyazi çalışmaları və kompleks hesablamaları sürətli həlletmə qabiliyyətləri bu intellekt növü üçün xarakterikdir. Bu intellekt növü yaxşı inkişaf etmiş şagirdlərin maraq dairəsi çox geniş olur, özlərinə maraqlı olan sualların cavabını tapana qədər axtarışda olurlar. Belə şagirdlər həyatlarında baş verənləri anlamaq üçün müxtəlif şablonlardan istifadə edirlər. Bunlara düşüncə, vizual, rəng şablonlarını daxil etmək olar. Məntiqi-riyazi intellekt növü real həyatdakı konkret şablonlarla başlayır, lakin gördüyümüz bütün şablonlar arasındakı əlaqələri başa düşməyə çalışdıqca, get-gedə abstraklaşır. Əgər şagird məntiqi-riyazi intellektə malikdirsə, daha çox konseptual və abstrakt düşünməyə meyilli olur, həmçinin digərlərinin gözdən qaçırdığı şablon və əlaqələri görməyi bacarır. İnkişaf etmiş məntiqi-riyazi intellektə sahib uşaqlar asanlıqla səbəb-nəticə əlaqələrini təyin edir, sistemləşdirməyə can atır, abstrakt məlumatlarla zehni əməliyyatlar aparırlar. Onlar təcrübələr aparmağı, tapmacalar və məsələlər həll etməyi, mövcud şəraitdə insanların davranışlarını təhlil etməyi və nəticə çıxarmağı xoşlayır, rəqəmlər və riyazi düsturlarla işləməyi, riyazi əməliyyatlar aparmağı xoşlayır, müxtəlif qrafiklər və statistik məlumatlarla asanlıqla işləyir, eləcə də, mürəkkəb məsələləri həll etməyin gətirdiyi çətinliyi sevirlər. Sistemli və mütəşəkkil xarakterə malik olmaqla yanaşı, həm də hər bir hərəkət və düşüncələrini həmişə məntiqlə əsaslandırmağı, “niyəsini” izah etməyi bacarırlar.',
            { text: 'Valideynlər üçün Tövsiyələr:', style: 'bold' },
            { text: 'Riyazi tapmacalar:', style: 'italic' },
            'Uşağınıza riyazi tapmacalar və məntiq oyunları təklif edin. Bu, onların problem həll etmə və analiz bacarıqlarını inkişaf etdirəcək.',
            { text: 'Eksperimentlər:', style: 'italic' },
            'Ev şəraitində sadə elmi təcrübələr aparmaq, onların tədqiqatçılıq qabiliyyətini və məntiqi düşüncəsini gücləndirəcək.',
            { text: 'Riyazi oyunlar:', style: 'italic' },
            'Sayma, toplama, çıxma kimi riyazi əməliyyatları oyun şəklində tətbiq etmək, uşaqların riyazi düşüncəsini əyləncəli şəkildə inkişaf etdirəcək.',
            { text: 'Proqnozlaşdırma və analiz:', style: 'italic' },
            'Uşağınızı gündəlik həyatda proqnozlaşdırma və analiz etmə vərdişlərini inkişaf etdirmək üçün təşviq edin. Məsələn, hava proqnozlarını müzakirə etmək və nəticələr çıxarmaq.',
            { text: 'Mümkün Peşə sahələri:', style: 'bold' },
            'Riyaziyyatçı: Riyazi tədqiqatlar və modelləşdirmə.\n' +
            'Mühəndis: Mühəndislik problemlərinin həlli və dizayn.\n' +
            'İT mütəxəssisi: Proqramlaşdırma və sistem analizləri.\n' +
            'Fizik: Fiziki tədqiqatlar və eksperimentlər.\n' +
            'İqtisadçı: Maliyyə analizləri və iqtisadi modelləşdirmə.'
        ],
        'Məkan-vizual intellekti': [
            { text: 'Məkan-vizual intellekti', style: 'subheader' },
            { text: 'Müəyyənləşdirici Suallar:', style: 'bold' },
            '"Big Ben modelini qurmaq və onu əl ilə tamamlamaqdan zövq alırsanmı?"',
            '"Öz yaradıcılığına əsaslanan rəsmlər çəkmək sənin üçün maraqlıdırnı?"',
            { text: 'İnterpretasiya:', style: 'bold' },
            'Məkan-vizual intellekt növü obrazlı düşünmə qabiliyyəti ilə şərtlənir. Bu, gözlərimizlə gördüyümüz forma, şəkil, model, dizayn və teksturalar vasitəsilə, eyni zamanda təxəyyülümüzdə canlandıra bildiyimiz bütün şəkillər vasitəsilə əldə olunan bilikləri təmsil edir. Bu intellekt növü güclü inkişaf etmiş şagirdlər şəkillər və rəsmlər vasitəsilə düşünməyə meyilli olub, rənglərin ahəngliyini hiss edir, obyektlər arasında mövcud olan incə rəngləri, xətləri və münasibətləri, ətrafdakı müxtəlif obyekt, forma, rəng, teksturalar və modelləri çox yaxşı fərqləndirirlər. Vizual-məkan intellekti olan uşaqlar yaxşı inkişaf etmiş motor bacarıqlarına sahibdirlər. Onlar quraşdırmağı, maraqlı dizayn, model və rəsm çəkməyi, rəngləməyi, parçalarla, çertyojlarla, rəngli markerlər və gillə işləməyi sevir, pazllar quraşdırmaqdan, xəritədən istifadə etməkdən və labirint oyunlarından zövq alırlar. Onlarda məkan anlayışı inkişaf etmiş olur. Müxtəlif məkanlarda xırda detalları asanlıqla yadda saxlayır, cədvəlləri rahatlıqla oxuyur və diaqramları anlayırlar. Şüurlarında təsəvvür etdiklərini real yaradılmış obyektlərə və məhsullara köçürə bilirlər. Təsəvvürlərində 3D modellər qurub, beyinlərində əvvəlcədən dəyişiklikləri və yerdəyişmələri düşünüb, sonradan onları həyata keçirə bilirlər. Vizual qavrayış müəyyən bilik, bacarıq, emosiya ilə komplekt şəkildə olduqda tanış obrazların yeni görünüşünün yaradılmasına səbəb olur. Onlar ətrafı başqa bucaqdan görə və görüntünün müxtəlif formalarını təklif edə bilirlər.',
            { text: 'Valideynlər üçün Tövsiyələr:', style: 'bold' },
            { text: 'Rəsm və model çəkmək:', style: 'italic' },
            'Uşağınıza rəsm dəftəri və rənglər verərək müxtəlif rəsmlər çəkməyə təşviq edin. Bu, onların təsəvvür və məkan düşüncəsini inkişaf etdirəcək.',
            { text: 'Pazllar və legolar:', style: 'italic' },
            'Uşağınıza pazllar və legolar təklif edin. Bu, onların məkan düşüncəsini və əl motorikasını gücləndirəcək.',
            { text: 'Xəritələr və labirint oyunları:', style: 'italic' },
            'Xəritələr və labirint oyunları ilə oynamaq, uşaqların məkan təsəvvürünü və yön tapma bacarıqlarını inkişaf etdirəcək.',
            { text: 'Çertyojlar və dizaynlar:', style: 'italic' },
            'Uşağınızı çertyojlar və dizaynlar çəkməyə təşviq edin. Bu, onların məkan düşüncəsini və vizual qavrayışını gücləndirəcək.',
            { text: 'Mümkün Peşə sahələri:', style: 'bold' },
            'Memar: Bina və strukturların dizaynı.\n' +
            'Rəssam: Şəkil çəkmək və yaradıcılıq əsərləri yaratmaq.\n' +
            'Qrafik dizayner: Vizual materialların dizaynı.\n' +
            'Fotoqraf: Şəkil çəkmək və vizual sənət əsərləri yaratmaq.\n' +
            'İnteryer dizayneri: Məkanların daxili dizaynı və tərtibatı.'
        ],
        'Bədən-kinestetik intellekti': [
            { text: 'Bədən-kinestetik intellekti', style: 'subheader' },
            { text: 'Müəyyənləşdirici Suallar:', style: 'bold' },
            '"London avtobusu, telefon qutusu kimi 3 ölçülü kağız modelləri qurmaqdan zövq aldınmı?"',
            '"Maraqlı dizayn və modelləri çəkmək və ya yaratmaq sənin üçün maraqlıdırnı?"',
            { text: 'İnterpretasiya:', style: 'bold' },
            'Bu növ intellektin güclü inkişaf etdiyi uşaqlar üçün əsas özünü ifadə aləti onların bədənidir. Hərəkətlər, müxtəlif mimikalar vasitəsi ilə onlar emosiyalarını və fikirlərini rahat ifadə edə bilirlər. Biz tez-tez “edərək öyrənmək” haqqında danışırıq. Bu növ intellekt fiziki hərəkət vasitəsilə inkişaf edir. Zehin və bədənin yüksək koordinasiyası bədən-kinestetik intellektli insanlara xasdır. Bədən-kinestetik intellekti olan uşaqlar dünyanı, ətraf mühiti toxunuşla öyrənirlər. Onlar bədənlərinə yaxşı nəzarət edir, hərəkətlər və jestlər vasitəsilə duyğularını çatdıra bilir, yüksək fiziki fəaliyyət, aydın koordinasiya, çeviklik, toxunma yaddaşına malik olurlar. Qaçmaq, tullanmaq, tarazlıq, elastiklik, bədənlərini mükəmməl hiss etmək, hərəkətləri idarə etmək, rəqs etmək, cisimləri idarə etmək qabiliyyətləri yaxşı inkişaf etmişdir. Onlar ustalıq etməyi və əlləri ilə yaratmağı xoşlayırlar. Onların bacarıqları rəqabət və uğur qazanmaq yolunda çalışmaqla inkişaf edir. Uzun müddət bir yerdə hərəkətsiz oturmaqda çətinlik çəkir, ətrafda baş verən hadisələrdə aktiv iştirak etməyəndə darıxırlar.',
            { text: 'Valideynlər üçün Tövsiyələr:', style: 'bold' },
            { text: 'İdman və rəqs:', style: 'italic' },
            'Uşağınızı müxtəlif idman növlərinə və rəqs dərslərinə yazdırmaq, onların bədən koordinasiyasını və fiziki bacarıqlarını inkişaf etdirəcək.',
            { text: 'Əl işləri:', style: 'italic' },
            'Uşağınıza müxtəlif əl işləri layihələri təklif edin. Bu, onların yaradıcı qabiliyyətini və əl motorikasını gücləndirəcək.',
            { text: 'Açıq havada oyunlar:', style: 'italic' },
            'Uşağınızı açıq havada oynamağa və müxtəlif fiziki fəaliyyətlərlə məşğul olmağa təşviq edin. Bu, onların fiziki sağlamlığını və bədən kinestetik intellektini inkişaf etdirəcək.',
            { text: 'Duyğu oyunları:', style: 'italic' },
            'Hərəkətlərlə və mimikalarla emosiyaları ifadə etmə oyunları oynamaq, uşaqların bədən dili və duyğusal ifadə bacarıqlarını gücləndirəcək.',
            { text: 'Mümkün Peşə sahələri:', style: 'bold' },
            'İdmançı: İdman növlərində peşəkar fəaliyyət.\n' +
            'Rəqqas: Rəqs performansları və koreoqrafiya.\n' +
            'Fizioterapevt: Bədən hərəkətləri və reabilitasiya.\n' +
            'Aktyor: Teatr və kino performansları.\n' +
            'Memar: İnşaat və təmir işləri üzrə ustalar.'
        ],
        'Musiqi-ritmik intellekt': [
            { text: 'Musiqi-ritmik intellekt', style: 'subheader' },
            { text: 'Müəyyənləşdirici Suallar:', style: 'bold' },
            '"Eksperimentlər zamanı musiqi və ritmi araşdırmaq və yaratmaqdan zövq alırsanmı?"',
            '"Musiqi və ritmlər vasitəsilə yeni əsərlər yaratmaq sənin üçün maraqlıdırmı?"',
            { text: 'İnterpretasiya:', style: 'bold' },
            'Musiqi-ritmik intellekt güclü inkişaf etmiş uşaqlarda musiqi, ritm və səsi duyma və qiymətləndirmə qabiliyyəti güclü olur. Bu intellekt səs və vibrasiya vasitəsilə yaranan bacarıqdır. Bu intellekt növü səsin bütün sahələri ilə əlaqəlidir: tonlar, ritmlər və vibrasional şablonlar, musiqi və s. Onlar musiqi əsərlərini elementlərə ayıra və əsərdə səslənən bütün alətləri seçə bilirlər. Musiqi-ritmik intellektin yaxşı inkişaf etdiyi şagirdlər səsləri mükəmməl qəbul edir və ona emosional reaksiya verir, ətraf mühitdə və təbiətdə rast gəlinən səslərə qarşı çox həssas olurlar.',
            { text: 'Valideynlər üçün Tövsiyələr:', style: 'bold' },
            { text: 'Musiqi alətləri çalmaq:', style: 'italic' },
            'Uşağınıza musiqi alətləri çalmağı öyrətmək, onların musiqi duyumu və ritm hissini inkişaf etdirəcək.',
            { text: 'Ritmik oyunlar:', style: 'italic' },
            'Ritm oyunları oynamaq, uşaqların musiqi ritmini hiss etmə və səs fərqləndirmə bacarıqlarını gücləndirəcək.',
            { text: 'Mahnı oxuma və dinləmə:', style: 'italic' },
            'Birgə mahnı oxuma və müxtəlif musiqiləri dinləmək, uşaqların musiqi sevgisini və ritm hissini inkişaf etdirəcək.',
            { text: 'Musiqi təhlili:', style: 'italic' },
            'Uşağınıza musiqi parçalarını təhlil etməyi öyrətmək, onların musiqi haqqında daha dərin anlayış əldə etməsinə kömək edəcək.',
            { text: 'Mümkün Peşə sahələri:', style: 'bold' },
            'Musiqiçi: Musiqi alətlərində ifa və musiqi yaratmaq.\n' +
            'Musiqi müəllimi: Musiqi dərsləri vermək və öyrətmək.\n' +
            'Diriqent: Orkestr və ya xor qruplarını idarə etmək.\n' +
            'Musiqi tənqidçisi: Musiqi əsərlərini analiz etmək və qiymətləndirmək.\n' +
            'Səs mühəndisi: Səs yazma və redaktə işləri.'
        ],
        'Şəxslərarası intellekt': [
            { text: 'Şəxslərarası intellekt', style: 'subheader' },
            { text: 'Müəyyənləşdirici Suallar:', style: 'bold' },
            '"Eksperimentlər zamanı başqaları ilə köməkləşmək və öyrəndiklərini onlarla danışmaq nə qədər maraqlıdır?"',
            '"Başqalarının təkliflərini dinləyərək və onları nəzərə alaraq problemləri həll etməkdən zövq alırsanmı?"',
            { text: 'İnterpretasiya:', style: 'bold' },
            'Bu intellekt növünə ətrafdakı insanların əhval-ruhiyyəsini, maraqlarını və hisslərini hiss etmək qabiliyyəti aiddir. Yəni şagird yeni bilikləri insanlarla ünsiyyət vasitəsilə alır. Bu cür uşaqlar üz ifadələrini, səs tembrini və səs tonunu, jestləri incəliklərinə qədər hiss edirlər. Həmçinin bu "siqnallara" qarşı həssas olur və dərhal həmsöhbətinə kömək etməyə çalışırlar. Şəxslərarası intellekt şifahi olmayan (sözsüz) və şifahi (sözlü) ünsiyyət bacarıqlarını əhatə edir. Şəxslərarası intellektin yaxşı inkişaf etdiyi uşaqlar birgə oyunlarda özlərini böyük kimi hiss edir, tez-tez təşəbbüskar rolunda çıxış edirlər. Yaranan münaqişələri düzəldə və ya mövcud olanları həll edə bilirlər. Onlar danışıqlar aparmağı, başqalarını idarə etməyi, hədəflərinə çatmaq üçün qarşılarındakını motivasiya etməyi bacarırlar. Şəxslərarası intellekt insanların ruh halını və istəklərini təyin etmək qabiliyyətini verir. Belə şagirdlər komandada çalışmaqdan zövq alırlar, ona görə də qrupla və ya cütlərlə iş onlar üçün öyrənməyin ən yaxşı yoludur.',
            { text: 'Valideynlər üçün Tövsiyələr:', style: 'bold' },
            { text: 'Qrup oyunları:', style: 'italic' },
            'Uşağınızı qrup oyunlarında iştirak etməyə təşviq edin. Bu, onların sosial bacarıqlarını və komanda ruhunu gücləndirəcək.',
            { text: 'Münaqişə həlli:', style: 'italic' },
            'Münaqişə həlli bacarıqlarını öyrətmək, uşaqların liderlik və problem həll etmə qabiliyyətlərini inkişaf etdirəcək.',
            { text: 'Sosial fəaliyyətlər:', style: 'italic' },
            'Uşağınızı sosial fəaliyyətlərdə və layihələrdə iştirak etməyə təşviq edin. Bu, onların şəxsiyyətlərarası intellektini və empati bacarıqlarını gücləndirəcək.',
            { text: 'Liderlik oyunları:', style: 'italic' },
            'Liderlik rolları olan oyunlar oynamaq, uşaqların liderlik və təşkilatçılıq bacarıqlarını inkişaf etdirəcək.',
            { text: 'Mümkün Peşə sahələri:', style: 'bold' },
            'Psixoloq: İnsanlarla ünsiyyət və psixoloji dəstək.\n' +
            'Sosial işçi: Cəmiyyətlə əlaqəli işlər və sosial dəstək.\n' +
            'Müəllim: Tədris və təhsil fəaliyyəti.\n' +
            'Siyasətçi: İnsanlarla ünsiyyət və ictimai fəaliyyət.\n' +
            'Konsultant: Məsləhət vermə və rəhbərlik.'
        ],
        'Şəxsdaxili intellekt': [
            { text: 'Şəxsdaxili intellekt', style: 'subheader' },
            { text: 'Müəyyənləşdirici Suallar:', style: 'bold' },
            '"Təcrübələr zamanı hiss və düşüncələrini analiz etməkdən zövq alırsanmı?"',
            '"İngiltərə haqqında və oyunları bitirdikdən sonra öyrəndiklərin öz bacarıqlarını daha yaxşı anlamağına dəstək oldumu?"',
            { text: 'İnterpretasiya:', style: 'bold' },
            'Şəxsin öz daxili hissləri, dəyərləri, inancları və düşünmə proseslərini anlamaq və onları aydın şəkildə hiss etmək qabiliyyətidir. Şəxsdaxili intellektin güclü inkişaf etdiyi uşaqlar öz üstün və mənfi cəhətlərini, əhval-ruhiyyələrini, emosiyalarını, istəklərini obyektiv şəkildə qiymətləndirirlər. Onlar özününizamlama və özünüqiymətləndirmə qabiliyyətləri ilə seçilirlər. Bu intellekt növünün mərkəzində özünə kənardan baxa bilmək və öz həyatı barədə düşünə bilmək imkanı yaradan fərdi refleksiya bacarıqları durur. Bu intellekt növü güclü inkişaf etmiş şagirdlər tək işləməyi sevir və bu xüsusiyyət bəzən onları insanlarla ünsiyyətdən kənarlaşdırır.',
            { text: 'Valideynlər üçün Tövsiyələr:', style: 'bold' },
            { text: 'Özünüqiymətləndirmə:', style: 'italic' },
            'Uşağınıza öz güclü və zəif tərəflərini qiymətləndirməyi öyrətmək, onların özünü dərk etmə və özünəinamını gücləndirəcək.',
            { text: 'Fərdi layihələr:', style: 'italic' },
            'Uşağınızı fərdi layihələr üzərində işləməyə təşviq edin. Bu, onların müstəqil düşüncə və özünü ifadə qabiliyyətini inkişaf etdirəcək.',
            { text: 'Meditasiya və düşüncə:', style: 'italic' },
            'Meditasiya və düşüncə təcrübələri ilə uşağınıza rahatlama və özünü dərk etmə yollarını öyrətmək.',
            { text: 'Jurnal yazma:', style: 'italic' },
            'Uşağınıza gündəlik jurnal yazma vərdişi qazandırmaq, onların öz düşüncə və hisslərini daha yaxşı anlamağa kömək edəcək.',
            { text: 'Mümkün Peşə sahələri:', style: 'bold' },
            'Yazar: Öz düşüncələrini və hisslərini ifadə edən yazılar yazmaq.\n' +
            'Psixoterapevt: Şəxsi refleksiya və psixoloji dəstək.\n' +
            'Fəlsəfəçi: Fəlsəfi tədqiqatlar və düşüncə.\n' +
            'Ruhani lider: Dini və mənəvi rəhbərlik.\n' +
            'Konsultant: Şəxsi inkişaf və kariyera məsləhətləri vermək.'
        ],
        'Naturalist intellekt': [
            { text: 'Naturalist intellekt', style: 'subheader' },
            { text: 'Müəyyənləşdirici Suallar:', style: 'bold' },
            '"İngiltərənin milli gülü olan qızılgül toxumlarını əkmək və onların böyüməsini izləmək maraqlıdır?"',
            '"İngiltərənin təbii mühitində müxtəlif bitki və heyvanları öyrənmək səni həyəcanlandırdımı?"',
            { text: 'İnterpretasiya:', style: 'bold' },
            'Müxtəlif növ flora və fauna növlərini tanımaq və təsnif etmək, təbiətdəki digər obyektləri müəyyənləşdirmək və kateqoriyalara bölə bilmək, müxtəlif təbiət hadisələrini anlayıb dəyərləndirməyi bacarmaq qabiliyyətidir. Bu intellekt növünün güclü inkişaf etdiyi uşaqlar təbiəti, ətraf aləmi və onun fenomenləri ilə ünsiyyətdə olmağı sevirlər. Onlar təbiəti daha yaxından hiss edir, təbiətin iştirak etdiyi hər hansı bir fəaliyyətdən (bitkilərin inkişafını, heyvanlara qulluq və qayğı göstərməklə müşahidə etmək) böyük zövq alır və bununla öyrənirlər. Naturalist intellektli uşaqlar yürüyüşə getməyi, dağlara çıxmağı və bağda işləməyi sevirlər. Onlar uşaqlıqdan ekologiya, heyvanlar və bitkilər aləmi ilə maraqlanırlar. Bu uşaqlar üçün təlim prosesinin qapalı şəraitdə deyil, mümkün qədər tez-tez açıq bir məkanda baş tutması çox vacibdir.',
            { text: 'Valideynlər üçün Tövsiyələr:', style: 'bold' },
            { text: 'Təbiət gəzintiləri:', style: 'italic' },
            'Uşağınızı təbiət gəzintilərinə aparmaq, onların təbiətə olan marağını və biliklərini inkişaf etdirəcək.',
            { text: 'Bağçılıq:', style: 'italic' },
            'Uşağınıza bağçılıq fəaliyyəti ilə məşğul olmağı öyrətmək, onların bitkilər və heyvanlar haqqında daha çox məlumat əldə etməsinə kömək edəcək.',
            { text: 'Ekoloji layihələr:', style: 'italic' },
            'Uşağınızı ekoloji layihələrə və təbiət araşdırmalarına cəlb etmək, onların təbiətə olan sevgisini və naturalist intellektini gücləndirəcək.',
            { text: 'Heyvan müşahidəsi:', style: 'italic' },
            'Heyvanlar haqqında daha çox məlumat öyrənmək və onların davranışlarını müşahidə etmək, uşaqların təbiətə olan marağını artıracaq.',
            { text: 'Mümkün Peşə sahələri:', style: 'bold' },
            'Bioloq: Canlı orqanizmlərin tədqiqi.\n' +
            'Ekoloq: Ətraf mühitin və təbiətin qorunması.\n' +
            'Bağban: Bitki yetişdirmə və bağçılıq.\n' +
            'Zooloq: Heyvanların tədqiqi və qorunması.\n' +
            'Dəniz bioloqu: Dəniz həyatını və ekosistemləri öyrənmək.'
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
