import React from 'react';
import quotes from '../quotes.json';

class Quote extends React.Component {
    state = {
        hour: 0,
        minute: 0,
        second: 0,
        month: 0,
        day: 0,
        quote: '',
        chinese: '',
        type: '',
        traditionalToggle: false,
        traditional: ''
    }

    componentDidMount() {
        this.interval = setInterval(() => this.quote(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    parseMonth = (m) => {
        if (m === 0) {
          return 'Jan'
        } else if (m === 1) {
          return 'Feb'
        } else if (m === 2) {
          return 'Mar'
        } else if (m === 3) {
          return 'Apr'
        } else if (m === 4) {
          return 'May'
        } else if (m === 5) {
          return 'Jun'
        } else if (m === 6) {
          return 'Jul'
        } else if (m === 7) {
          return 'Aug'
        } else if (m === 8) {
          return 'Sep'
        } else if (m === 9) {
          return 'Oct'
        } else if (m === 10) {
          return 'Nov'
        } else if (m === 11) {
          return 'Dec'
        }
    };

    quote = () => {
        let d = new Date();
        const month = this.parseMonth(d.getMonth());
        const day = d.getDate();
        const hours = d.getHours();
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();
        let type = '';
        let chinese = '';
        let quote = '';
        let traditional = '';
        quotes.map((q) => {
            if (q.month === month && q.day === day) {
                quote = q.quote;
                type = q.type;
                chinese = q.chinese;
                traditional = q.traditional;
            }
        });


        this.setState({
            hour: hours,
            minute: minutes,
            second: seconds,
            month: month,
            day: day,
            quote: quote,
            chinese: chinese,
            type: type,
            traditional: traditional
        });
    };

    traditionalToggle = () => {
        this.setState({traditionalToggle: !this.state.traditionalToggle});
    };

    indicator = () => {
        if (this.state.traditionalToggle) {
            return (
                <React.Fragment>
                    <p className='date'>TRIDITIONAL</p>
                    <p className='triditional'>{this.state.traditional}</p>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <p className='date'>SIMPLIFIED</p>
                    <p className='chinese'>{this.state.chinese}</p>
                </React.Fragment>
            )
        }
    };

    render () {
        return (
            <div className='quote-container'>
                <p className='time'>{`${this.state.hour} : ${this.state.minute} : ${this.state.second}`}</p>
                <p className='date'>{`${this.state.month}. ${this.state.day} ~ ${this.state.type}`}</p>
                <p className='quote'>{this.state.quote}</p>
                <label class="switch">
                    <input type="checkbox" onClick={this.traditionalToggle}/>
                    <span class="slider round"></span>
                </label>
                {this.indicator()}
                <p className='chinese'>星雲</p>
                <p className='content'>
                366 Days With Wisdom,<br/>
                By Master Hsing Yun
                </p>
            </div>
        )
    }
};

export default Quote;