import React  from 'react';
import style from './genre.module.css'
import { useSelector } from 'react-redux';
import {useParams} from 'react-router'

const Artist = () =>{
    const {id} = useParams(); 
    const artists = useSelector( state => state.artists );
   console.log(id);
    return(
        <div className={style.all_Artists}>
            {
        artists.map(artist=>
          <div className={style.genre} key={artist.id}>
            <img className={style.image} src={artist.picture} alt=""></img>
            <p>{artist.name}</p>
          </div>
        )}
        </div>
    )
}
export default Artist;
