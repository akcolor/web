# Akcolor Fotoğrafçılık

Bakırköy merkezli Akcolor Fotoğrafçılık için SEO ve GEO odaklı, statik olarak derlenen web sitesi. [Astro](https://astro.build) + fonksiyonel React island'ları ile geliştirilmiş, GitHub Pages üzerinden `akcolor.com` alan adında yayınlanır.

## Teknoloji

- **Astro 5** — statik site üretimi, varsayılan olarak sıfır JavaScript
- **React island'ları** — yalnızca gereken yerde (tema değiştirici)
- **`@astrojs/sitemap`** — otomatik `sitemap-index.xml`
- **`astro:assets`** — otomatik WebP/AVIF, responsive `srcset`, `width`/`height`
- **`@fontsource/inter`** — kendi sunucumuzda barındırılan font (harici istek yok)
- **İçerik koleksiyonu** — hizmet sayfaları tek bir şablondan üretilir

## Komutlar

| Komut             | Açıklama                                   |
| ----------------- | ------------------------------------------ |
| `npm install`     | Bağımlılıkları yükler                       |
| `npm run dev`     | Geliştirme sunucusu (`localhost:4321`)     |
| `npm run build`   | `dist/` klasörüne statik derleme            |
| `npm run preview` | Derlenmiş çıktının önizlemesi              |

## Proje Yapısı

```text
src/
├── assets/            # Görseller (astro:assets ile işlenir)
├── components/        # Header, Footer, Faq, WhatsAppFloat, ThemeToggle (React)
├── content/services/  # Hizmet verileri (JSON) — içerik koleksiyonu
├── data/site.ts       # Tek kaynak: NAP, menü, hizmet listesi
├── layouts/           # BaseLayout, ServiceLayout
├── lib/schema.ts      # JSON-LD üreticileri (LocalBusiness, Service, FAQ, Breadcrumb)
├── pages/             # index, [service], sss, 404
└── styles/global.css  # Tema değişkenleri ve temel stiller
public/                # robots.txt, CNAME, favicon, og-image, apple-touch-icon
.github/workflows/     # GitHub Pages deploy (withastro/action)
legacy/                # Eski statik site (referans; yayına dahil değil)
```

## Yeni Hizmet Sayfası Ekleme

`src/content/services/` altına yeni bir `.json` dosyası ekleyin (mevcut dosyalardan birini örnek alın). URL otomatik olarak dosya adından (`slug`) oluşur ve sitemap ile menülere dahil edilir.

## Yayın (Deploy)

`main` dalına yapılan her push, `.github/workflows/deploy.yml` üzerinden otomatik derlenip GitHub Pages'e yayınlanır. `public/CNAME` dosyası `akcolor.com` alan adını bağlar.

### Yayın sonrası kontrol listesi

- [ ] GitHub deposu ayarlarında Pages kaynağını **GitHub Actions** olarak seçin.
- [ ] DNS: `akcolor.com` için GitHub Pages IP'leri / `CNAME` kaydını yapın.
- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results) ile yapısal veriyi doğrulayın.
- [ ] Google Search Console'a `sitemap-index.xml` gönderin.
- [ ] Lighthouse ile Performans/SEO/Erişilebilirlik skorlarını ölçün.

## Bilinen Eksikler (içerik)

- `kimlik.jpg`, `pasaport.jpg`, `ehliyet.jpg` aynı görseldir; her hizmet için gerçek örnek fotoğraflar eklenmeli.
- Fotoğraf baskısı bölümü artık stok görsel yerine ölçü kartları kullanır; istenirse gerçek baskı örnekleri eklenebilir.
- Müşteri yorumları Google profiline yönlendirir; dilerseniz gerçek yorumlarla güncellenebilir.
