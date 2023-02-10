**FiveM ESX Script**

Descontinuado -> Substituído por:

https://esxdeveloperportugal.tebex.io/package/5443056

<div align="center">
<img src="https://cdn.discordapp.com/attachments/859508698879885312/954192451642470430/ezgif-5-4b862f5a4c.gif" />
</div>

Sistema de notificações

Desenvolvido por: **zcmg#5307**

## Como usar

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
- informacao (azul)</br>
- erro (vermelha)</br>
- aviso (amarela)</br>

**Exemplos:**</br>
exports['zcmg_notificacao']:Alerta("SUCCESSO", "Sistema de notificações por <span style='color:#1ca800'>ZCMG</span>!", 3000, 'sucesso')</br>
exports['zcmg_notificacao']:Alerta("", "Sistema de notificações por <span style='color:#1c77ff'>ZCMG</span>!", 3500, 'informacao')</br>
exports['zcmg_notificacao']:Alerta("ERRO", "Sistema de notificações por <span style='color:#ff1c1c'>ZCMG</span>!", 5000, 'erro')</br>
exports['zcmg_notificacao']:Alerta("Aviso", "Sistema de notificações por ZCMG",4000, 'aviso')


**V1.1**</br>
**Notificação fixa**</br>
Permite deixa uma notificacão sempre fixa até ser desligada. Apenas uma notificação fixa. Para isso basta na variável do **Tempo**

**Tempo:**</br>
ligada- Permite ligar a notificação</br>
desligada - Permite desligar a notificação 

**Exemplo:**</br>

Para ligar </br>
exports['zcmg_notificacao']:Alerta("SUCESSO", "Sistema de notificações por <span style='color:#1ca800'>ZCMG</span>!", 'ligada', 'sucesso')

Para desligar</br>
exports['zcmg_notificacao']:Alerta("", "", 'desligada', '')



