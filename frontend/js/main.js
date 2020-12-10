'use strict';
const url = 'http://10.114.32.38/app'; // change url when uploading to server

// select existing html elements
const loginWrapper = document.querySelector('#login-wrapper');
const myBtnLogin = document.querySelector('#myBtnLogin');
const myBtnRegister = document.querySelector('#myBtnRegister');
const userInfo = document.querySelector('#user-info');
const logOut = document.querySelector('#log-out');
const loginForm = document.querySelector('#login-form');
const addUserForm = document.querySelector('#add-user-form');


// Get the modal
var modal = document.getElementById("myModalLogin");
// Get the button that opens the modal
var btn = document.getElementById("myBtnLogin");
// Get the modal
var modalRegister = document.getElementById("myModalRegister");
// Get the button that opens the modal
var btnRegister = document.getElementById("myBtnRegister");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// Get the modal
var modalRegister = document.getElementById("myModalRegister");
// Get the button that opens the modal
var btnRegister = document.getElementById("myBtnRegister");
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[1];

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
    sessionStorage.setItem('name', json.user.name);
    sessionStorage.setItem('user_id', json.user.user_id);
    sessionStorage.setItem('user_type', json.user.user_type);
    // show/hide forms + cats
    loginWrapper.style.display = 'none';
    myBtnLogin.style.display = 'none';
    myBtnRegister.style.display = 'none';
    modal.style.display = 'none';
    logOut.style.display = 'block';
    userInfo.innerHTML = `Hello ${json.user.name}`;

    if(sessionStorage.getItem('user_type') == 'Admin'){
      window.location="./admin.html";
    }
    else{
      window.location="./user.html";
    }
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
  sessionStorage.setItem('token', json.token);
 
  loginWrapper.style.display = 'none';
  logOut.style.display = 'block';
  userInfo.innerHTML = `Hello ${json.user.name}`;
  
});

// when app starts, check if token exists and hide login form, show logout button, get cats and users
if (sessionStorage.getItem('token')) {
  loginWrapper.style.display = 'none';
  myBtnLogin.style.display = 'none';
  myBtnRegister.style.display = 'none';
  logOut.style.display = 'block';
  
  if(sessionStorage.getItem('user_type') == 'Admin'){
    window.location="./admin.html";
  }
  else{
    window.location="./user.html";
  }
}



// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}


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

















