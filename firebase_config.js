const firebase=require('firebase/app');
require('firebase/auth');
const firebaseConfig = {
  apiKey: "AIzaSyCb1BpOSUbcwRbAP84BuZTL6nbJy-QRii0",
  authDomain: "joy-project-6fbc6.firebaseapp.com",
  projectId: "joy-project-6fbc6",
  storageBucket: "joy-project-6fbc6.appspot.com",
  messagingSenderId: "614494804415",
  appId: "1:614494804415:web:ecb8aadeb30a795e2d290a",
  measurementId: "G-4JN4HNDVTZ"
};

firebase.initializeApp(firebaseConfig);


 module.exports=firebase; 