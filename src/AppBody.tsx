
import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';
import { CdsServiceCard } from './CdsServiceCard';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';


interface CdsService {
  id: string;
  description: string;
  hook: string;
  title?: string;
  prefetch?: unknown;
}

interface ServerResponse {
  services: CdsService[]
}

interface AppPageProps {
  apiBaseUrl: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    error: {
      margin: 'auto',
      width: "50%",
      padding: theme.spacing(2),
    }
  }),
);


export const AppBody = ({ apiBaseUrl } : AppPageProps) => {

  const [cdsServices, setCdsServices] = useState(new Array<CdsService>());
  const [errorFetchingData, setErrorFetchingData] = useState(false);
  const [loading, setloading] = useState(false)
  const classes = useStyles();
  

  
  useEffect(() => {
    setloading(true);
    axios.get<ServerResponse>(apiBaseUrl + "/cds-services")
    .then(res => {
      setCdsServices(res.data.services);
    }).catch(e => {
      setErrorFetchingData(true);
      console.log(e);
    }).finally(() => {
      setloading(false);
    })
  }, [apiBaseUrl]);


  if(loading) {
    return <Grid container className={classes.root} justify="center" spacing={2}>
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
  }
  if (errorFetchingData) {
    return <div className={classes.error}><Alert severity="error">Error while loading data</Alert></div>
  } else {
    return <Grid container className={classes.root} justify="center" spacing={2}>
        { cdsServices.map(cdsService => (
          <Grid key={cdsService.id} item>
            <CdsServiceCard hook={cdsService.hook} id={cdsService.id} description={cdsService.description} />
          </Grid>
        ))}
      </Grid>
  }
  
}
