import React, { memo } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import _ from 'lodash';
import Box from '../Box/index';

const Grids = memo(props => (
  <div style={{ margin: 14 }}>
    <Grid container spacing={16}>
      <Grid item xs={props.ng === 6 ? 4 : 3}>
        <Paper
          className="creationlist"
          style={{
            display: props.ng === 6 ? 'none' : 'block',
            padding: 14,
            minHeight: document.documentElement.clientHeight - 125,
            maxHeight: document.documentElement.clientHeight - 125,
            overflow: 'auto',
            overflowY: 'scroll',
          }}
        >
          {props.items.slice(0, 31).map(item => (
            <Typography variant="body2">
              <span style={{ fontWeight: 'bold' }}>{item.id})</span> {item.text}
            </Typography>
          ))}
        </Paper>
        <Paper
          className="creationlist"
          style={{
            display: props.ng === 6 ? 'block' : 'none',
            minHeight: document.documentElement.clientHeight - 125,
            maxHeight: document.documentElement.clientHeight - 125,
            overflowX: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <Grid container spacing={8}>
            <Grid item xs={6}>
              <div style={{ padding: 14 }}>
                {props.items.slice(0, 32).map(item => (
                  <Typography variant="body2">
                    <span style={{ fontWeight: 'bold' }}>{item.id})</span> {item.text}
                  </Typography>
                ))}
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ padding: 14 }}>
                {props.items.slice(32, 63).map(item => (
                  <Typography variant="body2">
                    <span style={{ fontWeight: 'bold' }}>{item.id})</span> {item.text}
                  </Typography>
                ))}
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={props.ng === 6 ? 8 : 9}>
        {/* 4 Grids */}
        <div style={{ display: props.ng === 4 ? 'block' : 'none' }}>
          <Grid container spacing={8}>
            <Grid item xs={6}>
              {props.shuffled ? (
                <Box
                  label={props.reverse ? '1' : '8'}
                  labeled={props.labeled}
                  items={props.reverse ? _.shuffle(props.g1) : _.shuffle(props.g8)}
                />
              ) : (
                <Box
                  label={props.reverse ? '1' : '8'}
                  labeled={props.labeled}
                  items={props.reverse ? props.g1 : props.g8}
                />
              )}
            </Grid>
            <Grid item xs={6}>
              {props.shuffled ? (
                <Box
                  label={props.reverse ? '2' : '4'}
                  labeled={props.labeled}
                  items={props.reverse ? _.shuffle(props.g2) : _.shuffle(props.g4)}
                />
              ) : (
                <Box
                  label={props.reverse ? '2' : '4'}
                  labeled={props.labeled}
                  items={props.reverse ? props.g2 : props.g4}
                />
              )}
            </Grid>
            <Grid item xs={6}>
              {props.shuffled ? (
                <Box
                  label={props.reverse ? '4' : '2'}
                  labeled={props.labeled}
                  items={props.reverse ? _.shuffle(props.g4) : _.shuffle(props.g2)}
                />
              ) : (
                <Box
                  label={props.reverse ? '4' : '2'}
                  labeled={props.labeled}
                  items={props.reverse ? props.g4 : props.g2}
                />
              )}
            </Grid>
            <Grid item xs={6}>
              {props.shuffled ? (
                <Box
                  label={props.reverse ? '8' : '1'}
                  labeled={props.labeled}
                  items={props.reverse ? _.shuffle(props.g8) : _.shuffle(props.g1)}
                />
              ) : (
                <Box
                  label={props.reverse ? '8' : '1'}
                  labeled={props.labeled}
                  items={props.reverse ? props.g8 : props.g1}
                />
              )}
            </Grid>
          </Grid>
        </div>
        {/* 5 Grids */}
        <div style={{ display: props.ng === 5 ? 'block' : 'none' }}>
          <Grid container spacing={8}>
            <Grid item xs={4}>
              {props.shuffled ? (
                <Box
                  label={props.reverse ? '1' : '16'}
                  labeled={props.labeled}
                  items={props.reverse ? _.shuffle(props.g1) : _.shuffle(props.g16)}
                />
              ) : (
                <Box
                  label={props.reverse ? '1' : '16'}
                  labeled={props.labeled}
                  items={props.reverse ? props.g1 : props.g16}
                />
              )}
            </Grid>
            <Grid item xs={4}>
              {props.shuffled ? (
                <Box
                  label={props.reverse ? '2' : '8'}
                  labeled={props.labeled}
                  items={props.reverse ? _.shuffle(props.g2) : _.shuffle(props.g8)}
                />
              ) : (
                <Box
                  label={props.reverse ? '2' : '8'}
                  labeled={props.labeled}
                  items={props.reverse ? props.g2 : props.g8}
                />
              )}
            </Grid>
            <Grid item xs={4}>
              <Box
                label={props.reverse ? '4' : '4'}
                labeled={props.labeled}
                items={props.shuffled ? _.shuffle(props.g4) : props.g4}
              />
            </Grid>
            <Grid item xs={6}>
              {props.shuffled ? (
                <Box
                  label={props.reverse ? '8' : '2'}
                  labeled={props.labeled}
                  items={props.reverse ? _.shuffle(props.g8) : _.shuffle(props.g2)}
                />
              ) : (
                <Box
                  label={props.reverse ? '8' : '2'}
                  labeled={props.labeled}
                  items={props.reverse ? props.g8 : props.g2}
                />
              )}
            </Grid>
            <Grid item xs={6}>
              {props.shuffled ? (
                <Box
                  label={props.reverse ? '16' : '1'}
                  labeled={props.labeled}
                  items={props.reverse ? _.shuffle(props.g16) : _.shuffle(props.g1)}
                />
              ) : (
                <Box
                  label={props.reverse ? '16' : '1'}
                  labeled={props.labeled}
                  items={props.reverse ? props.g16 : props.g1}
                />
              )}
            </Grid>
          </Grid>
        </div>
        {/* 6 Grids */}
        <div style={{ display: props.ng === 6 ? 'block' : 'none' }}>
          <Grid container spacing={8}>
            <Grid item xs={4}>
              {props.shuffled ? (
                <Box
                  label={props.reverse ? '1' : '32'}
                  labeled={props.labeled}
                  items={props.reverse ? _.shuffle(props.g1) : _.shuffle(props.g32)}
                />
              ) : (
                <Box
                  label={props.reverse ? '1' : '32'}
                  labeled={props.labeled}
                  items={props.reverse ? props.g1 : props.g32}
                />
              )}
            </Grid>
            <Grid item xs={4}>
              {props.shuffled ? (
                <Box
                  label={props.reverse ? '2' : '16'}
                  ß
                  labeled={props.labeled}
                  items={props.reverse ? _.shuffle(props.g2) : _.shuffle(props.g16)}
                />
              ) : (
                <Box
                  label={props.reverse ? '2' : '16'}
                  labeled={props.labeled}
                  items={props.reverse ? props.g2 : props.g16}
                />
              )}
            </Grid>
            <Grid item xs={4}>
              {props.shuffled ? (
                <Box
                  label={props.reverse ? '4' : '8'}
                  labeled={props.labeled}
                  items={props.reverse ? _.shuffle(props.g4) : _.shuffle(props.g8)}
                />
              ) : (
                <Box
                  label={props.reverse ? '4' : '8'}
                  labeled={props.labeled}
                  items={props.reverse ? props.g4 : props.g8}
                />
              )}
            </Grid>
            <Grid item xs={4}>
              {props.shuffled ? (
                <Box
                  label={props.reverse ? '8' : '4'}
                  labeled={props.labeled}
                  items={props.reverse ? _.shuffle(props.g8) : _.shuffle(props.g4)}
                />
              ) : (
                <Box
                  label={props.reverse ? '8' : '4'}
                  labeled={props.labeled}
                  items={props.reverse ? props.g8 : props.g4}
                />
              )}
            </Grid>
            <Grid item xs={4}>
              {props.shuffled ? (
                <Box
                  label={props.reverse ? '16' : '2'}
                  labeled={props.labeled}
                  items={props.reverse ? _.shuffle(props.g16) : _.shuffle(props.g2)}
                />
              ) : (
                <Box
                  label={props.reverse ? '16' : '2'}
                  labeled={props.labeled}
                  items={props.reverse ? props.g16 : props.g2}
                />
              )}
            </Grid>
            <Grid item xs={4}>
              {props.shuffled ? (
                <Box
                  label={props.reverse ? '32' : '1'}
                  labeled={props.labeled}
                  items={props.reverse ? _.shuffle(props.g32) : _.shuffle(props.g1)}
                />
              ) : (
                <Box
                  label={props.reverse ? '32' : '1'}
                  labeled={props.labeled}
                  items={props.reverse ? props.g32 : props.g1}
                />
              )}
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  </div>
));

export default Grids;
