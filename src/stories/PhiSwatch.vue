<template>
  <div class="swatch">
    <div class="swatch--block" v-for="color in colors" :style="{ 'background-color': color.hexCode }">
      <div>{{ color.number }}</div>
      <div>{{ color.hexCode }}</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.swatch {
    display: flex;
    flex-direction: row;

    &--block {
        display: inline-block;
        width: 100px;
        height: 100px;
    }
}
</style>
<script setup lang="ts">
import { computed } from 'vue'
const { baseColor } = defineProps<{ baseColor: string }>()

const rgbStringToArray = (rgbString: string) => [
  parseInt(rgbString.slice(1, 3), 16),
  parseInt(rgbString.slice(3, 5), 16),
  parseInt(rgbString.slice(5, 7), 16)
]

const rgbArrayToString = (rgbArray: number[]) =>
  `#${rgbArray.map((c) => c.toString(16).padStart(2, '0')).join('')}`

// for a given base color
const colors = computed<{ number: string; hexCode: string }[]>(() => {
  const baseColorArray = rgbStringToArray(baseColor)
  return [
    {
      number: '500',
      hexCode: rgbArrayToString(baseColorArray)
    }
  ]
})
</script>
