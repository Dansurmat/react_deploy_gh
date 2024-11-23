async function getData(){
    const response =await new fetch('http://localhost:3000/');
    const data = await response.json();
    console.log(data);
}

getData();