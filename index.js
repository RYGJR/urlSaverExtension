
let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input")
const ulEl = document.getElementById("ul-el")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)
const deleteBtn = document.getElementById("delete-btn")
const saveTab = document.getElementById("savetab-btn")

// if leadsfromlocalstorage cotains a string, the things from localstorage goes to myleads
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


function render(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
      
        listItems += ` 
            <li>
            <a target="_blank" href=${leads[i]}>${leads[i]}</a>
            </li>
        `
        
    }
    ulEl.innerHTML = listItems
    
    }
    

saveTab.addEventListener("click", function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    
})



deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
    console.log("Double Click")

})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log( localStorage.getItem("myLeads") )
   
})


