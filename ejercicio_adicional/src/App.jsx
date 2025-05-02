import { useState } from 'react';
import '../../vite-project/src/App.css';

function App() {
  // Estado para los productos
  const [productos, setProductos] = useState(
    [
      { descripcion: 'Teclado', precio: 30000 },
      { descripcion: 'Monitor', precio: 120000 },
      { descripcion: 'Mouse', precio: 15000 },
      { descripcion: 'Auriculares', precio: 49000 },
      { descripcion: 'Parlantes', precio: 35000 },
    ].sort((a, b) => a.precio - b.precio) // Ordenar al inicializar
  );

  // Estado para manejar los valores del formulario
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');

  // 5. Agregar un nuevo producto y ordena automáticamente
  const agregarProducto = () => {
    if (descripcion.trim() !== '' && precio > 0) {
      const nuevosProductos = [
        ...productos,
        { descripcion, precio: parseFloat(precio) },
      ];
      // 4. Ordenar los productos por precio
      const productosOrdenados = nuevosProductos.sort((a, b) => a.precio - b.precio);
      setProductos(productosOrdenados);
      setDescripcion('');
      setPrecio('');
    } else {
      console.log('Ingrese una descripción y un precio válido.');
    }
  };

  // 6. Eliminar el producto con el precio más bajo
  const eliminarProductoMasBarato = () => {
    const precioMinimo = Math.min(...productos.map(producto => producto.precio));
    setProductos(productos.filter(producto => producto.precio !== precioMinimo));
  };

  return (
    <div className="container">
      <h1>Lista de Productos</h1>

      {/* Formulario para agregar productos */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          agregarProducto();
        }}
      >
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <button type="submit">Agregar Producto</button>
      </form>

      {/* Lista de productos */}
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto.descripcion} - ${producto.precio.toFixed(2)}
          </li>
        ))}
      </ul>

      {/* Boton para eliminar producto más barato */}
      <button onClick={eliminarProductoMasBarato}>Eliminar Producto Más Barato</button>
    </div>
  );
}
export default App;