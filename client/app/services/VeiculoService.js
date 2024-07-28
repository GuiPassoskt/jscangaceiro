export class VeiculoService {
  async listar() {
    const response = await fetch('app/database/veiculos.json');
    const result = await response.json();
    return result;
  }

  incluir(veiculo) {
    // implementar método incluir
  }
}
