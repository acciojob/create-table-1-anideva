function insert_Row() {
    //Write your code here
	//get element by id 
	const table = document.getElementById("sampleTable");

	//add a new row in the table index=0
	const newRow = table.insertRow(0);
	//insert two cells in the new row 
	const cell1 = newRow.insertCell(0);
	const cell2 = newRow.insertCell(1);

	//assign value to the cells 
	cell1.innerHTML = "New Cell1";
	cell2.innerHTML = "New Cell2";
  
  
}
