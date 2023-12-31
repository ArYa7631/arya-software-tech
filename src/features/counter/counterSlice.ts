import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';

export type counterState = {
    value: number,
}
const initialState: counterState = {
    value: 0,
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
});

export const {
    increment,
    decrement,
    incrementByAmount
} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer; 