const myCustomRates = {
    "USD": 1,        // Moeda base
    "BRL": 5.15,     // 1 dólar vale 5.15 reais
    "EUR": 0.92,     // 1 dólar vale 0.92 euros
    "GBP": 0.79,     // 1 dólar vale 0.79 libras
    "BTC": 0.000015  // Exemplo de cripto
};

const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const resultText = document.getElementById('result');

function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (isNaN(amount) || amount <= 0) {
        resultText.innerText = "Valor inválido";
        return;
    }

    // Lógica de conversão manual:
    // 1. Converte o valor de origem para Dólar (Base)
    // 2. Converte de Dólar para a moeda de destino
    const valueInUsd = amount / myCustomRates[from];
    const finalResult = valueInUsd * myCustomRates[to];

    // Formatação de moeda
    const formattedResult = finalResult.toLocaleString('pt-BR', {
        style: 'currency',
        currency: to
    });

    resultText.innerText = formattedResult;
}

convertBtn.addEventListener('click', convertCurrency);
window.addEventListener('load', convertCurrency);