var vm = new Vue({
	el: 'main',
	data: {
		activeTab: 'first'
	},
	methods: {
		changeTab(tabName) {
			this.activeTab = tabName;
		}
	}
})
