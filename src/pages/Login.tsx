import { IonButton, IonContent, IonHeader, IonIcon,  IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './style.css';
import { useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { logoGoogle, cameraOutline } from 'ionicons/icons';
import {UserAuth} from "../context/AuthContext";

function Login() {
    const history = useHistory();        
    const {googleSignIn, user} = UserAuth();

    const handleGoogleSignIn = async () => {
        try{
          await googleSignIn();                          
        }
        catch(error){
          console.log(error);
        }
  }      
  
  const navigateToJSAPI = () => { 
    history.push("/camera");
  } 

  useEffect(() => {
    console.log(user);
    if (user!=null && user.displayName != null) {
      history.push("/home");
    }
  }, [user]);

    return (
      <IonPage>      
        <IonContent fullscreen class="background-gradient">
          <IonHeader>
            <IonToolbar class="background-gradient text-color-white">
            <IonTitle class="text-align-center title-font-size text-color-white">MIMDb  
            <IonIcon class="profile-icon" icon={cameraOutline} onClick={navigateToJSAPI}></IonIcon>
            </IonTitle>         
            </IonToolbar>
          </IonHeader>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>          
          <IonContent class="background-gradient profile-ui">                                   
           <IonButton class="profile-logout-button login-google-button" color="medium" onClick={handleGoogleSignIn}>
            <IonIcon icon={logoGoogle}></IonIcon>
            &nbsp; &nbsp;Sign in with Google</IonButton>                      
    </IonContent>
        </IonContent>
      </IonPage>
    );
  };

  export default Login;