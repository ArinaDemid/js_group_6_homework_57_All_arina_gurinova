import React, {Component} from 'react';
import Select from 'react-select';

const options = [
    { value: 'Entertainment', label: 'Entertainment'},
    { value: 'Car', label: 'Car'},
    { value: 'Food', label: 'Food'},
];

class SelectBox extends Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        const { selectedOption } = this.state;
        
        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
        );
    }
}

export default SelectBox;