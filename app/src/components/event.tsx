import { useState, useEffect, useRef } from "react";
import axios from "axios";

interface ContainerProps {
  id: number;
}

interface ContainerProps {
  id_todo: number;
}

const EventContainer: React.FC<ContainerProps> = ({ id }) => {
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
    <section id="container">
      <div>
        <p>nom: </p>
        <p>Description: </p>
        <p>Lieux: </p>
        <p>Prix du ticket: </p>
        <p>Nombre restant: </p>
      </div>
      <div>
        <button>Acheter un ticke</button>
      </div>
    </section>
  );
};

export default EventContainer;
