import ProductosDaoDB from './dao/productosDaoDB.js'
import DTO from './dto/productos.js'

class ProductosApi {

    constructor() {
        this.productosDao = new ProductosDaoDB()
    }

    async agregar(prodParaAgregar) {
        const prodAgregado = await this.productosDao.add(prodParaAgregar)
        return prodAgregado
    }

    async buscar(id) {
        let productos
        if (id) {
            productos = await this.productosDao.getById(id)

        } else {
            productos = await this.productosDao.getAll()
        }
        return productos
    }

    async borrar(id) {
        if(id) {
            await this.productosDao.deleteById(id)
        }
        else {
            await this.productosDao.deleteAll()
        }
    }

    async reemplazar(id, prodParaReemplazar) {
        const prodReemplazado = await this.productosDao.updateById(id, prodParaReemplazar)
        return prodReemplazado
    }

    async buscardto(id) {
        let producto
        if (id) {
            producto = await this.productosDao.getById(id)
            return DTO.productoConInfo(producto)
        } 
        else {
            producto = {}
        }
        return producto
    }

    exit() {
        this.productosDao.exit()
    }

}

import minimist from 'minimist'

console.log('Instanciando la API')
const productosApi = new ProductosApi()

async function ejecutarCmds() {
    const argv = minimist(process.argv.slice(2))
    const {cmd,id,nombre,precio,stock} = argv
    try {
        switch(cmd.toLowerCase()) {
            case 'buscar':
                console.log(cmd)
                console.log(await productosApi.buscar(id))
                break

            case 'agregar':
                console.log(cmd)
                console.log(await productosApi.agregar({nombre,precio,stock}))
                break
                    
            case 'reemplazar':
                console.log(cmd)
                console.log(await productosApi.reemplazar(id,{nombre,precio,stock}))
                break
                            
            case 'borrar':
                console.log(cmd)
                await productosApi.borrar(id)
                break

            case 'buscardto':
                console.log(cmd)
                console.log(await productosApi.buscardto(id))
                break
    
            default:
                console.log('comando no válido:',cmd)
        }
    }
    catch(error) {
        console.log(error)
    }

    productosApi.exit()
}

ejecutarCmds()