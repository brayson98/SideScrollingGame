class Layer {
  constructor(game, width, height, speedModifer, image){
    this.game = game;
    this.width = width;
    this.height = height;
    this.speedModifer = speedModifer;
    this.image = image;
    this.x = 0;
    this.y = 0;


  }
  update() { 
    if (this.x < - this.width) this.x = 0;
    else this.x -= this.game.speed * this.speedModifer;

  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
  }
}

export class Background {
  constructor(game){
    this.game = game;
    this.width = 1667;
    this.height = 500;
    this.layerImage1 = layer1;
    this.layerImage2 = layer2;
    this.layerImage3 = layer3;
    this.layerImage4 = layer4;
    this.layerImage5 = layer5;
    this.layer1 = new Layer(this.game, this.width, this.height, 0, this.layerImage1);
    this.layer2 = new Layer(this.game, this.width, this.height, 0.2, this.layerImage2);
    this.layer3 = new Layer(this.game, this.width, this.height, 0.4, this.layerImage3);
    this.layer4 = new Layer(this.game, this.width, this.height, 0.8, this.layerImage4);
    this.layer5 = new Layer(this.game, this.width, this.height, 1, this.layerImage5);
    this.backgroundLayers = [this.layer1, this.layer2, this.layer3, this.layer4, this.layer5];
  }
  update(){
    this.backgroundLayers.forEach(layer => {
      layer.update();
    })
  }
    draw(context){
      this.backgroundLayers.forEach(layer => {
        layer.draw(context);
      })
  }
}