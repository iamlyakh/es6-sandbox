import data from './db';

const addedData = [...data, ...['bird']];
const appDiv = document.getElementsByClassName('app')[0];

function es6Test() {
	addedData.forEach(animal => {
		appDiv.innerHTML += animal + '<br/>';
	});
}

es6Test();

