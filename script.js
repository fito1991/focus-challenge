const url = 'https://jsonplaceholder.typicode.com/users/';

fetch(url)
  .then(response => {
    if(response.status >= 200 && response.status < 300){
      // console.log(response.status);
      return response.json(); 
    }else{

      console.log(response.status);
    }
  })
  .then(jsonUsuarios => { 
    
    //Guardo el listado de los usuarios
    var usuarios = jsonUsuarios;
    // console.log(usuarios);

  });

