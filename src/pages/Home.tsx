import {  IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import './style.css';
import { personCircleOutline, searchOutline } from 'ionicons/icons';
import { useHistory } from "react-router-dom";
import { movies } from "../JsonData/movies";
import { sections } from "../JsonData/sections";

const slideOpts = {
  slidsPerView: 10,
  freeMode: true,    
};

const Home: React.FC = () => {
  const history = useHistory();

  const navigateProfile = () => { 
    history.push("/profile");
  }

  const navigateSearch = () => { 
    history.push("/search");
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
          <IonIcon class="search-icon" icon={searchOutline} onClick={navigateSearch}></IonIcon>
          <IonIcon class="profile-icon" icon={personCircleOutline} onClick={navigateProfile}></IonIcon>
          </IonTitle>         
          </IonToolbar>
        </IonHeader>
        <IonContent class="background-gradient">
        <IonSlides options={slideOpts}> 
        {
          movies && movies.map((movieName, index) =>
          <IonSlide key={index} class="main-slides" onClick={navigateMovieDetails}>          
              <img src={movieName.imageUrl}></img>
          </IonSlide>
        )};                   
    </IonSlides>
    <br/>
    <div>
          {
              sections && sections.sections.map((section, index) =>
              <div key={index}>
                  <IonLabel class="small-title text-color-white">{section.sectionName}</IonLabel>
                  <IonSlides options={slideOpts}>
                      {
                          section.sectionDetail && section.sectionDetail.map((movie, k) =>
                              <IonSlide key={k} class="small-slides" onClick={navigateMovieDetails}>
                                  <img src={movie
                                      .imageUrl}></img>
                              </IonSlide>
                          )
                      };
                  </IonSlides>
              </div>
              )
          };
    </div>

  </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
