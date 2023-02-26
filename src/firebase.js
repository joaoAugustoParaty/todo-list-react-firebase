// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //importar o banco de dados
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlK9HTWxiA1NCc9MMYaf5Eo4341tPrTvw",
  authDomain: "todo-app-yt-6c5a7.firebaseapp.com",
  projectId: "todo-app-yt-6c5a7",
  storageBucket: "todo-app-yt-6c5a7.appspot.com",
  messagingSenderId: "902484883126",
  appId: "1:902484883126:web:af8b7ce936ee7e35569817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // exportar o banco de dados

//OBS: Esses dados foram extraidos do firebase quando se cria um projeto
//1. Ler a documentação do firebase para exportar, nesse caso no terminou eu escrevi: yarn add firebase
//2. Criar o App desmarcando a opção do google analytic
//3. Clicar em desenvolvimento web e copiar o código para colar aqui 