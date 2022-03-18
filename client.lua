local fixa = false

function Alerta(title, message, time, type)
    if time == "desligada" then
        fixa=false
        SendNUIMessage({
            action = 'desligar'
        })
    elseif time == "ligada" and not fixa then
        fixa=true
        SendNUIMessage({
            action = 'open',
            title = title,
            type = type,
            message = message,
            time = time
        })
    elseif time ~= "ligada" then
        SendNUIMessage({
            action = 'open',
            title = title,
            type = type,
            message = message,
            time = time
        })
    end
end

RegisterNetEvent('zcmg_notificacao:Alerta')
AddEventHandler('zcmg_notificacao:Alerta', function(title, message, time, type)
    Alerta(title, message, time, type)
end)

RegisterCommand('notificacoes', function()
    exports['zcmg_notificacao']:Alerta("SUCESSO", "Sistema de notificações por <span style='color:#1ca800'>ZCMG</span>!", 3500, 'sucesso')

    exports['zcmg_notificacao']:Alerta("", "Sistema de notificações por <span style='color:#1c77ff'>ZCMG</span>!", 3500, 'informacao')

    exports['zcmg_notificacao']:Alerta("ERRO", "Sistema de notificações por <span style='color:#ff1c1c'>ZCMG</span>!", 5000, 'erro')

    exports['zcmg_notificacao']:Alerta("Aviso", "Sistema de notificações por ZCMG", 40000, 'aviso')
end)


RegisterCommand('ligar', function()
    exports['zcmg_notificacao']:Alerta("SUCESSO", "Sistema de notificações por <span style='color:#1ca800'>ZCMG</span>!", 'ligada', 'sucesso')

end)

RegisterCommand('desligar', function()
    exports['zcmg_notificacao']:Alerta("", "", 'desligada', '')

end)
