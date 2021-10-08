import { Fragment } from "react";
import { useParams, useRouteMatch, Route, Link } from "react-router-dom";

import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "David Estrada",
    text: "Adaptability is the key to success",
  },
  {
    id: "q2",
    author: "Buddha",
    text: "Success is not the key to happiness, happiness is the key to success",
  },
  { id: "q3", author: "Master Yoda", text: "Do or do not. There is not try" },
];

const QuoteDetails = () => {
  const match = useRouteMatch();
  console.log(match) // we can see in DevTools that ReactRouter constructs the path props and URL props strings for us! So we don't have to manually write it out in our JSX
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  // recall that 'params' refers to the URL path "variable" name, thus here we're checking to see which quote.id === the URL quoteId

  if (!quote) {
    return <h3>No quote found!</h3>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        {/* match.path is a placeholder j */}
        <Comments />
      </Route>
      {/* <Route path='/quotes/:quoteId/comments'></Route> // manual writing of the URL path string */}
    </Fragment>
  );
};

export default QuoteDetails;

// TODO: Extract quoteId and output it on the screen.
