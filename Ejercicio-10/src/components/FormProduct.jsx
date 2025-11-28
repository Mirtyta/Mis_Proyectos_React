// ============================================
// FormProduct.jsx - VERSIÓN CON SELECTS
// ============================================
// Este componente se encarga de:
// 1) Crear productos nuevos
// 2) Actualizar productos existentes
// 3) Validar datos con reglas específicas
// 4) Mostrar preview de imagen
// 5) Manejar selects múltiples para colores, tamaños y tags
//
// Props esperadas:
// - ProductSelect: objeto producto o null (para crear nuevo)
// - onGuardar: función que recibe el objeto final del formulario
// - onCancelar: función para cancelar/volver
// - listas: opcional, objeto con listas personalizadas
//
// SOLUCIÓN AL ERROR DE CASCADING RENDERS:
// =======================================
// Ya NO usamos useEffect para sincronizar formData con ProductSelect.
// En su lugar, el componente padre (AdminPage) usa la prop "key"
// para forzar el remontaje completo del componente cuando cambia
// el producto seleccionado.
//
// El estado se inicializa UNA SOLA VEZ usando useState con función
// inicializadora, que carga los datos de ProductSelect directamente.
// ============================================

import { useState } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import ColorSizeSelector from "./ColorSizeSelector"

// ============================================
// CONSTANTES Y VALORES POR DEFECTO
// ============================================

const DEFAULT_IMAGE = "https://placehold.co/400x400?text=Sin+Imagen";

// Listas por defecto (se pueden sobrescribir vía props.listas)
const DEFAULT_COLORS = [
  "Crimson","Fuchsia","MediumOrchid","Black","FireBrick","MediumBlue","Pink","DarkOrange",
  "Yellow","SaddleBrown","White","Teal","Chartreuse","DeepPink","Red","RoyalBlue","Gray",
  "LightSkyBlue","Green","khaki","MediumSlateBlue","DodgerBlue","DarkViolet","MediumSeaGreen","blue","lime","salmon","LightPink","DimGray","LightYellow","RebeccaPurple","ForestGreen"
];

const DEFAULT_TAGS = [
  "tag","clásica","clásico","colores","colorida","comodidad","confort","conjunto","cuero","deportivo",
  "diario","divertido","elegante","entrenamiento","espacioso","estilo","funcional","luces","marca","moda",
  "moderna","moderno","niños","práctica","práctico","protección","rural","trabajo","urbano","versátil","vibrante"
];

const SIZES_BY_CATEGORY = {
  zapatillas: ["35","36","37","38","39","40","41","42","43"],
  gorras: ["XS","S","M","L","XL","Regulable"],
  accesorios: ["18x30x12cm","35x60x12cm","40x25x14cm","40x40x18cm","40x60x13cm"]
};

// Plantilla base del producto con orden de campos
const PLANTILLA_PRODUCTO = {
  sku: "",
  nuevo: true,
  nombre: "",
  descripcion: "",
  categoria: "",
  colores: [],
  tamanos: [],
  tags: [],
  precio: "",
  descuento: 0,
  stock: "",
  image: "",
  rating: 1
};

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

export default function FormProducto({ ProductSelect = null, onGuardar, onCancelar, listas = {} }) {
  
  // ============================================
  // FUNCIONES AUXILIARES (ANTES DEL ESTADO)
  // ============================================
  
  /**
   * Genera un SKU temporal para visualización
   * Formato: 7790040 + 4 dígitos aleatorios
   * NOTA: Debe estar ANTES del useState porque se llama en la inicialización
   */
  function generarSku() {
    const rand4 = Math.floor(1000 + Math.random() * 9000);
    return Number(`7790040${rand4}`);
  }
  
  // ============================================
  // CONFIGURACIÓN DE LISTAS
  // ============================================
  // Merge de listas por defecto con listas personalizadas
  const colorsList = listas.colores || DEFAULT_COLORS;
  const tagsList = listas.tags || DEFAULT_TAGS;
  const sizesByCategory = listas.tamanos || SIZES_BY_CATEGORY;

  // ============================================
  // ESTADO DEL FORMULARIO
  // ============================================
  // NOTA CRÍTICA: Usamos función inicializadora en useState
  // Esta función se ejecuta UNA SOLA VEZ cuando el componente se monta.
  // Como el componente padre usa "key", cada cambio de producto
  // provoca un desmontaje y montaje nuevo, inicializando el estado
  // correctamente sin necesidad de useEffect.
  // ============================================
  
  const [formData, setFormData] = useState(() => {
    if (ProductSelect) {
      // MODO EDICIÓN: Cargar datos del producto seleccionado
      const normalized = { ...PLANTILLA_PRODUCTO, ...ProductSelect };
      
      // Asegurar que rating tenga un valor válido
      if (!normalized.rating) normalized.rating = 1;
      
      return normalized;
    } else {
      // MODO CREACIÓN: Valores por defecto
      const nuevo = { ...PLANTILLA_PRODUCTO };
      
      // Generar SKU provisional (el real lo asigna el backend)
      nuevo.sku = generarSku();
      
      // Rating aleatorio entre 1-5 para productos nuevos
      nuevo.rating = Math.floor(Math.random() * 5) + 1;
      
      return nuevo;
    }
  });

  // Estado para errores de validación
  const [errors, setErrors] = useState({});
  
  // ============================================
  // VALORES DERIVADOS (NO NECESITAN ESTADO)
  // ============================================
  
  // Preview de imagen: calculado directamente, no necesita useState ni useEffect
  // Es un valor derivado de formData.image
  const previewURL = formData.image || DEFAULT_IMAGE;

  // ============================================
  // HANDLERS DE EVENTOS
  // ============================================

  /**
   * Maneja cambios en inputs simples (text, number, checkbox)
   */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };


  /**
   * Maneja cambio de categoría
   * IMPORTANTE: Resetea los tamaños cuando cambia la categoría
   * porque cada categoría tiene sus propios tamaños disponibles
   */
  const handleCategoriaChange = (e) => {
    const categoria = e.target.value;
    setFormData((prev) => ({ 
      ...prev, 
      categoria, 
      tamanos: [] // Resetear tamaños al cambiar categoría
    }));
  };

  /**
   * Maneja errores de carga de imagen en el preview
   */
  const handleImageError = (e) => {
    e.target.src = DEFAULT_IMAGE;
  };

  // ============================================
  // VALIDACIÓN DEL FORMULARIO
  // ============================================

  const validateForm = () => {
    const errs = {};

    // Nombre obligatorio
    if (!formData.nombre || String(formData.nombre).trim() === "") {
      errs.nombre = "El nombre es obligatorio";
    }

    // Descripción obligatoria
    if (!formData.descripcion || String(formData.descripcion).trim() === "") {
      errs.descripcion = "La descripción es obligatoria";
    }

    // Categoría obligatoria
    if (!formData.categoria) {
      errs.categoria = "La categoría es obligatoria";
    }

    // Colores: mínimo 1, máximo 3
    if (!Array.isArray(formData.colores) || formData.colores.length === 0) {
      errs.colores = "Seleccioná al menos 1 color";
    } else if (formData.colores.length > 3) {
      errs.colores = "Máximo 3 colores";
    }

    // Tamaños: mínimo 1, máximo 4
    if (!Array.isArray(formData.tamanos) || formData.tamanos.length === 0) {
      errs.tamanos = "Seleccioná al menos 1 tamaño";
    } else if (formData.tamanos.length > 4) {
      errs.tamanos = "Máximo 4 tamaños";
    }

    // Tags: mínimo 1, máximo 4
    if (!Array.isArray(formData.tags) || formData.tags.length === 0) {
      errs.tags = "Seleccioná al menos 1 tag";
    } else if (formData.tags.length > 4) {
      errs.tags = "Máximo 4 tags";
    }

    // Precio: debe ser número mayor a 0
    const precioNum = Number(formData.precio);
    if (!formData.precio || isNaN(precioNum) || precioNum <= 0) {
      errs.precio = "El precio debe ser mayor a 0";
    }

    // Stock: debe ser número mayor a 0
    const stockNum = Number(formData.stock);
    if (!formData.stock || isNaN(stockNum) || stockNum <= 0) {
      errs.stock = "El stock debe ser mayor a 0";
    }

    // Descuento: entre 0 y 90
    const descNum = Number(formData.descuento);
    if (isNaN(descNum) || descNum < 0 || descNum > 90) {
      errs.descuento = "Descuento debe ser un entero entre 0 y 90";
    }

    // Imagen: puede estar vacío (usa default), ser URL válida, o data URL (base64)
    const imagenTrimmed = String(formData.image || "").trim();
    if (imagenTrimmed !== "") {
      const esUrlValida = imagenTrimmed.startsWith("http://") || 
                        imagenTrimmed.startsWith("https://");
      const esDataUrl = imagenTrimmed.startsWith("data:image/");
      
      if (!esUrlValida && !esDataUrl) {
        errs.image = "La imagen debe ser una URL (http/https) o una imagen en base64 (data:image/)";
      }
    }
    // Si está vacío, es válido (se usará DEFAULT_IMAGE)

    // Rating: solo validar en modo edición (cuando tiene id)
    if (formData.id && formData.rating) {
      const r = Number(formData.rating);
      if (isNaN(r) || r < 1 || r > 5) {
        errs.rating = "Rating debe ser entre 1 y 5";
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // ============================================
  // SUBMIT DEL FORMULARIO
  // ============================================

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar antes de enviar
    if (!validateForm()) return;

    // Preparar objeto final con el orden correcto
    const finalData = { ...PLANTILLA_PRODUCTO, ...formData };

    // Si image está vacío, usar imagen por defecto
    if (!finalData.image) {
      finalData.image = DEFAULT_IMAGE;
    }

    // Asegurar tipos correctos
    finalData.precio = Number(finalData.precio);
    finalData.stock = Number(finalData.stock);
    finalData.descuento = Number(finalData.descuento);
    finalData.rating = Number(finalData.rating) || (finalData.id ? 1 : Math.floor(Math.random() * 5) + 1);

    // SKU: generar si no existe
    if (!finalData.sku) {
      finalData.sku = generarSku();
    }


    // Llamar al handler externo (AdminPage) para crear/actualizar
    if (typeof onGuardar === "function") {
      onGuardar(finalData);
    }
  };

  // ============================================
  // RENDER DEL FORMULARIO
  // ============================================

  return (
    <Form onSubmit={handleSubmit} className="text-primary bg-secondary p-4">

  {/* ========== SECCIÓN: DATOS BÁSICOS ========== */}
  <Row className="mb-3 fs-6 fw-lighter text-primary">

    {/* =================== COL IZQUIERDA (SKU, NUEVO, CATEGORÍA) =================== */}
    <Col md={8}>
      <Row>
        {/* SKU */}
        <Col md={4}>
          <Form.Group className="mb-2" >
            <Form.Label className=" mb-0 text-primary fw-medium">SKU</Form.Label>
            <Form.Control className=" text-secondary" value={formData.sku || ""} disabled />
          </Form.Group>
        </Col>

        {/* Nuevo */}
        <Col md={4}>      
          <Form.Group className="mb-2" >
            <Form.Check
              type="checkbox"
              label="Nuevo"
              name="nuevo"
              checked={!!formData.nuevo}
              onChange={handleChange}
              disabled={!formData.id} // Solo editable en modo actualización
              className=" mb-0 text-primary fw-medium"
            />
          </Form.Group>
        </Col>

        {/* CATEGORÍA */}
        <Col md={4}>        
          <Form.Group className="mb-3">
            <Form.Label className=" mb-0 text-primary fw-medium">Categoría *</Form.Label>
            <Form.Select 
              name="categoria" 
              value={formData.categoria} 
              onChange={handleCategoriaChange}
              isInvalid={!!errors.categoria}
            >
              <option value="">Seleccioná una categoría</option>
              <option value="zapatillas">Zapatillas</option>
              <option value="gorras">Gorras</option>
              <option value="accesorios">Accesorios</option>
            </Form.Select>
            {errors.categoria && <div className="text-danger">{errors.categoria}</div>}
          </Form.Group>          
        </Col>
      </Row>

      {/* =================== NOMBRE Y DESCRIPCIÓN =================== */}
      <Row>
        <Col md={12}>
          {/* NOMBRE */}
          <Form.Group className="mb-3">
            <Form.Label className=" mb-0 text-primary fw-medium">Nombre *</Form.Label>
            <Form.Control
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre del producto"
              isInvalid={!!errors.nombre}
            />
            {errors.nombre && <div className="text-danger">{errors.nombre}</div>}
          </Form.Group>

          {/* DESCRIPCIÓN */}
          <Form.Group className="mb-3">
            <Form.Label className=" mb-0 text-primary fw-medium">Descripción *</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Descripción del producto"
              isInvalid={!!errors.descripcion}
            />
            {errors.descripcion && <div className="text-danger">{errors.descripcion}</div>}
          </Form.Group>
        </Col>
      </Row>
    </Col>

    {/* =================== COL DERECHA (IMAGEN + RATING) =================== */}
    <Col md={4} className="d-flex flex-column justify-content-start">
            {/* URL DE IMAGEN */}
      <Form.Group className="mb-2">
        <Form.Label className=" mb-0 text-primary fw-medium">Imagen (URL o Base64)</Form.Label>
        <Form.Control 
          name="image" 
          value={formData.image} 
          onChange={handleChange} 
          placeholder="https://... o data:image/..."
          isInvalid={!!errors.image}
        />
        {errors.image && <div className="text-danger">{errors.image}</div>}
      </Form.Group>

      {/* PREVIEW DE IMAGEN */}
      <div className="mb-3 text-center d-flex flex-row">
        <div className=" d-flex align-items-center justify-content-center flex-column border-2 mb-4 mt-4"
          style={{ 
            width: "100%", 
            height: 150, 
          }}
        >
          <Image
            src={previewURL}
            onError={handleImageError}
            style={{ 
              maxWidth: "100%", 
              maxHeight: "100%", 
              objectFit: "cover" 
            }}
            alt="preview"
          />
          <small className=" mb-0 text-primary fw-medium">Preview de la imagen</small>
        </div>
        
           {/* RATING */}
      <Form.Group className="mb-4 mt-4">
        <Form.Label className=" mb-0 text-primary fw-medium">Rating (1-5)</Form.Label>
        <Form.Control
          name="rating"
          type="number"
          min={0}
          max={5}
          step={0.5}
          value={formData.rating}
          onChange={handleChange}
          disabled={!formData.id}
          isInvalid={!!errors.rating}
          className=" bg-transparent text-center"
        />
        <Form.Text className=" mb-0 text-primary fw-medium">
          {!formData.id ? "El rating se asigna automáticamente al crear" : ""}
        </Form.Text>
        {errors.rating && <div className="text-danger">{errors.rating}</div>}
      </Form.Group>
      </div>   
    </Col>

  </Row>

  {/* =================== PRECIO, DESCUENTO Y STOCK =================== */}
  <Row>
    <Col md={4}>
      <Form.Group className="mb-3">
        <Form.Label className=" mb-0 text-primary fw-medium">Precio *</Form.Label>
        <Form.Control 
          name="precio" 
          type="number" 
          value={formData.precio} 
          onChange={handleChange}
          isInvalid={!!errors.precio}
        />
        {errors.precio && <div className="text-danger">{errors.precio}</div>}
      </Form.Group>
    </Col>

    <Col md={4}>
      <Form.Group className="mb-3">
        <Form.Label className=" mb-0 text-primary fw-medium">Descuento (%) *</Form.Label>
        <Form.Control 
          name="descuento" 
          type="number" 
          value={formData.descuento} 
          onChange={handleChange}
          isInvalid={!!errors.descuento}
        />
        {errors.descuento && <div className="text-danger">{errors.descuento}</div>}
      </Form.Group>
    </Col>

    <Col md={4}>
      <Form.Group className="mb-3">
        <Form.Label className=" mb-0 text-primary fw-medium">Stock *</Form.Label>
        <Form.Control 
          name="stock" 
          type="number" 
          value={formData.stock} 
          onChange={handleChange}
          isInvalid={!!errors.stock}
        />
        {errors.stock && <div className="text-danger">{errors.stock}</div>}
      </Form.Group>
    </Col>
  </Row>

  {/* ========== ATRIBUTOS: SELECTS MÚLTIPLES ========== */}
  <Row>
    <Col md={12}>
      {/* COLORES */}
      <Form.Group className="mb-3">
        <Form.Label className=" mb-0 text-primary fw-medium">Colores (mín 1, máx 3) *</Form.Label>
        <ColorSizeSelector
          opciones={colorsList}
          value={formData.colores}
          multiple={true}
          tipo="color"
          onChange={(nuevoArray) =>
            setFormData(prev => ({ ...prev, colores: nuevoArray }))
          }
        />
        {errors.colores && <div className="text-danger mt-2">{errors.colores}</div>}
      </Form.Group>

      {/* TAMAÑOS */}
      <Form.Group className="mb-3">
        <Form.Label className=" mb-0 text-primary fw-medium">Tamaños (mín 1, máx 4) *</Form.Label>
        <ColorSizeSelector
          opciones={sizesByCategory[formData.categoria] || []}
          value={formData.tamanos}
          multiple={true}
          tipo="size"
          onChange={(nuevoArray) => setFormData(prev => ({ ...prev, tamanos: nuevoArray }))}
        />
        {!formData.categoria && <Form.Text className="text-muted">Primero seleccioná una categoría</Form.Text>}
        {errors.tamanos && <div className="text-danger mt-2">{errors.tamanos}</div>}
      </Form.Group>

      {/* TAGS */}
      <Form.Group className="mb-3">
        <Form.Label className=" mb-0 text-primary fw-medium">Tags (mín 1, máx 4) *</Form.Label>
        <ColorSizeSelector
          opciones={tagsList}
          value={formData.tags}
          multiple={true}
          tipo="tag"
          onChange={(nuevoArray) => setFormData(prev => ({ ...prev, tags: nuevoArray }))}
        />
        {errors.tags && <div className="text-danger mt-2">{errors.tags}</div>}
      </Form.Group>
    </Col>
  </Row>

  {/* ========== BOTONES DE ACCIÓN ========== */}
  <div className="d-flex gap-2 m-4">
    {/* Boton Actualizar o crear segùn la accion */}
    <Button variant="primary" type="submit">
      {formData.id ? (
        <>
          <i className="bi bi-arrow-up-circle me-1"></i>
          Actualizar
        </>
      ) : (
        <>
          <i className="bi bi-plus-circle me-1"></i>
          Crear Producto
        </>
      )}
    </Button>
    {/* èste boton cancela la accion evitando llamadas a la API innecesarias */}
    <Button variant="primary" type="button" onClick={() => onCancelar && onCancelar()}>
      <i className="bi bi-x-circle pe-2"> Cancelar</i>
    </Button>
  </div>

</Form>

  );
}

// ============================================
//  NOTAS TÉCNICAS IMPORTANTES
// ============================================
/*

CÓMO SOLUCIONE EL ERROR DE CASCADING RENDERS:
===================================================

ANTES (CON ERROR):
------------------
useEffect(() => {
  if (ProductSelect) {
    setFormData(ProductSelect); // ❌ Causa cascading renders
  }
}, [ProductSelect]);

AHORA (CORRECTO):
-----------------
1. AdminPage usa key={ProductSelect?.id || 'nuevo'}
2. Cuando cambia ProductSelect, la key cambia
3. React desmonta y monta el componente nuevo
4. useState(() => {...}) se ejecuta con los datos correctos
5. NO hay useEffect sincronizando estado con props

VENTAJAS:
---------
✅ No más cascading renders
✅ Código más limpio y predecible
✅ Mejor performance
✅ Sigue las mejores prácticas de React


🎨 FLUJO DE CATEGORÍA → TAMAÑOS:
================================

1. Usuario selecciona una categoría
2. handleCategoriaChange resetea tamanos a []
3. El select de tamaños se habilita
4. Se muestran solo los tamaños de esa categoría
5. Usuario puede seleccionar tamaños (máx 4)

Esto evita que queden tamaños de una categoría anterior
cuando el usuario cambia de categoría.

*/