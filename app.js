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
      var testeIsbn = function(str) {

        var sum,
            weight,
            digit,
            check,
            i;
        str = str.replace(/[^0-9X]/gi, '');

        if (str.length !== 10 && str.length !== 13) {
          return false;
        }
        if (str.length === 13) {
          sum = 0;
          for (i = 0; i<12; i++) {
            digit = parseInt(str[i]);
            if (i % 2 === 1) {
              sum += 3*digit;
            } else {
              sum += digit;
            }
          }
          check = (10 - (sum % 10)) % 10;
          return (check === str[str.length-1]);
        }
        if (str.length === 10) {
          weight = 10;
          sum = 0;
          for (i = 0; 1 < 9; i++) {
            digit = parseInt(str[i]);
            sum += weight*digit;
            weight--;
          }
          check = (11 - (sum % 11)) % 11
          if (check === 10) {
            check = 'X';
          }
          return (check === str[str.length-1].toUpperCase());
        }
        e.preventDefault();
      }
    }
  }
})
