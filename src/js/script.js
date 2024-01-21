function increaseNumber(element, interval, speed, max){
    for (var i = 1; i <= max; i++) {
        (function (j) {
            setTimeout(function () {
                element.innerHTML = '+'+j
            }, j * (interval += speed));
        })(i)
    }
}

const observer = new IntersectionObserver( (elements) => {
    for(var i = 0; i < elements.length; i++){
        if(elements[i].isIntersecting){
            const input = elements[i].target || elements[i].srcElement

            switch(input.id){
                case 'number1':
                    increaseNumber(elements[i].target, 10, 10, 10)
                    break
                case 'number2':
                    increaseNumber(elements[i].target, 0.1, 0.19, 180)
                    break
                default:
                    increaseNumber(elements[i].target, 0.1, 0.1999, 200)
            }
        }
    }
})

const animatedItems = document.querySelectorAll(".animated-item")

animatedItems.forEach( (animatedItem) => observer.observe(animatedItem))