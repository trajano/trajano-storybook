<template>
<article>
<p>For colors I use φ as well.  But primarilly the objective is to reduce blue on the background.</p>
<p>So I am thinking the color base being white at (1.0, 1.0, 1.0) I would do something like 
  (R + G) : B would be φ.  But that turned out to be too yellowish for me.</p>
</article>
</template>
<style scoped lang="scss">
@import '../text.scss';
article {
  background-color: rgb(255 * 1.0, 255 * 1.0, 255 * (1.0 - 1.0/(math.pow($phi ,4))));
}
</style>
<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    fontFamily?:
      | 'pt-sans'
      | 'ibm-plex-sans'
      | 'lato'
      | 'lexend'
      | 'noto-sans'
      | 'nunito-sans'
      | 'open-sans'
      | 'raleway'
      | 'roboto'
      | 'source-code-pro'
      | ''
  }>(),
  { fontFamily: '' }
)
const classes = computed(() => ({
  ['font-sans--' + props.fontFamily]: true
}))
</script>
