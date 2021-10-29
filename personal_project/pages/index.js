import React from 'react';
import axios from 'axios';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            count_identical_pairs: "0",
            computation_time: "0"
        };
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = async (e) => {
        e.preventDefault();
        let {input} = this.state;

        if (!/^\b[ ?0-9,]*[0-9 ]$/.test(input)) {
            alert('String format is not respected')
            console.error('String format is not respected');
            return
        }
        let list = JSON.parse("[" + input + "]");

        console.log('list', list);
        let config = {
            method: 'post',
            url: 'http://0.0.0.0:8080/count_identical_pairs',
            headers: {
                'Content-Type': 'application/json'
            },
            data: list
        };

        try {
            const response = await axios(config);
            console.log(response.data)

            this.setState({
                count_identical_pairs: JSON.stringify(response.data.count_identical_pairs),
                computation_time: JSON.stringify(response.data.computation_time)
            });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        const {input, count_identical_pairs, computation_time} = this.state;

        return (
            <div>
                <h1 style={{marginLeft: "50px"}}>Count Identical Pairs</h1>
                <h2 style={{marginLeft: "100px"}}>List of Transactions</h2>
                <form style={{marginLeft: "150px"}} onSubmit={this.onSubmit}>
                    <input type="text" name="input" value={input} onChange={this.onChange}/>
                    <br/>
                    <button
                        style={{
                            backgroundColor: '#4CAF50',
                            border: 'none',
                            color: 'white',
                            padding: '15px 32px',
                            margin: '15px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: '16px',
                        }}
                        type="submit">Submit
                    </button>
                </form>
                <h3 style={{marginLeft: "100px", marginTop: "20px"}}>Response:</h3>
                <div style={{display: "flex", marginTop: "20px"}}>
                    <div style={{marginLeft: "150px", marginTop: "20px", width: "170px"}}>Count Identical Pairs</div>
                    <div style={{
                        marginLeft: "50px",
                        marginTop: "12px",
                        fontSize: "28px",
                        color: "green"
                    }}>{count_identical_pairs}
                    </div>
                </div>
                <div style={{display: "flex", marginTop: "20px"}}>
                    <div style={{marginLeft: "150px", marginTop: "20px", width: "170px",}}>Computation Time</div>
                    <div style={{
                        marginLeft: "50px",
                        marginTop: "20px",
                        backgroundColor: "lightcyan"
                    }}> {computation_time} milliseconds
                    </div>
                </div>
            </div>
        )
            ;
    }

}
