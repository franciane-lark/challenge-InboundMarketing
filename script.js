$(function(){

});
function getPosts(){
  GetData('https://jsonplaceholder.typicode.com/posts',{},function(response){
    console.log(response);
    $.each(response, function(i,item){
      template += `
      <div>
        <p class="fs-3">${item.title}</p>
        <p class="lh-1">${item.body}</p>
      </div>`;
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
