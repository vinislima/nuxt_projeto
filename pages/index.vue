<template>
  <div>
    <banner />
    <Bookform />
  </div>
</template>

<script>
import bookform from '~/components/Bookform'
import banner from '~/components/banner'

export default {
  name: 'IndexPage',
  components: {
    bookform,
    banner
  }

}
</script>
