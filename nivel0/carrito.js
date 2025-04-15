const carrito = [
    {
      articulo: 'Maceta',
      price: 500,
      cantidad: 1
    },
    {
      articulo: 'Tierra',
      price: 100,
      cantidad: 3
    }
  ]
  
  console.log("Hasta acá hay", carrito.length, "productos en el carrito");
  
  // suma un nuevo producto al carrito (recuerda utilizar length como vimos previamente)
  // [Tú codigo aqui]

  carrito[carrito.length] = {
    articulo: 'Regadera',
    price: 200,
    cantidad: 1
  }
  
  // vuelve a imprimir el nuevo total de producto en el carrito
  // [Tú codigo aqui]
  
  console.log("Ahora hay", carrito.length, "productos en el carrito");
  console.log("El ultimo producto en la lista es:", carrito[carrito.length - 1].articulo);