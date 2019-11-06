import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clientes', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

// Definir el schema de clientes
const clientesSchema = new mongoose.Schema({
	nombre: String,
	apellido: String,
	emails: Array,
	empresa: String,
	edad: Number,
	tipo: String,
	pedidos: Array
});

const Clientes = mongoose.model('clientes', clientesSchema);

// // Definir el schema de productos
const ProductosSchema = new mongoose.Schema({
	nombre: String,
	precio: Number,
	buyBy: String
});

const Productos = mongoose.model('productos', ProductosSchema);

export { Clientes, Productos };
