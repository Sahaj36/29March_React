fetch('https://fakestoreapi.com/products')
.then((res)=>{
    return res.json();
})

.then((arrdata)=>{
    var data="";
    const newarr=arrdata.map((cval)=>{
         data+=`<tr>
         <td>${cval.id}</td>
         <td>${cval.title}</td>
         <td>${cval.category}</td>
         <td>${cval.price}</td>
         <td>${cval.description}</td>
         <td><img src="${cval.image}"height="75px"width="75px"></td>
     </tr>`
        // console.log(cval.title)
    })
document.getElementById("data").innerHTML=data;
})