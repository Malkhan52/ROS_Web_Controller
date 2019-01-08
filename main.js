// var IPaddress = 'ws:/'+'/'+window.location.hostname+':9090';
// console.log(IPaddress);

var rosServer = new ROSLIB.Ros({
  // url : 'ws:/'+'/'+window.location.hostname+':9090'
  	url : 'ws://192.168.43.115:9090'
})

rosServer.on('connection',function(){
  var status = document.getElementById('feedback');
  status.innerHTML += "<p style='color:blue'>Status Message: Connected to websocket server.</p>";
});

rosServer.on('error',function(){
  var status = document.getElementById('feedback');
  status.innerHTML += "<p style='color:red'>Status Message: Error connecting to websocket server.</p>";
});

rosServer.on('close',function(){
  var status = document.getElementById('feedback');
  status.innerHTML += "<p style='color:#2b524f'>Status Message: Connection to websocket server closed.</p>";
});
