import express, {Aplication} from "express";
import productController from './routes/products'


const app: Aplication = express();

app.use(express.json());
app.use(express.text())

app.use('/productos', productsController)

app.listen(4000, () => console.log("server on"))