import { IDoctor } from "@/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DoctorState {
  profileDoctor?: IDoctor;
  appointment?: IDoctor;
}

const initialState: DoctorState = {};

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    setProfileDoctor(state, { payload }: PayloadAction<IDoctor>) {
      state.profileDoctor = payload;
    },
    setAppointment(state, { payload }: PayloadAction<IDoctor>) {
      state.appointment = payload;
    },
  },
});

export const { setProfileDoctor, setAppointment } = doctorSlice.actions;

export default doctorSlice.reducer;
