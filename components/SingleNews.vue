<template>
  <div class="single_news_wrapper" :class="{ '-loading': !article }">
    <article v-if="article" class="single_news">
      <h1 class="news_title">{{ article.fields.title }}</h1>
      <div class="meta_info">
        <p class="date">{{ formatDate(new Date(article.fields.publishDate)) }}</p>
        <CategoryTag class="category" :category="article.fields.category" />
      </div>
      <div v-html="$md.render(article.fields.body)" class="content"></div>
    </article>
    <LoadingIcon v-else />
  </div>
</template>

<script>
import CategoryTag from "~/components/categoryTag.vue";
import LoadingIcon from "~/components/LoadingIcon.vue";
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  components: { CategoryTag, LoadingIcon },
  data() {
    return {
      article: null
    }
  },
  beforeCreate() {
    const localeMap = {
      ja: 'ja-JP',
      en: 'en-US',
    }
    return client
      .getEntries({
        content_type: 'news',
        locale: localeMap[this.$i18n.locale],
        limit: 1,
        "sys.id": this.$route.query.id
      })
      .then((data) => {
        this.article = data.items[0]
      })
      .catch((error) => {
        console.error(error)
      })
  },
  methods: {
    formatDate(date) {
      let format = "Y.M.D";
      format = format.replace(/Y/g, date.getFullYear());
      format = format.replace(/M/g, date.getMonth() + 1);
      format = format.replace(/D/g, date.getDate());
      return format;
    }
  }
};
</script>

<style lang="sass">
.single_news_wrapper
  min-height: calc(100vh - 510px)
  &.-loading
    display: flex
    align-items: center
    justify-content: center
article.single_news
  margin: 11px auto 20px
  > .news_title
    font-size: 22px
    display: block
    text-align: center
    font-weight: bold
    text-align: left
    margin: 35px auto 0
    line-height: 32px
  > .meta_info
    height: 42px
    display: flex
    align-items: center
    border-top: solid 1px #b3b3b3
    margin-top: 6px
    > .date
      font-size: 13px
      padding: 0
    > .category
      width: 100px
      margin-left: 10px
  > .content
    font-size: 15px
    line-height: 30px
    h1, h2
      font-size: 16px
      font-weight: bold
      padding: 10px 15px
      border-radius: 5px
      margin-bottom: 13px
      letter-spacing: 2px
      margin-top: 20px
    h1
      background-color: #0b5fa5
      color: #fff
    h2
      background-color: #f0ecdd
      color: #0b5fa5
    h3
      font-size: 14px
      font-weight: bold
      padding: 0 6px
      position: relative
      display: inline-block
      margin-bottom: 12px
      &:after
        content: ''
        width: 100%
        height: 11px
        background-color: #0b5fa5
        opacity: .15
        position: absolute
        left: 0
        bottom: 10%
    p
      padding-left: 0
      margin-bottom: 20px
      strong
        font-weight: bold
      em
        font-style: italic
      img
        max-width: 90%
        margin: 10px auto
    figure
      margin: 20px 0
      max-width: 90%
      img
        width: 100%
      figcaption
        text-align: center
        margin-top: -10px
        font-size: 12px
    blockquote
      margin: 15px 0
      padding: 5px 0 5px 10px
      border-left: 2.5px solid #0b5fa5
      p
        margin: 0
    ul,ol
      margin-bottom: 20px
      line-height: 20px
      font-size: 15px
      list-style: none
      margin-left: 21px
      li
        margin-bottom: 12px
    ul
      > li
        &:before
          content: '・'
          font-weight: bold
          margin-left: -15px
    ol
      > li
        position: relative
        &:before
          position: absolute
          top: 0px
          left: -21px
          counter-increment: orderd-list
          content: counter(orderd-list)
          font-size: 10px
          font-weight: bold
          border-radius: 100px
          margin-right: 5px
          display: inline-block
          text-align: center
          width: 18px
          height: 18px
          line-height: 18px
    > ol
      counter-reset: orderd-list
      > li
        &:before
          background-color: #0b5fa5
          color: #fff
        > ol
          counter-reset: inner-orderd-list
          margin-top: 5px
          > li
            &:before
              counter-increment: inner-orderd-list
              content: counter(inner-orderd-list)
              border: 1px solid #0b5fa5
              background-color: #fff
              color: #0b5fa5
              font-weight: bold
            > ol
              counter-reset: grand-child-orderd-list
              margin-top: 8px
              margin-left: 24px
              > li
                &:before
                  counter-increment: grand-child-orderd-list
                  content: counter(grand-child-orderd-list)
                  color: #0b5fa5
                  font-weight: bold
                  font-size: 14px
                  border-radius: 0
                  border-right: 1px solid #0b5fa5
                  left: -25px
          ol, ul
            margin-top: 5px
    a
      color: black
      text-decoration: underline
    table
      border: 1px solid #0b5fa5
      thead
        border-bottom: .5px solid #0b5fa5
        tr
          th
            color: #0b5fa5
            font-size: 12px
            font-weight: bold
            padding: 10px 15px
            background-color: rgba(21, 123, 133, .05)
      tbody
        tr
          border-bottom: .5px solid #999999
          &:last-of-type
            border: none
          td
            padding: 8px 15px
            font-size: 14px
            min-width: 100px
</style>
