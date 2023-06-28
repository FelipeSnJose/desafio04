import MiApi from "./MiApi";
import { Card } from "react-bootstrap";

const Cards = ({ filtro, orden }) => {
    const results = MiApi();

    const filterResults = results.filter((character) =>
      character.name.toLowerCase().includes(filtro.toLowerCase())
    );

    let sortedResults = [...filterResults];

    if (orden === "asc") {
      sortedResults.sort((a, b) => a.id - b.id);
    } else if (orden === "desc") {
      sortedResults.sort((a, b) => b.id - a.id);
    } else if (orden === "az") {
      sortedResults.sort((a, b) => a.name.localeCompare(b.name));
    } else if (orden === "za") {
      sortedResults.sort((a, b) => b.name.localeCompare(a.name));
    }

    return (
      <div className="card-container">
        {sortedResults.map((character) => (
          <Card key={character.id} className="character-card">
            <Card.Img variant="top" src={character.image} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>
                <strong>ID:</strong> {character.id}
                <br />
                <strong>Species:</strong> {character.species}
                <br />
                <strong>Gender:</strong> {character.gender}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };

  export default Cards;