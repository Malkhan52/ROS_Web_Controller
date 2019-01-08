// Thruster Controller Sliders
var fLeft = document.getElementById("fLeft");
var fLeft_value = document.getElementById("fLeft_value");
fLeft_value.innerHTML = fLeft.value;

fLeft.oninput = function(){
  fLeft_value.innerHTML = this.value;
}
var fRight = document.getElementById("fRight");
var fRight_value = document.getElementById("fRight_value");
fRight_value.innerHTML = fRight.value;

fRight.oninput = function(){
  fRight_value.innerHTML = this.value;
}
var back = document.getElementById("back");
var back_value = document.getElementById("back_value");
back_value.innerHTML = back.value;

back.oninput = function(){
  back_value.innerHTML = this.value;
}
var sLeft = document.getElementById("sLeft");
var sLeft_value = document.getElementById("sLeft_value");
sLeft_value.innerHTML = sLeft.value;

sLeft.oninput = function(){
  sLeft_value.innerHTML = this.value;
}
var sRight = document.getElementById("sRight");
var sRight_value = document.getElementById("sRight_value");
sRight_value.innerHTML = sRight.value;

sRight.oninput = function(){
  sRight_value.innerHTML = this.value;
}
var bottom = document.getElementById("bottom");
var bottom_value = document.getElementById("bottom_value");
bottom_value.innerHTML = bottom.value;

bottom.oninput = function(){
  bottom_value.innerHTML = this.value;
}
// End Thruster Controller Sliders

var thruster_speeds = new ROSLIB.Topic({
  ros : rosServer,
  name : '/thruster_speeds',
  messageType : 'thruster_controller/ThrusterSpeeds'
});

var msg = new ROSLIB.Message({
  data : [0,0,0,0,0,0]
});

function pubThruster_speeds(){
  msg.data[0] = Number(document.getElementById('fLeft').value);
  msg.data[1] = Number(document.getElementById('fRight').value);
  msg.data[2] = Number(document.getElementById('back').value);
  msg.data[3] = Number(document.getElementById('sLeft').value);
  msg.data[4] = Number(document.getElementById('sRight').value);
  msg.data[5] = Number(document.getElementById('bottom').value);

  thruster_speeds.publish(msg);
}
