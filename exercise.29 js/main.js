async function fetchData() {
    console.log ("iso daabac xogta ku jirta");
    let response =await fetch('data.json');
    console.log("response:", response);
}
fetchData();