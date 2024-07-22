const suits = ['Diamond', 'Spade', 'Club', 'Hearts']
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

export const deckOfCardsMethod = () => {
        let deckOfCards = []
        for(let suit of suits) {
                for(let rank of ranks){
                        deckOfCards.push({suit, rank})
                }
        }
        return deckOfCards
}

console.log("deckOfCardsMethod", deckOfCardsMethod())

export const shuffleCards = (deckCards) => {
        for (let i = deckCards.length - 1; i > 0; i--) {
                let x = Math.floor(Math.random() * (i + 1));
                [deckCards[i], deckCards[x]] = [deckCards[x], deckCards[i]];
        }
        return deckCards

}