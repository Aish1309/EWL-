var users = [
    { username: 'ticklishdog591ser1', password: 'baltimor' },
    { username: 'lazysnake708', password: 'wyoming' },
    { username: 'yellowpeacock322', password: 'start' }
];

var button = document.getElementById('login');

button.onclick = function() {
   var username = document.getElementById('username').value;
   var password = document.getElementById('password').value; 

   for (var i = 0; i < users.length; i++) {
      if(username == users[i].username && password == users[i].password) {
         window.location.href = 'http://where/you/want/to/redirect/';
         break;
      }else{
         alert('You are trying to break in!');
      }
   }
}