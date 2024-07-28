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

const enterBtn = document.querySelector(".modal-content__form__btn-wrapper__send");

enterBtn.addEventListener("click", () => {
    const nameInput = document.querySelector(".modal-content__form__name__firsname#name");
    const surnameInput = document.querySelector(".modal-content__form__name__firsname#surename");
		const phoneInput = document.querySelector(".modal-content__form__phone#phone");
		const cityInput = document.querySelector(".modal-content__form__name__city#city");
		const zipInput = document.querySelector(".modal-content__form__name__zip#zip");
    const name = nameInput.value;
    const surname = surnameInput.value;
		const phone = phoneInput.value;
		const city = cityInput.value;
		const zip = zipInput.value;
    console.log (`
Имя: ${name}, 
Фамилия: ${surname},
Номер телефона: ${phone},
Город проживания: ${city},
Индекс: ${zip}.
`);
    closeModal(null, false);
  });

