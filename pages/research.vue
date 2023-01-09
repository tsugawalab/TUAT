<template>
  <div id="sectionMain" class="mainFrame research">
    <div id="wrapper">
      <h1>{{ $t('research_title') }}</h1>
      <div class="iframeWrapper">
        <iframe src="https://onedrive.live.com/embed?resid=F1D3FF272E1AA460%21335&amp;authkey=!ALpsuOQPuSypfN8&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=0" frameborder="0">これは、<a target="_blank" href="https://office.com/webapps">Office</a> の機能を利用した、<a target="_blank" href="https://office.com">Microsoft Office</a> の埋め込み型のプレゼンテーションです。</iframe>
      </div>
      <h1>Oral talks</h1>
      <h2>By Hiroshi Tsugawa</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResearchPage',
  head() {
    return {
      title: this.$t('member'),
    }
  }
}
</script>

<style lang="sass" scoped>
.iframeWrapper
  width: 100%
  max-width: 1000px
  margin: 0 auto
  padding-bottom: 48.8%
  position: relative
  > iframe
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
</style>
