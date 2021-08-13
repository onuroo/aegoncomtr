import {
    dictionary,
    locale,
    _
  } from 'svelte-i18n';
  function setupI18n({
    withLocale: _locale
  } = {
    withLocale: 'tr'
  }) {
    dictionary.set({
      en: {
        "header": {
            "hakkimizda": "Hakkımızda",
            "urunler": "Ürünler",
            "iletisim": "İletişim",
            "kariyer": "Kariyer",
            "online_hizmetler": "Online Hizmetler",
        },
        "main_page": {
          "banner": {
            "title": "Aegon, yarını değiştirir",
            "description": "Hayat Sigortası ürünlerimizle siz de milyonlarca müşterimiz gibi geleceğe adım atın!",
            "button_label": "Hayat Sigortası Ürünleri"
          },
          "featured_news": {
            "title": "Öne Çıkan Haberler",
            "see_all_news": "Tüm Haberleri Gör",
          },
          "statistics": {
            "title": "Rakamlarla Aegon",
          },
          "life_policy_information": {
            "title": "Hayatta Olmaz Deme",
            "description": "Güvenli bir gelecek için Finansal Güvence Danışmanlarımızla tanışın, yarınlarınızı dilediğiniz gibi şekillendirin.",
            "button_label": "Daha Fazla Bilgi Al",
          },
          "aegon_touch": {
            "title": "Aegon Touch",
            "description": "Aegon Touch online platformu ile hayat sigortası işlemlerinizi hızlı ve kolayca, bir aracıya ihtiyaç duymadan, istediğiniz zaman istediğiniz yerden gerçekleştirip geleceğinizi güvence altına alabilirsiniz",
            "button_label": "Aegon Touch Sitesine Git",
          }
        },
      },
       tr: {
        "header": {
            "hakkimizda": "Hakkımızda",
            "urunler": "Ürünler",
            "iletisim": "İletişim",
            "kariyer": "Kariyer",
            "online_hizmetler": "Online Hizmetler",
        },
        "main_page": {
          "banner": {
            "title": "Aegon, yarını değiştirir",
            "description": "Hayat Sigortası ürünlerimizle siz de milyonlarca müşterimiz gibi geleceğe adım atın!",
            "button_label": "Hayat Sigortası Ürünleri"
          },
          "featured_news": {
            "title": "Öne Çıkan Haberler",
            "see_all_news": "Tüm Haberleri Gör",
          },
          "statistics": {
            "title": "Rakamlarla Aegon",
          },
          "life_policy_information": {
            "title": "Hayatta Olmaz Deme",
            "description": "Güvenli bir gelecek için Finansal Güvence Danışmanlarımızla tanışın, yarınlarınızı dilediğiniz gibi şekillendirin.",
            "button_label": "Daha Fazla Bilgi Al",
          },
          "aegon_touch": {
            "title": "Aegon Touch",
            "description": "Aegon Touch online platformu ile hayat sigortası işlemlerinizi hızlı ve kolayca, bir aracıya ihtiyaç duymadan, istediğiniz zaman istediğiniz yerden gerçekleştirip geleceğinizi güvence altına alabilirsiniz",
            "button_label": "Aegon Touch Sitesine Git",
          },
          "aegon_direct": {
            "title": "Olayın Kolayı",
            "description": "Kredinizin Hayat Sigortası'nı bankadan almak zorunda değilsiniz. Olayın Kolayı ile tanışın, geleceğinizi garanti altına alın!",
            "button_label": "Aegon Direkt Sitesine Git",
          },
          "blog": {
            "title_1": "Aegon Blog:",
            "title_2": "Sigorta ile İlgili Herşey",
            "description": "Bloğumuzu takip edin, en güncel sigorta haberlerinden önce siz haberdar olun.",
            "button_label": "Aegon Blog",
          }
        },
      },
    });
    locale.set(_locale);
  }
  export {
    _,
    setupI18n
  };