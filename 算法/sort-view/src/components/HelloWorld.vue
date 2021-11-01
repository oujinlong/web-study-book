<template>
  <div>
    <div class="outer-container">
<!--      <div v-for="(item, index) in list" :key="index" :style="`background-color: red; width: 30px; height: ${k * item}px; margin-left: 2px`">{{item}}</div>-->
      <div v-for="(item, index) in list" :key="index" :style="`background-color: red; width: 10px; height: ${k * item}px; margin-left: 2px`"></div>
    </div>
    <div class="m-container">
      <el-button type="primary" size="mini" v-for="(item, index) in methodsList" :key="index" @click="onSort(item.id)">{{item.title}}</el-button>
    </div>
  </div>
</template>

<script>
const interval = 500;
export default {
  name: 'HelloWorld',
  data () {
    return {
      k: 0.5,
      list: [],
      methodsList: [
        {
          title: '选择排序', id: 1,
        },
        {
          title: '插入排序', id: 2,
        },
        {
        title: '冒泡排序', id: 3,
        },
        {
          title: '希尔排序', id: 4
        },
        {
          title: '快速排序', id: 5
        }
      ],
      orList: []
    }
  },
  mounted () {
    this.orList = this.generateList(180, 800)
    this.list = [...this.orList]
  },
  methods: {
    generateList (count, max) {
      const res = []
      for (let i = 0 ; i < count; i++) {
        res.push(parseInt(Math.random()*(max+1),10))
      }
      return res
    },
    onSort (id) {
      this.list = [...this.orList]
      if (id === 1) {
        this.chooseSort(this.list)
      } else if (id === 2) {
        this.insertSort(this.list)
      } else if (id === 3) {
        this.bubbleSort(this.list)
      } else if (id === 4) {
        this.shellSort(this.list)
      } else if (id === 5) {
        // 快速排序
        // this.list = this.quickSort(this.list)
      }
    },
    chooseSort: function (arr) {
      for (let i = 0; i < arr.length - 1; i++) {
        setTimeout(() => {
          let minIndex = i
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
              minIndex = j
            }
          }
          let temp = arr[i]
          arr[i] = arr[minIndex]
          arr[minIndex] = temp
          this.$forceUpdate()
        }, (i + 1) * interval)
      }
      return arr
    },
    insertSort: function (arr) {
      for (let i = 1; i < arr.length; i++) {
        setTimeout(() => {
          let insertNumber = arr[i]
          let insertIndex = i - 1
          while (insertIndex >= 0 && arr[insertIndex] > insertNumber) {
            arr[insertIndex + 1] = arr[insertIndex]
            insertIndex--
          }
          arr[insertIndex + 1] = insertNumber
          this.$forceUpdate()
        }, (i + 1) * interval)
      }
      return arr
    },
    bubbleSort: function (arr) {
      for (let count = 0; count < arr.length - 1; count++) {
        for (let i = 0; i < arr.length - 1; i++) {
          setTimeout(() => {
            let currentNumber = arr[i]
            let nextNumber = arr[i + 1]
            if (currentNumber > nextNumber) {
              let temp = arr[i]
              arr[i] = arr[i + 1]
              arr[i + 1] = temp
              this.$forceUpdate()
            }
          }, (count + 1) * interval)
        }
      }
      return arr
    },
    shellSort: function (arr) {
      let n = 0
      for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        setTimeout(() => {
          for (let i = gap; i < arr.length; i += gap) {
            let currentNumber = arr[i]
            let insertIndex = i - gap
            while (insertIndex >= 0 && currentNumber < arr[insertIndex]) {
              arr[insertIndex + gap] = arr[insertIndex]
              insertIndex -= gap
              this.$forceUpdate()
            }
            arr[insertIndex + gap] = currentNumber
            this.$forceUpdate()
          }
        }, (n + 1) * interval)
        n++
      }
      return arr
    },
    quickSort: function (arr) {
      if (arr.length === 0) {
        return []
      }
      let standardNumber = arr[0]
      const left = []
      const right = []
      for (let index = 1; index < arr.length; index++) {
        const number = arr[index]
        if (standardNumber > number) {
          left.push(number)
        } else {
          right.push(number)
        }
      }
      return [...this.quickSort(left), standardNumber, ...this.quickSort(right)]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer-container {
  display: flex;
  align-items: flex-end;
}
.m-container {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
</style>
