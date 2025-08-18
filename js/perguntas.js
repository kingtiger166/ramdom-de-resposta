export const perguntas = [
    {
        enunciado: "O ano é 2022. O mundo está em colapso. Comunicações foram cortadas, e rumores de guerra civil e conflitos globais se espalham como fogo. Como agente em meio a esse caos, você recebe sua primeira missão: investigar uma estação de pesquisa no Ártico que, supostamente, detém a chave para restabelecer a comunicação global. Ao chegar, encontra dois possíveis caminhos de entrada:",
        alternativas: [
            {
                texto: "Invadir a porta da frente, usando força bruta e armamento pesado.",
                afirmacao: [
                    "Após uma intensa troca de tiros, você invade a sala de controle.",
                    "Os técnicos estão apavorados, mas um deles, antes de ser atingido, envia uma mensagem criptografada para um destino desconhecido."
                ],
                proxima: 1
            },
            {
                texto: "Entrar furtivamente pelos dutos de ventilação, evitando guardas e câmeras.",
                afirmacao: [
                    "Você se esgueira pelos dutos e chega à sala principal de controle da estação.",
                    "Os técnicos trabalham freneticamente, mas não para restabelecer a comunicação: eles estão enviando uma mensagem criptografada para um destino desconhecido."
                ],
                proxima: 2
            }
        ]
    },
    {
        enunciado: "A mensagem capturada contém apenas uma coordenada em meio ao gelo do Ártico. O que você faz?",
        alternativas: [
            {
                texto: "Seguir imediatamente para a localização indicada, mesmo sem reforços.",
                afirmacao: [
                    "Você decide arriscar e parte sozinho em meio à neve e ao vento cortante.",
                    "Ao se aproximar da coordenada, percebe estruturas metálicas escondidas sob o gelo."
                ],
                proxima: 3
            },
            {
                texto: "Enviar as coordenadas para a base e esperar por instruções.",
                afirmacao: [
                    "Você envia as coordenadas, mas não recebe resposta: as comunicações estão ainda mais comprometidas do que imaginava.",
                    "Agora resta decidir: esperar reforços que talvez nunca cheguem, ou seguir por conta própria."
                ],
                proxima: 4
            }
        ]
    },
    {
        enunciado: "Você descobre que a coordenada leva a uma instalação subterrânea secreta. A entrada está fortemente protegida por guardas e torres de vigilância. Como agir?",
        alternativas: [
            {
                texto: "Hackear remotamente o sistema de segurança para abrir a entrada.",
                afirmacao: [
                    "Você conecta seu equipamento portátil e, após minutos de tensão, burlar os protocolos de segurança.",
                    "As portas se abrem silenciosamente, mas um alerta é enviado a alguém desconhecido: agora sabem que você está aqui."
                ],
                proxima: 5
            },
            {
                texto: "Criar uma distração para atrair os guardas e se infiltrar despercebido.",
                afirmacao: [
                    "Você usa explosivos de fumaça a alguns metros de distância. Os guardas correm para verificar.",
                    "Enquanto isso, consegue se infiltrar pelo acesso lateral, mas terá pouco tempo antes de descobrirem a invasão."
                ],
                proxima: 6
            }
        ]
    },
    {
        enunciado: "Dentro da instalação subterrânea, há um servidor central emitindo sinais fortes. Você precisa decidir como lidar com as informações.",
        alternativas: [
            {
                texto: "Copiar todos os dados para analisar depois em segurança.",
                afirmacao: [
                    "Você baixa gigabytes de arquivos criptografados.",
                    "Enquanto faz o download, percebe que uma contra-invasão digital está rastreando sua posição."
                ],
                proxima: 7
            },
            {
                texto: "Ler os arquivos diretamente no servidor, mesmo correndo risco.",
                afirmacao: [
                    "Você acessa os relatórios e descobre algo chocante: a mensagem não era um pedido de socorro.",
                    "Ela era uma ordem para iniciar uma operação global chamada 'Projeto Aurora'.",
                    "Na tela, uma contagem regressiva surge: 72 horas até a ativação."
                ],
                proxima: 8
            }
        ]
    }
];