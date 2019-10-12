class board {

    constructor(game) {
        this.game = game;
        this.data = [
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
        ];
    }
    isEmptyCell(row, col) {
        return this.data[row][col] == _;
    }
    isRowFull(row) {
        let full = true;
        for (let col = 0; col < NUM_COL; col++) {
            if (this.isEmptyCell(row, col)) {
                return false;
            }
        }
        return full;
    }
    checkFullRow() {
        for (let row = NUM_ROWS; row >= 0; row--) {
            if (this.isRowFull(row)) {
                this.clearRow(row);
            }

        }
    }
    clearRow(row) {
        this.data.splice(row, 1);
        this.data.unshift([_, _, _, _, _, _, _, _, _, _]);
        this.creatDots();

    }
    creatDots() {
        this.dots = [];
        for (let row = 0; row < NUM_ROWS; row++) {
            for (let col = 0; col < NUM_COL; col++) {
                if (this.data[row][col] == x) {
                    let newDot = new dot(this.game, row, col);
                    this.dots.push(newDot);
                }

            }

        }

    }
    draw() {
        this.creatDots();

        this.dots.forEach((dot) => dot.draw());

    }
}