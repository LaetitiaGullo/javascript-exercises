/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let age = prompt("How old are you ?");
    let gender = prompt("Gender : M or F ?");
    let town = prompt("In which town do you live ?");

    let answers = confirm("Is it correct ? " + age + " - " + gender + " - " + town);

    while (answers == false) {
        age = prompt("How old are you ?");
        gender = prompt("Gender : M or F ?");
        town = prompt("In which town do you live ?");
        answers = confirm("Is it correct ? " + age + " - " + gender + " - " + town);
    }

})();
