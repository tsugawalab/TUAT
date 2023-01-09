<template>
  <div id="sectionMain" class="mainFrame publication">
    <!-- Publications -->
    <div class="container">
      <div class="row">
        <div class="col span_24">
          <div class="boxPublications">
            <div class="labelMenuIcon-publication">
              <span class="iconAwesome-Menu">&#xf15c;</span>
            </div>
            <div class="labelMenuTitle">
              Publications (also see
              <a href="https://scholar.google.com/citations?user=Pe7BrZwAAAAJ" target="_blank">Google Scholoar Citations</a>)
            </div>
              <div class="publication_content" v-html="$md.render(md)"></div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  name: 'PublicationPage',
  async asyncData(ctx) {
    const { i18n } = ctx.app
    const localeMap = {
      ja: 'ja-JP',
      en: 'en-US',
    }
    return await client
      .getEntries({
        content_type: 'page',
        'fields.title': i18n.locale === 'en' ? 'Publication' : '研究成果',
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
      title: this.$t('publication'),
    }
  },
}
</script>

<style lang="sass">
  .publication_content
    background-color: #f8fbf8
    padding: 20px 30px 20px 20px
    margin-top: 20px
</style>
