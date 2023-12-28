import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/react";

interface ContainerProps {
  id: number;
}
import "./Page.css";
import EditContainer from "../components/edit";
import { arrowBack } from "ionicons/icons";

const Page2: React.FC<ContainerProps> = ({ id }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <a href="/">
              <IonIcon icon={arrowBack} />
            </a>
          </IonButtons>
          <IonTitle>Modifier un evenement</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Modifier un evenement</IonTitle>
          </IonToolbar>
        </IonHeader>
        <EditContainer id={id} />
      </IonContent>
    </IonPage>
  );
};

export default Page2;
