# pdfViewer-byEdu

# https://eduardogj.github.io/pdfViewer-byEdu/

Esse site tem um uso muito específico para mim, mas pode ser utilizado abertamente por pessoas que precisam dessas funções ou querem adicionar coisas novas.

Eu também sou professor particular de inglês e utilizo muito arquivos PDF, áudios e vídeos nas aulas. Aí começa o problema: nunca consegui encontrar uma ferramenta de áudio conferência que pudesse me deixar compartilhar a tela do PDF juntamente com a transmissão do áudio.

Geralmente os problemas eram:
- A ferramenta de videoconferencia não permitia o compartilhamento de tela com som;
- As que permitem, causavam alguns bugs gráficos. Meu cursor ficava se multiplicando na tela por onde passava.
- Uma outra ferramenta que quase atendeu aos meus desejos, deixava compartilhar a tela com som do sistema sem bugs gráficos. O problema é que o aluno ouvia a própria voz retornando.(???)

# Fiz esse site pensando no leitor de PDF do EDGE, pois ele possui ferramentas de desenho livre, caixa de texto, etc. que são muito úteis nas minhas aulas;

A seguir, listo as funções do site:

Carregamento de PDF: O site permite que os usuários carreguem e visualizem arquivos em formato PDF. Ele fornece um elemento de entrada de arquivo onde os usuários podem selecionar um arquivo PDF de seu sistema local.

Incorporação de PDF: Uma vez selecionado um arquivo PDF, o site utiliza JavaScript para criar dinamicamente um elemento de incorporação (embed). O PDF selecionado é então incorporado na página usando esse elemento de incorporação.

Seleção de PDF no Dropdown: O site cria dinamicamente uma lista suspensa (dropdown) para exibir os arquivos PDF carregados. Cada arquivo PDF carregado é adicionado como uma opção na lista suspensa. Os usuários podem selecionar diferentes arquivos PDF na lista suspensa, e o PDF correspondente é exibido enquanto os outros são ocultados.

Carregamento de Arquivo de Áudio: O site também oferece suporte para carregar arquivos de áudio. Ele possui um elemento de entrada de arquivo de áudio onde os usuários podem selecionar um arquivo de áudio. Após a seleção, o arquivo de áudio escolhido é carregado no player de áudio embutido do navegador.

Carregamento de Arquivo de Vídeo: Além disso, o site suporta o carregamento de arquivos de vídeo. Ele inclui um elemento de entrada de arquivo de vídeo onde os usuários podem selecionar um arquivo de vídeo. Quando um arquivo de vídeo é selecionado, ele cria dinamicamente um elemento de vídeo e incorpora o vídeo dentro do contêiner de vídeo designado. Um botão de fechar também é adicionado para remover o player de vídeo e exibir os elementos do contêiner e da página em branco.
