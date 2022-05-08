const title = document.getElementById("title");
const modal = document.getElementById("modal");

title.addEventListener("animationend", () => {
	const container = document.getElementById("container");

	container.style.justifyContent = "center";

	container.innerHTML = `
    <a href="#" id="btn-toggle" onclick="openModal()">
      Mais um link secreto <br> 😳😳😳😳😳😳😳😳😳😳😳😳😳
    </a>
  `;
});

document.getElementById("close-modal").onclick = () => {
	if (modal.classList.contains("show")) {
		modal.classList.remove("show");
		modal.classList.add("close");
	}
};

function openModal() {
	if (!modal.classList.contains("show")) {
		modal.classList.add("show");

		if (modal.classList.contains("close")) modal.classList.remove("close");
	}
}
