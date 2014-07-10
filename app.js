var prompt = require('sync-prompt').prompt;

var play = [], home = [], work = [];

var menu = prompt('Add task to (p)lay, (h)ome, (w)ork, or (q)uit: ');
var task;

while (menu != 'q'){
	if(menu === 'p'){
		task  = prompt('What would you like to add to play?: ');	
		play.push(task);
	}
	if(menu === 'h'){
		task  = prompt('What would you like to add to home?: ');	
		home.push(task);
	}
	if(menu === 'w'){
		task = prompt('What would you like to add to work?: ');	
		work.push(task);
	}

menu  = prompt('Add task to (p)lay, (h)ome, (w)ork, or (q)uit: ');
}

//Print play
console.log('Play list: ' + play);
console.log('Home list: ' + home);
console.log('Work list: ' + work);
