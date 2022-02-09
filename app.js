new Vue ({
  el: '#book-form',

  data () {
    return {
      form: {
        titulo: null,
        edicao: null,
        data: null,
        capa: null,
        paginas: null,
        isbn: null
      }
    }
  },
  methods: {
    registerBook () {
      const tituloValido = !!this.form.titulo
      const edicaoValida = typeof this.form.edicao === 'number' && this.form.edicao > 0
      const dataValida = !!this.form.data
      const capaValida = !!this.form.capa
      const paginasValida = typeof this.form.paginas === 'number' && this.form.edicao > 0
      const formularioValido = tituloValido && edicaoValida && dataValida && capaValida && paginasValida && isbnValida
      if (formularioValido) {
        console.log('Livro cadastrado', this.form)
      } else {
        console.log('Algo está errado')
      }
    }
  }
})
