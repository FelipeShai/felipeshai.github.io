import { BlogPost } from '../blog.types';

export const comandosLinuxEssenciaisTerminalPost: BlogPost = {
  slug: 'comandos-linux-essenciais-terminal',
  title: 'Comandos Linux essenciais para navegar, administrar e resolver no terminal',
  description:
    'Um guia rapido com comandos fundamentais para navegacao, arquivos, pacotes, processos e permissoes no dia a dia.',
  publishedAt: '2026-04-20',
  readingTime: '8 min',
  author: 'Felipe Shai',
  tags: ['Linux', 'Terminal', 'CLI', 'Produtividade'],
  sections: [
    {
      title: 'Navegacao e arquivos',
      paragraphs: ['Comandos basicos para se localizar e manipular arquivos e pastas.'],
      commands: [
        { command: 'pwd', description: 'Mostra o caminho completo da pasta atual.' },
        { command: 'ls', description: 'Lista os arquivos e pastas da pasta atual.' },
        { command: 'ls -la', description: 'Lista tudo, incluindo arquivos ocultos e detalhes de permissoes.' },
        { command: 'cd pasta/', description: 'Entra na pasta informada.' },
        { command: 'cd ..', description: 'Volta uma pasta no hierarquico.' },
        { command: 'cd ~', description: 'Vai para o diretorio pessoal do usuario.' },
        { command: 'mkdir nome/', description: 'Cria uma nova pasta com o nome informado.' },
        { command: 'touch arq.txt', description: 'Cria um arquivo vazio ou atualiza timestamp.' },
        { command: 'cp a.txt b.txt', description: 'Copia um arquivo para outro local ou nome.' },
        { command: 'mv a.txt b.txt', description: 'Move ou renomeia um arquivo.' },
        { command: 'rm a.txt', description: 'Remove um arquivo (cuidado: irreversivel).' },
        { command: 'rm -r pasta/', description: 'Remove a pasta e todo o seu conteudo (cuidado!).' },
      ],
    },
    {
      title: 'Pacotes e programas (APT)',
      paragraphs: [
        'Para distribuicoes baseadas em Debian e Ubuntu, o APT e o gerenciador de pacotes.',
      ],
      commands: [
        { command: 'sudo apt update', description: 'Atualiza a lista local de pacotes disponiveis.' },
        { command: 'sudo apt upgrade', description: 'Atualiza todos os pacotes ja instalados.' },
        { command: 'sudo apt install nome', description: 'Instala um novo pacote pelo nome.' },
        { command: 'sudo apt remove nome', description: 'Remove um pacote instalado.' },
        { command: 'sudo apt purge nome', description: 'Remove pacote + configuracoes associadas.' },
        { command: 'sudo apt autoremove', description: 'Remove dependencias nao mais utilizadas.' },
        { command: 'sudo dpkg -i arq.deb', description: 'Instala manualmente um arquivo .deb local.' },
        { command: 'sudo apt install ./arq.deb', description: 'Instala .deb resolvendo dependencias automaticamente.' },
      ],
    },
    {
      title: 'Busca e leitura de arquivos',
      paragraphs: ['Ferramentas para inspecionar e buscar em arquivos sem editor grafico.'],
      commands: [
        { command: 'cat arq.txt', description: 'Mostra o conteudo completo do arquivo no terminal.' },
        { command: 'less arq.txt', description: 'Visualiza arquivo com paginacao e scroll.' },
        { command: 'head arq.txt', description: 'Mostra as 10 primeiras linhas do arquivo.' },
        { command: 'tail arq.txt', description: 'Mostra as 10 ultimas linhas do arquivo.' },
        { command: 'grep palavra arq', description: 'Busca linhas que contem a palavra no arquivo.' },
        { command: 'find . -name "*.txt"', description: 'Encontra arquivos que combinam com o padrao de nome.' },
      ],
    },
    {
      title: 'Sistema e processos',
      paragraphs: ['Comandos para monitorar recursos, processos em execucao e saude do sistema.'],
      commands: [
        { command: 'top', description: 'Mostra processos em tempo real e consumo de CPU/RAM.' },
        { command: 'htop', description: 'Versao mais visual e interativa do top (requer instalacao).' },
        { command: 'ps aux', description: 'Lista todos os processos em execucao com detalhes.' },
        { command: 'kill PID', description: 'Encerra um processo especifico pelo seu identificador.' },
        { command: 'xkill', description: 'Ativa modo para fechar janela travada com clique.' },
        { command: 'df -h', description: 'Mostra uso de disco em formato legivel (GB, MB, etc).' },
        { command: 'du -sh pasta/', description: 'Mostra tamanho total de uma pasta.' },
        { command: 'free -h', description: 'Exibe uso e disponibilidade de memoria RAM.' },
        { command: 'uname -a', description: 'Mostra informacoes do sistema operacional e kernel.' },
        { command: 'uptime', description: 'Exibe tempo que o sistema esta ligado e carga media.' },
        { command: 'whoami', description: 'Mostra o nome de usuario atualmente logado.' },
      ],
    },
    {
      title: 'Permissoes e sudo',
      paragraphs: ['Controle de acesso, privilegios e permissoes de arquivos.'],
      commands: [
        { command: 'sudo comando', description: 'Executa um comando com privilegios de superusuario.' },
        { command: 'chmod +x arq.sh', description: 'Torna um script executavel adicionando permissao de execucao.' },
        { command: 'chown user:grupo arq', description: 'Altera o dono e grupo de um arquivo.' },
      ],
    },
    {
      title: 'Extras uteis para produtividade',
      paragraphs: ['Atalhos e truques que acceleram o trabalho diario no terminal.'],
      commands: [
        { command: 'history', description: 'Mostra historico de comandos ja digitados.' },
        { command: 'clear', description: 'Limpa a tela do terminal.' },
        { command: "alias gs='git status'", description: 'Cria um atalho personalizado para comando frequente.' },
        { command: 'nano arq.txt', description: 'Abre um editor de texto simples diretamente no terminal.' },
      ],
    },
  ],
  conclusion: [
    'Com esse conjunto, você cobre a maior parte das tarefas básicas e intermediárias no Linux.',
    'Comandos de remocao e permissoes merecem atencao extra para evitar alteracoes irreversiveis.',
  ],
  references: [
    {
      label: 'GNU Coreutils manual',
      href: 'https://www.gnu.org/software/coreutils/manual/coreutils.html',
    },
    {
      label: 'Debian APT User Guide',
      href: 'https://www.debian.org/doc/manuals/apt-guide/',
    },
    {
      label: 'Ubuntu package management documentation',
      href: 'https://help.ubuntu.com/community/AptGet/Howto',
    },
  ],
};
