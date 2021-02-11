/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function rand() {
        return Math.floor(Math.random() * 101);
    }

    document.getElementById("run").addEventListener("click", function() {

        let table = new Array();
        let sum = 0;
        let small = 101;
        let big = 0;


        for (let i = 0; i < 10; i++) {
            table.push(rand());
            document.querySelector("#n-" + (i+1)).innerHTML = table[i];
            //console.log(table);
            sum += table[i];
            //console.log(sum);

            if (small > table[i]) {
                small = table[i];                
            }

            if (big < table[i]) {
                big = table[i];                
            }
        }

        document.querySelector("#min").innerHTML = small;
        document.querySelector("#max").innerHTML = big;
        document.querySelector("#sum").innerHTML = sum;
        document.querySelector("#average").innerHTML = sum/10;

    });

})();
