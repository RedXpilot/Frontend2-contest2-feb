let id=1;
let now = new Date();
const myArray=[];
const btn=document.getElementById("btn");
const table = document.getElementById("myTable");

btn.addEventListener("click", function(event){

    event.preventDefault();

    const formData = new FormData(form);
    formData.append('Id', id++);
    formData.append('IssueDate', now.toString());
    formData.append('status', "not returned");

    myArray.push(formData);

    var rowCount = table.rows.length;
	var cellCount = table.rows[0].cells.length; 
	var row = table.insertRow(rowCount);
	
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    
    cell1.innerHTML = formData.get('Id');
    cell2.innerHTML = formData.get('BookName');
    cell3.innerHTML = formData.get('IssuedTo');
    cell4.innerHTML = formData.get('IssueDate');
    cell5.innerHTML = formData.get('status');

});



