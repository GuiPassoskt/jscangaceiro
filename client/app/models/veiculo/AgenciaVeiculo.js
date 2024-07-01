export class AgenciaVeiculo {
  constructor() {
    this._lista = [];
    Object.freeze(this);
  }

  listar() {
    return this._lista;
  }

  incluir(veiculo) {
    this._lista.push(veiculo);
  }
}
