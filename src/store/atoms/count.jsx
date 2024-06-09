//defined the count using an atom 

import {atom} from 'recoil'
const countAtom=atom({  //atom expects an object     
    key: "countAtom",
    default:0
})

export default countAtom;
