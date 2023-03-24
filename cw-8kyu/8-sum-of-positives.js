//SUM OF POSITIVE

/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.*/

// Parameters: Edge cases -   Empty arrays?  non-integers? Special characters?
// Return: A number that is equal to the sum of positive numbers in the array, or 0 if there are no positive numbers to sum.

// Example cases: [1,-4,7,12] => 1 + 7 + 12 = 20; 
    //[2, -3, -5, 9, 15] => 2 + 9 + 15 =26; 
    //[ -5, , -8, , -62] => 0;
//Psuedo: Make function that takes in an array and checks for positive numbers and return the sum of those numbers.  
    //likely use filter and reduce methods.

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