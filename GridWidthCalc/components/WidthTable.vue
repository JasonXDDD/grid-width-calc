<template>
  <section class="w-fit border border-amber-900/20 border-4">
    <!-- header -->

    <div class="row">
      <div class="item head" v-for="r in rowHeads" :key="r">{{ r }}</div>
    </div>

    <div v-for="c in colHeads" :key="c" class="row">
      <template v-for="r in rowHeads">
        <div v-if="r === 'X'" :key="`h-${c}-${r}`" class="item head">
          {{ c }}
        </div>
        <button
          class="item hover:bg-amber-300/20"
          :class="{
            active: selected.includes(`${c}-${r}`)
          }"
          v-else
          :key="`fx-${c}-${r}`"
          :disabled="isDisabled(c, r)"
          @click="doSetMinMax(c, r)"
        >
          {{ fx(c, r) }}
        </button>
      </template>
    </div>

    <div>{{ selected }}</div>
  </section>
</template>

<script setup>
const emits = defineEmits(['set'])
const props = defineProps({
  w: {
    type: Number,
    default: 0
  },
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Array,
    default: []
  },
  disableMax: {
    type: Number,
    default: 99999999
  },
  disableMin: {
    type: Number,
    default: 0
  }
})

const selected = ref([])

const rowHeads = computed(() => ['X', ...props.y])
const colHeads = computed(() => new Array(props.x).fill(0).map((_, i) => i + 1))

const isDisabled = (x, y) =>
  fx(x, y) > props.disableMax || fx(x, y) <= props.disableMin

const fx = (x, y) =>
  ((Number(y) - 1.5 * 16 * (Number(x) + 1)) / Number(x)).toFixed(2)

const doSetMinMax = async (x, y) => {
  selected.value = [`${x}-${y}`, ...selected.value]

  const min = fx(x + 1, y)
  const max = fx(x, y)

  emits('set', min, max)
  await nextTick()

  // const yId = rowHeads.value.indexOf(y)
  // checkAutoSelect(yId + 1)
}

const resetSelect = () => {
  selected.value = []
}
defineExpose({ resetSelect })

// method 2: give w check is in which item

function findNumberGreaterThan (a, b) {
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] > b) {
      return a[i]
    }
  }
  return null // 如果沒有找到大於 b 的數字，返回 null
}

function showSelectN (w) {
  selected.value = []
  if (!w) return

  props.y.forEach(y => {
    const list = colHeads.value.map(e => Number(fx(e, y)))
    const tg = findNumberGreaterThan(list, w)

    console.log(list, tg)
    if (tg) {
      const xid = colHeads.value[list.indexOf(tg)]
      selected.value = [`${xid}-${y}`, ...selected.value]
    }
  })
}

watch(() => props.w, showSelectN)
</script>

<style lang="sass" scoped>
.head
  @apply font-bold text-amber-800 bg-amber-500/20

.row
  @apply flex items-center font-mono
  .item
    @apply w-[7rem] truncate border-b border-l border-amber-600/20 p-1

*:disabled
  @apply bg-zinc-300 text-zinc-800

.active
  @apply bg-amber-300
</style>
