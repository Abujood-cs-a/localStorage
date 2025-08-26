let myButton = document.querySelector('button');

window.onscroll = function()  {
    if(window.scrollY >= 600)
        myButton.style.display = 'block';
    else 
        myButton.style.display = 'none';
}

myButton.addEventListener('click', _ => { 
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
})

let list = document.querySelectorAll('ul li');
let div = document.querySelector('.one');

if(window.localStorage.getItem('color')) { // if there is a local storage

    // [1] add color div 
    div.style.backgroundColor = window.localStorage.getItem('color');

    // [2] Remove Active Class From All List
           list.forEach(e => { 
            e.classList.remove('active');
        });

    // [3] add current Color
    document.querySelector(`[data-color="${window.localStorage.getItem('color')}"]`);

} else alert('no');

list.forEach(li => { 
   
    li.addEventListener('click', e => { 

        // [1] Remove Active Class From All List
        list.forEach(e => { 
            e.classList.remove('active');
        });

        // [2] Add Active Class
        e.currentTarget.classList.add('active');

        // [3] add color in local storage
        window.localStorage.setItem('color', e.currentTarget.dataset.color);

        // [4] change div background color
        div.style.backgroundColor = e.currentTarget.dataset.color;

    });
    
});

let family = document.getElementById('family');
let color = document.getElementById('color');
let size = document.getElementById('size');

family.onchange = function() { 
    window.localStorage.setItem('family', family.value);
    document.body.style.fontFamily = family.value;
}

color.onchange = function() { 
window.localStorage.setItem('color', color.value);
    document.body.style.color = color.value;
}

size.onchange = function() { 
window.localStorage.setItem('size', size.value);
    document.body.style.fontSize = size.value;
}

document.body.style.fontFamily = window.localStorage.getItem('family');
document.body.style.color = window.localStorage.getItem('color');
document.body.style.fontSize = window.localStorage.getItem('size');

family.value = window.localStorage.getItem('family');
color.value = window.localStorage.getItem('color');
size.value = window.localStorage.getItem('size');