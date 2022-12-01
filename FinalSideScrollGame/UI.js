export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 30;
    this.fontFamily = 'Helvetica';
    this.livesImage = lives;
  }
  draw(context){
    context.font = this.fontSize + 'px '+ this.fontFamily;
    context.textAlign = 'left';
    context.fillStyle = this.game.fontColor;
    //score
    context.fillText('Score: ' + this.game.score, 20, 50);
    //timer
    context.font = this.fontSize = this.fontSize * 0.8 + 'px ' + this.fontFamily;
    context.fillText('Time: ' + Math.floor(this.game.time/1000), 20, 80);
    //lives
    for (let i = 0; i < this.game.lives; i++){

      context.drawImage(this.livesImage, 30 * i, 95, 25, 20);
    }
    //game over message
    if (this.game.gameOver) {
      context.textAlign = 'center';
      context.font = this.fontSize * 2 + 'px ' + this.fontFamily;
      context.fillText('Congratulations', this.game.width * 0.5, this.game.height * 0.5);
    }
  }
}