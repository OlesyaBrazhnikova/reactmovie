import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SimpleBottomNavigation from "./components/MainNav/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from "@mui/material";


const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const Page = styled.div`
  width: 100%;
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
`;

const Splash = (props) => {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

    return (
        <Page>
			<BrowserRouter>
				<Header />
				<div className="app">
					<Container>
						<Toggle 
							className="toggleTheme"
							onClick={changeTheme}>
							{icon}
						</Toggle>
						<Switch>
							<Route path="/" component={Trending} exact />
							<Route path="/movies" component={Movies} />
							<Route path="/series" component={Series} />
							<Route path="/search" component={Search} />
						</Switch>
					</Container>
				</div>
				<SimpleBottomNavigation />
			</BrowserRouter>
        </Page>
    );
};

export default Splash;
