/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        var birthDay = document.getElementById("dob-day").value;
        var birthMonth = document.getElementById("dob-month").value;
        var birthYear = document.getElementById("dob-year").value;


        var d = new Date();
        var currentYear = d.getFullYear();
        var currentMonth = d.getMonth();
        var currentDay = d.getDay();

        var age = currentYear-birthYear;

        if (currentMonth<birthMonth || currentMonth==birthMonth && currentDay<birthDay) {
            age--;
        }
        console.log(age);
        
   });
})();
