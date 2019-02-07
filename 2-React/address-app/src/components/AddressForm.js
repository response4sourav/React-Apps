import React, { Component } from 'react';
import AddressSuggestions from './AddressSuggestion';
import $ from 'jquery';

class AddressForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            keywords: '',
            country: 'GBR'
        }

        this.updateAddress = this.updateAddress.bind(this)
    }

    handleKeywordsChange(e) {
        this.setState({
            keywords: e.target.value
        });
        $('.autoSuggestionPanel').show()
    }

    handleCountryChange(e) {
        this.setState({
            country: e.target.value
        });
        $('.autoSuggestionPanel').show()
    }

    updateAddress(address) {
        $('.addressForm input[type="text"]').val('');
        address.map((data) => ( // eslint-disable-next-line
            data.addressLine1 ? $('#chkshipAddr1').val(data.addressLine1) : '', // eslint-disable-next-line
            data.addressLine2 ? $('#chkshipAddr2').val(data.addressLine2) : '', // eslint-disable-next-line
            data.postalCode ? $('#chkPostal').val(data.postalCode) : '', // eslint-disable-next-line
            data.locality ? $('#chkCity').val(data.locality) : '', // eslint-disable-next-line
            $('.autoSuggestionPanel').hide()
        ))
    }

    componentDidMount() {
        $('#chkshipAddr2, #chkPostal, #chkCity').focus(function () {
            $('.autoSuggestionPanel').hide();
        });
    }

    render() {
        return (
            <form className="addressForm">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="chkshipAddr1" className="control-label">Address 1<span>*</span></label>
                            <input type="text" id="chkshipAddr1" className="form-control" placeholder="Start Typing Address..." onChange={e => this.handleKeywordsChange(e)} value={this.state.keywords} autoComplete="new-password" />
                            <AddressSuggestions autoSuggestionInput={[this.state.keywords, this.state.country]} action={this.updateAddress} />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="chkshipAddr2" className="control-label">Address 2</label>
                            <input type="text" id="chkshipAddr2" className="form-control" defaultValue="" autoComplete="new-password" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="chkPostal" className="control-label">Postal Code<span>*</span></label>
                            <input type="text" id="chkPostal" className="form-control" defaultValue="" maxLength="8" autoComplete="new-password" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="chkCity" className="control-label">City<span>*</span></label>
                            <input type="text" id="chkCity" className="form-control" defaultValue="" autoComplete="new-password" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="chkCountry" className="control-label">Country</label>
                            <select id="chkCountry" className="form-control" onChange={e => this.handleCountryChange(e)} value={this.state.country}>
                                <option value="GBR">United Kingdom</option>
                                <option value="FRA">France</option>
                                <option value="ITA">Italy</option>
                                <option value="DEU">Germany</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddressForm;