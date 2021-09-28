//DEFINIR ESQUEMA CON COMMON JS

const mongoose = require ("mongoose");
const { productosCollection, productosSchema } = require ('./models/productos')

connect()

async function connect () {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        // const Estudiantes = mongoose.model('Estudiantes', ({
        //     nombre:String,
        //     apellid:String,
        //     edad:Number,
        //     dni: String,
        //     curso:String,
        //     nota: Number

        // }))

        // const estudiante = new Estudiantes({
        //     nombre..
        // })

        // let _id = await estudiante.save()

    } catch (error) {
        console.log(err)
    }

}
