

var my_function = array => array.map(val => val + (val+1)%2 - val%2);

console.log(my_function([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

//[ 1, 0, 3, 2, 5, 4, 7, 6, 9, 8 ]