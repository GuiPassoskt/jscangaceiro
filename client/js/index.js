import { VeiculoController } from '../app/controllers/VeiculoController.js';

const campos = [
  document.querySelector('#data'),
  document.querySelector('#valor'),
  document.querySelector('#quantidade'),
];

const tbody = document.querySelector('table tbody');

const veiculoController = new VeiculoController();
veiculoController.criarCarro();
veiculoController.criarMoto();

document.addEventListener('DOMContentLoaded', () => {
  for (let veiculo of veiculoController.listarVeiculos()) {
    const tr = document.createElement('tr');
    const tdCor = document.createElement('td');
    const tdAno = document.createElement('td');
    const tdModelo = document.createElement('td');
    const tdCombustivel = document.createElement('td');

    tdCor.textContent = veiculo._cor;
    tdAno.textContent = veiculo.ano;
    tdModelo.textContent = veiculo.modelo;
    tdCombustivel.textContent = veiculo.combustivel;

    tr.appendChild(tdCor);
    tr.appendChild(tdAno);
    tr.appendChild(tdModelo);
    tr.appendChild(tdCombustivel);
    tbody.appendChild(tr);
  }
});

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const tr = document.createElement('tr');

  for (let campo of campos) {
    const td = document.createElement('td');

    td.textContent = campo.value;

    tr.appendChild(td);
  }

  const tdVolume = document.createElement('td');

  tdVolume.textContent = campos[1].value * campos[2].value;

  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  // limpar campos
  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;
  campos[0].focus();
});
