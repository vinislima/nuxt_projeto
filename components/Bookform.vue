<template>
  <div id="cadastro">
    <div class="input-container">
      <h1 class="cabeca">
        Cadastro de Livros
      </h1>
    </div>
    <div>
      <form id="book-form" method="post" @:submit.prevent="BookForm">
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
          <label for="data">Informe a data de publicação: </label>
          <input
            id="data"
            v-model="data"
            type="date"
            name="data"
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
            <option>Espirral</option>
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
          <input type="submit" class="button" value="OK">
          <input type="button" class="button" value="Cancelar">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookForm',
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
    async BookForm () {
      /* eslint-disable no-unused-vars */
      const res = await fetch('/backend-api', {
        /* eslint-enable no-unused-vars */
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          titulo: this.titulo,
          edicao: this.edicao,
          data: this.data,
          capa: this.capa,
          paginas: this.paginas,
          isbn: this.isbn
        })
      })
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

</style>
