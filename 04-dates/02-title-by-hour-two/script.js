/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var d = new Date();
    var x = d.getHours();
    var y = d.getMinutes();
    console.log(x + ":" + y);

    if (x <= 17 && y < 30) {
        document.getElementById("target").innerHTML = "Hello";
    }

    else if (x >= 17 && y >= 30) {
        document.getElementById("target").innerHTML = "Good evening";
    }

})();
