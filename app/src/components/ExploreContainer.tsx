import "./ExploreContainer.css";
import { useState } from "react";
import Page2 from "../pages/page2";
import { IonNavLink } from "@ionic/react";
import axios from "axios";
import { useEffect, useRef } from "react";

interface ContainerProps {
  name: string;
}
const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  interface typeData {
    id: number;
    nom: string;
  }
  const [data, setData] = useState<[typeData]>();
  if (name == "Evenements") {
    let nom = useRef("");

    //create new project
    const subProject = () => {
      axios
        .post(`http://127.0.0.1:3333/`, {
          nom: nom.current,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.error(res);
        });
    };

    //Delete project
    const deleteData = (id: number) => {
      axios
        .delete(`http://127.0.0.1:3333/${id}`)
        .then((res) => {
          console.log(res);
          window.location.reload();
        })
        .catch((res) => {
          console.error(res);
        });
    };

    // Display project
    useEffect(() => {
      axios
        .get("http://127.0.0.1:3333/")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);

    return (
      <div id="container">
        <form onSubmit={subProject}>
          <input
            placeholder="Nom du projet"
            onChange={(e) => (nom.current = e.target.value)}
          />
          <button id="est">Ajouter</button>
        </form>
        <h4>Liste des evenements</h4>
        <div style={{ marginTop: 20 }}>
          <div id="projet">
            {data?.map((item) => (
              <div key={item.id}>
                <IonNavLink component={() => <Page2 id={item.id} />}>
                  {item.nom}
                </IonNavLink>
                <button onClick={() => deleteData(item.id)}>voir</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (name == "Creation") {
    return (
      <section id="edit">
        <h4>Creer de nouvels evenements</h4>
        <form>
          <label>Nom</label>
          <input name="nom" />
          <label>Description</label>
          <input name="description" />
          <label>Lieu</label>
          <input name="lieu" />
          <label>Nombre de ticket dispo</label>
          <input name="nbrTicket" />
          <label>Prix du ticket</label>
          <input name="priceTicket" />
          <input value="Creer" />
        </form>
      </section>
    );
  }
};

export default ExploreContainer;
