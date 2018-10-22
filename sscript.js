(() =>{
	let tabLinks = document.querySelectorAll('.tab__link');
	let	tabContentItems = document.querySelectorAll('.tab__item');
	let	tabList = document.querySelector('#tab_list');

	tabLinks[0].classList.add('active_tab');
	tabList.addEventListener('click', (e) =>{
		for(let i = 0; i < tabLinks.length; i++){
			if (tabLinks[i] != e.target) {
				tabLinks[i].classList.remove('active_tab');
				tabContentItems[i].classList.remove('active_tab-content');
			}
			else{
				tabLinks[i].classList.add('active_tab');
				tabContentItems[i].classList.add('active_tab-content')
			}
		}
	})
})();