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
        //this test
        this.d = new dot(this, 5, 6);
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
    loop() {
        console.log('loop')
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 30);

    }
    update() {

    }
    draw() {
        this.b.draw()
        this.d.draw();

    }
}
var g = new game();