$(function () {
    var sound = new Audio('sound.mp3');
    sound.volume = 1.0;
    window.addEventListener('message', function (event) {
        if (event.data.action == 'open') {
            var number = Math.floor((Math.random() * 1000) + 1);
            $('.toast').append(`
            <div class="wrapper-${number}">
                <div class="notification_main-${number}">
                    <div class="title-${number}"></div>
                    <div class="text-${number}">
                        ${event.data.message}
                    </div>
                </div>
            </div>`)
            $(`.wrapper-${number}`).css({
                "margin-bottom": "10px",
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
                translateX: 195,
                duration: 750,
                easing: 'spring(5, 100, 35, 10)',
            })
            setTimeout(function () {
                anime({
                    targets: `.wrapper-${number}`,
                    translateX: -500,
                    duration: 750,
                    easing: 'spring(5, 80, 5, 0)'
                })
                setTimeout(function () {
                    $(`.wrapper-${number}`).remove()
                }, 750)
            }, event.data.time)
        }
    })
})
