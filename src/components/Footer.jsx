import React from "react";
import "../components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Mi Web de Tarot 🔮</p>
      <p>Proyecto colaborativo desarrollado por Luisa Silva con

        <a href="https://factoriaf5.org" target="_blank" rel="noopener noreferrer">
          {' '} Factoría F5.          
        </a>
        © [2025] Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;