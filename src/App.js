import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import "./App.css";
import Counters from "./Counters";
import { auth, firestore } from "./firebase"; // Import Firebase modules
import Register from "./components/Register";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
        {user ? (
          <Counters auth={auth} firestore={firestore} />
        ) : (
          <Register/>
        )}
      </header>
    </div>
  );
}


export default App;
