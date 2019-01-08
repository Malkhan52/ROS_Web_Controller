
var web_debugger = new ROSLIB.Topic({
  ros : rosServer,
  name : '/web_output',
  messageType : 'std_msgs/String'
});

web_debugger.subscribe(function(message){
  console.log(message.data);
});

var tiburon_commanderInt = new ROSLIB.Topic({
  ros : rosServer,
  name : '/tiburon_commanderInt',
  messageType : 'std_msgs/Int32'
});

var msg = new ROSLIB.Message({
  data : 0
});


function super_controller(){
  msg.data = Number(document.getElementById('super_controller').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}

function super_controller_quit(){
  msg.data = Number(document.getElementById('super_controller_quit').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}

function thruster_controller(){
  msg.data = Number(document.getElementById('th-controller').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}


function thruster_controller_stop(){
  msg.data = Number(document.getElementById('th-controller-stop').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}

function thruster_driver(){
  msg.data = Number(document.getElementById('th-driver').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}


function thruster_driver_stop(){
  msg.data = Number(document.getElementById('th-driver-stop').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}

function serial_node(){
  msg.data = Number(document.getElementById('serial_node').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}


function serial_node_stop(){
  msg.data = Number(document.getElementById('serial_node-stop').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}

function vector_nav(){
  msg.data = Number(document.getElementById('vector_nav').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}


function vector_nav_stop(){
  msg.data = Number(document.getElementById('vector_nav-stop').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}

function bottom_camera(){
  msg.data = Number(document.getElementById('bottom_camera').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}


function bottom_camera_stop(){
  msg.data = Number(document.getElementById('bottom_camera-stop').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}

function front_camera(){
  msg.data = Number(document.getElementById('front_camera').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}


function front_camera_stop(){
  msg.data = Number(document.getElementById('front_camera-stop').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}


function sync_vn(){
  msg.data = Number(document.getElementById('sync_vn').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}


function sync_vn_stop(){
  msg.data = Number(document.getElementById('sync_vn-stop').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}

function hammerhead_control(){
  msg.data = Number(document.getElementById('hammerhead_control').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}


function hammerhead_control_stop(){
  msg.data = Number(document.getElementById('hammerhead_control-stop').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}

function pid_controller(){
  msg.data = Number(document.getElementById('pid_controller').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}


function pid_controller_stop(){
  msg.data = Number(document.getElementById('pid_controller-stop').value);
  console.log(msg)
  tiburon_commanderInt.publish(msg);
}

function watchdog(){
  var front_camera_topic = String(document.getElementById('f_camera').value);
  var bottom_camera_topic = String(document.getElementById('b_camera').value);
  var IPaddress = window.location.hostname;
  var source = 'http:/'+'/'+IPaddress+':8080/stream?topic='+ front_camera_topic;
  var source_bottom = 'http:/'+'/'+IPaddress+':8080/stream?topic='+ bottom_camera_topic;

  document.getElementById('f_camera_img').innerHTML = '<img src="'+source+'"> </img>';
  document.getElementById('b_camera_img').innerHTML = '<img src="'+source_bottom+'"> </img>';
}

function getTopics() {
    
    var topicsClient = new ROSLIB.Service({
    ros : rosServer,
    name : '/rosapi/topics',
    serviceType : 'rosapi/Topics'
    });

    var request = new ROSLIB.ServiceRequest();

    topicsClient.callService(request, function(result) {
    console.log("Getting topics...");
    console.log(result.topics);
    var topicList = result.topics;
    var viewTopics = '<ol/>';
    for (var i = 0; i < topicList.length; i++) {
      viewTopics += '<li>' + topicList[i] + '</li>';
    }
    document.getElementById('topic_list').innerHTML = viewTopics;
    });
};

function subscribeTopic(){
  var topicName = String(document.getElementById('topicName').value);
  var topicType = String(document.getElementById('topicType').value);
  var viewData = '<ol/>';
  var sub_topic = new ROSLIB.Topic({
    ros : rosServer,
    name : topicName,
    messageType : topicType
  });

  sub_topic.subscribe(function(message){
    console.log(message.data);
    viewData += '<li>'+message.data+'</li>';
    document.getElementById('topicData').innerHTML = viewData;

  });

}