const navheader = document.querySelector('header');
const navtoggle = document.querySelector('button');

    navtoggle.addEventListener('click', () =>{
        const visibility = navtoggle.getAttribute('data-visible');
        console.log(visibility)
        if(visibility === "false"){
            navheader.setAttribute('data-visible', true);
        }else if(visibility === "true"){
            navheader.setAttribute('data-visible', false);
        }
        if(visibility === "false"){
            navtoggle.setAttribute('data-visible', true);
        }
        else if(visibility === "true"){
            navtoggle.setAttribute('data-visible', false);
        }
    });

