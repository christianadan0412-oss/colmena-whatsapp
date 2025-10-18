import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Lista de productos
const productos = [
  { nombre: "Miel pura 250g", precio: 50 },
  { nombre: "Miel pura 500g", precio: 90 },
  { nombre: "Miel pura 1kg", precio: 160 },
  { nombre: "Polen 100g", precio: 35 },
  { nombre: "Polen 250g", precio: 70 },
  { nombre: "Propóleo 30ml", precio: 60 },
  { nombre: "Jalea real 20g", precio: 80 },
  { nombre: "Caramelos de miel", precio: 25 },
  { nombre: "Shampoo con miel", precio: 85 },
  { nombre: "Jabón artesanal de miel", precio: 40 },
  { nombre: "Crema corporal con miel", precio: 95 },
  { nombre: "Exfoliante de miel y avena", precio: 75 },
  { nombre: "CHOCHITO tamarindo con chile frasco 170", precio: 22 },
  { nombre: "CHOCHITO tamarindo sin chile frasco 170", precio: 22 },
  { nombre: "CHOCHITO mango con chile frasco 170", precio: 22 },
  { nombre: "CHOCHITO tamarindo con chile bolsa 100", precio: 12 },
  { nombre: "CHOCHITO tamarindo sin chile bolsa 100", precio: 12 },
  { nombre: "CHOCHITO mango con chile bolsa 100", precio: 12 },
  { nombre: "Paleta de miel", precio: 10 },
  { nombre: "Velas artesanales de cera", precio: 60 },
];

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [carrito, setCarrito] = useState([]);
  const [folio, setFolio] = useState(null);

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((item) => item.nombre === producto.nombre);
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.nombre === producto.nombre
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const quitarDelCarrito = (producto) => {
    setCarrito(
      carrito
        .map((item) =>
          item.nombre === producto.nombre
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const generarPedido = () => {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }
    const nuevoFolio = "PED-" + Math.floor(100000 + Math.random() * 900000);
    setFolio(nuevoFolio);
    alert(`Pedido generado con folio: ${nuevoFolio}`);
    setCarrito([]);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center", color: "#d4a017" }}>La Colmena Miel 🍯</h1>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          padding: 10,
          width: "100%",
          maxWidth: 400,
          display: "block",
          margin: "20px auto",
          borderRadius: 8,
          border: "1px solid #ccc",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        {productosFiltrados.map((producto, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #eee",
              borderRadius: 12,
              padding: 15,
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>
            <button
              onClick={() => agregarAlCarrito(producto)}
              style={{
                backgroundColor: "#f1c40f",
                border: "none",
                borderRadius: 8,
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              Agregar al carrito 🛒
            </button>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: 40 }}>🛍️ Carrito</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {carrito.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <span>
                {item.nombre} x {item.cantidad}
              </span>
              <div>
                <button
                  onClick={() => quitarDelCarrito(item)}
                  style={{
                    backgroundColor: "#e74c3c",
                    color: "white",
                    border: "none",
                    borderRadius: 6,
                    marginRight: 5,
                    padding: "4px 8px",
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => agregarAlCarrito(item)}
                  style={{
                    backgroundColor: "#2ecc71",
                    color: "white",
                    border: "none",
                    borderRadius: 6,
                    padding: "4px 8px",
                  }}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <h3>Total: ${total}</h3>
          <button
            onClick={generarPedido}
            style={{
              backgroundColor: "#f1c40f",
              border: "none",
              borderRadius: 8,
              padding: "10px 20px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Generar pedido
          </button>
        </div>
      )}

      {folio && (
        <p style={{ marginTop: 20, color: "green" }}>
          ✅ Pedido generado con folio: <strong>{folio}</strong>
        </p>
      )}
    </div>
  );
}

// Renderizar la app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
