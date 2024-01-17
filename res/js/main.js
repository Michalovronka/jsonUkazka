

const loadData = async () =>{
    const file = await fetch("./res/data/data.json");
    const data = await file.json();
    return data;
}

window.onload = async () =>{
    const data = await loadData();
    console.log(data[0]);
    console.log(data[0].title + data[0].name );
}