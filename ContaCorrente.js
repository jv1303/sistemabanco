export class ContaCorrente {
    titular;
    agencia;
    conta;
    saldo;
    historico;

    constructor(agencia, conta, titular) {
        this.titular = titular;
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = 0;
        this.historico = "Histórico da conta: " + titular.nome + ". - ";
    }

    depositar(deposito) {
        if (deposito > 0) {
        this.saldo += deposito;
        this.historico += "Depósito de R$" + deposito + " realizado com sucesso. - "
        } else {
            this.historico += "Falha no depósito de R$" + deposito + ". - "
        }
    }

    sacar(saque) {
        if (this.saldo >= saque) {
            this.saldo -= saque;
            this.historico += "Saque de R$" + saque + " realizado com sucesso. - "
        } else {
            this.historico += "Falha no saque de R$" + saque + ". - "
        }
    }

    transferir(valor, destinatario) {
        if (this.saldo >= valor && valor > 0) {
            this.saldo -= valor;
            destinatario.saldo += valor;
            this.historico += "Tranferência de R$" + valor + " realizada com sucesso. - "
            destinatario.historico += "Tranferência de R$" + valor + " recebida com sucesso. - "
        } else {
            this.historico += "Falha na transferência de R$" + valor + ". - "
            destinatario.historico += "Falha ao receber transferência de R$" + valor + ". - "
        }
    }
}