import { useEffect, useState } from "react";
import { deckOfCardsMethod, shuffleCards } from "../utils";

const DeckOfCards = () => {
  const deck = deckOfCardsMethod();
  const [deckCards, setDeckCards] = useState([]);
  
  const handleDrawCards = () => {
        const shuffledCards = shuffleCards(deck)
        const shuffledDeckOfCards = shuffledCards.slice(0, 5)

        console.log("shuffledDeckOfCards", shuffledDeckOfCards)

        setDeckCards(shuffledDeckOfCards)


  }



  return (
    <div>
      <h2>Deck of Cards</h2>
      <button onClick={handleDrawCards}>Draw Cards</button>

      <div style={{ display: "flex" }}>
        {selectedCards.map((card) => {
          return (
            <>
              <div
                style={{
                  height: "140px",
                  width: "180px",
                  border: "1px solid darkgray",
                  borderRadius: "8px",
                }}
              >
                <div>{card.suit}</div>
                <div>{card.rank}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DeckOfCards;
