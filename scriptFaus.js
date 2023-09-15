// Obtener todas las columnas
const columns = document.querySelectorAll('.col');

// Agregar evento de mouseover a cada columna
columns.forEach(column => {
  column.addEventListener('mouseover', () => {
    column.style.backgroundColor = 'var(--azul)';
    column.style.color = 'white';
  });

  column.addEventListener('mouseout', () => {
    column.style.backgroundColor = 'var(--semi-oscuro)';
    column.style.color = 'var(--gris)';
  });
});