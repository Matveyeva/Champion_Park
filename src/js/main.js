$(document).ready(function () {
	//Load Lazy
	$('.lazy').lazy();

	// Показать форму по клику на гамбургер
	const gamburgerBtn = document.querySelector('.btn-bars');
	const openFormBtn = document.querySelector('#openForm');
	const modalCloseBtn = document.querySelectorAll('.close-modal');
	const modalForm = document.querySelector('#feedback');
	const educComplex = document.querySelector('.educational-complex');

	gamburgerBtn.addEventListener('click', function () {
		educComplex.classList.add('active')
	});

	openFormBtn.addEventListener('click', function () {
		modalForm.classList.add('active')
	});
	for (let item of modalCloseBtn) {
		item.addEventListener('click', function () {
			this.closest('section').classList.remove('active')
		});
	}


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
	//  если инпут в фокусе убирпем предупреждения
	for (let item of formGroups) {
		const inputElement = item.querySelector('input');
		const badgeElement = item.querySelector('.badge');
		const placeholderElement = item.querySelector('.fake-placeholder');

		inputElement.addEventListener('focus', function () {
			inputElement.classList.remove('error');
			placeholderElement.classList.remove('active');
			badgeElement.classList.remove('hide');
		});
	}
	//   закрыть success окно по клику на крестик
	const closeSuccessWindow = document.querySelector('.close-success');
	const successWindow = document.querySelector('.success-window');

	closeSuccessWindow.addEventListener('click', function () {
		successWindow.classList.add('hide');
	})






})