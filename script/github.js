
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
// assignee: "jane_smith"
// author: "john_doe"
// createdAt: "2024-01-15T10:30:00Z"
// description: "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior."
// id: 1
// labels: Array(2)
// 0: "bug"
// 1: "help wanted"
// length: 2
// priority: "high"
// status: "open"
// title: "Fix navigation menu on mobile devices"
// updatedAt: 2024-01-15T10:30:00Z"

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





const showIssues = (issues) =>{
  const container = document.getElementById("issue-container")
  container.innerHTML = "";

  issues.forEach(issue =>{

       const borderColor =

    issue.status === "open" ? "border-green-500" : "border-purple-500";


    container.innerHTML +=`
    <div class="bg-white rounded-lg shadow border-t-4 ${borderColor} p-4">
      <div>
       <img src=""
        <h3 class="font-bold text-black text-sm mb-2">
          ${issue.title}
        </h3>
        <p class="text-xs text-gray-700 mb-3">
          ${issue.description} 
         </P>

    <div class="flex gap-2 mb-3"> 
  
        <span class="text-xs bg-red-100 text-red-500 px-2 py-1 rounded">
           BUG
       </span>

       <span class="text-xs bg-yellow-100 text-yellow-600 px-2 py-2 rounded">
          HELP WANTED
        </span>
     </div>

     <hr>

       <p class="text-xs text-gray-400 mt-2">
          #${issue.id} by ${issue.author}
       </p>

       <p class="text-xs text-gray-400">
           ${issue.updatedAt}
       </p>

</div>

` 
  })
}

loadAll();