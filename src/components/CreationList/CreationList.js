import React, { memo } from 'react';
import { List, Paper } from '@material-ui/core';
import CreationListItem from '../CreationListItem/index';

const CreationList = memo(props => (
  <Paper
    className="creationlist"
    style={{
      overflow: 'auto',
      overflowY: 'scroll',
      maxHeight: document.documentElement.clientHeight - 325,
      margin: 14,
      display: props.items.length ? 'block' : 'none',
    }}
  >
    <List dense>
      {props.items
        .slice()
        .reverse()
        .map(item => (
          <CreationListItem text={item.text} number={item.id} />
        ))}
    </List>
  </Paper>
));

export default CreationList;
