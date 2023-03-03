console.log('hello!!!')

const observer = new IntersectionObserver(( entries ) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')

        }
    })
})

const hiddenEls = document.querySelectorAll('.hidden')
hiddenEls.forEach(el =>  observer.observe(el))
console.log(hiddenEls)