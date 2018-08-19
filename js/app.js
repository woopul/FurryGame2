class Furry {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.direction = 'right';
    }

    getX() {
        return this.x
    }

    setX(x) {
        this.x = x;
    }

    getY() {
        return this.x
    }

    setY(y) {
        this.y = y;
    }

}

class Coin {
    constructor() {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }
}

class Game {
    constructor() {
        this.board = $('#board div');
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        this.ticker = setInterval(this.moveFurry, 250);
        self = this;
        $(document).on('keypress')
    }

    index(x, y) {
        return x + (y * 10);
    }

    showFurry() {
        $(this.board[this.index(this.furry.x, this.furry.y)]).addClass('furry');
    }

    showCoin() {
        $(this.board[this.index(this.coin.x, this.coin.y)]).addClass('coin');
    }

    hideVisibleFurry() {
        $('.furry').removeClass('furry')
    }

    moveFurry() {
        self.hideVisibleFurry();
        console.log(self.furry);
        let direction = self.furry.direction;

        switch (direction) {
            case "up":
                self.furry.y--;
                break;
            case "down":
                self.furry.y++;
                break;
            case "left":
                self.furry.x--;
                break;
            case "right":
                self.furry.x++;
                break;
        }
        self.showFurry();
    }


}

const game = new Game();
game.showFurry();
game.showCoin()