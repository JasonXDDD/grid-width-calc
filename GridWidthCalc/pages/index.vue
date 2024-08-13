<template>
  <section class="flex flex-col gap-4">
    <h1 class="font-bold text-lg">計算 Grid Auto Layout Width</h1>
    <p>
      X: 總格數，Y: Container 寬度 <br />
      W: 設定單位寬度
    </p>
    <hr />
    <p>
      用法1 - 設定 X,Y：<br />
      顯示所有 Grid 單位格子的寬度，點擊選取表示 (寬度Y) 下
      (需求的格數X)，計算出最小與最大寬度 <br />
    </p>
    <div class="flex items-center gap-2">
      <div class="flex items-center gap-2">
        <p class="font-mono">X:</p>
        <input class="w-[5rem]" type="number" v-model="x" />
      </div>
      <div class="flex items-center gap-2">
        <p class="font-mono">Y:</p>
        <input class="w-[20rem]" type="text" v-model="y" />
      </div>
    </div>
    <hr />

    <p>
      用法2 - 設定 W：<br />
      計算所有 (寬度Y) 下 最多可顯示的 (格數X)
    </p>
    <div class="flex items-center gap-2">
      <p class="font-mono">W:</p>
      <input class="w-[5rem]" type="number" v-model="w" />
    </div>
    <WidthTable
      ref="widthTable"
      :w="w"
      :x="x"
      :y="y.split(',')"
      @set="setMinMax"
      :disableMin="min"
      :disableMax="max"
    />

    <div class="font-mono">min: {{ min }} max: {{ max }}</div>
    <button class="w-fit" @click="reset">reset</button>
  </section>
</template>

<script setup>
const w = ref(0)
const x = ref(10)
const y = ref('906, 1112, 1592, 1234, 754, 524')

const min = ref(0)
const max = ref(99999999)

const setMinMax = (a, b) => {
  min.value = min.value < Number(a) ? Number(a) : min.value
  max.value = max.value > Number(b) ? Number(b) : max.value
}

const widthTable = ref()
const reset = () => {
  min.value = 0
  max.value = 99999999
  widthTable.value.resetSelect()
}
</script>
