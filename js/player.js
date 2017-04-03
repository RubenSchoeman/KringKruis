function Player(player_turn){
    var _player = this;
    var player_name = ['playerOne', 'playerTwo'];
    var wins = 0;

    this.getPlayerName = function() {
        return player_name[player_turn];
    };

    this.setPlayerWin = function() {
            wins = wins + 1;
    };

    this.getPlayerWin = function() {
        return wins;
    };
}
