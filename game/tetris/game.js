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
        //this test
        this.d = new dot(this, 0, 6);
        // start the game loop
        this.loop();
        // start the game
        this.startGame();

    }


    startGame() {
        setInterval(() => {
            this.d.fall();
        }, 1000);
    }
    listenKeyboard() {
        document.addEventListener('keydown', (event) => {
            switch (event.code) {
                case "ArrowLeft":
                    this.d.moveLeft();
                    break;
                case "ArrowRight":
                    this.d.moveRight();
                    break;
                case "ArrowDown":
                    break;
                case "ArrowUp":
                    break;
            }
        })

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
        this.b.draw()
        this.d.draw();

    }
}
var g = new game();