

// App.js
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null); // store image URL
  const [loading, setLoading] = useState(true);   // track loading state

  useEffect(() => {
    // Fetch a random dog image from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // API returns URL in 'message'
        setLoading(false);         // stop loading
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setLoading(false);
      });
  }, []); // empty dependency array ensures it runs once on mount

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
