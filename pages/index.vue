<template>
  <div>
    <Bookform />
    <cadastro-livro />
  </div>
</template>

<script>
import bookform from '~/components/Bookform'
import cadastroLivro from '~/components/CadastroLivro'

export default {
  name: 'IndexPage',
  components: {
    bookform,
    cadastroLivro
  }

}
</script>
