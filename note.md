Skenario malam ini: 
kita buat 
    1. fitur Register
    2. fitur Login
    3. fitur dashboard



Step by step
    1. npm init -y
    2. kita rubah file package.json tambahin "start" valuenya = "nodemon app.js"
    3. kita buatin file namanya "app.js"
    4. instal library, express, express-flash, express-session, prisma, passport, passport-local, bcrypt, ejs, morgan
    5. initate entry point (app.js) express, express-flash, morgan, express-session, dan require dotenv
    6. kita buat routingan (untuk register, dan login)
    7. kita panggil di entry point (app.js)
    8. kita buatin folder views, untuk menampung file .ejs kita (disini kita buatin file html untuk handle register, dan untuk handle login)
    9. tambahin app.set view di entry point
    10. kita init prisma
    11. kita rubah config di .env (sesuaikan dengan database, schema, dan url teman2)
    12. kita buatin model / tabel
    13. kita running untuk generate tablenya (npx prisma migrate dev --name init)
    14. kita buatin controllers untuk static method get dan post register dan login
    14. kita lanjutin untuk buatin fitur register yang handle method postnya
        a. kita akan tangkap req bodynya
        b. kita cek dahulu email yang di input sudah ada di database atau belum (jika sudah ada maka redirect ke endpoint "/regidter")
        c. kita akan encrypt password sebelum masuk ke database



    npm i express express-flash express-session prisma passport passport-local bcrypt ejs morgan