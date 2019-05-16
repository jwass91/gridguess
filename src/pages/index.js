import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, AddItem, CreationList, Grids } from '../components/index.js'
import { Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    minHeight: '100%',
    height: '100%',
    position: 'relative',
  },
  footer: {
    color: 'grey',
    textAlign: 'center',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    padding: '10px'
  }
});

class Index extends React.Component {


  constructor(props) {
    super(props);
    this.state = { items: [], used: [],  text: '', inputError: false, inputMax: false, generating: true, g1: [], g2: [], g4: [], g8: [], g16: [], g32: [], neededgrids: 0};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value, inputError: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    else if (this.state.used.indexOf(this.state.text)!==-1){
      this.setState({ inputError: true });
      return;
    }
    const newItem = {
      text: this.state.text,
      uid: Date.now(),
      id: this.state.used.length+1,
      bArray: (this.state.used.length+1).toString(2).padStart(6, '0').split(""),
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: '',
      used: state.used.concat(this.state.text.toLowerCase())
    }));
    if (this.state.used.length+1===63){
      this.setState({ inputMax: true });
      return;
    }
  }

  handleGenerateGrids = (e) => {
    e.preventDefault();
    this.setState({ generating: false });
    var tempb1 = [];
    var tempb2 = [];
    var tempb4 = [];
    var tempb8 = [];
    var tempb16 = [];
    var tempb32 = [];
    this.state.items.forEach(item => {
      if(item.bArray[0] === "1"){
        tempb32.push(item.text);
      }
      if(item.bArray[1] === "1"){
        tempb16.push(item.text);  
      }
      if(item.bArray[2] === "1"){
        tempb8.push(item.text);  
      }
      if(item.bArray[3] === "1"){
        tempb4.push(item.text);  
      }
      if(item.bArray[4] === "1"){
        tempb2.push(item.text);  
      }
      if(item.bArray[5] === "1"){
        tempb1.push(item.text);  
      }
    });
    var ng = 4;
    if (this.state.items.length >= 16) {
      ng = 5;
    }
    if (this.state.items.length >= 32) {
      ng = 6;
    }
    this.setState({ neededgrids: ng, g1: tempb1, g2: tempb2, g4: tempb4, g8: tempb8, g16: tempb16, g32: tempb32 });
  }

  handleKeyPress(e, cb) {
    if (e.key === 'Enter') {
        cb(e);
        return true;
    }
    return false;
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
      <div className={classes.root}>
      <Navbar/>

      <div style={{display: this.state.generating ? 'block' : 'none'}}> 
        <div style={{margin: 14}}>
          <Typography variant="subtitle1" gutterBottom>
            Welcome to GridGuess... Enter between 10 and 63 items to generate your grids.
          </Typography>
        </div>

        <AddItem
          inputValue={this.state.text}
          onInputChange={this.handleChange}
          onButtonClick={this.handleSubmit}
          isError={this.state.inputError}
          inputMax={this.state.inputMax}
          onInputKeyPress={e => this.handleKeyPress(e, this.handleSubmit)}
        />

        <CreationList items={this.state.items}/>

        <div style={{textAlign: 'center', margin: 14}}>
          <Button onClick={this.handleGenerateGrids} color='primary' variant='contained' size='large' fullWidth style={{display: this.state.items.length ? 'block' : 'none' }} disabled={this.state.items.length<10}>
            Generate
          </Button>
        </div>
      </div>

      <div style={{display: this.state.generating ? 'none' : 'block'}}> 
        <Grids
          items={this.state.items}
          g1={this.state.g1}
          g2={this.state.g2}
          g4={this.state.g4}
          g8={this.state.g8}
          g16={this.state.g16}
          g32={this.state.g32}
          ng={this.state.neededgrids}
        />
      </div>

      </div>
      <div className={classes.footer}>
      <Typography variant='body2' color='inherit'>
        Built by Nathan Dummitt and Jared Wasserman. Styled with <a style={{color: 'grey'}} href='https://material-ui.com' target='_blank'>Material-UI</a>.
      </Typography>
      </div>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
