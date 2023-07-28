let shop = document.getElementById('shop') 
// ! {} means items

let shopItemsData = [{
    id:"asss",
    name: "Salicylic Acid Serum",
    price: 459,
    desc: "Offers exfoliation, pore unclogging, acne treatment, oil control, inflammation reduction",
    img: "images/img-1.jpeg",

}, {
    id:"jdfk",
    name: "Niacinamide serum",
    price: 599,
    desc: "Improves skin hydration, reduce appearance of pores, regulate sebum production",
    img: "images/img-2.jpeg",
    
}, {
    id:"kjdas",
    name: "Hyaluronic Acid Serum",
    price: 499,
    desc: "Intense hydration to the skin, helps to plump and moisturize",
    img: "images/img-3.jpg",
    
}, {
    id:"lkdskdsa",
    name: "Vitamin C Serum",
    price: 399,
    desc: "reduces hyperpigmentation, even out skin tone, and protect against damage                                .           ",
    img: "images/img-4.jpg",
    
}, {
    id:"e",
    name: "Retinol Serum",
    price: 499,
    desc: "romote collagen production, reduce the appearance of fine lines and wrinkles",
    img: "images/img-5.jpg",
    
}, {
    id:"f",
    name: "Peptide Serum",
    price: 419,
    desc: "reducing the signs of aging and promoting a youthful complexion",
    img: "images/img-6.jpg",
    
}, {
    id:"g",
    name: "Brightening Serum",
    price: 479,
    desc: "target hyperpigmentation and help even out skin tone                                .                   ",
    img: "images/img-7.jpg",
    
}, {
    id:"h",
    name: "Antioxidant Serum",
    price: 489,
    desc: "Protect the skin from free radical damage, environmental stressors",
    img: "images/img-8.jpg",
    
},] 

let basket = JSON.parse(localStorage.getItem("data")) || []

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id, name, price, desc, img} = x
        let search= basket.find((x)=>x.id===id) || []
        return  `
        <div id=product-id-${id} class="item">
            <img width="220" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>₹ ${price} </h2>
                    <div class="buttons">  
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">
                            ${search.item===undefined ? 0 : search.item}
                        </div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
        
    `
    }).join(""))
}

generateShop()

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id)
    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        })
    }
    else{
        search.item += 1
    }
    // console.log(basket);
    //saving items in a local storage ("key", object)
    localStorage.setItem("data", JSON.stringify(basket))
    update(selectedItem.id)
}
let decrement = (id) => { 
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id)
    
    if(search === undefined) return;
    
    else if(search.item === 0){
        return;
    }
    else{
        search.item -= 1
    }
    // console.log(basket);
    update(selectedItem.id)

    basket = basket.filter((x) => x.item !== 0)
    localStorage.setItem("data", JSON.stringify(basket)) 

}
let update = (id) => {
    let search = basket.find((x) => x.id === id)
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item
    calculation();
}

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item ).reduce((x, y)=>x+y, 0)
    
}
calculation()