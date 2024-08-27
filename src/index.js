class Heroi {
    //construtor
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;

        //definindo o tipo de ataque
        switch(this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        //exibindo 
        console.log("o " + this.tipo + " atacou usando " +ataque);
    }
}

const mago = new Heroi('Merlin', 30, 'mago');
const guerreiro= new Heroi('Arthur', 35, 'guerreiro');
const monge = new Heroi('Shaolin', 40, 'monge');
const ninja = new Heroi('Kage', 25, 'ninja');

//chamando o metodo para cada heroi
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();