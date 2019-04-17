// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function devide(x) {
  if (x == 0){
    throw new Error('fail');
  }
    return 10 / x;
}

try {
  devide(0);

} catch (e) {
  console.error(e.message);
}