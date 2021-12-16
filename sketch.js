// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/NcewaPfFR6Y

var canvas;
var score;
var button;
var initialInput;
var submitButton;
var database;

function setup() {
  // canvas = createCanvas(100, 100);
  // canvas.parent('game');
  // score = 0;
  // createP('Click the button to get points.').parent('game');
  // button = createButton('click');
  // button.mousePressed(increaseScore);
  // button.parent('game');
  // initialInput = createInput('initials');
  // initialInput.parent('game');
  // submitButton = createButton('submit');
  // submitButton.parent('game');
  // submitButton.mousePressed(submitScore);

  var config = {
    apiKey: "AIzaSyCERZncvyadzWsk6kw5FHB4cJOWOurANd4",
    authDomain: "sample-275d2.firebaseapp.com",
    databaseURL: "https://sample-275d2.firebaseio.com",
    projectId: "sample-275d2",
    storageBucket: "sample-275d2.appspot.com",
    messagingSenderId: "32799681778",
    appId: "1:32799681778:web:f0d224acc919aba709b46b",
    measurementId: "G-T3K4GWBWH8"
  };
  firebase.initializeApp(config);
  database = firebase.database();

  var ref = database.ref('No Mask Data');
  ref.on('value', gotData, errData);
}

function gotData(data) {
//   var scorelistings = selectAll('.scorelisting');
//   for (var i = 0; i < scorelistings.length; i++) {
//     scorelistings[i].remove();
//   }

  //console.log(data.val());
  var reports = data.val();
  var keys = Object.keys(reports);
  //console.log(keys);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var Room_No = reports[k].Room_No;
    var Camera_No = reports[k].Camera_No;
    var Time = reports[k].Time;
    var Date = reports[k].Date;
    var Status = reports[k].Status;
    //console.log(initials, score);
    var li = createElement('li',Room_No+ '    '+Camera_No+'     ' +Date + '       '+Time+'      ' + Status);
    li.class('scorelisting');
    li.parent('scorelist');
  }
}

function errData(err) {
  console.log('Error!');
  console.log(err);
}

// function submitScore() {
//   var data = {
//     initials: initialInput.value(),
//     score: score
//   };
//   console.log(data);
//   var ref = database.ref('scores');
//   var result = ref.push(data);
//   console.log(result.key);
// }

// function increaseScore() {
//   score++;
// }

// function draw() {
//   background(0);
//   textAlign(CENTER);
//   textSize(32);
//   fill(255);
//   text(score, width / 2, height / 2);
// }
