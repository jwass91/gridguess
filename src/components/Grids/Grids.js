import React, { memo } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Box from '../Box/index.js';

const Grids = memo(props => (
  <div style={{ margin: 14 }}>
      <Grid container spacing={16}>
        <Grid item xs={props.ng === 6 ? 4 : 3}>
          <Paper className='creationlist' style={{display: props.ng === 6 ? 'none' : 'block', padding: 14, minHeight: document.documentElement.clientHeight - 125, maxHeight: document.documentElement.clientHeight - 125, overflow: 'auto', overflowY: 'scroll'}}>
            {
              props.items.slice(0, 31).map(item => (
                <Typography variant='body2'>
                  <span style={{fontWeight: 'bold'}}>{item.id})</span> {item.text}
                </Typography>
              ))
            }
          </Paper>
          <Paper className='creationlist' style={{display: props.ng === 6 ? 'block' : 'none', minHeight: document.documentElement.clientHeight - 125, maxHeight: document.documentElement.clientHeight - 125, overflowX: 'hidden', overflowY: 'scroll'}}>
          <Grid container spacing={8}>
            <Grid item xs={6}>
                <div style={{padding: 14}}>
                {
                  props.items.slice(0, 32).map(item => (
                    <Typography variant='body2'>
                      <span style={{fontWeight: 'bold'}}>{item.id})</span> {item.text}
                    </Typography>
                  ))
                }
                </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{padding: 14}}>
              {
                  props.items.slice(32, 63).map(item => (
                    <Typography variant='body2'>
                      <span style={{fontWeight: 'bold'}}>{item.id})</span> {item.text}
                    </Typography>
                  ))
              }
              </div>
            </Grid>
          </Grid> 
          </Paper>
        </Grid>
        <Grid item xs={props.ng === 6 ? 8 : 9}>

          {/* 4 Grids */}
          <div style={{display: props.ng === 4 ? 'block' : 'none'}}>
          <Grid container spacing={8}>
            <Grid item xs={6}>
              <Box items={props.g8}/>
            </Grid>
            <Grid item xs={6}>
              <Box items={props.g4}/>
            </Grid>
            <Grid item xs={6}>
              <Box items={props.g2}/>
            </Grid>
            <Grid item xs={6}>
              <Box items={props.g1}/>
            </Grid>           
          </Grid>
          </div>
          {/* 5 Grids */}
          <div style={{display: props.ng === 5 ? 'block' : 'none'}}>
          <Grid container spacing={8}>
            <Grid item xs={4}>
              <Box items={props.g16}/>
            </Grid>
            <Grid item xs={4}>
              <Box items={props.g8}/>
            </Grid>
            <Grid item xs={4}>
              <Box items={props.g4}/>
            </Grid>
            <Grid item xs={6}>
              <Box items={props.g2}/>
            </Grid>
            <Grid item xs={6}>
              <Box items={props.g1}/>
            </Grid>         
          </Grid>
          </div>
          {/* 6 Grids */}
          <div  style={{display: props.ng === 6 ? 'block' : 'none'}}>
          <Grid container spacing={8}>
            <Grid item xs={4}>
              <Box items={props.g32}/>
            </Grid>
            <Grid item xs={4}>
              <Box items={props.g16}/>
            </Grid>
            <Grid item xs={4}>
              <Box items={props.g8}/>
            </Grid>
            <Grid item xs={4}>
              <Box items={props.g4}/>
            </Grid>
            <Grid item xs={4}>
              <Box items={props.g2}/>
            </Grid>  
            <Grid item xs={4}>
              <Box items={props.g1}/>
            </Grid>             
          </Grid>
          </div>
        </Grid>
      </Grid>
  </div>
));

export default Grids;