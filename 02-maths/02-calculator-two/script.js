/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    function getValue(value1) {
        return document.getElementById(value1).value;
    }

    const performOperation = operation => {

        switch (operation) {
            case "addition":
                alert(parseFloat(getValue("op-one")) + parseFloat(getValue("op-two")));
                break;

            case "substraction":
                alert(getValue("op-one") - getValue("op-two"));
                break;

            case "multiplication":
                alert(getValue("op-one") * getValue("op-two"));
                break;

            case "division":
                alert(getValue("op-one") / getValue("op-two"));
                break;

        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();