const pictureSize = (imgSelector) => {
	const blocks = document.querySelectorAll(imgSelector);

	function showImg(block) {
		const img = block.querySelector('img');
		img.src = img.src.slice(0, -4) + '-1.png';
		block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
			p.style.display = 'none';
		});
	}

	function hidewImg(block) {
		const img = block.querySelector('img');
		img.src = img.src.slice(0, -6) + '.png';
		block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
			p.style.display = 'block';
		});
	}

	blocks.forEach(block => {
		block.addEventListener('mouseover', () => {
			showImg(block);
			block.classList.add('animated', 'fadeIn');
		});

		block.addEventListener('mouseout', () => {
			hidewImg(block);
			block.classList.remove('animated', 'fadeIn');
		})
	});
};

export default pictureSize;