console.log("js grocery bud");

submit = document.getElementById('submit');
grocery = document.getElementById('grocery');

grocerylist =  document.getElementById('grocery-list');


submit.addEventListener("click" , function () {
    console.log("submit clicked");
    console.log(grocery.value);

    localStorage.setItem('1' , grocery.value );
    
    let a  = localStorage.getItem('1') ;

    let li = document.createElement("li") ;
    li.classList.add('grocery-list-li');

    li.innerHTML +=   `<div class="single-list"> <p class="title">${a}</p>
    
      <button type="button" >
        <i  class="delete-btn fa fa-trash"></i>
      </button>
      </div>
  `;

    grocerylist.appendChild(li)

    deletegrocery.addEventListener("click" , deleteg);
});


deleteg = () => {
    // const deletegrocery = document.querySelectorAll('.delete-btn');
    
    // deletegrocery.forEach(element => {
    //     console.log(element);
        
        
        
    // });
    hi
    
}
const deletegrocery = document.querySelectorAll('.delete-btn');
