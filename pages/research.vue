<template>
  <div id="sectionMain" class="mainFrame research">
    <div id="wrapper">
      <h1>{{ $t('research_title') }}</h1>
      <div
        class="researchContent"
        v-html="$md.render(md)"
      >
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  name: 'ResearchPage',
  async asyncData(ctx) {
    const { i18n } = ctx.app
    const localeMap = {
      ja: 'ja-JP',
      en: 'en-US',
    }
    return await client
      .getEntries({
        content_type: 'page',
        'fields.title': i18n.locale === 'en' ? 'Research' : '研究',
        locale: localeMap[i18n.locale],
        limit: 1,
      })
      .then((data) => {
        return { md: data.items[0].fields.body }
      })
      .catch((error) => {
        console.error(error)
      })
  },
  head() {
    return {
      title: this.$t('research'),
    }
  }
}
</script>

<style lang="sass">
.researchContent
  .iframeWrapper
    width: 100%
    max-width: 1000px
    margin: 0 auto
    padding-bottom: 48.8%
    position: relative
    iframe
      width: 100%
      height: 100%
      position: absolute
      top: 0
      left: 0
</style>
