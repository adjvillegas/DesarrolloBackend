
var express = require('express');
var { graphqlHTTP }  = require('express-graphql');
var { buildSchema } = require('graphql');

// GraphQL schema
//https://graphql.org/graphql-js/basic-types/
var schema = buildSchema(`
    type Query {
        message: String,
        messages: [String],
        numero: Int,
        numeros: [Int],
        course(id: Int!): Course
        courses(topic: String): [Course]
        cursos: [Course]
        cursos2: [Course]
    },
    type Mutation {
        updateCourseTopic(id: Int!, topic: String!): Course
    },
    type Course {
        id: Int
        title: String
        category: String
        description: String
        cantidad: Int
        url: String
    }    
`);

var productosData = [
    {
        id: 1,
        title: 'Producto 1',
        category: 'Bebidas',
        description: 'Calmara tu sed con el primer trago',
        cantidad: 22,
        url: 'https://codingthesmartway.com/courses/nodejs/'
    },
    {
        id: 2,
        title: 'Producto 2',
        category: 'Deporte',
        description: 'Un producto que te ayudara a rendir 100% siempre!',
        cantidad: 3,
        url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
    },
    {
        id: 3,
        title: 'Producto 3',
        category: 'Belleza',
        description: 'Un producto ideal para tu piel',
        cantidad: 100,
        url: 'https://codingthesmartway.com/courses/understand-javascript/'
    }
]

var getProduct = function(args) { 
    var id = args.id;
    return productosData.filter(product => {
        return product.id == id;
    })[0];
}
var getProducts = function(args) {
    if (args.category) {
        var topic = args.category;
        return productosData.filter(product => product.category === category);
    } else {
        return productosData;
    }
}

var getProductos = function() {
    return productosData
}

var updateCourseCategory = function({id, category}) {
    productosData.map(product => {
        if (product.id === id) {
            product.category = category;
            return product;
        }
    });
    return productosData.filter(product => product.id === id) [0];
}

// Root resolver
var root = {
    message: () => 'Hola Mundo!',
    messages: () => 'Hola Mundo!'.split(' '),
    numero: () => 123,
    numeros: () => [1,2,3],
    product: getProduct,
    products: getProducts,
    producto: getProductos,
    producto2: () => productosData,
    updateCourseCategory: updateCourseCategory
};
// Create an express server and a GraphQL endpoint
var app = express();

app.use(express.static('public'))

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

const PORT = 8080
app.listen(PORT, () => console.log(`Express GraphQL Server Now Running On http://localhost:${PORT}/graphql`));