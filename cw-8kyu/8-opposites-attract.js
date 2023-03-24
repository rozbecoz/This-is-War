//OPPOSITES ATTRACT

/*Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.*/

// Parameters: Function will take in two values(numbers) for key value pairs representing number of petals for each object/flower.

// Edge cases -   No petals?  Would that just count as 0/even ...if so, can't think of any edge cases?
// Return: A boolean connected to a statement that confirms if Timmy and Sarah are in love or not.
// Example cases: 
//Psuedo: Create a Constructor called Flower that has properties including number of petals"  Then create flowers (objects) from that Constructor for Timmy and Sarah.  Then grab the number of petals value for each object/flower and compare if they are opposites and return the boolean (True or False) (one is odd and one is even).  If True, console.log they are in love, if false, console.log they are not a love match but can still hook up for fun or play wingman for eachother.

    //likely use key lookup and maybe getters and setters? 

    function positiveSum(array) {

        //First filter out the positive numbers into a new array

        let posArray = array.filter(num => num > 0);
              
        //now check for an empty array//
              
        if (posArray === []) {
           return 0;
        }

        //finally return the sum of the posArray numbers//
        
              else return posArray.reduce((total, posNum) => total + posNum, 0);
        }


