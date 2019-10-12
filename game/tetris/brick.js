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
        // data for creat the brick
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

    // check brick can move left
    canMoveLeft() {
            let thisBrickCanMoveLeft = true;
            this.dots.forEach((dot) => {
                if (!dot.canLeft()) {
                    thisBrickCanMoveLeft = false;
                }
            });
            return thisBrickCanMoveLeft;
        }
        //move brick to left
    moveLeft() {
            if (this.canMoveLeft()) {
                this.col--;
                this.dots.forEach((dot) => {
                    dot.moveLeft()
                });
            }

        }
        //check brick can move right
    canMoveRight() {
            let thisBrickCanMoveRight = true;
            this.dots.forEach((dot) => {
                if (!dot.canRight()) {
                    thisBrickCanMoveRight = false;
                }
            });
            return thisBrickCanMoveRight;
        }
        //move brick to right
    moveRight() {
            if (this.canMoveRight()) {
                this.col++;
                this.dots.forEach((dot) => {
                    dot.moveRight()
                });
            }

        }
        // check brick can fall
    canFall() {
            let thisBrickCanFall = true;
            this.dots.forEach((dot) => {
                if (!dot.canFall()) {
                    thisBrickCanFall = false;
                }
            });
            return thisBrickCanFall;
        }
        // how can brick fall
    fall() {
            if (this.canFall()) {
                this.row++;
                this.dots.forEach((dot) => {
                    dot.fall()
                });
            } else {
                this.game.creatNewBrick();
                this.appendToBoard();
            }

        }
        //move brick down faster
    moveDown() {
            while (this.canFall()) {
                this.fall();
            }
        }
        // add brick on the board
    appendToBoard() {

            this.dots.forEach((dot) => {
                this.game.b.data[dot.row][dot.col] = x;
            });
        }
        //rotate the brick
    rotate() {
        let newData = [];
        for (let col = 0; col < this.data[0].length; col++) {
            let newRow = [];
            for (let row = this.data.length - 1; row >= 0; row--) {
                newRow.push(this.data[row][col]);
            }
            newData.push(newRow);
            console.log(this.newRow);
        }
        // check new data valid
        // let isNewDataValid = true;
        // for (let newRow = 0; newRow < this.data.length; newRow++) {
        //     for (let newCol = 0; newCol < newData[0].length; newCol++) {
        //         if (newData[newRow][newCol] == x && !this.game.b.isEmptyCell(newRow, newCol)) {
        //             isNewDataValid = false;
        //         }
        //     }
        // }
        // if (isNewDataValid) {

        this.data = newData;
        this.createDots();

        // }




    }
    createDots() {
        this.dots = [];
        for (let row = 0; row < this.data.length; row++) {
            for (let col = 0; col < this.data[0].length; col++) {
                if (this.data[row][col] == x) {
                    let newDot = new dot(this.game, row + this.row, col + this.col);
                    this.dots.push(newDot);
                }
            }

        }



    }
    draw() {
        this.dots.forEach((dot) => dot.draw());
    }
}