<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="sass">
  .mainFrame
    font-family: 'YuGothic'
    &.member,
    &.publication,
    &.news,
    &.lecture
      max-width: 1000px
      margin: 0 auto
  table
    width: 100%
    border-collapse: collapse
    border-spacing: 0
    th
      padding: 20px 10px
      font-family: "PT Sans Bold"
      border-bottom: 3px solid #f8fbf8
    tbody
      tr:nth-child(2n)
        background: #f8fbf8
      td
        padding: 10px
  ol
    li
      list-style: decimal
      margin-bottom: 1em
</style>
