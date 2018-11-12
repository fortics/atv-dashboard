# Atividade de dashboard
Este repositório tem como objetivo testar os conhecimentos sobre Web Designer dos colaboradores.
A finalidade é a criação de uma tela de dashboard, com os dados requisitados da aplicação NodeJS aqui descrita.

## Pré-requisitos
É necessário conter na máquina instalado **NodeJS** para executar o server.

## Iniciando servidor de dados
Para iniciar o servidor que irá conter a lista de dados para preencher o dashboard.
Instale os pacotes dependentes
```bash
npm install
```
Execute o comando abaixo para iniciar o servidor
```bash
npm start
```
Quando iniciado será possível realizar requisições para o servidor na porta 3000, para poder recuperar dados.

## Dados que devem trazer no dashboard
O dashboard deve conter os itens abaixo, dispostos de forma simétrica na tela da dashboard.
É de extrema importancia que a tela seja responsiva.
É de preferencia que consiga ver todos os dados dispostos em telas largas, sem a necessidade de rolagem.
A utilização de gráficos é importante para os dados solicitados como gráfico.
Os dados devem ser atualizados a cada 5 segundos com as novas informações

- Quantidade de atendimentos por agente (gráfico)
- Quantidade de timeouts por agente (gráfico)
- Contatos e quantidade de atendimentos
- Total de clientes em espera
- Total de clientes em atendimento
- Total de clientes finalizados 
- Total de clientes timeout
- Total de TMA de clientes
- Total de TME de clientes
- Atendimentos por hora (gráfico)

## Finalizado
Quando finalizado deve ser submetido para o github pessoal o codigo completo da sua aplicação e uma documentação de como utilizar.
Deve ser enviado para o email lucas@fortics.com.br o endereço do repositorio