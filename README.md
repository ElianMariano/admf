# AdministracaoFinanceira
Aplicação desenvolvida com ReactJs que calcula formulas de administração financeira.

<img alt="Administração financeira" src="assets/admf.png" width="80%" />

### Valor presente

A formula para calcular o valor presente obtêm o valor atual em dinheiro de um montante futuro, a partir desta formula é possível mensurar quanto em dinheiro poderá ser investido a uma determinada taxa de juros para que corresponda a um montante futuro.

### Valor Futuro

Para calcular o valor futuro de uma quatia é necessário aplicar a formula de juros compostos ao longo de um determinado prazo.

### Valor Presente Líquido

O valor presente líquido (VPL) é encontrado através da subtração do investimento inicial do projeto, do valor presente de suas entradas de caixa, descontados às taxas de juros da empresa. Na aplicação, o perído de tempo é obtido a partir da quantidade de fluxos de caixa adicionados.

### Payback

A formula para calcular o Payback é a mesma usada para obter o VPL, porém o valor desejado é o tempo o qual o VPL se iguala à zero, ou seja, o tempo necessário para que o projeto comece a obter resultados positivos de fluxos de caixa descontado a valor presente.

### Taxa de Retorno Interno

A Taxa de Retorno Interno (TIR) corresponde a taxa de juros que a empresa obterá, dado entradas de caixa previstas. Para calculá-la se utiliza a formula do VPL. A TIR é um valor o qual só pode ser obtido através de tentativa e erro, portanto para obter esse valor foi necessário que valores diferentes fossem testados. Para isso, a aplicação utiliza um algorítmo conhecido como método da bissecção, o qual consiste em definir um intervalo entre a e b o qual se sabe que a raiz de uma função se encontra entre este intervalo pré-definido. Então, divide-se o intervalo na metade e atribui-se novos valores para a ou para b escolhendo qual dos dois mudará de acordo com a condição de que a raiz da função se encontre entre este intervalo. Fazendo este processo varias vezes, os valores a e b se aproximarão cada vez mais da raiz desejada, podendo definir uma tolerância de diferença entre eles, ou seja, quantas casas decimais de precisão serão levadas em consideração ao calcular a raiz desejada. Esse algorítmo diminui a quantidade de valores os quais são testados, consequentemente diminuindo o processamento da aplicação.