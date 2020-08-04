$(document).ready(function () {
	//Load Lazy
	$('.lazy').lazy();

	// Показать форму по клику на гамбургер
	const gamburgerBtn = document.querySelector('#show-educational');
	const openFormBtn = document.querySelector('#openForm');
	const modalForm = document.querySelector('#feedback');
	const educComplex = document.querySelector('#educational-complex--modal');

	// КЛИК ПО ГАМБУРГЕРУ ПОКАЗАТЬ МОДЛКУ ОБРАЗОВАТЕЛЬНЫЙ КОМПЛЕКС
	gamburgerBtn.addEventListener('click', function () {
		educComplex.classList.add('active')
	});

	// КЛИК ПО КНОПКЕ "НА КАРТЕ"  НА МОДАЛКЕ ОБРАЗОВАТЕЛЬНЫЙ КОМПЛЕКС
	const showMapModal = document.querySelector('#show-map-modal');
	const showAllObjects = document.querySelector('#show-all-objects');
	const hideAllObjects = document.querySelector('#hide-all-objects');
	const mapAllObjects = document.querySelector('#map-all-objects');
	const modalInMap = document.querySelector('#mogal-in-map');

	// первая карта без табов
	showMapModal.addEventListener('click', function () {
		educComplex.classList.remove('active');
		modalInMap.classList.add('active');

	});
	// вторая карта с табами
	showAllObjects.addEventListener('click', function () {
		mapAllObjects.classList.add('active');

	});

	// закрыть вторую карту с табами
	hideAllObjects.addEventListener('click', function () {
		mapAllObjects.classList.remove('active');

	})
	// КЛИК НА КНОПКУ ЗАПИСАТЬСЯ В ШАПКЕ
	openFormBtn.addEventListener('click', function () {
		modalForm.classList.add('active')
	});

	// КЛИК ПО КНОПКЕ КРЕСТИК В БОЛЬШИХ МОДАЛКАХ
	const modalCloseBtn = document.querySelectorAll('.close-modal');

	for (let item of modalCloseBtn) {
		item.addEventListener('click', function () {
			console.log('555');
			this.closest('section').classList.remove('active')
		});
	}


	// БОЛЬШАЯ ФОРМА В ШАПКЕ  валидация полей формы
	const fedbackForm = document.querySelector('.fedback-form');
	const formGroups = fedbackForm.querySelectorAll('.form-group');


	fedbackForm.addEventListener('submit', function (e) {
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


	//  ФОРМА ЗАКАЗАТЬ ЗВОНОК
	const orderCallForm = document.querySelector('.orderCall-form');
	const orderCallFormInput = orderCallForm.querySelectorAll('.form-group ');

	orderCallForm.addEventListener('submit', function (e) {
		e.preventDefault();
		for (let item of orderCallFormInput) {
			const inputElement = item.querySelector('input');

			if (inputElement.value == '') {
				inputElement.classList.add('error');
			}
		}

	});
	// ФЕЙК ПЛЕЙСХОЛДЕР В ФОРМЕ ОБРАТНЫЙ ЗВОНОК 
	for (let item of orderCallFormInput) {
		const itemInput = item.querySelector('input');
		itemInput.addEventListener('keydown', function () {
			this.closest('.form-group').querySelector('.fake-placeholder2').classList.add('active');
		})
	}
	// ПОКАЗАТЬ ФОРМУ ЗАКАЗАТЬ ЗВОНОК

	const showOrderCallFormBlock = document.querySelectorAll('.showOrderCallForm');
	const hideOrderCallFormBlock = document.querySelectorAll('.hideOrderCallForm');
	for (let btn of showOrderCallFormBlock) {
		const orderCallFormBlock = btn.closest('.form-wrapper').querySelector('.orderCall-form--block');
		btn.addEventListener('click', function () {

			orderCallFormBlock.classList.add('active');
		});
	}

	for (let btn of hideOrderCallFormBlock) {
		const orderCallFormBlock = btn.closest('.form-wrapper').querySelector('.orderCall-form--block');
		btn.addEventListener('click', function () {
			orderCallFormBlock.classList.remove('active');
		});
	}


	//   закрыть success окно по клику на крестик
	const closeSuccessWindow = document.querySelector('.close-success');
	const successWindow = document.querySelector('.success-window');
	if (closeSuccessWindow) {
		closeSuccessWindow.addEventListener('click', function () {
			successWindow.classList.add('hide');
		});
	}


	// КАРТА ОБЪЕКТОВ ДОБАВИТЬ КЛАСС ЭКТИВ ЭЛЕМЕНТАМ МЕНЮ ПО КЛИКУ
	const objectItems = document.querySelectorAll('.objects-menu');

	if (objectItems) {
		for (let item of objectItems) {
			const objectNav = item.querySelectorAll('a');
			for (let nav of objectNav) {
				nav.addEventListener('click', function (e) {
					e.preventDefault();
					for (let item of objectNav) {
						item.classList.remove('active');
					}
					this.classList.add('active')
				})
			}

		}
	}







})