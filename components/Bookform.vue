<template>
  <div id="cadastro">
    <div class="input-container">
      <h1 class="cabeca">
        Cadastro de Livros
      </h1>
    </div>
    <div>
      <form id="book-form" method="post">
        <div class="input-container">
          <label for="titulo">Informe o titulo do livro: </label>
          <input
            id="titulo"
            v-model="titulo"
            type="text"
            name="titulo"
            placeholder="Digite o título do livro"
            required
          >
        </div>
        <div class="input-container">
          <label for="edicao">Informe a edição: </label>
          <input
            id="edicao"
            v-model="edicao"
            type="number"
            name="edicao"
            min="1"
            required
          >
        </div>
        <div class="input-container">
          <label for="publicacao">Informe a data de publicação: </label>
          <input
            id="publicacao"
            v-model="publicacao"
            type="date"
            name="publicacao"
            required
          >
        </div>
        <div class="input-container">
          <label for="capa">Escolha o tipo de capa: </label>
          <select id="capa" v-model="capa" required>
            <option disabled value=" ">
              Escolha uma capa
            </option>
            <option>Dura</option>
            <option>Brochura</option>
            <option>Espiral</option>
            <option>Flexível</option>
            <option>Canoa</option>
          </select>
        </div>
        <div class="input-container">
          <label for="paginas">Informe a quantidade de páginas: </label>
          <input
            id="paginas"
            v-model="paginas"
            type="number"
            name="paginas"
            min="1"
            required
          >
        </div>
        <div class="input-container">
          <label for="isbn">Informe o ISBN: </label>
          <input
            id="isbn"
            v-model="isbn"
            type="number"
            name="isbn"
            required
          >
        </div>
        <div class="acoes">
          <input type="submit" class="button" value="OK" @click="onSubmit">
          <input type="reset" class="button" value="Cancelar">
        </div>
      </form>
    </div>
    <div>
      <h1 class="cabeca">
        Livros cadastrados
      </h1>
      <table id="table">
        <thead class="cabeca">
          <tr>
            <th scope="col">
              ISNB
            </th>
            <th scope="col">
              Título
            </th>
            <th scope="col">
              Edição
            </th>
            <th scope="col">
              Publicação
            </th>
            <th scope="col">
              Capa
            </th>
            <th scope="col">
              Páginas
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class>
            <th>{{ isbn }}</th>
            <td>{{ titulo }}</td>
            <td>{{ edicao }}</td>
            <td>{{ publicacao }}</td>
            <td>{{ capa }}</td>
            <td>{{ paginas }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'enviaForm',
  data () {
    return {
      titulo: '',
      edicao: '',
      data: '',
      capa: '',
      paginas: '',
      isbn: ''
    }
  },
  methods: {
    enviaForm () {
      console.log(this.titulo, this.edicao, this.data, this.capa, this.paginas, this.isbn)
    }
  }
}
</script>

<style scoped>

#book-form {
  max-width: 400px;
  margin: 5px auto;
}

.cabeca {
  text-align: center;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
}

.button {
  background-color: #222;
  color: #FCBA03;
  font-weight: bold;
  padding: 10px;
}

.acoes {
  margin-bottom: 20px;
}

table, th, td {
  border: 1px solid;
  padding: 10px;
}

#table {

  max-width: 100%;
  text-align: center;
  margin: 5px auto;
  border: 1px solid;
}

.cabeca {
  text-align: center;
}

</style>
