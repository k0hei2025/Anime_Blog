import React, { useState } from 'react';
import AddAnime from "../Component/postAnime/AddAnime"
const addAnime = () => {
  const [userAnime, setUserAnime] = useState([]);

  const addAnimeFormHandler = addForm => {
fetch('https://anime-blog-10478.firebaseio.com/catagories.json', 
    {
      method: 'POST',
      body: JSON.stringify(addForm),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        setUserAnime(prevAddForm => [
          ...prevAddForm,
          { id: responseData.name, ...addForm }

        ]);
          })
      };
  
              
  return (
    <div className="App">

      <AddAnime AddAnime={addAnimeFormHandler} />
  </div>
  );
};

export default Ingredients;
