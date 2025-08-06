// Array de perguntas (com apenas duas como exemplo)
const questions = [{
        question: "(1/25) Quando você está conversando com ela, como ela costuma se comportar fisicamente?",
        options: [
            { text: "Ela inclina o corpo em sua direção durante a conversa.", value: 3, signals: [1] },
            { text: "Ela ajusta a postura para parecer mais confiante quando você chega.", value: 2, signals: [4] },
            { text: "Ela toca casualmente em você enquanto fala.", value: 3, signals: [3] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(2/25) Quando vocês estão próximos, o que você nota na linguagem corporal dela?",
        options: [
            { text: "Ela se aproxima e se posiciona perto de você.", value: 3, signals: [2] },
            { text: "Ela mantém os pés apontados na sua direção.", value: 1, signals: [5] },
            { text: "Ela imita sutilmente seus movimentos.", value: 2, signals: [8] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(3/25) Como ela age fisicamente quando vocês estão juntos em um grupo?",
        options: [
            { text: "Ela frequentemente ajusta o cabelo ou roupas para parecer mais atraente.", value: 1, signals: [14] },
            { text: "Ela inclina a cabeça para o lado enquanto ouve.", value: 2, signals: [6] },
            { text: "Ela mantém o rosto voltado para você durante a conversa.", value: 3, signals: [12] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(4/25) Quando vocês estão conversando, como ela tende a usar os braços?",
        options: [
            { text: "Ela mantém os braços descruzados, mostrando receptividade.", value: 2, signals: [7] },
            { text: "Ela coloca as mãos na cintura ou nos quadris, parecendo querer chamar atenção.", value: 2, signals: [10] },
            { text: "Ela mantém as mãos relaxadas ao redor de objetos próximos, aproximando-se de você.", value: 1, signals: [15] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(5/25) Durante as conversas, como ela demonstra interesse físico?",
        options: [
            { text: "Ela expõe o pulso ao gesticular.", value: 1, signals: [9] },
            { text: "Ela inclina a cabeça e sorri enquanto fala.", value: 2, signals: [6, 12] },
            { text: "Ela se move de maneira calma e deliberada, como se quisesse prolongar o momento.", value: 1, signals: [20] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(6/25) Como ela se comporta quando está falando com você em particular?",
        options: [
            { text: "Ela frequentemente se inclina ou move-se para mais perto de você.", value: 3, signals: [17] },
            { text: "Ela cruza os pés de forma que apontem para você.", value: 1, signals: [19] },
            { text: "Ela espelha sua postura e movimentos.", value: 2, signals: [18] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(7/25) Como é o comportamento dela quando vocês se encontram?",
        options: [
            { text: "Ela passa a mão no cabelo frequentemente, como se quisesse chamar sua atenção.", value: 2, signals: [11] },
            { text: "Ela se posiciona de maneira relaxada e confortável.", value: 2, signals: [16] },
            { text: "Ela ajusta a postura para parecer mais confiante ao te ver.", value: 2, signals: [4] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(8/25) Quando vocês estão juntos, como ela utiliza o espaço ao redor?",
        options: [
            { text: "Ela se aproxima e coloca objetos ao redor para diminuir a distância entre vocês.", value: 1, signals: [15] },
            { text: "Ela posiciona-se de forma aberta e relaxada, com os braços descruzados.", value: 2, signals: [7, 16] },
            { text: "Ela mantém o rosto direcionado a você e ajusta levemente a postura.", value: 3, signals: [12, 4] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(9/25) Como ela tende a se mover durante uma conversa com você?",
        options: [
            { text: "Ela se move lentamente e de forma deliberada, como se quisesse prolongar a interação.", value: 1, signals: [20] },
            { text: "Ela frequentemente se inclina para mais perto de você.", value: 3, signals: [17] },
            { text: "Ela cruza os pés de forma que ficam apontados para você.", value: 1, signals: [19] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(10/25) Como ela reage fisicamente durante momentos de conversa intensa?",
        options: [
            { text: "Ela imita sua postura, espelhando seus movimentos.", value: 2, signals: [18] },
            { text: "Ela mantém uma postura relaxada e aberta, sugerindo conforto.", value: 2, signals: [16] },
            { text: "Ela inclina a cabeça para o lado, como se estivesse curiosa ou interessada.", value: 2, signals: [6] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(11/25) Quando ela sorri para você, como é o sorriso dela?",
        options: [
            { text: "Ela sorri de forma genuína, com os olhos e lábios envolvidos.", value: 3, signals: [21] },
            { text: "Ela dá um sorriso leve e discreto, meio de lado.", value: 2, signals: [26] },
            { text: "Ela sorri timidamente, desviando o olhar para baixo ou para o lado.", value: 2, signals: [28] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(12/25) Como ela costuma olhar para você durante uma conversa?",
        options: [
            { text: "Ela mantém um contato visual prolongado e fixo.", value: 3, signals: [24] },
            { text: "As pupilas dela parecem dilatadas quando ela olha para mim.", value: 2, signals: [27] },
            { text: "Ela olha rapidamente para mim em intervalos curtos, repetidamente.", value: 2, signals: [29] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(13/25) Quando você fala algo interessante ou surpreendente, como ela reage com o rosto?",
        options: [
            { text: "Ela levanta brevemente as sobrancelhas ao fazer contato visual.", value: 2, signals: [22] },
            { text: "Os lábios dela ficam ligeiramente entreabertos.", value: 1, signals: [23] },
            { text: "Ela morde ou lambe os lábios de forma sutil.", value: 1, signals: [25] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(14/25) Como ela se comporta visualmente quando está perto de você?",
        options: [
            { text: "Ela inclina a cabeça para o lado enquanto sorri suavemente.", value: 2, signals: [30] },
            { text: "Ela desvia o olhar e depois olha para mim com um sorriso tímido.", value: 2, signals: [28] },
            { text: "Ela mantém contato visual prolongado e parece focada.", value: 3, signals: [24] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(15/25) Como você descreveria a expressão facial dela em momentos de interação casual?",
        options: [
            { text: "Ela sorri de forma genuína, com rugas nos cantos dos olhos.", value: 3, signals: [21] },
            { text: "Ela levanta as sobrancelhas brevemente, demonstrando surpresa positiva.", value: 2, signals: [22] },
            { text: "Ela dá um sorriso leve de lado, quase misterioso.", value: 2, signals: [26] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(16/25) Como ela se comporta verbalmente durante as conversas com você?",
        options: [
            { text: "Ela faz perguntas pessoais sobre meus hobbies e interesses.", value: 3, signals: [31] },
            { text: "Ela usa apelidos ou termos carinhosos quando fala comigo.", value: 3, signals: [32] },
            { text: "Ela ri facilmente das minhas piadas, mesmo das mais simples.", value: 2, signals: [33] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(17/25) O que você nota sobre a forma como ela conduz a conversa?",
        options: [
            { text: "Ela tenta prolongar a conversa trazendo novos tópicos.", value: 3, signals: [34] },
            { text: "Ela faz comentários flertando e usando elogios.", value: 3, signals: [35] },
            { text: "Ela concorda e apoia minhas opiniões durante a conversa.", value: 2, signals: [36] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(18/25) Como é o tom de voz dela quando fala com você?",
        options: [
            { text: "Ela usa um tom de voz suave e doce para demonstrar carinho.", value: 3, signals: [37] },
            { text: "Ela brinca e provoca levemente para deixar a conversa divertida.", value: 2, signals: [39] },
            { text: "Ela revela detalhes pessoais para criar uma conexão mais profunda.", value: 3, signals: [38] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(19/25) Como ela age quando vocês estão conversando online ou trocando mensagens?",
        options: [
            { text: "Ela responde rapidamente, mantendo a conversa ativa.", value: 3, signals: [40] },
            { text: "Ela chama minha atenção para conversas privadas, iniciando diálogos mais reservados.", value: 3, signals: [41] },
            { text: "Ela reformula perguntas para continuar a interação e manter o diálogo.", value: 2, signals: [42] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(20/25) Como ela demonstra interesse durante uma conversa?",
        options: [
            { text: "Ela usa palavras que indicam interesse, como 'quero saber mais' ou 'me conte mais'.", value: 3, signals: [43] },
            { text: "Ela dá feedback positivo, comentando que algo é interessante ou engraçado.", value: 2, signals: [44] },
            { text: "Ela expressa preocupação genuína, perguntando se estou bem ou se preciso de algo.", value: 3, signals: [45] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(21/25) Como ela se comporta em relação a você durante conversas online?",
        options: [
            { text: "Ela deixa mensagens sem terminar para continuar a conversa depois.", value: 3, signals: [46] },
            { text: "Ela cria desculpas para iniciar conversas rápidas, como pedir uma opinião trivial.", value: 2, signals: [50] },
            { text: "Ela se lembra de pequenos detalhes de conversas passadas e traz à tona novamente.", value: 3, signals: [52] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(22/25) Como ela age em ambientes compartilhados ou em grupo?",
        options: [
            { text: "Ela tenta estar perto de mim, mesmo sem um motivo claro.", value: 3, signals: [47] },
            { text: "Ela olha para mim frequentemente durante conversas em grupo, mesmo quando outros estão falando.", value: 2, signals: [51] },
            { text: "Ela se posiciona de forma a facilitar o contato visual comigo.", value: 2, signals: [53] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(23/25) Como ela se comporta em relação a você em situações casuais ou no dia a dia?",
        options: [
            { text: "Ela faz pequenos gestos de cuidado, como trazer uma bebida ou oferecer um lanche.", value: 3, signals: [48] },
            { text: "Ela prolonga os momentos de interação, hesitando antes de se despedir.", value: 2, signals: [49] },
            { text: "Ela sugere planos futuros de forma sutil, dizendo 'devíamos fazer isso algum dia'.", value: 2, signals: [60] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(24/25) Como ela age quando vocês se encontram em um local público ou inesperado?",
        options: [
            { text: "Ela aparece em locais onde sabe que estarei, mesmo sem deixar claro que foi intencional.", value: 3, signals: [54] },
            { text: "Ela se oferece para me acompanhar em tarefas triviais, como ir buscar algo.", value: 2, signals: [58] },
            { text: "Ela desvia conversas para tópicos que envolvem a mim, tentando manter meu interesse ativo.", value: 2, signals: [59] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    },
    {
        question: "(25/25) Como ela demonstra estar confortável ao seu lado?",
        options: [
            { text: "Ela demonstra conforto com longos silêncios, não se sentindo obrigada a falar.", value: 3, signals: [55] },
            { text: "Ela espelha discretamente o meu ritmo de movimento, ajustando-se para coincidir com o meu.", value: 2, signals: [57] },
            { text: "Ela faz pequenos comentários que criam intimidade, como 'eu também sinto isso'.", value: 3, signals: [56] },
            { text: "Nunca percebi esses comportamentos.", value: 0, signals: [] }
        ]
    }

];

const highAttractionSignals = [
    1, 2, 3, 6, 11, 12, 17, 18, 21, 24, 25, 30, 32, 35, 37, 38, 40, 41, 46, 47, 48, 52, 54, 56
];

// Array de sinais (com apenas alguns exemplos)
const signals = [{
  id: 1,
  name: "Inclinação Corporal",
  definition: "Inclinar-se na sua direção durante a conversa demonstra interesse e engajamento.",
  group: "linguagemCorporal",
  whatToDo: "Incline-se levemente também, demonstrando que você está envolvido na conversa e sente a mesma conexão.",
  whatNotToDo: "Evite recuar ou manter distância física — isso pode ser interpretado como desinteresse ou rejeição.",
  howToMakeHerShowThisSignal: "Crie uma tensão silenciosa, com presença absoluta. Mantenha os olhos nos dela em um momento de pausa inesperada, como se você estivesse prestes a falar algo íntimo, mas não dissesse. Esse tipo de ambiguidade carrega o ambiente de energia emocional e a faz inclinar-se sem perceber — como se quisesse atravessar o espaço entre vocês."
},
{
  id: 2,
  name: "Proximidade Física",
  definition: "Movimentar-se para mais perto durante a interação é um sinal de desejo de aproximação.",
  group: "linguagemCorporal",
  whatToDo: "Aproveite a aproximação para falar em um tom mais íntimo, mantendo contato visual.",
  whatNotToDo: "Não recue nem se mova para longe — isso pode quebrar a tensão positiva criada pelo gesto.",
  howToMakeHerShowThisSignal: "Fique absolutamente imóvel durante um silêncio carregado de tensão, como se o mundo tivesse desacelerado. Ela sentirá o impulso de preencher esse espaço — e fará isso encurtando a distância por vontade própria, como se atraída por algo que não entende racionalmente."
},
{
  id: 3,
  name: "Toque Casual",
  definition: "Toques suaves e casuais, como no braço ou ombro, indicam afeto e conforto.",
  group: "linguagemCorporal",
  whatToDo: "Responda com um sorriso e mantenha uma postura receptiva. Você pode retribuir sutilmente em outro momento.",
  whatNotToDo: "Não reaja com rigidez ou afastamento — isso pode fazer ela se sentir rejeitada ou exposta.",
  howToMakeHerShowThisSignal: "Reduza a distância entre vocês e pause no meio de um gesto, como se sua mão estivesse prestes a tocar algo, mas parasse no ar. Essa quebra de padrão cria um microconflito na mente dela, e o toque vem como uma tentativa de restaurar a harmonia do momento."
},
{
  id: 4,
  name: "Ajuste de Postura",
  definition: "Ajustar a postura para ficar mais ereta é um sinal de que ela quer parecer mais confiante.",
  group: "linguagemCorporal",
  whatToDo: "Elogie discretamente algo nela, como o estilo ou energia — isso valida o esforço inconsciente dela.",
  whatNotToDo: "Evite ignorar ou não perceber — isso pode gerar insegurança e diminuir a conexão.",
  howToMakeHerShowThisSignal: "Mude repentinamente o nível de atenção com o olhar — de relaxado para totalmente focado — como se tivesse visto algo que ela nem percebeu mostrar. Isso ativa o instinto de se ajustar, como se precisasse 'melhorar' inconscientemente a forma como está sendo percebida."
},
{
  id: 5,
  name: "Pés Apontados",
  definition: "Os pés apontados na sua direção indicam foco e atenção.",
  group: "linguagemCorporal",
  whatToDo: "Aproxime-se um pouco mais se sentir abertura. Mantenha-se centrado e com boa presença.",
  whatNotToDo: "Não desvie seu corpo para outra direção — isso pode quebrar a sincronia entre vocês.",
  howToMakeHerShowThisSignal: "Crie uma espécie de bolha emocional durante a conversa — onde tudo parece ter parado ao redor. Quando ela sentir que está completamente absorvida, os pés irão se alinhar com o seu corpo automaticamente, revelando exatamente onde está a atenção dela."
},
{
  id: 6,
  name: "Cabeça Inclinada",
  definition: "Inclinar a cabeça para o lado durante a conversa pode indicar curiosidade e interesse.",
  group: "linguagemCorporal",
  whatToDo: "Use esse momento para fazer uma pergunta mais pessoal ou íntima. Ela provavelmente vai abrir mais.",
  whatNotToDo: "Evite mudar de assunto bruscamente ou fazer piadas fora de hora — isso pode esfriar o clima emocional.",
  howToMakeHerShowThisSignal: "Introduza uma quebra suave de expectativa — algo que não combina com o tom anterior da conversa. Essa oscilação sutil entre vulnerabilidade e provocação faz com que ela incline a cabeça, num gesto inconsciente de tentar decifrar você."
},
{
  id: 7,
  name: "Braços Descruzados",
  definition: "Braços descruzados mostram receptividade e abertura para a interação.",
  group: "linguagemCorporal",
  whatToDo: "Mantenha uma linguagem corporal igualmente aberta. Sorria, incline-se levemente e mostre presença.",
  whatNotToDo: "Não cruze os braços nem adote postura defensiva — isso pode gerar fechamento automático nela.",
  howToMakeHerShowThisSignal: "Crie um momento de leveza inesperada, como uma pausa confortável no meio da conversa. O corpo dela vai buscar respirar mais livremente — e braços descruzados são uma consequência direta desse tipo de relaxamento emocional súbito."
},
{
  id: 8,
  name: "Imitação de Movimentos",
  definition: "Imitar seus movimentos ou gestos é um sinal inconsciente de que ela está sintonizada com você.",
  group: "linguagemCorporal",
  whatToDo: "Mantenha movimentos calmos, confiantes e autênticos. Ela vai continuar espelhando sem perceber.",
  whatNotToDo: "Não se mexa de forma agitada ou com gestos exagerados — isso pode quebrar a sintonia sutil.",
  howToMakeHerShowThisSignal: "Movimente-se com lentidão estratégica, como se cada gesto tivesse intenção — mas sem pressa. A mente dela, instintivamente, vai tentar entrar em sintonia com esse novo ritmo. E quando o espelhamento começar, você verá as repetições quase como um reflexo atrasado."
},
{
  id: 9,
  name: "Exposição do Pulso",
  definition: "Mostrar o pulso é um sinal de vulnerabilidade e confiança.",
  group: "linguagemCorporal",
  whatToDo: "Mantenha contato visual suave e conduza a conversa para temas mais pessoais e profundos.",
  whatNotToDo: "Não interrompa com brincadeiras sem graça ou desatenção — ela está abrindo espaço emocional.",
  howToMakeHerShowThisSignal: "Crie um espaço de pausa emocional — onde tudo desacelera e os olhos se encontram por tempo demais. O corpo dela vai buscar um gesto que demonstre confiança sem palavras — e o pulso exposto aparece como resposta física à entrega silenciosa do momento."
},
{
  id: 10,
  name: "Mãos em Cintura ou Quadril",
  definition: "Colocar as mãos na cintura ou quadril pode indicar desejo de dominar a atenção.",
  group: "linguagemCorporal",
  whatToDo: "Reconheça essa atitude com confiança. Mantenha firmeza no olhar e conduza a conversa com direção.",
  whatNotToDo: "Não adote uma postura submissa ou insegura — isso pode inverter a dinâmica e esfriar o desejo dela.",
  howToMakeHerShowThisSignal: "Provoque com silêncio e presença inabalável. Quando ela sentir que não está no controle da situação emocional, o corpo dela vai buscar recuperar esse domínio — e a postura com mãos nos quadris é o reflexo involuntário desse impulso interno."
}
,
  {
    id: 11,
    name: "Jogada de Cabelo",
    definition: "Passar a mão no cabelo frequentemente é um sinal de que ela quer chamar sua atenção.",
    group: "linguagemCorporal",
    whatToDo: "Olhe discretamente para o gesto, depois encare os olhos dela com um leve sorriso. Isso cria tensão sexual sem dizer uma palavra.",
    whatNotToDo: "Não comente ou brinque com isso de forma óbvia — ela quer ser notada, não exposta.",
    howToMakeHerShowThisSignal: "Fique em silêncio e passe os olhos pelo rosto dela, parando brevemente no cabelo — como se estivesse admirando, mas sem verbalizar. Essa leitura visual desperta o instinto de autovalidação estética — e o cabelo vira a primeira área que ela toca."
  },
  {
    id: 12,
    name: "Rosto Voltado Para Você",
    definition: "Manter o rosto direcionado para você é um sinal de que ela está interessada na conversa.",
    group: "linguagemCorporal",
    whatToDo: "Mantenha contato visual firme e aproveite para falar algo pessoal. O cérebro dela vai associar essa atenção à intimidade.",
    whatNotToDo: "Não desvie o olhar frequentemente — isso enfraquece a conexão que ela está tentando criar.",
    howToMakeHerShowThisSignal: "Durante uma troca de olhares, mova-se levemente para o lado e observe se o rosto dela acompanha. Essa sutileza obriga o foco visual dela a se alinhar com o seu, e o gesto de manter o rosto voltado vira resposta automática ao magnetismo do seu olhar."
  },
  {
    id: 13,
    name: "Leve Toque no Braço",
    definition: "Um toque leve no braço enquanto fala pode ser um gesto de conexão e empatia.",
    group: "linguagemCorporal",
    whatToDo: "Fale algo que demonstre que você percebeu a conexão, como 'gostei da sua energia'. Valide o gesto com carisma.",
    whatNotToDo: "Não se mexa ou recue — ela pode interpretar como rejeição ou quebra do clima.",
    howToMakeHerShowThisSignal: "Conte algo que exija empatia, mas sem dramatizar. Se ela sentir conexão emocional verdadeira, o toque no braço vem como resposta não-verbal de consolo, apoio ou cumplicidade."
  },
  {
    id: 14,
    name: "Ajustar Roupa ou Cabelo",
    definition: "Frequentemente ajustar a roupa ou cabelo pode indicar que ela está tentando parecer atraente para você.",
    group: "linguagemCorporal",
    whatToDo: "Elogie um detalhe pequeno e específico, como a cor do brinco ou o estilo do cabelo — isso mostra atenção e validação.",
    whatNotToDo: "Não ignore totalmente esses gestos — ela pode sentir que está tentando em vão te impressionar.",
    howToMakeHerShowThisSignal: "Incline-se devagar como se fosse compartilhar algo secreto e olhe para ela com atenção intensa. O corpo dela interpreta isso como momento de exposição — e o ajuste nos cabelos ou roupa surge como reação instintiva de querer parecer melhor naquele instante."
  },
  {
    id: 15,
    name: "Braços ao Redor de Objetos",
    definition: "Colocar braços ao redor de objetos próximos para se aproximar de você indica que ela quer reduzir a distância entre vocês.",
    group: "linguagemCorporal",
    whatToDo: "Aproxime levemente seu corpo em resposta, sem invadir. Crie um 'espaço exclusivo' entre vocês dois.",
    whatNotToDo: "Não crie barreiras físicas (ex: cruzar braços ou virar de lado) — isso quebra o campo de aproximação que ela criou.",
    howToMakeHerShowThisSignal: "Use o ambiente a favor: coloque um objeto neutro (como um copo ou celular) entre vocês e não se mexa. O corpo dela, querendo encurtar a distância, irá rodear o obstáculo com os braços como tentativa inconsciente de aproximação."
  },
  {
    id: 16,
    name: "Posição Relaxada",
    definition: "Uma postura relaxada e aberta indica conforto e confiança na interação.",
    group: "linguagemCorporal",
    whatToDo: "Entre no mesmo ritmo: fale mais devagar, use pausas estratégicas e demonstre segurança tranquila.",
    whatNotToDo: "Não demonstre pressa, ansiedade ou agitação — isso desestabiliza a segurança emocional que ela criou.",
    howToMakeHerShowThisSignal: "Fique totalmente imóvel e confortável em silêncio, com respiração profunda e estável. Ela, sentindo que não há expectativa ou julgamento, irá relaxar aos poucos — até que a postura do corpo revele segurança e presença igual à sua."
  },
  {
    id: 17,
    name: "Movimento em Direção a Você",
    definition: "Inclinar-se ou mover-se para mais perto de você durante a conversa indica atração.",
    group: "linguagemCorporal",
    whatToDo: "Diminua a voz levemente, aproxime-se com naturalidade e olhe diretamente para os lábios dela ao falar.",
    whatNotToDo: "Não recue nem faça piada nervosa — você precisa sustentar o momento ou ele morre.",
    howToMakeHerShowThisSignal: "Crie uma lacuna emocional, como se estivesse prestes a falar algo íntimo e segurasse. O mistério carrega o ar de tensão, e o corpo dela avança — literalmente — para tentar decifrar ou se aproximar da resposta que você não deu."
  },
  {
    id: 18,
    name: "Postura Espelhada",
    definition: "Copiar a postura e movimentos é um sinal de sintonia e conexão.",
    group: "linguagemCorporal",
    whatToDo: "Lidere a dança inconsciente: mude sutilmente sua postura e veja se ela acompanha — isso cria tensão e controle sutil.",
    whatNotToDo: "Não quebre o ritmo com gestos aleatórios ou movimentos agitados — você perde a sincronia emocional.",
    howToMakeHerShowThisSignal: "Mude sua postura levemente (ex: incline o tronco, cruze as pernas devagar) em momentos de silêncio emocional. Se ela estiver conectada, o corpo dela irá copiar sem perceber — como tentativa de manter a sincronia e o vínculo."
  },
  {
    id: 19,
    name: "Pés Cruzados em Sua Direção",
    definition: "Cruzar os pés de forma que apontem para você mostra que ela está engajada e focada em você.",
    group: "linguagemCorporal",
    whatToDo: "Incline o corpo levemente para ela, mantendo os ombros e peito voltados. Isso amplia a energia da atenção mútua.",
    whatNotToDo: "Não cruze os braços ou vire os pés para outro lado — esses detalhes quebram o rapport sem você perceber.",
    howToMakeHerShowThisSignal: "Fale algo enraizado e verdadeiro, enquanto permanece firme e parado. A estabilidade faz com que ela 'alinhe' o corpo para captar melhor a energia — e os pés se cruzam ou giram em sua direção como reflexo de atenção total."
  },
  {
    id: 20,
    name: "Movimento Lento e Deliberado",
    definition: "Movimentos suaves e lentos podem indicar que ela está confortável e tentando prolongar a interação.",
    group: "linguagemCorporal",
    whatToDo: "Sincronize sua energia. Use silêncios com propósito e frases com subtexto. Crie uma atmosfera quase cinematográfica.",
    whatNotToDo: "Não apresse o ritmo, interrompa ou mude de ambiente — ela está curtindo o momento e quer que dure.",
    howToMakeHerShowThisSignal: "Diminua o ritmo da conversa ao ponto de parecer cena de filme. Quando ela sentir que você controla o tempo e está presente de verdade, o corpo desacelera também — e os movimentos dela ganham fluidez como sinal de rendição emocional."
  }

  
,
{
  id: 21,
  name: "Sorriso Genuíno (Sorriso Duchenne)",
  definition: "Um sorriso que envolve não apenas os lábios, mas também os olhos, formando pequenas rugas nos cantos. Indica alegria e conforto.",
  group: "expressoesFaciais",
  whatToDo: "Sustente o olhar e retribua com um sorriso calmo. Depois, faça um comentário pessoal leve. Isso cria conexão imediata.",
  whatNotToDo: "Não apresse a conversa nem mude de assunto — esse tipo de sorriso convida intimidade emocional, não lógica.",
  howToMakeHerShowThisSignal: "Abaixe ligeiramente o queixo enquanto a observa em silêncio, como se estivesse vendo algo bonito e raro. Esse tipo de olhar suave, sem julgamento, acende nela uma sensação de ser profundamente aceita — o sorriso aparece como reflexo de alívio emocional."
},
{
  id: 22,
  name: "Sobrancelhas Levantadas",
  definition: "Levantar as sobrancelhas brevemente ao fazer contato visual pode ser um sinal de surpresa positiva e interesse.",
  group: "expressoesFaciais",
  whatToDo: "Na hora, sorria e mantenha o contato visual — é o momento ideal para dizer algo provocador ou intrigante.",
  whatNotToDo: "Não baixe os olhos ou reaja de forma neutra — isso mata a energia curiosa do momento.",
  howToMakeHerShowThisSignal: "Interrompa a fala por um segundo e faça algo inesperadamente encantador, como olhar para a boca dela com admiração silenciosa. A leve surpresa, combinada com tensão positiva, aciona as sobrancelhas antes que ela perceba."
},
{
  id: 23,
  name: "Lábios Ligeiramente Entreabertos",
  definition: "Quando os lábios estão levemente separados, pode ser um sinal de atração e curiosidade.",
  group: "expressoesFaciais",
  whatToDo: "Diminua o ritmo da fala e aproxime sutilmente o rosto. Esse é o tipo de detalhe que precede tensão romântica.",
  whatNotToDo: "Não fale demais ou com velocidade — isso espanta a tensão sexual criada pela expressão.",
  howToMakeHerShowThisSignal: "Fale algo que carregue intensidade emocional implícita, mas sem concluir. A expectativa silenciosa faz o corpo suspender a respiração por um instante — e os lábios se entreabrem como resposta inconsciente à antecipação."
},
{
  id: 24,
  name: "Olhar Prolongado",
  definition: "Manter o contato visual por um tempo maior do que o normal demonstra atenção e interesse.",
  group: "expressoesFaciais",
  whatToDo: "Sustente o olhar por 2 segundos a mais do que o confortável. Isso ativa atração e domínio.",
  whatNotToDo: "Não quebre o olhar com pressa ou desvio — isso cria dúvida e transmite insegurança.",
  howToMakeHerShowThisSignal: "Sustente o olhar com serenidade, sem piscar excessivamente e sem desviar. Quando ela sentir que está sendo lida com profundidade, o olhar dela se prolonga — é o corpo tentando continuar a conversa que a boca ainda não começou."
},
{
  id: 25,
  name: "Morder ou Lamber os Lábios",
  definition: "Essa ação pode ser um sinal de nervosismo, mas também de atração, especialmente se for feito de maneira sutil e ocasional.",
  group: "expressoesFaciais",
  whatToDo: "Faça uma pausa dramática na fala ou abaixe ligeiramente o tom de voz — ela está receptiva a estímulos mais intensos.",
  whatNotToDo: "Não comente ou brinque sobre o gesto — isso a fará se fechar ou ficar constrangida.",
  howToMakeHerShowThisSignal: "Projete desejo sem palavras: respiração mais lenta, olhos firmes, presença absoluta. Quando ela sentir que está sendo desejada sem ser pressionada, os lábios reagem com micromovimentos — morder, umedecer ou tocar-se — tudo sem ela perceber."
},
{
  id: 26,
  name: "Sorriso Lateral ou Discreto",
  definition: "Um sorriso leve de lado pode indicar um toque de mistério e flerte.",
  group: "expressoesFaciais",
  whatToDo: "Responda com uma provocação suave ou uma frase carregada de subtexto. Esse é o momento de tensão magnética.",
  whatNotToDo: "Não reaja de forma óbvia ou exagerada — o charme desse gesto está na sutileza.",
  howToMakeHerShowThisSignal: "Crie ambiguidade emocional — diga algo com duplo sentido e mantenha uma expressão neutra. O cérebro dela vai tentar decifrar sua intenção, e o sorriso lateral surge como resposta involuntária à provocação implícita."
},
{
  id: 27,
  name: "Pupilas Dilatadas",
  definition: "Quando uma pessoa está interessada, as pupilas tendem a se dilatar involuntariamente.",
  group: "expressoesFaciais",
  whatToDo: "Reduza a distância levemente e fale em tom mais suave. A dilatação é inconsciente — sinal de excitação e foco.",
  whatNotToDo: "Não desperdice esse momento com conversa sem profundidade ou com ruído externo — aproveite o foco total dela.",
  howToMakeHerShowThisSignal: "Aproxime-se até o ponto em que ela precise te escolher com o olhar. Quando o cérebro não sabe se é seguro, mas sente excitação, as pupilas dilatam como reflexo de foco intenso — o corpo revela onde a mente ainda hesita."
},
{
  id: 28,
  name: "Desvio de Olhar com um Sorriso",
  definition: "Olhar para baixo ou para o lado, seguido por um sorriso tímido, pode ser um sinal de que ela está interessada, mas um pouco envergonhada.",
  group: "expressoesFaciais",
  whatToDo: "Diga algo que valide a doçura do momento, como “você tem um jeito fofo quando sorri assim”. Isso quebra a vergonha com encanto.",
  whatNotToDo: "Não a force a retomar o olhar direto — respeite o momento e aumente a segurança com calor emocional.",
  howToMakeHerShowThisSignal: "Demonstre admiração por ela de forma silenciosa e prolongada. Quando o olhar fica mais íntimo do que o esperado, ela desvia por instinto — mas o sorriso que vem em seguida revela que ela gostou do que sentiu."
},
{
  id: 29,
  name: "Olhar Rápido e Repetido",
  definition: "Quando ela olha para você repetidamente em intervalos curtos, é um sinal de que está prestando atenção e querendo mais contato visual.",
  group: "expressoesFaciais",
  whatToDo: "Dê um sorriso confiante e olhe de volta por um segundo a mais que ela. Mostre que notou e dominou a dança visual.",
  whatNotToDo: "Não ignore ou desvie para o celular — isso mata completamente o jogo de atenção que ela iniciou.",
  howToMakeHerShowThisSignal: "Crie ausência de estímulo visual: vire-se levemente, olhe para outro lugar por tempo suficiente. Se ela estiver conectada, o olhar rápido e repetido aparece como forma inconsciente de checar se ainda tem sua atenção."
},
{
  id: 30,
  name: "Inclinar a Cabeça para o Lado",
  definition: "Esse gesto mostra que ela está relaxada e aberta, frequentemente combinado com um sorriso suave e um olhar fixo.",
  group: "expressoesFaciais",
  whatToDo: "Aproveite para aprofundar a conversa emocionalmente. Esse gesto é abertura emocional pura.",
  whatNotToDo: "Não traga assuntos banais ou superficiais nesse momento — você pode fechar o canal emocional que ela abriu.",
  howToMakeHerShowThisSignal: "Compartilhe algo vulnerável sem teatralidade. Quando ela sente que você abriu um pedaço real de si, o corpo dela se inclina para o lado como gesto involuntário de empatia, sinalizando que você a tocou de verdade."
}
  
,

{
  id: 31,
  name: "Faz Perguntas Pessoais",
  definition: "Demonstra curiosidade sobre sua vida, hobbies e interesses.",
  group: "interacaoVerbal",
  whatToDo: "Aprofunde a resposta de forma sincera, mas não entregue tudo. Deixe perguntas no ar para criar curiosidade reversa.",
  whatNotToDo: "Não responda com frases curtas ou fechadas — isso mata o fluxo e parece que você quer encerrar a conexão.",
  howToMakeHerShowThisSignal: "Compartilhe algo pessoal sem parecer vulnerável demais, mas que tenha uma camada não explicada. Isso gera uma vontade quase instintiva de investigar mais sobre você — e aí ela começa a perguntar."
},
{
  id: 32,
  name: "Usa Apelidos ou Termos Carinhosos",
  definition: "Cria intimidade chamando por apelidos ou expressões afetuosas.",
  group: "interacaoVerbal",
  whatToDo: "Responda com um apelido ainda mais ousado ou criativo. Isso eleva a brincadeira e cria uma bolha entre vocês.",
  whatNotToDo: "Não ignore ou reaja de forma fria — isso gera quebra de clima e pode ser visto como rejeição emocional.",
  howToMakeHerShowThisSignal: "Inicie um clima de intimidade lúdica, chamando-a por um apelido provocador e inesperado. Se ela sentir segurança e diversão na troca, vai querer te ‘batizar’ com um também — sinal claro de conexão."
},
{
  id: 33,
  name: "Ri Facilmente das Suas Piadas",
  definition: "Rir mesmo de piadas simples para agradar e mostrar que está à vontade.",
  group: "interacaoVerbal",
  whatToDo: "Aproveite o riso como abertura para uma provocação ou um elogio com subtexto. Ela está receptiva.",
  whatNotToDo: "Não force piadas nem vire um palhaço — o riso deve gerar conexão, não entretenimento forçado.",
  howToMakeHerShowThisSignal: "Misture humor com tensão — olhe nos olhos antes de fazer a piada. Quando o ambiente já tem uma vibração sutilmente sexual, ela ri como forma de aliviar a tensão e manter a conexão."
},
{
  id: 34,
  name: "Tenta Prolongar a Conversa",
  definition: "Busca novos tópicos para continuar a conversa.",
  group: "interacaoVerbal",
  whatToDo: "Deixe ganchos no que você fala, tipo 'isso é uma história longa', para ela pedir mais. Isso ativa o desejo de aprofundar.",
  whatNotToDo: "Não mude de assunto bruscamente ou encerre com frases secas — isso quebra o envolvimento dela.",
  howToMakeHerShowThisSignal: "Conduza a conversa como se estivesse escondendo algo interessante. Dê pistas, mas nunca a história completa. O mistério prende a atenção dela — e o desejo de continuar vem como impulso natural."
},
{
  id: 35,
  name: "Faz Comentários Flertando",
  definition: "Usa elogios ou frases com tom de flerte.",
  group: "interacaoVerbal",
  whatToDo: "Jogue o flerte de volta, mas com controle emocional. Faça ela se sentir provocada, mas instigada a merecer você.",
  whatNotToDo: "Não retribua de forma melosa ou óbvia — isso tira o poder da tensão e do jogo sutil.",
  howToMakeHerShowThisSignal: "Deixe subtexto em tudo que diz, mas nunca entregue o jogo. A sensação de que há algo não dito — mas muito sentido — ativa nela a vontade de testar, provocar e flertar para decifrar sua energia."
},
{
  id: 36,
  name: "Concorda ou Apoia Suas Opiniões",
  definition: "Concorda para mostrar que está do seu lado.",
  group: "interacaoVerbal",
  whatToDo: "Valorize com um 'gosto do jeito que você pensa', e proponha um desafio leve — isso eleva a conexão com leve tensão.",
  whatNotToDo: "Não trate como algo neutro ou irrelevante — isso desvaloriza o esforço dela em se alinhar emocionalmente.",
  howToMakeHerShowThisSignal: "Fale com firmeza, mas com respeito. Quando ela sente que você sustenta o que pensa sem invalidar, o instinto dela é apoiar — porque admira quem tem clareza emocional sem agressividade."
},
{
  id: 37,
  name: "Usa um Tom de Voz Suave ou Doce",
  definition: "Adota um tom mais suave para demonstrar carinho.",
  group: "interacaoVerbal",
  whatToDo: "Baixe seu tom também. Responda de forma calma e profunda. Isso cria um clima quase íntimo, mesmo em público.",
  whatNotToDo: "Não corte esse momento com piadas ou frases fora de contexto — você quebra a conexão emocional.",
  howToMakeHerShowThisSignal: "Crie momentos de silêncio entre frases e mantenha o contato visual como se tudo fosse mais lento. O corpo dela entra nesse estado — e a voz se adapta automaticamente, revelando carinho e entrega."
},
{
  id: 38,
  name: "Revela Detalhes Pessoais",
  definition: "Compartilha histórias íntimas para criar uma conexão mais profunda.",
  group: "interacaoVerbal",
  whatToDo: "Escute com atenção total, e retribua com um detalhe pessoal seu — isso gera espelhamento de confiança.",
  whatNotToDo: "Não ouça com pressa ou mude de assunto sem reagir — isso gera frustração e bloqueio emocional.",
  howToMakeHerShowThisSignal: "Compartilhe uma verdade difícil ou profunda com naturalidade e sem drama. Quando ela sente que está diante de alguém raro — que se mostra sem medo — o impulso é abrir a alma também, quase como um reflexo."
},
{
  id: 39,
  name: "Brinca e Provoca Levemente",
  definition: "Provocações lúdicas para manter a conversa divertida e próxima.",
  group: "interacaoVerbal",
  whatToDo: "Use a provocação como ponte para tensão sexual sutil. Responda com humor e leve subtexto.",
  whatNotToDo: "Não leve a provocação pro lado pessoal ou reaja defensivamente — isso destrói o clima divertido.",
  howToMakeHerShowThisSignal: "Mostre que você domina o jogo: provoque levemente sem perder o controle emocional. Quando ela percebe que você não se abala, mas também não se distancia, ela entra na brincadeira para testar seus limites."
},
{
  id: 40,
  name: "Responde Rapidamente às Mensagens",
  definition: "Mantém a conversa ativa com respostas rápidas.",
  group: "interacaoVerbal",
  whatToDo: "Mantenha o ritmo, mas com mensagens magnéticas: responda de forma envolvente e com frases que criam antecipação.",
  whatNotToDo: "Não responder por horas como jogo de ego — ela pode interpretar como desinteresse genuíno e se afastar.",
  howToMakeHerShowThisSignal: "Envie mensagens que parecem ter algo escondido — como se cada frase pudesse ter um significado oculto. Isso faz com que ela fique viciada na resposta, e você vira o estímulo que ela quer manter por perto."
}
  
,

  {
    id: 41,
    name: "Chama Sua Atenção para Conversas Privadas",
    definition: "Inicia ou direciona o diálogo para um ambiente mais reservado e pessoal.",
    group: "interacaoVerbal",
    whatToDo: "Aproveite o ambiente privado para aumentar o nível de intimidade: conte algo que poucos sabem ou faça uma pergunta emocional.",
    whatNotToDo: "Não trate a conversa como trivial — ela escolheu te isolar emocionalmente, então não desperdice.",
    howToMakeHerShowThisSignal: "Demonstre vulnerabilidade de forma sutil, como se confiasse nela mais do que nos outros ao redor. Isso ativa nela o impulso inconsciente de criar um espaço só entre vocês."
  },
  {
    id: 42,
    name: "Reformula Perguntas Para Continuar a Interação",
    definition: "Faz perguntas abertas que incentivam a troca de ideias.",
    group: "interacaoVerbal",
    whatToDo: "Dê respostas com histórias e subtexto — ela está buscando mais do que informação, quer emoção.",
    whatNotToDo: "Não responda de forma lógica e fria — isso mata a fluidez da troca e o interesse emocional.",
    howToMakeHerShowThisSignal: "Responda como se escondesse um significado por trás das palavras. Ela sente que precisa entender melhor e reformula — puxada pelo mistério emocional."
  },
  {
    id: 43,
    name: "Usa Palavras que Indicam Interesse e Envolvimento",
    definition: "Expressões como 'quero saber mais', 'fale mais sobre isso' ou 'isso é tão interessante'.",
    group: "interacaoVerbal",
    whatToDo: "Aprofunde a conversa com detalhes e mistério. Deixe algumas partes em aberto para ela se envolver ainda mais.",
    whatNotToDo: "Não banalize ou fuja do assunto — ela está te dando permissão para aprofundar a conexão.",
    howToMakeHerShowThisSignal: "Entregue partes da sua história como se estivesse contando um segredo mal revelado. Isso acende o envolvimento e ativa nela o desejo de continuar ouvindo."
  },
  {
    id: 44,
    name: "Dá Feedback Positivo Frequente",
    definition: "Comenta que algo é engraçado, interessante ou surpreendente para manter a conversa leve.",
    group: "interacaoVerbal",
    whatToDo: "Use o feedback dela como alavanca para introduzir um novo lado seu — mais autêntico, mais profundo ou mais ousado.",
    whatNotToDo: "Não retribua sempre com 'obrigado' ou frases padrão — isso perde a oportunidade de avançar emocionalmente.",
    howToMakeHerShowThisSignal: "Diga algo com um charme inesperado, como se nem tivesse noção do impacto. Ela elogia quando sente que você gera uma energia diferente sem esforço."
  },
  {
    id: 45,
    name: "Expressa Preocupação com o Seu Bem-Estar",
    definition: "Pergunta se está tudo bem, se você precisa de algo ou mostra preocupação genuína.",
    group: "interacaoVerbal",
    whatToDo: "Responda de forma sincera, mas adicione uma provocação leve, tipo 'você sempre cuida tão bem assim?' — cria intimidade e charme.",
    whatNotToDo: "Não responda apenas com 'tudo certo' — ela está buscando abertura emocional e reciprocidade.",
    howToMakeHerShowThisSignal: "Demonstre pequenas fragilidades ou cansaços com um leve sorriso. Ela sente o impulso de cuidar quando percebe que pode ser especial pra você."
  },
  {
    id: 46,
    name: "Deixa Mensagens Sem Terminar Para Continuar a Conversa",
    definition: "Envia mensagens que convidam uma resposta, criando uma desculpa para prolongar a interação.",
    group: "comportamentoContextual",
    whatToDo: "Continue o jogo: deixe um gancho aberto também. Crie um ritmo onde ela sinta que quer sempre voltar.",
    whatNotToDo: "Não responda de forma fechada ou seca — você quebra o looping que ela construiu.",
    howToMakeHerShowThisSignal: "Use frases com duplo sentido ou finais ambíguos. Ela sente que tem mais a descobrir — e começa a criar desculpas pra manter o papo vivo."
  },
  {
    id: 47,
    name: "Encontra Motivos para Se Aproximar",
    definition: "Tenta estar no mesmo ambiente que você, mesmo sem um motivo claro.",
    group: "comportamentoContextual",
    whatToDo: "Note e valide com naturalidade: 'você sempre aparece nos lugares certos, hein?' — ela vai rir e se sentir vista.",
    whatNotToDo: "Não aja como se fosse coincidência sem importância — ela quer ser notada, mas sem parecer óbvia.",
    howToMakeHerShowThisSignal: "Faça sua presença ser notável. Quando você se torna uma energia que mexe com o ambiente, ela arranja desculpas pra se aproximar."
  },
  {
    id: 48,
    name: "Faz Pequenos Gestos de Cuidado",
    definition: "Traz uma bebida, oferece um lanche ou realiza pequenas gentilezas.",
    group: "comportamentoContextual",
    whatToDo: "Retribua com um gesto não verbal: toque leve, olhar profundo ou um elogio emocional — isso transforma o gesto em conexão.",
    whatNotToDo: "Não aceite de forma mecânica ou sem emoção — você perde a chance de criar reciprocidade emocional.",
    howToMakeHerShowThisSignal: "Demonstre que você percebe e valoriza gestos sutis nos outros. Ela sente que pode expressar carinho sem medo — e começa a agir assim com você."
  },
  {
    id: 49,
    name: "Prolonga Momentos de Interação",
    definition: "Demora um pouco mais ao se despedir ou hesita antes de sair, sugerindo que quer ficar mais tempo com você.",
    group: "comportamentoContextual",
    whatToDo: "Não despeça rápido — use esse momento pra dizer algo emocionalmente memorável. Final marcante = memória emocional.",
    whatNotToDo: "Não cortar com 'ok, então tchau' — você apaga o brilho do momento mais delicado da interação.",
    howToMakeHerShowThisSignal: "Reduza o ritmo no final e olhe com presença — ela hesita em ir embora quando sente que ainda existe algo não dito."
  },
  {
    id: 50,
    name: "Cria Desculpas para Conversas Rápidas",
    definition: "Encontra pequenas razões para iniciar conversas, como pedir opinião sobre algo trivial.",
    group: "comportamentoContextual",
    whatToDo: "Brinque com a desculpa: diga algo como 'você só queria ouvir minha voz, né?' — cria humor + tensão emocional.",
    whatNotToDo: "Não responda com excesso de lógica ou pressa — o que importa aqui não é o conteúdo, mas a intenção oculta.",
    howToMakeHerShowThisSignal: "Demonstre que você está sempre um pouco difícil de alcançar, mas nunca inacessível. Isso a leva a criar motivos para puxar assunto, mesmo sem saber por quê."
  }
  
,
{
  id: 51,
  name: "Olha para Você Durante Conversas em Grupo",
  definition: "Mesmo quando outros estão falando, seus olhos frequentemente voltam para você.",
  group: "comportamentoContextual",
  whatToDo: "Quando perceber, olhe de volta e sustente por 2 segundos com um sorriso discreto. Isso cria um campo exclusivo entre vocês.",
  whatNotToDo: "Não ignore ou desvie com pressa — você quebra o laço silencioso que ela está tentando construir.",
  howToMakeHerShowThisSignal: "Fale pouco, mas com presença. Quando sua energia domina o ambiente sem esforço, os olhos dela sempre procuram por você — como quem quer permissão para continuar olhando."
},
{
  id: 52,
  name: "Se Lembra de Pequenos Detalhes de Conversas Passadas",
  definition: "Traz à tona algo que você mencionou antes, mostrando que prestou atenção e guardou essa informação.",
  group: "comportamentoContextual",
  whatToDo: "Demonstre surpresa positiva: 'você lembra disso mesmo?'. Isso faz ela se sentir especial por ter prestado atenção em você.",
  whatNotToDo: "Não apenas concorde e mude de assunto — isso esvazia o gesto de valor emocional que ela fez.",
  howToMakeHerShowThisSignal: "Compartilhe histórias com detalhes emocionais e inesperados — ela grava aquilo que mexe com ela, e mais tarde vai te surpreender ao lembrar."
},
{
  id: 53,
  name: "Posiciona-se para Facilitar o Contato Visual",
  definition: "Se coloca em lugares estratégicos onde pode trocar olhares com você facilmente.",
  group: "comportamentoContextual",
  whatToDo: "Use o contato visual para criar microtensões, como olhares rápidos, sorrisos sutis e pausas no discurso.",
  whatNotToDo: "Não aja como se fosse coincidência — ela está se esforçando para ser percebida, não ignorada.",
  howToMakeHerShowThisSignal: "Evite procurar os olhos dela o tempo todo — quando você se mostra presente e autêntico, ela mesma se posiciona para te ver melhor, sem nem perceber."
},
{
  id: 54,
  name: "Aparece Onde Sabe Que Você Estará",
  definition: "Frequentemente surge em locais onde sabe que você estará, sem deixar claro que foi intencional.",
  group: "comportamentoContextual",
  whatToDo: "Receba com naturalidade e charme: 'você me segue ou é só conexão de almas?'. Cria humor e tensão emocional.",
  whatNotToDo: "Não a trate com indiferença ou como mais uma — isso transforma um esforço em frustração.",
  howToMakeHerShowThisSignal: "Deixe rastros sutis dos lugares que frequenta ou dos planos que tem — ela vai usar isso como desculpa para te encontrar sem parecer óbvia."
},
{
  id: 55,
  name: "Demonstra Conforto com Longos Silêncios",
  definition: "Não se sente obrigada a preencher silêncios, indicando que se sente à vontade ao seu lado.",
  group: "comportamentoContextual",
  whatToDo: "Respeite o silêncio. Toque o braço dela ou mantenha o olhar. Silêncio confortável é intimidade em estado bruto.",
  whatNotToDo: "Não quebre o silêncio com comentários bobos ou ansiedade — o momento morre.",
  howToMakeHerShowThisSignal: "Fale pouco, respire fundo e olhe com calma. Quando ela sente que não precisa impressionar, o silêncio se transforma em conexão invisível."
},
{
  id: 56,
  name: "Faz Pequenos Comentários Que Criam Intimidade",
  definition: "Usa frases que aproximam, como 'eu também sinto isso' ou 'é como se...'.",
  group: "comportamentoContextual",
  whatToDo: "Aprofunde: diga 'eu também, mas nunca falei isso pra ninguém'. Isso cria sensação de exclusividade afetiva.",
  whatNotToDo: "Não ignore ou brinque — ela está testando a profundidade da conexão emocional com você.",
  howToMakeHerShowThisSignal: "Fale de sensações usando metáforas ou símbolos — quando você acessa o lado emocional dela, ela sente liberdade para se abrir em camadas."
},
{
  id: 57,
  name: "Espelha Discretamente o Seu Ritmo de Movimento",
  definition: "Ajusta seu ritmo de andar ou até mesmo suas pausas para coincidir com o seu.",
  group: "comportamentoContextual",
  whatToDo: "Use isso para liderar o ritmo: caminhe mais devagar, pause antes de responder — ela vai seguir e sentir sintonia.",
  whatNotToDo: "Não fique agitado ou desconectado — isso quebra o estado de fluxo e sintonia corporal que ela criou.",
  howToMakeHerShowThisSignal: "Tenha um ritmo marcante e deliberado — quando você passa controle e segurança através do corpo, ela entra em harmonia sem perceber."
},
{
  id: 58,
  name: "Se Oferece Para Acompanhar em Tarefas Triviais",
  definition: "Sugere acompanhá-lo para fazer uma atividade simples, como ir pegar algo ou caminhar até um local próximo.",
  group: "comportamentoContextual",
  whatToDo: "Use o momento como um 'passeio íntimo'. Conte uma história marcante ou faça uma brincadeira sobre parceria.",
  whatNotToDo: "Não trate como obrigação ou rotina — é um convite disfarçado para criar momentos memoráveis.",
  howToMakeHerShowThisSignal: "Mencione tarefas simples com naturalidade e bom humor — ela aproveita esse tipo de brecha para te acompanhar sem parecer que está se entregando demais."
},
{
  id: 59,
  name: "Desvia Conversas de Outros para Algo Relacionado a Você",
  definition: "Redireciona tópicos de conversas para assuntos que envolvem você, tentando manter seu interesse ativo.",
  group: "comportamentoContextual",
  whatToDo: "Reforce a centralidade: diga algo como 'tá sempre querendo puxar meu lado da conversa, hein?'. Ela vai sorrir e se entregar.",
  whatNotToDo: "Não mude de assunto de novo — isso pode parecer que você está desconfortável sendo o foco dela.",
  howToMakeHerShowThisSignal: "Traga à conversa ideias que envolvem você de forma magnética — ela vai puxar os assuntos de volta para você como se não houvesse escolha."
},
{
  id: 60,
  name: "Sutilmente Sugere Planos Futuros",
  definition: "Faz comentários como 'devíamos fazer isso qualquer dia', sugerindo encontros sem pressionar diretamente.",
  group: "comportamentoContextual",
  whatToDo: "Diga 'qualquer dia tipo... amanhã?'. Jogue o plano na cara dela com charme e ousadia — isso mostra liderança.",
  whatNotToDo: "Não apenas diga 'vamos sim' e mude de assunto — você perde o timing emocional e o gesto morre.",
  howToMakeHerShowThisSignal: "Fale de situações hipotéticas com leveza e subtexto, como 'se eu fosse te levar num lugar diferente...'. Ela completa com sugestões camufladas — e revela desejo em forma de plano."
} 

];


let currentQuestionIndex = 0;
let userSelections = [];
let groupScores = {
    linguagemCorporal: 0,
    expressoesFaciais: 0,
    interacaoVerbal: 0,
    comportamentoContextual: 0
};

// Inicializar o quiz
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.start-sales-page').onclick = function () {
      startSalesRedirect();
  };

  document.querySelector('.start-quiz').onclick = function () {
      startQuiz();
  };
});


const quizContainer = document.getElementById('quiz-container');
const welcomeContainer = document.getElementById('headline-container');
const resultContainer = document.getElementById('result-container');
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");

function startQuiz() {
    console.log("Iniciando o quiz...");
    showLoading();
    welcomeContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    setTimeout(() => {
        hideLoading();
        renderQuestion();
    }, 9000);
}

function startSalesRedirect() {
  console.log("Redirecionando para página de vendas...");
  showLoading();
  welcomeContainer.style.display = 'none';
  setTimeout(() => {
      hideLoading();
      window.location.href = "salesPage.html";
  }, 4000);
}

function showLoading() {
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.style.display = 'flex';
}

function hideLoading() {
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.style.display = 'none';
}

// Função para renderizar a pergunta
function renderQuestion() {
    console.log("Renderizando pergunta...");
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const buttonsContainer = document.querySelector('.buttons-container');

    questionContainer.style.display = 'block';
    resultContainer.style.display = 'none';

    const questionData = questions[currentQuestionIndex];
    questionText.textContent = questionData.question;
    buttonsContainer.innerHTML = '';

    // Adicionar as opções
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.classList.add("option-button");
        button.onclick = () => toggleSelection(index, button);
        if (isSelected(index)) {
            button.classList.add("selected");
        }
        buttonsContainer.appendChild(button);
        console.log(`Adicionada opção: ${option.text}`);
    });

    // Exibir ou ocultar o botão "Voltar"
    backButton.style.display = currentQuestionIndex > 0 ? "block" : "none";

    // Configurar o botão "Próximo" ou "Ver Resultado"
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = "Ver Resultado"; // Alterar texto para "Ver Resultado"
        nextButton.onclick = function() {
            showLoading();
            setTimeout(() => {
                hideLoading();
                showResults(); // Mostrar os resultados quando for a última pergunta
            }, 2000);
        };
    } else {
        nextButton.textContent = "Próximo"; // Restaurar o texto "Próximo"
        nextButton.style.display = "block";
        nextButton.onclick = moveToNextQuestion;
    }

    backButton.onclick = moveToPreviousQuestion;
}

function calculateAttractionScore(selectedSignalIds) {
    const attractionSignalsHit = highAttractionSignals.filter(id => selectedSignalIds.has(id));
    const attractionScore = (attractionSignalsHit.length / highAttractionSignals.length) * 100;
    return attractionScore.toFixed(2);
}

function getAttractionMessage(score) {
    if (score >= 80) return "Ela sente uma forte atração por você. Muitos dos sinais indicam desejo e interesse real.";
    if (score >= 60) return "Existe uma boa chance de atração, com vários sinais de interesse claros.";
    if (score >= 40) return "A atração parece moderada. Alguns sinais existem, mas podem ser sutis.";
    return "Poucos sinais de atração foram detectados. Pode ser apenas simpatia ou amizade.";
}



// Função para alternar a seleção das opções
function toggleSelection(optionIndex, buttonElement) {
    const selected = userSelections[currentQuestionIndex] || [];

    if (selected.includes(optionIndex)) {
        userSelections[currentQuestionIndex] = selected.filter(i => i !== optionIndex);
        buttonElement.classList.remove("selected");
    } else {
        selected.push(optionIndex);
        userSelections[currentQuestionIndex] = selected;
        buttonElement.classList.add("selected");
    }
    console.log(`Selecionou opção: ${optionIndex}`);
}

// Verificar se a opção já foi selecionada anteriormente
function isSelected(optionIndex) {
    const selected = userSelections[currentQuestionIndex] || [];
    return selected.includes(optionIndex);
}

// Função para ir para a próxima pergunta
function moveToNextQuestion() {
    if (userSelections[currentQuestionIndex] && userSelections[currentQuestionIndex].length > 0) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        alert("Por favor, selecione pelo menos uma opção para continuar.");
    }
}

// Função para ir para a pergunta anterior
function moveToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function showResults() {
    console.log("Exibindo resultados...");

    // Ocultar o quiz e exibir a área de resultados
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    nextButton.style.display = "none";

    // Inicializar estrutura para armazenar resultados por grupo
    const groupResults = {
        linguagemCorporal: [],
        expressoesFaciais: [],
        interacaoVerbal: [],
        comportamentoContextual: []
    };

    const selectedSignalIds = new Set();

    // Processando seleções do usuário e adicionando sinais observados
    console.log("Processando seleções do usuário...");
    userSelections.forEach((selection, index) => {
        const questionData = questions[index];
        selection.forEach(optionIndex => {
            const signals = questionData.options[optionIndex].signals;
            signals.forEach(signalId => {
                selectedSignalIds.add(signalId);
            });
        });
    });

    // Organizar os sinais nos grupos correspondentes e marcar como observados ou não
    signals.forEach(signal => {
        const wasSelected = selectedSignalIds.has(signal.id);
        groupResults[signal.group].push({
          id: signal.id,
          name: signal.name,
          definition: signal.definition,
          selected: wasSelected,
          whatToDo: signal.whatToDo,
          whatNotToDo: signal.whatNotToDo,
          howToMakeHerShowThisSignal: signal.howToMakeHerShowThisSignal
        });
        
    });

    // Calcular as pontuações dos grupos
    console.log("Calculando pontuações...");
    calculateGroupScores(groupResults);
    const totalScore = calculateFinalScore();
    const attractionScore = calculateAttractionScore(selectedSignalIds);


    // Gerar o HTML dos resultados
    const resultHTML = `
        <img src="img/decodeLogo.png" class="decode-logo-result">
        <h2 class="result-title">Resultado</h2>
        ${formatGroupResults("Comunicação Não Verbal –<br> Linguagem Corporal", groupResults.linguagemCorporal, groupScores.linguagemCorporal, "linguagemCorporal")}
        <hr class="line">
        ${formatGroupResults("Comunicação Não Verbal –<br> Expressões Faciais", groupResults.expressoesFaciais, groupScores.expressoesFaciais, "expressoesFaciais")}
        <hr class="line">
        ${formatGroupResults("Interação <br> Verbal", groupResults.interacaoVerbal, groupScores.interacaoVerbal, "interacaoVerbal")}
        <hr class="line">
        ${formatGroupResults("Comportamento <br> Contextual", groupResults.comportamentoContextual, groupScores.comportamentoContextual, "comportamentoContextual")}
        <hr class="line">
        <h3 class="final-score">Pontuação <br> Total: ${totalScore}%</h3>
        <p class="final-message">${getFinalMessage(totalScore)}</p>

        <h3 class="attraction-score">Nível de <br> Atração: ${attractionScore}%</h3>
        <p class="attraction-message">${getAttractionMessage(attractionScore)}</p>

        <div class="offer-container">
          <!-- Decode Plus -->
          <img src="img/decodePlusCover.png" alt="Decode Plus - Acesso Premium" class="offer-image decode-img-plus">

          <h3 class="group-offer red-title" style="text-align: start; font-size: 28px; margin-top: 40px">
            🔥 DECODE PLUS — Desperte os sinais que ela ainda não revelou (por sua causa)!
          </h3>

          <p class="offer-description" style="text-align: start;">
            O <b>DECODE PLUS</b> analisa os sinais que ela já deu e mostra o que fazer para os outros (não revelados) começarem a surgir — <b>os mais fortes, intensos e reveladores</b>.<br><br>
            Você vai aprender como:<br>
            👉 Ativar microexpressões de interesse sexual e emocional<br>
            👉 Desencadear comportamentos de aproximação e toque<br>
            👉 Quebrar bloqueios inconscientes e fazer ela te enxergar com mais intensidade.<br><br>
            <i>Você já viu o que ela sente. Agora é hora de provocar o que ela ainda não teve coragem de demonstrar.</i>
            <br><br>
          </p>
          <div class="center-btn">
            <a href="https://pay.cakto.com.br/ux8xmkg_480233" target="_blank" class="offer-button">
              Quero Acessar o <br> Decode Plus Agora
            </a>
          </div>

          <!-- Licença Decode -->
          <img src="img/decodeAffiliateCover.png" alt="Liberar Licença Decode Plus" class="offer-image affiliate-img">

          <h3 class="group-offer red-title" style="text-align: start; font-size: 28px; margin-top: 40px">
            Libere Sua Licença Decode e Comece a Faturar Hoje Mesmo!
          </h3>

          <p class="offer-description" style="text-align: start;">
            Quer ganhar dinheiro com o Decode?<br>
            Com a <b>Licença Decode</b>, você se torna um afiliado oficial e recebe um link especial para divulgar o app.<br>
            Sempre que alguém comprar através de você, parte da venda é sua!  
            <br><br>
            ✅ Comissão de <b>60%</b> por venda. <br>
            ✅ <b>Sem precisar aparecer.</b> Sem dar suporte. <br>
            ✅ Você fatura <b>no automático</b>, todos os dias. <br> 
            ✅ Pronto para divulgar <b>com 1 clique.</b>
            <br><br>
            <i>Você já tem acesso ao app... Agora é sua chance de faturar com ele.</i>
            <br><br>
          </p>
          <div class="center-btn">
              <a href="https://pay.cakto.com.br/3avw2sw_486648" target="_blank" class="offer-button">
              Quero Vender o Decode <br> e Lucrar Agora
              </a>
          <div>

        </div>

    `;

    saveResultsToLocalStorage(groupResults, attractionScore, totalScore);

    // Inserir o resultado na div de resultado e exibir
    resultContainer.innerHTML = resultHTML;
    console.log("Resultados mostrados.");
}

function saveResultsToLocalStorage(groupResults, attractionScore, interestScore) {
  const allSignals = [];

  Object.keys(groupResults).forEach(group => {
      groupResults[group].forEach(signal => {
          allSignals.push({
              id: signal.id,
              name: signal.name,
              definition: signal.definition,
              selected: signal.selected,
              whatToDo: signal.whatToDo,
              whatNotToDo: signal.whatNotToDo,
              group: group,
              weight: highAttractionSignals.includes(signal.id) ? 3 : 1,
              howToMakeHerShowThisSignal: signal.howToMakeHerShowThisSignal || "",
              
          });
      });
  });

  const resultData = {
      signals: allSignals,
      attractionScore: parseFloat(attractionScore),
      interestScore: parseFloat(interestScore)
  };

  localStorage.setItem("decodeResults", JSON.stringify(resultData));
  console.log("Resultado salvo no localStorage:", resultData);
}




function calculateGroupScores(groupResults) {
    console.log("Iniciando cálculo das pontuações por grupo...");

    groupScores = {
        linguagemCorporal: 0,
        expressoesFaciais: 0,
        interacaoVerbal: 0,
        comportamentoContextual: 0
    };

    // Contar quantos sinais foram selecionados em cada grupo para calcular a porcentagem
    Object.keys(groupResults).forEach(group => {
        const selectedCount = groupResults[group].filter(signal => signal.selected).length;
        const totalCount = groupResults[group].length;
        groupScores[group] = totalCount > 0 ? ((selectedCount / totalCount) * 100).toFixed(2) : 0;
    });

    console.log("Pontuações por grupo (em porcentagem):", groupScores);
}

function calculateFinalScore() {
    const total = (parseFloat(groupScores.linguagemCorporal) + parseFloat(groupScores.expressoesFaciais) + parseFloat(groupScores.interacaoVerbal) + parseFloat(groupScores.comportamentoContextual)) / 4;
    return total.toFixed(2);
}

function formatGroupResults(groupName, signals, score, groupKey) {
  let html = `<h3 class="group-name red-title">${groupName}: ${score}%</h3>`;
  html += `<div class="signal-scroll-wrapper"><div class="signal-card-horizontal">`;

  const selectedSignals = signals.filter(signal => signal.selected);

  if (selectedSignals.length === 0) {
    html += `<div class="signal-card"><p>Nenhum sinal observado neste grupo.</p></div>`;
  } else {
    selectedSignals.forEach(signal => {
      html += `
        <div class="signal-card">
          <p><b>${signal.name}</b>: ${signal.definition}</p>
          <p><b class="red-font">❤️ O que fazer:</b> ${signal.whatToDo}</p>
          <p><b class="red-font">💔 O que não fazer:</b> ${signal.whatNotToDo}</p>
        </div>
      `;
    });
  }

  html += `</div></div>`;
  return html;
}




function getFinalMessage(score) {
    if (score >= 80) return "Ela está realmente interessada em você.";
    if (score >= 60) return "Ela pode estar interessada, mas é importante observar mais sinais.";
    if (score >= 40) return "Parece que o interesse é moderado, talvez em situações específicas.";
    return "Ela não está demonstrando muitos sinais de interesse.";
}