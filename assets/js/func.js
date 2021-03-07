class Computer{
	constructor(brand,cpu,ram){
		this._brand = brand;
		this._cpu = cpu;
		this._ram = ram;
	};

	get specs(){
		console.log(
			`brand: ${this._brand} cpu: ${this._cpu} ram: ${this._ram}`
			);
	}
}


var elements = document.getElementsByTagName('h2');

  var animation = anime(
 	 {
	  	targets:elements,
	  	scale:1.4,
	  	duration:1500,
	  	delay: anime.stagger(100)
	}
);

document.querySelector('h2').onclick = animation.play;


function checkSign(num){

return num < 0 ? "negative" : num > 0 ? "positive" : "zero";

};

const sum = function(...args){
	return args.reduce( (a,b) => a + b );
}

function darkMode(){
		console.log('dark');
		let background = document.body;
		background.style.backgroundColor = "black";
		let text = document.getElementsByTagName('h2');
		for(let i = 0; i < text.length; i++){
			text[i].style.color = "white";
		}
		
		
}
function lightMode(){
		console.log('light');
		let background = document.body;
		background.style.backgroundColor = "white";
		let text = document.getElementsByTagName('h2','h1');
		for(let i = 0; i < text.length; i++){
			text[i].style.color = "black";
		}
	
}	


function hello(){
	msg.textContent = 'Hello World';
}

const msg = document.getElementById('test');
const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');

msg.addEventListener('click', hello, false)
darkBtn.addEventListener('click', darkMode, false);
lightBtn.addEventListener('click', lightMode, false);








