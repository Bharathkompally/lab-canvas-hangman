class HangmanCanvas {
  constructor(secretWord) {
      this.context = document.getElementById('hangman').getContext('2d');
      this.secretWord = secretWord;
  }

  createBoard() {
      this.context.clearRect(0, 0, 1200, 800);
      this.drawLines();
  }

  writeHint(hint) {
      this.context.font = '40px sans-serif';
      this.context.fillText(`HINT  : ${hint}`, 200, 50);
  }

  drawLines() {
      let k = 180;
      for (let i = 0; i < this.secretWord.length; i++) {
          this.context.beginPath();
          k += 20;
          this.context.moveTo(k, 700);
          this.context.lineWidth = 5;
          k += 60;
          this.context.lineTo(k, 700);
          this.context.stroke();
      }
  }

  writeCorrectLetter(index) {
      const letter = this.secretWord[index];
      this.context.font = '30px monospace';
      const x = 220 + (20 + 60) * index;
      this.context.fillText(letter, x, 680);
  }

  writeWrongLetter(letter, errorsLeft) {
      let k = 700;  // extra space from left side 
      this.context.font = '30px monospace';
      k += (30 * (10 - errorsLeft));
      this.context.fillText(letter.toUpperCase(), k, 200);
  }

  drawHangman(errorsLeft) {
      switch (errorsLeft) {
          case 9:
              this.context.beginPath();
              this.context.moveTo(50, 700);
              this.context.lineTo(150, 700);
              this.context.stroke();
              break;
          case 8:
              this.context.beginPath();
              this.context.moveTo(50, 700);
              this.context.lineTo(100, 630);
              this.context.stroke();
              break;
          case 7:
              this.context.beginPath();
              this.context.moveTo(150, 700);
              this.context.lineTo(100, 630);
              this.context.stroke();
              break;
          case 6:
              this.context.beginPath();
              this.context.moveTo(100, 630);
              this.context.lineTo(100, 100);
              this.context.stroke();
              break;
          case 5:
              this.context.beginPath();
              this.context.moveTo(100, 100);
              this.context.lineTo(400, 100);
              this.context.stroke();
              break;
          case 4:
              this.context.beginPath();
              this.context.moveTo(400, 100);
              this.context.lineTo(400, 160);
              this.context.stroke();
              break;
          case 3:
              this.context.beginPath();
              this.context.arc(400, 210, 50, 0, Math.PI * 2);
              this.context.stroke();
              break;
          case 2:
              this.context.beginPath();
              this.context.moveTo(400, 260);
              this.context.lineTo(400, 300);
              this.context.stroke();
              break;
          case 1:
              this.context.beginPath();
              this.context.moveTo(400, 260);
              this.context.lineTo(400, 400);
              this.context.stroke();
              break;
          case 0:
              this.context.beginPath();
              this.context.moveTo(400, 400);
              this.context.lineTo(340, 500);
              this.context.stroke();
              break;
          default:
              this.context.beginPath();
              this.context.moveTo(400, 400);
              this.context.lineTo(460, 500);
              this.context.stroke();
      }
  }

  gameOver() {
      const over = new Image();
      over.src = "images/gameover.png";
      over.onload = () => {
          this.context.drawImage(over,50,50);
      };
  }

  winner() {
      const awesome = new Image();
      awesome.src = 'images/awesomee.png';
      awesome.onload = () => {
          this.context.drawImage(awesome,-70,10);
      };
  }
}
