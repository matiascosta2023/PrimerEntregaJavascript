
let nombre = '' 
let email = '' 
let telefono = ''
let oficio = ''

function validateName(){  
  nombre = prompt('Ingresa tu nombre (prueba "Roberto o Jazmin")').toLowerCase()
  let capitalizedName = nombre.charAt(0).toUpperCase() + nombre.slice(1)
  
  while(!capitalizedName || ['Roberto', 'Jazmin'].includes(capitalizedName)){
    switch(capitalizedName){
      case false:
        alert('debes ingresar un nombre valido, intenta nuevamente')
        nombre = prompt('Ingresa tu nombre (prueba "jazmin")').toLowerCase()
        capitalizedName = nombre.charAt(0).toUpperCase() + nombre.slice(1)
        break
      case 'Jazmin':
        alert('No se acepta jazmin, lo lamentamos mucho por el nombre que te eligieron al nacer')
        nombre = prompt('Intenta ingresar un nombre que no sea Jazmin').toLowerCase()
        capitalizedName = nombre.charAt(0).toUpperCase() + nombre.slice(1)
        break
      case 'Roberto':
        alert('No se acepta Roberto, lo lamentamos mucho por el nombre que te eligieron al nacer')
        nombre = prompt('Intenta ingresar un nombre que no sea Roberto').toLowerCase()
        capitalizedName = nombre.charAt(0).toUpperCase() + nombre.slice(1)
        break      
    }
  }
  return capitalizedName
}

function containsAtSymbol(string) {
  return string.includes("@");
}

function validateEmail(){
  email = prompt('ingresa el email')
  while(!email || !containsAtSymbol(email)){
      alert('debes ingresar un email valido')
      email = prompt('ingresa un email valido')
  }
  return email
}

function validatePhoneNumber() {
  telefono = prompt("Ingrese el número de teléfono ej: 54 9 11 3354 1454")
  telefono = telefono.replace(/\s/g, "")
  let regex = /^54\d{11}$/
  while(!regex.test(telefono)){
    alert('El codigo de area debe comenzar con 54 seguido del 9 y tener en total 13 numeros')
    telefono = prompt("Ingrese el número de teléfono ej: 54 9 11 3364 1454").replace(/\s/g, "")
  }
  return telefono
}


function validateOficio(){  
    nombre = prompt('Ingresa tu oficio (prueba "Politico o Carpintero")').toLowerCase()
    let capitalizedName = nombre.charAt(0).toUpperCase() + nombre.slice(1)
    
    while(!capitalizedName || ['Politico', 'Carpintero'].includes(capitalizedName)){
      switch(capitalizedName){
        case false:
          alert('Lo lamentamos, debes ingresar otro oficio valido, intente nuevamente')
          nombre = prompt('Ingresa tu nombre (prueba "politico")').toLowerCase()
          capitalizedName = nombre.charAt(0).toUpperCase() + nombre.slice(1)
          break
        case 'Carpintero':
          alert('No se acepta carpintero, tenemos cerruchos automaticos para esa tarea')
          nombre = prompt('Intenta ingresar un nombre que no sea Carpintero').toLowerCase()
          capitalizedName = nombre.charAt(0).toUpperCase() + nombre.slice(1)
          break
        case 'Politico':
          alert('Politico no es un trabajo honesto, debes elegir otro')
          nombre = prompt('Intenta ingresar un nombre que no sea Politico').toLowerCase()
          capitalizedName = nombre.charAt(0).toUpperCase() + nombre.slice(1)
          break      
      }
    }
    return capitalizedName
  }
  


console.log(`el nombre es ${validateName(nombre)}`)
console.log(`el email es ${validateEmail(email)}`)
console.log(`el telefono es ${validatePhoneNumber(telefono)}`)
console.log(`el oficio es ${validateOficio(oficio)}`)