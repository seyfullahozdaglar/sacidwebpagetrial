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
        tags: {
            tr: ["kira artışı", "TÜFE", "güncel"],
            en: ["rent increase", "CPI", "current"]
        },
        content: {
            tr: `<h3>2024 Kira Artış Oranları Belirlendi</h3>
            <p>2024 yılı kira artış oranları Türkiye İstatistik Kurumu (TÜİK) verilerine göre %45.5 olarak belirlenmiştir. Bu oran, bir önceki yılın aynı dönemine göre hesaplanan TÜFE artış oranıdır.</p>
            
            <h3>Kira Artışında Dikkat Edilmesi Gerekenler</h3>
            <p>Kiracılar ve ev sahipleri arasında yapılacak kira artışı görüşmelerinde bu oran dikkate alınmalıdır. Ancak taraflar karşılıklı anlaşma ile farklı bir oran üzerinde de anlaşabilirler.</p>
            
            <h3>Yasal Süreç</h3>
            <p>Kira artışının yasal sınırları ve uygulama detayları hakkında daha fazla bilgi almak için avukatınıza danışmanız önerilir. Yasal süreçler konusunda profesyonel destek almak, olası anlaşmazlıkların önüne geçebilir.</p>
            
            <h3>Önemli Hatırlatmalar</h3>
            <ul>
                <li>Kira artışı için yazılı bildirim zorunludur</li>
                <li>Artış oranı TÜFE verilerine dayanmalıdır</li>
                <li>Taraflar anlaşamazsa yasal yollara başvurulabilir</li>
                <li>Sözleşmede farklı hükümler varsa ona göre hareket edilir</li>
            </ul>`,
            en: `<h3>2024 Rent Increase Rates Determined</h3>
            <p>The 2024 rent increase rate has been determined as 45.5% according to Turkish Statistical Institute (TÜİK) data. This rate is the CPI increase rate calculated compared to the same period of the previous year.</p>
            
            <h3>Points to Consider in Rent Increase</h3>
            <p>This rate should be taken into account in rent increase negotiations between tenants and landlords. However, parties can agree on a different rate by mutual agreement.</p>
            
            <h3>Legal Process</h3>
            <p>It is recommended to consult your lawyer for more information about the legal limits of rent increases and application details. Getting professional support on legal processes can prevent possible disputes.</p>
            
            <h3>Important Reminders</h3>
            <ul>
                <li>Written notification is mandatory for rent increase</li>
                <li>Increase rate should be based on CPI data</li>
                <li>If parties cannot agree, legal ways can be applied</li>
                <li>If there are different provisions in the contract, act accordingly</li>
            </ul>`
        }
    },
    {
        id: 2,
        title: {
            tr: "Yeni Kira Yasası ile Gelen Değişiklikler",
            en: "Changes with the New Rental Law"
        },
        excerpt: {
            tr: "TBMM'de kabul edilen yeni kira yasası ile kiracı ve ev sahipleri için önemli değişiklikler...",
            en: "Important changes for tenants and landlords with the new rental law adopted by the Turkish Grand National Assembly..."
        },
        date: "28 Şubat 2024",
        tags: {
            tr: ["yasa değişikliği", "kira hukuku", "mevzuat"],
            en: ["law change", "rental law", "legislation"]
        },
        content: {
            tr: `<h3>Yeni Kira Yasası ile Getirilen Yenilikler</h3>
            <p>Yeni kira yasası ile birlikte depozito iadeleri, tahliye süreçleri ve kira sözleşmelerinde önemli değişiklikler getirilmiştir.</p>
            
            <h3>Depozito İade Süreleri</h3>
            <p>Yeni düzenlemeye göre, depozito iadelerinde 30 günlük süre zorunlu hale getirilmiş olup, bu süre içinde depozitonun iade edilmemesi durumunda faiz uygulanacaktır.</p>
            
            <h3>Tahliye Süreçleri</h3>
            <p>Ayrıca, tahliye davalarında uzlaşma süreci zorunlu hale getirilerek dava süreçlerinin kısaltılması hedeflenmektedir. Bu sayede hem kiracılar hem de ev sahipleri için daha hızlı çözüm sunulacaktır.</p>
            
            <h3>Kira Sözleşmeleri</h3>
            <p>Yeni yasa ile standart kira sözleşmesi formatı getirilmiş olup, sözleşmelerde yer alması gereken asgari şartlar belirlenmiştir.</p>
            
            <h3>Yasanın Yürürlüğe Girişi</h3>
            <p>Yasanın tam metni ve uygulama detayları için resmi gazeteyi takip etmeniz önerilir. Yeni düzenlemelerin ne zaman yürürlüğe gireceği konusunda güncel bilgileri takip etmek önemlidir.</p>`,
            en: `<h3>Innovations Brought by the New Rental Law</h3>
            <p>With the new rental law, important changes have been made regarding deposit returns, eviction processes and rental contracts.</p>
            
            <h3>Deposit Return Periods</h3>
            <p>According to the new regulation, a 30-day period for deposit returns has been made mandatory, and interest will be applied if the deposit is not returned within this period.</p>
            
            <h3>Eviction Processes</h3>
            <p>In addition, it is aimed to shorten litigation processes by making the reconciliation process mandatory in eviction cases. This will provide faster solutions for both tenants and landlords.</p>
            
            <h3>Rental Agreements</h3>
            <p>The new law introduces a standard rental agreement format and determines the minimum conditions that must be included in the contracts.</p>
            
            <h3>Effective Date of the Law</h3>
            <p>It is recommended to follow the official gazette for the full text of the law and application details. It is important to follow current information about when the new regulations will come into effect.</p>`
        }
    },
    {
        id: 3,
        title: {
            tr: "Tahliye Davalarında Yargıtay'ın Yeni Kararı",
            en: "Supreme Court's New Decision in Eviction Cases"
        },
        excerpt: {
            tr: "Yargıtay Hukuk Genel Kurulu, tahliye davalarında süre hesaplamaları ile ilgili önemli bir karara imza attı...",
            en: "The Supreme Court General Assembly of Civil Chambers signed an important decision regarding time calculations in eviction cases..."
        },
        date: "10 Şubat 2024",
        tags: {
            tr: ["Yargıtay", "tahliye", "içtihat"],
            en: ["Supreme Court", "eviction", "jurisprudence"]
        },
        content: {
            tr: `<h3>Yargıtay'ın Önemli Kararı</h3>
            <p>Yargıtay Hukuk Genel Kurulu'nun son kararına göre, tahliye davalarında süre hesaplamalarında takvim günü esas alınacaktır.</p>
            
            <h3>Eski Uygulama ve Yeni Karar</h3>
            <p>Bu karar, özellikle iş günü üzerinden yapılan hesaplamalarla ilgili belirsizlikleri gidermiştir. Daha önce farklı mahkemeler tarafından farklı uygulamalar yapılıyordu.</p>
            
            <h3>Dava Açma Süresi</h3>
            <p>Karar, tahliye ihtarının tebliğ tarihinden itibaren 30 takvim günü içinde dava açılması gerektiğini hükme bağlamıştır. Bu sürenin geçirilmesi durumunda davanın reddedileceği belirtilmiştir.</p>
            
            <h3>Uygulama Alanları</h3>
            <p>Kararın tüm tahliye davalarında uygulanacağı ve benzer konularda emsal teşkil edeceği öngörülmektedir.</p>
            
            <h3>Hukuki Danışmanlık</h3>
            <p>Kararın detayları ve uygulama alanları hakkında hukuk büromuzdan bilgi alabilirsiniz. Yargıtay kararlarının nasıl uygulanacağı konusunda profesyonel destek almak önemlidir.</p>`,
            en: `<h3>Important Decision of the Supreme Court</h3>
            <p>According to the recent decision of the Supreme Court General Assembly of Civil Chambers, calendar days will be taken as basis for time calculations in eviction cases.</p>
            
            <h3>Old Practice and New Decision</h3>
            <p>This decision has eliminated uncertainties regarding calculations based on business days. Previously, different practices were being carried out by different courts.</p>
            
            <h3>Lawsuit Filing Period</h3>
            <p>The decision ruled that the lawsuit must be filed within 30 calendar days from the date of notification of the eviction notice. It was stated that the case would be dismissed if this period expired.</p>
            
            <h3>Application Areas</h3>
            <p>It is foreseen that the decision will be applied in all eviction cases and will set a precedent in similar matters.</p>
            
            <h3>Legal Consulting</h3>
            <p>You can get information from our law office about the details of the decision and its application areas. It is important to get professional support on how Supreme Court decisions will be implemented.</p>`
        }
    },
    {
        id: 4,
        title: {
            tr: "Kira Sözleşmesi Hazırlarken Dikkat Edilmesi Gerekenler",
            en: "Points to Consider When Preparing a Rental Agreement"
        },
        excerpt: {
            tr: "Sağlam bir kira sözleşmesi, olası uyuşmazlıkların önlenmesinde kritik öneme sahiptir. İşte dikkat edilmesi gereken noktalar...",
            en: "A solid rental agreement is critical in preventing potential disputes. Here are the points to consider..."
        },
        date: "25 Ocak 2024",
        tags: {
            tr: ["kira sözleşmesi", "sözleşme hukuku", "önlem"],
            en: ["rental agreement", "contract law", "precaution"]
        },
        content: {
            tr: `<h3>Kira Sözleşmelerinin Önemi</h3>
            <p>Kira sözleşmeleri, kiracı ve ev sahibi arasındaki ilişkiyi düzenleyen en önemli belgedir. Doğru hazırlanmış bir sözleşme, ileride çıkabilecek sorunların önlenmesinde etkilidir.</p>
            
            <h3>Sözleşmede Bulunması Gereken Temel Unsurlar</h3>
            <p>Sözleşme hazırlanırken tarafların kimlik bilgilerinin eksiksiz olması, kira bedelinin net bir şekilde belirtilmesi, ödeme tarihlerinin açıkça yazılması, depozito miktarı ve iade koşullarının detaylandırılması gerekmektedir.</p>
            
            <h3>Ek Hükümler</h3>
            <p>Ayrıca, sözleşmede vergi yükümlülükleri, bakım ve onarım sorumlulukları ile sözleşmenin fesih koşulları da mutlaka yer almalıdır.</p>
            
            <h3>Standart Sözleşmeler Yerine Özel Sözleşmeler</h3>
            <p>Standart sözleşme modelleri yerine, tarafların özel durumlarını dikkate alan hukuki danışmanlıkla hazırlanmış sözleşmeler tercih edilmelidir.</p>
            
            <h3>Yasal Zorunluluklar</h3>
            <p>Kira sözleşmelerinin noter onaylı olması zorunlu değildir ancak uzun vadeli sözleşmelerde ve yüksek kira bedellerinde noter onayı tavsiye edilir.</p>`,
            en: `<h3>Importance of Rental Agreements</h3>
            <p>Rental agreements are the most important document regulating the relationship between the tenant and the landlord. A properly prepared contract is effective in preventing future problems.</p>
            
            <h3>Basic Elements That Should Be in the Contract</h3>
            <p>When preparing the contract, the identity information of the parties must be complete, the rent amount must be clearly stated, payment dates must be clearly written, and the deposit amount and refund conditions must be detailed.</p>
            
            <h3>Additional Provisions</h3>
            <p>In addition, tax obligations, maintenance and repair responsibilities, and contract termination conditions must be included in the contract.</p>
            
            <h3>Special Contracts Instead of Standard Contracts</h3>
            <p>Instead of standard contract models, contracts prepared with legal consultancy that take into account the special circumstances of the parties should be preferred.</p>
            
            <h3>Legal Requirements</h3>
            <p>Rental agreements do not have to be notarized, but notary approval is recommended for long-term contracts and high rental amounts.</p>`
        }
    }
];

console.log('Blog data loaded:', blogPosts.length, 'posts');