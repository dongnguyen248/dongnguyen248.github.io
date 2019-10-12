class brick {
    constructor(game) {
        this.game = game;
        this.dots = [];
        this.data = [];
        this.row = 0;
        this.col = 0;
        //creat data
        this.createData();
        this.createDots();
    }
    createData() {
        let baseData = [
            [x, x, x, x],
            [
                [x, x],
                [x, x]
            ],
            [
                [x, x, x],
                [_, x, _]
            ],
            [
                [_, x, x],
                [x, x, _]
            ],
            [
                [x, x, _],
                [_, x, x]
            ],
            [
                [x, _],
                [x, _],
                [x, x]
            ],
            [
                [_, x],
                [_, x],
                [x, x]

            ]
        ]
        let r = Math.floor(Math.random() * 6);
        this.data = baseData[r];


    }
    canFall() {
        let thisBrickCanFall = true;
        this.dots.forEach((dot) => {
            if (!dot.canFall()) {
                thisBrickCanFall = false;
            }
        });
        return thisBrickCanFall;
    }
    fall() {
        if (this.canFall()) {
            this.row++;
            this.dots.forEach((dot) => {
                dot.fall()
            });
        }

    }
    canMoveLeft() {
        let thisBrickCanMoveLeft = true;
        this.dots.forEach((dot) => {
            if (!dot.canLeft()) {
                thisBrickCanMoveLeft = false;
            }
        });
        return thisBrickCanMoveLeft;
    }
    moveLeft() {
        if (this.canMoveLeft()) {
            this.col--;
            this.dots.forEach((dot) => {
                dot.moveLeft()
            });
        }

    }
    canMoveRight() {
        let thisBrickCanMoveRight = true;
        this.dots.forEach((dot) => {
            if (!dot.canRight()) {
                thisBrickCanMoveRight = false;
            }
        });
        return thisBrickCanMoveRight;
    }
    moveRight() {
        if (this.canMoveRight()) {
            this.col++;
            this.dots.forEach((dot) => {
                dot.moveRight()
            });
        }

    }
    createDots() {
        this.dots = [];
        for (let row = 0; row < this.data.length; row++) {
            for (let col = 0; col < this.data[0].length; col++) {
                if (this.data[row][col] == x) {
                    let newDot = new dot(this.game, row, col);
                    this.dots.push(newDot);
                }
            }

        }


    }
    draw() {
        this.dots.forEach((dot) => dot.draw());
    }
}