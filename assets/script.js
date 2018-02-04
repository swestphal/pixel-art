/*******************************************************************
 * Name: gridPaint
 * Author: Simone Westphal
 * Desc:
 * This script generates a grid with the desired width and height
 * and lets you set pixel in the selected color into the grid.
 *
 * It is based on a side-project for the udacity front-end nanodegree
 * and coded from scratch.
 *
 * The color picker is the flexi-picker from David Durman,
 * as the html5 picker is not implemented in all browsers
 ********************************************************************/

var gridPaint = (function() {

    // declare variables

    const inputHeight = document.getElementById('grid-height');
    const inputWidth = document.getElementById('grid-width');

    const currentColor = document.getElementById('currentColor');

    const colorContainer = document.getElementById('colorContainer');
    const colorPicker = document.getElementById('colorPicker');
    const colorPickerSlide = document.getElementById('colorPickerSlide');

    const gridActionBtn = document.getElementById('btn-generate');

    const tablePos = document.getElementById('grid-table');
    let pixelColor = '#000'; // if no color is selected

    // show current color

    currentColor.style.background = pixelColor;

    // show colorPicker and current color on front-end

    ColorPicker(colorPicker, colorPickerSlide, function(hex, hsv, rgb) {
        pixelColor = hex;
        currentColor.style.background = hex;
    });

    /*
     * event listener btn "generate grid"
     */

    // mousenter add class "active"

    gridActionBtn.addEventListener('mouseenter',
        function() {
            this.classList.add('active');
        });


    // mouseleave remove class "active"

    gridActionBtn.addEventListener('mouseleave',
        function() {
            this.classList.remove('active');
        });


    // click to generate grid

    gridActionBtn.addEventListener('click', function(event) {
        gridActionBtn.classList.remove('active');
        planGrid(event);
    });

    // make grid with given values

    var planGrid = function(event) {
        event.preventDefault();
        deleteOldTable();
        generateGrid(getSizeOfGrid());
    }

    // delete old table if there is one

    var deleteOldTable = function() {
        var oldTable = document.getElementsByTagName('table')[0];
        if (oldTable) oldTable.remove();
    }

    // get gridsize from userinput

    var getSizeOfGrid = function() {
        return ({
            "height": inputHeight.value || inputHeight.placeholder,
            "width": inputWidth.value || inputWidth.placeholder
        });
    }

    // make grid and append it to id=grid-output

    var generateGrid = function(gridSize) {
        var newTable = document.createElement('table');
        tablePos.appendChild(newTable);
        for (var y = 0; y < gridSize['width']; y++) {
            var newTableRow = document.createElement('tr');
            newTable.appendChild(newTableRow);
            for (var x = 0; x < gridSize['height']; x++) {
                var newTableCol = document.createElement('td');
                newTableRow.appendChild(newTableCol);
            }
        };
        paintInGrid();
    }

    // add eventlistener to table element

    var paintInGrid = function() {
        const tableClick = document.getElementsByTagName('table')[0];
        tableClick.addEventListener('click', function(e) {
            paintPixel(e);
        });
    };

    // get the target of click and set backgroundColor to colorPicker value

    var paintPixel = function(e) {
        e.target.style.backgroundColor = pixelColor;
    };
})();