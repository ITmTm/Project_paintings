const filter = () => {
	const menu = document.querySelector('.portfolio-menu'),
		  items = document.querySelectorAll('li'),

		  wrapper = document.querySelector('.portfolio-wrapper'),

		  markAll = wrapper.querySelectorAll('.all'),
		  no = document.querySelector('.portfolio-no');

	const typeFilter = (markType) => {
		markAll.forEach(mark => {
			mark.style.display = 'none';
			mark.classList.remove('animated', 'fadeIn');
		});

		no.style.display = 'none';
		no.classList.remove('animated', 'fadeIn');

		if (markType) {
			markType.forEach(mark => {
				mark.style.display = 'block';
				mark.classList.add('animated', 'fadeIn');
			});
		} else {
			no.style.display = 'block';
			no.classList.add('animated', 'fadeIn');
		}
	};


	menu.addEventListener('click', (e) => {
		let target = e.target;

		if (target && target.tagName == 'LI') {
			items.forEach(btn => btn.classList.remove('active'));
			target.classList.add('active');
		}

		wrapper.style.justifyContent = 'center';
	});

	const initializeFilter = (trigger, selector) => {
		const el = document.querySelector(trigger);
		if (el) {
			el.addEventListener('click', () => {
				typeFilter(document.querySelectorAll(selector));
			});
		}
	};

	initializeFilter('.portfolio-menu .all', '.all');
	initializeFilter('.portfolio-menu .chef', '.chef');
	initializeFilter('.portfolio-menu .girl', '.girl');
	initializeFilter('.portfolio-menu .guy', '.guy');
	initializeFilter('.portfolio-menu .grandmother', '.portfolio-no');
	initializeFilter('.portfolio-menu .granddad', '.portfolio-no');
	initializeFilter('.portfolio-menu .lovers', '.lovers');
};

export default filter;