// for information =>

// https://api.publicapis.org/entries
// https://openweathermap.org/api
// https://nordicapis.com/how-to-build-an-api-driven-weather-app/%5C

// ===================================================

// 1. https://catfact.ninja/
// rapidapi.com/user

// ===================================================

// 2. https://dog.ceo/dog-api/

// ===================================================

// 3. http://numbersapi.com/#42

// ===================================================

// 4. https://agify.io/

// ===================================================

// 5.  http://colormind.io/

// ===================================================

// 6. https://deckofcardsapi.com/

// ===================================================

// 7. https://randomuser.me/

const userRef = document.querySelector('.user');

async function getUser() {
  try {
    const resp = await fetch('https://randomuser.me/api/');
    const user = await resp.json();
    console.log(user);
    renderUser(user);
  } catch (error) {
    console.log(error);
  }
}
getUser();

function renderUser(data) {
  const user = data.results[0];
  const { name, picture, email } = user;
  userRef.innerHTML = `<div><img src="${picture.large}" />
  </div><p>${name.first} ${name.last}</p>
  <p>${email}</p>`;
}

// ===================================================

// 8. https://reqres.in/
