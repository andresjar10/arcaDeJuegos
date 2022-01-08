const path = require('path')
const {createReadStream} = require('fs')
const {createServer} = require('http')

// configuramos con una variable de entorno el puerto
const {PORT = 3000} = process.env

const PUBLIC_FOLDER = path.join(__dirname, '')
// creamos un requestListener para pasarle a nuestro servidor
const requestListener = (req, res) => {
  const {url} = req
  let statusCode = 200
  let contentType = 'text/html'
  let stream

  // si estamos pidiendo la ruta principal, devolvemos el contenido del index.html
  if (url === '/') {
    stream = createReadStream(`${PUBLIC_FOLDER}/index.html`)
  } else if (url.match("\.css$")) { // para los archivos CSS
    contentType = 'text/css'
  } else if (url.match("\.js$")) { // para los archivos JavaScript
    contentType = 'text/javascript'
  } else if (url.match("\.svg$")) { // para los archivos svg
    contentType ='image/svg+xml'
  } else if (url.match("\.png$")) { // para los archivos png
    contentType = 'image/png'
  } else if (url.match("\.ico$")) { // para los archivos png
    contentType = 'image/x-icon'
    stream = createReadStream(`${PUBLIC_FOLDER}/img/favicon.ico`)
  }

  if(url !== '/' && !url.match("\.ico$")){
    stream = createReadStream(`${PUBLIC_FOLDER}${url}`)
  }

  if (stream) {
    // escribimos las cabeceras de la respuesta dependiendo de la request
    res.writeHead(statusCode, {'Content-Type': contentType})
    // como tenemos un stream, lo enviamos a la respuesta
    stream.pipe(res)

  } else { // si no, devolvemos un string diciendo que no hemos encontrado nada
    statusCode = 404
    res.writeHead(statusCode, {'Content-Type': contentType})
    return res.end('Not found')
  }
}

// creamos un servidor con el requestListener
const server = createServer(requestListener)

// hacemos que el servidor escuche el puerto configurado
server.listen(PORT)