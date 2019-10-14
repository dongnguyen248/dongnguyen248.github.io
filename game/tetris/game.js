class game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();


    }
    init() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;

        //creat a new board
        this.b = new board(this);
        //get keyboard
        this.listenKeyboard();
        // creat the brick
        this.brick = new brick(this);

        // start the game
        this.startGame();
        this.pauseGame();
        // start the game loop
        this.loop();
    }


    startGame() {
        setInterval(() => {
            this.brick.fall();
        }, 500);
    }
    pauseGame() {
        this.brick.stopFall();
    }
    creatNewBrick() {
        this.brick = new brick(this);

    }
    listenKeyboard() {
        document.addEventListener('keydown', (event) => {
            switch (event.code) {
                case "ArrowLeft":
                    this.brick.moveLeft();
                    break;
                case "ArrowRight":
                    this.brick.moveRight();
                    break;
                case "ArrowDown":
                    this.brick.moveDown();
                    break;
                case "ArrowUp":
                    this.brick.rotate();
                    break;
            }
        })

    }
    creatBreack() {

    }
    loop() {
        // console.log('loop')
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 30);

    }
    update() {

    }
    clearScreen() {
        this.context.fillStyle = '#ffffff';
        this.context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    }
    draw() {
        this.clearScreen();
        this.b.draw();
        this.brick.draw();

    }
}
var g = new game();