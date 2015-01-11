/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR =
{
   "CT_MASK1":"Arquivos Torrent||*.torrent||Todos arquivos (*.*)||*.*||",
   "DLG_BTN_OK":"OK",
   "DLG_BTN_CANCEL":"Cancelar",
   "DLG_BTN_APPLY":"Aplicar",
   "DLG_BTN_YES":"Sim",
   "DLG_BTN_NO":"Não",
   "DLG_BTN_CLOSE":"Fechar",
   "DLG_SETTINGS_00":"Preferências",
   "DLG_SETTINGS_1_GENERAL_01":"Idioma",
   "DLG_SETTINGS_1_GENERAL_02":"Idioma:",
   "DLG_SETTINGS_1_GENERAL_10":"Privacidade",
   "DLG_SETTINGS_1_GENERAL_11":"Verificar atualizações automaticamente",
   "DLG_SETTINGS_1_GENERAL_12":"Atualizar para versões betas",
   "DLG_SETTINGS_1_GENERAL_13":"Enviar informações anômimas quando verificar atualizações",
   "DLG_SETTINGS_1_GENERAL_17":"Baixando",
   "DLG_SETTINGS_1_GENERAL_18":"Adicionar .!ut aos arq. incompletos",
   "DLG_SETTINGS_1_GENERAL_19":"Pré-alocar todos arquivos",
   "DLG_SETTINGS_1_GENERAL_20":"Previnir modo standby se houver torrents ativos",
   "DLG_SETTINGS_2_UI_01":"Opções de Exibição",
   "DLG_SETTINGS_2_UI_02":"Confirmar ao excluir torrents",
   "DLG_SETTINGS_2_UI_03":"Confirmar ao excluir rastreadores",
   "DLG_SETTINGS_2_UI_04":"Pedir confirmação ao sair",
   "DLG_SETTINGS_2_UI_05":"Alternar cor de fundo na lista",
   "DLG_SETTINGS_2_UI_06":"Mostrar velocidade na barra título",
   "DLG_SETTINGS_2_UI_07":"Exibir lim. de veloc. na barra de status",
   "DLG_SETTINGS_2_UI_15":"Enquanto adiciona torrents",
   "DLG_SETTINGS_2_UI_16":"Não iniciar o download automaticamente",
   "DLG_SETTINGS_2_UI_17":"Ativar a janela do programa",
   "DLG_SETTINGS_2_UI_18":"Mostrar janela que apresenta os arquivos dentro do torrent",
   "DLG_SETTINGS_2_UI_19":"Ações para Clique Duplo",
   "DLG_SETTINGS_2_UI_20":"Em torrents sendo enviados:",
   "DLG_SETTINGS_2_UI_22":"Em torrents sendo baixados:",
   "DLG_SETTINGS_3_PATHS_01":"Localização dos Arquivos Baixados",
   "DLG_SETTINGS_3_PATHS_02":"Novos downloads em:",
   "DLG_SETTINGS_3_PATHS_03":"Exibir diálogo ao adicionar torrent",
   "DLG_SETTINGS_3_PATHS_06":"Mover downloads completos para:",
   "DLG_SETTINGS_3_PATHS_07":"Acrescentar a categoria do torrent",
   "DLG_SETTINGS_3_PATHS_10":"Somente mover do diretório padrão de downloads",
   "DLG_SETTINGS_3_PATHS_11":"Localização de .torrents",
   "DLG_SETTINGS_3_PATHS_12":"Armazenar .torrent em:",
   "DLG_SETTINGS_3_PATHS_15":"Mover .torrents finalizados para:",
   "DLG_SETTINGS_3_PATHS_18":"Abrir .torrents automat. da pasta:",
   "DLG_SETTINGS_3_PATHS_19":"Excluir torrent carregados",
   "DLG_SETTINGS_4_CONN_01":"Modo de Escuta na Porta",
   "DLG_SETTINGS_4_CONN_02":"Porta usada para conexões de entrada:",
   "DLG_SETTINGS_4_CONN_04":"Porta Aleatória",
   "DLG_SETTINGS_4_CONN_05":"Alternar porta a cada início",
   "DLG_SETTINGS_4_CONN_06":"Habilitar mapeamento UPnP",
   "DLG_SETTINGS_4_CONN_07":"Habilitar mapeamento NAT-PMP",
   "DLG_SETTINGS_4_CONN_08":"Servidor Proxy",
   "DLG_SETTINGS_4_CONN_09":"Tipo:",
   "DLG_SETTINGS_4_CONN_11":"Proxy:",
   "DLG_SETTINGS_4_CONN_13":"Porta:",
   "DLG_SETTINGS_4_CONN_15":"Autenticação",
   "DLG_SETTINGS_4_CONN_16":"Usuário:",
   "DLG_SETTINGS_4_CONN_18":"Senha:",
   "DLG_SETTINGS_4_CONN_19":"Resolver hostname através de proxy",
   "DLG_SETTINGS_4_CONN_20":"Use servidor proxy para conexões ponto-a-ponto",
   "DLG_SETTINGS_4_CONN_21":"Adicionar às exceções do Firewall do Windows",
   "DLG_SETTINGS_4_CONN_22":"Privacidade de Proxy",
   "DLG_SETTINGS_4_CONN_23":"Desativar pesquisa de DNS local",
   "DLG_SETTINGS_4_CONN_24":"Desativar recursos que enviam informações de identificação",
   "DLG_SETTINGS_4_CONN_25":"Desativar conexões não suportadas pelo proxy",
   "DLG_SETTINGS_5_BANDWIDTH_01":"Limite da Taxa de Upload Global",
   "DLG_SETTINGS_5_BANDWIDTH_02":"Taxa de upload Máx. (kB/s): [0: ilimitada]",
   "DLG_SETTINGS_5_BANDWIDTH_03":"Automático",
   "DLG_SETTINGS_5_BANDWIDTH_05":"Taxa de upload quando não houver downloads (kB/s):",
   "DLG_SETTINGS_5_BANDWIDTH_07":"Limite da Taxa de Download Global",
   "DLG_SETTINGS_5_BANDWIDTH_08":"Taxa de Download Máx. (kB/s): [0: ilimitada]",
   "DLG_SETTINGS_5_BANDWIDTH_10":"Número de Conexões",
   "DLG_SETTINGS_5_BANDWIDTH_11":"Número máximo de conexões:",
   "DLG_SETTINGS_5_BANDWIDTH_14":"Número máximo de peers conectados por torrent:",
   "DLG_SETTINGS_5_BANDWIDTH_15":"Número de slots para upload por torrent:",
   "DLG_SETTINGS_5_BANDWIDTH_17":"Usar slots adicionais se a velocidade de upload for < 90%",
   "DLG_SETTINGS_5_BANDWIDTH_18":"Opções de Limites Globais",
   "DLG_SETTINGS_5_BANDWIDTH_19":"Aplicar limite para transporte excedente",
   "DLG_SETTINGS_5_BANDWIDTH_20":"Aplicar limite para conexões uTP",
   "DLG_SETTINGS_6_BITTORRENT_01":"Recursos Básicos do BitTorrent",
   "DLG_SETTINGS_6_BITTORRENT_02":"Habilitar Rede DHT",
   "DLG_SETTINGS_6_BITTORRENT_03":"Obter do rastr. qualidade do torrent",
   "DLG_SETTINGS_6_BITTORRENT_04":"Ativar DHT para novos torrents",
   "DLG_SETTINGS_6_BITTORRENT_05":"Habilitar Troca de Peers",
   "DLG_SETTINGS_6_BITTORRENT_06":"Habilitar Descoberta Local de Peers",
   "DLG_SETTINGS_6_BITTORRENT_07":"Limitar banda de peer local",
   "DLG_SETTINGS_6_BITTORRENT_08":"IP/Hostname a relatar p/ rastreador:",
   "DLG_SETTINGS_6_BITTORRENT_10":"Encriptação de Protocolo",
   "DLG_SETTINGS_6_BITTORRENT_11":"Saída:",
   "DLG_SETTINGS_6_BITTORRENT_13":"Permitir conexões não criptografadas",
   "DLG_SETTINGS_6_BITTORRENT_14":"Habilitar controle de banda [uTP]",
   "DLG_SETTINGS_6_BITTORRENT_15":"Habilitar suporte a rastreador UDP",
   "DLG_SETTINGS_7_TRANSFERCAP_01":"Habilitar Cap de Transferência",
   "DLG_SETTINGS_7_TRANSFERCAP_02":"Configurações Cap",
   "DLG_SETTINGS_7_TRANSFERCAP_03":"Tipo de Limite:",
   "DLG_SETTINGS_7_TRANSFERCAP_04":"Banda Cap:",
   "DLG_SETTINGS_7_TRANSFERCAP_05":"Período (dias):",
   "DLG_SETTINGS_7_TRANSFERCAP_06":"Histórico de uso pelo período selecionado:",
   "DLG_SETTINGS_7_TRANSFERCAP_07":"Enviado:",
   "DLG_SETTINGS_7_TRANSFERCAP_08":"Baixado:",
   "DLG_SETTINGS_7_TRANSFERCAP_09":"Enviado + Baixado",
   "DLG_SETTINGS_7_TRANSFERCAP_10":"Período:",
   "DLG_SETTINGS_7_TRANSFERCAP_11":"Últimos %d dias",
   "DLG_SETTINGS_7_TRANSFERCAP_12":"Limpar Histórico",
   "DLG_SETTINGS_8_QUEUEING_01":"Configurações da Fila",
   "DLG_SETTINGS_8_QUEUEING_02":"Número máximo de torrents ativos (upload ou download):",
   "DLG_SETTINGS_8_QUEUEING_04":"Número máximo de downloads ativos:",
   "DLG_SETTINGS_8_QUEUEING_06":"Enviar Enquanto [Valores padrão]",
   "DLG_SETTINGS_8_QUEUEING_07":"Ratio mínimo (%):",
   "DLG_SETTINGS_8_QUEUEING_09":"Tempo mínimo de envio (minutos):",
   "DLG_SETTINGS_8_QUEUEING_11":"Tarefas de upload têm maior prioridade do que as de download",
   "DLG_SETTINGS_8_QUEUEING_12":"Quando o Torrent alcançar seu objetivo de envio",
   "DLG_SETTINGS_8_QUEUEING_13":"Limitar taxa de upload para: [0: parar]",
   "DLG_SETTINGS_9_SCHEDULER_01":"Ativar Agendador",
   "DLG_SETTINGS_9_SCHEDULER_02":"Tabela do Agendador",
   "DLG_SETTINGS_9_SCHEDULER_04":"Configurações do Agendador",
   "DLG_SETTINGS_9_SCHEDULER_05":"Limitar taxa de upload (kB/s):",
   "DLG_SETTINGS_9_SCHEDULER_07":"Limitar taxa de download (kB/s):",
   "DLG_SETTINGS_9_SCHEDULER_09":"Desativar DHT ao desligar",
   "DLG_SETTINGS_9_WEBUI_01":"Habilitar Web UI",
   "DLG_SETTINGS_9_WEBUI_02":"Autenticação",
   "DLG_SETTINGS_9_WEBUI_03":"Usuário:",
   "DLG_SETTINGS_9_WEBUI_05":"Senha:",
   "DLG_SETTINGS_9_WEBUI_07":"Habilitar conta Visitante com o nome:",
   "DLG_SETTINGS_9_WEBUI_09":"Conectividade",
   "DLG_SETTINGS_9_WEBUI_10":"Porta alternativa de escuta (padrão é porta de conexão):",
   "DLG_SETTINGS_9_WEBUI_12":"Permite acesso apenas a partir desses IPs (separe as entradas com uma vírgula)",
   "DLG_SETTINGS_A_ADVANCED_01":"Opções Avançadas [CUIDADO: Não modifique!]",
   "DLG_SETTINGS_A_ADVANCED_02":"Valor:",
   "DLG_SETTINGS_A_ADVANCED_03":"Verdadeiro",
   "DLG_SETTINGS_A_ADVANCED_04":"Falso",
   "DLG_SETTINGS_A_ADVANCED_05":"Ajustar",
   "DLG_SETTINGS_B_ADV_UI_01":"Lista de Velocidades [Separar valores por vírgula]",
   "DLG_SETTINGS_B_ADV_UI_02":"Ignorar lista de velocidade automática",
   "DLG_SETTINGS_B_ADV_UI_03":"Veloc. de Upload:",
   "DLG_SETTINGS_B_ADV_UI_05":"Veloc. de Download:",
   "DLG_SETTINGS_B_ADV_UI_07":"Categorias Fixas [Separe múltiplas entradas com \"|\"]",
   "DLG_SETTINGS_B_ADV_UI_08":"Mecanismos de Pesquisa [Formato: nome|URL]",
   "DLG_SETTINGS_C_ADV_CACHE_01":"Configurações Básicas de Cache",
   "DLG_SETTINGS_C_ADV_CACHE_02":"O cache em disco é usado para manter os dados mais acessados na memória, reduzindo o uso do disco rígido. O µTorrent gerencia o cache automaticamente, mas você pode mudar seu comportamento modificando estas configurações.",
   "DLG_SETTINGS_C_ADV_CACHE_03":"Definir tamanho do cache manualmente (MB):",
   "DLG_SETTINGS_C_ADV_CACHE_05":"Reduzir uso de memória quando o cache não for usado",
   "DLG_SETTINGS_C_ADV_CACHE_06":"Configurações Avançadas de Cache",
   "DLG_SETTINGS_C_ADV_CACHE_07":"Habilitar cache de escrita",
   "DLG_SETTINGS_C_ADV_CACHE_08":"Gravar cache de blocos não modificados a cada 2 minutos",
   "DLG_SETTINGS_C_ADV_CACHE_09":"Gravar cache de partes finalizadas imediatamente",
   "DLG_SETTINGS_C_ADV_CACHE_10":"Habilitar cache de leitura",
   "DLG_SETTINGS_C_ADV_CACHE_11":"Desligar leitura se a velocidade de upload for baixa",
   "DLG_SETTINGS_C_ADV_CACHE_12":"Remover blocos antigos do cache",
   "DLG_SETTINGS_C_ADV_CACHE_13":"Aumentar automat. tam. do cache a cada cache thrashing",
   "DLG_SETTINGS_C_ADV_CACHE_14":"Desabilitar cache de escrita",
   "DLG_SETTINGS_C_ADV_CACHE_15":"Desabilitar cache de leitura",
   "DLG_SETTINGS_C_ADV_RUN_01":"Executar Programa",
   "DLG_SETTINGS_C_ADV_RUN_02":"Executar este programa quando o torrent finalizar:",
   "DLG_SETTINGS_C_ADV_RUN_04":"Executar este programa quando o torrent mudar de status:",
   "DLG_SETTINGS_C_ADV_RUN_06":"Você pode usar estes comandos:\r\n%F - Nome do arquivo baixado (para torrents com um único arquivo)\r\n%D - Diretório onde os arquivo são salvos\r\n%N - Título do torrent\r\n%S - Status do torrent\r\n%L - Categoria\r\n%T - Rastreador\r\n%M - Mensagem de status (mesma da coluna status)\r\n%I - Info-hash em hex\r\n\r\nstatus é uma combinação de: iniciado =1, verificando = 2, inicio-depois-de-verificação = 4,\r\nverificado = 8, erro = 16, pausado = 32, auto = 64, carregado = 128",
   "DLG_TORRENTPROP_00":"Propriedade do Torrent",
   "DLG_TORRENTPROP_1_GEN_01":"Rastreadores (separar com linhas em branco)",
   "DLG_TORRENTPROP_1_GEN_03":"Configurações do Controle Banda",
   "DLG_TORRENTPROP_1_GEN_04":"Maximum upload rate (kB/s): [0: default]",
   "DLG_TORRENTPROP_1_GEN_06":"Tava máxima de download (kB/s): [0: padrão]",
   "DLG_TORRENTPROP_1_GEN_08":"Número de slots para upload: [0: padrão]",
   "DLG_TORRENTPROP_1_GEN_10":"Enviar Enquanto",
   "DLG_TORRENTPROP_1_GEN_11":"Não utilizar opções padrão",
   "DLG_TORRENTPROP_1_GEN_12":"Ratio mínimo (%):",
   "DLG_TORRENTPROP_1_GEN_14":"Tempo mínimo de envio (minutos):",
   "DLG_TORRENTPROP_1_GEN_16":"Outras Configurações",
   "DLG_TORRENTPROP_1_GEN_17":"Envio inicial",
   "DLG_TORRENTPROP_1_GEN_18":"Ativar DHT",
   "DLG_TORRENTPROP_1_GEN_19":"Troca de Peers",
   "DLG_ADDEDITRSSFEED_03":"Feed",
   "DLG_ADDEDITRSSFEED_04":"URL do Feed:",
   "DLG_ADDEDITRSSFEED_05":"Descrição Personalizada:",
   "DLG_ADDEDITRSSFEED_06":"Assinatura",
   "DLG_ADDEDITRSSFEED_07":"Não baixar automaticamente todos itens",
   "DLG_ADDEDITRSSFEED_08":"Baixar automaticamente todos itens publicados no feed",
   "DLG_ADDEDITRSSFEED_09":"Usar filtro inteligente de epsódio",
   "DLG_RSSDOWNLOADER_02":"Feeds||Favoritos||Histórico||",
   "DLG_RSSDOWNLOADER_03":"All Feeds",
   "DLG_RSSDOWNLOADER_04":"Configurações de Filtro",
   "DLG_RSSDOWNLOADER_05":"Nome:",
   "DLG_RSSDOWNLOADER_06":"Filtro:",
   "DLG_RSSDOWNLOADER_07":"Não:",
   "DLG_RSSDOWNLOADER_08":"Salvar em:",
   "DLG_RSSDOWNLOADER_09":"Feed:",
   "DLG_RSSDOWNLOADER_10":"Qualidade:",
   "DLG_RSSDOWNLOADER_11":"Número do Episódio: [ex. 1x12-14]",
   "DLG_RSSDOWNLOADER_12":"Filtrar por nome original ao invés do nome decodificado",
   "DLG_RSSDOWNLOADER_13":"Não iniciar downloads automaticamente",
   "DLG_RSSDOWNLOADER_14":"Filtro ep. inteligente",
   "DLG_RSSDOWNLOADER_15":"Dar ao download prioridade máxima",
   "DLG_RSSDOWNLOADER_16":"Intervalo mínimo:",
   "DLG_RSSDOWNLOADER_17":"Categ. para novos torrents:",
   "DLG_RSSDOWNLOADER_18":"Adicionar Feed RSS...",
   "DLG_RSSDOWNLOADER_19":"Editar Feed",
   "DLG_RSSDOWNLOADER_20":"Desabilitar Feed",
   "DLG_RSSDOWNLOADER_21":"Habilitar Feed",
   "DLG_RSSDOWNLOADER_22":"Atualizar Feed",
   "DLG_RSSDOWNLOADER_23":"Excluir Feed",
   "DLG_RSSDOWNLOADER_24":"Download",
   "DLG_RSSDOWNLOADER_25":"Abrir URL no Navegador",
   "DLG_RSSDOWNLOADER_26":"Adicionar a Favoritos",
   "DLG_RSSDOWNLOADER_27":"Adicionar",
   "DLG_RSSDOWNLOADER_28":"Exluir",
   "DLG_RSSDOWNLOADER_29":"TODOS",
   "DLG_RSSDOWNLOADER_30":"(Todos)",
   "DLG_RSSDOWNLOADER_31":"(sempre)||(uma vez)||12 horas||1 dia||2 dias||3 dias||4 dias||1 semana||2 semenas||3 semanas||1 mês||",
   "DLG_RSSDOWNLOADER_32":"Adicionar Feed RSS",
   "DLG_RSSDOWNLOADER_33":"Editar Feed RSS",
   "DLG_RSSDOWNLOADER_34":"Remove RSS Feed(s)",
   "DLG_RSSDOWNLOADER_35":"Really delete the %d selected RSS Feeds?",
   "DLG_RSSDOWNLOADER_36":"Deseja realmente excluir o Alimentador RSS \"%s\"?",
   "FEED_COL_FULLNAME":"Nome Completo",
   "FEED_COL_NAME":"Nome",
   "FEED_COL_EPISODE":"Episódio",
   "FEED_COL_FORMAT":"Formato",
   "FEED_COL_CODEC":"Codec",
   "FEED_COL_DATE":"Data",
   "FEED_COL_FEED":"Feed",
   "FEED_COL_URL":"URL Fonte",
   "PRS_COL_IP":"IP",
   "PRS_COL_PORT":"Porta",
   "PRS_COL_CLIENT":"Cliente",
   "PRS_COL_FLAGS":"Flags",
   "PRS_COL_PCNT":"%",
   "PRS_COL_RELEVANCE":"Relevância",
   "PRS_COL_DOWNSPEED":"Veloc. Down.",
   "PRS_COL_UPSPEED":"Veloc. Up",
   "PRS_COL_REQS":"Requisições",
   "PRS_COL_WAITED":"Esperado",
   "PRS_COL_UPLOADED":"Enviado",
   "PRS_COL_DOWNLOADED":"Baixado",
   "PRS_COL_HASHERR":"Hasherr",
   "PRS_COL_PEERDL":"Dl. Peer",
   "PRS_COL_MAXUP":"Up Máx.",
   "PRS_COL_MAXDOWN":"Down Máx.",
   "PRS_COL_QUEUED":"Na Fila",
   "PRS_COL_INACTIVE":"Inativo",
   "FI_COL_DONE":"Concluído",
   "FI_COL_FIRSTPC":"Primeira Parte",
   "FI_COL_NAME":"Nome",
   "FI_COL_NUMPCS":"N. Partes",
   "FI_COL_PCNT":"%",
   "FI_COL_PRIO":"Prioridade",
   "FI_COL_SIZE":"Tamanho",
   "FI_PRI0":"ignorar",
   "FI_PRI1":"baixa",
   "FI_PRI2":"normal",
   "FI_PRI3":"alta",
   "GN_TP_01":"Baixado:",
   "GN_TP_02":"Enviado:",
   "GN_TP_03":"Seeds:",
   "GN_TP_04":"Restando:",
   "GN_TP_05":"Vel. de Download:",
   "GN_TP_06":"Vel. de Upload:",
   "GN_TP_07":"Peers:",
   "GN_TP_08":"Ratio:",
   "GN_TP_09":"Salvar Como:",
   "GN_TP_10":"Hash:",
   "GN_GENERAL":"Geral",
   "GN_TRANSFER":"Transferência",
   "GN_XCONN":"%d de %d conectados (%d na multidão)",
   "MAIN_TITLEBAR_SPEED":"D:%s U:%s - %s",
   "MENU_COPY":"Copiar",
   "MENU_RESET":"Restaurar",
   "MENU_UNLIMITED":"Ilimitado",
   "MP_RESOLVE_IPS":"Resolver IPs",
   "MF_GETFILE":"Get File(s)",
   "MF_DONT":"Não baixar",
   "MF_HIGH":"Prioridade Alta",
   "MF_LOW":"Prioride Baixa",
   "MF_NORMAL":"Prioridade Normal",
   "ML_COPY_MAGNETURI":"Copiar Magnet URI",
   "ML_DELETE_DATA":"Excluir Dados",
   "ML_DELETE_TORRENT":"Excluir .torrent",
   "ML_DELETE_DATATORRENT":"Excluir .torrent + Dados",
   "ML_FORCE_RECHECK":"Forçar Re-checagem",
   "ML_FORCE_START":"Forçar Ínicio",
   "ML_LABEL":"Categoria",
   "ML_PAUSE":"Pausar",
   "ML_PROPERTIES":"Propriedades",
   "ML_QUEUEDOWN":"Descer na Fila",
   "ML_QUEUEUP":"Subir na Fila",
   "ML_REMOVE":"Remover",
   "ML_REMOVE_AND":"Remover e",
   "ML_START":"Iniciar",
   "ML_STOP":"Parar",
   "OV_CAT_ACTIVE":"Ativo",
   "OV_CAT_ALL":"Todos",
   "OV_CAT_COMPL":"Concluído",
   "OV_CAT_DL":"Baixando",
   "OV_CAT_INACTIVE":"Invativo",
   "OV_CAT_NOLABEL":"Sem categoria",
   "OV_COL_AVAIL":"||Disp.||Disponibilidade",
   "OV_COL_DATE_ADDED":"Adicionado",
   "OV_COL_DATE_COMPLETED":"Completed On",
   "OV_COL_DONE":"Concluído",
   "OV_COL_DOWNLOADED":"Baixado",
   "OV_COL_DOWNSPD":"Veloc. Down",
   "OV_COL_ETA":"TED",
   "OV_COL_LABEL":"Categoria",
   "OV_COL_NAME":"Nome",
   "OV_COL_ORDER":"N.",
   "OV_COL_PEERS":"Peers",
   "OV_COL_REMAINING":"Restando",
   "OV_COL_SEEDS":"Seeds",
   "OV_COL_SEEDS_PEERS":"Seeds/Peers",
   "OV_COL_SHARED":"Ratio",
   "OV_COL_SIZE":"Tamanho",
   "OV_COL_SOURCE_URL":"URL Fonte",
   "OV_COL_STATUS":"Status",
   "OV_COL_UPPED":"Enviado",
   "OV_COL_UPSPD":"Veloc. Up",
   "OV_CONFIRM_DELETEDATA_MULTIPLE":"Tem certeza que deseja excluir os %d torrents selecionados e todos os seus dados?",
   "OV_CONFIRM_DELETEDATA_ONE":"Tem certeza que deseja excluir o torrent selecionado e todos os seus dados?",
   "OV_CONFIRM_DELETE_MULTIPLE":"Tem certeza que deseja excluir os %d torrents selecionados?",
   "OV_CONFIRM_DELETE_ONE":"Tem certeza que deseja excluir o torrent selecionado?",
   "OV_CONFIRM_DELETE_RSSFILTER":"Confirma exclusão do filtro Rss \"%s\"?",
   "OV_FL_CHECKED":"Verificado %:.1d%",
   "OV_FL_DOWNLOADING":"Baixando",
   "OV_FL_ERROR":"Erro: %s",
   "OV_FL_FINISHED":"Finalizado",
   "OV_FL_PAUSED":"Pausado",
   "OV_FL_QUEUED":"Na Fila",
   "OV_FL_QUEUED_SEED":"Envios na Fila",
   "OV_FL_SEEDING":"Enviando",
   "OV_FL_STOPPED":"Parado",
   "OV_NEWLABEL_CAPTION":"Informe a categoria",
   "OV_NEWLABEL_TEXT":"Informe a nova categoria para os torrents selecionados:",
   "OV_NEW_LABEL":"Nova Categoria...",
   "OV_REMOVE_LABEL":"Remover categoria",
   "OV_TABS":"Geral||Rastreadores||Peers||Partes||Arquivos||Velocidade||Registros||",
   "OV_TB_ADDTORR":"Adicionar Torrent",
   "OV_TB_ADDURL":"Adicionar torrent da URL",
   "OV_TB_PAUSE":"Pausar",
   "OV_TB_PREF":"Preferências",
   "OV_TB_QUEUEDOWN":"Descer na Fila",
   "OV_TB_QUEUEUP":"Subir na File",
   "OV_TB_REMOVE":"Excluir",
   "OV_TB_RSSDOWNLDR":"Leitor de RSS",
   "OV_TB_START":"Iniciar",
   "OV_TB_STOP":"Parar",
   "MM_FILE":"Arquivo",
   "MM_FILE_ADD_TORRENT":"Adicionar Torrent...",
   "MM_FILE_ADD_URL":"Adicionar Torrent da URL",
   "MM_OPTIONS":"Opções",
   "MM_OPTIONS_PREFERENCES":"Preferências",
   "MM_OPTIONS_SHOW_CATEGORY":"Exibir Lista de Categorias",
   "MM_OPTIONS_SHOW_DETAIL":"Exibir Informações Detalhadas",
   "MM_OPTIONS_SHOW_STATUS":"Exibir Barra de Status",
   "MM_OPTIONS_SHOW_TOOLBAR":"Exibir Barra de Ferramentas",
   "MM_OPTIONS_TAB_ICONS":"Ícones nas Abas",
   "MM_HELP":"Ajuda",
   "MM_HELP_UT_WEBPAGE":"Site do µTorrent",
   "MM_HELP_UT_FORUMS":"Fóruns µTorrent",
   "MM_HELP_WEBUI_FEEDBACK":"Send WebUI Feedback",
   "MM_HELP_ABOUT_WEBUI":"About µTorrent WebUI",
   "STM_TORRENTS":"Torrents",
   "STM_TORRENTS_PAUSEALL":"Pausar todos os torrents",
   "STM_TORRENTS_RESUMEALL":"Reiniciar todos os torrents",
   "SB_DOWNLOAD":"D: %s%z/s",
   "SB_LOCAL":" L: %z/s",
   "SB_OVERHEAD":" O: %z/s",
   "SB_TOTAL":" T: %Z",
   "SB_UPLOAD":"U: %s%z/s",
   "SIZE_B":"B",
   "SIZE_EB":"EB",
   "SIZE_GB":"GB",
   "SIZE_KB":"kB",
   "SIZE_MB":"MB",
   "SIZE_PB":"PB",
   "SIZE_TB":"TB",
   "ST_CAPT_ADVANCED":"Avançado",
   "ST_CAPT_BANDWIDTH":"Controle de Banda",
   "ST_CAPT_CONNECTION":"Conexão",
   "ST_CAPT_DISK_CACHE":"Cache de disco",
   "ST_CAPT_FOLDER":"Diretórios",
   "ST_CAPT_GENERAL":"Geral",
   "ST_CAPT_SCHEDULER":"Agendador",
   "ST_CAPT_QUEUEING":"Fila",
   "ST_CAPT_UI_EXTRAS":"Extras UI",
   "ST_CAPT_UI_SETTINGS":"Interface UI",
   "ST_CAPT_BITTORRENT":"BitTorrent",
   "ST_CAPT_WEBUI":"Web UI",
   "ST_CAPT_TRANSFER_CAP":"Cap de Transferência",
   "ST_CAPT_RUN_PROGRAM":"Executar Programa",
   "ST_CBO_UI_DBLCLK_TOR":"Mostrar propriedades||Iniciar/Parar||Abrir pasta||Mostrar barra de download||",
   "ST_CBO_ENCRYPTIONS":"Desativado||Ativado||Forçado||",
   "ST_CBO_PROXY":"(nenhum)||Socks4||Socks5||HTTPS||HTTP||",
   "ST_CBO_TCAP_MODES":"Uploads||Downloads||Uploads + Downloads||",
   "ST_CBO_TCAP_UNITS":"MB||GB||",
   "ST_CBO_TCAP_PERIODS":"1||2||5||7||10||14||15||20||21||28||30||31||",
   "ST_COL_NAME":"Nome",
   "ST_COL_VALUE":"Valor",
   "ST_SCH_DAYCODES":"Seg||Ter||Qua||Qui||Sex||Sab||Dom||",
   "ST_SCH_DAYNAMES":"Segunda-feira||Terça-feira||Quarta-feira||Quinta-feira||Sexta-feira||Sábado||Domingo||",
   "ST_SCH_LGND_FULL":"Total",
   "ST_SCH_LGND_FULLEX":"Velocidade máxima - Usa limite de banda global normal",
   "ST_SCH_LGND_LIMITED":"Limitada",
   "ST_SCH_LGND_LIMITEDEX":"Limitado - Usa opções agendadas de limite de banda",
   "ST_SCH_LGND_SEEDING":"Somente envio",
   "ST_SCH_LGND_SEEDINGEX":"Somente envio - Somente dados de uplodas (incluindo incompletos)",
   "ST_SCH_LGND_OFF":"Desligar",
   "ST_SCH_LGND_OFFEX":"Desligar - Para todos torrents que não são forçados",
   "ST_SEEDTIMES_HOURS":"<= %d horas",
   "ST_SEEDTIMES_IGNORE":"(Ignorar)",
   "ST_SEEDTIMES_MINUTES":"<= %d minutos",
   "TIME_DAYS_HOURS":"%dd %dh",
   "TIME_HOURS_MINS":"%dh %dm",
   "TIME_MINS_SECS":"%dm %ds",
   "TIME_SECS":"%ds",
   "TIME_WEEKS_DAYS":"%ds %dd",
   "TIME_YEARS_WEEKS":"%da %ds",
   "ML_MORE_ACTIONS":"Mais ações",
   "Torrents":"Torrents",
   "Feeds":"Feeds",
   "App":"Aplicativo",
   "country":"país",
   "ETA":"tempo ETA",
   "of":"de",
   "/s":"/s",
   "Paste a torrent or feed URL":"Cole uma URL de torrent ou feed",
   "Home":"Página Inicial",
   "Logout":"Logoff",
   "Seeding":"Propagação",
   "All Feeds":"Todos os Feeds",
   "bitrate":"taxa de bits",
   "resolution":"resolução",
   "length":"comprimento",
   "streamable":"transmissível",
   "type":"tipo",
   "remote":"remoto",
   "about":"sobre",
   "sessions":"sessões",
   "share":"Compartilhar",
   "Share this torrent":"Compartilhar este torrent",
   "Share link":"Compartilhar link",
   "add":"adicionar",
   "logout":"Logoff",
   "log in":"fazer logon",
   "anywhere access":"acesso de qualquer lugar",
   "stay signed in":"permaneça conectado",
   "download":"download",
   "Your client is currently not available. Verify that it is connected to the internet.":"Atualmente seu cliente não está disponível. Verifique se está conectado à internet.",
   "Unable to communicate with your &micro;Torrent client. This message will disappear automatically when a connection is re-established.":"Impossível a comunicação com o seu cliente &micro;Torrent. Essa mensagem desaparecerá automaticamente quando a conexão for restabelecida.",
   "Open file":"Abra o arquivo",
   "Download to your computer":"Faça download para o seu computador",
   "Open with VLC Media Player":"Abra com o VLC Media Player",
   "Actions":"Ações",
   "season":"temporada",
   "DLG_ABOUT_VERSION_LEGEND":null,
   "DLG_ABOUT_VERSION_VERSION":null,
   "DLG_ABOUT_VERSION_REVISION":null,
   "DLG_ABOUT_VERSION_BUILD_DATE":null,
   "DLG_ABOUT_VERSION_PEER_ID":null,
   "DLG_ABOUT_VERSION_USER_AGENT":null,
   "DLG_ABOUT_UPNP_EXTERNAL_ADDRESS":null,
   "DLG_ABOUT_UI_REVISION":null,
   "DLG_SETTINGS_SAVE":"Salvar configurações",
   "DLG_SETTINGS_MENU_TITLE":null,
   "DLG_SETTINGS_D_REMOTE_01":"BitTorrent Remoto",
   "DLG_SETTINGS_D_REMOTE_02":"BitTorrent Remoto oferece uma maneira fácil e segura de acessar seu cliente através de um navegador.",
   "DLG_SETTINGS_D_REMOTE_03":"Apenas habilite a conexão abaixo, escolha um nome do computador e senha, e lembre-se de deixar o PC ligado.",
   "DLG_SETTINGS_D_REMOTE_04":"Saiba Mais",
   "DLG_SETTINGS_D_REMOTE_05":"Habilitar Acesso BitTorrent Remoto",
   "DLG_SETTINGS_D_REMOTE_06":"Autenticação",
   "DLG_SETTINGS_D_REMOTE_07":"Nome do Computador:",
   "DLG_SETTINGS_D_REMOTE_08":"Senha:",
   "DLG_SETTINGS_D_REMOTE_09":"Enviar",
   "ST_CAPT_REMOTE":"BitTorrent Remoto",
   "STATUS_REMOTE_01":"Acessível",
   "STATUS_REMOTE_02":"Conectando..",
   "STATUS_REMOTE_03":"Não acessível",
   "STATUS_REMOTE_04":"Registro falhou",
   "STATUS_REMOTE_05":"Você precisa digitar uma senha para usar o BitTorrent Remoto",
   "STATUS_REMOTE_06":"Não foi possível contactar o serviço BitTorrent Remoto para registrar",
   "STATUS_REMOTE_07":"Já existe um computador usando este usuário",
   "STATUS_REMOTE_08":"Nome de usuário não pode conter caracteres especiais ou centuados",
   "STATUS_REMOTE_09":"A senha não pode conter caracteres especiais ou centuados",
   "STATUS_REMOTE_10":"Status: "
}