const listaCategoria = document.querySelector('#listaCategoria');

document.addEventListener('DOMContentLoaded', async () => {
  const response = await Promise.all([fetch('http://localhost:3000/atividades/1')]);

  const result = await response[0].json();
  debugger;
  renderRows(result._listaCategorias);
});

const renderRows = lista => {
  for (let item of lista) {
    listaCategoria.innerHTML += `<tr>
      <td>${item.nome}</td>
      <td><input type="text" name="valor" value="${item.valor}" data-name="${item.nome}"/></td>
      <td><button type="button" class="btn btn-danger" onclick="excluir(${item.idCategoria})">Excluir</button></td>
    </tr>`;
  }
};

const formAtividade = document.querySelector('#formAtividade');

formAtividade.addEventListener('submit', async e => {
  e.preventDefault();

  const categorias = document.querySelectorAll('input[name="valor"]');
  const form = convertFormToObject(formAtividade);
  form.listaCategorias = [];

  for (let categoria of categorias) {
    form.listaCategorias.push({
      nome: categoria.getAttribute('data-name'),
      valor: categoria.value,
    });
  }
  const atividade = new Atividade({ ...form });
  const response = await fetch('http://localhost:3000/atividades/1', {
    method: 'put',
    body: atividade.toString(),
  });
  const result = await response.json();
  console.log(result);
});

async function excluir(idCategoria) {
  await fetch(`http://localhost:3000/atividades/${idCategoria}`, {
    method: 'delete',
  });
}

function convertFormToObject(form) {
  // Extract form data
  const formData = new FormData(form);

  // Convert FormData to a plain object
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  return data;
}

function adicionarCategoria() {
  let count = 0;
  listaCategoria.innerHTML += `<tr id="adicional_${count}">
      <td>Categoria Adicional</td>
      <td><input type="text" name="valor" data-name="Categoria Adicional"/></td>
      <td><button type="button" class="btn btn-danger" onclick="excluirAdicional(${count})">Excluir</button></td>
    </tr>`;
  count++;
}

function excluirAdicional(idAdicional) {
  document.querySelector(`#adicional_${idAdicional}`).remove();
}
