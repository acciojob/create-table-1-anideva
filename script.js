function insert_Row() {
    //Write your code here
	//get table by id 
	const table = document.getElementById("sampleTable");

	// insert a new row at the top (index 0)
	const newRow = table.insertRow(0);

	//insert two new cells in the new row
	const cell1 = newRow.insertCell(0);
	const cell2 = newRow.insertCell(1);

	//assign values to the cell
	cell1.innerHTML = "New Cell1"
	cell2.innerHTML = "New cell2"
  
  
}
