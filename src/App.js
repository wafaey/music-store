import React, { useEffect, useState } from 'react';
import Genre from './Genre';
import axios from 'axios'
import './App.css';

const App = () =>{
  const APP_ID = '403464';
  const URI ='http://localhost:3007/'
  const checkAUth = async () =>{
  window.open(`https://connect.deezer.com/oauth/auth.php?app_id=${APP_ID}&redirect_uri=${URI}&perms=basic_access,email`,'popup','width=600,height=600');
  getGenres();
    }
  const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com'
  });

 const [genres, setGenres] = useState([]);
  useEffect(()=>{checkAUth()
  }, []);
 
  const getGenres = async () =>{
    api
    .get('/genre')
    .then(res => setGenres(res.data.data))
    .catch(err => console.log('err', err));
    
 }   
  return (
    <div className="App">
    <div className="genres">
    {genres.map(genre => ( 
    <Genre
    key={genre.id}
    id={genre.id}
    title={genre.name}
    src={genre.picture_big}
    />
     ) 
    )
    }
    </div>
    </div>
  );
}

export default App;