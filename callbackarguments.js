// The second argument/parameter is expected to be a function
var array = ["Alice", "Bob", "Waldo", "Winston"];

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}



function actionWhenFound(index) {
  console.log("Found him at: ", index);
}






findWaldo(array, actionWhenFound);