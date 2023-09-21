const modals = () => {
	let btnPressed = false;
	function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
		const trigger = document.querySelectorAll(triggerSelector),
		      modal = document.querySelector(modalSelector),
		      close = document.querySelector(closeSelector),
		      windows = document.querySelectorAll('[data-modal]'),
			  scroll = calcScroll(),
			  present = document.querySelector('.fixed-gift');

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}

				btnPressed = true;

				if (destroy) {
					item.remove();
				}

				hideDataModal();
				showModalDisplay();


				document.body.style.marginRight = `${scroll}px`;
			});
		});

		close.addEventListener('click', () => {

			hideDataModal();
			hideModalDisplay();


			document.body.style.marginRight = `0px`;
		});

		document.addEventListener('keydown', (e) => {
			if (e.code === 'Escape' && modal.classList.contains('popup-design') || modal.classList.contains('popup-consultation') || modal.classList.contains('popup-gift')) {

				hideModalDisplay();

			}
		})


		modal.addEventListener('click', (e) => {
			if (e.target === modal) {


				hideDataModal();

				hideModalDisplay()

				document.body.style.marginRight = `0px`;

			}
		});


		function showModalDisplay() {
			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
			present.style.marginRight = '17px';
		}

		function hideModalDisplay() {
			modal.style.display = 'none';
			document.body.style.overflow = '';
			present.style.marginRight = '0';
		}

		function hideDataModal() {
			windows.forEach(item => {
				item.style.display = 'none';
				item.classList.add('animated', 'fadeIn');
			});
		}
	}

	function showModalByTime(selector, time) {
		setTimeout(function() {
			let display;

			document.querySelectorAll('[data-modal]').forEach(item => {
				if (getComputedStyle(item).display !== 'none') {
					display = 'block';
				}
			});

			if (!display) {
				document.querySelector(selector).style.display = 'block';
				document.body.style.overflow = 'hidden';
				let scroll = calcScroll();

				document.body.style.marginRight = `${scroll}px`;
			}
		}, time);
	}

	function calcScroll() {
		let div = document.createElement('div');

		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflow = 'scroll';
		div.style.visibility = 'hidden';

		document.body.appendChild(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth;
	}

	function openByScroll(selector) {
		window.addEventListener('scroll', () => {
			let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

			if (!btnPressed && (window.scrollY + document.documentElement.clientHeight >= scrollHeight)) {
				document.querySelector(selector).click();
			}
		});
	}

	bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
	bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
	openByScroll('.fixed-gift');
	// showModalByTime('.popup-consultation', 60000);

};

export default modals;