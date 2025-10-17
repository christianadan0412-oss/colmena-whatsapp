// index.js
const express = require('express');
const bodyParser = require('body-parser');
const { MessagingResponse } = require('twilio').twiml;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Lista completa de productos (ejemplo reducido, puedes reemplazarla con tu lista completa)
const productos = [
  { id: 1, nombre: "MIEL DE ABEJA a granel 1 kg", precio: 135 },
  { id: 2, nombre: "MIEL DE ABEJA toper 1/4", precio: 60 },
  { id: 3, nombre: "MIEL DE AGAVE a granel 1 kg", precio: 140 },
  { id: 4, nombre: "CHOCHITO tamarindo con chile frasco 170", precio: 22 },
  { id: 5, nombre: "Polen 100g", precio: 35 },
  // Agrega aquí el resto de los productos de tu lista completa
];

// Carritos por número de usuario
const carritos = {};

// Función para generar folio
const generarFolio = () => "FOLIO-" + Math.floor(Math.random() * 100000);

app.post('/whatsapp', (req, res) => {
  const twiml = new MessagingResponse();
  const numero = req.body.From; // número de WhatsApp del usuario
  const msg = req.body.Body.trim().toLowerCase();

  // Inicializar carrito del usuario si no existe
  if (!carritos[numero]) carritos[numero] = [];

  let respuesta = '';

  if (msg === 'menu') {
    respuesta = "📦 *Productos disponibles:*\n";
    productos.forEach(p => {
      respuesta += `${p.id}. ${p.nombre} - $${p.precio}\n`;
    });
    respuesta += "\nEnvía el número del producto para agregarlo al carrito.";
  } 
  else if (msg === 'carrito') {
    const carrito = carritos[numero];
    if (carrito.length === 0) {
      respuesta = "Tu carrito está vacío 🛒";
    } else {
      let total = 0;
      respuesta = "🛒 *Tu carrito:*\n";
      carrito.forEach((item, i) => {
        respuesta += `${i+1}. ${item.nombre} - $${item.precio}\n`;
        total += item.precio;
      });
      respuesta += `*Total:* $${total}\n`;
      respuesta += "Envía 'vaciar' para limpiar tu carrito o 'generar' para generar tu pedido.";
    }
  } 
  else if (msg === 'vaciar') {
    carritos[numero] = [];
    respuesta = "✅ Tu carrito ha sido vaciado.";
  } 
  else if (msg === 'generar') {
    const carrito = carritos[numero];
    if (carrito.length === 0) {
      respuesta = "Tu carrito está vacío, agrega productos primero.";
    } else {
      let total = carrito.reduce((acc, item) => acc + item.precio, 0);
      const folio = generarFolio();
      respuesta = `✅ Pedido generado con folio: *${folio}*\nTotal: $${total}\nGracias por tu compra!`;
      carritos[numero] = []; // vaciar carrito después de generar pedido
    }
  } 
  else if (!isNaN(msg)) {
    const idProducto = parseInt(msg);
    const producto = productos.find(p => p.id === idProducto);
    if (producto) {
      carritos[numero].push(producto);
      respuesta = `✅ ${producto.nombre} agregado al carrito. Envía 'carrito' para ver tu carrito.`;
    } else {
      respuesta = "❌ Producto no encontrado, envía 'menu' para ver la lista de productos.";
    }
  } 
  else {
    respuesta = "Hola! 👋\nEnvía 'menu' para ver los productos disponibles.";
  }

  twiml.message(respuesta);
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
