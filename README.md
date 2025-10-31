# Proyecto de Automatización - MercadoLibre

El flujo automatizado realiza lo siguiente:

1. Ingresa al sitio web de MercadoLibre.
2. Selecciona México como país.
3. Busca el término "PlayStation 5".
4. Filtra los resultados por condición “Nuevos”.
5. **Nota:** Filtrar por ubicación “CDMX” no se pudo realizar directamente; se validó que aparezca el botón "Agregar código postal".
6. Ordena los productos por “Mayor a menor precio”.
7. Obtiene el nombre y precio de los primeros 5 productos.
8. Genera reportes de ejecución con Allure, incluyendo capturas de pantalla de fallas y pasos.

## Requisitos
- Node.js (v22+)
- NPM
- CodeceptJS
- Playwright
- Allure

## Instalación y ejecución
Abre una terminal en la carpeta del proyecto y ejecuta los siguientes comandos:

```bash
# Instalar dependencias
npm install

# Ejecutar los tests y ver pasos en consola
npx codeceptjs run --steps

# Generar reporte con Allure
allure generate allure-results --clean -o allure-report

# Abrir reporte en el navegador
allure open allure-report
