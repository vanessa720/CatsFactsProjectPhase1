const myButton = document.getElementById('button');
let someString = 'Data';

myButton.addEventListener('click', function() {
  console.log(someString); 

  someString = 'Data Again';
});