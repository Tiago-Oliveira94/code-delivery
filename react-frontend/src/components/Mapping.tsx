import { Button, Grid, MenuItem, Select } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Route } from "../utils/models";

const API_URL = process.env.REACT_APP_API_URL;

type Props = {};
export const Mapping = (props: Props) => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [routeIdSelected, setRouteIdSelected] = useState<string>("")

  useEffect(() => {
    fetch(`${API_URL}/routes`)
      .then((data) => data.json())
      .then((data) => setRoutes(data));
  }, []);
  return (
    <Grid container>
      <Grid item xs={12} sm={3}>
        <form>
          <Select 
            fullWidth
            displayEmpty
            value={routeIdSelected}
            onChange={(event)=> setRouteIdSelected(event.target.value + "")}
          >
            <MenuItem value="">
              <em>Select a race</em>
            </MenuItem>
            {routes.map((route, key) => (
              <MenuItem key={key} value={route.id}>
                {route.title}
              </MenuItem>
            ))}
          </Select>
          <Button type="submit" color="primary" variant="contained">
            Start race
          </Button>
        </form>
      </Grid>
      <Grid item xs={12} sm={9}>
        Map
        <div id="map"></div>
      </Grid>
    </Grid>
  );
};
