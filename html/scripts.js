$(function () {
    var sound = new Audio('sound.mp3');
    sound.volume = 1.0;
    window.addEventListener('message', function (event) {
        if (event.data.action == 'open') {
            let animaentrar = 'spring(3, 100, 35, 10)'
            let animasair = 'spring(5, 80, 5, 0)'
            var xentrar = 195
            var xsair = -500 

            if (event.data.align == 'direita'){
                $(`.noty`).css({
                    "float": "right"
                })

                animaentrar = 'spring(3, 30, 35, 10)'
                animasair = 'spring(1, 80, 100, 0)'
                xentrar = -50
                xsair = 500
            }

            var number = Math.floor((Math.random() * 1000) + 1);
            if (event.data.static != 'desligar'){
                $('.noty').append(`
                <div class="wrapper-${number}">
                    <div class="notification_main-${number}">
                        <div class="title-${number}"></div>
                        <div class="text-${number}">
                            ${event.data.message}
                        </div>
                    </div>
                    <div class="barra-${number}"></div>
                </div>`)

           
                $(`.wrapper-${number}`).css({
                    "margin-bottom": "1px",
                    "width": "300px",
                    "margin": "0 0 8px -180px",
                    "border-radius": "15px",
                    "border-color": "rgba(255, 255, 255, 0.2)",
                    "border-style": "inset",
                    "border-width": "1px"
                })

                $('.notification_main-'+number).addClass('main')
                $('.text-'+number).css({
                    "font-size": "14px"
                })
            }
            
            if (event.data.time != "ligada"){
                $(`.barra-${number}`).css({
                    "width": "0%",
                    "height": "4px",
                    "margin-bottom": "8px",
                    "border-radius": "13px",
                    "margin-left": "15px",
                    "background-color": "#ffffffc9",
                    "animation-duration": event.data.time+"ms",
                    "animation-name": "progress-bar",
                    "animation-timing-function": "linear"
                })
            }
            if (event.data.type == 'sucesso') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-size": "16px",
                    "font-weight": "600"
                })
                $(`.notification_main-${number}`).addClass('sucesso-icon')
                $(`.wrapper-${number}`).addClass('sucesso')
                sound.play();
            } else if (event.data.type == 'informacao') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-size": "16px",
                    "font-weight": "600"
                })
                $(`.notification_main-${number}`).addClass('informacao-icon')
                $(`.wrapper-${number}`).addClass('informacao')
                sound.play();
            } else if (event.data.type == 'erro') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-size": "16px",
                    "font-weight": "600"
                })
                $(`.notification_main-${number}`).addClass('erro-icon')
                $(`.wrapper-${number}`).addClass('erro')
                sound.play();
            } else if (event.data.type == 'aviso') {
                $(`.title-${number}`).html(event.data.title).css({
                    "font-size": "16px",
                    "font-weight": "600"
                })
                $(`.notification_main-${number}`).addClass('aviso-icon')
                $(`.wrapper-${number}`).addClass('aviso')
                sound.play();
            }
            anime({
                targets: `.wrapper-${number}`,
                translateX: xentrar,
                duration: 750,
                easing: `${animaentrar}`,
            })
            if (event.data.time === "ligada"){
                ligada=number
            }else{
                setTimeout(function () {
                    anime({
                        targets: `.wrapper-${number}`,
                        translateX: xsair,
                        duration: 750,
                        easing: `${animasair}`
                    })
                    setTimeout(function () {
                        $(`.wrapper-${number}`).remove()
                    }, 750)
                }, event.data.time)
            }
            if(event.data.static == 'desligar'){
                anime({
                    targets: `.wrapper-${ligada}`,
                    translateX: xsair,
                    duration: 750,
                    easing: `${animasair}`
                })
                setTimeout(function () {
                    $(`.wrapper-${ligada}`).remove()
                }, 750)
            }   
        }     
    })
})
