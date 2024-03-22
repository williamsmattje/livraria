// Classe abstrata Livro
class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }

  // Método abstrato
  ler() {
    throw new Error('Método "ler" deve ser implementado');
  }
}

// Classe que herda de Livro - Romance
class Romance extends Livro {
  constructor(titulo, autor, genero) {
    super(titulo, autor);
    this.genero = genero;
  }

  ler() {
    console.log(`Lendo ${this.titulo}, um romance ${this.genero}, escrito por ${this.autor}.`);
  }
}

// Outra classe que herda de Livro - FiccaoCientifica
class FiccaoCientifica extends Livro {
  constructor(titulo, autor, ano) {
    super(titulo, autor);
    this.ano = ano;
  }

  ler() {
    console.log(`Lendo ${this.titulo}, um livro de ficção científica de ${this.ano}, escrito por ${this.autor}.`);
  }
}

// Criando instâncias de objetos
const livro1 = new Romance('Orgulho e Preconceito', 'Jane Austen', 'clássico');
const livro2 = new FiccaoCientifica('Neuromancer', 'William Gibson', 1984);
const livro3 = new Romance('O Morro dos Ventos Uivantes', 'Emily Brontë', 'gótico');

// Testando os métodos
livro1.ler();
livro2.ler(); 
livro3.ler(); 
