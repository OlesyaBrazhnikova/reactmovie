import React, { useEffect } from "react";
import "./MainNav.css";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Whatshot, Search, Movie, Tv } from '@mui/icons-material';
import { useHistory } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/movies");
    } else if (value === 2) {
      history.push("/series");
    } else if (value === 3) {
      history.push("/search");
    }
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className="nav"
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        icon={<Whatshot />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<Movie />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV Series"
        icon={<Tv />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<Search />}
      />
    </BottomNavigation>
  );
}
