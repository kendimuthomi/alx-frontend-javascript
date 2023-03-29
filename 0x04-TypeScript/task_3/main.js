var student1 = {
    firstName: "Nicole",
    lastName: "Mwenda",
    age: 2,
    location: "Marsabit"
};
var student2 = {
    firstName: "Ryan",
    lastName: "Mwenda",
    age: 4,
    location: "Meru"
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var headerRow = document.createElement("tr");
var firstNameHeader = document.createElement("th");
firstNameHeader.innerText = "First Name";
var locationHeader = document.createElement("th");
locationHeader.innerText = "Location";
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.innerText = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.innerText = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.body.appendChild(table);
