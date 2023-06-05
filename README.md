html test

<button onclick="request()">Request data</button>
<div id="result"></div>


Js test
function request(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(response){
      return response.json()
    })
    .then((response) =>{
      var result = document.getElementById('result')
      var item = ''
      console.log(response)
      response.forEach(element => {
        item = 'User Id:' + element.userId + "Id:" + element.id + "title: " + element.title + "completed:" + element.completed  + "<br><br>" 
        console.log(item)

        result.append(item)
      })
    })
  }