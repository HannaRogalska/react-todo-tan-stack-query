import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/appStore";
import type { FormValues } from "../../types/formType";

interface FormState {
    value: FormValues[];
}
const initialState: FormState = {
  value: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addOpinion: (state, action: PayloadAction<FormValues>) => {
          state.value.push(action.payload);
          
    },
  },
});
export const selectOptions = (state: RootState) => state.form.value;
export const { addOpinion } = formSlice.actions;

export default formSlice.reducer
