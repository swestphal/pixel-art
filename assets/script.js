const gridActionBtn = document.getElementById('btn-generate');

gridActionBtn.addEventListener('click',
    function(event){
        event.preventDefault();
        generateGrid();
    });

var generateGrid = function() {

    // get height and width from input fields


    // create table at grid-table

    const tablePos = document.getElementById('grid-table');
    var oldTable=document.getElementsByTagName('table')[0];

    if (oldTable) oldTable.remove();
    var newTable=document.createElement('table');
    tablePos.appendChild(newTable);
    for(var height=0;height<3;height++){
        var newTableRow = document.createElement('tr');
        newTable.appendChild(newTableRow);
        for(var width=0;width<5;width++){
          var newTableCol=document.createElement('td');
          newTableRow.appendChild(newTableCol);
      }
  }

  // make painting
}


