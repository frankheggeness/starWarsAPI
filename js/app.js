console.log('hello')
var box = document.getElementById('personbox')
var nameElement = document.createElement('div');
var heightElement = document.createElement('div');
var massElement = document.createElement('div');
var birthYear = document.createElement('div');

box.appendChild(nameElement);
box.appendChild(heightElement);
box.appendChild(massElement);
box.appendChild(birthYear)
function getData(){
    var random = Math.floor(Math.random()*87);

    var swApi = 'https://swapi.co/api/people/' + random;
    
    axios.get(swApi).then(function (response) {
        console.log(response.data);
        showData(response.data)
    
      })
      .catch(function (error) {
       noData();
      });
}

function showData(data){
    // var box = document.getElementById('personbox')
    // var nameElement = document.createElement('div');
    nameElement.id = 'character';
    nameElement.innerHTML = 'Name: ' + data.name;
    // var heightElement = document.createElement('div');
    heightElement.id = 'height';
    heightElement.innerHTML='Height: ' + data.height + ' cm'

    // var massElement = document.createElement('div');
    massElement.id = 'mass';
    massElement.innerHTML = 'Mass: ' + data.mass + ' kg'

    birthYear.id = 'birthYear';
    birthYear.innerHTML = 'Birth Year: ' + data.birth_year

    // box.appendChild(nameElement);
    // box.appendChild(heightElement);
    // box.appendChild(massElement);
}
var buttonFind = document.getElementById('profile');
buttonFind.addEventListener('click',getData);
function noData(){
    var box = document.getElementById('personbox')
    box.innerHTML = 'Brah no aliens hea'
}

