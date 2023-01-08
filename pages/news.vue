<template>
  <div id="sectionMain" class="mainFrame news">
    <!-- Publications -->
    <div class="container">
      <div class="row">
        <div class="col span_24">
          <div class="boxPublications">
            <div class="labelMenuIcon-publication">
              <span class="iconAwesome-Menu">&#xf4ad;</span>
            </div>
            <div class="labelMenuTitle">News & Events</div>
            <div v-html="$md.render(md)"></div>
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
  name: 'NewsPage',
  async asyncData(ctx) {
    const { i18n } = ctx.app
    const localeMap = {
      ja: 'ja-JP',
      en: 'en-US',
    }
    return await client
      .getEntries({
        content_type: 'page',
        'fields.title': 'ニュース',
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
      title: this.$t('news'),
    }
  },
}
</script>
