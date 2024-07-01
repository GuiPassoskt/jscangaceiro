export class Negociacoes {
  constructor() {
    this._lista = [];
    Object.freeze(this);
  }

  listar() {
    return this._lista;
  }

  incluir(negociacao) {
    this._lista.push(negociacao);
  }
}
