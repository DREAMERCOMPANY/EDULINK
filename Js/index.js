console.log('JS file ;)');

 // Funcionalidad para Noticias
 const noticiasList = document.getElementById('noticias-list');
 const noticias = [
   'Inicio del semestre: 1 de febrero',
   'Proceso de inscripción para clubes estudiantiles',
   'Renovación de matrícula hasta el 31 de enero'
 ];

 noticias.forEach((noticia) => {
   const li = document.createElement('li');
   li.textContent = noticia;
   li.className = 'bg-white shadow p-4 rounded';
   noticiasList.appendChild(li);
 });

 // Funcionalidad para Horarios
 const buttons = document.querySelectorAll('#horarios button');
 buttons.forEach((button, index) => {
   button.addEventListener('click', () => {
     alert(`Detalles del Horario ${index + 1}`);
   });
 });
