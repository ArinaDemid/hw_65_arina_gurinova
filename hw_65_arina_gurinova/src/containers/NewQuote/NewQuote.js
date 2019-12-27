import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import axios from '../../axios-api';
import {PAGES} from '../../constants';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SpinnerShow from '../../components/UI/Spinner/Spinner';

class NewQuote extends Component {

  state = {
    title: '', 
    text: '',
    category: PAGES[0],
    loading: false
  };

  async componentDidMount() {
    await this.getQuote();
  }

  async getQuote(){
    this.setState({text: '', loading: true});
    const response = await axios(`${this.state.category}.json`);
    if (response.status === 200) {
      const quotes = response.data;
      this.setState({title: quotes.title, text: quotes.text, loading: false});
    }
  }

  valueChange = (event) => this.setState({[event.target.name]: event.target.value});

  submit = async (event) => {
    event.preventDefault();
    const put = {
      title: this.state.title,
      text: this.state.text
    };

    await this.putQuote(put);
    this.props.history.push(`${this.state.category}`);
  };

  async putQuote(put){
    await axios.put(`${this.state.category}.json`, put);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.category !== this.state.category) {
      this.getQuote();
    }
  }

  render() {
    const state = this.state.text;
    let formEditor = null;
    if (this.state.loading === true){
      formEditor = (
        <div style={{height: '150px'}}>
          <SpinnerShow />
        </div>
      )
    }
    if (state) {
      formEditor = (
        <div style={{ background: '#eee', padding: '5px'}} className="mb-4 mt-4">
          <CKEditor
            editor={ ClassicEditor }
            data={this.state.text}
            onChange={ ( event, editor ) => {
              const data = editor.getData();
              this.setState({text: data.replace(/<[^>]*>?/gm, '')});
            } }
          />
        </div>
      ) 
    } 
    return (
      <div className="NewQuote_block">
        <div style={{paddingBottom:"10px", fontWeight: "600", fontSize: "18px"}}>Change content page</div>
        <Form className="NewQuote_form" onSubmit={this.submit}>
          <FormGroup>
            <Label for="page">Select page</Label>
            <Input type="select" name="category" id="category" value={this.state.category} onChange={this.valueChange}>
              {PAGES.map(page => (
                <option key={page} value={page}>{page}</option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0 NewQuote_group">
            <Label for="author">Title</Label>
            <Input required type="text" name="title" id="title" value={this.state.title} onChange={this.valueChange}/>
          </FormGroup>
          {formEditor}
          <Button type="submit" className="NewQuote_button">Save</Button>
        </Form>
      </div>
    )
  }
};

export default NewQuote;