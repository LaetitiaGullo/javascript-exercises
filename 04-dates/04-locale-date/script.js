/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var d = new Date();
    console.log(d);

    var date = d.toLocaleDateString('en-US',{
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    var hour = d.toLocaleTimeString('fr-FR');

    document.getElementById("target").innerHTML = date + " - " + hour;
})();
