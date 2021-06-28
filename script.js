window.addEventListener("DOMContentLoaded", () => {
	const tabs = document.querySelectorAll(".tabheader__item"),
		tabsContent = document.querySelectorAll(".tabcontent"),
		tabsParent = document.querySelector(".tabheader__items");

	function hideTabContent() {
		tabsContent.forEach((item) => {
			item.classList.add("hide");
			item.classList.remove("show", "fade");
		});

		tabs.forEach((item) => {
			item.classList.remove("tabheader__item_active");
		});
	}

	function showTabContent(index = 0) {
		tabsContent[index].classList.add("show", "fade");
		tabsContent[index].classList.remove("hide");
		tabs[index].classList.add("tabheader__item_active");
	}

	hideTabContent();
	showTabContent();
	//delegate event. in the tab parent track the click event, and check if the selected item has a tabheader__item class, then start tab search and search for the item we clicked on, run hideTabContent and showTabContent(index) cleanup functions with selected item index
	tabsParent.addEventListener("click", (event) => {
		const target = event.target;
		if (target && target.classList.contains("tabheader__item")) {
			tabs.forEach((item, index) => {
				if (target == item) {
					hideTabContent();
					showTabContent(index);
				}
			});
		}
	});
});
