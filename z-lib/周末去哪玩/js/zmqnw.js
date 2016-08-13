// var zmqn=[
//     '故宫',
//     '长城',
//     '十三陵',
//     '十渡',
//     '圆明园',
//     '颐和园',
// ];
// var zm=document.getElementById('zm');
// var start=document.getElementById('start');
// var stop=document.getElementById('stop');

// var kong;

// start.onclick=function(){
//     kong=setInterval(function(){
//         var i=parseInt(Math.random()*zmqn.length);
//         zm.innerHTML=zmqn[i]
//     },10)
// }

// stop.onclick=function(){
//     clearInterval(kong);
// }

// var ddText=document.getElementById('ddText');
// var newBtn=document.getElementById('newBtn');

// newBtn.onclick=function() {
//     var val=ddText.value;
//     val=val.split('|');
//     zmqn=zmqn.concat(val);
// } 




var zmqn=[
    '故宫',
    '长城',
    '十三陵',
    '十渡',
    '圆明园',
    '颐和园',
];

var zm = $('zm'), 
    start = $('start'),
    stop = $('stop'),
    kong;

start.onclick = function() {
    this.disabled='disabled';
    kong = setInterval(function(){
        var i = parseInt(Math.random()*zmqn.length);
        zm.innerHTML=zmqn[i];
    },10)
};

stop.onclick = function() {
    clearInterval(kong);
    start.disabled='';
    // kong = undefined;
}

var text = $('ddText'),
    newBtn = $('newBtn');

newBtn.onclick = function() {
    var txx=text.value;
    for (var i = 0; i < zmqn.length; i++) {
        if (zmqn[i]==txx||txx=='') {
            return;
        };
    };
    // if(txx==''){
    //     return;
    // }
    var txx= txx.split('|');
    zmqn=zmqn.concat(txx);

console.log(zmqn);
}
