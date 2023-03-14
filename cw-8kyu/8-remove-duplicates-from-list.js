// **** Remove duplicates from list ****
//** Define a function that removes duplicates from an array of numbers and returns it as a result. **
//** The order of the sequence has to stay the same.** 


  //   P - Given an array of numbers. Create a function that pulls duplications out of the array and returns the array with without the duplicates.  Edge Cases:  Will it always be valid numbers?  Do I need to acknowledge if there aren't any dupes in the original array?
  //   R - Return the original array minus dupes. --- 
  //   E -  Examples: [6,2,5,3,2,8,8,7] returns [6,2,5,3,8,7]  and [234, 12, 78, 234, 14,] returns [234, 12, 78, 14,]
  //   P -  First I need to create a loops through each element.  
  //   As it loops through each element, I need a function that checks to see if it has already been accounted for/is a dup.
  //   So I could do a ForEach...or a for a ... and as it hits the element is equal to an index that is less than the current index.  
  //   If it is, then don't add it to the new array, remove it. That would be using the "includes" method...
  //   Actually, if I use "filter" with "indexOfmethod, then ForEach isn't necessary...

  function distinct(array1) {
    // loop through an array using indexOF (checks for first instance of element/ix pair every time, so dups wouldn't make the cut for the returned array)

    return array1.filter((elem, ix) => array1.indexOf(elem) === ix);
  }

  //Sample tests

  let array1 = [1, 4, 6, 8, 4, 7, 1]

 console.log (distinct(array1));

 let anotherArray = [11, 2, 147, 2, 14, 2, 11]
 console.log (distinct(anotherArray));


//And it works : )
//[Running] node "/Users/sally/Desktop/#100devs/codewars/codingChallenges-4-22/remove-duplicates-from-list.js"
// [ 1, 4, 6, 8, 7 ]
// [ 11, 2, 147, 14 ]
