document.body.insertAdjacentHTML('beforeend', `
    <div id="bonus-panel">
        <img class="panel-emoji" src="http://info.guardmaster.com.ua/jsbanner/img/present.png" alt="" />Получите подарок 27 11<img class="panel-emoji" src="http://info.guardmaster.com.ua/jsbanner/img/present.png" alt="" />
    </div>
`);
// First banner


document.body.insertAdjacentHTML('beforeend', `
    <div id="bonus-second-panel" class="hidden-panel">
        <div id="bonus-second-panel__header">
            Звоните сейчас с мобильного
        </div>
        <div id="bonus-second-panel__content">   
            <div class="bonus-second-panel__content__line">
                <p>На комплект 20% скидка <img class="panel-emoji" src="http://info.guardmaster.com.ua/jsbanner/img/present.png" alt="" /> </p>
                <p>На комплект 20% скидка тестовый текст <img class="panel-emoji" src="http://info.guardmaster.com.ua/jsbanner/img/present.png" alt="" /></p>
            </div>
            <div class="bonus-second-panel__content__line">
                <p>Успейте до конца недели <img class="panel-emoji" src="http://info.guardmaster.com.ua/jsbanner/img/present.png" alt="" /></p>
                <p>Even the all-powerful Pointing <img class="panel-emoji" src="http://info.guardmaster.com.ua/jsbanner/img/present.png" alt="" /></p>
            </div>
        </div>
        <div id="bonus-second-panel__footer">
            <a href="tel:+1234567890" class="bonus-second-panel__number"><img src="http://info.guardmaster.com.ua/jsbanner/img/phone.png" alt="" /> +123456789012</a>
            <a href="tel:+1234567890" class="bonus-second-panel__number"><img src="http://info.guardmaster.com.ua/jsbanner/img/phone.png" alt="" /> +123456789012</a>
        </div>
        <div class="bonus-panel__close" id="bonus-second-panel__close">
            <img src="http://info.guardmaster.com.ua/jsbanner/img/closebonuspanel.png" alt="" />
        </div>
    </div>
`)
// Second banner

document.head.insertAdjacentHTML('beforeend', `<link href="http://info.guardmaster.com.ua/jsbanner/bonus6.css" rel="stylesheet">`)
// css url




document.getElementById("bonus-panel").addEventListener("click", ()=>{
    showSecondPanel();
});
// change first banner to second after click


let oldPos, newPos;
document.addEventListener('scroll', ()=>{
    newPos = window.pageYOffset;
    if(newPos>oldPos){
        document.getElementById("bonus-panel").classList.add("bonus-panel-active");
        document.getElementById("bonus-second-panel").classList.add("bonus-panel-active");
    }
    else{
        document.getElementById("bonus-panel").classList.remove("bonus-panel-active");
        document.getElementById("bonus-second-panel").classList.remove("bonus-panel-active");
    }
    oldPos = newPos;
})
// show banners when scroll


function showSecondPanel(){
    document.getElementById("bonus-panel").classList.add("hidden-panel");
    setTimeout(()=>{
        document.getElementById("bonus-second-panel").classList.remove("hidden-panel");
    }, 300)
}
// show second panel method
document.getElementById("bonus-second-panel__close").addEventListener('click', closeSecondPanel);


// close second panel method
function closeSecondPanel(){
    document.getElementById("bonus-second-panel").classList.add("hidden-panel");
    setTimeout(()=>{
        document.getElementById("bonus-panel").classList.remove("hidden-panel");
    }, 300)
}