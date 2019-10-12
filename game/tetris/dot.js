class dot {
    constructor(game, row, col) {
        this.game = game;
        this.size = 20;
        this.row = row;
        this.col = col;
    }
    hitLeft() {
        return this.col == 0;
    }
    canLeft() {
        if (this.hitLeft()) return false;
        if (!this.game.b.isEmptyCell(this.row, this.col - 1)) {
            return false;
        }
        return true;

    }
    moveLeft() {
        if (this.canLeft()) {
            this.col--;
        }
    }
    hitRight() {
        return this.col == NUM_COL - 1;
    }
    canRight() {
        if (this.hitRight()) return false;
        if (!this.game.b.isEmptyCell(this.row, this.col + 1)) {
            return false;
        }
        return true;

    }
    moveRight() {
        if (this.canRight()) {
            this.col++;
        }
    }
    hitBottom() {
        return this.row == NUM_ROWS - 1;

    }
    canFall() {
        if (this.hitBottom()) return false;
        if (!this.game.b.isEmptyCell(this.row + 1, this.col)) {
            return false;
        }
        return true;
    }
    fall() {
        if (this.canFall()) {
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