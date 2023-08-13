document.getElementById("btn").addEventListener("click", makerequest);


//Promise Then | Error Handling

// function makerequest(){
//     console.log("Button Clicked")
//     axios.get('data.json').then((res)=>{
//         console.log(res)
//         console.log(res.data)
//         console.log(res.data.name)
//         console.log(res.data.roll)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }

//Promise Then |Showing data in browser
// function makerequest(){
//         console.log("Button Clicked")
//        axios.get('data.json').then((res)=>{
//            console.log(res);
//            console.log(res.data)
//            document.getElementById("divdata1").innerHTML = res.data.name
//            document.getElementById("divdata2").innerHTML = res.data.roll
//        }).catch((error) =>{console.log(error)})
//     }

//Async and Await 
//  async function  makerequest(){
//     try{
//         console.log("Button Clicked")
//     // config = {
//     //     method:'get',
//     //     url : 'data.txt'
//     // }
//     const  res = await axios.get('data.json')
//     console.log(res)
//     console.log(res.data)
//     console.log(res.data.name)
//     console.log(res.data.roll)

//     }catch(error){
//       console.log(error)
//     }
// }

//Async and Await |Error Handling
 
async function  makerequest(){
    try{
        console.log("Button Clicked")
    // config = {
    //     method:'get',
    //     url : 'data.txt'
    // }
    const  res = await axios.get('data.json')
    console.log(res)
    console.log(res.data)
    document.getElementById('divdata1').innerText = res.data.name
    document.getElementById('divdata2').innerText = res.data.roll

    }catch(error){
      console.log(error)
    }
}


