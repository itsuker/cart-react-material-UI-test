

export const loadState = () => {
try{
    const serializedState = localStorage.getItem('cart');
    if(serializedState === null){
        return undefined;
    }
    return {product:{cart:JSON.parse(serializedState)}};
}catch(err){
    return undefined;
}
}
