function MainGrid() {

    var _maingrid = this;
    var player_turn = 0;
    var symbol = "O";

    var cell = [];
    var players = [
        new Player(0),
        new Player(1)
    ];

//----------------------------------------------------------------------------//
//  In main.js this function is called to build the array that that is used
//  to check win conditions and to check if cell has been clicked.
//----------------------------------------------------------------------------//
    this.buildCellObjects = function () {

        for(var i = 0; i < 9; i++){
            cell.push({
                clicked: false,
                clickedby: null,
                id: i
            });
        }
    };

//----------------------------------------------------------------------------//
//  In main.js this function is called to build the playing grid.
//----------------------------------------------------------------------------//
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
        $(element_id).html(html.join('\n'));
    };

    this.getInfo = function() {
        return cell;
    };

    this.getPlayerOne = function () {
        player_turn = 0;
        return player_turn;
    };

    this.getClickedBy = function() {
        var cilckedby_array = [];

        for (var i = 0; i < 9; i++) {
            cilckedby_array.push(_maingrid.getCell(i).clickedby);
        }
        return cilckedby_array;
    };

    this.getPlayerTwo = function () {
        player_turn = 1;
        return player_turn;
    };

    this.setPlayerTurn = function() {
        player_turn = 0;
    };

    this.getCell = function(index) {
        return cell[index];
    };

    this.getCellClicked = function(index) {
        return cell[index].clicked;
    };

    this.getPlayerData = function(index) {
        return players[index];
    };


//----------------------------------------------------------------------------//
//  In main.js this function is called to handle the clicks from players on grid.
//  The callback is sent to engine.js through main.js to handle game logic.
//----------------------------------------------------------------------------//

    this.clickedCell = function (callback){
        $(".btn").on("click", function(event){
            event.preventDefault();

            var id = parseInt($(this).attr('id'));
            if (!cell[id].clicked) {
                var name = players[player_turn].getPlayerName();
                var cell_Nr = cell[id].id;

                cell[id].clicked = true;

                if (name === 'playerOne') {
                    symbol = "O";
                    cell[id].clickedby = players[player_turn].getPlayerName();
                    $("#" + id).html("0");
                    player_turn = _maingrid.getPlayerTwo();
                } else {

                    if (name === 'playerTwo') {
                        symbol = "X";
                        cell[id].clickedby = players[player_turn].getPlayerName();
                        $("#" + id).html("X");
                        player_turn = _maingrid.getPlayerOne();
                    }
                }

                callback(cell_Nr);
            }
        });
    };
}
