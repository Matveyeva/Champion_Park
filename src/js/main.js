$(document).ready(function () {
	//Load Lazy
	$('.lazy').lazy();

	// Показать форму по клику на гамбургер
	const gamburgerBtn = document.querySelector('.btn-bars');
	const modalCloseBtn = document.querySelector('.close-modal');
	const modalForm = document.querySelector('#feedback');

	gamburgerBtn.addEventListener('click', function () {
		modalForm.classList.add('active')
	});
	modalCloseBtn.addEventListener('click', function () {
		modalForm.classList.remove('active')
	});

	// валидация полей формы
	const contactForm = document.querySelector('.contact-form');
	const formGroups = contactForm.querySelectorAll('.form-group');

	contactForm.addEventListener('submit', function (e) {
		e.preventDefault();

		for (let item of formGroups) {
			const inputElement = item.querySelector('input');
			const badgeElement = item.querySelector('.badge');
			const placeholderElement = item.querySelector('.fake-placeholder');

			if (inputElement.value == '') {
				inputElement.classList.add('error');
				placeholderElement.classList.add('active');
				badgeElement.classList.add('hide');
			}
		}
	});
	//  если инпут в фокусе
	for (let item of formGroups) {
		const inputElement = item.querySelector('input');
		const badgeElement = item.querySelector('.badge');
		const placeholderElement = item.querySelector('.fake-placeholder');

		inputElement.addEventListener('focus', function () {
			inputElement.classList.remove('error');
			placeholderElement.classList.remove('active');
			badgeElement.classList.remove('hide');
		})


	}









})