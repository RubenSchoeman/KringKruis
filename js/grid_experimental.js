function MainGrid() {

    var _maingrid = this;
    var cell = [];
    var player_turn = 0;
    var symbol = "O";
    var id = 0;

    var players = [
        new Player(0),
        new Player(1)
    ];


    this.buildCellObjects = function () {

        for(var i = 0; i < 9; i++){
            cell.push({
                clicked: false,
                clickedby: null,
                inline: false,
            });
            //console.log(cell[i]);
        }
    };

    this.renderCells = function (element_id) {
        var html = [];
        var id = 0;
        for (var row = 0; row < 3; row++) {
            html.push('<div class="row">');
            for (var column = 0; column < 3; column++) {
                html.push('<button class="btn" id="'+ id +'" value=""></button>');
                id++;
            }
            html.push('</div>');
        }
        //console.log(html);
        $(element_id).html(html.join('\n'));

    };

    this.resetPlayerTurn = function () {
        player_turn = 0;
        return player_turn;
    };

    this.getInfo = function() {
        return cell;
    };

    this.getPlayerOne = function () {
        player_turn = 0;
        return player_turn;
    };


    this.getPlayerTwo = function () {
        player_turn = 1;
        return player_turn;
    };

    this.getCell = function(index) {
        return cell[index];
    };

    this.wasCellClicked = function(index) {
        cell[index].clicked = true;
    };


    this.clickedCell = function (callback){
        var name = players[player_turn].getPlayerName();
        //id = Engine.makeId();
        //console.log(id);
        if (name === 'playerOne') {
            symbol = "O";
            cell[id].clickedby = players[player_turn].getPlayerName();
            cell[id].clicked = true;
            $("#" + id).html("0");
            //console.log(name);
            player_turn = _maingrid.getPlayerTwo();
        } else {
            if (name === 'playerTwo') {
                symbol = "X";
                cell[id].clickedby = players[player_turn].getPlayerName();
                cell[id].clicked = true;
                $("#" + id).html("X");
                //console.log(name);
                player_turn = _maingrid.getPlayerOne();
            }
        }
        callback(symbol);
    };
}
