import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

let clientes = [];
let contasCorrente = [];

clientes.push(new Cliente({
    nome : "Adriano Feitosa",
    dataNascimento: "12/04/1994",
    cpf: 15617458415,
    rg: 854641576,
    email: "adrianominecraftgg@gmail.com",
    telefone: {
        area: 55,
        ddd: 11,
        numero: 915661487
    }
}));

clientes.push(new Cliente({
    nome : "Henrique Cardoso",
    dataNascimento: "26/08/1982",
    cpf: 16518487403,
    rg: 749826146,
    email: "henriquecardreidelas@gmail.com",
    telefone: {
        area: 55,
        ddd: 22,
        numero: 984551368
    }
}));

contasCorrente.push(new ContaCorrente(655, 165871654, clientes[0]));
contasCorrente.push(new ContaCorrente(655, 745984598, clientes[1]));

contasCorrente[0].depositar(2000);
contasCorrente[1].depositar(2000);

contasCorrente[0].transferir(500, contasCorrente[1]);
contasCorrente[0].transferir(-500, contasCorrente[1]);
contasCorrente[1].transferir(9000, contasCorrente[0]);

contasCorrente[1].sacar(50);
contasCorrente[0].sacar(3000);

contasCorrente[1].depositar(-50);

console.log(contasCorrente[0].historico, contasCorrente[0].saldo);
console.log(contasCorrente[1].historico, contasCorrente[1].saldo);
// console.log(clientes[0], clientes[1]);