export default defineEventHandler(async (event) => {

    const apiKey = process.env.CURRENCY_API_KEY;

    const { fromCurrency, toCurrency } = getQuery(event);


    console.log(fromCurrency);
    console.log(fromCurrency);

    const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${fromCurrency}&currencies=${toCurrency}`;

    const {data: exchangeRate} = await $fetch(url)

    console.log(exchangeRate);

  return {
    statusCode: 200,
    message: exchangeRate,
  };
});
