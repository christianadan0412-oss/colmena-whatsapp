import React, { useState } from "react";
import "./index.css";

// Lista de productos
const productos = [
  { nombre: "CHOCHITO tamarindo con chile frasco 170", precio: 22 },
  { nombre: "Miel pura 250g", precio: 50 },
  { nombre: "Polen 100g", precio: 35 },
  { nombre: "Propóleo 50g", precio: 40 },
  { nombre: "Jalea Real 30g", precio: 60 },
  { nombre: "Miel con nuez 250g", precio: 55 },
  { nombre: "Miel pura 500g", precio: 90 },
  { nombre: "Polen 250g", precio: 80 },
  { nombre: "Miel de abeja 1kg", precio: 135 },
];

function App() {
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const quitarDelCarrito = (index) => {
    const copia = [...carrito];
    copia.splice(index, 1);
    setCarrito(copia);
  };

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  const generarFolio = () => {
    const folio = "FOLIO-" + Math.floor(Math.random() * 1000000);
    alert(`Pedido generado con folio: ${folio}\nTotal: $${total} MXN`);
    setCarrito([]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>La Colmena Miel</h1>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={styles.inputBuscador}
      />

      {/* Lista de productos */}
      <div style={styles.productosGrid}>
        {productosFiltrados.map((producto, index) => (
          <div key={index} style={styles.productoCard}>
            <img
              src="https://via.placeholder.com/150"
              alt={producto.nombre}
              style={styles.imagen}
            />
            <h2 style={styles.nombre}>{producto.nombre}</h2>
            <p style={styles.precio}>${producto.precio} MXN</p>
            <button
              style={styles.boton}
              onClick={() => agregarAlCarrito(producto)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {/* Carrito */}
      <div style={styles.carrito}>
        <h2>Carrito</h2>
        {carrito.length === 0 && <p>No hay productos en el carrito</p>}
        {carrito.map((item, index) => (
          <div key={index} style={styles.itemCarrito}>
            {item.nombre} - ${item.precio}
            <button
              style={styles.botonQuitar}
              onClick={() => quitarDelCarrito(index)}
            >
              Quitar
            </button>
          </div>
        ))}
        {carrito.length > 0 && (
          <>
            <h3>Total: ${total} MXN</h3>
            <button style={styles.botonFolio} onClick={generarFolio}>
              Generar Pedido
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  titulo: {
    color: "#FFB74D",
    textAlign: "center",
  },
  inputBuscador: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  productosGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  productoCard: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  imagen: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  nombre: {
    fontSize: "16px",
    margin: "10px 0 5px",
  },
  precio: {
    fontWeight: "bold",
    color: "#333",
  },
  boton: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#FFB74D",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  carrito: {
    position: "fixed",
    right: "20px",
    top: "20px",
    width: "300px",
    maxHeight: "80vh",
    overflowY: "auto",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  },
  itemCarrito: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  botonQuitar: {
    backgroundColor: "#e74c3c",
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "2px 6px",
  },
  botonFolio: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
