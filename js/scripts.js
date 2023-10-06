$(function () {
    var now = new Date();
    var nextweek = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000); // 7 days from now

    $('#timer').countdown({
        date: nextweek, // Use the calculated next week date
        day: 'Day',
        days: 'Days'
    }, function () {
        // Callback function when the countdown timer reaches zero
        console.log("Countdown reached zero!");
    });
});
