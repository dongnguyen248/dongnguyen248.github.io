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
    draw() {
        let dots = [];
        for (let row = 0; row < NUM_ROWS; row++) {
            for (let col = 0; col < NUM_COL; col++) {
                if (this.data[row][col] == x) {
                    let newDot = new dot(this.game, row, col);
                    dots.push(newDot);
                }
            }

        }
        dots.forEach((dot) => dot.draw());

    }
}