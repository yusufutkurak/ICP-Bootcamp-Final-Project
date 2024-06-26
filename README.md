
# ICP-Bootcamp-Final-Project
<img src="https://github.com/yusufutkurak/ICP-Bootcamp-Final-Project/assets/107929430/1bb07613-6f88-4ad2-9d2b-a461a62a1d83" width="300" height="300" align="right">

Bu proje, D&D 3.5 kurallarına uygun olarak, WEB3 altyapısını kullanarak benzersiz karakterler oluşturmanıza olanak tanır. Sistem, karakterinizin temel sınıf ve ırk bilgilerini özgürce seçmenizi, masaüstünde yapabileceğiniz gibi yeteneklerini zar sistemi ile belirlemenizi ve hayalinizdeki karakterin resmini yapay zeka yardımıyla çizdirerek kendi özel karakter kartlarınızı oluşturmanızı sağlar.

Siteye giriş yaptığınızda, ilk adımda karakterinizi tanıtıp resmini oluşturabilirsiniz. Daha sonra ırk ve sınıf bilgilerinizi girip, yetenek zarlarınızı atarak bu karakteri kaydedebilirsiniz. Bu süreç, karakter yaratma deneyiminizi kişiselleştirir ve tamamen size özel bir macera sunar.


!!DALL-E apı anahtarı github a atıldığı zaman otomatik kendini pasif hale getiriyor bu yüzden projeyi kurup da deneme yapmak isterseniz api anahtarı için bana ulaşabilirsiniz.
- **E-posta:** [E-posta Adresim](yusufgmut@gmail.com)
- **LinkedIn:** [Profilim]([https://www.linkedin.com/in/kullaniciadi](https://www.linkedin.com/in/yusuf-utkurak-046529205/))

  
https://github.com/yusufutkurak/ICP-Bootcamp-Final-Project/assets/107929430/fa39b192-cf43-4951-8c56-3b42de166968

#Proje kurulumu
Projeye `node_modules` dosyaları dahil değildir.  
Projeyi çalıştırma adımları:

1. Projeyi zip olarak indirdikten sonra VSCode'da dosyayı açınız.
2. Yeni bir terminal açıp aşağıdaki komutları sırasıyla uygulayınız:

    ```bash
    cd dnd
    ```

    Bu komut ile `dnd` klasörüne giriniz.

3. İlk olarak node modüllerini yüklemek için aşağıdaki komutu çalıştırınız:

    ```bash
    npm install
    ```

4. Sonrasında, projeyi başlatmak için aşağıdaki komutları çalıştırınız:

    ```bash
    dfx start --background
    dfx deploy
    ```

5. Yeni bir terminal açınız ve eğer `dnd` klasöründe değilseniz, aşağıdaki komut ile klasöre giriş yapınız:

    ```bash
    cd dnd
    ```

6. Aşağıdaki komutları yeni terminalde çalıştırınız:

    ```bash
    dfx canister create --all
    dfx build
    dfx canister install --all
    ```

7. Bu komutları çalıştırdıktan sonra, projeyi lokalde başlatmak için:

    ```bash
    npm start
    ```

    komutunu kullanınız.

Projeyi bu adımları takip ederek başarıyla çalıştırabilirsiniz, iyi eğlenceler.

## Fonksiyonlar-React

### `getRandomNumber`
- Her zar atma işlemi için 1-6 arası rastgele bir sayı üretir.

### `getRandomNumbersArray`
- Her yetenek puanı için atılacak 4 zarı atar ve büyükten küçüğe sıralar. Bu işlem, en büyük üç zarın toplamını hesaplarken işimizi kolaylaştırır.

### `getImageSource`
- Atılan zarları alır ve o zara uygun resmin ismini oluşturur (örn. `4.png`).

### `getAbilityRank`
- En yüksek 3 zarı toplar ve her yetenek için bir yetenek puanı oluşturur.

### `handleButtonClick`
- Butona basıldığında 6 büyüklüğünde bir dizi oluşturur. Bu dizinin her elemanı, 4 elemanlı bir dizi olan `getRandomNumbersArray` fonksiyonundan gelen veridir.

### `handleNameChange`
- Karakter nesnesinin ismini günceller.

### `handleRaceChange`
- Karakter nesnesinin ırk bilgisini günceller. D&D sisteminden dahil edilen ırklar: Human, Elf, Dwarf, Half-Elf, Half-Orc, Gnome, Halfling.

### `handleClassChange`
- Karakter nesnesinin sınıf bilgisini günceller. D&D sisteminden dahil edilen sınıflar: Barbarian, Bard, Cleric, Fighter, Rogue, Wizard, Druid, Monk, Ranger, Sorcerer.

### `addCharacter`
- Kullanıcıdan alınan bilgilerle boş bir karakter nesnesi oluşturur. Oluşturulan karakter, `createCharacter(newCharacter)` fonksiyonu aracılığıyla Motoko backend'e yollanır.

Karakter veri tipi şu özelliklere sahiptir:
- `name`: Karakterin adı.
- `classes`: Karakterin sınıfı.
- `race`: Karakterin ırkı.
- `img`: Karakterin resmi.
- `ability`: 6 adet yetenek barındıran bir liste.

### `requestCharacterImage`
- DALL-E API aracılığıyla kullanıcdan alınan prompt bilgisine göre yapay zekaya resim çizdirilir ve bu resim karakterimizin kartına eklenir.

### `fetchAllCharacters`
- Motoko backand den karakter verilerini ister ve gelen karakterleri liste haline getir, oyuncunun oluşturduğu karakterlerin hepsini görmesini sağlar.

### `CharacterCard`
- Karakterleri kart haline getirir ve kullanıcıya gösterir.

### `RandDice`
- Rastgele atılan zarları kullanıcıya gösterir.


## Fonksiyonlar-Motoko

### `createCharacter`
- Bu fonksiyon bir karakter nesnesi oluşturulmasını ve oluşturulan nesnenin Trie yapısına kaydedilip şifrelenmesini sağlar.

### `readCharacter`
- Bu fonksiyon id si verilen karakteri Trie yapısından bulup parametre olarak geri döndürür.

### `Update-Delete`
- Karakterleri güncelleme ve silme işlemleri bu fonksiyonlarda yapılır, Trie yapsının fonksiyonları kullanılır.

### `Trie find-replace`
- Trie yapısında arama yapıp istediğimiz değeri bulanilmemiz için find, yeniden yapılandırmamız için ise replace fonksiyonunu kullanırız

  
## Motoko-Type
- Character type:
- `character_name`: Karakterin adı.
- `character_classes`: Karakterin sınıfı.
- `character_race`: Karakterin ırkı.
- `character_img`: Karakterin resmi.
- `character_ability`: 6 adet yetenek barındıran bir liste.

- Ability type:
- `strength`: Karakterin fiziksel gücü.
- `dexteriy`: Karakterin mahareti, çevikliği.
- `constitution`: Karakterin dayanıklılığı.
- `intelligence`: Karakterin zekası.
- `wisdom`: Karakterin bilgeliği
- `charisma`: Karakterin karizması

- CharacterID type:
- NAT32 tipinde bir veri tutar, yani tam sayıdır karakterlerin id sini tutar 0 dan başlar her karakter oluşturulduğunda bir arttılır.

### Gelecek Fikirlerim
Projeyi geliştirmeye devam ederken aşağıdaki özellikleri eklemeyi düşünüyorum. Bu fikirler, projeyi daha interaktif ve kullanıcı dostu hale getirmeyi amaçlıyor:

- **Yaratık Oluşturma:** Kullanıcıların sadece karakterler değil, aynı zamanda düşman veya müttefik yaratıklar da oluşturabilmelerini sağlayacak bir özellik.

- **Harita Oluşturma:** Oyuncuların maceraları için özel haritalar oluşturabilmelerine olanak tanıyan bir modül.

- **Forum Sekmesi:** Kullanıcıların karakterleri hakkında oy kullanabilecekleri, tartışabilecekleri ve sohbet edebilecekleri bir alan.

- **NFT Entegrasyonu:** Oluşturulan karakterlerin NFT (Non-Fungible Token) olarak kaydedilip, alınıp satılabilmesi.

- **Özel Yetenekler:** Kullanıcıların karakterlerine özel yetenekler ekleyebilmesi, bu sayede daha kişiselleştirilmiş deneyimler sunması.

- **Seviye Atlatma ve Gelişim:** Karakterlerin ve yaratıkların zamanla gelişebilmesi, seviye atlayarak yeni yetenek puanları ve HP (Sağlık Puanı) kazanabilmesi.

Bu fikirler, projenin ilerlemesi ve topluluktan gelen geri bildirimler doğrultusunda şekillenecek. Her türlü öneri ve katkıya açığım, bu yüzden lütfen düşüncelerinizi paylaşmaktan çekinmeyin.


##Proje videosu

[![Video Başlığı](https://img.youtube.com/vi/jlxFrG5FKQE/0.jpg)](https://www.youtube.com/watch?v=jlxFrG5FKQE)

