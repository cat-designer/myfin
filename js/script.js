const openBtns = document.querySelectorAll(".button-order");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");

function openModal() {
    if (modal) {
        modal.classList.remove("hide");
    }
}

function closeModal(e, clickedOutside) {
    if (modal) {
        if (clickedOutside && e.target.classList.contains("modal-overlay")) {
            modal.classList.add("hide");
        } else if (!clickedOutside) {
            modal.classList.add("hide");
        }
    }
}

openBtns.forEach((btn) => {
    btn.addEventListener("click", openModal);
});

modal.addEventListener("click", (e) => closeModal(e, true));
closeBtn.addEventListener("click", () => closeModal(null, false));