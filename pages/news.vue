<template>
  <div id="sectionMain" class="mainFrame news">
    <div class="container">
      <div class="row">
        <div class="col span_24">
          <div class="boxPublications">
            <div class="labelMenuIcon-publication">
              <span class="iconAwesome-Menu">&#xf4ad;</span>
            </div>
            <div class="labelMenuTitle">News & Events</div>
            <SingleNews v-if="$route.query.id" />
            <template v-else>
              <ul class="news_wrapper">
                <li v-for="(news, index) in newsList" :key="news.sys.id" class="news">
                  <NewsList :news="news" :is-last="index + 1 === POSTS_PER_PAGE" />
                </li>
              </ul>
              <PaginationElements :total-entry="totalEntry" :count-per-page="POSTS_PER_PAGE" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsList from "~/components/NewsList.vue";
import SingleNews from "~/components/SingleNews.vue";
import PaginationElements from "~/components/PaginationElements.vue";
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
export const POSTS_PER_PAGE = 15;

export default {
  name: 'NewsPage',
  components: { NewsList, SingleNews, PaginationElements },
  middleware({ route, redirect }){
    if (!route.query.id && !route.query.page) redirect('/news?page=1')
  },
  async asyncData(ctx) {
    if (ctx.route.query.id) return
    const { i18n } = ctx.app
    const localeMap = {
      ja: 'ja-JP',
      en: 'en-US',
    }
    return await client
      .getEntries({
        content_type: 'news',
        locale: localeMap[i18n.locale],
        order: "-fields.publishDate",
        limit: POSTS_PER_PAGE,
        skip: (Number(ctx.route.query.page) - 1) * POSTS_PER_PAGE
      })
      .then((data) => {
        return { newsList: data.items, totalEntry: data.total }
      })
      .catch((error) => {
        console.error(error)
      })
  },
  data() {
    return {
      current_posts: {},
      POSTS_PER_PAGE
    };
  },
  head() {
    return {
      title: this.$t('news'),
    }
  },
  watchQuery: ['page']
}
</script>

<style lang="sass" scoped>
.news_wrapper
  min-height: calc(100vh - 510px)
</style>
