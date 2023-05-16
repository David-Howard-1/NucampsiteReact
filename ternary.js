/**** EXAMPLE 1 (uncomment lines 3-21) ****/

// const lightswitch = {
//     switchState: "on",
//     flipSwitch() {
//         if (this.switchState === "on") {
//             this.switchState = "off";
//         } else {
//             this.switchState = "on";
//         }
//     }
// }

// /***** Ternary *****/
// lightswitch.flipSwitch = function() {
//     (this.switchState === "on") ? this.switchState = "off" : this.switchState = "on";
// }

// // lightswitch.flipSwitch()
// // lightswitch.flipSwitch()
// console.log(lightswitch)


/**** EXAMPLE 2 ****/

// function canVote(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

function canVote(age) {
    return (age >= 18) ? true : false;
}

console.log(canVote(12))