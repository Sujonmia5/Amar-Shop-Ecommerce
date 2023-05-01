import toast from 'react-hot-toast';
export const AddedProduct = (id) => {
    let Shopping_cart = {}
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
        Shopping_cart = JSON.parse(storedCart)
    }
    const Quantity = Shopping_cart[id];
    if (Quantity) {
        const newQuantity = Quantity + 1
        Shopping_cart[id] = newQuantity;
    }
    else {
        Shopping_cart[id] = 1
    }
    localStorage.setItem('cart', JSON.stringify(Shopping_cart))
    toast.success('Product Added Successfully!')
}

export const StoreData = () => {
    const addProduct = localStorage.getItem('cart')
    const jsonData = JSON.parse(addProduct)
    if (jsonData === null) {
        return {}
    }
    return jsonData
}

export const getData = async () => {
    const jsonData = StoreData()
    const response = await fetch(`http://localhost:5500/products`)
    const { products } = await response.json()
    let cart = [];
    for (const id in jsonData) {
        // console.log(id);
        const cartProduct = products.find(product => product._id === id)
        cart.push({ ...cartProduct, quantity: jsonData[id] })
    }

    return cart;
}