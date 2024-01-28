function increaseNumber(element, interval, speed, max){
    for (var i = 1; i <= max; i++) {
        (function (j) {
            setTimeout(function () {
                element.innerHTML = '+'+j
            }, j * (interval += speed))
        })(i)
    }
}

var occurredNumber1 = false
var occurredNumber2 = false
var occurredNumber3 = false

const observer = new IntersectionObserver( (elements) => {
    for(var i = 0; i < elements.length; i++){
        if(elements[i].isIntersecting){
            const input = elements[i].target || elements[i].srcElement

            switch(input.id) {
                case 'number1':
                    if (!occurredNumber1) {
                        increaseNumber(elements[i].target, 10, 10, 10)
                        occurredNumber1 = true
                    }
                    break
                case 'number2':
                    if(!occurredNumber2) {
                        increaseNumber(elements[i].target, 0.1, 0.19, 180)
                        occurredNumber2 = true
                    }
                    break
                case 'number3':
                    if(!occurredNumber3) {
                        increaseNumber(elements[i].target, 0.1, 0.1999, 200)
                        occurredNumber3 = true
                    }
                    break
                case 'main-races-title':
                    elements[i].target.classList.remove('animated-hidden-element')
                    elements[i].target.classList.add('animate__animated', 'animate__slideInUp')
                    break
                case 'main-races-text':
                    elements[i].target.classList.remove('animated-hidden-element')
                    elements[i].target.classList.add('animate__animated', 'animate__slideInUp')
                    break
                case 'main-races-card-1':
                    elements[i].target.classList.remove('animated-hidden-element')
                    elements[i].target.classList.add('animate__animated', 'animate__slideInUp', 'animate__delay-1s')
                    break
                case 'main-races-card-2':
                    elements[i].target.classList.remove('animated-hidden-element')
                    elements[i].target.classList.add('animate__animated', 'animate__slideInUp', 'animate__delay-2s')
                    break
                case 'main-races-card-3':
                    elements[i].target.classList.remove('animated-hidden-element')
                    elements[i].target.classList.add('animate__animated', 'animate__slideInUp', 'animate__delay-3s')
                    break
            }
        }
    }
})

const animatedItems = document.querySelectorAll(".animated-item")

animatedItems.forEach( (animatedItem) => observer.observe(animatedItem))