import { initializeApp }
from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
}
from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

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

const db = getFirestore(app);

async function loadProducts(){

  const querySnapshot =
    await getDocs(
      collection(db,"products")
    );

  let html = "";

  querySnapshot.forEach((doc) => {

      const data = doc.data();

      html += `

      <div class="product-item">

          <h3>${data.name}</h3>

          <p>$${data.price}</p>

          <span>${data.category}</span>

      </div>

      `;

  });

  document.getElementById(
    "productList"
  ).innerHTML = html;

}

loadProducts();
