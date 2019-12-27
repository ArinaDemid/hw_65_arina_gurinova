import React, {Component} from "react";
import axios from '../../axios-api';
import Quote from '../Quote/Quote';
import SpinnerShow from '../../components/UI/Spinner/Spinner';

class Quotes extends Component {

  state = {
    quotes: [],
    loading: false
  };

  async componentDidMount() {
    try {
      await this.getQuotes();
    } catch {
      this.setState({loading: false});
    }
  }

  async getQuotes() {
    this.setState({loading: true});
    const url = `${this.props.match.params.name}.json`;
    const response = await axios(url);
    if (response.status === 200) {
      const quotes = response.data;
      this.setState({quotes, loading: false});
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.name !== this.props.match.params.name) {
      this.getQuotes();
    }
  }

  render() {
    const state = this.state.quotes;
    let quotes = null;
    if (this.state.loading === true){
      quotes = <SpinnerShow/>
    }
    if (state) {
      quotes = (
        <Quote
          title={state.title}
          text={state.text}
        />
      ) 
    } 
    return quotes;
  }
};

export default Quotes;