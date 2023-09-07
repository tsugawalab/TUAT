<template>
  <NuxtLink
    class="category"
    :class="category.fields.id"
    :to="localePath(`/category?categoryId=${category.sys.id}&page=1`)"
  >{{ category.fields.name }}</NuxtLink>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true
    },
  },
}
</script>

<style lang="sass" scoped>
$COLOR_EVENT: #eb5976
$COLOR_NEWS: #57aade
$COLOR_ACHIEVEMENT: #5db53e

.category
  text-align: center
  border-radius: 15px
  font-size: 13px
  height: 22px
  display: flex
  align-items: center
  justify-content: center
  text-decoration: none
  background-color: #fff
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
