let date = document.getElementById("date");
let lucky_number = document.getElementById("lucky-number");
let display = document.getElementById("show");

function checkLuck() {
  console.log(date.value);
  const cleanDate = cleanUp(date.value);
  let sum = 0;

  for (let i in cleanDate) {
    sum = sum + Number(cleanDate[i]);
  }

  let isBirthDayLucky = sum % Number(lucky_number.value);

  showOutput(isBirthDayLucky);
}

function showOutput(isBirthDayLucky) {
  if (isBirthDayLucky) {
    console.log("Not lucky!");
    display.innerHTML =
      "<h2>" + lucky_number.value + "is not that much lucky for you." + "</h2>";
  } else {
    console.log("Lucky!");
    display.innerHTML =
      "<h2>" + lucky_number.value + " is your Lucky number</h2>";
  }
}

function cleanUp(date) {
  return date.replaceAll("-", "");
}

