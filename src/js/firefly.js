//--------------------- Fireflies
const firefly_quantity = 15;
const wrapperFirefly = document.querySelector('.wrapper-firefly');

if (wrapperFirefly) {
	for (let i = 1; i <= firefly_quantity; i++) {
		wrapperFirefly.insertAdjacentHTML('beforeend', '<div class="firefly"></div>');
		/*let divFirefly = document.createElement('div');
		divFirefly.classList.add('firefly');
		wrapperFirefly.appendChild(divFirefly);*/
	}
}