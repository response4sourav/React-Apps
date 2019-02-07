import React, { Component } from 'react';

class AddressSuggestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      error: null
    };

  }

  componentWillReceiveProps(props) {
    let queryVal = props.autoSuggestionInput[0]
    let countryVal = props.autoSuggestionInput[1]

    // clear suggestion if no query
    if (queryVal.length === 0) {
      this.setState({
        items: []
      });
    }
    else {
      this.getAddressSuggestions(queryVal, countryVal)
    }
  }

  getAddressSuggestions(queryVal, countryVal) {
    let query = encodeURIComponent(queryVal)
    let country = countryVal || 'GBR'
    let url = `${api}?query=${query}&country=${country}&take=${maxFetchCount}&auth-token=${token}`
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.results
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  selectAddress(e) {
    let addressUrl = e.target.dataset.value + `&auth-token=${token}`
    fetch(addressUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.props.action(result.address)
        }
      )
  };

  render() {
    const { items, error } = this.state;
    if (error) {
      return <div className="autoSuggestionPanel">Error: {error.message}</div>;
    } else if (items.length === 0) {
      return <div className="autoSuggestionPanel"></div>;
    } else {
      return (
        <div className="autoSuggestionPanel">
          {items.map((item, index) => (
            <div data-value={item.format} key={index} onClick={e => this.selectAddress(e)} >{item.suggestion}</div>
          ))}
        </div>
      );
    }
  }
}

const api = 'https://api.edq.com/capture/address/v2/search'
const token = 'b361b439-8990-4032-b274-a5bd2f5c826e'
const maxFetchCount = '20'

export default AddressSuggestion;