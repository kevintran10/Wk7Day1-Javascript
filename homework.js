//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/

// 1. Define the function with a string and an array
// 2a. Use a for loop to iterate through the array. 
// 2b. When writing the if statement, I tried .lower and .toLowerCase popped up. Assuming it's the same and it was.
// 3. Check to see if the array index is in the string
// 4. Use a if or else statement based on results
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];


function findWords(aString, aArray){
    for (let i = 0; i < aArray.length; i++) {
        if (aString.toLowerCase().includes(aArray[i].toLowerCase())) {
            console.log(`Matched ${aArray[i]}`); 
        } else {
            console.log('No match');
        }
    }
}
//Call method here with parameters
findWords(dog_string, dog_names)


//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given 
const arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i+=2) {
// had to search up splice method on https://www.javascripttutorial.net/javascript-array-splice/
        arr.splice(i, 1, "even index")
    }
}
replaceEvens(arr)
console.log(arr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]