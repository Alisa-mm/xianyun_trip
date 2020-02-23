<template>
  <div>
    <el-row>
      <el-table :data="data"
                style="width: 100%">
        <el-table-column prop="name"
                         label="价格来源"
                         width="420">
        </el-table-column>
        <el-table-column prop="bestType"
                         label="低价房型"
                         width="420">
        </el-table-column>
        <el-table-column label="最低价格/每晚"
                         width="160">
          <template slot-scope="scope">
            <div v-html="formatPrice(scope.row)"></div>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    newData () {
      return res
    }
  },
  methods: {
    formatPrice (row) {
      console.log(row)
      return row.price + '￥'
    }
  }
}
</script>

<style lang="less" scoped>
</style>
