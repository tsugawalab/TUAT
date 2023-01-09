<template>
  <div id="sectionMain" class="mainFrame member">
    <div class="labelMenuIcon-publication">
      <span class="iconAwesome-Menu">&#xf2b9;</span>
    </div>
    <div v-html="$md.render(md)"></div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  name: 'MemberPage',
  async asyncData(ctx) {
    const { i18n } = ctx.app
    const localeMap = {
      ja: 'ja-JP',
      en: 'en-US',
    }
    return await client
      .getEntries({
        content_type: 'page',
        'fields.title': i18n.locale === 'en' ? 'Member' : 'メンバー',
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
      title: this.$t('member'),
    }
  },
}
</script>
