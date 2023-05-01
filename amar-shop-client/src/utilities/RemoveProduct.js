import { getData } from "./AddedProduct";

export const RemoveProduct = (id) => {
    console.log(id, 'called');
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        const jsonData = JSON.parse(storedCart)
        if (id in jsonData) {
            delete jsonData[id];
            localStorage.setItem('cart', JSON.stringify(jsonData));
            getData()
        }
    }
}