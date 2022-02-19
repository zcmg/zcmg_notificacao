function Alerta(title, message, time, type)
    SendNUIMessage({
        action = 'open',
        title = title,
        type = type,
        message = message,
        time = time
    })
end

RegisterNetEvent('zcmg_notificacao:Alerta')
AddEventHandler('zcmg_notificacao:Alerta', function(title, message, time, type)
    Alerta(title, message, time, type)
end)

RegisterCommand('notificacoes', function()
    exports['zcmg_notificacao']:Alerta("SUCESSO", "Sistema de notificações por <span style='color:#1ca800'>ZCMG</span>!", 3000, 'sucesso')

    exports['zcmg_notificacao']:Alerta("", "Sistema de notificações por <span style='color:#1c77ff'>ZCMG</span>!", 3500, 'infomacao')

    exports['zcmg_notificacao']:Alerta("ERRO", "Sistema de notificações por <span style='color:#ff1c1c'>ZCMG</span>!", 5000, 'erro')

    exports['zcmg_notificacao']:Alerta("Aviso", "Sistema de notificações por ZCMG",4000, 'aviso')
end)
