import React, { memo } from 'react';
import { Paper, Typography, Grid, Divider } from '@material-ui/core';

const Box = memo(props => (
  <div>
    <div
      style={{
        display:
          props.items.length <= (document.documentElement.clientHeight - 125 - 8) / 47.25
            ? 'block'
            : 'none',
      }}
    >
      <Paper
        style={{
          padding: 14,
          textAlign: 'center',
          minHeight: (document.documentElement.clientHeight - 125 - 8) / 2,
          maxHeight: (document.documentElement.clientHeight - 290 - 8) / 2,
        }}
      >
        <div style={{ display: props.labeled ? 'block' : 'none' }}>
          <Typography variant="h6">{props.label}</Typography>
          <Divider />
          <br />
        </div>
        {props.items.map(item => (
          <Typography variant="body2">{item}</Typography>
        ))}
      </Paper>
    </div>
    <div
      style={{
        display:
          props.items.length <= (document.documentElement.clientHeight - 125 - 8) / 47.25
            ? 'none'
            : 'block',
      }}
    >
      <Paper
        className="creationlist"
        style={{
          minHeight: (document.documentElement.clientHeight - 125 - 8) / 2,
          maxHeight: (document.documentElement.clientHeight - 290 - 8) / 2,
        }}
      >
        <div
          style={{
            display: props.labeled ? 'block' : 'none',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6">{props.label}</Typography>
          <Divider />
          <br />
        </div>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <div style={{ padding: 14, textAlign: 'center' }}>
              {props.items.slice(0, Math.ceil(props.items.length / 2)).map(item => (
                <Typography variant="body2">{item}</Typography>
              ))}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ padding: 14, textAlign: 'center' }}>
              {props.items
                .slice(Math.ceil(props.items.length / 2), props.items.length)
                .map(item => (
                  <Typography variant="body2">{item}</Typography>
                ))}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  </div>
));

export default Box;
