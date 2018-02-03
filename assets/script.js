const gridActionBtn = document.getElementById( 'btn-generate' );

gridActionBtn.addEventListener( 'click',
	function ( event ) {
		event.preventDefault();
		var gridDim = getSizeOfGrid();
		generateGrid( gridDim[ 0 ], gridDim[ 1 ] );
	} );


var getSizeOfGrid = function () {
	var inputHeight = document.getElementById( 'grid-height' );
	var inputWidth = document.getElementById( 'grid-width' );

	var gridHeight = inputHeight.value || inputHeight.placeholder;
	var gridWidth = inputWidth.value || inputWidth.placeholder;

	return ( [ gridHeight, gridWidth ] );
};


var generateGrid = function ( gridHeight, gridWidth ) {
	// create table at grid-table

	const tablePos = document.getElementById( 'grid-table' );
	const oldTable = document.getElementsByTagName( 'table' )[ 0 ];

	if ( oldTable ) oldTable.remove();

	var newTable = document.createElement( 'table' );
	tablePos.appendChild( newTable );

	for ( var y = 0; y < gridHeight; y++ ) {
		var newTableRow = document.createElement( 'tr' );
		newTable.appendChild( newTableRow );
		for ( var x = 0; x < gridWidth; x++ ) {
			var newTableCol = document.createElement( 'td' );
			newTableRow.appendChild( newTableCol );
		}
	}

	// make painting


};
