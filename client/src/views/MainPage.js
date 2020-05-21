import React from 'react';
import Header from '../components/Header';
import PriceCard from '../components/PriceCard';

//Image
import ETH from '../components/image/eth2.png';
import BitCoin from '../components/image/bitcoin.png';
import LiteCoin from '../components/image/litecoin.png';

function MainPage() {

    return (
        <React.Fragment>
            <Header />
            <div style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
                <PriceCard symbol='BTC' image={BitCoin} />
                <PriceCard symbol='ETH' image={ETH} />
                <PriceCard symbol='LTC' image={LiteCoin} />
                {/* <div style={{width: '33.3%',height: '220px', backgroundColor: 'red'}}></div>
                <div style={{width: '33.3%',height: '220px', backgroundColor: 'yellow'}}></div>
                <div style={{width: '33.3%',height: '220px', backgroundColor: 'orange'}}></div> */}
            </div>

        </React.Fragment>
    )

};


export default MainPage;