import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fontWeight } from '@mui/system';

class ChatbotReview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            gender: '',
            age: '',
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { name, gender, age } = steps;

        this.setState({ name, gender, age });
    }

    render() {
        const { name, gender, age } = this.state;
        /*  */
        return (
            <div style={{ width: '100%' }}>
                <table>
                    <tbody>
                        <tr>
                            <td>Name :</td>
                            <td>{name.value}</td>
                        </tr>
                        <tr>
                            <td>Gender : </td>
                            <td>{gender.value}</td>
                        </tr>
                        <tr>
                            <td>Age : </td>
                            <td>{age.value}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

ChatbotReview.propTypes = {
    steps: PropTypes.object,
};

ChatbotReview.defaultProps = {
    steps: undefined,
};

export default ChatbotReview;