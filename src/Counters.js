import React, { useState } from "react";
import Counter from "./components/Counter";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 1, name: "Counter 1" },
    { id: 2, name: "Counter 2" },
  ]);

  const addCounter = () => {
    const newCounter = {
      id: Date.now(),
      name: `Counter ${counters.length + 1}`,
    };
    setCounters([...counters, newCounter]);
  };

  const removeCounter = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };
  const [user] = useAuthState(auth);
  if (user) {
    return (
      <div>
        <div className="user-profile">
          <img className="ProfilePicture" src={user.photoURL} alt="Profile" />
          <div className="welcome">
            <p>{`Welcome, ${user.displayName}`}</p>
            <button className="button " onClick={() => auth.signOut()}>Sign Out</button>
          </div>
        </div>
        <div className="container mx-auto p-4">
          <button
            className="button add-counter-button"
            onClick={addCounter}
          >
            Add Counter
          </button>
          {counters.map((counter) => (
            <div key={counter.id} className="mb-4">
              <Counter
                name={counter.name}
                onDelete={() => removeCounter(counter.id)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null; // Return null if user is not logged in
};

export default Counters;
