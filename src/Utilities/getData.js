import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// for reads book
export const getRead = () => {
    let reads = [];
    const storeRead = localStorage.getItem('reads')
    if (storeRead) {
        reads = JSON.parse(storeRead)
    }
    return reads;
}

// save read
export const saveRead = (read) => {
    let reads = getRead()
    const isExist = reads.find(r => r.bookId === read.bookId)
    if (isExist) {
        return toast.error('already added')
    }
    reads.push(read)
    localStorage.setItem('reads', JSON.stringify(reads))
    toast.success('Successful added')
};

// for wishlist
export const getWishList = () => {
    let wishList = [];
    const storeWishList = localStorage.getItem('wishList')
    if (storeWishList) {
        wishList = JSON.parse(storeWishList)
    }
    return wishList;
}
export const saveWishList = (wish) =>{
    let wishList = getWishList()
    const isExist = wishList.find(w => w.bookId === wish.bookId);
    if(!isExist){
        wishList.push(wish)
        localStorage.setItem('wishList', JSON.stringify(wishList));
        toast.success('Successful added wishlist')
    }
    else{
        toast.error('already added wishlist')
    } 
        
}