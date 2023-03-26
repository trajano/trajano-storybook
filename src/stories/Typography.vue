<template>
  <div class="font-sans text-base" :class="classes">
    This is the lowest level of the organization. At this level I specify the font sizes, line
    heights in `rem` units. Spacing is in `px` (for now until I confirm).

    <p>I chose <span class="font-sans--raleway">Raleway</span> the default text font. Currently selected font is {{ fontFamily }}</p>
    <p>
      I use golden ratios everywhere for fun. The line height is computed such that (font-size +
      gap) == line height, font size being long side, gap being short side and line height being
      total length.
    </p>

    <p>My ideal font requirements is as follows:</p>
    <ul>
      <li><a href="https://fonts.google.com/knowledge/introducing_type/introducing_variable_fonts">Variable font</a></li>
      <li>sans-serif base</li>
      <li>rounded strokes</li>
      <li>single-storey lowercase a</li>
      <li>single-storey lowercase g</li>
      <li>tailed lowercase t</li>
      <li>Serifed uppercase I</li>
      <li>Serifed lower case l</li>
      <li>Dotted or slashed 0</li>
      <li><i>Natural italics</i></li>
      <li><b>Natural bold</b></li>
    </ul>

    <div class="text-base">text base. This is targetted as 16px.</div>
    <div class="text-lg">
      text lg. This is computed as a next jump up based on the golden ratio such that the font size
      is φ * base font size
    </div>
    <div class="text-xl">text xl. This is computed as the next jump from lg</div>
    <div class="text-xxl">text xxl. This is computed as the next jump from xl</div>
    <div class="text-sm">
      text sm. This is targetted as 14px font for the mobile screen. So the rems are computed as
      such
    </div>
    <div class="text-xs">text xs. This is targetted as 12px font for the mobile screen.</div>
    <div class="text-xxs">
      text xxs. This is targetted as 10px font for the mobile screen and has limited use. Primarily
      for hiding fine print if you have a sneaky legal team... note try not to have a sneaky legal
      team.
    </div>
    <p>
      line heights are computed based on the golden ratio such that font-size/gap == phi but capped
      at 1rem + font-size
    </p>
  </div>
</template>
<style scoped lang="scss">
@import '../text.scss';
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
  { fontFamily: 'pt-sans' }
)
const classes = computed(() => ({
  ['font-sans--' + props.fontFamily]: true
}))
</script>
