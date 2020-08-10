$(document).ready(function () {
	//Load Lazy
	$('.lazy').lazy();

	// Показать форму по клику на гамбургер
	const bodyEl = document.body;
	const gamburgerBtn = document.querySelector('#show-educational');
	const openFormBtn = document.querySelector('#openForm');
	const modalForm = document.querySelector('#feedback');
	const educComplex = document.querySelector('#educational-complex--modal');

	// КЛИК ПО ГАМБУРГЕРУ ПОКАЗАТЬ МОДЛКУ ОБРАЗОВАТЕЛЬНЫЙ КОМПЛЕКС
	gamburgerBtn.addEventListener('click', function (e) {
		e.preventDefault();
		educComplex.classList.add('active');
		bodyEl.classList.add('noscroll');
	});

	// КЛИК ПО КНОПКЕ "НА КАРТЕ"  НА МОДАЛКЕ ОБРАЗОВАТЕЛЬНЫЙ КОМПЛЕКС
	const showMapModal = document.querySelector('#show-map-modal');
	const showAllObjects = document.querySelectorAll('.show-all-objects');
	const hideAllObjects = document.querySelector('#hide-all-objects');
	const mapAllObjects = document.querySelector('#map-all-objects');
	const modalInMap = document.querySelector('#mogal-in-map');

	// первая карта без табов
	showMapModal.addEventListener('click', function () {
		educComplex.classList.remove('active');
		modalInMap.classList.add('active');
		bodyEl.classList.add('noscroll');
	});
	// вторая карта с табами
	for (let item of showAllObjects) {
		item.addEventListener('click', function () {
			mapAllObjects.classList.add('active');
			bodyEl.classList.add('noscroll');
		});

	}

	// закрыть вторую карту с табами
	hideAllObjects.addEventListener('click', function () {
		mapAllObjects.classList.remove('active');
		bodyEl.classList.remove('noscroll');

	})
	// КЛИК НА КНОПКУ ЗАПИСАТЬСЯ В ШАПКЕ
	openFormBtn.addEventListener('click', function () {
		modalForm.classList.add('active')
		bodyEl.classList.add('noscroll');
	});

	// КЛИК ПО КНОПКЕ КРЕСТИК В БОЛЬШИХ МОДАЛКАХ
	const modalCloseBtn = document.querySelectorAll('.close-modal');

	for (let item of modalCloseBtn) {
		item.addEventListener('click', function () {
			this.closest('section').classList.remove('active');
			bodyEl.classList.remove('noscroll');
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
	//  если инпут в фокусе убираем предупреждения
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
	// ФУНКЦИЯ ПОКАЗАТЬ СКРЫТЫЕ КАРТОЧКИ
	function showHideCards(btnName, blockName) {
		btnName.addEventListener('click', function (e) {
			e.preventDefault();
			blockName.classList.add('show-item');
			this.classList.add('hide-item');
		})
	}
	// Показать всех сотрудников
	const btnShowTeam = document.querySelector('#btnShowTeam');
	const otherTeamCards = document.querySelector('#otherTeamCards');
	showHideCards(btnShowTeam, otherTeamCards);

	// Показать всех сотрудников
	const btnShowRev = document.querySelector('#btnShowRev');
	const otherRevCards = document.querySelector('#otherRevCards');
	showHideCards(btnShowRev, otherRevCards);
	// ========== БЛОК РАСПИСАНИЕ ==========

	// ПЕРЕКЛЮЧЕНИЕ ТАБОВ С ВОЗРАСТОМ
	const timetableToggle = document.querySelector('.age-nav');
	const timetableContent = document.querySelectorAll('.timetable-body')

	if (timetableToggle) {
		const timetableBtn = timetableToggle.querySelectorAll('button');

		for (let item of timetableBtn) {
			item.addEventListener('click', function () {
				for (let item of timetableBtn) {
					item.classList.remove('active')
				}
				this.classList.add('active');

				const itemData = this.getAttribute('data-age');
				for (let item of timetableContent) {
					item.classList.remove('active')
					const contentData = item.getAttribute('data-age');
					if (contentData == itemData) {
						item.classList.add('active')
					}
				}
			})
		}
		// СТИКИ Расписание
		let start_pos = $(".timetable-header").offset().top;
		let prev_pos = start_pos;

		$(window).scroll(function (e) {
			let curr_pos = $(".timetable-header").offset().top;

			if (prev_pos != curr_pos) {
				if (!$(".timetable-header-2").hasClass("active")) {
					$(".timetable-header-2").addClass("active");
				}

			} else {
				if ($(".timetable-header-2").hasClass("active")) {
					$(".timetable-header-2").removeClass("active");
				}
			}

			prev_pos = curr_pos;
		});

		// функция отображения скрытых страниц-описаний
		function showDeskPage(clickabelItems, innerDeskPages) {

			for (let item of clickabelItems) {
				item.addEventListener('click', function () {
					for (let item of clickabelItems) {
						item.classList.remove('active');
					}
					for (let item of innerDeskPages) {
						item.classList.remove('active');
					}

					if (item.hasAttribute('data-index')) {
						const lessonData = item.getAttribute('data-index');
						this.classList.add('active');
						for (let item of innerDeskPages) {
							item.classList.remove('active');
							const deskData = item.getAttribute('data-index');

							if (deskData == lessonData) {
								item.classList.add('active');
							}
						}
					}

				})

			}
		}
		// ПОКАЗАТЬ ОПИСАНИЕ ЗАНЯТИЯ 
		const timetableBlock = document.querySelectorAll('.timetable-grid-item');

		for (let item of timetableBlock) {

			const clickItems = item.querySelectorAll('.table-cell');
			const showDescrip = item.querySelectorAll('.timetable-article');
			showDeskPage(clickItems, showDescrip);
		}

	}

	//  ПОКАЗАТЬ ОПИСАНИЕ ПРЕИМУЩЕСТВ
	const benefitsGroup = document.querySelectorAll('.benefits-group');
	for (let item of benefitsGroup) {

		const clickItems = item.querySelectorAll('.card-info');
		const showDescrip = item.querySelectorAll('article');

		showDeskPage(clickItems, showDescrip);
	}
	//  ПОКАЗАТЬ ОПИСАНИЕ ПРЕПОДАВАТЕЛЕЙ
	const teamGroup = document.querySelectorAll('.team-group');
	for (let item of teamGroup) {

		const clickItems = item.querySelectorAll('.card-team');
		const showDescrip = item.querySelectorAll('article');

		showDeskPage(clickItems, showDescrip);
	}
	// ЗАКРЫТИЕ СТРАНИЦ  С ОПИСАНИЯМИ
	const deskPageClose = document.querySelectorAll('.close-desk');
	if (deskPageClose) {
		for (let item of deskPageClose) {
			const itemParent = item.closest('article');
			const itemParentParent = itemParent.closest('.drop-wrapper');
			item.addEventListener('click', function () {
				itemParent.classList.remove('active');
				itemParentParent.querySelector('.clicked-item.active').classList.remove('active');

			})
		}
	}
	// slider
	$('.mini-slider').owlCarousel({
		items: 1,
		dots: false,
		autoplay: true,
		smartSpeed: 400,
		margin: 20,
		mouseDrag: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
	})

})