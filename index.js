import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Lista completa de productos
const productos = [
  { nombre: "CHOCHITO tamarindo con chile frasco 170", precio: 22, imagen: "https://via.placeholder.com/150" },
  { nombre: "Miel pura 250g", precio: 50, imagen: "https://via.placeholder.com/150" },
  { nombre: "Polen 100g", precio: 35, imagen: "https://via.placeholder.com/150" },
  { nombre: "Miel de abeja 500g", precio: 90, imagen: "https://via.placeholder.com/150" },
  { nombre: "Jalea real 50g", precio: 120, imagen: "https://via.placeholder.com/150" },
  { nombre: "Propóleo 30ml", precio: 70, imagen: "https://via.placeholder.com/150" },
  { nombre: "Miel con nuez 250g", precio: 60, imagen: "https://via.placeholder.com/150" },
  { nombre: "Miel con jengibre 250g", precio: 65, imagen: "https://via.placeholder.com/150" },
  { nombre: "Miel con limón 250g", precio: 55, imagen: "https://via.placeholder.com/150" },
  { nombre: "Miel orgánica 250g", precio: 80, imagen: "https://via.placeholder.com/150" },
  { nombre: "Miel con canela 250g", precio: 58, imagen: "https://via.placeholder.com/150" },
  { nombre: "Miel con cacao 250g", precio: 62, imagen: "https://via.placeholder.com/150" },
  { nombre: "Miel multifloral 250g", precio: 75, imagen: "https://via.placeholder.com/150" },
  { nombre: "Miel con avena 250g", precio: 60, imagen: "https://via.placeholder.com/150" },
  { nombre: "Miel con almendra 250g", precio: 68, imagen: "https://via.placeholder.com/150" },
  { nombre: "Miel con limón y jengibre 250g", precio: 70, imagen: "https://via.placeholder.com/150" },
  { nombre: "Miel orgánica 500g", precio: 150, imagen: "https://via.placeholder.com/150" },
  { nombre: "Polen 250g", precio: 80, imagen: "https://via.placeholder.com/150" }
];

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const existe = carrito.find(item => item.nombre === producto.nombre);
    if (existe) {
      setCarrito(
        carrito.map(item =>
          item.nombre === producto.nombre
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (producto) => {
    setCarrito(carrito.filter(item => item.nombre !== producto.nombre));
  };

  const cambiarCantidad = (producto, delta) => {
    setCarrito(
      carrito.map(item =>
        item.nombre === producto.nombre
          ? { ...item, cantidad: Math.max(1, item.cantidad + delta) }
          : item
      )
    );
  };

  const totalCarrito = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);

  return (
    <div className="container">
      <h1>La Colmena Miel</h1>

      <div className="productos">
        {productos.map((producto, index) => (
          <div key={index} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
          </div>
        ))}
      </div>

      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {carrito.map((item, index) => (
              <li key={index}>
                {item.nombre} - ${item.precio} x {item.cantidad} = ${item.precio * item.cantidad}
                <div className="botones-carrito">
                  <button onClick={() => cambiarCantidad(item, 1)}>+</button>
                  <button onClick={() => cambiarCantidad(item, -1)}>-</button>
                  <button onClick={() => eliminarDelCarrito(item)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <p><strong>Total: ${totalCarrito}</strong></p>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
