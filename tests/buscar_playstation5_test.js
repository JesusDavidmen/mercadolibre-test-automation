Feature('Buscar PlayStation 5 en MercadoLibre');

Scenario('Ordenar productos nuevos por mayor precio y validar ubicación', async ({ I }) => {
  
  // Ir a la página principal
  I.amOnPage('https://www.mercadolibre.com');

  // Seleccionar México
  I.click('México');

  // Buscar "PlayStation 5"
  I.fillField('input[name="as_word"]', 'playstation 5');
  I.pressKey('Enter');
  I.wait(3); // esperar que cargue resultados

  // Filtrar por productos nuevos
  I.click('//a[contains(., "Nuevo")]'); 
  I.wait(2); 

  // Esperar a que aparezca el botón "Agregar código postal" y validarlo
  I.waitForElement('button[data-js="onboarding-cp-open"]', 5); // espera hasta 5 segundos
  I.seeElement('button[data-js="onboarding-cp-open"]');

  // Ordenar por mayor precio
  I.click('button[aria-label="Más relevantes"]'); // abrir el dropdown de ordenamiento
  I.waitForElement('//span[contains(., "Mayor precio")]', 20); // esperar a que aparezca la opción
  I.click('//span[contains(., "Mayor precio")]'); // seleccionar "Mayor precio"
  I.wait(2); // esperar a que se apliquen los resultados

  // 7. Obtener nombre y precio de los primeros 5 productos
  let nombres = await I.grabTextFromAll('//a[contains(@class,"poly-component__title")] | //h2[contains(@class,"ui-search-item__title")]');
  let precios = await I.grabTextFromAll('//span[contains(@class,"andes-money-amount__fraction")]');

  // Tomar solo los primeros 5
  nombres = nombres.slice(0, 5);
  precios = precios.slice(0, 5);

  // 8. Imprimir resultados en consola
  for (let i = 0; i < nombres.length; i++) {
    console.log(`Producto ${i+1}: ${nombres[i]} - Precio: ${precios[i]}`);
  }

});
