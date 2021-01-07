import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import OfferPage from "./routes/OfferPage";
import MarketPage from "./routes/MarketPage";
import AboutPage from "./routes/AboutPage";
import AddOfferPage from "./routes/AddOfferPage";
import LoginPage from "./routes/LoginPage";
import NewsPage from "./routes/NewsPage";
import { ContextPlatformProvider } from "./context/contextPlatform";

function App() {
  return (
    <ContextPlatformProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            {" "}
            {/** using Switch to prevent loading of other routes when a chosen one is found */}
            <Route exact path="/" component={LoginPage}></Route>
            <Route exact path="/home" component={HomePage}></Route>
            <Route exact path="/news" component={NewsPage}></Route>
            <Route exact path="/getOffers" component={MarketPage}></Route>
            <Route exact path="/about" component={AboutPage}></Route>
            <Route exact path="/addOffer" component={AddOfferPage}></Route>
            <Route exact path="/getOffers/:id" component={OfferPage}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ContextPlatformProvider>
  );
}

export default App;
