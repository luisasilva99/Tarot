import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllCards } from "../services/TarotServices";
import { Link } from "react-router-dom";
const TarotDetail = () => {
  const { id } = useParams(); // obtenemos el id de la URL
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      const data = await getAllCards();
      const selectedCard = data.find(c => c.id === id);
      setCard(selectedCard);
    };
    fetchCard();
  }, [id]);

  if(!card) return <p>Cargando carta...</p>;



  return (
    <div className="card-detail">
      <h1>{card.arcaneName}</h1>
      <img src={card.arcaneImage.imageSrc} alt={card.arcaneName} />

      <h2>Información del Arcano</h2>
      <p><strong>Número:</strong> {card.arcaneNumber}</p>
      <p><strong>Descripción:</strong> {card.arcaneDescription}</p>
      <p><strong>Autor de la carta:</strong> {card.arcaneImage.author}</p>
      <p><strong>Licencia:</strong> {card.arcaneImage.license}</p>

      <hr />

      <h2>Diosa asociada</h2>
      <img src={card.goddessImage.imageSrc} alt={card.goddessName} />
      <p><strong>Nombre:</strong> {card.goddessName}</p>
      <p><strong>Descripción:</strong> {card.goddessDescription}</p>
      <p><strong>Autor de la imagen:</strong> {card.goddessImage.author}</p>
      <p>
        <strong>Licencia:</strong>{" "}
        <a href={card.goddessImage.licenseUrl} target="_blank" rel="noopener noreferrer">
          Ver licencia
        </a>
      </p>

      <br />
      <Link to="/">⬅ Volver al listado</Link>
    </div>
  );
};




export default TarotDetail;