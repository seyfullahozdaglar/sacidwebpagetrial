// Blog posts data - defined as a global variable
var blogPosts = [
    {
        id: 1,
        title: {
            tr: "2024 Yılı Kira Artış Oranları Açıklandı",
            en: "2024 Rent Increase Rates Announced"
        },
        excerpt: {
            tr: "2024 yılı için kira artış oranları TÜİK verilerine göre belirlendi. Kiracı ve ev sahipleri için en güncel bilgiler...",
            en: "Rent increase rates for 2024 have been determined according to TÜİK data. The most up-to-date information for tenants and landlords..."
        },
        date: "15 Mart 2024",
        category: {
            tr: "Kira Hukuku",
            en: "Rental Law"
        },
        tags: {
            tr: ["kira artışı", "TÜFE", "güncel"],
            en: ["rent increase", "CPI", "current"]
        },
        content: {
            tr: `<h3>2024 Kira Artış Oranları Belirlendi</h3>
            <p>2024 yılı kira artış oranları Türkiye İstatistik Kurumu (TÜİK) verilerine göre %45.5 olarak belirlenmiştir. Bu oran, bir önceki yılın aynı dönemine göre hesaplanan TÜFE artış oranıdır.</p>
            
            <h3>Kira Artışında Dikkat Edilmesi Gerekenler</h3>
            <p>Kiracılar ve ev sahipleri arasında yapılacak kira artışı görüşmelerinde bu oran dikkate alınmalıdır. Ancak taraflar karşılıklı anlaşma ile farklı bir oran üzerinde de anlaşabilirler.</p>`,
            en: `<h3>2024 Rent Increase Rates Determined</h3>
            <p>The 2024 rent increase rate has been determined as 45.5% according to Turkish Statistical Institute (TÜİK) data. This rate is the CPI increase rate calculated compared to the same period of the previous year.</p>
            
            <h3>Points to Consider in Rent Increase</h3>
            <p>This rate should be taken into account in rent increase negotiations between tenants and landlords. However, parties can agree on a different rate by mutual agreement.</p>`
        }
    },
    {
        id: 2,
        title: {
            tr: "Şirket Birleşme ve Devralmalarda Yeni Düzenlemeler",
            en: "New Regulations in Mergers and Acquisitions"
        },
        excerpt: {
            tr: "Şirketler hukukunda birleşme ve devralma süreçlerine ilişkin yeni düzenlemeler yürürlüğe girdi...",
            en: "New regulations regarding merger and acquisition processes in corporate law have come into effect..."
        },
        date: "10 Mart 2024",
        category: {
            tr: "Şirketler Hukuku",
            en: "Corporate Law"
        },
        tags: {
            tr: ["şirket birleşmesi", "devralma", "yasal düzenleme"],
            en: ["merger", "acquisition", "legal regulation"]
        },
        content: {
            tr: `<h3>Şirket Birleşmelerinde Yeni Süreçler</h3>
            <p>Şirket birleşme ve devralma işlemlerinde rekabet kurulu onay süreçleri yeniden düzenlendi. Yeni düzenlemelerle birlikte şirket birleşmelerinin değerlendirme süreci kısaltıldı.</p>
            
            <h3>Hissedar Hakları</h3>
            <p>Devralma işlemlerinde azınlık hissedarlarının hakları güçlendirildi. Hissedarlara daha fazla bilgilendirme ve itiraz hakkı tanındı.</p>`,
            en: `<h3>New Processes in Company Mergers</h3>
            <p>The competition board approval processes in company merger and acquisition transactions have been reorganized. With the new regulations, the evaluation process of company mergers has been shortened.</p>
            
            <h3>Shareholder Rights</h3>
            <p>The rights of minority shareholders in acquisition transactions have been strengthened. Shareholders have been granted more information and objection rights.</p>`
        }
    },
    {
        id: 3,
        title: {
            tr: "İşten Çıkarmalarda Yeni Yükümlülükler",
            en: "New Obligations in Terminations"
        },
        excerpt: {
            tr: "İş Kanunu'nda yapılan değişikliklerle işverenlerin işten çıkarma süreçlerindeki yükümlülükleri arttı...",
            en: "With the changes made in the Labor Law, employers' obligations in termination processes have increased..."
        },
        date: "5 Mart 2024",
        category: {
            tr: "İş Hukuku",
            en: "Labor Law"
        },
        tags: {
            tr: ["işten çıkarma", "iş kanunu", "yükümlülük"],
            en: ["termination", "labor law", "obligations"]
        },
        content: {
            tr: `<h3>İşten Çıkarma Süreçleri</h3>
            <p>Yeni düzenlemeyle birlikte işverenler, işten çıkarma öncesi yazılı bildirimde bulunmak ve çalışana savunma hakkı tanımak zorunda.</p>
            
            <h3>Tazminat Hakları</h3>
            <p>Haksız işten çıkarmalarda çalışanlara ödenecek tazminat miktarları yeniden belirlendi. Kıdem tazminatı hesaplamalarında değişiklikler yapıldı.</p>`,
            en: `<h3>Termination Processes</h3>
            <p>With the new regulation, employers are obliged to make written notification before termination and give the employee the right to defense.</p>
            
            <h3>Compensation Rights</h3>
            <p>The amounts of compensation to be paid to employees in unfair terminations have been re-determined. Changes have been made in severance pay calculations.</p>`
        }
    },
    {
        id: 4,
        title: {
            tr: "Ceza Muhakemesi Kanunu'nda Önemli Değişiklikler",
            en: "Important Changes in Criminal Procedure Code"
        },
        excerpt: {
            tr: "Ceza Muhakemesi Kanunu'nda yapılan değişikliklerle soruşturma ve kovuşturma süreçleri yeniden düzenlendi...",
            en: "With the changes made in the Criminal Procedure Code, investigation and prosecution processes have been reorganized..."
        },
        date: "28 Şubat 2024",
        category: {
            tr: "Ceza Hukuku",
            en: "Criminal Law"
        },
        tags: {
            tr: ["ceza muhakemesi", "soruşturma", "yasal değişiklik"],
            en: ["criminal procedure", "investigation", "legal change"]
        },
        content: {
            tr: `<h3>Soruşturma Süreçleri</h3>
            <p>Soruşturma aşamasında şüphelinin hakları genişletildi. Avukat bulundurma hakkı ve susma hakkı ile ilgili düzenlemeler netleştirildi.</p>
            
            <h3>Delil Toplama</h3>
            <p>Delil toplama yöntemlerinde dijital delillerin kullanımına ilişkin yeni düzenlemeler getirildi. Elektronik delillerin mahkemede kullanım koşulları belirlendi.</p>`,
            en: `<h3>Investigation Processes</h3>
            <p>The rights of the suspect at the investigation stage have been expanded. Regulations regarding the right to have a lawyer and the right to remain silent have been clarified.</p>
            
            <h3>Evidence Collection</h3>
            <p>New regulations have been introduced regarding the use of digital evidence in evidence collection methods. The conditions for the use of electronic evidence in court have been determined.</p>`
        }
    },
    {
        id: 5,
        title: {
            tr: "Tüketici Haklarına İlişkin Yeni Düzenlemeler",
            en: "New Regulations Regarding Consumer Rights"
        },
        excerpt: {
            tr: "Tüketicinin Korunması Hakkında Kanun'da yapılan değişikliklerle mesafeli satış sözleşmeleri yeniden düzenlendi...",
            en: "With the changes made in the Law on the Protection of Consumers, distance sales contracts have been reorganized..."
        },
        date: "20 Şubat 2024",
        category: {
            tr: "Tüketici Hukuku",
            en: "Consumer Law"
        },
        tags: {
            tr: ["tüketici hakları", "mesafeli satış", "kanun"],
            en: ["consumer rights", "distance sales", "law"]
        },
        content: {
            tr: `<h3>Mesafeli Satış Sözleşmeleri</h3>
            <p>Online alışverişlerde tüketicilere tanınan cayma hakkı süresi 14 günden 30 güne çıkarıldı. İade süreçleri kolaylaştırıldı.</p>
            
            <h3>Tüketici Şikayetleri</h3>
            <p>Tüketici sorunları hakem heyetlerinde daha hızlı çözülecek. Tüketici mahkemelerindeki dava süreçleri kısaltıldı.</p>`,
            en: `<h3>Distance Sales Contracts</h3>
            <p>The right of withdrawal granted to consumers in online shopping has been increased from 14 days to 30 days. Return processes have been simplified.</p>
            
            <h3>Consumer Complaints</h3>
            <p>Consumer problems will be resolved faster in arbitration boards. Lawsuit processes in consumer courts have been shortened.</p>`
        }
    },
    {
        id: 6,
        title: {
            tr: "Sigorta Tazminat Davalarında Zamanaşımı",
            en: "Statute of Limitations in Insurance Compensation Cases"
        },
        excerpt: {
            tr: "Sigorta tazminat davalarında zamanaşımı süreleri ve bu sürelerin nasıl hesaplandığı hakkında detaylı bilgi...",
            en: "Detailed information about statute of limitation periods in insurance compensation cases and how these periods are calculated..."
        },
        date: "15 Şubat 2024",
        category: {
            tr: "Sigorta Hukuku",
            en: "Insurance Law"
        },
        tags: {
            tr: ["sigorta", "tazminat", "zamanaşımı"],
            en: ["insurance", "compensation", "statute of limitations"]
        },
        content: {
            tr: `<h3>Sigorta Tazminat Davaları</h3>
            <p>Sigorta tazminat davalarında zamanaşımı süresi, tazminat talebine konu olayın gerçekleştiği tarihten itibaren 10 yıldır.</p>
            
            <h3>Özel Durumlar</h3>
            <p>Hayat sigortalarında ve sağlık sigortalarında zamanaşımı süreleri farklılık gösterebilmektedir. Trafik sigortası tazminat davalarında özel düzenlemeler bulunmaktadır.</p>`,
            en: `<h3>Insurance Compensation Cases</h3>
            <p>The statute of limitations for insurance compensation cases is 10 years from the date of the event subject to the compensation claim.</p>
            
            <h3>Special Cases</h3>
            <p>Statute of limitation periods may vary in life insurance and health insurance. There are special regulations in traffic insurance compensation cases.</p>`
        }
    },
    {
        id: 7,
        title: {
            tr: "Velayet Davalarında Çocuğun Üstün Yararı",
            en: "The Best Interest of the Child in Custody Cases"
        },
        excerpt: {
            tr: "Velayet davalarında mahkemelerin çocuğun üstün yararını nasıl değerlendirdiği ve velayet kararlarında dikkat edilen hususlar...",
            en: "How courts evaluate the best interest of the child in custody cases and the points considered in custody decisions..."
        },
        date: "10 Şubat 2024",
        category: {
            tr: "Aile Hukuku",
            en: "Family Law"
        },
        tags: {
            tr: ["velayet", "çocuk", "aile hukuku"],
            en: ["custody", "child", "family law"]
        },
        content: {
            tr: `<h3>Çocuğun Üstün Yararı</h3>
            <p>Velayet davalarında mahkemeler öncelikle çocuğun üstün yararını gözetir. Çocuğun yaşı, cinsiyeti, ebeveynlerle ilişkisi ve sosyal çevresi dikkate alınır.</p>
            
            <h3>Velayet Değişikliği</h3>
            <p>Velayetin değiştirilmesi için ciddi ve önemli nedenlerin bulunması gerekmektedir. Çocuğun mevcut durumda zarar görmesi velayet değişikliği için yeterli sebep olabilir.</p>`,
            en: `<h3>The Best Interest of the Child</h3>
            <p>In custody cases, courts primarily consider the best interest of the child. The child's age, gender, relationship with parents and social environment are taken into account.</p>
            
            <h3>Custody Change</h3>
            <p>Serious and important reasons must exist for the change of custody. The child being harmed in the current situation may be sufficient reason for custody change.</p>`
        }
    },
    {
        id: 8,
        title: {
            tr: "İcra Takibinde Yeni Usuller",
            en: "New Procedures in Enforcement Proceedings"
        },
        excerpt: {
            tr: "İcra hukukunda takip yolları ve borçlunun haklarına ilişkin güncel gelişmeler ve yargıtay kararları...",
            en: "Current developments and supreme court decisions regarding enforcement methods and debtor's rights in enforcement law..."
        },
        date: "5 Şubat 2024",
        category: {
            tr: "İcra Hukuku",
            en: "Enforcement Law"
        },
        tags: {
            tr: ["icra", "taki̇p", "borçlu hakları"],
            en: ["enforcement", "proceedings", "debtor rights"]
        },
        content: {
            tr: `<h3>İcra Takip Yolları</h3>
            <p>İlamlı ve ilamsız icra takibi arasındaki farklar ve her bir takip yolunun avantajları. Borçlunun itiraz ve şikayet hakları.</p>
            
            <h3>Haciz İşlemleri</h3>
            <p>Haciz edilemeyen mallar ve haciz sınırları. Borçlunun temel ihtiyaçları için ayrılan tutarlar ve hacizden muaf mallar.</p>`,
            en: `<h3>Enforcement Methods</h3>
            <p>Differences between enforcement with and without judgment and advantages of each enforcement method. Debtor's objection and complaint rights.</p>
            
            <h3>Seizure Procedures</h3>
            <p>Properties that cannot be seized and seizure limits. Amounts reserved for debtor's basic needs and properties exempt from seizure.</p>`
        }
    },
    {
        id: 9,
        title: {
            tr: "Ticari Sözleşmelerde Yeni Trendler",
            en: "New Trends in Commercial Contracts"
        },
        excerpt: {
            tr: "Ticaret hukukunda sözleşme düzenleme trendleri ve dijital ticaret sözleşmelerinde dikkat edilmesi gereken hususlar...",
            en: "Contract drafting trends in commercial law and points to consider in digital trade contracts..."
        },
        date: "1 Şubat 2024",
        category: {
            tr: "Ticaret Hukuku",
            en: "Commercial Law"
        },
        tags: {
            tr: ["ticari sözleşme", "dijital ticaret", "sözleşme hukuku"],
            en: ["commercial contract", "digital trade", "contract law"]
        },
        content: {
            tr: `<h3>Dijital Ticaret Sözleşmeleri</h3>
            <p>Elektronik ticaretin yaygınlaşmasıyla birlikte online sözleşmelerde yer alması gereken zorunlu hükümler ve tüketici bilgilendirme yükümlülükleri.</p>
            
            <h3>Uluslararası Ticaret Sözleşmeleri</h3>
            <p>Incoterms 2020 kuralları ve uluslararası ticarette uygulanacak hukukun seçimi. Tahkim şartları ve uyuşmazlık çözüm yöntemleri.</p>`,
            en: `<h3>Digital Trade Contracts</h3>
            <p>Mandatory provisions that must be included in online contracts and consumer information obligations with the spread of e-commerce.</p>
            
            <h3>International Trade Contracts</h3>
            <p>Incoterms 2020 rules and choice of law to be applied in international trade. Arbitration conditions and dispute resolution methods.</p>`
        }
    }
];

console.log('Blog data loaded:', blogPosts.length, 'posts');
