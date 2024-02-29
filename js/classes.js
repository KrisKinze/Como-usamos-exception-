// Classe de Funcionarios
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    // Métodos da classe funcionarios
    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu cargo é ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} iniciou seu trabalho no cargo de ${this.cargo}.`;
    }
}

// Classe de Gerente
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    // Métodos da classe gerente
    gerenciar() {
        return `O(a) gerente ${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

// Classe Desenvolvedor
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    // Métodos da classe Desenvolvedor
    programar() {
        return `O(a) programador(a) ${this.nome} está desenvolvendo um código na linguagem de ${this.linguagem}.`;
    }
}