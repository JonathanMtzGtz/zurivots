// Función para alternar el menú en dispositivos móviles
function toggleMenu() {
  const navbarMenu = document.querySelector('.navbar-menu');
  navbarMenu.classList.toggle('active');
}


function adjustHeroHeight() {
  const heroSection = document.querySelector('.hero-section');
  heroSection.style.height = `${window.innerHeight * 0.45}px`;
}

window.addEventListener('resize', adjustHeroHeight);
window.addEventListener('load', adjustHeroHeight);

// Función para abrir el modal de votación
function openVoteModal(sectionId) {
  const modal = document.getElementById('voteModal');
  const image = document.querySelector(`#modalImage img`);
  const title = document.getElementById('modalTitle');
  const sectionTitleInput = document.getElementById('sectionTitle');
  
  // Aquí puedes cambiar el contenido del modal según la sección votada
  if (sectionId === 1) {
    image.src = '/img/saludporella.png'; // Cambia por la imagen correspondiente
    title.textContent = 'SALUD POR ELLA'; // Cambia por el título correspondiente
    sectionTitleInput.value = 'SALUD POR ELLA'; // El título no se puede modificar
  } else if (sectionId === 2) {
    image.src = '/img/porunfuturo.JPG'; // Cambia por la imagen correspondiente
    title.textContent = 'POR UN FUTURO BRILLANTE'; // Cambia por el título correspondiente
    sectionTitleInput.value = 'POR UN FUTURO BRILLANTE'; // El título no se puede modificar
  } else if (sectionId === 3) {
    image.src = '/img/renaciendonuestraciudad.jpg'; // Cambia por la imagen correspondiente
    title.textContent = 'RENACIENDO NUESTRA CIUDAD'; // Cambia por el título correspondiente
    sectionTitleInput.value = 'RENACIENDO NUESTRA CIUDAD'; // El título no se puede modificar
  }

  modal.style.display = 'flex';
}

// Función para cerrar el modal de votación
function closeVoteModal() {
  const modal = document.getElementById('voteModal');
  modal.style.display = 'none';
}

/// Función para enviar el formulario de votación
function submitVoteForm(event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  // Obtén los datos del formulario
  const sectionTitle = document.getElementById('sectionTitle').value;
  const insurance = document.getElementById('insurance').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;

  // Validación: Verificar que todos los campos requeridos estén completos
  if (insurance && age && gender) {
    // Aquí se pueden hacer acciones con los datos, como enviarlos a un servidor
    // Redirigir a otra página después de enviar
    window.location.href = "/gracias.html";
  } else {
    alert("Por favor, complete todos los campos antes de enviar.");
  }
}





