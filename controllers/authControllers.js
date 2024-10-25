const bcrypt = require("bcrypt")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


class AuthControllers {


    static renderRegisterPage(req, res) {
        res.render("register") // ini harus sama namanya dengan file di folder views
    }

    static renderLoginPage(req, res) {
        res.render("loginPage")
    }

    static async handleRegister(req, res) {
        // disini kita akan tangkap req.body (name, email, dan password)
        // kita akan encypt password sebelum masuk ke database
        try {
            const { name, email, password } = req.body
        // console.log(name, email, password, "==> THIS");
        
            // const cekEmailUnik = await prisma.user.findUnique({
            //     where: {
            //         email
            //     }
            // })

            // console.log(cekEmailUnik, "==> ini response dari findUniq");
            
            // if (cekEmailUnik) {
            //     // console.log("Email anda sudah terdaftar, Silahkan gunakan email lain");
            //     // res.redirect("/register")
            //     throw new Error("Email anda sudah terdaftar, Silahkan gunakan email lain");
            // }else {
            //     // 
            //     const maniuplateEncrypt = await bcrypt.hashSync(password, 10)

            //     await prisma.user.create({
            //         data: {
            //             name,
            //             email,
            //             password: maniuplateEncrypt
            //         }
            //     })

            //     console.log("BERHASIL DI TAMBAH");
                
            //     // res.render("/login")
            // }
            const maniuplateEncrypt = await bcrypt.hashSync(password, 10)

            let responseData = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: maniuplateEncrypt
                }
            })

            console.log(responseData, "===> INI FINAL CEK");
                
                // res.render("/login")
        } catch (error) {
            res.status(500).json(error)
        }

        
    }
}


module.exports = AuthControllers