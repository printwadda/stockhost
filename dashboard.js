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

  apiKey: "YOUR_API_KEY",

  authDomain:
  "YOUR_PROJECT.firebaseapp.com",

  projectId:
  "YOUR_PROJECT_ID",

  storageBucket:
  "YOUR_PROJECT.appspot.com",

  messagingSenderId:
  "XXXX",

  appId:
  "XXXX"

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
