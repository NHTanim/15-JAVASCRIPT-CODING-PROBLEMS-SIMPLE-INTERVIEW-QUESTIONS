
// 


// var numbers =  [30, 40, 66, 80, 34, 55];

function getArraySum(numbers) {
    var sum =  0;
    for(var i = 0; i < numbers.length; i++){
      var element = numbers[i];
      sum = sum + element;
    }
    return sum;
}

var numbers =  [30, 40, 66, 80, 34, 55];
var result = getArraySum(numbers);
console.log("Total sum is : ", result);




// 