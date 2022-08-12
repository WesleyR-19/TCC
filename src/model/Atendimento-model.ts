
export interface IAtendimento {

    id: string;
    nome: string,
    sobrenome: string,
    rua: string,
    bairro: string,
    numero: number,
    localAtendimento: string,
    descricao: string,
    motivoAtendimento: string,
    data: Date,
}

class AtendimentoModel implements IAtendimento {

    private _id: string;

    private _nome: string;

    private _sobrenome: string;

    private _rua: string;

    private _bairro: string;

    private _numero: number;

    private _localAtendimento: string;

    private _descricao: string;    

    private _motivoAtendimento: string;

    private _data: Date;

     constructor(
        id: string,
        nome: string,
        sobrenome: string,
        rua: string,
        bairro: string,
        numero: number,
        localAtendimento: string,
        descricao: string,
        motivoAtendimento: string,
        data: Date,
     ) {
        this._id = id;
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._rua = rua;
        this._bairro = bairro;
        this._numero = numero;
        this._localAtendimento = localAtendimento;
        this._descricao = descricao;
        this._motivoAtendimento = motivoAtendimento;
        this._data = data;
     }

     public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get sobrenome(): string {
        return this._sobrenome;
    }
    public set sobrenome(value: string) {
        this._sobrenome = value;
    }

    public get rua(): string {
        return this._rua;
    }
    public set rua(value: string) {
        this._rua = value;
    }

    public get bairro(): string {
        return this._bairro;
    }
    public set bairro(value: string) {
        this._bairro = value;
    }

    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }

    public get localAtendimento(): string {
        return this._localAtendimento;
    }
    public set localAtendimento(value: string) {
        this._localAtendimento = value;
    }
    
    public get descricao(): string {
        return this._descricao;
    }
    public set descricao(value: string) {
        this._descricao = value;
    }

    public get motivoAtendimento(): string {
        return this._motivoAtendimento;
    }
    public set motivoAtendimento(value: string) {
        this._motivoAtendimento = value;
    }

    public get data(): Date {
        return this._data;
    }
    public set data(value: Date) {
        this._data = value;
    }

    
    public toJSON() {
        return {
            nome: this.nome,
            sobrenome: this.sobrenome,
            rua: this.rua,
            bairro: this.bairro,
            numero: this.numero,
            localAtendimento: this.localAtendimento,
            descricao: this.descricao,
            motivoAtendimento: this.motivoAtendimento,
            data: this.data

       };

        
    }

}

export default AtendimentoModel;