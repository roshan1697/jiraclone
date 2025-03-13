
import {create} from 'zustand'


interface mobilestate {
    value:boolean
    updateValue:(newValue:boolean) => void
}
export const useMobileState = create<mobilestate>((set)=>({
    value: false,
    updateValue: (newValue)=>set({value:newValue})
}))