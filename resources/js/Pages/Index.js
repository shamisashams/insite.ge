import "./App.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import Header from "../Components/Header/Header";
import MainPage from "./MainPage/MainPage";
import Footer from "../Components/Footer/Footer";
import AboutUs from "./AboutUs/AboutUs";
import FAQ from "./FAQ/FAQ";
import Vacancies from "./Vacancies/Vacancies";
import ShowVacancy from "./Vacancies/ShowVacancy/ShowVacancy";
import News from "./News/News";
import ShowNews from "./News/ShowNews/ShowNews";
import Blogs from "./Blogs/Blogs";
import ShowBlog from "./Blogs/ShowBlog/ShowBlog";
import Projects from "./Projects/Projects";
import WebDevelopment from "./WebDevelopment/WebDevelopment";
import Design from "./Design/Design";
import Planning from "./Planning/Planning";
import Virtualization from "./Virtualization/Virtualization";
import Contact from "./Contact/Contact";
import RemoteWork from "./RemoteWork/RemoteWork";
import Security from "./Security/Security";
import CDN from "./CDN/CDN";
import Solutions from "./Solutions/Solutions";
import {Fragment} from "react";
import {locale_route} from "./Helpers/locale_route";

export default function Index() {

    return (
        <Switch>
            <Route path="/ge" exact component={MainPage}/>
            <Route path="/about-us" exact component={AboutUs}/>
            <Route path="/faq" exact component={FAQ}/>
            <Route path="/vacancies" exact component={Vacancies}/>
            <Route path="/show-vacancy" exact component={ShowVacancy}/>
            <Route path="/news" exact component={News}/>
            <Route path="/show-news" exact component={ShowNews}/>
            <Route path="/blogs" exact component={Blogs}/>
            <Route path="/show-blog" exact component={ShowBlog}/>
            <Route path="/projects" exact component={Projects}/>
            <Route path="/web-development" exact component={WebDevelopment}/>
            <Route path="/design" exact component={Design}/>
            <Route path="/planning" exact component={Planning}/>
            <Route path="/virtualization" exact component={Virtualization}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/remote-work" exact component={RemoteWork}/>
            <Route path="/security" exact component={Security}/>
            <Route path="/cdn" exact component={CDN}/>
            <Route path="/solutions" exact component={Solutions}/>
        </Switch>

    );
}
