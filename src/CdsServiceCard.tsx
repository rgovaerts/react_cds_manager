import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Chip, createStyles, makeStyles, Theme } from '@material-ui/core';
import { HookIcon } from './HookIcon';

export interface CdsService {
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

export const CdsServiceCard = (cdsService: CdsService) => {

    const classes = useStyles();

    return <Card>
        <CardContent className={classes.card}>
            <Typography variant="h5" component="h5">
                {cdsService.title}
            </Typography>
            <Chip
                icon={<HookIcon />}
                label={cdsService.hook} />
            <Typography component="p">
                <i>
                    id {cdsService.id}
                </i>
            </Typography>
            <Typography component="p">
                {cdsService.description}
            </Typography>
            <div>
                {JSON.stringify(cdsService.prefetch)}
            </div>
        </CardContent>
        {/* <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions> */}
    </Card>
}