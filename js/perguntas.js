export const perguntas = [
    {
        enunciado: "O ano é 2022. O mundo está em colapso. Comunicações foram cortadas e rumores de guerra civil se espalham. Você, um agente recém-designado, recebe sua primeira missão: recuperar informações sigilosas de uma base abandonada. Qual é sua primeira ação?",
        alternativas: [
            {
                texto: "Ir direto para a base sem esperar.",
                afirmacao: [
                    "Você demonstra coragem, mas assume grandes riscos.",
                    "Agir sem informações pode acelerar a missão ou colocar você em perigo."
                ],
                proxima: 1,
            },
            {
                texto: "Coletar informações e recrutar aliados antes de agir.",
                afirmacao: [
                    "Você escolhe se preparar e aumentar suas chances de sucesso.",
                    "A cautela pode salvar vidas e revelar informações cruciais."
                ],
                proxima: 2,
            },
        ]
    },
    {
        enunciado: "Você chega à base. O local parece silencioso demais e há sinais de confrontos recentes. Como prossegue?",
        alternativas: [
            {
                texto: "Entrar discretamente e investigar.",
                afirmacao: [
                    "Você aposta na furtividade para evitar alertar inimigos.",
                    "Seus movimentos silenciosos podem revelar segredos importantes."
                ],
                proxima: 3,
            },
            {
                texto: "Esperar até anoitecer para ter vantagem.",
                afirmacao: [
                    "A paciência aumenta suas chances de infiltração sem ser visto.",
                    "Cada minuto de espera aumenta o risco de ser descoberto."
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Você decide recrutar aliados antes de ir à base. Em meio às ruínas da cidade, encontra um grupo desconfiado de sobreviventes. Qual sua atitude?",
        alternativas: [
            {
                texto: "Revelar sua identidade de agente e pedir apoio.",
                afirmacao: [
                    "Você conquistou a confiança do grupo.",
                    "Agora possui informações valiosas sobre a base e seus perigos."
                ],
                proxima: 3,
            },
            {
                texto: "Seguir sozinho para não se expor.",
                afirmacao: [
                    "Você mantém sua identidade em segredo, mas enfrenta riscos maiores sozinho.",
                    "A missão pode se tornar mais difícil sem aliados."
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Dentro da base, você encontra um cofre de segurança que provavelmente contém os dados secretos. Está protegido por um sistema complexo. O que faz?",
        alternativas: [
            {
                texto: "Tentar hackear o sistema com seus conhecimentos.",
                afirmacao: [
                    "Você usa suas habilidades técnicas para avançar sem depender de ninguém.",
                    "O sucesso ou fracasso pode definir o rumo da missão."
                ],
                proxima: 5,
            },
            {
                texto: "Explorar mais a base em busca de uma chave ou código.",
                afirmacao: [
                    "Você aumenta suas chances de encontrar uma solução segura.",
                    "Mas cada minuto perdido pode aumentar o risco de ser descoberto."
                ],
                proxima: 5,
            },
        ]
    },
    {
        enunciado: "Com o cofre aberto, você encontra documentos que revelam que o colapso global foi orquestrado por uma organização secreta. O que faz?",
        alternativas: [
            {
                texto: "Levar os documentos para sua agência.",
                afirmacao: [
                    "Você escolheu a lealdade à sua organização.",
                    "Seu relatório pode mudar o rumo da guerra."
                ],
                proxima: 6,
            },
            {
                texto: "Divulgar a verdade diretamente ao povo sobrevivente.",
                afirmacao: [
                    "Você prefere a transparência acima da hierarquia.",
                    "Essa decisão pode reacender a esperança, mas gerar novos conflitos."
                ],
                proxima: 7,
            },
        ]
    },
    {
        enunciado: "No caminho de volta à sua agência, você é interceptado por mercenários da organização secreta. Como reage?",
        alternativas: [
            {
                texto: "Tentar negociar ou enganar os mercenários.",
                afirmacao: [
                    "Você usa estratégia e persuasão para se safar da situação.",
                    "A negociação pode salvar sua vida e proteger os documentos."
                ],
                proxima: 8,
            },
            {
                texto: "Lutar para abrir caminho e escapar.",
                afirmacao: [
                    "Você aposta na força e habilidades de combate.",
                    "O confronto aumenta o risco, mas pode eliminar a ameaça rapidamente."
                ],
                proxima: 9,
            },
        ]
    },
    {
        enunciado: "Ao tentar divulgar a verdade, você encontra cidadãos confusos e descrentes. Qual sua estratégia?",
        alternativas: [
            {
                texto: "Usar provas e documentos para convencer líderes locais.",
                afirmacao: [
                    "Você consegue despertar confiança e mobilizar parte da população.",
                    "O apoio local aumenta suas chances de enfrentar a organização secreta."
                ],
            },
            {
                texto: "Falar diretamente ao público, sem apresentar todos os detalhes.",
                afirmacao: [
                    "Você consegue chamar atenção, mas nem todos acreditam.",
                    "Alguns podem reagir de forma inesperada, gerando caos."
                ],
            },
        ]
    },
    {
        enunciado: "No combate direto com os mercenários, você precisa escolher seu equipamento para a batalha. Qual opção?",
        alternativas: [
            {
                texto: "Armas de fogo e granadas.",
                afirmacao: [
                    "Você escolhe força bruta para eliminar ameaças rapidamente.",
                    "O risco de ferimentos aumenta, mas a pressão sobre os inimigos é grande."
                ],
            },
            {
                texto: "Armadura leve e armas silenciosas.",
                afirmacao: [
                    "Você prioriza furtividade e proteção.",
                    "Movimentos estratégicos podem evitar confrontos diretos e salvar vidas."
                ],
            },
        ]
    },
    {
        enunciado: "A missão chega ao fim. Dependendo de suas escolhas, você consegue ou não impedir os planos da organização secreta. Qual desfecho ocorreu?",
        alternativas: [
            {
                texto: "Missão cumprida com sucesso e informações entregues à agência.",
                afirmacao: [
                    "Você salvou vidas e ajudou a restaurar ordem em áreas críticas.",
                    "Seu sucesso será lembrado como um exemplo de coragem e estratégia."
                ],
            },
            {
                texto: "Divulgou a verdade diretamente ao povo, causando revolta e novos conflitos.",
                afirmacao: [
                    "Embora tenha revelado a verdade, o caos se intensifica.",
                    "Sua coragem gerou consequências imprevisíveis, mas abriu caminho para mudanças futuras."
                ],
            },
            {
                texto: "Falha na missão: documentos perdidos ou interceptados pela organização.",
                afirmacao: [
                    "A organização mantém seu plano em andamento.",
                    "Você precisará se reagrupar e aprender com os erros para futuras operações."
                ],
            },
        ]
    }
];
