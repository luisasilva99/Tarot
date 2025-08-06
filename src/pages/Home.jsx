import { useEffect, useState } from "react";
import { getAllCards } from "../services/TarotServices";
import './Home.css'

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
        <div key={card.id} className="card">
            <img src={card.arcaneImage.imageSrc} alt={card.arcaneName} className="card-img"/>
            <h3>{card.arcaneName}</h3>
            <p>{card.arcaneDescription}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Home;