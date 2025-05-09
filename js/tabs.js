const tabs = document.querySelectorAll(".tabs");
tabs.forEach(tabs=>{
    tabs.addEventListener("click", ()=>{
        tabs.classList.toggle("active")
    })
})

    
                const dialog = document.querySelector('dialog');
                const openDialogButton = document.getElementById('proyectos-dialog');

                openDialogButton.addEventListener('click', () => {
                    dialog.showModal();
                });
         