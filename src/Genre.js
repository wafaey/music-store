import React, {useState}  from 'react';
import style from './genre.module.css'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import axios from 'axios'
import Artist from './Artist'
import {setArtists} from "./action";
import {useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {BrowserRouter as Router, Link} from 'react-router-dom'

const Genre = ({id,title,src}) =>{
     const dispatch = useDispatch(); 
     const history = useHistory();
     const [modalStatus, setModalStatus] =useState(false);
     const openRelatedArtists = () =>{
        getArtists();
        setModalStatus(true); 
      }
      const closeRelatedArtists = () =>{
        setModalStatus(false);
        history.goBack();
      }
      const api = axios.create({
        baseURL: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com'
      });
      const getArtists =  () =>{
        api
        .get(`/genre/${id}/artists`)
        .then(res => dispatch(setArtists(res.data.data)))
        .catch(err => console.log('err', err));
      } 
    return(
      <Router>
        <div className={style.genre}>
            <img className={style.image} src={src} alt=""></img>
            <h3>{title}</h3>
            <Button variant="contained" color="secondary" onClick={openRelatedArtists}><Link to={`/${id}`}>show artists</Link></Button>
            <Modal
            className={style.modal}
            open={modalStatus}
            onClose={closeRelatedArtists}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          > 
          <Artist/>
           </Modal>  
        </div>
        </Router>
    );
}

export default Genre;
