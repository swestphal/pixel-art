const gridActionBtn = document.getElementById('btn-generate');

var pixelColor = '#000';

gridActionBtn.addEventListener('mouseenter',
    function() {
        this.classList.add('active');
    });

gridActionBtn.addEventListener('mouseleave',
    function() {
        this.classList.remove('active');
    });





gridActionBtn.addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.remove('active');
    var gridDim = getSizeOfGrid();
    generateGrid(gridDim[0], gridDim[1]);
});

ColorPicker(
    document.getElementById('colorPicker'),
    document.getElementById('colorPickerSlide'),
    function(hex, hsv, rgb) {
        pixelColor = hex;
    });

var getSizeOfGrid = function() {
    var inputHeight = document.getElementById('grid-height');
    var inputWidth = document.getElementById('grid-width');
    var gridHeight = inputHeight.value || inputHeight.placeholder;
    var gridWidth = inputWidth.value || inputWidth.placeholder;
    return ([gridHeight, gridWidth]);
};

var generateGrid = function(gridHeight, gridWidth) {
    // create table at grid-table

    const tablePos = document.getElementById('grid-table');
    const oldTable = document.getElementsByTagName('table')[0];
    if (oldTable) oldTable.remove();
    var newTable = document.createElement('table');
    tablePos.appendChild(newTable);
    for (var y = 0; y < gridHeight; y++) {
        var newTableRow = document.createElement('tr');
        newTable.appendChild(newTableRow);
        for (var x = 0; x < gridWidth; x++) {
            var newTableCol = document.createElement('td');
            newTableRow.appendChild(newTableCol);
        }
    };
    paintInGrid();
}

var paintPixel = function(e) {

    // paint td where mouse is clicked

    e.target.style.backgroundColor = pixelColor;
};

var paintInGrid = function() {
    // paint with mouseclick in grid

    const tableClick = document.getElementsByTagName('table')[0];
    tableClick.addEventListener('click', function(e) {
        paintPixel(e);
    });
};