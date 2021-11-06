import "./style.css";

const Card = ({ students }) => {
  return (
    <div className="card">
      {
        <li
          className={
            students.house === "Slytherin"
              ? "slytherin"
              : students.house === "Gryffindor"
              ? "gryffindor"
              : students.house === "Hufflepuff"
              ? "hufflepuff"
              : students.house === "Ravenclaw"
              ? "ravenclaw"
              : "nohouse"
          }
        >
          <h2>Name: {students.name}</h2>
          <p>House: {students.house ? students.house : "Without"}</p>
          <p>Gender: {students.gender}</p>
        </li>
      }
    </div>
  );
};
export default Card;
