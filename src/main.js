

// Substitua esta string pelas linhas do seu CSV (aqui está uma amostra baseada nos seus dados reais)
const csvBruto = `Idade:,Gênero,(Apenas para estudantes do IMPA Tech) Qual é a sua ênfase? ,1. O conhecimento científico deve começar pela observação da realidade.,2. Uma teoria ciêntifica precisa permitir a possibilidade de ser testada e até refutada.,3. O que a comunidade científica aceita influencia o que é considerado ciência. ,4. Diferentes teorias podem coexistir explicando o mesmo fenômeno. ,"5. Quando um fenômeno acontece várias vezes da mesma forma, isso ajuda a identificar um padrão. ",6. A maior parte do trabalho científico ocorre dentro de teorias já estabelecidas. ,7. Uma teoria que explica qualquer resultado possível pode não ser uma boa teoria científica. ,8. A ciência não deve ser limitada por regras fixas e rígidas. ,"9. Para aceitar um resultado científico, é importante que o experimento possa ser repetido. ",10. Nenhuma teoria científica pode ser considerada definitivamente verdadeira. ,11. Mudanças importantes na ciência acontecem principalmente em momentos de crise. ,"12. Ao avaliar uma teoria, é importante buscar também situações que possam contradizê-la. ",13. Outras formas de conhecimento podem ter valor semelhante ao conhecimento científico. ,14. O progresso da ciência ocorre mais por rupturas do que por mudanças pequenas e contínuas. ,"15. Se algo sempre aconteceu no passado, é provável que volte a acontecer no futuro. ",16. Não existe apenas um único método que sirva para toda a ciência. ,"17. Na sua opinião, o que torna algo científico? (OPCIONAL)   ",Bacon,Popper,Kuhn,Feyerabend,Autor_Predominante,Segundo_Predominante
0,18 - 24 anos,Feminino,Matemática,2,0,1,1,2,1,2,-2,0,0,1,2,2,1,2,2,,2.0,1.0,0.8,0.8,Bacon,Popper
1,18 - 24 anos,Feminino,Ciência de Dados,-1,2,1,2,2,1,0,1,2,0,-1,1,-1,-1,1,1,,0.3,1.0,0.4,0.0,Popper,Kuhn
2,25 - 34 anos,Feminino,Ciência de Dados,1,1,2,0,2,-1,0,-1,0,0,1,2,2,0,-1,1,,1.0,0.6,0.4,0.8,Bacon,Feyerabend
3,18 - 24 anos,Feminino,Física,1,1,1,1,1,-1,0,0,2,2,1,1,0,-1,-1,0,,0.7,1.0,0.4,0.2,Popper,Bacon
4,18 - 24 anos,Feminino,Ciência de Dados,1,2,2,1,1,-1,1,-1,2,1,1,1,0,-1,1,1,,1.0,1.2,0.6,0.2,Popper,Bacon
5,18 - 24 anos,Feminino,Matemática,-1,1,2,2,2,1,1,1,-1,2,1,1,1,-1,1,2,,0.7,1.4,0.4,1.2,Popper,Feyerabend
6,18 - 24 anos,Feminino,Ciência de Dados,2,1,2,2,2,0,-1,1,2,0,1,1,2,0,0,1,Algo que possa ser provado (?) ,1.0,0.6,1.0,1.2,Feyerabend,Bacon
7,18 - 24 anos,Feminino,Ciência de Dados,1,2,2,1,1,2,1,1,2,2,1,2,1,2,1,2,Aplicação do método científico.,1.0,1.6,1.8,1.2,Kuhn,Popper
8,18 - 24 anos,Feminino,Matemática,1,2,2,1,0,1,2,-1,-1,2,2,2,1,-1,0,2,,1.0,1.8,0.6,1.0,Popper,Bacon
9,18 - 24 anos,Feminino,Ainda no ciclo básico,-1,2,2,2,2,0,1,-1,-1,-2,-1,2,2,-2,1,1,"Algo bem fundamentado em experimentos, observações e método.",0.7,1.0,-0.4,0.2,Popper,Bacon
10,18 - 24 anos,Feminino,Física,-1,1,2,2,1,2,1,1,1,1,-1,2,-1,-2,1,2,Falseabilidade,0.3,1.4,0.4,0.2,Popper,Kuhn
11,18 - 24 anos,Feminino,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1.0,1.0,1.0,1.0,Bacon,Popper
12,35 - 44 anos,Feminino,,1,2,-1,1,1,-1,-1,1,2,1,1,1,-1,-1,1,1,Quando afirmações podem ser testadas e confrontadas. ,0.3,0.8,0.0,0.5,Popper,Feyerabend
13,35 - 44 anos,Feminino,,1,1,2,1,1,-1,1,1,1,1,1,1,1,1,-1,1,,1.0,1.0,0.8,1.0,Bacon,Popper
14,18 - 24 anos,Feminino,Ainda no ciclo básico,1,1,2,2,1,2,2,1,2,-1,0,2,1,0,0,0,"Para que uma teoria seja científica, deve se basear em evidências sólidas, experimentação controlada e replicavel em quaisquer condições diferentes (a não ser que o contrário seja estabelecido na teoria) e não deve, de forma alguma, se basear em dogmas ou regras não comprováveis",1.3,1.2,1.2,0.5,Bacon,Popper
15,18 - 24 anos,Masculino,Ciência de Dados,1,1,2,0,2,-1,-1,2,0,1,1,2,1,0,0,2,,0.7,0.6,0.4,1.5,Feyerabend,Bacon
16,18 - 24 anos,Masculino,Matemática,2,2,2,2,1,-1,1,2,1,-1,1,2,2,-1,1,2,,1.3,1.2,0.4,1.8,Feyerabend,Bacon
17,18 - 24 anos,Masculino,Ciência de Dados,2,1,1,0,1,-1,-2,0,2,1,-1,1,-2,1,0,1,,0.3,0.2,0.4,-0.5,Kuhn,Bacon
18,18 - 24 anos,Masculino,Ainda no ciclo básico,1,2,2,2,1,1,1,-1,1,-1,2,2,0,2,0,2,,1.0,1.2,1.6,0.8,Kuhn,Popper
19,18 - 24 anos,Masculino,Ainda no ciclo básico,2,2,2,1,2,1,-1,1,2,-1,2,2,2,1,0,2,,1.0,0.6,1.6,1.8,Feyerabend,Kuhn
20,18 - 24 anos,Masculino,Ainda no ciclo básico,1,2,1,1,1,1,1,2,2,2,1,2,2,-1,0,1,Formalidade,1.0,1.6,0.8,1.5,Popper,Feyerabend
21,18 - 24 anos,Masculino,Ainda no ciclo básico,-1,0,1,1,1,1,1,0,2,1,2,2,1,-1,1,2,,0.3,1.0,1.0,1.2,Feyerabend,Popper
22,18 - 24 anos,Masculino,Ciência da Computação,1,2,2,0,2,0,-1,-1,2,1,2,2,1,1,0,1,Ser baseado em fatos e apresentar resultados semelhantes e concretos a partir de uma metodologia específica.,0.7,0.8,1.4,0.8,Kuhn,Popper
23,18 - 24 anos,Masculino,Ainda no ciclo básico,1,2,1,0,1,0,1,-1,2,1,1,1,-1,-1,0,1,,1.0,1.0,0.6,0.0,Bacon,Popper
24,18 - 24 anos,Masculino,Ciência da Computação,0,2,1,2,2,0,-1,0,2,2,1,2,2,0,2,2,,0.3,1.4,0.8,1.2,Popper,Feyerabend
25,18 - 24 anos,Masculino,Ainda no ciclo básico,1,1,2,-1,1,-1,-2,-2,2,-1,1,2,2,-2,1,-1,,0.0,-0.2,0.4,0.0,Kuhn,Bacon
26,18 - 24 anos,Masculino,Ciência da Computação,-1,1,2,2,1,1,2,1,2,1,-1,2,2,0,-1,1,,0.7,1.6,0.8,0.8,Popper,Kuhn
27,18 - 24 anos,Masculino,Matemática,-2,-2,-2,1,1,-1,0,1,0,2,1,2,1,0,0,2,,-0.3,0.6,-0.4,1.2,Feyerabend,Popper
28,18 - 24 anos,Masculino,Ciência de Dados,1,2,1,1,1,1,1,2,1,2,1,1,1,-1,1,-1,,1.0,1.4,0.6,0.8,Popper,Bacon
29,18 - 24 anos,Masculino,Ainda no ciclo básico,2,1,2,2,2,-1,1,1,2,2,1,2,-1,-1,1,2,A possibilidade de ser testado por pessoas diferentes para averiguar se os mesmos resultados são atingidos.,1.7,1.6,0.6,0.8,Bacon,Popper
30,18 - 24 anos,Masculino,Ainda no ciclo básico,2,2,1,1,2,-1,0,-1,2,2,2,2,2,-2,0,-1,Conhecimento construído com base no método científico.,1.3,1.4,0.4,0.5,Popper,Bacon
31,18 - 24 anos,Masculino,Matemática,1,2,1,1,0,-2,1,-1,2,1,2,1,2,-1,0,2,"O fazer científico me parece um conjunto contínuo de acontecimentos. Uma teoria pode ser dita científica se resolve os problemas na qual ela se propõe responder, faz novas previsões e pode ser adaptado mediante anomalias. Essa adaptação não seria dada na ""parte mais importante da teoria""; mas no conjunto de hipóteses alteráveis presentes na teoria.",0.7,1.2,0.4,1.2,Popper,Feyerabend
32,18 - 24 anos,Masculino,Ainda no ciclo básico,2,2,-2,2,2,2,1,1,2,2,2,2,2,0,2,2,"Seu rigor científico, em específico, no que diz respeito a forma com a qual a sua experimentação é feita, isto é, se ela é adequada (de forma rigorosa ou não) para a hipótese a ser testada e se trata de testar todos as condições possíveis com as quais o fenômeno estudado está sendo avaliado.",1.7,1.8,0.8,1.8,Popper,Feyerabend
33,18 - 24 anos,Masculino,Ciência de Dados,1,2,1,0,1,1,0,-2,1,1,-1,1,-2,-1,-1,1,,0.7,0.8,0.2,-1.0,Popper,Bacon
34,25 - 34 anos,Masculino,,1,2,-1,0,1,0,0,1,1,0,2,2,1,-2,0,2,,0.7,0.8,0.0,1.5,Feyerabend,Popper
35,25 - 34 anos,Masculino,,1,1,1,1,1,0,1,2,1,1,0,2,1,-1,0,2,Quando o objetivo se torna adquirir conhecimento sobre algo.,1.0,1.2,0.2,1.2,Popper,Feyerabend
36,18 - 24 anos,Masculino,Ciência da Computação,1,2,2,2,1,1,1,-1,1,-1,2,1,-1,-2,2,-1,,1.0,1.0,0.8,-0.2,Bacon,Popper
37,18 - 24 anos,Masculino,,1,2,2,2,1,-2,-1,-1,2,2,0,2,0,-1,1,-1,,0.3,1.4,0.2,-0.5,Popper,Bacon
38,18 - 24 anos,Masculino,,-1,2,1,2,2,0,1,0,2,2,2,2,1,0,1,1,,0.7,1.8,1.0,1.0,Popper,Kuhn
39,18 - 24 anos,Masculino,Física,1,1,2,-1,1,1,2,1,1,1,1,2,0,2,1,2,,1.3,1.0,1.4,1.0,Kuhn,Bacon
40,18 - 24 anos,Masculino,Matemática,-2,2,2,2,-2,-2,2,2,2,2,-2,-2,2,-2,2,2,"Gerar avanços praticos e aplicações, além de possuir a possibilidade de ser corrrgida ou generalizada",-0.7,1.2,-0.4,1.0,Popper,Feyerabend
41,18 - 24 anos,Feminino,,2,1,2,-1,0,1,1,1,0,1,0,1,2,-1,-1,2,,1.0,0.6,0.4,1.2,Feyerabend,Bacon
42,18 - 24 anos,Masculino,Ainda no ciclo básico,1,1,0,2,2,1,1,1,2,1,0,2,1,-1,2,2,,1.3,1.4,0.4,1.0,Popper,Bacon
43,18 - 24 anos,Masculino,Ainda no ciclo básico,2,2,-2,2,2,2,1,2,2,2,2,2,2,2,-1,2,"A possibilidade de ser algo estudado, compreendido ou não e passa por processo lógico ",1.7,1.8,1.2,2.0,Feyerabend,Popper
44,18 - 24 anos,Feminino,Ciência da Computação,2,1,2,1,1,1,1,-1,-2,-1,1,1,-1,-1,-1,1,,1.3,0.6,0.2,0.0,Bacon,Popper
45,18 - 24 anos,Masculino,Matemática,1,2,2,2,2,2,-1,-1,1,-1,1,2,1,-1,1,2,"Algo é científico se responde uma pergunta em aberto ou até produz uma nova pergunta com uma resposta razoável. Basicamente, algo é científico se produz conhecimento. Mas é preciso atender alguns critérios, como: a resposta precisa ter uma sequência lógica, ser impessoal (não depender da opinião do cientista) e estar de acordo com o conhecimento conhecido daquela área, caso contrário, deve refutá-lo.",0.7,0.8,1.0,0.8,Kuhn,Popper
46,18 - 24 anos,Masculino,Física,2,2,1,1,2,0,1,-1,2,2,0,2,1,-1,0,1,,1.7,1.6,0.4,0.2,Bacon,Popper
47,18 - 24 anos,Masculino,Matemática,2,2,1,-2,1,1,2,-2,1,2,-1,2,1,-1,2,-1,,1.7,1.2,0.2,-0.8,Bacon,Popper
48,Até 17 anos,Masculino,Ainda no ciclo básico,1,2,1,1,1,-1,-1,-1,2,2,2,2,1,-2,1,1,,0.3,1.2,0.4,0.8,Popper,Feyerabend
49,18 - 24 anos,Masculino,Ainda no ciclo básico,2,2,1,2,1,-1,0,2,1,1,2,2,1,0,1,2,,1.0,1.4,0.6,1.8,Feyerabend,Popper
50,18 - 24 anos,Masculino,Matemática,1,2,1,1,1,1,2,-1,1,0,1,2,2,0,1,1,,1.3,1.4,0.8,0.8,Popper,Bacon
51,18 - 24 anos,Masculino,Matemática,1,1,2,2,2,2,1,1,-1,2,2,2,0,-1,-1,1,"Deve, primeiramente, ter sucesso nas previsões ou em ser útil.",1.3,1.6,0.8,1.0,Popper,Bacon
52,18 - 24 anos,Masculino,Matemática,0,-2,2,2,2,2,0,2,0,2,0,2,2,-2,0,0,"Consenso, especialmente na academia. O status de um objeto A como científico é uma percepção societária, não necessariamente binária. É um tipo de capital de autoridade dotado de propósitos e privilégios particulares, os quais permitem acesso a ambientes e oportunidades específicos dentro do pacto social. Status em qualquer instância, falando-se ou não de ciência, é uma percepção societária.

Sobre status científico especificamente, os indivíduos relevantes para posicionar o status de um objeto A como científico ou não são os pesquisadores ou acadêmicos (não necessariamente pesquisadores) que de algum modo interagem com o objeto A, seja por meio de pesquisa, referência ou leitura/conhecimento do objeto.

A academia hoje é uma instituição bem estabelecida e não ambígua dentro da sociedade, formada exclusivamente por universidades e jornais de publicação aceitos pelas universidades. O status social da instituição academia perante ao restante da sociedade é o que dá o poder de julgamento e relevância aos seus participantes para determinar status como científico ou não. Pesquisadores fora da academia podem ganhar lugar de fala em uma discussão sobre o status científico ou não de um objeto A de acordo com a aceitação da sua pesquisa por parte da academia. Isso pode ser determinado mediante citações ou explícita evidência de relevância para os trabalhos sendo produzidos dentro da academia, ou mediante a passagem da pesquisa por meios padrões de publicação aos quais as pesquisas da academia também estão sujeitas (peer review e publicação em jornais acadêmicos, uma parte da instituição academia).",0.7,0.8,0.4,1.0,Feyerabend,Popper
53,25 - 34 anos,Feminino,Ciência de Dados,0,1,1,2,1,1,0,2,1,1,0,2,1,-1,-1,1,,0.3,1.2,0.4,1.0,Popper,Feyerabend
54,45 ou mais anos,Masculino,,2,2,1,1,1,1,0,1,2,1,0,2,0,-1,1,1,"A condição essencial é que possa ser verificado e, eventualmente, refutado.",1.0,1.2,0.6,0.5,Popper,Bacon
55,35 - 44 anos,Masculino,,1,2,2,2,1,1,2,1,2,1,1,2,-1,-1,-1,1,"Algo que siga o método científico. Algo que seja verificavel, que possa ser medido e reproduzido. É importante também ser baseado em métodos estatísticos para se evitar vieses cognitivos como viés de confirmação.",1.3,1.8,1.0,0.5,Popper,Bacon
56,35 - 44 anos,Masculino,,0,1,1,1,1,0,1,-1,2,2,0,2,1,-1,0,1,,0.7,1.4,0.4,0.2,Popper,Bacon
57,18 - 24 anos,Masculino,Ainda no ciclo básico,1,2,1,1,2,-1,1,1,2,2,1,2,0,1,1,1,,1.3,1.6,0.8,0.8,Popper,Bacon
58,45 ou mais anos,Masculino,,1,2,1,1,1,0,2,1,1,2,-1,2,-1,-1,1,1,,1.3,1.8,0.0,0.0,Popper,Bacon
59,18 - 24 anos,Feminino,Física,1,2,2,2,2,2,2,1,-1,2,1,1,2,1,2,1,,1.7,1.8,1.0,1.2,Popper,Bacon
60,45 ou mais anos,Masculino,,0,1,0,2,1,1,1,1,-1,2,0,1,1,-1,0,1,"Experimentos controlados e bem feitos estabelecem ""fenômenos científicos"". Muitas vezes eles podem ser replicados por outros grupos. Em outros raros casos, eles são aceitos mesmo sem replicação pois foram cuidadosamente estudados e são fenômenos raros e difíceis. Quando temos dados e uma teoria que ajustam os dados muito bem diria que temos uma ""compreensão científica"". Lembrando que uma teoria não é algo que só explica aqueles dados, em geral ela vai muito além, até mesmo de prever novos fenômenos.",0.7,1.4,-0.2,0.8,Popper,Feyerabend
61,45 ou mais anos,Masculino,,1,1,2,1,1,1,1,-1,1,-1,1,1,0,-1,1,1,,1.0,0.6,0.8,0.2,Bacon,Kuhn
62,45 ou mais anos,Masculino,,1,2,1,1,1,-1,1,1,1,1,1,2,1,1,-1,1,Possibilidade de refutação; reprodutibilidade; consistência lógica; compatibilidade com a realidade objetiva,1.0,1.4,0.6,1.0,Popper,Bacon
63,45 ou mais anos,Feminino,,-1,-1,1,1,1,1,2,1,2,1,-1,1,-1,-1,1,1,"O uso de um método acordado entre pares, a possibilidade de replicabilidade, a contribuição para o desenvolvimento de uma rede de explicabilidade do fenômeno em análise. ",0.7,0.8,0.4,0.0,Popper,Bacon
64,45 ou mais anos,Masculino,,2,2,1,1,1,2,-2,-2,2,2,0,2,0,0,0,-1,Falseabilidade e reprodutibilidade. ,0.3,1.0,1.0,-0.8,Popper,Kuhn
65,35 - 44 anos,Masculino,,2,2,1,2,2,1,2,2,2,-1,0,2,2,-1,1,2,,2.0,1.4,0.6,1.5,Bacon,Feyerabend
66,35 - 44 anos,Masculino,,2,1,0,2,1,2,0,2,1,1,-1,1,-1,1,-2,0,Presenca de matematica nisso,1.0,1.0,0.6,0.0,Bacon,Popper
67,35 - 44 anos,Masculino,,1,1,1,2,2,1,0,-1,1,-2,1,1,-1,-1,1,1,,1.0,0.4,0.6,0.0,Bacon,Kuhn
68,35 - 44 anos,Feminino,,1,1,1,2,1,0,0,0,2,1,0,1,0,-1,-1,1,,0.7,1.0,0.4,0.2,Popper,Bacon
69,45 ou mais anos,Masculino,,1,1,1,1,1,2,1,1,1,2,2,1,1,1,1,1,,1.0,1.2,1.4,1.2,Kuhn,Popper
70,18 - 24 anos,Masculino,Matemática,2,2,1,2,2,1,2,-1,1,2,1,1,2,1,1,1,,2.0,1.8,1.0,0.8,Bacon,Popper
71,18 - 24 anos,Masculino,Matemática,1,2,1,2,2,2,-1,-1,2,0,-2,2,1,-2,1,2,,0.7,1.0,0.2,0.0,Popper,Bacon
72,18 - 24 anos,Outro,Ainda no ciclo básico,2,2,1,1,1,-1,2,-2,2,0,0,-1,2,-1,0,0,"A descrição de algo ser ""científico"" depende da sociedade. E como toda pesquisa que passa pelo social pode ser influenciada pelo meio ao redor, não é livre de influências. Para mim eu não chamo nada de científico, pois só posso confiar plenamente no que sei, e ciência são em geral artes de saberes, logo pela minha definição pessoal chamaria tudo da vida de científico.",1.7,0.8,0.2,0.0,Bacon,Popper
73,45 ou mais anos,Masculino,,2,1,1,-1,1,-1,-1,1,1,1,0,1,1,-1,1,1,,0.7,0.2,0.0,0.8,Feyerabend,Bacon
74,45 ou mais anos,Feminino,,1,1,0,1,1,-1,-1,1,-1,-1,-1,1,1,-1,1,1,,0.3,0.2,-0.8,0.5,Feyerabend,Bacon
75,25 - 34 anos,Masculino,,2,1,2,1,2,1,1,1,2,2,1,1,1,1,2,1,,1.7,1.2,1.4,1.0,Bacon,Kuhn
76,25 - 34 anos,Feminino,,2,2,1,1,1,1,-1,1,2,-1,1,1,0,1,-1,1,,0.7,0.4,1.2,0.8,Kuhn,Feyerabend
77,25 - 34 anos,Feminino,,2,2,1,-1,2,0,1,1,2,-1,1,2,1,-1,1,1,,1.7,0.6,0.6,1.0,Bacon,Feyerabend
78,45 ou mais anos,Feminino,,1,1,-1,0,1,-1,1,0,1,0,-2,1,0,-1,1,0,Curiosidade e investigação.,1.0,0.6,-0.8,-0.5,Bacon,Popper
79,18 - 24 anos,Feminino,,2,2,2,1,2,1,-1,1,2,-2,2,0,1,1,1,2,,1.0,0.0,1.6,1.5,Kuhn,Feyerabend
80,35 - 44 anos,Feminino,,2,2,1,2,2,0,0,-1,1,1,0,2,2,-1,1,2,,1.3,1.4,0.2,0.8,Popper,Bacon
81,25 - 34 anos,Feminino,,1,2,1,2,2,1,-1,1,1,0,1,2,1,1,2,2,,0.7,1.0,1.0,1.2,Feyerabend,Popper
82,25 - 34 anos,Feminino,,1,2,1,2,1,-1,-1,1,1,1,1,1,-1,-1,-1,2,,0.3,1.0,0.2,0.8,Popper,Feyerabend
83,45 ou mais anos,Masculino,,1,2,1,1,1,1,0,1,1,1,1,1,0,1,1,1,Algo estudado com muito rigor e método científico. ,0.7,1.0,1.0,0.8,Popper,Kuhn
84,35 - 44 anos,Feminino,,2,2,1,2,2,0,0,2,2,2,1,2,0,0,0,2,,1.3,1.6,0.8,1.2,Popper,Bacon
85,18 - 24 anos,Masculino,Matemática,1,1,1,1,1,0,0,1,1,1,0,2,2,0,1,1,"Um conhecimento sobre o mundo natural é científico se os métodos empregados para sua obtenção podem ser validados por meio de:

a) Teoria estatística fundamentada em probabilidade matemática.
b) Não ferem princípios lógicos e toda lógica foi empregada devidamente.
c) Sao confiáveis. Mais precisamente, se podem ser replicados, então podem ser confirmados ou falseados. Se não podem ser ser replicados, então a confiança em seus resultados depende de quão rigorosos, controlados e compatíveis com o restante do conhecimento científico são os métodos empregados.",0.7,1.0,0.4,1.0,Popper,Feyerabend
86,18 - 24 anos,Feminino,Ainda no ciclo básico,1,1,1,2,1,0,0,-1,2,-1,0,1,1,-1,1,1,,0.7,0.6,0.4,0.2,Bacon,Popper
87,18 - 24 anos,Masculino,Ainda no ciclo básico,2,0,2,2,2,1,1,1,1,2,0,1,1,0,1,2,,1.7,1.2,0.8,1.0,Bacon,Popper
88,18 - 24 anos,Masculino,Ainda no ciclo básico,2,2,1,1,2,2,-2,0,1,2,1,1,1,2,1,2,Estudo através de observações e a tentativa de explicar de fenômenos e a realidade como um todo.,0.7,0.8,1.4,1.0,Kuhn,Feyerabend
89,18 - 24 anos,Masculino,Ainda no ciclo básico,2,2,1,2,1,1,-1,1,2,0,1,1,1,0,1,2,,0.7,0.8,1.0,1.2,Feyerabend,Kuhn
90,18 - 24 anos,Masculino,Ainda no ciclo básico,1,2,2,1,2,1,0,0,2,2,2,2,-1,0,2,0,,1.0,1.4,1.4,0.2,Popper,Kuhn
91,25 - 34 anos,Feminino,,1,2,1,2,1,1,0,0,1,0,1,2,2,0,1,2,"Do ponto de vista técnico, tudo aquilo que é observado, analisado e testado seguindo o rigor metodológico necessário é científico. No entanto, é importante lembrar que o que entendemos hoje por ""ciência"" não está deslocado do tempo e do espaço. Isso significa que o nosso entendimento sobre o fazer científico tem raízes históricas e políticas — e essa trajetória esteve e está localizada e baseada majoritariamente na Europa, sendo produzida por um setor específico da sociedade. Ainda que se respeite o atual consenso ao redor da metodologia científica, há de se valorizar outras formas de conhecimento que não necessariamente se moldam a esse modo específico de produção (como, por exemplo, os saberes dos povos originários, que são riquíssimos e têm muito a nos ensinar sobre a natureza e a vida).",0.7,1.2,0.8,1.2,Popper,Feyerabend
92,25 - 34 anos,Feminino,,-1,2,2,1,1,1,2,0,1,2,2,2,1,1,2,2,"O que torna algo científico não é uma suposta ""neutralidade"" ou a apresentação de números ou dados, mas sim o compromisso e a honestidade com o que se pesquisa e o caminho que se percorre até encontrar um resultado, ou a falta dele. Penso que, para trazer legitimidade a um conhecimento científico, é importante a transparência com seus métodos e o debate franco e democrático com quem o está elaborando.
Acredito que a ciência não pode ser uma ferramenta fria que ignora fatores que a atravessam, como pontos sociais e econômicos, por exemplo, mas precisa ser um processo plural e aberto para possíveis mudanças de perspectivas que possam aparecer ao longo da investigação.",0.7,1.8,1.4,1.2,Popper,Kuhn
93,18 - 24 anos,Masculino,Matemática,0,-1,1,1,1,1,1,2,-1,0,-1,1,2,-1,0,2,,0.7,0.4,-0.2,1.2,Feyerabend,Bacon
94,18 - 24 anos,Masculino,Física,1,1,2,1,1,1,2,1,-1,2,1,2,1,-2,2,2,,1.3,1.6,0.2,1.2,Popper,Bacon
95,18 - 24 anos,Feminino,Física,-1,2,2,1,1,1,2,1,1,2,1,2,1,-2,2,2,,0.7,1.8,0.6,1.2,Popper,Feyerabend
96,25 - 34 anos,Masculino,Ciência de Dados,2,1,1,1,1,0,0,1,2,1,-1,0,1,-1,-1,1,,1.0,0.6,0.2,0.5,Bacon,Popper
97,18 - 24 anos,Feminino,Ciência de Dados,1,1,0,-1,1,1,1,0,1,-1,1,1,1,-1,1,1,,1.0,0.2,0.4,0.8,Bacon,Feyerabend
98,18 - 24 anos,Masculino,Matemática,0,1,2,2,1,-1,1,1,-1,1,1,0,1,-1,0,2,,0.7,1.0,0.0,1.2,Feyerabend,Popper
99,18 - 24 anos,Masculino,Ciência da Computação,1,1,2,1,1,-1,0,2,0,1,-2,1,0,-2,-1,1,,0.7,0.8,-0.6,0.2,Popper,Bacon
100,18 - 24 anos,Feminino,Ciência de Dados,1,0,1,-1,1,0,2,1,1,0,-1,1,-1,-1,1,1,,1.3,0.4,0.0,0.0,Bacon,Popper
`;

function parserCSV(texto) {
    const linhas = texto.trim().split("\n");
    const resultado = [];
    
    // Identifica as posições dinamicamente pelo cabeçalho
    const cabecalho = linhas[0].split(",");
    const idxBacon = cabecalho.findIndex(c => c.includes("Bacon"));
    const idxPopper = cabecalho.findIndex(c => c.includes("Popper"));
    const idxKuhn = cabecalho.findIndex(c => c.includes("Kuhn"));
    const idxFeyer = cabecalho.findIndex(c => c.includes("Feyerabend"));

    // Ignora a linha 0 (cabeçalho)
    for (let i = 1; i < linhas.length; i++) {
        const colunas = linhas[i].split(",");
        if (colunas.length < 5) continue;

        resultado.push({
            nome: `Aluno ${i}`, // Identificador gerado por linha
            p1: parseFloat(colunas[idxBacon]) || 0,       // Mapeia Bacon como Pontuação 1
            p2: parseFloat(colunas[idxPopper]) || 0,      // Mapeia Popper como Pontuação 2
            p3: parseFloat(colunas[idxKuhn]) || 0,        // Mapeia Kuhn como Pontuação 3
            p4: parseFloat(colunas[idxFeyer]) || 0        // Mapeia Feyerabend como Pontuação 4
        });
    }
    return resultado;
}

// Exporta a variável global que o graphics.js espera usar
const dadosCSV = parserCSV(csvBruto);
// Estatísticas recebidas por classe (Média, Top 20%, Bottom 20% + Min/Max calculados ou fornecidos)
const estatisticas = {
    p1: { media: .93, top20:1.3, bottom20: 0.7, min: -0.7, max: 2.0 },
    p2: { media: 1.08, top20: 1.4, bottom20: .6, min: -0.2, max: 1.8 },
    p3: { media: .58, top20: 1.0, bottom20: .2, min: -0.8, max: 1.8 },
    p4: { media: .73, top20: 1.2, bottom20: .2, min: -1.0, max: 2.0 }
};

// Configurações Globais de Desenho
const LARGURA = 360;
const ALTURA = 300;
const PADDING = 50;

// ==========================================
// FUNÇÕES MATEMÁTICAS / ESTATÍSTICAS
// ==========================================

// Calcula a reta de correlação (Regressão Linear Mínimos Quadrados: y = mx + b)
function calcularRegressaoPorPearson(chaveX, chaveY) {
        const n = dadosCSV.length;
        if (n === 0) return { m: 0, b: 0, r: 0 };

        let sx = 0, sy = 0, sxy = 0, sxx = 0, syy = 0;
        
        for (let i = 0; i < n; i++) {
            const x = dadosCSV[i][chaveX];
            const y = dadosCSV[i][chaveY];
            sx += x; sy += y; sxy += x * y; sxx += x * x; syy += y * y;
        }
        
        const mediaX = sx / n;
        const mediaY = sy / n;

        // Variâncias e Desvios Padrões
        const varX = (sxx / n) - (mediaX * mediaX);
        const varY = (syy / n) - (mediaY * mediaY);
        const desvioX = Math.sqrt(Math.max(0, varX));
        const desvioY = Math.sqrt(Math.max(0, varY));

        // Coeficiente de Pearson (r)
        const dividendoPearson = (n * sxy) - (sx * sy);
        const divisorPearson = Math.sqrt(((n * sxx) - (sx * sx)) * ((n * syy) - (sy * sy)));
        const r = divisorPearson === 0 ? 0 : dividendoPearson / divisorPearson;

        // Inclinação (m) diretamente proporcional ao Pearson
        // Se desvioX for 0, a inclinação é zero.
        const m = desvioX === 0 ? 0 : r * (desvioY / desvioX);
        
        // Interseção (b) para cruzar no ponto médio real dos alunos
        const b = mediaY - (m * mediaX);
        
        return { m, b, r };
    }

// Cria um elemento Canvas isolado e configurado
function obterContextoCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    canvas.style.margin = "10px";
    canvas.style.border = "1px solid #ddd";
    document.body.appendChild(canvas);
    return canvas.getContext('2d');
}

// ==========================================
// RENDERIZADORES DO CANVAS
// ==========================================
function desenharDashboard() {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Limpar o canvas
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const TAMANHO_QUADRANTE = 230;
    const PADDING_INTERNO = 40;

    // --- ESCOPO DE ESCALA MATEMÁTICA ---
    // Mapeia o intervalo de -2.0 a +2.0 para os pixels do quadrante do Canvas
    const VALOR_MIN = -2.0;
    const VALOR_MAX = 2.0;
    const INTERVALO = VALOR_MAX - VALOR_MIN; // 4.0

 

// --- RENDERIZADOR DE DISPERSÃO ATUALIZADO (Com eixos e marcações) ---
function plotarDispersao(offsetX, offsetY, cX, cY, labelX, labelY) {
        const w = TAMANHO_QUADRANTE - (2 * PADDING_INTERNO);
        const h = TAMANHO_QUADRANTE - (2 * PADDING_INTERNO);

        const mapX = (v) => offsetX + PADDING_INTERNO + ((v - VALOR_MIN) / INTERVALO) * w;
        const mapY = (v) => offsetY + TAMANHO_QUADRANTE - PADDING_INTERNO - ((v - VALOR_MIN) / INTERVALO) * h;

        // --- CÁLCULO BASEADO NO PEARSON ---
        const stats = calcularRegressaoPorPearson(cX, cY);

        // Título do gráfico
        ctx.fillStyle = '#2c3e50';
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${labelX} vs ${labelY}`, offsetX + PADDING_INTERNO, offsetY + 20);
        
        // Exibe o coeficiente r no topo direito
        ctx.fillStyle = '#7f8c8d';
        ctx.font = '9px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(`r = ${stats.r.toFixed(2)}`, offsetX + TAMANHO_QUADRANTE - PADDING_INTERNO, offsetY + 20);

        // --- DESENHO DA GRADE E MARCAÇÕES NUMÉRICAS ---
        const marcacoes = [-2, -1, 0, 1, 2];
        
        marcacoes.forEach(val => {
            const posX = mapX(val);
            const posY = mapY(val);

            ctx.strokeStyle = val === 0 ? '#b2bec3' : '#f1f2f6';
            ctx.lineWidth = val === 0 ? 1.2 : 1;
            ctx.beginPath();
            ctx.moveTo(posX, offsetY + PADDING_INTERNO);
            ctx.lineTo(posX, offsetY + TAMANHO_QUADRANTE - PADDING_INTERNO);
            ctx.stroke();
            
            ctx.textAlign = 'center';
            ctx.fillStyle = '#7f8c8d';
            ctx.fillText(val, posX, offsetY + TAMANHO_QUADRANTE - PADDING_INTERNO + 12);

            ctx.beginPath();
            ctx.moveTo(offsetX + PADDING_INTERNO, posY);
            ctx.lineTo(offsetX + TAMANHO_QUADRANTE - PADDING_INTERNO, posY);
            ctx.stroke();

            ctx.textAlign = 'right';
            ctx.fillText(val, offsetX + PADDING_INTERNO - 6, posY + 3);
        });

        ctx.strokeStyle = '#cccccc';
        ctx.lineWidth = 1;
        ctx.strokeRect(offsetX + PADDING_INTERNO, offsetY + PADDING_INTERNO, w, h);

        // Renderização dos Pontos dos Alunos
        ctx.fillStyle = 'rgba(52, 152, 219, 0.6)';
        dadosCSV.forEach(ponto => {
            ctx.beginPath();
            ctx.arc(mapX(ponto[cX]), mapY(ponto[cY]), 4, 0, 2 * Math.PI);
            ctx.fill();
        });

        // --- PLOTAGEM DA RETA COM A INCLINAÇÃO DE PEARSON ---
        ctx.strokeStyle = '#e74c3c';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        // Calcula as pontas da reta ligando os limites geométricos do gráfico (-2 a 2)
        const yNoMin = (stats.m * VALOR_MIN) + stats.b;
        const yNoMax = (stats.m * VALOR_MAX) + stats.b;
        
        ctx.moveTo(mapX(VALOR_MIN), mapY(yNoMin));
        ctx.lineTo(mapX(VALOR_MAX), mapY(yNoMax));
        ctx.stroke();
    }

    // --- RENDERIZADOR DE BOXPLOT ATUALIZADO (Com eixo vertical numérico) ---
    function plotarBoxPlot(offsetX, offsetY, chave, label) {
        const h = TAMANHO_QUADRANTE - (2 * PADDING_INTERNO);
        const xc = offsetX + (TAMANHO_QUADRANTE / 2);
        const stats = estatisticas[chave];
        
        const mapY = (v) => offsetY + TAMANHO_QUADRANTE - PADDING_INTERNO - ((v - VALOR_MIN) / INTERVALO) * h;

        const yMin = mapY(stats.min);
        const yB20 = mapY(stats.bottom20);
        const yMed = mapY(stats.media);
        const yT20 = mapY(stats.top20);
        const yMax = mapY(stats.max);

        // Título
        ctx.fillStyle = '#2c3e50';
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(label, offsetX + PADDING_INTERNO, offsetY + 20);

        // --- DESENHO DO EIXO VERTICAL E LINHAS DE GUIA ---
        const marcacoes = [-2, -1, 0, 1, 2];
        ctx.font = '9px sans-serif';
        ctx.fillStyle = '#7f8c8d';

        marcacoes.forEach(val => {
            const posY = mapY(val);

            // Linhas horizontais de fundo (ajuda a ler a altura do boxplot)
            ctx.strokeStyle = val === 0 ? '#b2bec3' : '#f1f2f6';
            ctx.lineWidth = val === 0 ? 1.2 : 1;
            ctx.beginPath();
            ctx.moveTo(offsetX + PADDING_INTERNO, posY);
            ctx.lineTo(offsetX + TAMANHO_QUADRANTE - PADDING_INTERNO, posY);
            ctx.stroke();

            // Texto do valor no eixo vertical esquerdo
            ctx.textAlign = 'right';
            ctx.fillText(val, offsetX + PADDING_INTERNO - 6, posY + 3);
        });

        // Linha do eixo vertical esquerdo (eixo Y estrutural)
        ctx.strokeStyle = '#cccccc';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(offsetX + PADDING_INTERNO, offsetY + PADDING_INTERNO);
        ctx.lineTo(offsetX + PADDING_INTERNO, offsetY + TAMANHO_QUADRANTE - PADDING_INTERNO);
        ctx.stroke();

        // Bigodes do Boxplot
        ctx.strokeStyle = '#2c3e50';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(xc, yMin); ctx.lineTo(xc, yMax);
        ctx.moveTo(xc - 15, yMin); ctx.lineTo(xc + 15, yMin);
        ctx.moveTo(xc - 15, yMax); ctx.lineTo(xc + 15, yMax);
        ctx.stroke();

        // Caixa Verde
        ctx.fillStyle = '#2ecc71';
        ctx.fillRect(xc - 25, yT20, 50, yB20 - yT20);
        ctx.strokeRect(xc - 25, yT20, 50, yB20 - yT20);

        // Linha da Média (Vermelha)
        ctx.strokeStyle = '#e74c3c';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(xc - 25, yMed); ctx.lineTo(xc + 25, yMed);
        ctx.stroke();
    }

    // --- POSICIONAMENTO CORRIGIDO DA GRADE (Mapeamento p1, p2, p3, p4) ---
    const dispersoes = [
        { x: 'p1', y: 'p2', lx: 'Bacon', ly: 'Popper' },
        { x: 'p1', y: 'p3', lx: 'Bacon', ly: 'Kuhn' },
        { x: 'p1', y: 'p4', lx: 'Bacon', ly: 'Feyerabend' },
        { x: 'p2', y: 'p3', lx: 'Popper', ly: 'Kuhn' },
        { x: 'p2', y: 'p4', lx: 'Popper', ly: 'Feyerabend' },
        { x: 'p3', y: 'p4', lx: 'Kuhn', ly: 'Feyerabend' }
    ];

    // Desenha as 6 Dispersões
    dispersoes.forEach((d, i) => {
        const coluna = i % 3; 
        const linha = Math.floor(i / 3);
        plotarDispersao(coluna * TAMANHO_QUADRANTE, linha * TAMANHO_QUADRANTE, d.x, d.y, d.lx, d.ly);
    });

    // Desenha os 4 Boxplots na terceira linha da grade
    const boxplots = [
        { chave: 'p1', label: 'Boxplot BACON' },
        { chave: 'p2', label: 'Boxplot POPPER' },
        { chave: 'p3', label: 'Boxplot KUHN' },
        { chave: 'p4', label: 'Boxplot FEYERABEND' }
    ];
    
    boxplots.forEach((b, i) => {
        plotarBoxPlot(i * 240, 2 * TAMANHO_QUADRANTE, b.chave, b.label);
    });
}
// main.js
window.onload = function() {
    desenharDashboard();
};
