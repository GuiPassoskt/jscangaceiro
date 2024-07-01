import { Negociacao } from '../models/negociacao/Negociacao.js';
import { Negociacoes } from '../models/negociacao/Negociacoes.js';

export class NegociacaoController {
  constructor() {
    this._listaNegociacoes = new Negociacoes();
  }

  listar() {
    return this._listaNegociacoes.listar();
  }

  create() {
    this._listaNegociacoes.incluir(new Negociacao(new Date(), 2, 2.59));
  }
}
