document.getElementById("btn").addEventListener('click', makerequest)

// function makerequest(){
//     console.log("Button Clicked")
//     axios({
//     method: 'get',
//     url:'data.txt'
//     }).then((res)=>{
//         console.log(res)
//         console.log(res.data)
//     })
// }
   
// function makerequest(){
//          console.log("Button Clicked")
//         axios.get('data.txt').then((res)=>{
//             console.log(res);
//             console.log(res.data)

//         })
// }

// function makerequest(){
//     console.log("Button Clicked")
//    axios.get('data.txt' , {'method': 'get'}).then((res)=>{
//        console.log(res);
//        console.log(res.data)

//    })
// }

//Promise Then | Error Handling

// function makerequest(){
//     console.log("Button Clicked")
//    axios.get('data.txt').then((res)=>{
//        console.log(res);
//        console.log(res.data)
//    }).catch((error) =>{console.log(error)}).then (()=>{
//     console.log("Clean")
//    })
// }

//Promise Then |Showing data in browser
// function makerequest(){
//         console.log("Button Clicked")
//        axios.get('data.txt').then((res)=>{
//            console.log(res);
//            console.log(res.data)
//            document.getElementById("divdata").innerText = res.data
//        }).catch((error) =>{console.log(error)}).then (()=>{
//         console.log("Clean")
//        })
//     }

//Async and Await 
 async function  makerequest(){
    try{
        console.log("Button Clicked")
    // config = {
    //     method:'get',
    //     url : 'data.txt'
    // }
    const  res = await axios.get('data.txt')
    console.log(res)
    console.log(res.data)
    document.getElementById('divdata').innerText = res.data

    }catch(error){
      console.log(error)
    }
}



