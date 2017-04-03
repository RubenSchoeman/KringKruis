var mainGrid = new MainGrid();
var engine = new Engine();

mainGrid.buildCellObjects();
mainGrid.renderCells("#grid");


mainGrid.clickedCell(function(cell_Nr) {
    engine.winCondition(cell_Nr);
    engine.setWinNr();
});

$(".reset").on("click", function(event) {
    event.preventDefault();
    engine.resetGrid();
});
