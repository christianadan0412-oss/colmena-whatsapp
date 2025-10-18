import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Lista de productos
  // Lista de productos actualizada
const productos = [
  { nombre: "MIEL DE ABEJA a granel 1 kg", precio: 135 },
  { nombre: "MIEL DE ABEJA toper 1/4", precio: 60 },
  { nombre: "MIEL DE ABEJA toper de 1/2", precio: 110 },
  { nombre: "MIEL DE ABEJA toper de 1 lt.", precio: 200 },
  { nombre: "MIEL DE ABEJA lacteo 250 ml.", precio: 65 },
  { nombre: "MIEL DE ABEJA vidrio 250 ml.", precio: 90 },
  { nombre: "MIEL DE ABEJA vidrio 500 ml.", precio: 150 },
  { nombre: "MIEL DE ABEJA vidrio 1.300 kg.", precio: 225 },
  { nombre: "MIEL DE ABEJA pet red. 250 ml.", precio: 65 },
  { nombre: "MIEL DE ABEJA pet red. 480 ml.", precio: 115 },
  { nombre: "MIEL DE ABEJA pet red. 500 ml.", precio: 115 },
  { nombre: "MIEL DE ABEJA pet red. 1,050 kg", precio: 170 },
  { nombre: "MIEL DE ABEJA sq. 250 ml.", precio: 70 },
  { nombre: "MIEL DE ABEJA sq. 500 ml.", precio: 120 },
  { nombre: "MIEL DE ABEJA cubetita 1 lt.", precio: 225 },
  { nombre: "MIEL DE ABEJA cubetita 4 lt.", precio: 750 },
  { nombre: "MIEL DE ABEJA con cubeta 19 lt. 27k", precio: 2600 },
  { nombre: "MIEL DE ABEJA cubeta a cambio 27 kg", precio: 2600 },

  { nombre: "KARMIIELITA a granel 1 kg", precio: 45 },
  { nombre: "KARMIIELITA toper 1/4", precio: 25 },
  { nombre: "KARMIIELITA toper 1/2", precio: 45 },
  { nombre: "KARMIIELITA toper 1 lt.", precio: 80 },
  { nombre: "KARMIIELITA lacteo 250 ml.", precio: 30 },
  { nombre: "KARMIIELITA vidrio 250 ml.", precio: 50 },
  { nombre: "KARMIIELITA vidrio 500 ml.", precio: 80 },
  { nombre: "KARMIIELITA vidrio 1.300 kg", precio: 100 },
  { nombre: "KARMIIELITA pet red. 250 ml.", precio: 30 },
  { nombre: "KARMIIELITA pet red. 480 ml.", precio: 45 },
  { nombre: "KARMIIELITA pet red. 500 ml.", precio: 50 },
  { nombre: "KARMIIELITA pet red 750 ml. 1.050 kg", precio: 75 },
  { nombre: "KARMIIELITA sq 250 ml.", precio: 35 },
  { nombre: "KARMIIELITA sq 500 ml.", precio: 60 },
  { nombre: "KARMIIELITA cubetita 1 lt./1.400 kg", precio: 100 },
  { nombre: "KARMIIELITA cubetita 4 lt./5 kg", precio: 250 },
  { nombre: "KARMIIELITA cubeta a cambio 19 lt", precio: 1000 },
  { nombre: "KARMIIELITA cubeta reciclada 19 lt", precio: 1000 },
  { nombre: "KARMIIELITA cubeta amarilla 19 lt", precio: 1000 },
  { nombre: "KARMIIELITA pet 480 ml. (rebanada panal)", precio: 80 },
  { nombre: "KARMIIELITA pet red. 1 kg (con panalito)", precio: 100 },

  { nombre: "POLEN a granel mixto 1 kg", precio: 250 },
  { nombre: "POLEN lacteo mixto 170 g", precio: 80 },
  { nombre: "POLEN pet redondo 300 g", precio: 125 },

  { nombre: "JALEA REAL frasco 10 g", precio: 75 },
  { nombre: "JALEA REAL frasco 20 g", precio: 120 },
  { nombre: "JALEA REAL frasco 50 g", precio: 200 },

  { nombre: "PROPOLEO extracto a granel 1 lt.", precio: 400 },
  { nombre: "PROPOLEO extracto envase piña 1 lt.", precio: 400 },
  { nombre: "PROPOLEO extracto gotas 20 ml.", precio: 60 },
  { nombre: "PROPOLEO spray 60 ml.", precio: 70 },

  { nombre: "CERA DE ABEJA estampada 1 kg", precio: 250 },
  { nombre: "CERA DE ABEJA en maqueta 1 kg", precio: 240 },
  { nombre: "PANAL DE MIEL bastidor incluido", precio: 400 },
  { nombre: "PANAL DE MIEL bastidor a cambio", precio: 400 },
  { nombre: "PANAL DE MIEL bastidor en charola", precio: 400 },
  { nombre: "PANAL DE MIEL medio bastidor", precio: 210 },
  { nombre: "PANAL DE MIEL 1/4 del bastidor", precio: 120 },

  { nombre: "MIEL CON PROPOLEO a granel 1 kg", precio: 100 },
  { nombre: "MIEL CON PROPOLEO lacteo 250 ml.", precio: 50 },
  { nombre: "MIEL CON PROPOLEO pet red. 250 ml", precio: 50 },
  { nombre: "MIEL CON PROPOLEO toper 1/4", precio: 45 },
  { nombre: "MIEL CON PROPOLEO toper de 1/2", precio: 80 },
  { nombre: "MIEL CON PROPOLEO toper 1 lt.", precio: 135 },
  { nombre: "MIEL CON PROPOLEO piña 1 lt", precio: 140 },
  { nombre: "MIEL CON PROPOLEO cubeta 19 lt.", precio: 1500 },

  { nombre: "MIEL DE AGAVE a granel 1 kg", precio: 140 },
  { nombre: "MIEL DE AGAVE sq 250 ml.", precio: 70 },
  { nombre: "MIEL DE AGAVE sq 500 ml.", precio: 120 },
  { nombre: "MIEL DE AGAVE piña 1 lt.", precio: 200 },
  { nombre: "MIEL DE AGAVE cubeta 19 lt./25 kg", precio: 2100 },

  { nombre: "MIEL DE MAGUEY a granel 1 kg", precio: 85 },
  { nombre: "MIEL DE MAGUEY toper 1/4", precio: 40 },
  { nombre: "MIEL DE MAGUEY toper 1/2", precio: 75 },
  { nombre: "MIEL DE MAGUEY toper 1 lt", precio: 130 },
  { nombre: "MIEL DE MAGUEY sq 250 ml.", precio: 50 },
  { nombre: "MIEL DE MAGUEY sq 500 ml.", precio: 80 },
  { nombre: "MIEL DE MAGUEY piña 1 lt", precio: 130 },
  { nombre: "MIEL DE MAGUEY cubeta 19 lt.", precio: 1400 },

  { nombre: "PROMAGUEY a granel 1 kg", precio: 90 },
  { nombre: "PROMAGUEY sq 250 ml.", precio: 55 },
  { nombre: "PROMAGUEY sq 500 ml.", precio: 90 },
  { nombre: "PROMAGUEY toper 1 lt.", precio: 130 },
  { nombre: "PROMAGUEY piña de 1 lt.", precio: 140 },
  { nombre: "PROMAGUEY cubeta 19 lt.", precio: 1500 },

  { nombre: "COLMENECTAR 500 ml.", precio: 250 },
  { nombre: "CREMA jalea real 50 g", precio: 100 },
  { nombre: "JARABE colmetox blanco 250 ml.", precio: 70 },
  { nombre: "JARABE extra forte 250 ml.", precio: 85 },
  { nombre: "JARABE colmetox premium 250 ml.", precio: 100 },
  { nombre: "CALENDULA con propoleo spray 60 ml.", precio: 80 },
  { nombre: "TILA STRESS gotas 55 ml.", precio: 50 },

  { nombre: "CHOCHITO eucalipto sobre 60 g", precio: 15 },
  { nombre: "CHOCHITO eucalipto mini 90 g", precio: 20 },
  { nombre: "CHOCHITOS eucalipto frasco 170 g", precio: 50 },
  { nombre: "CHOCHITOS eucalipto bolsa 1 kg", precio: 100 },
  { nombre: "CHOCHITO propoleo sobre 60 g", precio: 15 },
  { nombre: "CHOCHITO propoleo mini 90 g", precio: 20 },
  { nombre: "CHOCHITOS propoleo frasco 170 g", precio: 50 },
  { nombre: "CHOCHITOS propoleo bolsa 1 kg", precio: 100 },
  { nombre: "CHOCHITO stress sobre 60 g", precio: 15 },
  { nombre: "CHOCHITO stress mini 90 g", precio: 20 },
  { nombre: "CHOCHITOS stress frasco 170 g", precio: 50 },
  { nombre: "CHOCHITOS stress bolsa 1 kg", precio: 100 },
  { nombre: "CHOCHITO energetico sobre 60 g", precio: 15 },
  { nombre: "CHOCHITO energetico mini 90 g", precio: 20 },
  { nombre: "CHOCHITOS energetico frasco 170 g", precio: 50 },
  { nombre: "CHOCHITOS energetico bolsa 1 kg", precio: 100 },
  { nombre: "CHOCHITO mango con chile bolsa 1 kg", precio: 110 },
  { nombre: "CHOCHITO tamarindo con chile bolsa 1 kg", precio: 110 },
  { nombre: "CHOCHITO mango con chile sobre 60 g", precio: 15 },
  { nombre: "CHOCHITO tamarindo con chile sobre 60 g", precio: 15 },
  { nombre: "CHOCHITO mango con chile mini 90 g", precio: 20 },
  { nombre: "CHOCHITO tamarindo con chile mini 90 g", precio: 20 },
  { nombre: "CHOCHITO mango con chile frasco 170 g", precio: 50 },
  { nombre: "CHOCHITO tamarindo con chile frasco 170 g", precio: 50 },

  { nombre: "PALETA almendra bolsa 25 pz", precio: 70 },
  { nombre: "PALETA eucalipto bolsa 25 pz", precio: 60 },
  { nombre: "PALETA propoleo bolsa 25 pz", precio: 60 },
  { nombre: "PALETA stress bolsa 25 pz", precio: 60 },

  { nombre: "PANALITO caramelo a granel 1 kg", precio: 120 },
  { nombre: "PANALITO caramelo lacteo 200 g", precio: 50 },
  { nombre: "PANALITO caramelo sobre 70 g", precio: 15 },

  { nombre: "GOMITA eucalipto sobrecito 70 g", precio: 25 },
  { nombre: "GOMITA eucalipto frasco 200 g", precio: 60 },
  { nombre: "GOMITA eucalipto bolsa 1 kg", precio: 160 },
  { nombre: "GOMITA propoleo sobrecito 70 g", precio: 25 },
  { nombre: "GOMITA propoleo envase 200 g", precio: 60 },
  { nombre: "GOMITA propoleo bolsa 1 kg", precio: 160 },
  { nombre: "GOMITA stress sobrecito 70 g", precio: 25 },
  { nombre: "GOMITA stress envase 200 g", precio: 60 },
  { nombre: "GOMITA stress bolsa 1 kg", precio: 160 },
  { nombre: "GOMITA energetica sobrecito 70 g", precio: 25 },
  { nombre: "GOMITA energetica envase 200 g", precio: 60 },
  { nombre: "GOMITA energetica bolsa 1 kg", precio: 160 },

  { nombre: "PALANQUETA con miel", precio: 140 },
  { nombre: "PALANQUETA cereales y polen", precio: 160 },
  { nombre: "JUGO MAGUEY silvestre", precio: 100 },
  { nombre: "JUGO MAGUEY compuesto", precio: 110 },
  { nombre: "SHAMPOO jalea real 450 ml.", precio: 120 },
  { nombre: "SHAMPOO miel de abeja 450 ml.", precio: 100 },
  { nombre: "SHAMPOO polen 450 ml.", precio: 100 },
  { nombre: "NATURACTIVA energetico 250 ml", precio: 90 },
  { nombre: "NATURACTIVA energetico 500 ml.", precio: 170 },
  { nombre: "POMADA veneno de abeja 100 g", precio: 50 },
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
