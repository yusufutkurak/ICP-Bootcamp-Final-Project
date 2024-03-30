# ICP-Bootcamp-Final-Project

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
