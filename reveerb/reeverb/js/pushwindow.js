let isMobMenuOpened = false;

function pushWindow(type){
    var pushwindowcontainer = document.createElement('div'); // Контейнер
    pushwindowcontainer.className = "pushwindowcontainer";

    var window = document.createElement('div'); // Окно
    window.className = "pushwindow";

    var closewindow = document.createElement('span'); // Кнопка закрытия
    closewindow.className = "material-symbols-outlined closepushwindow";
    closewindow.innerHTML = "close"

    var windowbg = document.createElement("div"); // Тёмный фон
    windowbg.className = "pushwindowbg"

    window.appendChild(closewindow);
    pushwindowcontainer.appendChild(window)
    pushwindowcontainer.appendChild(windowbg)

    function initpushWindow(){
        document.body.appendChild(pushwindowcontainer);
    }

    switch(type){
        case "mobile-menu":
            if(!isMobMenuOpened){
                isMobMenuOpened = true;
                initpushWindow()
                window.className = "pushwindow mobilemenu";
                window.insertAdjacentHTML('afterbegin', `
                <h1>Меню</h1>
                <ul>
                    <li><a href="index.html">Главная</a></li>
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
                `)
                windowbg.addEventListener('click',()=>{
                    closepushWindow("mobile-menu");
                })
                closewindow.addEventListener('click', ()=>{
                    closepushWindow("mobile-menu");
                })
            }
            break;
    }
    function closepushWindow(type){
        switch(type){
            case "mobile-menu":
                isMobMenuOpened = false;
                break;
        }
        window.classList.add('hiding');
        windowbg.classList.add('hiding')
        setTimeout(()=>{
            pushwindowcontainer.remove();
        }, 500)
    }
}