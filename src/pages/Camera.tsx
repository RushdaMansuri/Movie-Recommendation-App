import { IonButton, IonContent, IonHeader, IonIcon,  IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './style.css';
import { useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { logInOutline } from 'ionicons/icons';
import {UserAuth} from "../context/AuthContext";

function Camera() {
    const history = useHistory();       
   
  const navigateLogin = () => { 
    history.push("/login");
  }      
 
  const openCam = () => {
      const video = document.getElementById('webCam') as HTMLVideoElement;
      const button = document.getElementById('buttonWebCam') as HTMLButtonElement;
      const constraints = {
            video: true,
            audio: true,
      };
      navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
            video.srcObject = stream;
            video.addEventListener('loadedmetadata', () => {
                  video.play();
            });

      })
      .catch((err) => {
            console.log(err);
      });
      button.disabled = true;
   }



    return (
      <IonPage>      
        <IonContent fullscreen class="background-gradient">
          <IonHeader>
            <IonToolbar class="background-gradient text-color-white">
            <IonTitle class="text-align-center title-font-size text-color-white">MIMDb  
            <IonIcon class="profile-icon" icon={logInOutline} onClick={navigateLogin} title="Login"></IonIcon>
            </IonTitle>         
            </IonToolbar>
          </IonHeader>                
          <IonContent class="background-gradient profile-ui">   
          <div className="camera-div">                             
            <video className="camera-video" id="webCam"></video>
           </div>   
            <IonButton id="buttonWebCam" color="medium" onClick={openCam}>Open WebCam</IonButton>       
    </IonContent>
        </IonContent>
      </IonPage>
    );
  };

  export default Camera;