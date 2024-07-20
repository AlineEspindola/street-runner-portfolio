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
                    animationSlideInUp(elements[i].target)
                    break
                case 'main-races-text':
                    animationSlideInUp(elements[i].target)
                    break
                case 'main-races-card-1':
                    animationFadeInUp(elements[i].target, 'animate__delay-1s')
                    break
                case 'main-races-card-2':
                    animationFadeInUp(elements[i].target, 'animate__delay-2s')
                    break
                case 'main-races-card-3':
                    animationFadeInUp(elements[i].target, 'animate__delay-3s')
                    break
                case 'about-img':
                    animatioFadeInLeft(elements[i].target)
                    break
                case 'forms-disclosure-text':
                    animatioFadeInLeft(elements[i].target)
                    break
                case 'sponsors-title':
                    animationSlideInUp(elements[i].target)
                    break
                case 'sponsors-text':
                    animationSlideInUp(elements[i].target)
                    break
                case 'sponsor-1':
                    animationFadeIn(elements[i].target, 'animate__delay-1s')
                    break
                case 'sponsor-2':
                    animationFadeIn(elements[i].target, 'animate__delay-2s')
                    break
                case 'sponsor-3':
                    animationFadeIn(elements[i].target, 'animate__delay-3s')
                    break
                case 'sponsor-4':
                    animationFadeIn(elements[i].target, 'animate__delay-4s')
                    break
                case 'sponsor-5':
                    animationFadeIn(elements[i].target, 'animate__delay-5s')
                    break
                case 'sponsor-6':
                    animationFadeIn(elements[i].target, 'animate__delay-6s')
                    break
                case 'sponsor-7':
                    animationFadeIn(elements[i].target, 'animate__delay-7s')
                    break
                case 'sponsor-8':
                    animationFadeIn(elements[i].target, 'animate__delay-8s')
                    break
            }
        }
    }
})

const animatedItems = document.querySelectorAll(".animated-item")

animatedItems.forEach( (animatedItem) => observer.observe(animatedItem))

window.onresize = function(){
    getDimension()
}

function getDimension(){
    return window.innerWidth
}

function checkSize(){
    if(getDimension() > 991){
        return 'grande'
    }else{
        return 'pequena'
    }
}

function animationSlideInUp(element) {
    element.classList.remove('animated-hidden-element')
    element.classList.add('animate__animated', 'animate__slideInUp')
}

function animationFadeInUp(element, delay) {
    if (checkSize() == 'pequena') {
        element.classList.remove('animated-hidden-element')
        element.classList.add('animate__animated', 'animate__fadeInUp')
    } else {
        element.classList.remove('animated-hidden-element')
        element.classList.add('animate__animated', 'animate__fadeInUp', delay)
    }
}

function animatioFadeInLeft(element) {
    element.classList.remove('animated-hidden-element')
    element.classList.add('animate__animated', 'animate__fadeInLeft')
}

function animationFadeIn(element, delay) {
    if (checkSize() == 'pequena') {
        element.classList.remove('animated-hidden-element')
        element.classList.add('animate__animated', 'animate__fadeIn')
    } else {
        element.classList.remove('animated-hidden-element')
        element.classList.add('animate__animated', 'animate__fadeIn', delay)
    }
}

