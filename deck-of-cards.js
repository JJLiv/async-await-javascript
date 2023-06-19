$(function() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';
  
    
    async function drawOneCard() {
      let data = await $.getJSON(`${baseURL}/new/draw/`);
      let value = data.cards[0].value;
      let suit = data.cards[0].suit;
      console.log(`${value} of ${suit}`);
    }
  
    
    async function drawCardDrawAgain() {
      let firstCardData = await $.getJSON(`${baseURL}/new/draw/`);
      let deckId = firstCardData.deck_id;
      let secondCardData = await $.getJSON(`${baseURL}/${deckId}/draw/`);
      [firstCardData, secondCardData].forEach(card => {
        let value = card.cards[0].value;
        let suit = card.cards[0].suit;
        console.log(`${value} of ${suit}`);
      });
    }
  
    
    async function start() {
      let $btn = $('button');
      let $cardArea = $('#card-area');
  
      let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
      $btn.show().on('click', async function() {
        let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
        let cardImage = cardData.cards[0].image;
       
        $cardArea.append(
          $('<img>', {
            src: cardImage
          })
        );
        if (cardData.remaining === 0) $btn.remove();
      });
    }
    start();
  });
  