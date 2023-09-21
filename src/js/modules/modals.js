const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const trigger = document.querySelectorAll(triggerSelector),
		      modal = document.querySelector(modalSelector),
		      close = document.querySelector(closeSelector),
		      window = document.querySelectorAll('[data-modal]'),
			  scroll = calcScroll();

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}

				hideDataModal();
				showModalDisplay();

				document.body.style.marginRight = `${scroll}px`;
			});
		});

		close.addEventListener('click', () => {
			hideDataModal();
			hideModalDisplay()

			document.body.style.marginRight = `0px`;
		});

		document.addEventListener('keydown', (e) => {
			if (e.code === 'Escape' && modal.classList.contains('popup-design') || modal.classList.contains('popup-consultation')) {
				hideModalDisplay();
			}
		})


		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) {
				hideDataModal();

				hideModalDisplay()

				document.body.style.marginRight = `0px`;
			}
		});


		function showModalDisplay() {
			modal.style.display = 'block';
			document.body.overflow = 'hidden';
		}

		function hideModalDisplay() {
			modal.style.display = 'none';
			document.body.overflow = '';
		}

		function hideDataModal() {
			window.forEach(item => {
				item.style.display = 'none';
			});
		}

		function showModalByTime(selector, time) {
			setTimeout(function() {
				document.querySelector(selector).style.display = 'block';
				document.body.style.overflow = 'hidden';
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
	}

	bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
	// showModalByTime();

};

export default modals;