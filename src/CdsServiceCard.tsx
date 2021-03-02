import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

interface CdsService {
  id: string;
  description: string;
  hook: string;
  title?: string;
  prefetch?: unknown;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      padding: theme.spacing(2),
    },
  }),
);

export const CdsServiceCard = ({hook, id, description, title, prefetch}: CdsService) => {

    const classes = useStyles();
    
    return <Card>
        <CardContent className={classes.card}>
            <Typography color="textSecondary" gutterBottom>
                { hook }
            </Typography>
            <Typography variant="h5" component="h2">
                { description }
            </Typography>
            <Typography color="textSecondary">
                id { id }
            </Typography>
            <Typography variant="body2" component="p">
                { title }
            </Typography>
            <div>
                { JSON.stringify(prefetch) }
            </div>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
}