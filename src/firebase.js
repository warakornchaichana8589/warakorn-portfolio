import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: 'AIzaSyAq2WNsGugGVS5rg6UeSIvZdyhNK7iSPf8',
    authDomain: 'warakorn-site.firebaseapp.com',
    databaseURL: 'https://warakorn-site-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'warakorn-site',
    storageBucket: 'warakorn-site.appspot.com',
    messagingSenderId: '655123776847',
    appId: '1:655123776847:web:45fe84db818a78a554f13a',
    measurementId: 'G-VJDKG3FNGZ'
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db }