
// 1) introduce arrays
// 2) array of numbers
// 3) access array with bracket notation
// 4) create array of strings
// 5) add / change items  with bracket notation
// 5.1) access length of array with array.length
// 6) intro methonds: push / pop
// 7) shift / unshift
// 8) splice: you can delete from inside array: splice(indexToDelete, howManyToDelete) with second parameter
// 9) note: with splice, you can squeeze things in middle of array (not just beginning and end) with a third parameter (the things you want to add)

var list = ["foo", "bar"];
list.splice( 1, 0, "baz"); // at index position 1, remove 0 elements, then add "baz" to that position
                           // element "bar" will now automatically be moved to index position 2
["foo", "baz", "bar"] // result
