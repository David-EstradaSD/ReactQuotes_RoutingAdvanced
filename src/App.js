import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

// -------- LAZY LOADING ----------

const NewQuote = React.lazy(() => import('./pages/NewQuote'));



function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetails />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
          {/* similar to Angular, * is a wildcard path that matches ALL URLs, thus why we have at the end of the Switch block */}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
