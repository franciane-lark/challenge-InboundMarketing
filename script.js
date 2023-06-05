$(function(){
  getPosts();
});
function getPosts(){
  var template = '';
  GetData('https://jsonplaceholder.typicode.com/posts',{},function(response){
    GetData('https://jsonplaceholder.typicode.com/photos',{},function(result){
      var image = result.filter(function(itm){
        return response.postId === itm.id;
      });
    });
    console.log(response);
    $.each(response, function(i,item){
      template += `
        <img class="card-img-top" scr="${image[0].url} alt="Card image">
        <p class="fs-3">${item.title}</p>
        <p class="lh-1">${item.body}</p>
      `;
    });
    $('#posts').html(template);
  });
}
function GetData(url,data,callback){
  $.ajax({
    url: url,
    type: "GET",
    success: callback,
  })
}
