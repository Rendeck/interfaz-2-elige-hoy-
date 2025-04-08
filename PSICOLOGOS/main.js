// Función para mostrar y ocultar la descripción con animación
function toggleDescripcion(button) {
    const descripcion = button.closest('.card-body').querySelector('.descripcion-extra');
    // Alternar la visibilidad de la descripción
    if (descripcion.style.display === 'none' || descripcion.style.display === '') {
      descripcion.style.display = 'block';
      descripcion.classList.add('fade-in');
    } else {
      descripcion.style.display = 'none';
      descripcion.classList.remove('fade-in');
    }
  }