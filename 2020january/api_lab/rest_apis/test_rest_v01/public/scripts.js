//Script code for node js app 1




let create_flex_item = document.getElementsByClassName('normal_flex_items'),
create_flex_container = document.getElementsByClassName('flex_container'),
search_button = document.getElementById('search_button'),
search_div = document.getElementById('search_site');


search_button.addEventListener('click', show_search_bar)

// Access my api

 

function show_search_bar(){
    if(search_div.style.display === 'none'){
    search_div.style.display = 'block';
    search_button.innerHTML = 'Hide search';
    
    }else {
        search_div.style.display = 'none'
        search_button.innerHTML = 'Show search'
        
    }
}



