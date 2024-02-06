
const Productos = [
    {id:1, nombre: "Reiki Usui", Duracion:1, precio:6500},
    {id:2, nombre: "Karmic Reiki", Duracion:1, precio:7800},
    {id:3, nombre: "Barras de Acces", Duracion:40, precio:11000},
    {id:4, nombre: "Gemoterapia", Duracion:1, precio:3500},
    {id:5, nombre: "Meditacion", Duracion:2, precio:4900},
    {id:6, nombre: "Registros Akashicos", Duracion:1, precio:12000},
]

class Carrito{
    constructor() {
        this.sesiones= [];
        this.descuento= 10;
        this.total= 0;
    }
    agregarSesiones(id) {
        let sesiones =Productos.find(prod => prod.id === id);
        if (sesiones){
            this.sesiones.push(sesiones);
            console.log("Agregaste la Sesion #" + sesiones.id + " al Carrito!");
        }else{
            console.log("No se encontro ningun Producto :(")
        }
    }
    listarCarrito(){
        this.sesiones.forEach(item => {
            console.log(item.id+ " - "+ item.nombre+ " - "+ item.precio);
        })
    }
}

const carrito = new Carrito();
carrito.agregarSesiones(2);
carrito.agregarSesiones(1);
carrito.agregarSesiones(2);
carrito.listarCarrito();