export class Cliente {
    nome;
    dataNascimento;
    cpf;
    rg;
    email;
    telefone;

    constructor({nome, dataNascimento, cpf, rg, email, telefone}) {{
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.rg = rg;
        this.email = email;
        this.telefone = telefone;
    }}
}