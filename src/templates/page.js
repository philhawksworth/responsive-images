module.exports = (data) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles.css">
    <title>${data.title}</title>
  </head>
  <body>
    <h1>Responsive Images loaded lazily</h1>
    <div class="wrapper">
    ${data.content}
    </div>
    <script src="/js/lazy.js" type="text/javascript"></script>
  </body>
  </html>
`;
