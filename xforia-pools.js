const axios = require('axios');

const endpoint = 'https://api.studio.thegraph.com/query/82688/xforia-pools/v0.0.1'

async function fetchData(tnxHash) {
    const query = `
    query {
        increaseObservationCardinalityNexts(
            where: {transactionHash: "${tnxHash}"}
        ) {
            blockNumber
            transactionHash
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

//https://etherscan.io/tx/0xc8c94330c0baba4e1edc14f2c9dd6d4eb5eebff4b1cfb6736ca0c171e4a3341f
// https://app.uniswap.org/explore/pools/ethereum/0x1d42064Fc4Beb5F8aAF85F4617AE8b3b5B8Bd801

const tnxHash = "0xc8c94330c0baba4e1edc14f2c9dd6d4eb5eebff4b1cfb6736ca0c171e4a3341f";
fetchData(tnxHash);