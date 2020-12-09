'use strict';
const url = 'http://localhost:3000'; // change url when uploading to server

// select existing html elements
const loginWrapper = document.querySelector('#login-wrapper');
const myBtnLogin = document.querySelector('#myBtnLogin');
const myBtnRegister = document.querySelector('#myBtnRegister');
const userInfo = document.querySelector('#user-info');
const logOut = document.querySelector('#log-out');
const main = document.querySelector('main');
const loginForm = document.querySelector('#login-form');
const addUserForm = document.querySelector('#add-user-form');
const addForm = document.querySelector('#add-cat-form');
const modForm = document.querySelector('#mod-cat-form');
const ul = document.querySelector('ul.test');
const userLists = document.querySelectorAll('.add-owner');
const imageModal = document.querySelector('#image-modal');
const modalImage = document.querySelector('#image-modal img');
const close = document.querySelector('#image-modal a');

// create cat cards
const createCatCards = (cats) => {
  // clear ul
  ul.innerHTML = '';
  cats.forEach((cat) => {
    // create li with DOM methods
    const img = document.createElement('img');
    img.src = url + '/thumbnails/' + cat.filename;
    img.alt = cat.name;
    img.classList.add('resp');

    // open large image when clicking image
    img.addEventListener('click', () => {
      modalImage.src = url + '/' + cat.filename;
      imageModal.alt = cat.name;
      imageModal.classList.toggle('hide');
      try {
        const coords = JSON.parse(cat.coords);
        // console.log(coords);
        addMarker(coords);
      }
      catch (e) {
      }
    });

    const figure = document.createElement('figure').appendChild(img);

    const h2 = document.createElement('h2');
    h2.innerHTML = cat.name;

    const p2 = document.createElement('p');
    p2.innerHTML = `Weight: ${cat.weight}kg`;

    const p3 = document.createElement('p');
    p3.innerHTML = `Owner: ${cat.ownername}`;

    // add selected cat's values to modify form
    const modButton = document.createElement('button');
    modButton.innerHTML = 'Modify';
    modButton.addEventListener('click', () => {
      const inputs = modForm.querySelectorAll('input');
      inputs[0].value = cat.name;
      inputs[1].value = cat.weight;
      inputs[2].value = cat.cat_id;
      modForm.querySelector('select').value = cat.owner;
    });

    // delete selected cat
    const delButton = document.createElement('button');
    delButton.innerHTML = 'Delete';
    delButton.addEventListener('click', async () => {
      const fetchOptions = {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
        },
      };
      try {
        const response = await fetch(url + '/cat/' + cat.cat_id, fetchOptions);
        const json = await response.json();
        console.log('delete response', json);
        getCat();
      }
      catch (e) {
        console.log(e.message());
      }
    });

    const li = document.createElement('li');
    li.classList.add('light-border');

    li.appendChild(h2);
    li.appendChild(figure);
    li.appendChild(p2);
    li.appendChild(p3);
    li.appendChild(modButton);
    li.appendChild(delButton);
    ul.appendChild(li);
  });
};

// close modal
close.addEventListener('click', (evt) => {
  evt.preventDefault();
  imageModal.classList.toggle('hide');
});

// AJAX call

const getCat = async () => {
  console.log('getCat token ', sessionStorage.getItem('token'));
  try {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      },
    };
    const response = await fetch(url + '/cat', options);
    const cats = await response.json();
    createCatCards(cats);
  }
  catch (e) {
    console.log(e.message);
  }
};

// create user options to <select>
const createUserOptions = (users) => {
  userLists.forEach((list) => {
    // clear user list
    list.innerHTML = '';
    users.forEach((user) => {
      // create options with DOM methods
      const option = document.createElement('option');
      option.value = user.user_id;
      option.innerHTML = user.name;
      option.classList.add('light-border');
      list.appendChild(option);
    });
  });
};

// get users to form options
const getUsers = async () => {
  try {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      },
    };
    const response = await fetch(url + '/user', options);
    const users = await response.json();
    createUserOptions(users);
  }
  catch (e) {
    console.log(e.message);
  }
};

// submit add cat form
addForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const fd = new FormData(addForm);
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: fd,
  };
  const response = await fetch(url + '/cat', fetchOptions);
  const json = await response.json();
  console.log('add response', json);
  getCat();
});

// submit modify form
modForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const data = serializeJson(modForm);
  const fetchOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: JSON.stringify(data),
  };

  console.log(fetchOptions);
  const response = await fetch(url + '/cat', fetchOptions);
  const json = await response.json();
  console.log('modify response', json);
  getCat();
});

// login
loginForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const data = serializeJson(loginForm);
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url + '/auth/login', fetchOptions);
  const json = await response.json();
  console.log('login response', json);
  if (!json.user) {
    alert(json.message);
  } else {
    // save token
    sessionStorage.setItem('token', json.token);
    // show/hide forms + cats
    loginWrapper.style.display = 'none';
    myBtnLogin.style.display = 'none';
    myBtnRegister.style.display = 'none';
    logOut.style.display = 'block';
    main.style.display = 'block';
    userInfo.innerHTML = `Hello ${json.user.name}`;
    getCat();
    getUsers();
  }
});

// logout
logOut.addEventListener('click', async (evt) => {
  evt.preventDefault();
  try {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      },
    };
    const response = await fetch(url + '/auth/logout', options);
    const json = await response.json();
    console.log(json);
    // remove token
    sessionStorage.removeItem('token');
    alert('You have logged out');
    // show/hide forms + cats
    loginWrapper.style.display = 'flex';
    myBtnLogin.style.display = 'flex';
    myBtnRegister.style.display = 'flex';
    logOut.style.display = 'none';
    main.style.display = 'none';
  }
  catch (e) {
    console.log(e.message);
  }
});

// submit register form
addUserForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const data = serializeJson(addUserForm);
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url + '/auth/register', fetchOptions);
  const json = await response.json();
  console.log('user add response', json);
  // save token
  sessionStorage.setItem('token', json.token);
  // show/hide forms + cats
  loginWrapper.style.display = 'none';
  logOut.style.display = 'block';
  main.style.display = 'block';
  
  
  
  getCat();
  getUsers();
});

// when app starts, check if token exists and hide login form, show logout button and main content, get cats and users
if (sessionStorage.getItem('token')) {
  loginWrapper.style.display = 'none';
  myBtnLogin.style.display = 'none';
  myBtnRegister.style.display = 'none';
  logOut.style.display = 'block';
  main.style.display = 'block';
  getCat();
  getUsers();
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtnLogin");


// Get the modal
var modalRegister = document.getElementById("myModalRegister");

// Get the button that opens the modal
var btnRegister = document.getElementById("myBtnRegister");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

// Get the modal
var modalRegister = document.getElementById("myModalRegister");

// Get the button that opens the modal
var btnRegister = document.getElementById("myBtnRegister");
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[1];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modalRegister) {
    modalRegister.style.display = "none";
  }
}


// When the user clicks the button, open the modal 
btnRegister.onclick = function() {
  modalRegister.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modalRegister.style.display = "none";
}

var button = document.getElementById('ArtBtn');
var button2 = document.getElementById('AboutBtn');
var button3 = document.getElementById('LoginBtn');
var button4 = document.getElementById('RegisterBtn');
var button5 = document.getElementById('LogoutBtn');
var button6 = document.getElementById('HomeBtn');

button.addEventListener('click', function(e) { 
  button.className  = "active";
  button2.className = "";
  button3.className = "";
  button4.className = "";
  button5.className = "";
  button6.className = "";
});


button2.addEventListener('click', function(e) { 
  button2.className  = "active";
  button.className  = "";
  button3.className = "";
  button4.className = "";
  button5.className = "";
  button6.className = "";
});

button3.addEventListener('click', function(e) { 
  button.className  = "";
  button2.className = "";
  button3.className = "active";
  button4.className = "";
  button5.className = "";
  button6.className = "";
});

button4.addEventListener('click', function(e) { 
  button.className  = "";
  button2.className = "";
  button3.className = "";
  button4.className = "active";
  button5.className = "";
  button6.className = "";
});

button5.addEventListener('click', function(e) { 
  button.className  = "";
  button2.className = "";
  button3.className = "";
  button4.className = "";
  button5.className = "active";
  button6.className = "";
});

button6.addEventListener('click', function(e) { 
  button.className  = "";
  button2.className = "";
  button3.className = "";
  button4.className = "";
  button5.className = "";
  button6.className = "active";
});



















