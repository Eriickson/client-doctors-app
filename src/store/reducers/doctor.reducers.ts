import { IDoctor } from "@/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DoctorState {
  profileDoctor?: IDoctor;
}

const initialState: DoctorState = {};

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    setProfileDoctor(state, { payload }: PayloadAction<IDoctor>) {
      state.profileDoctor = payload;
    },
  },
});

export const { setProfileDoctor } = doctorSlice.actions;

export default doctorSlice.reducer;
