class dot {
    constructor(game, row, col) {
        this.game = game;
        this.size = 20;
        this.row = row;
        this.col = col;
    }
    moveLeft() {

    }
    moveRight() {

    }
    hitBottom() {
        return this.row == NUM_ROWs - 1;

    }
    canFall() {
        if (this.hitBottom) return false;
        if (!this.game.board.isEmtyCell(this.row + 1, this.col)) {
            return false;
        }
        return true;
    }
    fall() {
        if (this.canFall) {
            this.row++;
        }

    }
    update() {

    }
    draw() {
        let x = this.col * this.size;
        let y = this.row * this.size;
        this.game.context.fillStyle = '#ff0000';
        this.game.context.fillRect(x + 1, y + 1, this.size - 2, this.size);

    }
}