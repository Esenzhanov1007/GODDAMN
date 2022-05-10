import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBWvcXD5xxWGoA2HWbm_V7Q56pK4M-LRNA",
  authDomain: "goddamnhackathon.firebaseapp.com",
  projectId: "goddamnhackathon",
  storageBucket: "goddamnhackathon.appspot.com",
  messagingSenderId: "741886590275",
  appId: "1:741886590275:web:d81c4aab48e2c21a5ec3f6"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;