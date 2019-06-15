import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import withRoot from '../withRoot';
import { Navbar, AddItem, CreationList, Grids } from '../components/index';

const styles = {
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
    padding: '10px',
  },
};

function handleKeyPress(e, cb) {
  if (e.key === 'Enter') {
    cb(e);
    return true;
  }
  return false;
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      used: [],
      text: '',
      inputError: false,
      inputMax: false,
      generating: true,
      g1: [],
      g2: [],
      g4: [],
      g8: [],
      g16: [],
      g32: [],
      neededgrids: 0,
      open: false,
      shuffled: false,
      reverse: false,
      labeled: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const shuffled = localStorage.getItem('shuffled') === 'true';
    const reverse = localStorage.getItem('reverse') === 'true';
    const labeled = localStorage.getItem('labeled') === 'true';
    this.setState({ shuffled, reverse, labeled });
  }

  handleGenerateGrids = e => {
    e.preventDefault();
    this.setState({ generating: false });
    const tempb1 = [];
    const tempb2 = [];
    const tempb4 = [];
    const tempb8 = [];
    const tempb16 = [];
    const tempb32 = [];
    const { items } = this.state;
    items.forEach(item => {
      if (item.bArray[0] === '1') {
        tempb32.push(item.text);
      }
      if (item.bArray[1] === '1') {
        tempb16.push(item.text);
      }
      if (item.bArray[2] === '1') {
        tempb8.push(item.text);
      }
      if (item.bArray[3] === '1') {
        tempb4.push(item.text);
      }
      if (item.bArray[4] === '1') {
        tempb2.push(item.text);
      }
      if (item.bArray[5] === '1') {
        tempb1.push(item.text);
      }
    });
    let ng = 4;
    if (items.length >= 16) {
      ng = 5;
    }
    if (items.length >= 32) {
      ng = 6;
    }
    this.setState({
      neededgrids: ng,
      g1: tempb1,
      g2: tempb2,
      g4: tempb4,
      g8: tempb8,
      g16: tempb16,
      g32: tempb32,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { text, used } = this.state;
    if (!text.length) {
      return;
    }
    if (used.indexOf(text) !== -1) {
      this.setState({ inputError: true });
      return;
    }
    const newItem = {
      text,
      uid: Date.now(),
      id: used.length + 1,
      bArray: (used.length + 1)
        .toString(2)
        .padStart(6, '0')
        .split(''),
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: '',
      used: state.used.concat(text.toLowerCase()),
    }));
    if (used.length + 1 === 63) {
      this.setState({ inputMax: true });
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value, inputError: false });
  }

  render() {
    this.handleSettingsOpen = () => {
      this.setState({ open: true });
    };

    this.handleSettingsClose = () => {
      this.setState({ open: false });
    };

    this.handleChangeShuffle = () => {
      const { shuffled } = this.state;
      localStorage.setItem('shuffled', !shuffled);
      this.setState(state => ({ shuffled: !state.shuffled }));
    };

    this.handleChangeReverse = () => {
      const { reverse } = this.state;
      localStorage.setItem('reverse', !reverse);
      this.setState(state => ({ reverse: !state.reverse }));
    };

    this.handleChangeLabel = () => {
      const { labeled } = this.state;
      localStorage.setItem('labeled', !labeled);
      this.setState(state => ({ labeled: !state.labeled }));
    };

    const {
      open,
      shuffled,
      reverse,
      labeled,
      generating,
      text,
      inputError,
      inputMax,
      items,
      g1,
      g2,
      g4,
      g8,
      g16,
      g32,
      neededgrids,
    } = this.state;

    const { classes } = this.props;

    return (
      <div>
        <div className={classes.root}>
          <Navbar onSettingsClick={this.handleSettingsOpen} />

          <Dialog
            fullWidth
            maxWidth="xl"
            open={open}
            onClose={this.handleSettingsClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">&quot;Settings&quot;</DialogTitle>
            <DialogContent>
              <FormControlLabel
                control={
                  <Switch
                    checked={shuffled}
                    onChange={this.handleChangeShuffle}
                    value="shuffled"
                    color="primary"
                  />
                }
                label="Shuffle items in each grid"
              />
              <br />
              <FormControlLabel
                control={
                  <Switch
                    checked={reverse}
                    onChange={this.handleChangeReverse}
                    value="reverse"
                    color="primary"
                  />
                }
                label="Reverse grid order"
              />
              <br />
              <FormControlLabel
                control={
                  <Switch
                    checked={labeled}
                    onChange={this.handleChangeLabel}
                    value="reverse"
                    color="primary"
                  />
                }
                label="Label grids"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleSettingsClose} color="primary" autoFocus>
                Done
              </Button>
            </DialogActions>
          </Dialog>

          <div style={{ display: generating ? 'block' : 'none' }}>
            <div style={{ margin: 14 }}>
              <Typography variant="subtitle1" gutterBottom>
                Welcome to GridGuess... Enter between 15 and 63 items to generate your grids. Or
                start with one of our existing lists.
              </Typography>
            </div>

            <AddItem
              inputValue={text}
              onInputChange={this.handleChange}
              onButtonClick={this.handleSubmit}
              isError={inputError}
              inputMax={inputMax}
              onInputKeyPress={e => handleKeyPress(e, this.handleSubmit)}
            />

            <CreationList items={items} />

            <div style={{ textAlign: 'center', margin: 14 }}>
              <Button
                onClick={this.handleGenerateGrids}
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                style={{ display: items.length ? 'block' : 'none' }}
                disabled={items.length < 15}
              >
                Generate
              </Button>
            </div>
          </div>

          <div style={{ display: generating ? 'none' : 'block' }}>
            <Grids
              items={items}
              g1={g1}
              g2={g2}
              g4={g4}
              g8={g8}
              g16={g16}
              g32={g32}
              ng={neededgrids}
              reverse={reverse}
              shuffled={shuffled}
              labeled={labeled}
            />
          </div>
        </div>
        <div className={classes.footer}>
          <Typography variant="body2" color="inherit">
            Built by Jared Wasserman and Nathan Dummitt. Styled with
            <a
              style={{ color: 'grey' }}
              href="https://material-ui.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Material-UI
            </a>
            .
          </Typography>
        </div>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
