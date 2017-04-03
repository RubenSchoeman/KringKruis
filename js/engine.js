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
        row_One_P1_Win = 0;
        row_Two_P1_Win = 0;
        row_Three_P1_Win = 0;
        column_One_P1_Win = 0;
        column_Two_P1_Win = 0;
        column_Three_P1_Win = 0;
        cross_One_P1_Win = 0;
        cross_Two_P1_Win = 0;

        row_One_P2_Win = 0;
        row_Two_P2_Win = 0;
        row_Three_P2_Win = 0;
        column_One_P2_Win = 0;
        column_Two_P2_Win = 0;
        column_Three_P2_Win = 0;
        cross_One_P2_Win = 0;
        cross_Two_P2_Win = 0;

        var cell_length = mainGrid.getInfo().length;

        mainGrid.setPlayerTurn();

        for (var i = 0; i < cell_length; i++) {
            mainGrid.getCell(i).clickedby = null;
            mainGrid.getCell(i).clicked = false;
            $("#" + i).html("");
            $("#" + i).css("background-color", "#efefef");

        }
    };

    this.setWinNr = function() {
        var one = mainGrid.getPlayerData(0).getPlayerWin();
        var two = mainGrid.getPlayerData(1).getPlayerWin();

        $("#oneWin").html(one);
        $("#twoWin").html(two);
    };

//----------------------------------------------------------------------------//
//  This function is called when clickedCell function callback is passed through
//  to winCondition switch function.
//
//  Checks all rows if player one or two has reached win condition.
//----------------------------------------------------------------------------//

    this.rowWin = function(id) {
        var cell_id = "cell" + id;

        if (array[id] === "playerOne"){
            if (cell_id === "cell0" || cell_id === "cell1" || cell_id === "cell2") {
                row_One_P1_Win = row_One_P1_Win + 1;
            } else {
                if (cell_id === "cell3" || cell_id === "cell4" || cell_id === "cell5") {
                    row_Two_P1_Win = row_Two_P1_Win + 1;
                } else {
                    if (cell_id === "cell6" || cell_id === "cell7" || cell_id === "cell8") {
                        row_Three_P1_Win = row_Three_P1_Win + 1;
                    }
                }
            }

            if (row_One_P1_Win === 3) {
                for (var i = 0; i < 3; i++) {
                    $('#' + i).css('background-color', "#004cff");
                }
                mainGrid.getPlayerData(0).setPlayerWin();
            }

            if (row_Two_P1_Win === 3) {
                for (var i = 3; i < 6; i++) {
                    $('#' + i).css('background-color', "#004cff");
                }
                mainGrid.getPlayerData(0).setPlayerWin();
            }

            if (row_Three_P1_Win === 3) {
                for (var i = 6; i < 9; i++) {
                    $('#' + i).css('background-color', "#004cff");
                }
                mainGrid.getPlayerData(0).setPlayerWin();
            }

        } else {
            if (array[id] === "playerTwo"){
                if (cell_id === "cell0" || cell_id === "cell1" || cell_id === "cell2") {
                    row_One_P2_Win = row_One_P2_Win + 1;
                } else {
                    if (cell_id === "cell3" || cell_id === "cell4" || cell_id === "cell5") {
                        row_Two_P2_Win = row_Two_P2_Win + 1;
                    } else {
                        if (cell_id === "cell6" || cell_id === "cell7" || cell_id === "cell8") {
                            row_Three_P2_Win = row_Three_P2_Win + 1;
                        }
                    }
                }

                if (row_One_P2_Win === 3) {
                    for (var i = 0; i < 3; i++) {
                        $('#' + i).css('background-color', "#ff0000");
                    }
                    mainGrid.getPlayerData(1).setPlayerWin();
                }

                if (row_Two_P2_Win === 3) {
                    for (var i = 3; i < 6; i++) {
                        $('#' + i).css('background-color', "#ff0000");
                    }
                    mainGrid.getPlayerData(1).setPlayerWin();
                }

                if (row_Three_P2_Win === 3) {
                    for (var i = 6; i < 9; i++) {
                        $('#' + i).css('background-color', "#ff0000");
                    }
                    mainGrid.getPlayerData(1).setPlayerWin();
                }
            }
        }
    };

//----------------------------------------------------------------------------//
//  This function is called when clickedCell function callback is passed through
//  to winCondition switch function.
//
//  Checks all columns if player one or two has reached win condition.
//----------------------------------------------------------------------------//

    this.columnWin = function(id) {
        var cell_id = "cell" + id;

        if (array[id] === "playerOne"){
            if (cell_id === "cell0" || cell_id === "cell3" || cell_id === "cell6") {
                column_One_P1_Win = column_One_P1_Win + 1;
            } else {
                if (cell_id === "cell1" || cell_id === "cell4" || cell_id === "cell7") {
                    column_Two_P1_Win = column_Two_P1_Win + 1;
                } else {
                    if (cell_id === "cell2" || cell_id === "cell5" || cell_id === "cell8") {
                        column_Three_P1_Win = column_Three_P1_Win + 1;
                    }
                }
            }

            if (column_One_P1_Win === 3) {
                for (var i = 0; i < 7; i += 3) {
                    $('#' + i).css('background-color', "#004cff");
                }
                mainGrid.getPlayerData(0).setPlayerWin();
            }

            //if (column_One_P1_Win === 3) {
            //    $('#0').css('background-color', "#004cff");
            //    $('#3').css('background-color', "#004cff");
            //    $('#6').css('background-color', "#004cff");
            //    mainGrid.getPlayerData(0).setPlayerWin();
            //}

            if (column_Two_P1_Win === 3) {
                $('#1').css('background-color', "#004cff");
                $('#4').css('background-color', "#004cff");
                $('#7').css('background-color', "#004cff");
                mainGrid.getPlayerData(0).setPlayerWin();
            }

            if (column_Three_P1_Win === 3) {
                $('#2').css('background-color', "#004cff");
                $('#5').css('background-color', "#004cff");
                $('#8').css('background-color', "#004cff");
                mainGrid.getPlayerData(0).setPlayerWin();
            }
        } else {
            if (array[id] === "playerTwo"){
                if (cell_id === "cell0" || cell_id === "cell3" || cell_id === "cell6") {
                    column_One_P2_Win = column_One_P2_Win + 1;
                } else {
                    if (cell_id === "cell1" || cell_id === "cell4" || cell_id === "cell7") {
                        column_Two_P2_Win = column_Two_P2_Win + 1;
                    } else {
                        if (cell_id === "cell2" || cell_id === "cell5" || cell_id === "cell8") {
                            column_Three_P2_Win = column_Three_P2_Win + 1;
                        }
                    }
                }

                if (column_One_P2_Win === 3) {
                    $('#0').css('background-color', "#ff0000");
                    $('#3').css('background-color', "#ff0000");
                    $('#6').css('background-color', "#ff0000");
                    mainGrid.getPlayerData(1).setPlayerWin();
                }

                if (column_Two_P2_Win === 3) {
                    $('#1').css('background-color', "#ff0000");
                    $('#4').css('background-color', "#ff0000");
                    $('#7').css('background-color', "#ff0000");
                    mainGrid.getPlayerData(1).setPlayerWin();
                }

                if (column_Three_P2_Win === 3) {
                    $('#2').css('background-color', "#ff0000");
                    $('#5').css('background-color', "#ff0000");
                    $('#8').css('background-color', "#ff0000");
                    mainGrid.getPlayerData(1).setPlayerWin();
                }
            }
        }
    };

//----------------------------------------------------------------------------//
//  This function is called when clickedCell function callback is passed through
//  to winCondition switch function.
//
//  Checks all crosses if player one or two has reached win condition.
//----------------------------------------------------------------------------//

    this.crossWin = function(id) {
        var cell_id = "cell" + id;

        if (array[id] === "playerOne"){
            if (cell_id === "cell0" || cell_id === "cell4" || cell_id === "cell8") {
                if(cell_id === "cell4"){
                    cross_Two_P1_Win = cross_Two_P1_Win + 1;
                }
                cross_One_P1_Win = cross_One_P1_Win + 1;
            } else {
                if (cell_id === "cell2" || cell_id === "cell4" || cell_id === "cell6") {
                    cross_Two_P1_Win = cross_Two_P1_Win + 1;
                }
            }

            if (cross_One_P1_Win === 3) {
                $('#0').css('background-color', "#004cff");
                $('#4').css('background-color', "#004cff");
                $('#8').css('background-color', "#004cff");
                mainGrid.getPlayerData(0).setPlayerWin();
            }

            if (cross_Two_P1_Win === 3) {
                $('#2').css('background-color', "#004cff");
                $('#4').css('background-color', "#004cff");
                $('#6').css('background-color', "#004cff");
                mainGrid.getPlayerData(0).setPlayerWin();
            }
        } else {
            if (array[id] === "playerTwo"){
                if (cell_id === "cell0" || cell_id === "cell4" || cell_id === "cell8") {
                    if(cell_id === "cell4"){
                        cross_Two_P2_Win = cross_Two_P2_Win + 1;
                    }
                    cross_One_P2_Win = cross_One_P2_Win + 1;
                } else {
                    if (cell_id === "cell2" || cell_id === "cell4" || cell_id === "cell6") {
                        cross_Two_P2_Win = cross_Two_P2_Win + 1;
                    }
                }

                if (cross_One_P2_Win === 3) {
                    $('#0').css('background-color', "#ff0000");
                    $('#4').css('background-color', "#ff0000");
                    $('#8').css('background-color', "#ff0000");
                    mainGrid.getPlayerData(1).setPlayerWin();
                }

                if (cross_Two_P2_Win === 3) {
                    $('#2').css('background-color', "#ff0000");
                    $('#4').css('background-color', "#ff0000");
                    $('#6').css('background-color', "#ff0000");
                    mainGrid.getPlayerData(1).setPlayerWin();
                }
            }
        }
    };

//----------------------------------------------------------------------------//
//  This function is called when clickedCell function is called in main.js.
//  A callback is passed through to winCondition to determine which case
//  in the switch should be called.
//
//  Checks all columns if player one or two has reached win condition.
//----------------------------------------------------------------------------//

    this.winCondition = function(id) {
        switch (id) {
            case 0:
                array = mainGrid.getClickedBy();
                _engine.rowWin(id);
                _engine.columnWin(id);
                _engine.crossWin(id);
                break;

            case 1:
                array = mainGrid.getClickedBy();
                _engine.rowWin(id);
                _engine.columnWin(id);
                break;

            case 2:
                array = mainGrid.getClickedBy();
                _engine.columnWin(id);
                _engine.rowWin(id);
                _engine.crossWin(id);
                break;

            case 3:
                array = mainGrid.getClickedBy();
                _engine.rowWin(id);
                _engine.columnWin(id);
                break;

            case 4:
                array = mainGrid.getClickedBy();
                _engine.columnWin(id);
                _engine.rowWin(id);
                _engine.crossWin(id);
                break;

            case 5:
                array = mainGrid.getClickedBy();
                _engine.columnWin(id);
                _engine.rowWin(id);
                break;

            case 6:
                array = mainGrid.getClickedBy();
                _engine.rowWin(id);
                _engine.crossWin(id);
                _engine.columnWin(id);
                break;

            case 7:
                array = mainGrid.getClickedBy();
                _engine.columnWin(id);
                _engine.rowWin(id);
                break;

            case 8:
                array = mainGrid.getClickedBy();
                _engine.columnWin(id);
                _engine.rowWin(id);
                _engine.crossWin(id);
                break;

            default:

        }
    };
}
