import { renderToString } from 'react-dom/server';

export default (renderMe) => {
  return `<!DOCTYPE html>
    <html>
      <head>
        <title>"Lunchabler"</title>
        <link rel="stylesheet" href="/stylesheets/style.css"></link>
      </head>
      <body>
        <div id="lunchabler-app">${renderToString(renderMe)}</div>
        <script src="/javascripts/bundle.js"></script>
      </body>
    </html>
  `;
};