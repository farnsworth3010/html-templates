let points = document.getElementById("pageindicator").getElementsByTagName("a")
let positions = document.getElementsByClassName("scroll-top")

document.addEventListener("scroll", ()=>{
    for(let i = positions.length-1; i >= 0; i--){
        if(positions[i].getBoundingClientRect().top-1<0){
            for(let j of points){
                j.classList.remove("active")
            }
            points[i].classList.add("active");
            break;
        }
    }
})