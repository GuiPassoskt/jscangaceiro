class Atividade {
  constructor({ idAtividade, listaCategorias }) {
    this.id = idAtividade;
    this._idAtividade = parseInt(idAtividade);
    this._listaCategorias = Array.from(listaCategorias);
    Object.freeze(this);
  }

  toString() {
    return JSON.stringify(this);
  }
}
