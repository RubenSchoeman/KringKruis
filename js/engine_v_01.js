function Engine() {

    var _engine = this;

    var row_One_P1_Win = 0;
    var row_Two_P1_Win = 0;
    var row_Three_P1_Win = 0;
    var column_One_P1_Win = 0;
    var column_Two_P1_Win = 0;
    var column_Three_P1_Win = 0;
    var cross_One_P1_Win = 0;
    var cross_Two_P1_Win = 0;

    var row_One_P2_Win = 0;
    var row_Two_P2_Win = 0;
    var row_Three_P2_Win = 0;
    var column_One_P2_Win = 0;
    var column_Two_P2_Win = 0;
    var column_Three_P2_Win = 0;
    var cross_One_P2_Win = 0;
    var cross_Two_P2_Win = 0;

    var array = [];
//----------------------------------------------------------------------------//
//  In main.js this function is called when reset button is clicked.
//----------------------------------------------------------------------------//
    this.resetGrid = function() {
        var cell_length = MainGrid.getInfo().length;

        for (var i = 0; i < cell_length; i++) {
            MainGrid.getCell(i).clickedby = null;
            $("#" + i).html("");
        }
    };

    this.rowWin = function(id) {
        var id_Add = id + 3;

        for (var i = id; i < id_Add; i++) {

            if (array[i] === "playerOne"){
                if (id === 0 || 1 || 2) {
                    row_One_P1_Win = row_One_P1_Win + 1;
                } else {
                    if (id === 3 || 4 || 5) {
                        row_Two_P1_Win = row_Two_P1_Win + 1;
                    } else {
                        if (id === 6 || 7 || 8) {
                            row_Three_P1_Win = row_Three_P1_Win + 1;
                        }
                    }
                }

                if (row_One_P1_Win || row_Two_P1_Win || row_Three_P1_Win === 3){
                    console.log("player one wins");
                }
            } else {
                if (array[i] === "playerTwo"){
                    if (id === 0 || 1 || 2) {
                        row_One_P2_Win = row_One_P2_Win + 1;
                    } else {
                        if (id === 3 || 4 || 5) {
                            row_Two_P2_Win = row_Two_P2_Win + 1;
                        } else {
                            if (id === 6 || 7 || 8) {
                                row_Three_P2_Win = row_Three_P2_Win + 1;
                            }
                        }
                    }

                    if (row_One_P2_Win || row_Two_P2_Win || row_Three_P2_Win === 3){
                        console.log("player two wins");
                    }
                }
            }
        }
    };

/*
    this.rowOneWin = function(id) {
        var id_Add = id + 3;

        for (var i = id; i < id_Add; i++) {

            if (array[i] === "playerOne"){
                row_One_P1_Win = row_One_P1_Win + 1;

                if (row_One_P1_Win === 3){
                    console.log("player one wins");
                }
            } else {
                if (array[i] === "playerTwo"){
                    row_One_P2_Win = row_One_P2_Win + 1;

                    if (row_One_P2_Win === 3){
                        console.log("player two wins");
                    }
                }
            }
        }
    };


    this.rowTwoWin = function(id) {
        var id_Add = id + 3;

        for (var i = id; i < id_Add; i++) {

            if (array[i] === "playerOne"){
                row_Two_P1_Win = row_Two_P1_Win + 1;

                if (row_Two_P1_Win === 3){
                    console.log("player one wins");
                }
            } else {
                if (array[i] === "playerTwo"){
                    row_Two_P2_Win = row_Two_P2_Win + 1;

                    if (row_Two_P2_Win === 3){
                        console.log("player two wins");
                    }
                }
            }
        }
    };

    this.rowThreeWin = function(id) {
        var id_Add = id + 3;

        for (var i = id; i < id_Add; i++) {

            if (array[i] === "playerOne"){
                row_Three_P1_Win = row_Three_P1_Win + 1;

                if (row_Three_P1_Win === 3){
                    console.log("player one wins");
                }
            } else {
                if (array[i] === "playerTwo"){
                    row_Three_P2_Win = row_Three_P2_Win + 1;

                    if (row_Three_P2_Win === 3){
                        console.log("player two wins");
                    }
                }
            }
        }
    };

    this.columnOneWin = function(id) {
        var id_Add = id + 7;

        for (var i = id; i < id_Add; i+=3) {

            if (array[i] === "playerOne"){
                column_One_P1_Win = column_One_P1_Win + 1;

                if (column_One_P1_Win === 3){
                    console.log("player one wins");
                }
            }
        }
    };

    this.columnTwoWin = function(id) {
        var id_Add = id + 7;

        for (var i = id; i < id_Add; i+=3) {

            if (array[i] === "playerOne"){
                column_Two_P1_Win = column_Two_P1_Win + 1;

                if (column_Two_P1_Win === 3){
                    console.log("player one wins");
                }
            }
        }
    };

    this.columnThreeWin = function(id) {
        var id_Add = id + 7;

        for (var i = id; i < id_Add; i+=3) {

            if (array[i] === "playerOne"){
                column_Three_P1_Win = column_Three_P1_Win + 1;

                if (column_Three_P1_Win === 3){
                    console.log("player one wins");
                }
            }
        }
    };

    this.crossOneWin = function(id) {
        var id_Add = id + 5;

        for (var i = id; i < id_Add; i+=4) {

            if (array[i] === "playerOne"){
                cross_One_P1_Win = cross_One_P1_Win + 1;

                if (cross_One_P1_Win === 3){
                    console.log("player one wins");
                }
            }
        }
    };

    this.crossTwoWin = function(id) {
        var id_Add = id + 3;

        for (var i = id; i < id_Add; i+=2) {

            if (array[i] === "playerOne"){
                cross_Two_P1_Win = cross_Two_P1_Win + 1;

                if (cross_Two_P1_Win === 3){
                    console.log("player one wins");
                }
            }
        }
    };
*/

    this.winCondition = function(id) {
        switch (id) {
            case 0:
                array = MainGrid.getClickedBy();
                _engine.rowOneWin(id);
                _engine.columnOneWin(id);
                _engine.crossOneWin(id);
                break;

            case 1:
                array = MainGrid.getClickedBy();
                _engine.rowOneWin(id);
                _engine.columnTwoWin(id);
                break;

            case 2:
                array = MainGrid.getClickedBy();
                _engine.columnThreeWin(id);
                _engine.rowOneWin(id);
                _engine.crossTwoWin(id);
                break;

            case 3:
                array = MainGrid.getClickedBy();
                _engine.rowTwoWin(id);
                _engine.columnOneWin(id);
                break;

            case 4:
                array = MainGrid.getClickedBy();
                _engine.columnTwoWin(id);
                _engine.rowTwoWin(id);
                _engine.crossOneWin(id);
                _engine.crossTwoWin(id);
                break;

            case 5:
                array = MainGrid.getClickedBy();
                _engine.columnThreeWin(id);
                _engine.rowTwoWin(id);
                break;

            case 6:
                array = MainGrid.getClickedBy();
                _engine.rowThreeWin(id);
                _engine.crossTwoWin(id);
                _engine.columnOneWin(id);
                break;

            case 7:
                array = MainGrid.getClickedBy();
                _engine.columnTwoWin(id);
                _engine.rowThreeWin(id);
                break;

            case 8:
                array = MainGrid.getClickedBy();
                _engine.columnThreeWin(id);
                _engine.rowThreeWin(id);
                _engine.crossOneWin(id);
                break;

            default:

        }
    };
}
