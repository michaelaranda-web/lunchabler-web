import React from 'react';
import { App } from '../shared/app.jsx';
import { StaticRouter } from 'react-router';

export class SSRComponent extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Lunchabler</title>
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