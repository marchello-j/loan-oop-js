export default class Download {
	constructor(tiggers) {
		this.btns = document.querySelectorAll(tiggers);
		this.path = "assets/img/mainbg.jpg";
	}

	downloadItem(path) {
		const element = document.createElement("a");

		element.setAttribute("href", path);
		element.setAttribute("download", "nice_picture");

		element.style.display = "none";

		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}

	init() {
		this.btns.forEach(btn => {
			btn.addEventListener("click", () => {
				this.downloadItem(this.path);
			});
		});
	}
}
