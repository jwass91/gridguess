import React, { memo } from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

const CreationListItem = memo(props => (
  <ListItem>
    <ListItemText primary={<React.Fragment>{props.text}</React.Fragment>} />
  </ListItem>
));

export default CreationListItem;
