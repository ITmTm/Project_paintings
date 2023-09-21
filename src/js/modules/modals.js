const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const trigger = document.querySelectorAll(triggerSelector),
		      modal = document.querySelectorAll(modalSelector),
		      close = document.querySelectorAll(closeSelector),
		      window = document.querySelectorAll('[data-modal]');
			  scroll = calcScroll();
	}
};

export default modals;