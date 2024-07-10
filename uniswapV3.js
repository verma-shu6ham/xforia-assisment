const axios = require('axios');
require('dotenv').config();

const endpoint = `https://gateway-arbitrum.network.thegraph.com/api/${process.env.ApiKey}/subgraphs/id/HUZDsRpEVP2AvzDCyzDHtdc64dyDxx8FQjzsmqSg4H3B`;

async function fetchData(name, symbol) {
    const query = `
    query {
        tokens(where: {name: "${name}", symbol: "${symbol}", volume_gt: "10000"}) {
            id
            name
            symbol
            totalSupply
        }
    }
    `;
    try {
        const response = await axios.post(endpoint, {
            query,
        });

        console.log('Transaction Data:', JSON.stringify(response.data));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
//https://etherscan.io/address/0x75af3fd37d7ca74447e865f792f263b2b1159b58

const name1 = 'Tether USD';
const symbol1 = 'USDT';
fetchData(name1, symbol1);

//https://etherscan.io/address/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984

const name2 = 'Uniswap';
const symbol2 = 'UNI';
fetchData(name2, symbol2);

//https://etherscan.io/address/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48

const name3 = 'USD Coin';
const symbol3 = 'USDC';
fetchData(name3, symbol3);

//https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f

const name4 = 'Dai Stablecoin';
const symbol4 = 'DAI';
fetchData(name4, symbol4);