const SPECIAL_RANK_SCORE = {
  A: 11,
  J: 10,
  Q: 10,
  K: 10,
};

function generateCardsInfo(cards = []) {
  const cardsInfo = cards.map((card) => {
    const suit = card.substring(0, 1);
    const rank = card.substring(1);
    return {
      suit,
      rank: !isNaN(rank) ? parseInt(rank) : rank,
    };
  });
  return cardsInfo;
}

function getHandScore(input = "") {
  const cards = input.toUpperCase().split(" ");
  const cardsInfo = generateCardsInfo(cards);

  const cardSuitScores = {
    H: 0,
    C: 0,
    D: 0,
    S: 0,
  };

  // calculate score for the same rank cards
  const firstCard = cardsInfo[0];
  const isSameRank = cardsInfo.every((card) => card.rank === firstCard.rank);
  if (isSameRank) {
    return firstCard.rank === "A" ? 35 : 32.5;
  }

  // calculate score for the normal cards
  for (const card of cardsInfo) {
    let score = 0;
    if (SPECIAL_RANK_SCORE.hasOwnProperty(card.rank)) {
      score = SPECIAL_RANK_SCORE[card.rank];
    } else {
      score = card.rank;
    }
    cardSuitScores[card.suit] += score;
  }

  // You can also use Math.max(...Object.values(cardSuitScores))
  let maxScore = 0;
  for (const suit in cardSuitScores) {
    if (cardSuitScores[suit] > maxScore) {
      maxScore = cardSuitScores[suit];
    }
  }

  return maxScore;
}

console.log(getHandScore("S8 S10 CA"));
