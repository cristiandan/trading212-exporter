document.addEventListener("DOMContentLoaded", () => {
 var button = document.getElementById("exportcsv")

 button.addEventListener("click", (e) => {
   chrome.tabs.executeScript(null, {file: "t212_export_csv.js"});
 })
})

