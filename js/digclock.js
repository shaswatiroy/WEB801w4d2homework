// Create a time data function
function currentTime() {
    var d = new Date(); // Get current date
    var hr = d.getHours();  //Get current hours
    var min = d.getMinutes();   //Get current minutes
    var sec = d.getSeconds();   //Get current seconds
    var utchr = d.getUTCHours();    //Get current Greenwich Mean Time (GMT)
    var timeDiff; // To store time difference between GMT hour and Local hour
    var adjTimeDiff; // To store time difference converted to positive number
    var timeZone;   // To store the 4 time zones (PT, MT, CT, ET)
    var ampm;   //Declare empty variable to store AM or PM

    // Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }

    // Add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }

    // Convert GMT from military to standard
    if (utchr > 12) {
        utchr -= 12;
    }

    // Calculate time difference between GMT hour and local hour
    timeDiff = utchr - hr;

    // Convert time difference from negative to positive
    if(timeDiff < 0) {
        adjTimeDiff = timeDiff * -1;
    } else {
        adjTimeDiff = timeDiff;
    }
    
    switch(adjTimeDiff) {
        case 4:
            timeZone = "ET";
            break;
        case 5:
            timeZone = "CT";
            break;
        case 6:
            timeZone = "MT";
            break;
        case 7:
            timeZone = "PT";
            break;
        default:
            timeZone = "";
            break;
    }

    // Determine AM or PM string
    if (hr == 12) {
        ampm = "PM";
    } else if (hr > 12) {
        hr -= 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    // Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    // Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time;

    // Run time data function every 1 second
    setInterval(currentTime, 1000);
}

// Initial run of time data function
currentTime();