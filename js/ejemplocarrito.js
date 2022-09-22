const productos = [
    { nombre: "Cuadros", precio: 2100 },
    { nombre: "Posters", precio: 1500 },
    { nombre: "Impresion de fotos", precio: 1000 },
    { nombre: "Diseños Personalizados", precio: 1000 },
];
let carrito = []
let seleccion = prompt("¡Hola! Desea comprar algun producto? si o no")

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor ingrese si o no")
    seleccion = prompt("Hola desea comprar algo si o no")
}

if (seleccion == "si") {
    alert("Nuestra lista de productos son:")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "no") {
    alert("Gracias por visitar nuestra pagina. Hasta Pronto!!!")
}

while (seleccion != "no") {
    let producto = prompt("Agrege un producto a tu carrito")
    let precio = 0

    if (producto == "Cuadros" || producto == "Posters" || producto == "Impresion de fotos" || producto == "Diseños Personalizados") {
        switch (producto) {
            case "Cuadros":
                precio = 2000;
                break;
            case "Posters":
                precio = 1500;
                break;
            case "Impresion de fotos":
                precio = 1000;
                break;
            case "Diseños Personalizados":
                precio = 1000;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Unidades a comprar?"))

        carrito.push({ producto, unidades, precio })
        console.log(carrito)
    } else {
        alert("No tenemos ese producto")
    }
    seleccion = prompt("Desea seguir comprando?")

    while (seleccion === "No") {
        alert("Gracias por la compra. Hasta pronto!!!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto : ${carritoFinal.producto}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)