<div align="center">
<img src="https://user-images.githubusercontent.com/88593228/154800245-733a5322-febc-445c-a26e-08b97d74e8df.png" />
</div>

**FiveM ESX Script**

Sistema de notificações

Desenvolvido por: **zcmg#5307**

**Como usar:**

**Ficheiros client:**</br>
exports['zcmg_notificacao']:Alerta("Título", "Mensagem", Tempo, 'Tipo')

**Ficheiros server:**</br>
TriggerClientEvent('zcmg_notificacao:Alerta', source, "Título", "Mensagem", Tempo, 'Tipo')

**Variaveis:**</br>
Título: O titulo que quer dar a notificação (pode ficar em branco) </br>
Mensagem: Mensagem da notificação (pode ser usado tags html)</br>
Tempo: Tempo de exibição da notificação (valor em milissegundos (ms))</br>
Tipo: Tipo de notificacão</br>
- sucesso (verde)</br>
- infomacao (azul)</br>
- erro (vermelha)</br>
- aviso (amarela)</br>

**Exemplos:**</br>
exports['zcmg_notificacao']:Alerta("SUCCESSO", "Sistema de notificações por <span style='color:#1ca800'>ZCMG</span>!", 3000, 'sucesso')</br>
exports['zcmg_notificacao']:Alerta("", "Sistema de notificações por <span style='color:#1c77ff'>ZCMG</span>!", 3500, 'infomacao')</br>
exports['zcmg_notificacao']:Alerta("ERRO", "Sistema de notificações por <span style='color:#ff1c1c'>ZCMG</span>!", 5000, 'erro')</br>
exports['zcmg_notificacao']:Alerta("Aviso", "Sistema de notificações por ZCMG",4000, 'aviso')
