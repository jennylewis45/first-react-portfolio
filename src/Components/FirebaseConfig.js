import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import{getDatabase}from "firebase/database"
function StartFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyDPjfc5Auhwv-GOY6z4t7-S4mQKgaijldA",
        authDomain: "form-for-react.firebaseapp.com",
        databaseURL: "https://form-for-react-default-rtdb.firebaseio.com",
        projectId: "form-for-react",
        storageBucket: "form-for-react.appspot.com",
        messagingSenderId: "827728706515",
        appId: "1:827728706515:web:91208c55b610897bd4cd26",
        measurementId: "G-1DG73BNZSD"
      };
      
      const app = initializeApp(firebaseConfig);
      return getDatabase(app)
    //   const analytics = getAnalytics(app);
}

export default StartFirebase;