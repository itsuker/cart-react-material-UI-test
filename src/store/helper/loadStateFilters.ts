
export const loadStateFilters = () => {
    try{
        const serializableState = localStorage.getItem('filters');
        if(serializableState === null){
            return undefined;
        }
        return {filters:JSON.parse(serializableState)};
    }
    catch(err){
        return undefined;
    }
 
    
}
