import axios from 'axios';

export const getPrice = currency => {

    return new Promise((res,rej) => {
        axios({
            url: `https://min-api.cryptocompare.com/data/price?fsym=${currency}&tsyms=USD`,
            method: 'GET',
        })
        .then(({data}) => {
            res(data);
        })
        .catch(err => {
            rej(err);
        })
    })

};

