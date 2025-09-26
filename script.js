//sidebar toggle
const sidebar=document.getElementById("side-bar-all");
const openSidebarBtn=document.querySelector(".pannel-all");
const closeSidebarBtn=document.getElementById("closeSidebar");

//open sidebar
openSidebarBtn.addEventListener("click",()=>{
    sidebar.style.width="300px";//adjust width
});

//close sidebar
closeSidebarBtn.addEventListener("click", () => {
  sidebar.style.width = "0";
});


// Close sidebar when clicking outside
document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !openSidebarBtn.contains(event.target)) {
    sidebar.style.width = "0";
  }
});