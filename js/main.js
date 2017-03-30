MainGrid = new MainGrid();
Engine = new Engine();

MainGrid.buildCellObjects();
MainGrid.renderCells("#grid");


MainGrid.clickedCell(function(cell_Nr) {
    Engine.winCondition(cell_Nr);
});

$(".reset").on("click", function(event) {
    event.preventDefault();
    Engine.resetGrid();
});
