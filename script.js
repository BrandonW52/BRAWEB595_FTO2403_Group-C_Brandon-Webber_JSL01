function validateSyntax() {
  let input = document.getElementById("petInput").value;
  let result = "";

  // Converts input to lower case
  input = input.toLowerCase();

  // Takes the first 4 characters and checks if its equal to "pet_"
  let prefix = input.slice(0, 4);
  prefix = prefix.includes("pet_");

  // Takes the year converts it to a number then checks if its in range
  let petBirthYear = input.slice(4, 8);

  petBirthYear = +petBirthYear;

  if (petBirthYear >= 1900 && petBirthYear <= 2024) {
    petBirthYear = true;
  } else {
    petBirthYear = false;
  }

  // Checks to see if a name has been inputed
  petName = input.slice(8);
  if (petName.length > 0) {
    petName = true;
  } else {
    petName = false;
  }

  // Checks if input is empty || starts with 'pet_' and followed by alphanumeric characters and name

  if (input === "" || input == null) {
    result = "Error Input Field Empty";
  } else if (prefix === true && petBirthYear === true && petName === true) {
    result = "Valid Syntax";
  } else {
    result = "Invalid Syntax";
  }

  document.getElementById("result").innerText = result;
}
