// Catálogo inicial ampliado com modelos/linhas citados no site oficial.
// Não é uma cópia completa do estoque atual. Cadastre as fotos verdadeiras por cor.
// Para cadastrar foto: imagem: 'imagens/nome-do-arquivo.jpg'
const catalogo = [
 ['Adamant Master Class Pro','Campo'],['Adamant Top Speed Pro','Campo'],['Adamant Top Speed Pro Shark','Campo'],['Adamant Top Speed Pro STP','Campo'],['Velocita IX Club','Campo'],
 ['Adamant Master Class Pro Bump','Society'],['Adamant Master Class Pro Bump England','Society'],['Pro 5 Bump Club','Society'],['Pro Challenge Uptake','Society'],['Velocita IX Club','Society'],['X-Comfort','Society'],
 ['Adamant Master Class Pro Bump','Futsal'],['Pro 5 Bump','Futsal'],['Pro 5 Bump Club','Futsal'],['Pro 5 Stable','Futsal'],['Pro Challenge Uptake','Futsal'],['Sala V Pro','Futsal']
].map(([nome,tipo],i)=>({id:i,nome:`Umbro ${nome}`,tipo,cores:[{nome:'Foto pendente',hex:'#666666',imagem:''}],link:'https://www.umbro.com.br/todas-as-chuteiras'}));

// Exemplo de cadastro de cores reais após salvar as imagens na pasta imagens:
// catalogo[0].cores = [
//   {nome:'Preto',hex:'#171717',imagem:'imagens/adamant-master-class-pro-preto.jpg'},
//   {nome:'Roxo',hex:'#8955b8',imagem:'imagens/adamant-master-class-pro-roxo.jpg'}
// ];


// Fotos enviadas pelo proprietário da ZARTH SPORTS.
// Separadas por solado visível: campo (travas), society (travinhas) e futsal (sola lisa).
// Os nomes das cores são descrições visuais, não códigos oficiais da Umbro.
const fotosAdamant = {
  Campo: [
    ['Preto e laranja (travas metálicas)', '#252525', '489793'],
    ['Preto e laranja', '#eb6c2a', '490265'],
    ['Roxo e laranja (travas metálicas)', '#8545c6', '491536'],
    ['Roxo e laranja', '#ae6ee1', '491620'],
    ['Branco e azul (travas)', '#e6e9f4', '504284'],
    ['Branco e azul (travas metálicas)', '#9dbde1', '504304'],
    ['Verde-água e preto', '#9bdfc9', '507406'],
    ['Preto e rosa (travas metálicas)', '#31313c', '470847']
  ],
  Society: [
    ['Preto e vermelho', '#d52d35', '488270'],
    ['Preto e prata', '#8d8e95', '489869'],
    ['Azul e dourado', '#2859ac', '497997'],
    ['Rosa e preto', '#ee4589', '500561'],
    ['Preto e rosa', '#282832', '517934'],
    ['Amarelo e laranja', '#f3bd29', '519749'],
    ['Branco e azul', '#e5e9ed', '475624']
  ],
  Futsal: [
    ['Preto e prata', '#393943', '489887']
  ]
};
for (const p of catalogo) {
  if (!p.nome.includes('Adamant Master Class Pro')) continue;
  // Não atribuir automaticamente a variantes especiais como England.
  if (p.nome.includes('England')) continue;
  const fotos = fotosAdamant[p.tipo];
  if (fotos && (p.nome === 'Umbro Adamant Master Class Pro' || p.nome === 'Umbro Adamant Master Class Pro Bump')) {
    // Fotos agrupadas por modalidade, sem afirmar correspondência exata de SKU.
    p.cores = fotos.map(([nome,hex,id]) => ({nome,hex,imagem:`imagens/${id}.webp`}));
  }
}

// Foto original enviada pelo usuário: Adamant Master Class Pro Bump England (Society).
// O produto Campo com nome England foi retirado; esta é a única entrada England.
const englandBump = catalogo.find(p => p.nome === 'Umbro Adamant Master Class Pro Bump England' && p.tipo === 'Society');
if (englandBump) {
  englandBump.cores = [{nome:'Vermelho e branco (England)', hex:'#e64035', imagem:'imagens/adamant-england.webp'}];
}


// Fotos enviadas para Umbro Adamant Top Speed Pro (16 arquivos distintos).
// Descrições de cor baseadas na aparência das fotos; confira SKU e solado antes de vender.
const fotosTopSpeed = [
  {nome:'Branco, azul e dourado',hex:'#e8e8e3',imagem:'imagens/topspeed-504488-540-540.webp'},
  {nome:'Verde-água e preto',hex:'#8ad9c5',imagem:'imagens/topspeed-507422-540-540.webp'},
  {nome:'Coral e azul',hex:'#fc6470',imagem:'imagens/topspeed-513238-540-540.webp'},
  {nome:'Amarelo e laranja',hex:'#f4c138',imagem:'imagens/topspeed-519667-540-540.webp'},
  {nome:'Preto e prata',hex:'#252525',imagem:'imagens/topspeed-470484-540-540.webp'},
  {nome:'Rosa e azul',hex:'#ed2d96',imagem:'imagens/topspeed-470838-540-540.webp'},
  {nome:'Branco e roxo',hex:'#eae9ef',imagem:'imagens/topspeed-477034-540-540.webp'},
  {nome:'Preto e vermelho (travas moldadas)',hex:'#292929',imagem:'imagens/topspeed-480488-540-540.webp'},
  {nome:'Preto e vermelho (travas mistas)',hex:'#a52b31',imagem:'imagens/topspeed-480515-540-540.webp'},
  {nome:'Preto e laranja',hex:'#34343a',imagem:'imagens/topspeed-489793-540-540-1.webp'},
  {nome:'Branco e amarelo neon',hex:'#ececea',imagem:'imagens/topspeed-490308-540-540.webp'},
  {nome:'Branco, preto e amarelo neon',hex:'#d8e0d3',imagem:'imagens/topspeed-490361-540-540.webp'},
  {nome:'Roxo e laranja (travas mistas)',hex:'#8553b3',imagem:'imagens/topspeed-491536-540-5401.webp'},
  {nome:'Roxo e laranja (travas moldadas)',hex:'#aa71cc',imagem:'imagens/topspeed-491620-540-5401.webp'},
  {nome:'Vinho e branco',hex:'#863443',imagem:'imagens/topspeed-498326-540-540.webp'},
  {nome:'Branco e azul (travas mistas)',hex:'#e4e8e7',imagem:'imagens/topspeed-504304-540-5401.webp'},
];
const topSpeed = catalogo.find(p => p.nome === "Umbro Adamant Top Speed Pro" && p.tipo === "Campo");
if (topSpeed) topSpeed.cores = fotosTopSpeed;


// Foto fornecida pelo usuário: Adamant Top Speed Pro Shark.
const shark = catalogo.find(p => p.nome === 'Umbro Adamant Top Speed Pro Shark' && p.tipo === 'Campo');
if (shark) {
  shark.cores = [{nome:'Cinza, branco e vermelho (Shark)', hex:'#808080', imagem:'imagens/adamant-top-speed-pro-shark.webp'}];
}

// Foto enviada pelo usuário: Umbro Adamant Top Speed Pro STP (society).
const stp = catalogo.find(p => p.nome === 'Umbro Adamant Top Speed Pro STP');
if (stp) {
  stp.tipo = 'Society';
  stp.cores = [{nome:'Verde, branco, dourado e laranja (STP)', hex:'#37cf43', imagem:'imagens/adamant-top-speed-pro-stp.webp'}];
}

// Foto fornecida pelo usuário: Umbro Velocita IX Club de Campo.
// Não aplicar automaticamente à versão Society, que tem solado diferente.
const velocitaCampo = catalogo.find(p => p.nome === 'Umbro Velocita IX Club' && p.tipo === 'Campo');
if (velocitaCampo) {
  velocitaCampo.cores = [{nome:'Azul com detalhes amarelos', hex:'#356782', imagem:'imagens/umbro-velocita-ix-club-azul-amarelo.webp'}];
}

// Foto enviada pelo usuário: Umbro Velocita IX Club — Society (laranja).
const velocitaSociety = catalogo.find(p => p.nome === 'Umbro Velocita IX Club' && p.tipo === 'Society');
if (velocitaSociety) {
  velocitaSociety.cores = [{nome:'Laranja, preto e branco', hex:'#ff832f', imagem:'imagens/velocita-ix-club-society-laranja.webp'}];
}

// Foto enviada pelo usuário: Umbro X-Comfort — Society.
const xComfortSociety = catalogo.find(p => p.nome === 'Umbro X-Comfort' && p.tipo === 'Society');
if (xComfortSociety) {
  xComfortSociety.cores = [{nome:'Branco, azul-marinho e laranja', hex:'#e9eef1', imagem:'imagens/umbro-x-comfort-society.webp'}];
}

// Fotos enviadas pelo usuário: Umbro Pro 5 Bump Club — Society.
// Um único produto, nove cores, cada botão mostra sua própria foto.
const pro5BumpClubSociety = catalogo.find(p => p.nome === 'Umbro Pro 5 Bump Club' && p.tipo === 'Society');
if (pro5BumpClubSociety) {
  pro5BumpClubSociety.cores = [
    {nome:'Cinza, roxo e laranja',hex:'#65616e',imagem:'imagens/pro5-bump-club-490462.webp'},
    {nome:'Azul-claro e branco',hex:'#75c9e7',imagem:'imagens/pro5-bump-club-518216.webp'},
    {nome:'Amarelo e preto',hex:'#e9b92d',imagem:'imagens/pro5-bump-club-519715.webp'},
    {nome:'Cinza e laranja',hex:'#a9aaa6',imagem:'imagens/pro5-bump-club-479415.webp'},
    {nome:'Preto e coral',hex:'#222222',imagem:'imagens/pro5-bump-club-516871.webp'},
    {nome:'Vinho e creme',hex:'#ad4d62',imagem:'imagens/pro5-bump-club-498294.webp'},
    {nome:'Verde-petróleo e dourado',hex:'#2a8e89',imagem:'imagens/pro5-bump-club-507085.webp'},
    {nome:'Branco, azul e coral',hex:'#e8edf2',imagem:'imagens/pro5-bump-club-516835.webp'},
    {nome:'Branco e roxo',hex:'#d5cce5',imagem:'imagens/pro5-bump-club-529447.webp'},
  ];
}

// Fotos enviadas pelo usuário: Umbro Pro Challenge Uptake — Society.
// Nove cores de um mesmo modelo, com troca de foto ao selecionar uma cor.
const proChallengeUptakeSociety = catalogo.find(p => p.nome === 'Umbro Pro Challenge Uptake' && p.tipo === 'Society');
if (proChallengeUptakeSociety) {
  proChallengeUptakeSociety.cores = [
    {nome:'Preto, cinza e laranja',hex:'#34343b',imagem:'imagens/pro-challenge-uptake-489801.webp'},
    {nome:'Preto e verde-limão',hex:'#b4db0d',imagem:'imagens/pro-challenge-uptake-486136.webp'},
    {nome:'Branco, azul e roxo',hex:'#dcdfea',imagem:'imagens/pro-challenge-uptake-493956.webp'},
    {nome:'Preto e prata',hex:'#26262a',imagem:'imagens/pro-challenge-uptake-514066.webp'},
    {nome:'Amarelo-neon e preto',hex:'#e6f52e',imagem:'imagens/pro-challenge-uptake-518009.webp'},
    {nome:'Laranja e preto',hex:'#f28b3c',imagem:'imagens/pro-challenge-uptake-486110.webp'},
    {nome:'Azul e verde-limão',hex:'#2678bf',imagem:'imagens/pro-challenge-uptake-510756.webp'},
    {nome:'Branco, azul e amarelo',hex:'#e9ecf0',imagem:'imagens/pro-challenge-uptake-486393.webp'},
    {nome:'Branco, preto e verde-água',hex:'#dcebe5',imagem:'imagens/pro-challenge-uptake-507110.webp'},
  ];
}

// CONFIGURAÇÃO DA LOJA: informe seu WhatsApp com DDI + DDD, somente números.
// Exemplo fictício: '5511999999999'. Sem configurar, o cliente pode copiar o pedido.

// Fotos fornecidas pelo usuário: Umbro Pro 5 Bump — Futsal.
// Produto único, 17 opções de fotos por cor.
const pro5BumpFutsal = catalogo.find(p => p.nome === "Umbro Pro 5 Bump" && p.tipo === "Futsal");
if (pro5BumpFutsal) {
  pro5BumpFutsal.cores = [
    {nome:'Branco e rosa',hex:'#f3e9dc',imagem:"imagens/pro5-bump-futsal-497000.webp"},
    {nome:'Rosa e cinza',hex:'#ef438a',imagem:"imagens/pro5-bump-futsal-496357.webp"},
    {nome:'Branco, azul e coral',hex:'#e7edf2',imagem:"imagens/pro5-bump-futsal-518475.webp"},
    {nome:'Cinza e branco',hex:'#929394',imagem:"imagens/pro5-bump-futsal-527263.webp"},
    {nome:'Laranja e preto',hex:'#f68a60',imagem:"imagens/pro5-bump-futsal-487085.webp"},
    {nome:'Preto e coral',hex:'#202020',imagem:"imagens/pro5-bump-futsal-518465.webp"},
    {nome:'Verde e dourado',hex:'#31c754',imagem:"imagens/pro5-bump-futsal-518327.webp"},
    {nome:'Branco e rosa',hex:'#f0f0f0',imagem:"imagens/pro5-bump-futsal-490513.webp"},
    {nome:'Preto e verde-limão',hex:'#b2d735',imagem:"imagens/pro5-bump-futsal-507433.webp"},
    {nome:'Preto e laranja',hex:'#252525',imagem:"imagens/pro5-bump-futsal-472269.webp"},
    {nome:'Azul e dourado',hex:'#285dc0',imagem:"imagens/pro5-bump-futsal-497989.webp"},
    {nome:'Preto e prata com laranja',hex:'#222222',imagem:"imagens/pro5-bump-futsal-489878.webp"},
    {nome:'Amarelo e preto',hex:'#e7b927',imagem:"imagens/pro5-bump-futsal-519686.webp"},
    {nome:'Vinho e creme',hex:'#9a374b',imagem:"imagens/pro5-bump-futsal-498171.webp"},
    {nome:'Preto e roxo',hex:'#40375e',imagem:"imagens/pro5-bump-futsal-518508.webp"},
    {nome:'Cinza e branco',hex:'#c3c6c6',imagem:"imagens/pro5-bump-futsal-518456.webp"},
    {nome:'Preto e roxo',hex:'#4d407a',imagem:"imagens/pro5-bump-futsal-498350.webp"},
  ];
}

const WHATSAPP_LOJA = '5511930838857';
// Preços devem ser preenchidos pelo dono da loja, sem inventar valores.
// Fotos fornecidas pelo usuário: Umbro Pro Challenge Uptake — Futsal.
const proChallengeUptakeFutsal = catalogo.find(p => p.nome === 'Umbro Pro Challenge Uptake' && p.tipo === 'Futsal');
if (proChallengeUptakeFutsal) proChallengeUptakeFutsal.cores = [
  {nome:'Azul e dourado',hex:'#3568c9',imagem:'imagens/pro-challenge-futsal-510736-540-540.webp'},
  {nome:'Preto e verde-limão',hex:'#24272b',imagem:'imagens/pro-challenge-futsal-486119-540-540.webp'},
  {nome:'Branco, azul e amarelo',hex:'#e9e8e1',imagem:'imagens/pro-challenge-futsal-486127-540-540.webp'},
  {nome:'Preto e prata',hex:'#24262a',imagem:'imagens/pro-challenge-futsal-497259-540-540.webp'},
  {nome:'Azul e amarelo neon',hex:'#2779c6',imagem:'imagens/pro-challenge-futsal-510718-540-540.webp'},
  {nome:'Branco e roxo',hex:'#eeeaf1',imagem:'imagens/pro-challenge-futsal-490419-540-540.webp'},
  {nome:'Preto e laranja',hex:'#28282c',imagem:'imagens/pro-challenge-futsal-489768-540-540.webp'},
];

// Preços de REFERÊNCIA publicados em páginas oficiais da Umbro.
// Podem variar por cor, SKU, tamanho e data; não são preço de venda confirmado da ZARTH SPORTS.
// Referências vinculadas ao modelo e à modalidade, não ao índice do catálogo.
// Valores são referências de páginas ou capturas e podem mudar por cor, tamanho e data.
const REFERENCIAS = {
  'Campo|Umbro Adamant Top Speed Pro': {preco:1299.99, url:''}, // Valor da versão SG Kintsugi informado pelo usuário.
  'Campo|Umbro Adamant Master Class Pro': {preco:999.99, url:'https://www.umbro.com.br/chuteira-campo-umbro-adamant-master-class-pro-1420471/p'},
  'Campo|Umbro Adamant Top Speed Pro Shark': {preco:999.99, url:'https://www.umbro.com.br/chuteira-campo-umbro-adamant-top-speed-pro-shark-1421579/p'},
  'Society|Umbro Adamant Top Speed Pro STP': {preco:689.99, url:'https://www.umbro.com.br/chuteira-society-umbro-ada-master-class-pro-bump-stp-1298265/p?skuId=3845599'},
  'Campo|Umbro Velocita IX Club': {preco:199.99, url:''},
  'Society|Umbro Adamant Master Class Pro Bump': {preco:519.99, url:'https://www.umbro.com.br/chuteira-society-umbro-adamant-master-class-pro-bump-1255022/p'},
  'Society|Umbro Adamant Master Class Pro Bump England': {preco:539.99, url:'https://www.decathlon.com.br/chuteira-society-umbro-ada-master-class-pro-bump-england-2145743070/p'},
  'Society|Umbro Pro 5 Bump Club': {preco:279.99, url:'https://www.umbro.com.br/chuteira-society-umbro-pro-5-bump-club-1294075/p'},
  'Society|Umbro Pro Challenge Uptake': {preco:399.99, url:'https://www.umbro.com.br/chuteira-society-umbro-pro-challenge-uptake-1372370/p'},
  'Society|Umbro Velocita IX Club': {preco:229.99, url:'https://www.umbro.com.br/chuteira-society-umbro-velocita-ix-club-1255203/p'},
  'Society|Umbro X-Comfort': {preco:219.99, url:'https://www.umbro.com.br/chuteira-society-umbro-x-comfort-1212353/p'},
  'Futsal|Umbro Adamant Master Class Pro Bump': {preco:539.99, url:''},
  'Futsal|Umbro Pro 5 Bump': {preco:479.99, url:'https://www.umbro.com.br/chuteira-futsal-umbro-pro-5-bump-1336439/p'},
  'Futsal|Umbro Pro 5 Bump Club': {preco:279.99, url:'https://www.umbro.com.br/chuteira-futsal-umbro-pro-5-bump-club-1336419/p'},
  'Futsal|Umbro Pro 5 Stable': {preco:679.99, url:'https://www.umbro.com.br/chuteira-futsal-umbro-pro-5-stable-1336615/p'},
  'Futsal|Umbro Pro Challenge Uptake': {preco:499.99, url:'https://www.umbro.com.br/chuteira-futsal-umbro-pro-challenge-uptake-1382787/p'},
  'Futsal|Umbro Sala V Pro': {preco:299.99, url:''}
};
const chavePreco = p => `${p.tipo}|${p.nome}`;
const precoDe = p => REFERENCIAS[chavePreco(p)]?.preco ?? null;
const fonteDe = p => REFERENCIAS[chavePreco(p)]?.url ?? null;
const moeda=n=>n==null?'Preço sob consulta':n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const escapeHtml=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sizes=Array.from({length:12},(_,i)=>i+33);
const catalogoId=id=>catalogo.find(p=>p.id===id);
let categoria='Todas',pesquisa='';
let carrinho=[];
try {const salvo=JSON.parse(localStorage.getItem('zarth-carrinho')||'[]');if(Array.isArray(salvo))carrinho=salvo.filter(x=>catalogoId(x.id)&&Number.isInteger(x.qtd)&&x.qtd>0)}catch{}
const escolhas={};

// Fotos enviadas pelo usuário: Umbro Pro 5 Bump Club — Futsal.
const pro5BumpClubFutsal = catalogo.find(p => p.nome === "Umbro Pro 5 Bump Club" && p.tipo === "Futsal");
if (pro5BumpClubFutsal) {
  pro5BumpClubFutsal.cores = [
    {nome:'Verde-petróleo e dourado',hex:'#328d83',imagem:"imagens/pro5-bump-club-futsal-519767.webp"},
    {nome:'Branco e roxo',hex:'#d8d3e6',imagem:"imagens/pro5-bump-club-futsal-529437.webp"},
    {nome:'Preto e coral',hex:'#222222',imagem:"imagens/pro5-bump-club-futsal-516862.webp"},
    {nome:'Coral e preto',hex:'#ff6d50',imagem:"imagens/pro5-bump-club-futsal-487094.webp"},
    {nome:'Preto e amarelo',hex:'#d8e31d',imagem:"imagens/pro5-bump-club-futsal-507442.webp"},
    {nome:'Preto e laranja',hex:'#ed7b25',imagem:"imagens/pro5-bump-club-futsal-518368.webp"},
    {nome:'Branco e rosa',hex:'#f2eaf2',imagem:"imagens/pro5-bump-club-futsal-490471.webp"},
    {nome:'Branco e azul e coral',hex:'#e9edf0',imagem:"imagens/pro5-bump-club-futsal-516825.webp"},
    {nome:'Preto e roxo',hex:'#31263e',imagem:"imagens/pro5-bump-club-futsal-518516.webp"}
  ];
}

// Fotos enviadas pelo usuário: Umbro Pro 5 Stable — Futsal.
const pro5StableFutsal = catalogo.find(p => p.nome === 'Umbro Pro 5 Stable' && p.tipo === 'Futsal');
if (pro5StableFutsal) {
  pro5StableFutsal.cores = [
    {nome:'Rosa e azul',hex:'#f65370',imagem:'imagens/pro5-stable-futsal-513258.webp'},
    {nome:'Branco e roxo',hex:'#e4e4e4',imagem:'imagens/pro5-stable-futsal-491252.webp'},
    {nome:'Preto e laranja',hex:'#f39a16',imagem:'imagens/pro5-stable-futsal-519563.webp'},
    {nome:'Preto, roxo e laranja',hex:'#37313d',imagem:'imagens/pro5-stable-futsal-491261.webp'},
    {nome:'Cinza e vermelho',hex:'#777777',imagem:'imagens/pro5-stable-futsal-526723.webp'}
  ];
}

const lista=document.getElementById('lista-produtos');
const visual=(p,cor)=>cor.imagem?`<img loading="lazy" src="${escapeHtml(cor.imagem)}" alt="${escapeHtml(p.nome)} — ${escapeHtml(cor.nome)}" onerror="this.hidden=true">`:`<div class="semfoto" aria-label="Foto ainda não cadastrada"></div>`;
function desenhar(){
 const encontrados=catalogo.filter(p=>(categoria==='Todas'||p.tipo===categoria)&&p.nome.toLowerCase().includes(pesquisa));
 document.getElementById('contagem').textContent=`${encontrados.length} modelos • ${catalogo.length} cadastrados`;
 lista.innerHTML=encontrados.map(p=>{
  const corIndex=escolhas[p.id]?.cor??0,cor=p.cores[corIndex]||p.cores[0],tam=escolhas[p.id]?.tam||'';
  const preco=precoDe(p)??null;
  return `<article class="card" data-id="${p.id}"><div class="visual" data-zoom="1" role="button" tabindex="0" title="Abrir foto em tela cheia">${visual(p,cor)}<span class="zoom-dica">⛶ Ver em tela cheia</span></div><div class="info"><span class="tipo">${p.tipo}</span><h3>${escapeHtml(p.nome)}</h3><p class="preco">${moeda(preco)} <small class="preco-nota">${preco==null?"sem preço oficial confirmado":"referência do site Umbro"}</small></p><p class="nomecor">${escapeHtml(cor.nome)}</p><div class="cores">${p.cores.map((c,i)=>`<button type="button" class="cor ${i===corIndex?'selecionada':''}" title="${escapeHtml(c.nome)}" aria-label="Escolher cor ${escapeHtml(c.nome)}" aria-pressed="${i===corIndex}" style="background:${c.hex}" data-cor="${i}"></button>`).join('')}</div><label class="tamanho-label">Tamanho<select class="tamanho" aria-label="Tamanho da ${escapeHtml(p.nome)}"><option value="">Selecione</option>${sizes.map(n=>`<option value="${n}" ${String(tam)===String(n)?'selected':''}>${n}</option>`).join('')}</select></label><button type="button" class="adicionar" data-add="1">Adicionar ao carrinho <span aria-hidden="true">＋</span></button></div></article>`;
 }).join('');
}
function salvar(){localStorage.setItem('zarth-carrinho',JSON.stringify(carrinho));atualizarCarrinho()}
function atualizarCarrinho(){
 const qtd=carrinho.reduce((s,x)=>s+x.qtd,0);document.getElementById('qtd-carrinho').textContent=qtd;
 const total=carrinho.reduce((s,x)=>s+(precoDe(catalogoId(x.id))??0)*x.qtd,0);
 const itens=document.getElementById('itens-carrinho');
 itens.innerHTML=carrinho.length?carrinho.map((x,i)=>{const p=catalogoId(x.id),c=p.cores[x.cor]||p.cores[0];return `<div class="item"><div class="mini">${visual(p,c)}</div><div class="item-info"><strong>${escapeHtml(p.nome)}</strong><small>${escapeHtml(c.nome)} · Nº ${x.tam}</small><small>${moeda(precoDe(p)??null)}</small><div class="qtd"><button data-menos="${i}" aria-label="Diminuir quantidade">−</button><span>${x.qtd}</span><button data-mais="${i}" aria-label="Aumentar quantidade">+</button><button class="remover" data-remover="${i}">Remover</button></div></div></div>`}).join(''):'<p class="vazio">Seu carrinho está vazio.</p>';
 document.getElementById('total').textContent=moeda(total);
 document.getElementById('aviso-preco').hidden=!carrinho.some(x=>precoDe(catalogoId(x.id))==null);
 document.getElementById('finalizar').disabled=!carrinho.length;
}
lista.addEventListener('change',e=>{if(!e.target.matches('.tamanho'))return;const id=Number(e.target.closest('.card').dataset.id);escolhas[id]={...(escolhas[id]||{}),tam:e.target.value}});
lista.addEventListener('click',e=>{
 const card=e.target.closest('.card');if(!card)return;const p=catalogoId(Number(card.dataset.id));
 const b=e.target.closest('[data-cor]');
 if(b){const i=Number(b.dataset.cor);escolhas[p.id]={...(escolhas[p.id]||{}),cor:i};card.querySelectorAll('.cor').forEach(x=>{const sel=x===b;x.classList.toggle('selecionada',sel);x.setAttribute('aria-pressed',String(sel))});card.querySelector('.nomecor').textContent=p.cores[i].nome;card.querySelector('.visual').innerHTML=visual(p,p.cores[i]);return}
 if(e.target.closest('[data-zoom]')){abrirFoto(p);return}
 if(e.target.closest('[data-add]')){const tam=card.querySelector('.tamanho').value;if(!tam){card.querySelector('.tamanho').focus();alert('Escolha o tamanho antes de adicionar ao carrinho.');return}const cor=escolhas[p.id]?.cor??0;const item=carrinho.find(x=>x.id===p.id&&x.cor===cor&&x.tam===tam);if(item)item.qtd++;else carrinho.push({id:p.id,cor,tam,qtd:1});salvar();abrirCarrinho()}
});
document.getElementById('busca').addEventListener('input',e=>{pesquisa=e.target.value.toLowerCase().trim();desenhar()});
document.getElementById('filtros').addEventListener('click',e=>{const b=e.target.closest('[data-cat]');if(!b)return;categoria=b.dataset.cat;document.querySelectorAll('[data-cat]').forEach(x=>x.classList.toggle('ativo',x===b));desenhar()});
const painel=document.getElementById('painel-carrinho'),fundo=document.getElementById('fundo');
function abrirCarrinho(){painel.classList.add('aberto');fundo.hidden=false;document.body.classList.add('sem-scroll');document.getElementById('fechar').focus()}
function fecharCarrinho(){painel.classList.remove('aberto');fundo.hidden=true;document.body.classList.remove('sem-scroll')}
document.getElementById('abrir').addEventListener('click',abrirCarrinho);
document.getElementById('fechar').addEventListener('click',fecharCarrinho);
fundo.addEventListener('click',fecharCarrinho);
document.addEventListener('keydown',e=>{if(e.key==='Escape')fecharCarrinho()});
document.getElementById('itens-carrinho').addEventListener('click',e=>{let b=e.target.closest('button');if(!b)return;let i=Number(b.dataset.mais??b.dataset.menos??b.dataset.remover);if(!Number.isInteger(i)||!carrinho[i])return;if(b.hasAttribute('data-mais'))carrinho[i].qtd++;if(b.hasAttribute('data-menos'))carrinho[i].qtd--;if(b.hasAttribute('data-remover')||carrinho[i].qtd<=0)carrinho.splice(i,1);salvar()});
document.getElementById('limpar').addEventListener('click',()=>{if(confirm('Esvaziar carrinho?')){carrinho=[];salvar()}});
function textoPedido(){let total=0,consulta=false;const linhas=carrinho.map(x=>{const p=catalogoId(x.id),cor=p.cores[x.cor]||p.cores[0],preco=precoDe(p);if(preco==null)consulta=true;else total+=preco*x.qtd;return `• ${p.nome} (${p.tipo})\n  Cor: ${cor.nome} | Nº ${x.tam} | Qtd: ${x.qtd}\n  ${preco==null?'Preço a confirmar':moeda(preco*x.qtd)}`});return `Olá! Quero solicitar um pedido na ZARTH SPORTS:\n\n${linhas.join('\n\n')}\n\nSubtotal dos itens com preço: ${moeda(total)}${consulta?'\nHá itens com preço a confirmar.':''}\n\nPor favor, confirme disponibilidade, frete, valor final e pagamento.`}
document.getElementById('finalizar').addEventListener('click',async()=>{if(!carrinho.length)return;const msg=textoPedido();if(/^\d{12,15}$/.test(WHATSAPP_LOJA)){window.open(`https://wa.me/${WHATSAPP_LOJA}?text=${encodeURIComponent(msg)}`,'_blank','noopener')}else{try{await navigator.clipboard.writeText(msg);alert('Pedido copiado! Configure WHATSAPP_LOJA no script.js para enviar direto ao WhatsApp da loja.')}catch{window.prompt('Copie seu pedido:',msg)}}});
// Umbro Sala V Pro — Futsal, foto fornecida pelo usuário.
const salaVPro = catalogo.find(p => p.nome === 'Umbro Sala V Pro' && p.tipo === 'Futsal');
if (salaVPro) {
  salaVPro.cores = [{nome:'Vermelho, branco e azul',hex:'#e7454b',imagem:'imagens/sala-v-pro-vermelho.webp'}];
}

// Visualizador de fotos em tela cheia. Troca de cores sem sair da janela.
const fotoModal=document.getElementById('foto-modal');
let fotoProduto=null, fotoIndice=0;
function renderFoto(){
 if(!fotoProduto)return;
 const cor=fotoProduto.cores[fotoIndice];
 document.getElementById('foto-titulo').textContent=`${fotoProduto.nome} — ${fotoProduto.tipo}`;
 document.getElementById('foto-cor').textContent=cor.nome;
 const img=document.getElementById('foto-ampliada');
 img.hidden=!cor.imagem;
 img.src=cor.imagem||'';
 img.alt=`${fotoProduto.nome} — ${cor.nome}`;
 document.getElementById('foto-sem-imagem').hidden=!!cor.imagem;
 document.getElementById('foto-cores').innerHTML=fotoProduto.cores.map((c,i)=>`<button class="foto-cor-btn ${i===fotoIndice?'selecionada':''}" style="background:${c.hex}" data-foto-cor="${i}" aria-label="${escapeHtml(c.nome)}" title="${escapeHtml(c.nome)}"></button>`).join('');
 document.getElementById('foto-preco').textContent=`Referência Umbro: ${moeda(precoDe(fotoProduto))}`;
}
function abrirFoto(p){fotoProduto=p;fotoIndice=escolhas[p.id]?.cor??0;renderFoto();fotoModal.hidden=false;document.body.classList.add('foto-aberta');document.getElementById('foto-fechar').focus()}
function fecharFoto(){fotoModal.hidden=true;fotoProduto=null;document.body.classList.remove('foto-aberta')}
document.getElementById('foto-fechar').addEventListener('click',fecharFoto);
fotoModal.addEventListener('click',e=>{if(e.target===fotoModal)fecharFoto();const b=e.target.closest('[data-foto-cor]');if(b&&fotoProduto){fotoIndice=Number(b.dataset.fotoCor);escolhas[fotoProduto.id]={...(escolhas[fotoProduto.id]||{}),cor:fotoIndice};renderFoto();desenhar()}});
document.getElementById('foto-anterior').addEventListener('click',()=>{if(fotoProduto){fotoIndice=(fotoIndice+fotoProduto.cores.length-1)%fotoProduto.cores.length;renderFoto()}});
document.getElementById('foto-proxima').addEventListener('click',()=>{if(fotoProduto){fotoIndice=(fotoIndice+1)%fotoProduto.cores.length;renderFoto()}});
lista.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-zoom]')){e.preventDefault();abrirFoto(catalogoId(Number(e.target.closest('.card').dataset.id)))}});
document.addEventListener('keydown',e=>{if(fotoModal.hidden)return;if(e.key==='Escape')fecharFoto();if(e.key==='ArrowLeft')document.getElementById('foto-anterior').click();if(e.key==='ArrowRight')document.getElementById('foto-proxima').click()});
desenhar();atualizarCarrinho();
