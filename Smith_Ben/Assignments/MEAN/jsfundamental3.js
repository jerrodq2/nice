function personConstuctor(name){
var person = {
	name:name,
	distance_traveled:0,
	say_name:function(){console.log(person.name);},
	say_something:function(words){console.log(person.name, 'says',words);},
	walk:function(){console.log(person.name, 'is walking'); person.distance_traveled+=3;},
	run:function(){console.log(person.name, 'is running');person.distance_traveled+=10;},
	crawl:function(){console.log(person.name, 'is drunk and crawling');person.distance_traveled+=1;}
}
}

function ninjaConstructor(name){
	var ninja = {
		name:name,
		cohort:cohort,
		belt: 'yellow',
		levelup:function(){ninja.belt = 'black'}
	}
}

	
