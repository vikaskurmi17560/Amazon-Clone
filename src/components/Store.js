import {create} from "zustand"
export const useUserstore= create((set)=>({
    user:null,
    updateuser :(user)=>set(()=>({user}))
}))