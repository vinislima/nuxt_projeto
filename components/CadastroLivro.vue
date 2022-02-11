<template>
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
            Capa
          </th>
          <th scope="col">
            Páginas
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class>
          <th>isbn</th>
          <td>título</td>
          <td>edicao</td>
          <td>capa</td>
          <td>paginas</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CadastroLivro'
}
</script>

<style scoped>

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
