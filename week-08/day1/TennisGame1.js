class TennisGame1{
  m_score1 = 0;
  m_score2 = 0;
  constructor(player1Name, player2Name) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }
  wonPoint(playerName){
    playerName === "player1" ? this.m_score1 += 1 : this.m_score2 += 1;
  }
  getScore(){
    if (this.m_score1 === this.m_score2 ) {
      if (this.m_score1<3){
        return evaluate(this.m_score1) + '-All'
      } else {
        return "Deuce";
      }
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      switch (this.m_score1 - this.m_score2) {
        case 1:
          return "Advantage player1";
        case -1:
          return "Advantage player2";
        case 2: case 3: case 4:
          return "Win for player1";
        case -2: case -3: case -4:
          return "Win for player2";
      }
    } else {
      return evaluate(this.m_score1) + '-' + evaluate(this.m_score2)
    }
  }
};
function evaluate(score) {
  switch (score) {
    case 0:
      return "Love";
    case 1:
      return "Fifteen";
    case 2:
      return "Thirty";
    case 3:
      return "Forty";
  }
};

if (typeof window === "undefined") {
  module.exports = TennisGame1;
}