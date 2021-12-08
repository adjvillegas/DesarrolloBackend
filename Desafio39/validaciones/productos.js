const Joi = require('@hapi/joi')

const validar = producto => {
    const productoSchema = Joi.object({
        codigo: Joi.string().alphanum().required(),
        descripcion: Joi.string().alphanum().required()
    })

    const { error } = productoSchema.validate(producto)
    if(error) {
        return { result: false, error }
    }
    else {
        return { result: true }
    }
}

module.exports = {
    validar
}