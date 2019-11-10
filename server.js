var WebSocket = require('ws');
var  wss = new WebSocket.Server({ port: 8089 });

var PONG_TIMEOUT = 10000; //client has 1.5s to respond with pong
//const puppeteer=require('puppeteer');
//var opn = require('open');
//var shell = require('shelljs');
//var browser;
//var page=[];
console.log("server running");
//shell.exec("C:/Users/hamed/Desktop/snakeLadderNode/win64/nw.exe --user-data-dir=/p10", {async:true});
//var clientList=[];

/*  Develope Later */
/*
Rooms =[];
Rooms[0] = new Array(4);
*/
/**/
/* define each Game Variables*/
/*  Game XO  with GameCode 1*/
 RoomNumber=0;
 RoomGameId=[0];
 RoomMaxSize=[0];
 RoomInd=[0];
 RoomTId=[0];
 RoomState=[];
 RoomUser=[""];
 ServerState=[];
 RoomMainAvatar=[""];
 RoomGameAvatar=[""]; //mohreh
 RoomExtra=[""];
 RoomDice=[""];
 RoomRing=[""];

 RoomGuid=[];
 RoomHost=[];
// ServerState=[0];
 clientList1=[null];
 clientList2=[null];
 clinetInd1=[""];
 clinetInd2=[""];
 clinetInd3=[""];

wss.on('connection', function connection(ws) {
	var lastPongReceived = Date.now();
	ws.username="";
	ws.avatar="";
	ws.dice="";
	ws.GameRoomSize="";
	ws.lastPongReceived = Date.now();
    ws.Inroom = false;
console.log("playerCount:",wss.clients.size);



  ws.on('message', function incoming(message) {

	  //if ( message.length>10 && message.substring(0, 9)=="S#$#UserN"){
		
	 
		  wss.clients.forEach(function each(client) {
				if (/*client !== ws &&*/ client.readyState === WebSocket.OPEN ) {
					console.log(message);
					client.send(message);
			    }
			});
		

		
		//console.log(ws);
	//   "ws://ws.hps.co.com:8089"
 //   console.log('received: %s', message);
  });
ws.on('close', function close() {


});
  //ws.send('something');
});

function uuidv4() {
  return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
