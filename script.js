const navToggleButton = document.querySelector('#navToggleButton')
const navigation = document.querySelector('#navigation')

navToggleButton.addEventListener("click", () => {
    navigation.classList.toggle('active_nav')
    // navToggleButton.classList.toggle('')
})