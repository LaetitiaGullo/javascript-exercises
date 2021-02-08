/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        let x = document.getElementById("number").value;

        function fact(x) {
 
        if (x < 0)
        {
            return "Choose a number > or = 0";
        }

        else if (x == 0)
        {
            return 1;
        }


        console.log(x);    
        return x * fact(x-1);
                
        }

        alert(fact(x));


            });

        })();
