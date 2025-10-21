// --- Placeholder data to simulate Python AI output ---
const simulatedData = {
    'AAPL': {
        score: 0.78,
        signal: 'BUY',
        price: 185.25
    },
    'TSLA': {
        score: -0.55,
        signal: 'SELL',
        price: 210.05
    },
    'MSFT': {
        score: 0.20,
        signal: 'HOLD',
        price: 401.12
    }
};

const scoreElement = document.getElementById('sentimentScore');
const signalElement = document.getElementById('tradeSignal');
const tickerSelector = document.getElementById('stock-ticker');
const priceElement = document.getElementById('lastPrice');
const updateElement = document.getElementById('lastUpdate');

// --- Function to update the dashboard based on data ---
function updateDashboard(ticker) {
    const data = simulatedData[ticker];

    // 1. Update the Score and its color
    scoreElement.textContent = data.score.toFixed(2);
    scoreElement.className = 'score-value'; // Reset class
    if (data.score > 0.5) {
        scoreElement.classList.add('positive');
    } else if (data.score < -0.3) {
        scoreElement.classList.add('negative');
    } else {
        scoreElement.classList.add('neutral');
    }

    // 2. Update the Trade Signal and its background
    signalElement.textContent = `${data.signal} 🔥`;
    signalElement.className = 'signal-value'; // Reset class
    signalElement.classList.add(data.signal.toLowerCase());

    // 3. Update Ticker Info
    priceElement.textContent = data.price.toFixed(2);
    
    // 4. Update Time
    const now = new Date();
    updateElement.textContent = now.toLocaleTimeString('en-US');

    console.log(`Dashboard updated for ${ticker} with signal: ${data.signal}`);
}

// --- Event Listener for Ticker Selection ---
tickerSelector.addEventListener('change', (event) => {
    updateDashboard(event.target.value);
});

// --- Initial Load and Real-Time Simulation ---
// Update the dashboard immediately on load for the default selection
updateDashboard(tickerSelector.value);

// In a real application, you would use a WebSocket connection 
// to receive live data. Here, we simulate a 5-second data refresh.
// setInterval(() => {
//     // This function would typically call your Python API
//     updateDashboard(tickerSelector.value); 
// }, 5000);