# Tibia Rashid - JavaScript

## Como foi criado ?

A ideia veio do jogo Tibia.com a cada dia o NPC Rashid aparece em uma cidade diferente, porém em uma ordem especifica.

### _Array_ das cidades
  * Carlin // 0
  * Svarground // 1
  * Liberty Bay // 2
  * Port Hope // 3
  * Ankrahmun // 4
  * Darashia // 5
  * Edron // 6

### Retorno da function getDay()
  * Domigo // 0
  * Segunda // 1
  * Terça // 2
  * Quarta // 3
  * Quinta // 4
  * Sexta // 5
  * Sabado // 6

O save do jogo acontece todos os dias as 5:00am, sendo assim o dia só muda depois deste horário.

O HTML5 e CSS3 foram feitos para serem implementados em qualquer site na proporção width: 300px e height: 210px _Fique a vontade para usar_

### Com essas informçãoes em mãos vamos começar o JavaScript

1. Primeiro criei um _Array_ das cidades para guardar as informações.
    * let localRashid = new Array ("Carlin", "Svargrond", "Liberty Bay", "Port Hope", "Ankrahmun", "Darashia", "Edron")
2. Segundo criei algumas variáveis para conseguir trabalhar com dia e horário usando a function _Date_()
    * let dia = new Date() - Essa variável recebe "Dia da Semana, mês, dia do mês, ano e horário.
    * let h = dia.getHours() - Essa variável me retorna o horário que estamos agora.
3. Terceiro criei uma variável para pegar o dia da semana em que estamos.
    * let diaSemana = (localRashid[dia.getDay()]) - Essa variável me retorna o dia da semana que estamos em número de 0 a 6
4. Quarto criei uma variável para armazenar o horário do Server Save no caso 5:00am
5. Quinto comecei a trabalhar na function que foi feita da seguinte forma, dei o nome de time()
    * Dentro da Function abri um IF para comparar se o dia da semana _"vamos supor que hoje e Quarta-Feira"_ esta igual ao _Array_ das cidades
        * if (diaSemana == localRashid[0]) - Este IF verifica se diaSemana _"No caso aqui dia da semana"_ e igual ao localRashid 0
        * Se a condição for True ele passa para o próximo IF, caso seja False ele volta para o IF anterior e confere o localRashid 1 e assim por diante até o localRashid 6
        * Esse IF confere se o horário que estamos agora e maior ou igual ao horário do Server Save
        * Se o horário for maior ou igual ele executa uma ação que mostra no navegador onde o NPC Rashid se encontra na Quarta-Feira, neste caso em Port Hope
        * Caso o horário seja menor ele executa outra ação que também mostra no navegador o local que o NPC Rashid se encontra no dia anterio, neste caso em Liberty Bay.