let slider = document.getElementById("slider")
let slides = slider.getElementsByClassName("slider__slide")
let slide = 1
let slidesCount = slides.length

function nextSlide(){
    if(slide === slidesCount){
        slide = 1
        for(let x of slides){
            x.classList.remove("slider__slide_active")
        }
        slides[0].classList.add("slider__slide_active")
    }
    else{
        ++slide
        for(let x of slides){
            x.classList.remove("slider__slide_active")
        }
        slides[slide-1].classList.add("slider__slide_active")
    }
}

function prevSlide(){
    if(slide === 1){
        slide = slidesCount
        for(let x of slides){
            x.classList.remove("slider__slide_active")
        }
        slides[slidesCount-1].classList.add("slider__slide_active")
    }
    else{
        --slide
        for(let x of slides){
            x.classList.remove("slider__slide_active")
        }
        slides[slide-1].classList.add("slider__slide_active")
    }
}