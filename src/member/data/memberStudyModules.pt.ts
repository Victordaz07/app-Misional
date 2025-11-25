import { StudyModule } from './types';

export const memberStudyModulesPt: StudyModule[] = [
  {
    id: 'doctrina-de-cristo-en-mi-vida',
    title: 'A doutrina de Cristo na vida diária',
    subtitle:
      'Fé, arrependimento, convênios e perseverar — como membro, não apenas como pesquisador.',
    description:
      'Este módulo ajuda o membro a ver a doutrina de Cristo como um ciclo contínuo e não como um evento único. O objetivo é que o membro se sinta responsável por aplicar essa doutrina em sua vida e por ajudar outros a fazer o mesmo, apoiando a obra missionária e preparando-se para a Segunda Vinda.',
    levelRecommended: 1,
    sections: [
      {
        id: 'fe-centrada-en-cristo',
        title: 'Fé em Jesus Cristo que leva à ação',
        summary:
          'A verdadeira fé não é apenas acreditar que Cristo existe, mas confiar Nele a ponto de agir, mudar e abrir a boca para testificar.',
        estimatedMinutes: 12,
        content: `
### O que significa ter fé em Cristo como membro?

A fé em Jesus Cristo vai além de aceitar que Ele é o Filho de Deus. É confiar em Seu caráter a ponto de arriscar conforto, prestígio e tempo para segui-Lo. Um membro com fé viva:

- Parte do princípio de que o Senhor já está preparando pessoas ao redor.
- Ora esperando receber impressões sobre quem deve servir, convidar ou consolar.
- Enxerga os mandamentos como oportunidades de demonstrar amor, não como uma lista fria de obrigações.

Pregar Meu Evangelho ensina que a fé conduz à ação e ao arrependimento. Para um membro, isso inclui estudar o evangelho com intenção de compartilhar, perguntar “Quem precisa hoje de um convite, de uma mensagem ou de um sorriso?” e acreditar que, mesmo sentindo-se tímido, o Espírito pode ampliar um testemunho sincero.

Quando agimos assim, a obra missionária deixa de ser tarefa exclusiva dos missionários e passa a ser nosso próprio estilo de vida como discípulos.`,
        references: [
          {
            type: 'scripture',
            source: '2 Néfi 25:26',
          },
          {
            type: 'manual',
            source: 'Pregar Meu Evangelho, capítulo 3',
            title: 'A doutrina de Cristo',
          },
        ],
      },
      {
        id: 'arrepentimiento-continuo',
        title: 'Arrependimento contínuo: como isso se manifesta em um membro',
        summary:
          'O arrependimento não é apenas para grandes pecados; é o processo diário de ajustar o coração a Cristo e permitir que Ele nos transforme.',
        estimatedMinutes: 14,
        content: `
### Arrependimento como estilo de vida

Quem entende a doutrina de Cristo não vê o arrependimento como castigo, mas como privilégio diário. Arrepender-se continuamente inclui:

- Reconhecer padrões de orgulho, preguiça espiritual ou indiferença.
- Falar com sinceridade ao Pai sobre onde estamos falhando em amar como Cristo ama.
- Tomar decisões concretas: mudar rotinas, pedir perdão, fazer restituição, ajustar prioridades.

Na obra missionária, um membro que vive em constante arrependimento é mais paciente com pesquisadores e novos conversos, fala de Cristo a partir da experiência pessoal e não finge perfeição, mas se torna testemunha humilde de que o Senhor muda corações.`,
        references: [
          {
            type: 'scripture',
            source: 'Alma 36',
          },
          {
            type: 'talk',
            source: 'Presidente Russell M. Nelson, “O milagre do arrependimento”',
          },
        ],
      },
      {
        id: 'perseverar-hasta-el-fin',
        title: 'Perseverar até o fim em um mundo distraído',
        summary:
          'Perseverar não é apenas “aguentar firme”; é avançar com propósito, carregar os fardos uns dos outros e guardar nossos convênios.',
        estimatedMinutes: 10,
        content: `
### Perseverar como comunidade de convênio

Perseverar até o fim não é uma jornada solitária. O Senhor organizou Sua Igreja para que nos sustentemos, cuidemos dos novos conversos e trabalhemos com os missionários para edificar o reino. Um membro que persevera fortalece a fé com estudo diário das escrituras e oração real, busca oportunidades para servir discretamente e não abandona os novos conversos quando passa a empolgação do batismo.

Perseverar significa voltar-se a Cristo repetidas vezes, levando outros conosco. É continuar renovando convênios mesmo em semanas difíceis, lembrando que o Senhor valoriza o esforço constante mais do que a perfeição imediata.`,
        references: [
          {
            type: 'scripture',
            source: '2 Néfi 31:20',
          },
        ],
      },
    ],
  },
  {
    id: 'trabajar-con-los-misioneros',
    title: 'Trabalhar lado a lado com os missionários',
    subtitle: 'De membro espectador a companheiro de confiança.',
    description:
      'Este módulo ensina o membro a ser um verdadeiro colaborador dos missionários de tempo integral: preparar referências, acompanhá-los em lições, coordenar com os líderes e continuar cuidando das pessoas após o batismo.',
    levelRecommended: 2,
    sections: [
      {
        id: 'principios-de-trabajo-conjunto',
        title: 'Princípios para trabalhar com os missionários',
        summary:
          'O Senhor confia nos membros para preparar o terreno. Os missionários trazem autoridade e foco; os membros trazem relacionamentos duradouros.',
        estimatedMinutes: 12,
        content: `
### Duas forças que se complementam

Os missionários têm autoridade para ensinar e agregar Israel. Os membros têm acesso diário a vizinhos, colegas, amigos e familiares. Quando ambos trabalham juntos:

- O Espírito é derramado com maior poder.
- As pessoas sentem apoio real, não apenas visitas ocasionais.
- Os novos conversos permanecem porque já têm laços na ala.

Trabalhar com os missionários inclui:

- Estar disponível para acompanhá-los em lições importantes.
- Apresentá-los a amigos e conhecidos de maneira natural, sem pressões.
- Coordenar com o líder de missão da ala e com o bispado para que os esforços sejam organizados.

O objetivo não é que os membros “controlem” a obra missionária, nem que os missionários façam tudo, mas formar uma equipe em que cada um magnifica seu papel diante do Senhor.`,
        references: [
          {
            type: 'talk',
            source: 'Gordon B. Hinckley, “Cada membro, um missionário”',
          },
          {
            type: 'manual',
            source: 'Pregar Meu Evangelho, capítulo 13',
          },
        ],
      },
      {
        id: 'preparar-y-ofrecer-referencias',
        title: 'Como preparar e oferecer referências de maneira inspirada',
        summary:
          'Dar uma referência não é apenas fornecer um telefone; é orar, preparar o coração da pessoa e caminhAR com ela no processo.',
        estimatedMinutes: 15,
        content: `
### Referências que nascem da oração, não da pressão

Uma boa referência começa muito antes da conversa com os missionários. Ela começa quando o membro:

- Ora por pessoas específicas, pelo nome.
- Serve e ouve com amor genuíno.
- Discern o momento certo para convidar ou compartilhar algo espiritual.

Ao oferecer uma referência:

- Explique o contexto da pessoa (situação familiar, experiência religiosa, preocupações).
- Indique o nível de abertura (curiosa, interessada, em crise, buscando respostas).
- Ofereça-se para estar presente na primeira visita, se adequado.

Após a primeira lição, o membro permanece fundamental: uma mensagem, um convite para a capela, uma oração conjunta ou uma refeição simples. Assim, o pesquisador percebe que é amado por toda a comunidade de convênio, e não apenas “um projeto” dos missionários.`,
        references: [
          {
            type: 'scripture',
            source: 'Doutrina e Convênios 18:15–16',
          },
        ],
      },
    ],
  },
  {
    id: 'cuidado-de-nuevos-conversos-y-preparacion-para-el-templo',
    title: 'Cuidar dos novos conversos e prepará-los para o templo',
    subtitle: 'Acompanhá-los além do batismo.',
    description:
      'Este módulo orienta membros e organizações auxiliares a cuidar dos novos conversos, ajudar homens dignos a receber o Sacerdócio Aarônico ou o de Melquisedeque e preparar todos para o templo com expectativas equilibradas.',
    levelRecommended: 2,
    sections: [
      {
        id: 'principios-cuidado-conversos',
        title: 'Princípios para cuidar dos novos conversos',
        summary:
          'Um novo converso não precisa de programas complexos, mas de amizades reais, oportunidades de serviço e ensino claro.',
        estimatedMinutes: 14,
        content: `
### Mais do que um nome em uma lista

Um novo converso chega com entusiasmo, dúvidas, medos e, muitas vezes, pressão familiar. Entre os erros comuns:

- Deixar toda a responsabilidade com os missionários.
- Presumir que ele “já sabe” como a Igreja funciona.
- Exigir demais, rápido demais, sem acompanhamento.

Princípios essenciais:

- Três amigos na ala: um líder, um instrutor e alguém em condição de vida semelhante.
- Contato frequente porém não invasivo: uma mensagem no meio da semana, sentar-se ao lado dele, incluí-lo em atividades simples.
- Ensino repetido com paciência e exemplos do cotidiano.

Quando a ala adota o novo converso como parte da família de convênio, suas chances de permanecer firme no evangelho aumentam muito.`,
        references: [
          {
            type: 'scripture',
            source: 'Mosias 18:21–23',
          },
        ],
      },
      {
        id: 'llamamientos-y-organizaciones',
        title: 'Papel das organizações auxiliares e exemplos de chamados',
        summary:
          'Os novos conversos crescem mais rápido quando servem e participam da organização que melhor se adapta à realidade deles.',
        estimatedMinutes: 16,
        content: `
### Servir para pertencer

Um novo converso que apenas “senta e escuta” acabará se sentindo espectador. Os líderes podem:

- Oferecer chamados simples: recepção na porta, ajuda na preparação do sacramento (quando apropriado), apoio em atividades, indexação, auxílio musical básico.
- Coordenar com o líder de missão da ala, quóruns e Sociedade de Socorro para que ninguém seja esquecido.
- Evitar chamados que isolem o novo converso das classes onde ele mais precisa aprender.

Cada chamado deve incluir treinamento simples, acompanhamento inicial e reforço positivo constante: “Você está indo muito bem. Obrigado por servir!”.`,
        references: [
          {
            type: 'manual',
            source: 'Manual Geral, 38.2; 38.8',
          },
        ],
      },
      {
        id: 'sacerdocio-y-templo',
        title: 'Primeiros passos com o sacerdócio e o templo',
        summary:
          'Guia básico para que novos conversos entendam o Sacerdócio Aarônico e o de Melquisedeque e para que todos se preparem para a recomendação ao templo.',
        estimatedMinutes: 18,
        content: `
### Do batismo ao templo: um único caminho

Para os homens dignos, é fundamental entender o Sacerdócio Aarônico como preparatório: ministrar, abençoar, aprender a presidir com humildade. O Sacerdócio de Melquisedeque expande essas responsabilidades com bênçãos espirituais mais profundas.

Para todos os membros, o templo é a continuação natural das alianças batismais. Ajudar um novo converso a se preparar inclui:

- Acompanhá-lo nas primeiras visitas para batismos pelos mortos.
- Explicar com respeito a santidade do templo, sem revelar o que só é ensinado ali.
- Incentivar a viver dignamente a lei da castidade, a Palavra de Sabedoria, o dízimo honesto e a integridade.

O objetivo não é “levá-lo rápido ao templo” por estatística, mas ajudá-lo a entender que o templo é onde Deus sela e eleva os convênios já iniciados com Ele.`,
        references: [
          {
            type: 'scripture',
            source: 'Doutrina e Convênios 84:33–44',
          },
        ],
      },
    ],
  },
];

