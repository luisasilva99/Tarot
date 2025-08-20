import { useEffect, useState } from "react";
import { getAllCards } from "../services/TarotServices";
import './Home.css';
import { Link } from "react-router-dom"

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
    <>
    <h1>Página de inicio - Tarot STEM</h1>
    <div className="card-grid">
        {cards.map((card) => (
         <Link key={card.id} to={`/card/${card.id}`} className="card">
            <img 
              src={card.arcaneImage.imageSrc} 
              alt={card.arcaneName} 
              className="card-img" 
            />
            <h3>{card.arcaneName}</h3>
          </Link>
      ))}
    </div>
    </>
  );
};

export default Home;