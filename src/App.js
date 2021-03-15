import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig"


firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
