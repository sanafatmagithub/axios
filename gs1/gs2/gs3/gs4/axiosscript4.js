document.getElementById("btn").addEventListener("click", makerequest);
// https://reqres.in/api/users

//Promise then

// function makerequest(){
//     console.log("Button Clicked")
//     const config={
//         method: 'POST',
//         url: 'https://reqres.in/api/users',
//         headers:{
//             'Content-Type' :'application/json'
//         },
//         data:'{"name" :"Sonam", "Job": "Web Dev"}'
//     }
//     axios(config).then((res)=>{
//         console.log(res.data)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }


//SHORTHAND
// function makerequest(){
//     console.log("Button Clicked")
//     const config={
//        // method: 'POST',
//        // url: 'https://reqres.in/api/users',
//         headers:{
//             'Content-Type' :'application/json'
//         },
//         //data:'{"name" :"Sonam", "Job": "Web Dev"}'
//     }
//     axios.post('https://reqres.in/api/users','{"name" :"Sana", "Job": "Developer"}', config).then((res)=>{
//         console.log(res.data)
//     }).catch((error)=>{
//         console.log(error)
//     })
//}

//Async and Await
async function makerequest(){
    try{
        console.log("Button Clicked")
        const config = {
            //method: 'POST',
            //url: 'https://reqres.in/api/users',
            headers:{
                'Content-Type' : 'application/json'
            },
           // data: '{"name":"Sonam", "Job":"Web Dev"}'     
          }
        const res = await axios.post('https://reqres.in/api/users',{"name":"Sana", "Job":"Developer"},config)
         console.log(res.data)
    }catch(error){
        console.log(error)
    }
}