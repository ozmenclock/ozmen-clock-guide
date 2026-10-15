# Dijital Duvar Saati Kullanım Sitesi

Bu klasör GitHub Pages ile yayınlanacak müşteri kullanım sitesidir.

## GitHub Pages Kurulum

1. GitHub hesabınızda yeni bir repository açın. Örnek ad: `ozmen-clock-guide`
2. Bu `guide-site` klasörünün içindeki dosyaları repository içine yükleyin.
3. Dosyaları yüklerken klasörün kendisini değil, içindeki dosyaları yükleyin.
4. `Commit changes` düğmesine basın.
5. Repository içinde `Settings > Pages` bölümüne girin.
6. `Source` alanını `Deploy from a branch` seçin.
7. `Branch` alanını `main`, klasörü `/root` seçin ve kaydedin.
8. Birkaç dakika sonra site adresiniz hazır olur.

Örnek adres:

```text
https://kullaniciadiniz.github.io/ozmen-clock-guide/
```

Bu adresi QR koda dönüştürüp kutuya, etikete veya kullanım kağıdına ekleyebilirsiniz.

## Güncelleme Dosyaları

`clock-releases.json` indirme kutularındaki güncel sürümü ve önceki sürüm bağlantılarını belirler. Liste en yeni sürüm önce olacak şekilde tutulur. Yeni sürüm dosyalarını kendi `downloads/Vx.x.x/` klasörüne ekleyin ve kaydını listenin başına koyun. Önceki kayıtları ve dosyalarını silmeyin; arşivde yalnızca tıklanınca indirilen bağlantılar olarak gösterilirler. Video kılavuzundaki örnek dosya adları sürümden bağımsız kalır.

## Kılavuz Dosyaları

- `index.html`: Ana sayfa
- `video-tr.html`: Türkçe video kılavuzu
- `video-en.html`: İngilizce video kılavuzu
- `guide-tr.html`: Türkçe detaylı kılavuz
- `guide-en.html`: İngilizce detaylı kılavuz
- `guide-tr.pdf`: Türkçe PDF kılavuz
- `guide-en.pdf`: İngilizce PDF kılavuz
- `trifold-tr.html`: Türkçe katlanır kılavuz
- `trifold-en.html`: İngilizce katlanır kılavuz
