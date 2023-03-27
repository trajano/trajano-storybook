<template>
  <article class="font-sans" :class="{ 'mode--light': lightMode, 'mode--dark': darkMode }">
    <p>
      For colors I use φ as well. But primarilly the objective is to reduce blue on the background.
    </p>
    <p>
      So I am thinking the color base being white at (1.0, 1.0, 1.0) I would do something like (R +
      G) : B would be φ. But that turned out to be too yellowish for me. So I made a generalized
      function for it which takes in powers of φ.
    </p>
    <p>Some swatches</p>
    <div class="swatch-box">
      <div
        v-for="a in [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        class="swatch"
        :class="{ [`swatch--background-${a}`]: true }"
      >
        <span class="text-xs">{{ `background${a}` }}</span>
      </div>
    </div>
    <p>
      Interesting negative powers have no effect. In the end I chose a power of 5. Why 5? it's not
      too yellow but it's also not too white. It gives a warmer feel but for my eyes. Again this is
      opinionated to what I want so don't try to derive much into it. I do like the fact that it is
      a prime number, one of the factors in the φ computation and it's a midpoint between 0 to 9.
    </p>

    <p>
      I am intentionally not doing the CSS naming of colors for now. I am thinking that we simply
      specify base palette colors and apply functions on top of it. Plus it looks weird when I see
      it in NativeBase and Tailwind.
    </p>

    <p>As for color areas, the following will be defined.</p>
    <ul>
      <li>background</li>
      <li>
        background--darker, this is for scenarios where we want to have cards... which BTW I am
        thinking of avoiding. They take up too much screen real estate, but may be okay for desktop
        that has more space but on mobile and tablet I find it just takes too much space for little
        benefit.
      </li>
      <li>
        text, well this will either black or white depending on dark or light mode. Also my
        experiment would be to avoid drawing too much attention to the controls because generally I
        want the focus to be on the fields rather than the buttons. Then again the placement of the
        submit buttons may be changed so it's in a fixed spot like the good old UI days because they
        really shouldn't be part of the form proper. Like I am thinking of having an action area on
        desktop devices it will be at the bottom on mobile it will be on the top (or maybe both at
        the bottom just to defy iOS standards). Also I don't intend to follow any existing
        conventions anyway, this is an opinionated experiment afterall.
      </li>
    </ul>
  </article>
</template>
<style scoped lang="scss">
@use 'sass:math';
@import '../text.scss';
@import '../color.scss';
$background-10: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, 10))));
$background-9: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, 9))));
$background-8: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, 8))));
$background-7: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, 7))));
$background-6: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, 6))));
$background-5: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, 5))));
$background-4: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, 4))));
$background-3: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, 3))));
$background-2: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, 2))));
$background-1: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, 1))));
$background-0: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, 0))));
$background--1: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, -1))));
$background--2: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, -2))));
$background--3: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, -3))));
$background--4: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, -4))));
$background--5: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, -5))));
$background--6: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, -6))));
$background--7: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, -7))));
$background--8: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, -8))));
$background--9: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, -9))));
article {
  background-color: rgb(255 * 1, 255 * 1, 255 * (1 - 1/ (math.pow($phi, 5))));
}
.swatch-box {
  display: flex;
  flex-wrap: wrap;

  .swatch {
    width: 100px;
    height: 100px;
    margin: 10px;
    &--background-9 {
      background-color: $background-9;
    }
    &--background-8 {
      background-color: $background-8;
    }
    &--background-7 {
      background-color: $background-7;
    }
    &--background-10 {
      background-color: $background-10;
    }
    &--background-6 {
      background-color: $background-6;
    }
    &--background-5 {
      background-color: $background-5;
    }
    &--background-4 {
      background-color: $background-4;
    }
    &--background-3 {
      background-color: $background-3;
    }
    &--background-2 {
      background-color: $background-2;
    }
    &--background-1 {
      background-color: $background-1;
    }
    &--background--6 {
      background-color: $background--6;
    }
    &--background--5 {
      background-color: $background--5;
    }
    &--background--4 {
      background-color: $background--4;
    }
    &--background--3 {
      background-color: $background--3;
    }
    &--background--2 {
      background-color: $background--2;
    }
    &--background--1 {
      background-color: $background--1;
    }
    &--background-0 {
      background-color: $background-0;
    }
  }
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
