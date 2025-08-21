import { useState, useEffect } from "react";
import { getAllCards } from "../services/TarotServices";
import "./Reading.css";

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
      <h1>Lectura de Cartas: Pasado, Presente y Futuro</h1>

      {selectedCards.length < 3 && (
        <p>Selecciona {3 - selectedCards.length} carta(s) más</p>
      )}

      {/* 🔹 Grid de cartas boca abajo */}
      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${selectedCards.find(c => c.id === card.id) ? "selected" : ""}`}
            onClick={() => handleSelectCard(card)}
          >
            <img src="../src/assets/card-back.jpg" alt="Carta boca abajo" />
          </div>
        ))}
      </div>

      {/* 🔹 Resultado */}
      {selectedCards.length === 3 && (
        <div className="reading-result">
          <h2>Tu tirada</h2>
          <div className="positions">
            <div>
              <h3>Pasado</h3>
              <img src={selectedCards[0].arcaneImage.imageSrc} alt={selectedCards[0].arcaneName} />
              <p><strong>{selectedCards[0].arcaneName}</strong></p>
              <p>{selectedCards[0].arcaneDescription}</p>
              <p><strong>Diosa:</strong> {selectedCards[0].goddessName}</p>
            </div>
            <div>
              <h3>Presente</h3>
              <img src={selectedCards[1].arcaneImage.imageSrc} alt={selectedCards[1].arcaneName} />
              <p><strong>{selectedCards[1].arcaneName}</strong></p>
              <p>{selectedCards[1].arcaneDescription}</p>
              <p><strong>Diosa:</strong> {selectedCards[1].goddessName}</p>
            </div>
            <div>
              <h3>Futuro</h3>
              <img src={selectedCards[2].arcaneImage.imageSrc} alt={selectedCards[2].arcaneName} />
              <p><strong>{selectedCards[2].arcaneName}</strong></p>
              <p>{selectedCards[2].arcaneDescription}</p>
              <p><strong>Diosa:</strong> {selectedCards[2].goddessName}</p>
            </div>
          </div>
          <button onClick={handleReset}>🔄 Reiniciar tirada</button>
        </div>
      )}
    </div>
  );
};

export default Reading;