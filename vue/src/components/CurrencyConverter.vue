<script setup>
import { ref, computed, watch } from 'vue'
import confetti from 'canvas-confetti'

const amount = ref(1)
const rate = ref(1)

const converted = computed(() => amount.value * rate.value)
watch([amount, rate], () => {
  confetti({
    particleCount: 100,
    spread: 70
  })
})
function updateRate() {
  rate.value = Math.random() + 1
}
</script>

<template>
  <div>
    <h1>Currency Converter</h1>
    <div>
      <label for="amount">Quinoa coin</label>
      <input type="number" id="amount" v-model="amount" />
    </div>
    <div>
      <label for="rate">Exchange rate</label>
      <span id="rate"> {{ rate }}</span>
      <button @click="updateRate">Update rate</button>
    </div>
    <p>Result: {{ converted }} Doge coin</p>
  </div>
</template>
