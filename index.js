// template_167xtah
// service_o36k3v7
// 2oTArQkrBXAbE0A-d

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector(".modal__overlay--loading")
    const success = document.querySelector(".modal__overlay--success")
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            "service_o36k3v7",
            "template_167xtah",
            event.target,
            "2oTArQkrBXAbE0A-d"
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "This email service is temporarily unavailable. Please contact me directly on hdalieh@gmail.com."
        )
    })
}