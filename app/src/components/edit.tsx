import { useState, useEffect, useRef } from "react";
import axios from "axios";

interface ContainerProps {
  id: number;
}

interface ContainerProps {
  id_todo: number;
}

const EditContainer: React.FC<ContainerProps> = ({ id }) => {
  interface typeData {
    id: number;
    project_id: number;
    content: string;
    stat: boolean;
  }
  const [data, setData] = useState<[typeData]>();
  const content = useRef("");
  console.log(id);

  //Delete Todo
  const deleteData = (id_todo: number | undefined) => {
    axios
      .delete(`http://127.0.0.1:3333/${id}/todo/${id_todo}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((res) => {
        console.error(res);
      });
  };

  // Display todo
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3333/${id}/todo`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section id="edit">
      <h3>Creer de nouvels evenements</h3>
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
      <button onClick={}>supprimer une tache</button>
    </section>
  );
};

export default EditContainer;
