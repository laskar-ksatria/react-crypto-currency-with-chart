import React from 'react';
import { getPrice } from '../function/index';
import ImageHeader from '../components/ImageHeader';



class PriceCard extends React.Component {

    state = {
        price: null,
        lastPrice: null,
        amount: null,
        gainLoss: null,
        color: ""
    };

    componentDidMount() {
        this.getSymbolPrice();
        setInterval(this.getSymbolPrice, 500)
    };

    getSymbolPrice = () => {
        getPrice(this.props.symbol)
            .then(data => {
                if (data.USD === this.state.price) {
                    return
                }else {
                    if (this.state.lastPrice) {
                        this.setState({lastPrice: this.state.price});
                    }else {
                        this.setState({lastPrice: data.USD})
                    }
                }
                this.setState({price: data.USD});
                this.getColor();
            })
            .catch(err => console.log(err))
    };


    getColor = () => {
        if (this.state.price > this.state.lastPrice) {
            this.setState({color: 'green'})
        }else if (this.state.lastPrice > this.state.price) {
            this.setState({color: 'red'})
        }else {
            this.setState({color: 'white'})
        }
    }


    render() {
        return (
            <div style={{flex: '1',minHeight: '150px', padding: '30px'}}>
                <div style={{backgroundColor: 'black', width: '100%', height: '100%', border: '3px solid #a7d129', borderRadius: '10px', display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex'}}>
                        <div style={{width: '90%', justifyContent: 'center', marginLeft: '45px'}}>
                            <h3 style={{color: 'white',textAlign: 'center'}}>{this.props.symbol}/USD</h3>
                        </div>
                        <ImageHeader image={this.props.image} />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>
                        <div style={{backgroundColor: '#black', border: '1px solid #33313b', width: '30%', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

                        {this.state.price ? <h3 style={{textAlign: 'center', fontWeight: 'bold', color: this.state.color}}>{this.state.price}</h3> : ""}
                        </div>
                        {/* {this.state.lastPrice ? <p style={{color: 'black'}}>{this.state.lastPrice}</p> : ""} */}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px', marginTop: '30px'}}>
                        <button style={{color: 'white',fontWeight: 'bold',backgroundColor: 'green',width: '80px', height: '30px', cursor: 'pointer'}}>Buy</button>
                        <button style={{color: 'white',fontWeight: 'bold',backgroundColor: 'red',marginLeft: '50px',width: '80px', height: '30px', cursor: 'pointer'}}>Sell</button>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px', marginTop: '10px'}}>
                        <button style={{ cursor: 'pointer',backgroundColor: '#005792', color: 'white', fontWeight: 'bold', height: '35px', width: '30%'}}>Chart</button>
                    </div>
                </div>
            </div>
        )
    };
};

export default PriceCard;