import Card from "../Card";
import "./style.css";

import { useState } from "react";

const Random = ({ characters }) => {
  const [students, setStudents] = useState([]);

  const randomCharacter = () => {
    const houses = ["Slytherin", "Gryffindor", "Hufflepuff", "Ravenclaw", ""];
    let arrayStudents = [];

    for (let i = 0; i < 3; i++) {
      const randomHouse = Math.floor(Math.random() * houses.length);
      const newFilter = characters.filter(
        (item) => item.house === houses[randomHouse]
      );
      console.log(newFilter);
      const randomNumber = Math.floor(Math.random() * newFilter.length);
      houses.splice(randomHouse, 1);
      arrayStudents = [...arrayStudents, newFilter[randomNumber]];
    }
    setStudents([...arrayStudents]);
  };

  return (
    <div>
      <h4>
        Seja bem vindo ao torneio TriBruxo da Kenzie Acadamy, clique no botão
        abaixo e veja quais são os selecionados para esta disputa!!
      </h4>
      <ul>
        {students.map((student, index) => (
          <Card key={index} students={student} index={index} />
        ))}
      </ul>
      <button onClick={randomCharacter}>Clique para sortear!!</button>
    </div>
  );
};

export default Random;
