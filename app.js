const app = new Vue ({
  el: '#book-form',
  data: {
    errors: [],
    titulo: null,
    edicao: null,
    data: null,
    capa: null,
    paginas: null,
    isbn: null
  },
  methods: {
    registerBook: function(e) {
      if (this.titulo && this.edicao && this.data && this.capa && this.paginas && this.isbn) {
        return true;
      }
      this.errors = [];

      if (!this.name) {
        this.error.push('Faltou informar o título')
      }
      if (!this.edicao) {
        this.error.push('Faltou informar a edição')
      } else if (this.edicao <= 0) {
        this.error.push('Precisa ser igual ou maior que 1')
      }
      if (!this.data) {
        this.error.push('Faltou informar a data')
      }
      if (!this.capa) {
        this.error.push('Faltou escolher o tipo de capa')
      }
      if (!this.paginas) {
        this.error.push('Faltou informar a quantidade de páginas')
      } else if (this.paginas <= 0) {
        this.error.push('Precisa ser igual ou maior que 1')
      }
      e.preventDefault();
    }
  }
})
