function request(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(response){
      return response.json()
    })
    .then((response) =>{
      console.log(response)
      var result = document.getElementById('result')
      result.innerHTML = 'User Id:' + response.userId + "Id:" + response.id + "title: " + response.title + "completed:" 
    })
  }