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
import EventContainer from "../components/event";
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
          <IonTitle>Todo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Todo</IonTitle>
          </IonToolbar>
        </IonHeader>
        <EventContainer id={id} />
      </IonContent>
    </IonPage>
  );
};

export default Page2;
