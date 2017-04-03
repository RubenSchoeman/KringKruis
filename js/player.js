function Player(player_name){
    var wins = 0;

    this.getPlayerName = function() {
        return player_name;
    };

    this.setPlayerWin = function() {
            wins = wins + 1;
    };

    this.getPlayerWin = function() {
        return wins;
    };
}
