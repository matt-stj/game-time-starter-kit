const ViewportHelper = require('./helpers/viewport-helper')

function ExpandGates(options, canvas){
  this.gate = options.gate
  this.x = (((this.gate.gateEnd + canvas.width) / 2) + 20 )
  this.y = (this.gate.y - this.gate.gateHeight/ 2) //top of gate
  this.width = options.width || 25
  this.height = options.height || 25
  this.action = 'expandGates'
  this.img = new Image();
  this.img.src = "../assets/saw.png";
  this.onScreen = true
}

ExpandGates.prototype.draw = function(ctx){
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}


ExpandGates.prototype.update = function(gameSpeed, canvas) {
  if (this.onScreen === false){
    console.log(this.gate.y, this.y)
    this.y = -500
  }
  else {
    this.y = (this.gate.y - this.gate.gateHeight)
  }
}

module.exports = ExpandGates;
