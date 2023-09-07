<template>
  <div class="pagination-wrapper">
    <span
      v-if="currentpage !== 1"
      class="arrow pre"
      @click="fetchPost(1)"
    >&lt;&lt;</span>
    <ul v-if="totalpage <= 5">
      <li
        v-for="index in totalpage"
        :key="index"
        :class="['pagination', isCurrentPage(index)]"
        @click="fetchPost(index)"
      >
        {{ index }}
      </li>
    </ul>
    <ul v-else>
      <li
        v-for="index in 5"
        :key="index"
        :class="['pagination', isCurrentPage(currentpageRange[0] - 1 + index)]"
        @click="fetchPost(currentpageRange[0] - 1 + index)"
      >
        {{ currentpageRange[0] - 1 + index }}
      </li>
    </ul>
    <span
      v-if="currentpage !== Number(totalpage)"
      class="arrow next"
      @click="fetchPost(totalpage)"
    >&gt;&gt;</span>
  </div>
</template>

<script>
export default {
  name: 'PaginationElements',
  props: {
    totalEntry: {
      type: Number || null || undefined,
      required: true,
    },
    countPerPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentpageRange: []
    }
  },
  computed: {
    totalpage() {
      return Math.ceil(this.totalEntry / this.countPerPage)
    },
    currentpage: {
      get() {
        return this.$route.query.page ?? ''
      },
      set(page) {
        return page
      },
    },
  },
  methods: {
    isCurrentPage(index) {
      if (Number(index) === Number(this.currentpage)) {
        return 'active'
      }
    },
    changeCurrentPageRange() {
      const currentpage = this.currentpage
      let currentpageRange = this.currentpageRange
      if (this.totalpage <= 5) {
        const totalPage = this.totalpage
        currentpageRange = [1, totalPage]
      } else if (this.currentpage === 1 || this.currentpage === 2) {
        currentpageRange = [1, 5]
      } else if (
        this.currentpage === this.totalpage ||
        this.currentpage === this.totalpage - 1
      ) {
        currentpageRange = [this.totalpage - 4, this.totalpage]
      } else {
        currentpageRange = [currentpage - 2, currentpage + 2]
      }
      return currentpageRange
    },
    changeCurrentPage(page) {
      this.currentpage = page
      this.changeCurrentPageRange()
    },
    fetchPost(page) {
      this.$router.push(this.localePath(`/news?page=${page}`))
    },
  },
}
</script>

<style lang="sass">
.pagination-wrapper
  display: flex
  justify-content: center
  align-items: center
  margin-top: 50px
  > .arrow
    cursor: pointer
  > ul
    display: flex
    justify-content: center
    margin: 0 20px
    padding: 0
    > .pagination
      width: 25px
      height: 25px
      border-radius: 3px
      font-size: 14px
      font-weight: bold
      padding-top: 1px
      color: #999999
      display: flex
      align-items: center
      justify-content: center
      margin-right: 14px
      &.active
        border-width: 1px
        color: #0b5fa5
        border-color: #0b5fa5
      &:hover
        cursor: pointer
        color: #fff
        background-color: #0b5fa5
      &:last-of-type
        margin-right: 0
</style>
