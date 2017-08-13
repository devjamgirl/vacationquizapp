var vacationDestinations = [
   {
    destination: 'jamaica',
    view: 'beach',
    apparel: 'swimsuit',
    activity:'swim',
    attraction:'old forts',
    music: 'reggae'
  },
{
    destination: 'colorado',
    view: 'mountain',
    apparel: 'hiking boots',
    activity:'hike',
    attraction:'national park',
    music: 'acoustic'
  },
  {
    destination: 'new york city',
    view: 'city',
    apparel: 'fancy shoes',
    activity:'club',
    attraction:'gallery',
    music: 'edm'
  }
];

function getResults(){
  var one = document.getElementById('answer1').value;

  var two = document.getElementById('answer2').value;

  var three = document.getElementById('answer3').value;

  var four = document.getElementById('answer4').value;

  var five = document.getElementById('answer5').value;

  var lowerCaseOne = one.toLowerCase();

  var lowerCaseTwo = two.toLowerCase();

  var lowerCaseThree = three.toLowerCase();

  var lowerCaseFour = four.toLowerCase();

  var lowerCaseFive = five.toLowerCase();


for(var i = 0; i < vacationDestinations.length; i++ ){
  if( lowerCaseOne == vacationDestinations[0].view && lowerCaseTwo == vacationDestinations[0].apparel && lowerCaseThree == vacationDestinations[0].activity && lowerCaseFour == vacationDestinations[0].attraction && lowerCaseFive == vacationDestinations[0].music){
    alert('Your ideal vacation destination is Jamaica!');
  }
  if(lowerCaseOne == vacationDestinations[1].view && lowerCaseTwo == vacationDestinations[1].apparel && lowerCaseThree == vacationDestinations[1].activity && lowerCaseFour == vacationDestinations[1].attraction && lowerCaseFive == vacationDestinations[1].music){
    alert('Your ideal vacation destination is Colorado!');
  }
  if(lowerCaseOne == vacationDestinations[2].view && lowerCaseTwo == vacationDestinations[2].apparel && lowerCaseThree == vacationDestinations[2].activity && lowerCaseFour == vacationDestinations[2].attraction && lowerCaseFive == vacationDestinations[2].music){
    alert('Your ideal vacation destination is New York City!');
  }
  if(lowerCaseOne == vacationDestinations[1].view && lowerCaseTwo == vacationDestinations[0].apparel && lowerCaseThree == vacationDestinations[1].activity && lowerCaseFour == vacationDestinations[0].attraction && lowerCaseFive == vacationDestinations[1].music){
    alert('Your ideal vacation destination is Jamaica!');
  }
  if(lowerCaseOne == vacationDestinations[2].view &&
  lowerCaseTwo == vacationDestinations[0].apparel &&
  lowerCaseThree == vacationDestinations[2].activity &&
  lowerCaseFour == vacationDestinations[2].attraction && lowerCaseFive == vacationDestinations[2].music){
    alert('Your ideal vacation destination is Miami!');
  }
  else {
    alert('Please try and again and be sure to fill out all fields with one of the three options listed.');
  }
  return;
}
}
getResults();
