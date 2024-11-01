const tabs = document.querySelectorAll(".tabs");
tabs.forEach(tabs=>{
    tabs.addEventListener("click", ()=>{
        tabs.classList.toggle("active")
    })
})