import { useState } from "react";

const Productos = () => {
  const productosIniciales = [
    { descripcion: "Auriculares", precio: 19 },
    { descripcion: "Teclado", precio: 17 },
    { descripcion: "Monitor", precio: 60 },
    { descripcion: "Mouse", precio: 15 },
    { descripcion: "Webcam", precio: 21 },
  ];

  const [productos, setProductos] = useState(productosIniciales);
  const [filtrar, setFiltrar] = useState(false);
  const [ivaAplicado, setIvaAplicado] = useState(false); // Estado para saber si el IVA está aplicado


  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setFiltrar(isChecked);
    if (isChecked) {
      const filtrados = productosIniciales.filter(producto => producto.precio > 20);
      setProductos(filtrados);
    } else {
      setProductos(productosIniciales);
    }
    setIvaAplicado(false); //Al cambiar el filtro, quitamos cualquier IVA aplicado
  };

  const productosConIVA = productos.map(producto => {
    return {
      descripcion: producto.descripcion,
      precio: parseFloat((producto.precio * 1.21).toFixed(2)) // Calcular precio con IVA y redondear a 2 decimales
    };
  });

  const aplicarIVA = () => {
     if (!ivaAplicado) { // Si el IVA no está aplicado
    const productosConIVA = productos.map(producto => ({
      descripcion: producto.descripcion,
      precio: parseFloat((producto.precio * 1.21).toFixed(2)) 
    }));
    setProductos(productosConIVA); 
    console.log(productosConIVA);
  } else { // Si el IVA ya estaba aplicado
      setProductos(filtrar
        ? productosIniciales.filter(producto => producto.precio > 20)
        : productosIniciales
      );
    }
    setIvaAplicado(!ivaAplicado); // Invertimos el estado de IVA aplicado
  };

  const ordenarPorPrecio = () => {
    const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
    setProductos(productosOrdenados);
  }; 

  return (
    <div>
      <h2>Productos</h2>
      <label>
        <input type="checkbox" checked={filtrar} onChange={handleCheckboxChange}/>
        Mayor a $20
      </label>
       <button onClick={aplicarIVA}>
        {ivaAplicado ? "Quitar IVA" : "Aplicar IVA"} {/* Texto dinámico según estado */}
      </button>
       <button onClick={ordenarPorPrecio}>Ordenar por precio (menor a mayor)</button>
      <table border="1" cellPadding="10" style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.descripcion}</td>
              <td>${producto.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productos;
