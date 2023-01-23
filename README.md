# Coin Portfolio

- Link to the web-app **[Here](https://buidlor.github.io/Front-End-Coin-Exchange/)**
- Coin portfolio/exchange created with react. Using the [coingecko](https://www.coingecko.com/) API. The portfolio contains a fixed choice of coins. in this case it is BTC, ETH, Luna, Avax and Divi.

#### Screensot:

![app screenshot](/portScreenshot.PNG)

## Functions:

- Hide/show balance: 
Clicking the button will hide the global balance and your balance per coin. the button will change color and text depending on the status
- Airdrop (parachute button): adds 1000$ to the ballance.
- Refresh: Will refresh the coin price by looking at coingecko data. free API calls with a rate of 10-50 calls per minute
- Buy: Buys one coin of the selected asset. Substracts current price of the selected asset from the total balance and adds 1 coin to the asset's balance.
- Sell: Sells one coin of the selected asset.  Adds current price of the selected asset from the total balance and substracts 1 coin from the asset's balance.

