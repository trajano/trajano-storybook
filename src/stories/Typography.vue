<template>
  <div class="font-sans text-base" :class="classes">
    This is the lowest level of the organization. At this level I specify the font sizes, line
    heights in `rem` units. Spacing is in `px` (for now until I confirm).

    <p>
      I chose <b><span class="font-sans--nunito-sans">Nunito Sans</span></b> the default text font.
      I chose this because it was a variable font and it had a lighter feel than the other fonts on
      a high DPI (i.e. 4K) display and everything was in line.
      <span v-if="fontFamily">Currently selected font is {{ fontFamily }}.</span>
    </p>
    <p>
      I use golden ratios everywhere for fun. The line height is computed such that (font-size +
      gap) == line height, font size being long side, gap being short side and line height being
      total length.
    </p>

    <p>My ideal font requirements is as follows:</p>
    <ul>
      <li>
        <a href="https://fonts.google.com/knowledge/introducing_type/introducing_variable_fonts"
          >Variable font</a
        >. Variable fonts are important when it comes to the high DPI screens, without it the text
        would look unnatural and have disproportional thickness (you can tell with
        <span class="font-sans--pt-sans">PT Sans</span>).
      </li>
      <li>sans-serif base</li>
      <li>
        rounded terminals. Just my preference, I find it makes the font look friendlier. Like
        <span class="font-sans--comic-neue">Comic Neue</span>.
      </li>
      <li>
        No descenders or ascendres due to character group. Raleway shifts
        <span class="font-sans--raleway">1234ABC</span> which is why it had lost it's default
        position.
      </li>
      <li>single-storey lowercase a. Just my preference, I like simpler looking text.</li>
      <li>single-storey lowercase g. Just my preference, I like simpler looking text.</li>
      <li>
        tailed lowercase t. Having the tails makes the letters tie better together when you're
        glancing.
      </li>
      <li>Serifed uppercase I. This helps distinguish it from lower case l.</li>
      <li>Serifed or swashed lower case l. This helps distinguish it from upper case I.</li>
      <li>
        Serifed or swashed lower case i. This gives the letter a little more width to make it look
        friendlier.
      </li>
      <li>Swashed lower case t.</li>
      <li>Dotted or slashed 0. This helps distinguish it from the letter O.</li>
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
    <h2>Rankings</h2>
    <p>
      To my knowledge there is no known font that would satisfy all my criteria that is not
      monospaced. So here are the rankings with what I did see.
    </p>
    <ol>
      <li>
        Nunito Sans, wins just by a hair, it has the single-storey g and slightly more default
        spacing making it more comfortable than...
      </li>
      <li>
        Source Sans Pro, this just had a tighter spacing which could be good in a way since your
        eyes would travel less to see more content so kind of torn between Source Sans Pro and
        Nunito Sans in the end.
      </li>
      <li>
        Raleway was actually my favorite except for that one fatal flaw where they used decender
        effect on their numbers thus impacting the legibility. I really liked it in that it's
        legible at their default weight and their default weight looks pretty light.
      </li>
      <li>Comic Neue was my second favorite except it is not a variable font.</li>
      <li>
        Lexend, I have to admit I like for the legibility, but it just feels heavy on the screen.
      </li>
      <li>
        IBM Plex Sans, Lato, Montserrat, Noto Sans, Open Sans, Roboto, just didn't have serifs on the upper case
        I and lower case l and in the end looked too plain for me. They may be good as an alternate
        header font, but I am trying to limit the number of fonts on this design to just one.
      </li>
      <li>Recursive had no natural italic and was just spaced too wide and the default text was heavy.</li>
    </ol>
  </div>
</template>
<style scoped lang="scss">
@import '../text.scss';
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Lexend:wght@200;300;400;700&family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Recursive:wght@400;700&display=swap');

.font-sans--montserrat {
  font-family: Montserrat, sans-serif;  
}
.font-sans--pt-sans {
  font-family: 'PT Sans', sans-serif;
}
.font-sans--recursive {
  font-family: 'Recursive', sans-serif;
}
.font-sans--comic-neue {
  font-family: 'Comic Neue', sans-serif;
}

.font-sans--lexend {
  font-family: 'Lexend', sans-serif;
}
.font-sans--ibm-plex-sans {
  font-family: 'IBMPlexSans', sans-serif;
}
.font-sans--lato {
  font-family: 'Lato', sans-serif;
}
.font-sans--noto-sans {
  font-family: 'Noto Sans', sans-serif;
}
.font-sans--nunito-sans {
  font-family: 'Nunito Sans', sans-serif;
}
.font-sans--open-sans {
  font-family: 'Open Sans', sans-serif;
}
.font-sans--raleway {
  font-family: 'Raleway', sans-serif;
}
.font-sans--roboto {
  font-family: 'Roboto', sans-serif;
}
.font-sans--source-sans-pro {
  font-family: 'Source Sans Pro', sans-serif;
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
      | 'comic-neue'
      | 'montserrat'
      | 'noto-sans'
      | 'nunito-sans'
      | 'open-sans'
      | 'raleway'
      | 'recursive'
      | 'roboto'
      | 'source-sans-pro'
      | ''
  }>(),
  { fontFamily: '' }
)
const classes = computed(() => ({
  ['font-sans--' + props.fontFamily]: true
}))
</script>
