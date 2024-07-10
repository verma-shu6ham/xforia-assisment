const axios = require('axios');

const endpoint = 'https://api.studio.thegraph.com/query/82688/xforia/v0.0.1'


async function fetchData(tnxHash) {
    const GraphQL = `
    query {
        transfers(where: {transactionHash: "${tnxHash}"}) {
            blockNumber
            transactionHash
            from
            to
        }
    }`;

    try {
        const response = await axios.post(endpoint, {
            query: GraphQL,
        });

        console.log('Transaction Data:', JSON.stringify(response.data));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

//https://etherscan.io/tx/0x9e75b83068889f4865780f6b6b6c5fe73e841518657e1f342ec4121fc30467e4

const tnxHash = "0x9e75b83068889f4865780f6b6b6c5fe73e841518657e1f342ec4121fc30467e4";
fetchData(tnxHash);

