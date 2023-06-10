import {  IonCard, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import './style.css';
import { personCircleOutline, searchOutline, homeOutline } from 'ionicons/icons';
import { useHistory } from "react-router-dom";
import { movieDetails } from "../JsonData/movieDetails";

const MovieDetails: React.FC = () => {
  const history = useHistory();

  const navigateProfile = () => { 
    history.push("/profile");
  }

  const navigateSearch = () => { 
    history.push("/search");
  }
  
  const navigateHome = () => { 
    history.push("/home");
  }  

  return (
    <IonPage>      
      <IonContent fullscreen class="background-gradient">
        <IonHeader>
          <IonToolbar class="background-gradient text-color-white">
          <IonTitle class="text-align-center title-font-size text-color-white">MIMDb 
          <IonIcon class="home-icon" icon={homeOutline} onClick={navigateHome}></IonIcon>           
          <IonIcon class="moviedetail-search-icon" icon={searchOutline} onClick={navigateSearch}></IonIcon>
          <IonIcon class="profile-icon" icon={personCircleOutline} onClick={navigateProfile}></IonIcon>
          </IonTitle>         
          </IonToolbar>
        </IonHeader>
        <IonContent class="background-gradient">
        <IonCard class="background-gradient movie-detail">  
            <img src={movieDetails.imageUrl}></img>
        </IonCard>
        <IonLabel class="small-font-movie-detail text-color-white"><b>{movieDetails.movieName}</b> </IonLabel><br/><br/>
        <IonLabel class="small-font-movie-detail text-color-white">Ratings: {movieDetails.movieRating}</IonLabel><br/><br/>
        <IonLabel class="small-font-movie-detail text-color-white">Duration: {movieDetails.duration} hours</IonLabel><br/><br/>
        <IonLabel class="small-font-movie-detail text-color-white">Year: {movieDetails.movieReleasedYear}</IonLabel><br/><br/>
        <IonLabel class="small-font-movie-detail text-color-white">{movieDetails.movieDescription}</IonLabel><br/><br/>
        <IonLabel class="small-font-movie-detail text-color-white"><b>Cast & Crew:</b> </IonLabel><br/><br/>
        <IonLabel class="small-font-movie-detail text-color-white">Director: {movieDetails.Director}</IonLabel><br/>
        <IonLabel class="small-font-movie-detail text-color-white">Producer: {movieDetails.Producer}</IonLabel><br/>
        <IonLabel class="small-font-movie-detail text-color-white">Actor: {movieDetails.Actors}</IonLabel><br/>
        <IonLabel class="small-font-movie-detail text-color-white">Actress: {movieDetails.Actress}</IonLabel><br/>
        <IonLabel class="small-font-movie-detail text-color-white">Supporting Actor: {movieDetails.SupportingActor}</IonLabel><br/>
        <IonLabel class="small-font-movie-detail text-color-white">Music: {movieDetails.Music}</IonLabel><br/>
        <IonLabel class="small-font-movie-detail text-color-white">Cinematography: {movieDetails.Cinematography}</IonLabel><br/>
        <IonLabel class="small-font-movie-detail text-color-white">Editing: {movieDetails.Editing}</IonLabel><br/>
        <IonLabel class="small-font-movie-detail text-color-white">Studio: {movieDetails.Studio}</IonLabel><br/>
        <IonLabel class="small-font-movie-detail text-color-white">Distributor: {movieDetails.Distributor}</IonLabel><br/>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default MovieDetails;
