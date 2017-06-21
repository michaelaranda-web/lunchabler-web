import React from 'react';
import { App } from '../shared/app.jsx';
import { StaticRouter } from 'react-router';

export class SSRComponent extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Lunchabler</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
          <link rel="stylesheet" href="/stylesheets/style.css"></link>
        </head>
        <body>
          <div id="lunchabler-app">
            <StaticRouter context={{}} location={this.props.location}>
              <App restaurants={this.props.restaurants} />
            </StaticRouter>
          </div>
          <script dangerouslySetInnerHTML={{
            __html: 'window.APP_PROPS= ' + JSON.stringify(this.props)
          }}></script>
          <script src="/javascripts/bundle.js"></script>
        </body>
      </html>
    );
  }
}