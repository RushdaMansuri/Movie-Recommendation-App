import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./style.css";
import { UserAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import { logoGoogle, homeOutline } from "ionicons/icons";

function Profile() {
  const history = useHistory();
  const { googleLogOut, user } = UserAuth();

  const handleGoogleSignOut = async () => {
    try {
      await googleLogOut();
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const navigateHome = () => {
    history.push("/home");
  };

  return (
    <IonPage>
      <IonContent fullscreen class="background-gradient">
        <IonHeader>
          <IonToolbar class="background-gradient text-color-white">
            <IonTitle class="text-align-center title-font-size text-color-white">
              MIMDb
              <IonIcon
                class="profile-icon"
                icon={homeOutline}
                onClick={navigateHome}
              ></IonIcon>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <IonContent class="background-gradient profile-ui">
          <IonItem class="background-gradient text-color-white">
            <IonLabel class="small-title">Name: {user?.displayName}</IonLabel>
          </IonItem>
          <IonItem class="background-gradient text-color-white">
            <IonLabel class="small-title">Email: {user?.email}</IonLabel>
          </IonItem>
          <IonButton
            class="profile-logout-button"
            color="medium"
            onClick={handleGoogleSignOut}
          >
            <IonIcon icon={logoGoogle}></IonIcon>
            &nbsp; &nbsp;Logout
          </IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
}

export default Profile;
