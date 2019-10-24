var tombool = ['green', 'red', 'yellow', 'blue'];
var pencet = [];

var i = 0;
var level = 1;

$(document).keypress(function(e) {
	if(e.key == 'a' || e.key == 'A'){
		reset();
		selanjutnya();
	}
});

$(".btn").click(function(){
	var btn = $(this);
	btn.addClass('pressed');
	setTimeout(function(){
		btn.removeClass('pressed');
	}, 100);
	
	if(pencet[i] != btn.attr('id')){
		$('#level-title').text("Game Over press any key to restart");
		$('body').addClass('game-over');
		setTimeout(function(){
			$('body').removeClass('game-over')
		}, 100)
		i = 0;
	};
	playAudio(btn.attr('id'));
	cek(btn.attr('id'));
});

function selanjutnya(){
	var random = Math.floor(Math.random() * 4);
	pencet.push(tombool[random]);
	setTimeout(function(){
		playAudio(tombool[random]);
		$("#" + tombool[random]).fadeOut(100).fadeIn(100);
		$('#level-title').text('level '+level);
		level++;
	},1000)
}

function cek(cek){
	if(pencet[i] != cek){
		$('#level-title').text("Game Over press A to restart");
		$('body').addClass('game-over');
		setTimeout(function(){
			$('body').removeClass('game-over')
		}, 100)
		rest();
	};
	i++;
	if (i == pencet.length) {
		selanjutnya();
		i = 0;
	}
}

function playAudio(src){
	var audio = new Audio('sounds/'+src+'.mp3');
	audio.play();
}

function rest(){
	pencet = [];
	level = 1;
	i = 0;
}