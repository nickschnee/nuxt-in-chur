<template>
  <div>
    <!-- <h1> Ich bin die About Seite</h1> -->

    <h2>Currency Converter</h2>

    <label for=""> From Currency</label>
    <select @change="clearOutput" v-model="fromCurrency">
      <option value="USD">USD</option>
      <option value="CHF">CHF</option>
      <option value="GBP">GBP</option>
      <option value="EUR">EUR</option>
    </select>

    <label  for=""> To Currency</label>
    <select @change="clearOutput" v-model="toCurrency">
      <option value="USD">USD</option>
      <option value="CHF">CHF</option>
      <option value="GBP">GBP</option>
      <option value="EUR">EUR</option>
    </select>

    <button @click="fetchExchange">Give Exchangerate!</button>

    <p v-if="exchangeRate != 0"> 1 {{ fromCurrency }} entspricht {{ exchangeRate }} {{ toCurrency }}</p>
    
  </div>
</template>

<script setup>
const fromCurrency = ref("USD");
const toCurrency = ref("USD"); 

const exchangeRate = ref(0);

const clearOutput = () => {
  exchangeRate.value = 0;
};

const fetchExchange = async () => {
  const { data: currencies } = await useFetch(
    `/api/currency?fromCurrency=${fromCurrency.value}&toCurrency=${toCurrency.value}`
  );

//   console.log(currencies.value.message[toCurrency.value].value);

  exchangeRate.value = currencies.value.message[toCurrency.value].value;

  exchangeRate.value = exchangeRate.value.toFixed(2);

};

</script>

<style scoped></style>
