interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Nicole",
  lastName: "Mwenda",
  age: 2,
  location: "Marsabit"
};

const student2: Student = {
  firstName: "Ryan",
  lastName: "Mwenda",
  age: 4,
  location: "Meru"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");
const firstNameHeader = document.createElement("th");
firstNameHeader.innerText = "First Name";
const locationHeader = document.createElement("th");
locationHeader.innerText = "Location";
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

studentsList.forEach(student => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  firstNameCell.innerText = student.firstName;
  const locationCell = document.createElement("td");
  locationCell.innerText = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
