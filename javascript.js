document.addEventListener("DOMContentLoaded", function () {
    const btnLeft = document.querySelector(".btn-left");
    const btnRight = document.querySelector(".btn-right");
    const slider = document.querySelector(".carruseles");
    const sliderSections = document.querySelectorAll(".slider-section");

    let currentSlide = 0;
    const slideWidth = slider.offsetWidth;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        slider.style.transition = "transform 0.6s ease";
    }

    let autoSlide = setInterval(moveToRight, 3000);

    function moveToRight() {
        if (currentSlide === sliderSections.length - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        updateSlider();
    }

    function moveToLeft() {
        if (currentSlide === 0) {
            currentSlide = sliderSections.length - 1;
        } else {
            currentSlide--;
        }
        updateSlider();
    }

    btnLeft.addEventListener("click", moveToLeft);
    btnRight.addEventListener("click", moveToRight);

    updateSlider();
});

$(document).ready(function () {
    $("#logins").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 4,
                maxlength: 12
            },
            password: {
                required: true,
                minlength: 4,
                maxlength: 8
            }
        },
        messages: {
            nombre: {
                required: "Por favor, introduzca su nombre",
                minlength: "El nombre debe tener al menos 4 caracteres.",
                maxlength: "El nombre no debe tener más de 12 caracteres."
            },
            password: {
                required: "Por favor proporcione una contraseña",
                minlength: "La contraseña debe tener al menos 4 caracteres.",
                maxlength: "La contraseña no debe tener más de 8 caracteres."
            }
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element.parent());
        }
    });
});

$(document).ready(function () {
    $("#registros").validate({

        messages: {
            nombre: {
                required: "Por favor, introduzca su nombre",
                minlength: "El nombre debe tener al menos 4 caracteres.",
                maxlength: "El nombre no debe tener más de 12 caracteres."
            },
            password: {
                required: "Por favor proporcione una contraseña",
                minlength: "La contraseña debe tener al menos 4 caracteres.",
                maxlength: "La contraseña no debe tener más de 8 caracteres."
            },
            mail: {
                minlength: "El E-mail debe tener al menos 11 caracteres.",
                required: true
            }
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element.parent());
        }
    });
});

$(document).ready(function () {
    $("#contacto").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 4,
                maxlength: 12
            },
            mensaje: {
                required: true,
                maxlength: 200
            },
            mail: {
                required: true
            }
        },
        messages: {
            nombre: {
                required: "Por favor, introduzca su nombre",
                minlength: "El nombre debe tener al menos 4 caracteres.",
                maxlength: "El nombre no debe tener más de 12 caracteres."
            },
            msg: {
                required: "Por favor, introduzca un mensaje.",
                maxlength: "El mensaje no debe tener más de 200 caracteres."
            },
            mail: {
                required: "Por favor, introduzca un correo electrónico."
            }
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element.parent());
        }
    });
});

function initializeSearch() {
    const searchInput = document.querySelector('.form-control');
    const boxSearch = document.getElementById('box-search');

    if (searchInput && boxSearch) {
        const items = boxSearch.querySelectorAll('li');

        searchInput.addEventListener('input', function (event) {
            const searchText = event.target.value.trim().toLowerCase();

            let hasResults = false;

            items.forEach(function (item) {
                const text = item.textContent.trim().toLowerCase();

                if (text.includes(searchText)) {
                    item.style.display = 'block';
                    hasResults = true;
                } else {
                    item.style.display = 'none';
                }
            });

            if (hasResults || searchText.length === 0) {
                boxSearch.style.display = 'block';
            } else {
                boxSearch.style.display = 'none';
            }
        });

        document.addEventListener('click', function (event) {
            if (!boxSearch.contains(event.target) && event.target !== searchInput) {
                boxSearch.style.display = 'none';
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", initializeSearch);