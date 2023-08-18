const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser (username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  // En esta parte faltaba convertir a JSON
  const userData = await response.JSON(); 
  // Al tener una nueva variable con el JSON se sustituye la que va en este console.log
  console.log(userData);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // Variable mal nombrada
  $n.textContent = `Algo salió mal: ${username}`
}

displayUser('stolinski').catch(handleError);