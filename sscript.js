(() => {
	const tabLinks = document.querySelectorAll('.tab__link');
	const tabContentItems = document.querySelectorAll('.tab__item');
	const tabList = document.querySelector('#tab_list');

	tabLinks[0].classList.add('active_tab');
	tabList.addEventListener('click', (e) => {
		tabLinks.forEach((tabLink, i) => {
			const tabContentItem = tabContentItems[i];
			if (tabLink === e.target) {
				tabLink.classList.add('active_tab');
				tabContentItem.classList.add('active_tab-content');
			}
			else {
				tabLink.classList.remove('active_tab');
				tabContentItem.classList.remove('active_tab-content');
			}
		});
	});
})();
