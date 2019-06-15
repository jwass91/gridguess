import React, { memo } from 'react';
import { TextField, Paper, Button, Grid } from '@material-ui/core';

function getHelperText(props) {
  if (props.isError) return 'That item already exists. Try adding another one.';
  if (props.inputMax) return 'You have entered the maximum number of items allowed.';
  return '';
}

const AddItem = memo(props => (
  <Paper style={{ margin: 14, padding: 14 }}>
    <Grid container>
      <Grid xs={10} md={11} item style={{ paddingRight: 14 }}>
        <TextField
          placeholder="Enter item here"
          value={props.inputValue}
          onChange={props.onInputChange}
          onKeyPress={props.onInputKeyPress}
          fullWidth
          error={props.isError}
          disabled={props.inputMax}
          helperText={getHelperText(props)}
          color="primary"
        />
      </Grid>
      <Grid xs={2} md={1} item>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          disabled={props.inputMax || props.isError}
          onClick={props.onButtonClick}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  </Paper>
));

export default AddItem;
