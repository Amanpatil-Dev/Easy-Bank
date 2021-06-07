const Ham=document.querySelector('.responsive')

Ham.addEventListener('click',(e)=>{
    const Link=e.target.closest('.responsive')
    if(!Link.firstElementChild.classList.contains('hidden')){
        Link.firstElementChild.classList.add('hidden')
        Link.firstElementChild.nextElementSibling.classList.remove('hidden')
        document.querySelector('.nav-custom-items').classList.add('nav-custom-items-active')

    }else{
        Link.firstElementChild.classList.remove('hidden')
        Link.firstElementChild.nextElementSibling.classList.add('hidden')
        document.querySelector('.nav-custom-items').classList.remove('nav-custom-items-active')


    }
})