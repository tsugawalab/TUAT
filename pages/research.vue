<template>
  <div id="sectionMain" class="mainFrame research">
    <div id="wrapper">
      <h1>生命工学における研究のあり方（持論）</h1>
      <div class="slider-wrapper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide, index) in photo.fields.photo" :key="slide.sys.id">
            <img :src="slide.fields.file.url" :alt="slide.fields.title" class="img" />
            <div class="pageInfo">
              <div class="title" data-swiper-parallax="-100">SLIDE #{{ index + 1 }}</div>
              <div class="currentPage" data-swiper-parallax="-360">{{ index + 1 }} / {{ photo.fields.photo.length }}</div>
            </div>
          </swiper-slide>
        </swiper>
        <div
          slot="button-prev"
          class="swiper-button-prev"
        ></div>
        <div
          slot="button-next"
          class="swiper-button-next"
        ></div>
      </div>
      <h1>Oral talks</h1>
      <h2>By Hiroshi Tsugawa</h2>
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  name: 'ResearchPage',
  async asyncData() {
    return await client
      .getEntries({
        content_type: 'photos',
        limit: 1,
      })
      .then((data) => {
        return { photo: data.items[0] }
      })
      .catch((error) => {
        console.error(error)
      })
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  head() {
    return {
      title: this.$t('member'),
    }
  }
}
</script>

<style lang="sass" scoped>
.slider-wrapper
  position: relative
  .img
    width: 100%
    height: 100%
    object-fit: cover
  .pageInfo
    display: flex
    font-family: 'Anton', sans-serif
    justify-content: space-between
    position: absolute
    top: 20px
    left: 50%
    width: 95%
    transform: translateX(-50%)
    font-weight: bold
    .title
      font-size: 30px
    .currentPage
      font-size: 16px
</style>
