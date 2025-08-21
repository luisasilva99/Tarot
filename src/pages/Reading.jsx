import { useState, useEffect } from "react";
import { getAllCards } from "../services/TarotServices";
import "./Reading.css";
import cardBack from "../assets/card-back.jpg"

const Reading = () => {
  const [cards, setCards] = useState([]); // todas las cartas
  const [selectedCards, setSelectedCards] = useState([]); // máximo 3 seleccionadas

  useEffect(() => {
    const fetchCards = async () => {
      const data = await getAllCards();
      setCards(data);
    };
    fetchCards();
  }, []);

  const handleSelectCard = (card) => {
    if (selectedCards.length >= 3) return; //  impedir más de 3
    if (selectedCards.find(c => c.id === card.id)) return; //  impedir duplicados
    setSelectedCards([...selectedCards, card]);
  };

  const handleReset = () => {
    setSelectedCards([]);
  };

 
  return (
    <div className="reading-container">
      <h1>Lectura de Cartas</h1>

      {/* Bloque de la tirada */}
      <div className="reading-board">
        <div className="reading-slot">
          <h3>Pasado</h3>
          {selectedCards[0] ? (
            <img
              src={selectedCards[0].arcaneImage.imageSrc}
              alt={selectedCards[0].arcaneName}
              className="selected-card"
            />
          ) : (
            <div className="empty-slot">Selecciona una carta</div>
          )}
        </div>

        <div className="reading-slot">
          <h3>Presente</h3>
          {selectedCards[1] ? (
            <img
              src={selectedCards[1].arcaneImage.imageSrc}
              alt={selectedCards[1].arcaneName}
              className="selected-card"
            />
          ) : (
            <div className="empty-slot">Selecciona una carta</div>
          )}
        </div>

        <div className="reading-slot">
          <h3>Futuro</h3>
          {selectedCards[2] ? (
            <img
              src={selectedCards[2].arcaneImage.imageSrc}
              alt={selectedCards[2].arcaneName}
              className="selected-card"
            />
          ) : (
            <div className="empty-slot">Selecciona una carta</div>
          )}
        </div>
      </div>

      {/* Botón reset */}
      {selectedCards.length > 0 && (
        <button onClick={handleReset} className="reset-btn">
          Reiniciar tirada
        </button>
      )}

       {selectedCards.length === 3 && (
  <div className="reading-meanings">
    <h2>Interpretación de la Tirada</h2>
    <div className="meanings-grid">
      {["Pasado", "Presente", "Futuro"].map((pos, index) => {
        const card = selectedCards[index];
        return (
          <div key={pos} className="meaning">
            <h3>{pos}</h3>
            <img
              src={card.arcaneImage.imageSrc}
              alt={card.arcaneName}
              className="meaning-img"
            />
            <h4>{card.arcaneName}</h4>
            <p><strong>Descripción:</strong> {card.arcaneDescription}</p>
            <p><strong>Diosa:</strong> {card.goddessName}</p>
            <img
              src={card.goddessImage.imageSrc}
              alt={card.goddessName}
              className="meaning-img goddess-img"
            />
            <p><em>{card.goddessDescription}</em></p>
          </div>
        );
      })}
    </div>
  </div>
)}

      {/* Cartas para elegir */}
      <h2>Selecciona tus cartas</h2>
      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card"
            onClick={() => handleSelectCard(card)}
          >
            <img
              src={cardBack}
              alt="Carta boca abajo"
              className="card-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;