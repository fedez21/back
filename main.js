<script>
 
</script>
<script>
  const editableDiv = document.getElementById('editable');

  editBtn.addEventListener('click', () => {
    window.location.href = 'indexx.html';
  });

  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'save') {
      editableDiv.innerHTML = event.data.content;
    }
  });
</script>
<script>
  function activarEdicion() {
  // Cambiar el color de fondo para indicar que la edición está activada
  document.body.style.backgroundColor = "lightblue";

  // Hacer que los elementos sean editables al hacer clic en ellos
  var elementos = document.getElementsByTagName("*");
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].setAttribute("contenteditable", "true");
  }
}

</script>
<script>
  function desactivarEdicion() {
  // Restablecer el color de fondo a su valor original
  document.body.style.backgroundColor = "";

  // Hacer que los elementos dejen de ser editables
  var elementos = document.getElementsByTagName("*");
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].removeAttribute("contenteditable");
  }
}

</script>



<script>
  var title = localStorage.getItem('title');
var content = localStorage.getItem('content');
if (title) {
  document.querySelector('#title').innerHTML = title;
}
if (content) {
  document.querySelector('#content').innerHTML = content;
}

</script>



function login() {
    // Obtener los valores de entrada del usuario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
 
    // Leer el archivo JSON de usuarios
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Convertir el texto JSON a un objeto JavaScript
        var users = JSON.parse(xhr.responseText);
 
        // Buscar al usuario en la lista de usuarios
        var found = false;
        for (var i = 0; i < users.length; i++) {
          if (users[i].username === username && users[i].password === password) {
            found = true;
            break;
          }
        }
 
        // Mostrar un mensaje de éxito o error según corresponda
        if (found) {
          alert("Login successful!");
          // Aquí rediriges a la página de edición
        } else {
          alert("Invalid username or password!");
        }
      }
    };
    xhr.send();
  }