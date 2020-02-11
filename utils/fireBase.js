import fireBase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD3pStF6heF7Z-RHrMHmgfs1BSTZ3p5cGI",
    authDomain: "tenedores-8cb90.firebaseapp.com",
    databaseURL: "https://tenedores-8cb90.firebaseio.com",
    projectId: "tenedores-8cb90",
    storageBucket: "tenedores-8cb90.appspot.com",
    messagingSenderId: "26239158005",
    appId: "1:26239158005:web:fa69e3c67ceb009f5127bc"
  };

  if(!fireBase.apps.length){
    console.log('firebase',fireBase.apps.length)
    
  }
  export const fireBaseAPP =  fireBase.initializeApp(firebaseConfig);

// import Firebase from 'firebase';
// const config = {
//       apiKey: "AIzaSyD3pStF6heF7Z-RHrMHmgfs1BSTZ3p5cGI",
//       authDomain: "tenedores-8cb90.firebaseapp.com",
//       databaseURL: "https://tenedores-8cb90.firebaseio.com",
//       projectId: "tenedores-8cb90",
//       storageBucket: "tenedores-8cb90.appspot.com",
//       messagingSenderId: "26239158005",
//       appId: "1:26239158005:web:fa69e3c67ceb009f5127bc"
//     };
// let app = Firebase.initializeApp(config);
// export const db = app.database();