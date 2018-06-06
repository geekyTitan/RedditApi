var searchItem1 = document.querySelectorAll('.itm1');
var searchItem2 = document.getElementById('exampleFormControlSelect1');
var bton = document.getElementById('brtn');
var div = document.getElementById('results');
var output;

   bton.addEventListener('click', (e) => {

      var srch1 = searchItem1.value;
      var srch2 = searchItem2.value;



     fetch(`http://www.reddit.com/search.json?q=${srch1}&limit=${srch2}`,{method:'GET'})
     .then(res => res.json())
     .then(data => display(data))

 })

 function display(data){
    var res = data.data.children;

     output = `<div class="card-columns">`
     for(var i = 0 ; i < res.length ; i++){
     var individual = res[i].data;
     var img = individual.preview?individual.preview.images[0].source.url : 'http://www.userlogos.org/files/reddit-person-logo-png.png';

     var selftxt = individual.selftext.substring(0,200);


     output += `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${img}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${individual.title}</h5>
    <p class="card-text">${selftxt}</p>
    <a href="${individual.url}" class="btn btn-primary">Read More</a>
  </div>
</div>`
     }
     output += `</div`;
  div.innerHTML = output;
}
