//var mDomain = document.domain;
//document.domain = mDomain;

//Make connection
var socket = io.connect('http://localhost:4001');


var queryString = '';

//Query DOM
var message = document.getElementById('message');
handle = document.getElementById('handle'),
btn = document.getElementById('send'),
output = document.getElementById('output');
//user = localStorage.getItem("storageName");
//alert(user);

/*var readParameters = function()
{
    console.log('Getting parameters..');
    let params = (new URL(location)).searchParams;
    console.log('Query parameters: ', params.toString());

  //  var html = '';
    for (let p of params) {
      queryString += p.toString();
    }

    var splittedString = queryString.split(',');
    nameFromUrl = splittedString[0];
    nameFromUrl2 = splittedString[1];

    document.getElementById("handle").value = nameFromUrl;
    //alert(nameFromUrl);
    alert(nameFromUrl2);
}
*/

//Emit events

btn.addEventListener('click',function(){
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
 message.value = "";
});

message.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById('send').click();
    }
});


//Listen for events
socket.on('chat', function(data){
  //if(data.handle == nameFromUrl || data.handle == nameFromUrl2)

if(data.message == ''){}
else{
  output.innerHTML+='<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
var elem = document.getElementById('chat-window');
  elem.scrollTop = elem.scrollHeight;
}

});
