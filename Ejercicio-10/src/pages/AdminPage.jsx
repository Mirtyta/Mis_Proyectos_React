// ============================================
// 📄 src/pages/AdminPage.jsx - CON CONTEXT API
// Página de administración de productos (CRUD conectado al backend)
// ============================================

import { useState } from "react";
import { useThemeContext } from "../context/ThemeContext";

import { Tabs, Tab, Table, Button, Image, Container } from "react-bootstrap";
import { formatearPrecio } from "../utils/calculos";
import Swal from "sweetalert2";
import FormProduct from "../components/FormProduct";
import Banner from "../components/Banner";

// ========================================
// 🎯 CAMBIO PRINCIPAL: USAR CONTEXT
// ========================================

/**
 * ANTES:
 * import { useFetchProducts } from "../hooks/useFetchProducts";
 * 
 * AHORA:
 * Importamos useProductos del Context en vez del hook directo
 */
import { useProducts } from "../context/ProductsContext";

export default function AdminPage() {
    // contexto para Theme
  const {contextTheme} = useThemeContext()
  // ========================================
  // 📡 OBTENEMOS TODO DEL CONTEXT
  // ========================================
  
  /**
   * useProductos() nos da acceso a:
   * - productos: Array de productos compartido en toda la app
   * - cargando: Estado de carga
   * - error: Mensaje de error
   * - createProduct: Crear producto
   * - updateProduct: Actualizar producto
   * - deleteProduct: Eliminar producto
   * 
   * La VENTAJA es que estos datos están sincronizados
   * con ProductosPage y cualquier otro componente que use useProductos()
   */
  const { 
    productos,       // ← Datos compartidos en tiempo real
    cargando,        // ← Estado de carga
    error,           // ← Errores
    createProduct,   // ← Función para crear
    updateProduct,   // ← Función para actualizar
    deleteProduct,   // ← Función para eliminar
  } = useProducts();

  // ========================================
  // ESTADOS LOCALES
  // ========================================
  
  // Producto seleccionado para editar (null = modo crear nuevo)
  const [productSelect, setProductSelect] = useState(null);
  
  // Tab activo: "form" (formulario) o "table" (tabla de productos)
  const [key, setKey] = useState("form");

  // ========================================
  // 📝 FUNCIONES HANDLERS
  // ========================================

  /**
   * handleSave
   * ----------
   * Maneja la creación o actualización de productos.
   * 
   * 🔑 CLAVE: Usa las funciones del Context (createProduct/updateProduct)
   * que están sincronizadas con todos los componentes de la app.
   */
  const handleSave = async (data) => {
    try {
      if (data.id) {
        // ✏️ ACTUALIZAR PRODUCTO EXISTENTE
        console.log("🔄 Actualizando producto con ID:", data.id);
        
        const productoActualizado = await updateProduct(data.id, data);
        
        if (productoActualizado) {
          console.log("✅ Producto actualizado:", productoActualizado);
          
          /**
           * 🎉 MAGIA DEL CONTEXT:
           * =====================
           * Cuando updateProduct actualiza el producto:
           * 1. El Context actualiza su estado interno
           * 2. React detecta el cambio
           * 3. TODOS los componentes que usan useProductos() se re-renderizan
           * 4. ProductosPage ve el producto actualizado automáticamente ✅
           * 5. Esta tabla también se actualiza automáticamente ✅
           * 
           * No hace falta hacer nada más, el Context se encarga de todo.
           */
          
          setProductSelect(null);
          setKey("table");
        }
        
      } else {
        // ✨ CREAR PRODUCTO NUEVO
        console.log("➕ Creando producto nuevo:", data);
        
        const productoCreado = await createProduct(data);
        
        if (productoCreado) {
          console.log("✅ Producto creado con ID:", productoCreado.id);
          
          /**
           * 🎉 MAGIA DEL CONTEXT (parte 2):
           * ================================
           * Cuando createProduct crea el producto:
           * 1. El Context agrega el producto a su estado interno
           * 2. React detecta el cambio
           * 3. TODOS los componentes que usan useProductos() se re-renderizan
           * 4. ProductosPage ve el producto nuevo automáticamente ✅
           * 5. Esta tabla también muestra el producto nuevo ✅
           */
          
          setProductSelect(null);
          setKey("table");
        }
      }
      
    } catch (error) {
      console.error("❌ Error inesperado en handleSave:", error);
      
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error inesperado. Revisá la consola.",
      });
    }
  };

  /**
   * handleDelete
   * ------------
   * Elimina un producto después de confirmar con el usuario.
   */
  const handleDelete = async (id, nombre) => {
    // Confirmación con el usuario
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: `Se eliminará el producto "${nombre}"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        console.log("🗑️ Eliminando producto con ID:", id);
        
        const eliminado = await deleteProduct(id);
        
        if (eliminado) {
          console.log("✅ Producto eliminado correctamente");
          
          /**
           * 🎉 MAGIA DEL CONTEXT (parte 3):
           * ================================
           * Cuando deleteProduct elimina el producto:
           * 1. El Context quita el producto de su estado interno
           * 2. React detecta el cambio
           * 3. TODOS los componentes que usan useProductos() se re-renderizan
           * 4. ProductosPage ya no muestra el producto eliminado ✅
           * 5. Esta tabla tampoco lo muestra ✅
           */
        }
        
      } catch (error) {
        console.error("❌ Error inesperado en handleDelete:", error);
        
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrió un error inesperado al eliminar.",
        });
      }
    }
  };

  /**
   * handleEdit
   * ----------
   * Selecciona un producto para editarlo en el formulario.
   */
  const handleEdit = (producto) => {
    console.log("✏️ Editando producto:", producto);
    setProductSelect(producto);
    setKey("form");
  };

  /**
   * handleCancel
   * ------------
   * Cancela la edición y resetea el formulario.
   */
  const handleCancel = () => {
    console.log("❌ Cancelando edición");
    setProductSelect(null);
  };

  // ========================================
  // 🎨 RENDER
  // ========================================

  return (
    <Container id={contextTheme} className=" mt-5">
      <Banner title="Administracion" description={'Gestión de productos'} />

      {/* Indicadores de estado */}
      {cargando && (
        <div className="alert alert-info">
          
          ⏳ Cargando productos...
        </div>
      )}

      {error && (
        <div className="alert alert-danger">
          ❌ Error: {error}
        </div>
      )}

      {/* Tabs: Formulario y Tabla */}
      <Tabs 
        activeKey={key} 
        onSelect={(k) => setKey(k)} 
      >
        
        {/* TAB 1: FORMULARIO */}
        <Tab eventKey="form" title="📝 Formulario">
          <FormProduct
            key={productSelect?.id || 'nuevo'}
            ProductSelect={productSelect}
            onGuardar={handleSave}
            onCancelar={handleCancel}
          />
        </Tab>

        {/* TAB 2: TABLA DE PRODUCTOS */}
        <Tab eventKey="table" title="📦 Productos">
          
          <div className="p-3 bg-secondary">
            <p>
              Total de productos: <strong>{productos.length}</strong>
            </p>
          </div>

          <Table striped bordered hover responsive className="p-4">
            <thead className="table-dark text-center">
              <tr>
                <th className="fw-light">ID</th>
                <th className="fw-light">Imagen</th>
                <th className="fw-light">Nombre</th>
                <th className="fw-light">Categoría</th>
                <th className="fw-light">Precio</th>
                <th className="fw-light">Stock</th>
                <th className="fw-light">Rating</th>
                <th className="fw-light">Acciones</th>
              </tr>
            </thead>
            <tbody className=" text-primary">
              {/**
               * 🔄 ACTUALIZACIÓN AUTOMÁTICA:
               * ============================
               * 
               * Este map se ejecuta cada vez que productos cambia.
               * Como productos viene del Context, cuando:
               * - Creás un producto → se agrega al array → este map lo muestra
               * - Actualizás un producto → cambia en el array → este map lo actualiza
               * - Eliminás un producto → se quita del array → este map no lo muestra
               * 
               * Todo es automático gracias al Context ✨
               */}
              {productos.map((p) => (
                <tr key={p.id} className="p-4 text-center">
                  <td>{p.id}</td>
                  <td>
                    <Image
                      src={p.image || "https://via.placeholder.com/60x60?text=Sin+imagen"}
                      rounded
                      style={{ width: 60, height: 60, objectFit: "cover", cursor: "pointer" }}
                      onError={(e) => { 
                        e.target.src = "https://via.placeholder.com/60x60?text=Error"; 
                      }}
                      title="Click para ver en tamaño completo"
                    />
                  </td>
                  <td>
                    <span>{p.nombre}</span>
                    {p.nuevo && (
                      <span className="badge bg-success ms-2 fw-light">Nuevo</span>
                    )}
                  </td>
                  <td>
                    <span className="badge bg-secondary fw-light">
                      {p.categoria || "Sin categoría"}
                    </span>
                  </td>
                  <td className="text-center">
                    <strong>{formatearPrecio(p.precio)}.<sup>00</sup></strong>
                    {p.descuento > 0 && (
                      <div className="text-danger small">{p.descuento}%Off</div>
                    )}
                  </td>
                  <td>
                    <span className={`badge ${
                      p.stock > 10 ? 'bg-success' : 
                      p.stock > 0 ? 'bg-warning' : 
                      'bg-danger'
                    }`}>
                      {p.stock} unidades
                    </span>
                  </td>
                  <td>{p.rating}</td>
                  <td>
                    <div className="d-flex gap-2 justify-content-center">
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => handleEdit(p)}
                        title="Editar producto"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(p.id, p.nombre)}
                        title="Eliminar producto"
                      >
                        <i className="bi bi-trash3"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}

              {productos.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center py-4">
                    <div className="text-muted">
                      <h5>📦 No hay productos cargados</h5>
                      <p>Creá tu primer producto usando el formulario</p>
                      <Button 
                        variant="primary" 
                        onClick={() => setKey("form")}
                      >
                        ➕ Crear Producto
                      </Button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Tab>

      </Tabs>
    </Container>
  );
}

// ============================================
// 📚 RESUMEN DE CAMBIOS
// ============================================

/**
 * 🔄 ¿QUÉ CAMBIÓ?
 * ================
 * 
 * ANTES:
 * ------
 * - Importaba useFetchProducts directamente
 * - Cada componente tenía su propia "copia" de los datos
 * - Los cambios no se sincronizaban entre componentes
 * 
 * AHORA:
 * ------
 * - Importa useProductos del Context
 * - Todos los componentes comparten los MISMOS datos
 * - Los cambios se sincronizan automáticamente
 * 
 * 
 * ✅ VENTAJAS:
 * ============
 * 
 * 1. ✅ Sincronización automática entre AdminPage y ProductosPage
 * 2. ✅ No hay código duplicado
 * 3. ✅ Una sola "fuente de verdad" para los productos
 * 4. ✅ Fácil agregar más páginas que usen productos
 * 5. ✅ El código es más limpio y mantenible
 */