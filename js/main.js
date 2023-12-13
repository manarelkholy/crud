var productNameInput=document.getElementById("productName");
var productPriceInput=document.getElementById("productPrice");
var productCatogryInput=document.getElementById("productCatogry");
var productDescInput=document.getElementById("productDesc");
// console.log(productName,productPrice,productCatogry,productDesc);


var products=[];
function addProduct(){
    var product={
        name:productNameInput.value,
        price:productPriceInput.value,
        catogry:productCatogryInput.value,
        description:productCatogryInput.value 
    };
products.push(product);
display(products);
clearForm();




console.log(products);
}

function display(arr){
    var box=``;
    for(var i=0;i<arr.length;i++){
        box+=`
       
            <tr>
                <td>${arr[i].name}</td>
                <td>${arr[i].price}</td>
                <td>${arr[i].catogry}</td>
                <td>${arr[i].description}</td>
                <td><button class="btn btn-outline-warning" >Update</button></td>
                <td><button class="btn btn-outline-danger" onclick="deleteProduct();">Delete</button></td>
            </tr>
        `
    }
    document.getElementById("tableBody").innerHTML=box;

}
function clearForm(){
    productNameInput.value="";
    productPriceInput.value="";
    productCatogryInput.value="";
    productDescInput.value="";
   

}
function deleteProduct(productIndex){
    products.splice(productIndex,1);
    display(products);

}











