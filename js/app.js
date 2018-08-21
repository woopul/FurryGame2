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
        return this.y;
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

        this.showFurry();
        this.showCoin();
        // this.showFurry();

        this.score = 0;
        this.ticker = setInterval(this.moveFurry, 200);
        self = this;
        document.addEventListener('keydown', this.turnFurry);

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
        $('.furry').removeClass('furry');
    }

    getFurryIndex() {
        return this.index(this.furry.x, this.furry.y);
    }

    getCoinIndex() {
        return this.index(this.coin.x, this.coin.y);
    }

    moveFurry() {
        // debugger;

        self.hideVisibleFurry();

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
        self.checkColisions();
        self.showFurry();
    }

    turnFurry(event) {
        let key = event.which;
        console.log(key);
        switch (key) {
            case 37:
                self.furry.direction = 'left';
                break;
            case 38:
                self.furry.direction = 'up';
                break;
            case 39:
                self.furry.direction = 'right';
                break;
            case 40:
                self.furry.direction = 'down';
                break;
        }
    }

    checkColisions() {
        console.log(this.furry.x, this.furry.y);
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            this.hideVisibleFurry();
            clearInterval(this.ticker);
            $('#board').addClass('hide');
            $('#over').removeClass('hide');
        }

        if (this.getFurryIndex() === this.getCoinIndex()) {
            $('.coin').removeClass('coin');

            this.score++;
            $('#score strong').text(this.score);

            this.coin = new Coin();
            this.showCoin();
        }
    }
}


const game = new Game();
