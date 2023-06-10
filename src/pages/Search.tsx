import {  IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './style.css';
import { personCircleOutline, searchOutline, homeOutline } from 'ionicons/icons';
import { useHistory } from "react-router-dom";
import { searchData } from "../JsonData/searchData";
import { useEffect, useState } from 'react';

const Search: React.FC = () => {
    const history = useHistory();
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState(searchData);

    const navigateProfile = () => { 
        history.push("/profile");
    }

    const navigateHome = () => { 
        history.push("/home");
    }    

    function searchMovies(){
        const data = searchData.filter(item => item.movieName.toLowerCase().includes(searchInput.toLowerCase()));
        setFilteredData(data);
    }

    const handleChange = (e: any) => {
        setSearchInput(e.target.value);
        searchMovies();
    }

    const navigateMovieDetails = () => { 
      history.push("/moviedetails");
    }

  return (
    <IonPage>      
      <IonContent fullscreen class="background-gradient">
        <IonHeader>
          <IonToolbar class="background-gradient text-color-white">
          <IonTitle class="text-align-center title-font-size text-color-white">MIMDb  
          <IonIcon class="home-icon" icon={homeOutline} onClick={navigateHome}></IonIcon>
          <IonIcon class="profile-icon" icon={personCircleOutline} onClick={navigateProfile}></IonIcon>
          </IonTitle>         
          </IonToolbar>
        </IonHeader>
        <IonContent class="background-gradient">
        <IonItem class="background-gradient text-color-white">
        <IonIcon icon={searchOutline} class="text-color-white"></IonIcon>
            <IonInput placeholder="Search for Movie" value={searchInput} onIonChange={handleChange}>            
            </IonInput>
        </IonItem>
        {
            searchInput && searchInput.length > 0 && 
            filteredData && filteredData.map((movie, index) =>
            <IonCard class="background-gradient text-color-white search-card" key={index} onClick={navigateMovieDetails}>
                    <IonCardContent class="background-gradient text-color-white">
                        <IonItem class="background-gradient text-color-white">
                        <img src={movie.imageUrl}></img> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <IonLabel class="text-color-white">{movie.movieName}</IonLabel>
                        </IonItem>                        
                    </IonCardContent>
            </IonCard>
            )                    
        }       
        {
            searchInput.length == 0 && 
            searchData && searchData.map((movie, index) =>
            <IonCard class="background-gradient text-color-white search-card" key={index} onClick={navigateMovieDetails}>
                    <IonCardContent class="background-gradient text-color-white">
                        <IonItem class="background-gradient text-color-white">
                        <img src={movie.imageUrl}></img> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <IonLabel class="text-color-white">{movie.movieName}</IonLabel>
                        </IonItem>                        
                    </IonCardContent>
            </IonCard>
        )         
        } 
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Search;
