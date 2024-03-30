# ICP-Bootcamp-Final-Project
<img src="https://github.com/yusufutkurak/ICP-Bootcamp-Final-Project/assets/107929430/1bb07613-6f88-4ad2-9d2b-a461a62a1d83" width="300" height="300" align="right">

Bu proje, D&D 3.5 kurallarına uygun olarak, WEB3 altyapısını kullanarak benzersiz karakterler oluşturmanıza olanak tanır. Sistem, karakterinizin temel sınıf ve ırk bilgilerini özgürce seçmenizi, masaüstünde yapabileceğiniz gibi yeteneklerini zar sistemi ile belirlemenizi ve hayalinizdeki karakterin resmini yapay zeka yardımıyla çizdirerek kendi özel karakter kartlarınızı oluşturmanızı sağlar.

Siteye giriş yaptığınızda, ilk adımda karakterinizi tanıtıp resmini oluşturabilirsiniz. Daha sonra ırk ve sınıf bilgilerinizi girip, yetenek zarlarınızı atarak bu karakteri kaydedebilirsiniz. Bu süreç, karakter yaratma deneyiminizi kişiselleştirir ve tamamen size özel bir macera sunar.

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

Projeyi bu adımları takip ederek başarıyla çalıştırabilirsiniz.
