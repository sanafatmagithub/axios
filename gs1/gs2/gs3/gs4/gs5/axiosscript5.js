document.getElementById("btn").addEventListener("click", makerequest);
// https://reqres.in/api/users

//Promise then

// function makerequest(e){
//     e.preventDefault()
//     let name = document.getElementById("name").value 
//     let job = document.getElementById("job").value
//     console.log("Button Clicked")
//     const config={
//         method: 'POST',
//         url: 'https://reqres.in/api/users',
//         headers:{
//             'Content-Type' :'application/json'
//         },
//         data:  JSON.stringify({name:name, job:job})
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
 async function makerequest(e){
    e.preventDefault()
    let name = document.getElementById("name").value 
     let job = document.getElementById("job").value
     try{
        console.log("Button Clicked")
        const config = {
            method: 'POST',
            url: 'https://reqres.in/api/users',
            headers:{
                'Content-Type' : 'application/json'
            },
            data: JSON.stringify({name:name , job:job}) 
          }
        const res = await axios(config)
         console.log(res.data)
    }catch(error){
        console.log(error)
    }
}