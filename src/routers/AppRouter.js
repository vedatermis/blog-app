import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import BlogListPage from "../components/BlogListPage";
import BlogDetailsPage from "../components/BlogDetailsPage";
import ContactPage from "../components/ContactPage";
import NotFound from "../components/NotFound";

const AppRouter = () => {

    return (
        <BrowserRouter>
            <div>
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/blogs" component={BlogListPage} />
                    <Route path="/blogs/:id" component={BlogDetailsPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={NotFound} />
                </Switch>

            </div>
        </BrowserRouter>
    );

}

export default AppRouter;