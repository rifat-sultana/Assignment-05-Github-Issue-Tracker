

const issuesContainer= document.getElementById("issues-container");
const searchInput=document.getElementById("search-input");
const searchBtn=document.getElementById("search-btn");

let issues = [];

  async function loadIssues(){
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
  const data = await res.json();
  issues = data.data;
  displayIssues(issues);

}

loadIssues();

  function displayIssues(issuesData){

  issuesContainer.innerHTML = "";

  issuesData.forEach(issue => {

    const card = `
    <div class="card bg-base-100 shadow-md p-4">
    <h2 class="font-bold">${issue.title}</h2>
    <p>${issue.description}</p>

</div>
`;

     issuesContainer.innerHTML += card;

});

}

let allIssues = [];


const buttons = document.querySelectorAll(".tab-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", function(){

    // remove active from all
   
    buttons.forEach(btn => {
      btn.classList.remove("bg-purple-600","text-white");
      btn.classList.add("bg-gray-50","text-black");
    });

    // add active to clicked
    this.classList.remove("bg-gray-50");
    this.classList.add("bg-purple-600","text-white");

  });
});


fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
.then(response => response.json())
.then(data => console.log(data));

const loadAll= () =>{
 fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
.then(response => response.json())
.then(data => {
    console.log(data)
    allIssues = data.data;

   showIssues(allIssues);
});

};

  const showAll = () => { 
  showIssues(allIssues);
};
// "id": 2,
// "title": "Add dark mode support",
// "description": "Users are requesting a dark mode option. This would improve accessibility and user experience.",
// "status": "open",
// "labels": [
// "enhancement",
// "good first issue"
// ],
// "priority": "medium",
// "author": "sarah_dev",
// "assignee": "",
// "createdAt": "2024-01-14T14:20:00Z",
// "updatedAt": "2024-01-16T09:15:00Z"

const showOpen = () => {

  const openIssues= allIssues.filter(issue => issue.status === "open");
  console.log(openIssues);
  showIssues(openIssues);

};

const showClosed = () => {

  const closedIssues = allIssues.filter(issue => issue.status === "closed");
  console.log(closedIssues);
  showIssues(closedIssues);
}

// issue count........
  const updateIssueCount= (count) => {
  const countElement = document.getElementById("issue-count");
  countElement.innerText = count + "Issues";
  };

  const showIssues = (issues) =>{
  const container = document.getElementById("issues-container")
  container.innerHTML = " ";
  updateIssueCount(issues.length); 
  issues.forEach(issue =>{

    const newDate = new Date(issue.createdAt).toLocaleDateString();

    //  color logic......
    let priorityColor = "";
    let priorityText = issue.priority.toUpperCase();

    if(issue.priority === "high"){
        priorityColor =  "bg-red-100 text-red-500 border-rounded-lg";
    }
    else if(issue.priority === "medium"){
        priorityColor =  "bg-yellow-100 text-yellow-600 border-rounded-lg ";
    }
    else{
        priorityColor =  "bg-gray-200 text-gray-600 border-rounded-lg";
    }

    //  labels......

    let labelHTML = "";

      const labelsHTML = issue.labels
      .map(label => `<span class=" bg-amber-200 badge badge-outline border px-2 py-1">${label}</span>`)
      .join(" ");


    // differentiate open +closed card ......
     const borderColor =
     issue.status === "open" ? "border-green-500" : "border-purple-500";


    container.innerHTML +=`
    <div class="bg-white rounded-lg shadow border-t-4 ${borderColor} p-4">

     <div class="flex justify-end mb-2">
       <span class=" bg-amber-100 text-[#D97706] text-md font-bold rounded-lg px-2 py-1">
          ${priorityText}
        </span>
     </div>

      <h3 class="font-bold text-black text-sm mb-2">
          ${issue.title}
      </h3>
        
        <p class="text-xs text-gray-700 mb-3">
          ${issue.description} 
         </P>

      <div class="flex gap-2 mt-2">
           ${labelsHTML}
      </div>
      <br>
     <hr>

     
      <p class="text-xs text-gray-400 mt-2">
          #${issue.id} by ${issue.author}
      </p>

       <p class="text-xs text-gray-400">
          ${newDate}
        </p>

</div>

` 
  })
}
    searchBtn.addEventListener("click", () => {

    const searchValue = searchInput.value.toLowerCase().trim();
    if(searchValue === ""){
    showIssues(allIssues);
    return;
}

   const filteredIssues = issues.filter(issue =>
   issue.title.toLowerCase().includes(searchValue) ||
   issue.description.toLowerCase().includes(searchValue)
);

displayIssues(filteredIssues);

});


loadAll();