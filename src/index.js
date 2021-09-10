var output = document.getElementById("outputEl")
var date = document.getElementById("date");

var btnSubmit = document.getElementById("btn-submit")
btnSubmit.addEventListener("click", () => {
    var date = document.getElementById("date");
    date = date.value
    console.log(date)
    date = date.split("-");
    console.log("Alag: ", date)
    var yyyy = date[0];
    var mm = date[1];
    var dd = date[2];

    date = { day: Number(dd), month: Number(mm), year: Number(yyyy) };
    console.log(date)
    output.innerText = findPalindromeOrNextPalindrome(date);

})


// Function to reverse the string
function reverseDate(date) {
    listOfChars = date.split('').reverse().join('')
    return listOfChars;
}

// Function to check palindrome
function isPalindrome(date) {
    return date == reverseDate(date);
}

// Converts numerical date format to a string
function dateToString(date) {
    const dateObj = { day: "", month: "", year: "" };
    if (date.day < 10) {
        dateObj.day = '0' + date.day;
    }
    else {
        dateObj.day = date.day.toString();
    }

    if (date.month < 10) {
        dateObj.month = '0' + date.month;
    }
    else {
        dateObj.month = date.month.toString();
    }

    dateObj.year = date.year.toString();
    return dateObj;
}

// Gets all the possible variations of the Date format available
function allVariationOfDate(date) {
    var dateStr = dateToString(date);


    ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    const dateVariations = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];

    return dateVariations;
}

function checkForAllDateFormats(date) {
    var listOfAllVariations = allVariationOfDate(date);
    for (let i = 0; i < listOfAllVariations.length; i++) {
        if (isPalindrome(listOfAllVariations[i])) {
            return true;
        }

    }
    return false;
}

// Finds and checks for a leap year
function findLeapYear(year) {
    if (year % 400 == 0 && year % 100 != 0) {
        return true;
    }
    else if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

// Gets next date to check for the palindrome
function getNextDate(date) {
    day = date.day + 1;
    month = date.month;
    year = date.year;

    maxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month == 2) {
        if (findLeapYear(year)) {
            if (day > 29) {
                day = 1;
                month = month + 1;
            }
            else {
                if (day > 28) {
                    day = 1;
                    month = month + 1;
                }
            }

        }
    }
    else {
        if (day > maxDays[month - 1]) {
            day = 1;
            month = month + 1;
        }
    }

    if (month > 12) {
        month = 1;
        year = year + 1;
    }

    date = {
        day: day,
        month: month,
        year: year,
    };
    return date;
}

// Gets us the next palindrome
function getNextPalindrome(date) {
    var nextDate = getNextDate(date);
    var ctr = 0;

    while (1) {
        ctr++;
        var palindrome = checkForAllDateFormats(nextDate);
        if (palindrome) {
            return ("This date is not Palindrome, though after " + ctr + " days on " + nextDate.day + "-" + nextDate.month + "-" + nextDate.year + " will have the next palindrome day :)");
            break;
        }

        nextDate = getNextDate(nextDate);
    }
}

// Main function which deals with the chain of other helper functions
function findPalindromeOrNextPalindrome(date) {
    if (checkForAllDateFormats(date)) {
        return ("Congratulations, Your BirthDay is Palindrome ");
    }
    return getNextPalindrome(date);

}



