
//Se crea la constante de botón para poder manipularlo con el DOM.
document.addEventListener('DOMContentLoaded', () => {
  const loadButton = document.querySelector('button.btn.btn-primary.my-2');
  const productContainer = document.querySelector('.row.row-cols-1.row-cols-sm-2.row-cols-md-3.g-3');

  //Se hace la orejita del botón con el evento click.
  loadButton.addEventListener('click', async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const products = await response.json();

      // Tomar los primeros 17 productos
      const slicedProducts = products.slice(0, 17); //17 cards


      //NOTA: EL EJERCICIO SIGUE EN PROCESO, YA QUE NO PUEDO VINCULAR MIS ARCHIVOS ENTRE SÍ, Y NO PUEDO VER MIS CAMBIOS.