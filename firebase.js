import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyBkz1iCqAugr8NoSbxrcrX5EWFoh4i36hk",

  authDomain:
  "stockhost-6daa0.firebaseapp.com",

  projectId: "stockhost-6daa0",

  storageBucket:
  "stockhost-6daa0.firebasestorage.app",

  messagingSenderId: "1097589064935",

  appId: "1:1097589064935:web:85b39b3cd52be003d28e42"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

window.login = function(){

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  signInWithEmailAndPassword(
      auth,
      email,
      password
  )
  .then(() => {

      window.location =
        "dashboard.html";

  })
  .catch((error) => {

      alert(error.message);

  });

}