$(function(){
  getPosts();
});
function getPosts(){
  var template = '';

  GetData('https://jsonplaceholder.typicode.com/posts',{},function(response){

    GetData('https://jsonplaceholder.typicode.com/photos',{},function(result){
        var image = result.filter(function(itm){
          return response.id === itm.id;
        });

        console.log(image);
         $.each(response, function(i,item){
          template += `
            <section>
              <img scr="${image[0].url}>
              <p class="fs-3">${item.title}</p>
              <p class="lh-1">${item.body}</p>
            </section>`;
        });
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
