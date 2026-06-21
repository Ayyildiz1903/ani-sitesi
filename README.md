# 🦅 Kişisel Anı Sitesi

Framer Motion + Next.js 14 + Tailwind CSS ile yapılmış, kartal animasyonlu, suluboya parçacık efektli romantik anı sitesi.

## 🚀 Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini aç.

## 📁 Dosya Yapısı

```
public/
  music/
    kumralim.mp3        ← Buraya müzik dosyasını koy
  photos/
    mezuniyet-1.jpg     ← Mezuniyet fotoğrafları
    mezuniyet-2.jpg
    mezuniyet-3.jpg
    ozel-1.jpg          ← Özel an fotoğrafları
    ozel-2.jpg
    ozel-3.jpg

src/
  app/
    layout.tsx          ← Root layout + metadata
    page.tsx            ← Ana sayfa, tüm section'ları yönetir
    globals.css         ← Global stiller + Google Fonts
  components/
    IntroScreen.tsx     ← Kartal giriş animasyonu
    EagleSVG.tsx        ← SVG kartal + kanat animasyonu
    ParticleField.tsx   ← Canvas çiçek yaprağı parçacıkları
    MusicControl.tsx    ← Sağ üst ses ikonu
    HeroSection.tsx     ← Ana hero metinler
    GallerySection.tsx  ← 6 glassmorphism kart
    MessageSection.tsx  ← Felsefi mesajlar
    Footer.tsx          ← Alt bölüm
  hooks/
    useMusic.ts         ← Müzik kontrol hook
```

## 🎵 Müzik Ekleme

`public/music/kumralim.mp3` dosyasını koy. Giriş animasyonu tıklandığında otomatik çalar.

## 📸 Fotoğraf Ekleme

`public/photos/` klasörüne fotoğrafları koy. `GallerySection.tsx` içinde `PhotoOrPlaceholder` bileşenindeki yorum satırını kaldır:

```tsx
// Bu satırın yorumunu kaldır:
<Image src={src} alt={alt} fill className="object-cover opacity-60" />
```

## 🌐 Vercel Deploy

```bash
npm run build   # Önce build'i test et
```

Sonra GitHub'a push et, Vercel'de "Import Project" yap. Otomatik deploy.

## 🎨 Renk Paleti

| İsim         | Hex       | Kullanım              |
|--------------|-----------|-----------------------|
| Noir         | `#08060F` | Arkaplan              |
| Mürdüm       | `#3D0A52` | Vurgu, kartlar        |
| Mürdüm Açık  | `#6B2D8B` | Hover, gradient       |
| Mürdüm Glow  | `#C77DFF` | Kartal, kenarlık      |
| Altın        | `#C9A96E` | Tipografi, aksan      |
| Kağıt        | `#F2EDE4` | Ana metin rengi       |
