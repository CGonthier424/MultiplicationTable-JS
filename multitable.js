/*File: multitable.js
https://github.com/CGonthier424/MultiplicationTable-JS/blob/main/multitable.js
Connor Gonthier
connor_gonthier@student.uml.edu
UMass Lowell student taking course 91.61 GUI Programming I
This was created on 10/27/2020


 Style of crafting table and using it cited here:
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
*/

function generate_multitable() {

  //im parseInt on the values so they are read in as ints
  //not string of int specificall bc of negatives
  var minR = parseInt(document.getElementById('minRow').value);
  var maxR = parseInt(document.getElementById('maxRow').value);
  var minC = parseInt(document.getElementById('minColumn').value);
  var maxC = parseInt(document.getElementById('maxColumn').value);

//Error Checking
//checking that the taken in values are Valid Ints
if ((Number.isInteger(minR)&&Number.isInteger(minC)&&Number.isInteger(maxC)&&Number.isInteger(maxR))==false){
  document.getElementById("ErrorOutput").innerHTML='All values must be valid integers';
  return 0;
}
//Checking that the Min Values are less than or equal to the max values
if (minR > maxR ){
  document.getElementById("ErrorOutput").innerHTML='Enter a Minimum Row value that is less than or equal to the Max row value';
  return 0;
}
if (minC > maxC ){
  document.getElementById("ErrorOutput").innerHTML='Enter a Minimum Column value that is less than or equal to the Max Column value';
  return 0;
}
  //Error Checking End

  // row column lengths + 2 to account for the
  // correct lenth + outer edge to show values
  //ie 5-3 =2, [3 4 5] = 3,so + 1 and +1  for the guiding values
  var rlength = ((maxR - minR)+2)
  var clength = ((maxC - minC)+2)

 // arrays to hold row values
  var rarr =[];
  for(x=minR; x <=maxR; x++){
    rarr.push(x);
  }
// arrays to hold column values
  var carr =[];
  for(x=minC; x <=maxC; x++){
      carr.push(x);
  }

  //Herer delete "table" if it exitst before creating new one,
  //functionally allows me to overwrite tables
  if(document.querySelector("table")){
    var remove= document.querySelector("table")
    var parent1= remove.parentElement;
    parent1.removeChild(remove);
  }

  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < rlength; i++) {
    // creates a table row
    var row = document.createElement("tr");
    row.setAttribute("id","mtRow")
    //
    for (var j = 0; j < clength; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row

      //Here allows me to enter in the first cell that is blank
      if(i ==0 && j ==0){
        var cell = document.createElement("td");
        var cellText = document.createTextNode('');
        cell.setAttribute("id","mtCell");
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      //here allows me to end the guiding values for the row
       else if (i==0 ) {

        var cell = document.createElement("td");
        var cellText = document.createTextNode(carr[j-1]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      //here allows me to end the guiding values for the row column
       else if (j==0 ) {

        var cell = document.createElement("td");
        var cellText = document.createTextNode(rarr[i-1]);
        cell.setAttribute("id","mtCellC");
        cell.appendChild(cellText);
        row.appendChild(cell);

      }
      //here filling in the rest of the table
      else{
        var cell = document.createElement("td");
        var cellText = document.createTextNode(rarr[i-1]*carr[j-1]);
        cell.setAttribute("id","mtCellG");
        cell.appendChild(cellText);
        row.appendChild(cell);
     }
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
  tbl.setAttribute("id","multiTable");
}
