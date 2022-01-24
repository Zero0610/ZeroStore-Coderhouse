
//Time
(function() {
    // Create a newDate() object
    var newDate = new Date();

    setInterval(function() {
        // Create a newDate() object and extract the seconds of the current time on the visitor's
        var seconds = new Date().getSeconds();

        // Add a leading zero to seconds value
        $("#t-sec").html((seconds < 10 ? "0" : "") + seconds);
    }, 100);

    setInterval(function() {
        // Create a newDate() object and extract the minutes of the current time on the visitor's
        var minutes = new Date().getMinutes();

        // Add a leading zero to the minutes value
        $("#t-min").html((minutes < 10 ? "0" : "") + minutes);
    }, 100);

    setInterval(function() {
        // Create a newDate() object and extract the hours of the current time on the visitor's
        var hours = new Date().getHours();

        // Add a leading zero to the hours value
        $("#t-hours").html((hours < 10 ? "0" : "") + hours);
    }, 100);
})();