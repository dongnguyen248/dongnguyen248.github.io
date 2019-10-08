class dot {
    constructor(game, row, col) {
        this.game = game;
        this.size = 20;
        this.row = row;
        this.col = col;
    }
    moveLeft() {

    }
    fall() {

    }
    update() {

    }
    draw() {
        let x = this.col * this.size;
        let y = this.row * this.size;
        this.game.contex.fillStyle = '#ff0000';
        this.game.contex.fillRect(x, y, this.size, this.size);

    }
}