<template lang="pug">
.instant-search
  ais-instant-search(
    :search-client="searchClient"
    :index-name="lang"
  )
    ais-search-box.box
      template(slot-scope="{ currentRefinement, refine }")
        Input(
          suffix="md-search"
          @on-focus="focus"
          @on-blur="blur"
          v-model="currentRefinement"
          @input="refine($event)"
        )
    ais-state-results
      template(slot-scope="{ query }")
        ais-hits.hits(v-show="isFocused && query.length > 1")
          template(slot-scope="{ items }")
            router-link(
              v-for="(item, i) in items"
              :key="i"
              :to="item.path + searchService.getHash(item.text)"
              :tabindex="i"
            )
              pre.hit
                | {{ item.text }}
            img.algolia(:src="algoliaLogo" alt="Algolia")
</template>


<script>
import algoliasearch from 'algoliasearch/lite';
import focusTimeoutMixin from '../utils/focus-timeout.mixin';
import algoliaLogo from '../assets/images/algolia.svg'

export default {
  mixins: [focusTimeoutMixin(500)],
  inject: ['langService', 'searchService'],
  data() {
    return {
      searchClient: algoliasearch(
        '0S8ITD2OZ2',
        '850c7c3f1bdf218a069f39a5ec4dcc70'
      ),
      algoliaLogo,
      lang: this.langService.lang
    };
  },
  created() {
    this.langService.$on('setLocale', l => this.lang = l)
  }
}
</script>


<style lang="sass">
@import '@/assets/styles/media.sass'

.instant-search
  .box
    margin: 0 1em
  .hits
    line-height: normal
    background: white
    box-shadow: 0 3px 3px rgba(0,0,0,0.2)
    max-height: calc(100vh - 6em)
    width: 240px
    overflow-y: auto
    z-index: 1100
    +phone
      position: absolute
      left: 20%
      width: 80%
    .hit
      padding: 1em
      overflow: hidden
      cursor: pointer
      text-overflow: ellipsis
      border-bottom: 1px solid #eee
      margin: 0
      &:hover
        transition: .5s
        background: #eef
  .algolia
    width: 55%
    padding: 5%
    float: right
</style>
