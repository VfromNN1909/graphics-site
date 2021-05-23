import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import NavPage from "./components/NavPage";
import React from "react";
import Introduction from "./pages/Introduction";
import Home from "./pages/Home";
import Concept from "./pages/Concept";
import Opportunity from "./pages/Opportunity";
import Systems from "./pages/Systems";
import Analyze from "./pages/Analiz";
import Conclusion from "./pages/Conclusion";

function App() {
    return (
        <Router>
            <Header />
            <NavPage/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/intro' exact component={Introduction}/>
                <Route path="/concept" exact component={Concept}/>
                <Route path="/opportunities" exact component={Opportunity}/>
                <Route path="/systems" exact component={Systems}/>
                <Route path="/analiz" exact component={Analyze}/>
                <Route path="/conclusion" exact component={Conclusion}/>
            </Switch>
        </Router>
    );
}

export default App;
