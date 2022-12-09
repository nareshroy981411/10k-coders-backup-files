fetch("http://localhost:3000/doctors").then((res)=>{
    return res.json()
}).then(data=>{
    console.log(data)
    displayAllDoctors(data)
})

function displayAllDoctors(data){
    var memberInfo = document.getElementsByClassName("member-info");

    [...memberInfo].forEach((value,index)=>{
        var doctorHeading = document.createElement("h4")
        doctorHeading.innerHTML = data[index].doctorname
        value.append(doctorHeading)

        var doctorPosition = document.createElement("span")
        doctorPosition.innerHTML = data[index].doctorPosition
        value.append(doctorPosition)
    })

    // [...memberInfo].find((value,index)=>{
    //     var doctorHeading = document.createElement("h4")
    //     doctorHeading.innerHTML = data[index].doctorname
    //     value.prepend(doctorHeading)
    // })

    // [...memberInfo].filter((value,index)=>{
    //     var doctorHeading = document.createElement("h4")
    //     doctorHeading.innerHTML = data[index].doctorname
    //     value.prepend(doctorHeading)
    // })

    // [...memberInfo].some((value,index)=>{
    //     var doctorHeading = document.createElement("h4")
    //     doctorHeading.innerHTML = data[index].doctorname
    //     value.prepend(doctorHeading)
    // })

    // [...memberInfo].find((value,index)=>{
    //     var doctorHeading = document.createElement("h4")
    //     doctorHeading.innerHTML = data[index].doctorname
    //     value.prepend(doctorHeading)
    // })

    // [...memberInfo].map((value,index)=>{
    //     var doctorHeading = document.createElement("h4")
    //     doctorHeading.innerHTML = data[index].doctorname
    //     value.prepend(doctorHeading)
    // })

    // for (const a of [...memberInfo].keys()) {
    //     var index = a ;
    //     var element = [...memberInfo] [a]
    //     var doctorHeading = document.createElement("h4")
    //     doctorHeading.innerHTML = data[index].doctorname
    //     element.prepend(doctorHeading)
    // }
    // console.log(memberInfo)
}