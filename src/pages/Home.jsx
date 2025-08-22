import { useEffect, useState } from "react";
import { getAllCards } from "../services/TarotServices";
import './Home.css';
import { Link } from "react-router-dom"
import cardBack from "../assets/card-back.jpg"

const Home = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
            const data = await getAllCards();
            console.log(data);
            setCards(data);
            } catch (error) {
                console.error("Error fetching cards:", error);
            }
        };

        fetchCards();
    }, []);

  return (
    <div className="home-container">
      <h1>Descubre qué se esconde detrás de las cartas </h1>
      <div className="card-grid">
        {cards.map((card) => (
          <Link key={card.id} to={`/card/${card.id}`} className="card">
            <img 
              src="../src/assets/card-back.jpg"  
              alt={card.arcaneName}
              className="card-img"
            />
          </Link>
      ))}
    </div>
    </div>
  );
};

export default Home;