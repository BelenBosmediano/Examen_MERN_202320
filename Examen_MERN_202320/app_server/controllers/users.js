// Desarrollo web 3 - Examen de medio semestre - 202320

// controllers -- users
const request = require('request'); // llamada al módulo request

// definir los URLs para los ambientes de desarrollo y producción
const apiOptions = {
  server: 'http://localhost:3000' // servidor local - desarrollo
};

if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://dw3-202320.herokuapp.com'; // servidor remoto - producción //poner el link de heroku
}





  // Crear usuarios
  // renderizar la vista usersAdd
  const renderaddUser = (req, res, responseBody) => {
    res.render('usersAdd', {title: 'Creación de usuarios'});
  }
  // POST - crear usuario
  const addUser = (req, res, responseBody) => {
    const path = '/api/users/';
    const postdata = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      direccion: req.body.direccion,
      identificacion: req.body.identificacion,
      telefono: req.body.telefono,
      edad: req.body.edad,
      tipo: req.body.tipo,
      nombres: req.body.nombres,
      carrera: req.body.carrera,
      creado: req.body.creado
    };
    const requestOptions = {
      url: `${apiOptions.server}${path}`,
      method: 'POST',
      json: postdata // lo que viene del formulario
    };
    request(
      requestOptions, // opciones de request
      (err, response, body) => { // callback: error, respuesta, cuerpo
        if(response.statusCode===201){ // 201 - Creado exitosamente
          res.render('usersAdd', {title: 'Creación de usuarios', mensaje: ' - Usuario creado exitosamente'});
        }else{ // error - renderizar la vista error
          console.log('Error: ', err);
          console.log('StatusCode: ', response.statusCode);
          console.log('Body: ', body);
          console.log('requestOptions: ', requestOptions);
          res.render('error', err, {title: 'Creación de usuarios', mensaje: 'Error al crear usuario'});
        }
      }
    )
  }

   // Cambiar usuario
  // renderizar la vista changeUser
  const renderchangeUser = (req, res, responseBody) => {
    res.render('usersAdd', {title: 'Creación de usuarios'});
  }
  // POST - crear usuario
  const changeUser = (req, res, responseBody) => {
    const path = '/api/users/';
    const postdata = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      direccion: req.body.direccion,
      identificacion: req.body.identificacion,
      telefono: req.body.telefono,
      edad: req.body.edad,
      tipo: req.body.tipo,
      nombres: req.body.nombres,
      carrera: req.body.carrera,
      creado: req.body.creado
    };
    const requestOptions = {
      url: `${apiOptions.server}${path}`,
      method: 'POST',
      json: postdata // lo que viene del formulario
    };
    request(
      requestOptions, // opciones de request
      (err, response, body) => { // callback: error, respuesta, cuerpo
        if(response.statusCode===201){ // 201 - Creado exitosamente
          res.render('usersAdd', {title: 'Creación de usuarios', mensaje: ' - Usuario creado exitosamente'});
        }else{ // error - renderizar la vista error
          console.log('Error: ', err);
          console.log('StatusCode: ', response.statusCode);
          console.log('Body: ', body);
          console.log('requestOptions: ', requestOptions);
          res.render('error', err, {title: 'Creación de usuarios', mensaje: 'Error al crear usuario'});
        }
      }
    )
  }

  


  module.exports = {
    renderaddUser,
    addUser,
    renderchangeUser,
    changeUser
  }