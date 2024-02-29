//Função Para enviar o Formulário
function enviarFormulario() {
    try {
        var nome = document.getElementById("nome").value
        var idade = document.getElementById("idade").value
        var cargo = document.getElementById("cargo").value
        var departamento = document.getElementById("departamento").value
        var linguagem = document.getElementById("linguagem").value

        //Erro caso os campos obrigatórios estejam vazios
        if (nome === "" || idade === "" || cargo === "") {
            throw new Error("Existem campos vazios. Por favor, preencha todos os campos.");
        }

        //Erro caso o campo Obrigatorio para os cargos especificos estejam vazios. 
        if (cargo === "Desenvolvedor" && linguagem === "") {
            throw new Error("Campo de linguagem é obrigatório para o cargo de Desenvolvedor.");
        }

        if (cargo === "Gerente" && departamento === "") {
            throw new Error("Campo de departamento é obrigatório para o cargo de Gerente.");
        }

        //Erro caso os 2 campos para os cargos especificos de Gerente e Desenvolvedor estejam ambos preenchidos
        if (departamento && linguagem) {
            throw new Error("Você só pode preencher um dos campos 'Departamento' ou 'Linguagem'.");
        }
        
        //Erro caso os campos preenchidos não estejam de acordo com a vaga
        if (cargo !== "Desenvolvedor" && linguagem !== "") {
            throw new Error("O campo de linguagem só deve ser preenchido se o cargo for Desenvolvedor.");
        }

        if (cargo !== "Gerente" && departamento !== "") {
            throw new Error("O campo de departamento só deve ser preenchido se o cargo for Gerente.");
        }

        //Criando uma var para trabalhar na criação das instancias
        var funcionario;

        //Criando as instancias baseadas nos cargos. Departamento para gerente. Linguagem para Desenvolvedor. 
        if (cargo === "Gerente") {
            funcionario = new Gerente(nome, idade, cargo, departamento);
        } else if (cargo === "Desenvolvedor") {
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        } else {
            funcionario = new Funcionario(nome, idade, cargo);
        }

        //Função será adicionada abaixo - Função para mostrar o resultado
        resultadoInstancia(funcionario);

    } catch (error) {
        //Função Será adicionada abaixo - Função para mostrar o Erro
        mensagemErro(error.message);

    }
}

//Função para Resultado das instâncias
function resultadoInstancia(funcionario) {
    var resultadoFinal = document.getElementById('resultado');

    resultadoFinal.innerHTML = `
        <p style="color: green; font-size: 18px; font-weight: bold;">${funcionario.seApresentar()}</p>
        <p style="color: green; font-size: 18px; font-weight: bold;">${funcionario.trabalhar()}</p>
        ${funcionario instanceof Gerente ? `<p style=": blue; font-size: 18px; font-weight: bold;">${funcionario.gerenciar()}</p>` : ''}
        ${funcionario instanceof Desenvolvedor ? `<p style="color: blue; font-size: 18px; font-weight: bold;">${funcionario.programar()}</p>` : ''}
    `;
}

//Função para mensagem de erro da página
function mensagemErro(mensagem) {
    var resultadoFinal = document.getElementById('resultado');

    resultadoFinal.innerHTML = `<p style="color: red; font-size: 18px; font-weight: bold;">Erro: ${mensagem}</p>`;
}

