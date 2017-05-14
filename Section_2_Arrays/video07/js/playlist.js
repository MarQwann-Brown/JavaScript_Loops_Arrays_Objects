var playList = [
    ['I Did It My Way', 'Frank Sinatra'],
    ['Respect', 'Aretha Franklin'],
    ['Imagine', 'John Lennon'],
    ['Born to Run', 'Bruce Springsteen'],
    ['Louie Louie', 'The Kingsmen'],
    ['Maybellene', 'Chuck Berry']
];

function print(message) {
  document.write(message);
}

function printSongs( Songs ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < Songs.length; i += 1) {
    listHTML += '<li>' + Songs[i][0] + ' by ' + Songs[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playList);





















