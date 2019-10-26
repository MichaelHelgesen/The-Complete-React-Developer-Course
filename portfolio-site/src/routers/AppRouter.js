import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import PortfolioItemPage from "../components/PortfolioItemPage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/portfolio" component={Portfolio} exact={true} />
                <Route path="/portfolio/:id" component={PortfolioItemPage} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;


// <Route path="/" component={ExpenseDashboardPage} exact={true} />
// <Route path="/create" component={AddExpensePage} />
// <Route path="/edit/:id" component={EditExpensePage} />
// <Route path="/help" component={HelpPage} />