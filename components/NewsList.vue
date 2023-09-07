<template>
  <article>
    <NuxtLink
      v-if="news"
      class="single-news"
      :class="{ 'single-news-last': isLast }"
      :to="localePath({ path: '/news', query: { id: news.sys.id } })"
    >
      <span class="date">{{ formatDate(news.fields.publishDate) }}</span>
      <CategoryTag class="category" :category="news.fields.category" />
      <span class="title">{{ news.fields.title }}</span>
    </NuxtLink>
  </article>
</template>

<script>
import CategoryTag from "~/components/categoryTag.vue";
export default {
  components: { CategoryTag },
  props: {
    news: {
      type: Object,
      required: true
    },
    isLast: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    formatDate(date) {
      const dateObj = new Date(date)
      let format = 'Y.M.D'
      format = format.replace(/Y/g, dateObj.getFullYear())
      format = format.replace(/M/g, dateObj.getMonth() + 1)
      format = format.replace(/D/g, dateObj.getDate())
      return format
    },
  },
}
</script>

<style lang="sass" scoped>
$COLOR_EVENT: #eb5976
$COLOR_NEWS: #57aade
$COLOR_ACHIEVEMENT: #5db53e

.single-news
  display: grid
  grid-template-columns: 100px 110px 1fr
  padding: 10px 0
  border-top: 1px solid rgba(0, 0, 0, .1)
  text-decoration: none
  color: #333
  &-last
    border-bottom: 1px solid rgba(0, 0, 0, .1)
  &:hover
    background-color: rgba(11, 95, 165, .05)
.date
  margin-left: 10px
  display: flex
  align-items: center
  height: 24px
  font-size: 14px
.category
  width: 90%
  margin-top: 2px
  &.event
    color: $COLOR_EVENT
    border: 1px solid $COLOR_EVENT
  &.news
    color: $COLOR_NEWS
    border: 1px solid $COLOR_NEWS
  &.achievement
    color: $COLOR_ACHIEVEMENT
    border: 1px solid $COLOR_ACHIEVEMENT
  &:hover
    color: #fff
    &.event
      background-color: $COLOR_EVENT
    &.news
      background-color: $COLOR_NEWS
    &.achievement
      background-color: $COLOR_ACHIEVEMENT
.title
  margin-left: 10px
</style>
