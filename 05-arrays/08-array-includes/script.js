/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click", function() {
        
        var found;
        
        for (i = 0; i <= fruits.length; i++) {
            if (fruits[i] == "apple") {
                found = true;
            }
        }

        if (found == true) {
            console.log("Yes");
        }
        else {
            console.log("No");
        }

    });
})();
