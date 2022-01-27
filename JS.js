const text = document.getElementById('text')
const list = document.getElementById('list')
const btn = document.getElementById('btn')
var count = 0 ;
btn.addEventListener('click', function(){
    let item = document.createElement('li')
    count++
    document.getElementById('num').innerHTML = count;
    item.innerHTML= text.value
    list.appendChild(item)
    document.getElementById('text').value = "";
    
    item.addEventListener('click',function(){ // check item
        this.classList.add('complete')

        item.addEventListener('click',function(){// uncheck
        this.classList.remove('complete')
  
    })

    })
    
    })



    
    localStorage.setItem('defualt', 'My first note'); // local storage
    var local = localStorage.getItem('defualt');
    
    document.getElementById('de') == local; // does not work ?

    console.log(local); // works?????
    
