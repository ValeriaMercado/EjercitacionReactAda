import { useEffect, useState } from "react";

const Episodios = () => {
  const [mostrar, setMostrar] = useState(true);
  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode`)
      .then((res) => res.json())
      .then((data) => {
        setEpisodios(data.results);
      });
  }, []);

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar === true ? "Personajes" : "Episodios"}
      </button>
      {mostrar && episodios.map((p) => <h2>{p.name}</h2>)}
      {!mostrar && personajes.map((p) => <h2>{p.name}</h2>)}
    </div>
  );
};

export default Episodios;
