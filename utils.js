// utils.js

// Lista de palavras proibidas
const palavrasProibidas = [
  // Palavrões e xingamentos comuns
  'idiota', 'burro', 'estúpido', 'imbecil', 'retardado', 'besta', 'palhaço',
  'vagabundo', 'vagabunda', 'otário', 'otaria', 'corno', 'corna', 'viado', 'bicha',
  'burrice', 'desgraçado', 'desgraçada', 'maldito', 'maldita', 'fdp', 'merda',
  'porra', 'caralho', 'cacete', 'bosta', 'puta', 'puto', 'prostituta', 'arrombado',
  'arrombada', 'nojento', 'nojenta', 'inútil', 'safado', 'safada', 'canalha',
  'crápula', 'macaco', 'racista', 'preconceituoso', 'gayzinho', 'moleque', 'piranha',
  'fudido', 'fudida', 'inferno', 'demônio', 'diabo', 'maluco', 'doente', 'lixo',
  'escroto', 'escrota', 'pau no cu', 'pau no seu cu', 'seu cu', 'filho da puta',
  'filha da puta', 'miserável', 'merdinha', 'cuzão', 'cuzinha', 'pnc', 'krl', 'vai se foder',
  'vsf', 'vtnc', 'vai tomar no cu', 'cu', 'foda-se', 'fodase', 'fodido',

  // Disfarces e variações escritas com abreviações ou censuras parciais
  'f*dido', 'f*dase', 'p*ta', 'v*ado', 'c*zão', 'c*zinho', 'pqp', 'vsfd', 'vai se ferrar',
  'merd@', 'porr@', 'c@ralho', 'fdp', 'desgracado', 'desgracada',

  // Termos ofensivos de cunho discriminatório
  'macaca', 'aleijado', 'retardada', 'mongoloide', 'deficiente', 'preto imundo',
  'sujo', 'muculmano safado', 'crente lixo', 'gordo nojento', 'anão', 'baixinho', 'panaca',

  // Em inglês e gírias internacionais
  'fuck', 'shit', 'asshole', 'bitch', 'bastard', 'jerk', 'dumb', 'stupid', 'idiot', 'motherfucker',
  'faggot', 'moron', 'douche', 'cunt', 'piss', 'slut', 'whore'
];


// Verifica se o texto contém alguma palavra proibida
export function contemPalavrasProibidas(texto) {
  const textoLimpo = texto.toLowerCase();
  return palavrasProibidas.some(palavra => textoLimpo.includes(palavra));
}

// Salva os comentários no localStorage
export function salvarComentarios(comentarios) {
  localStorage.setItem('comments', JSON.stringify(comentarios));
}

// Carrega os comentários do localStorage
export function carregarComentarios() {
  return JSON.parse(localStorage.getItem('comments')) || [];
}
