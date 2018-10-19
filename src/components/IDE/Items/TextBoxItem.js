import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {observable, expr} from 'mobx';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      color:'red',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  });
  
  function TextBoxItem(props) {
    const { classes, theme } = props;
  
    return (
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent>
            <Typography  className={classes.content} component="h5" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Mac Miller
            </Typography>
          </CardContent>
          
        </div>
        
      </Card>
    );
  }
  
  TextBoxItem.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles, { withTheme: true })(TextBoxItem);