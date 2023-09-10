// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { User } from "firebase/auth";
// import { RootState } from "../../app/store";

// interface initialStateT {
//     user: User | null,
// }
// const initialState: initialStateT = { user: null };
// const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         changeUser: (state, action: PayloadAction<User | null>) => {
//             state.user = action.payload;
//             console.log(state.user);
//         }
//     }
// })
// export const {
//     changeUser
// } = userSlice.actions

// export const selectCurrentUser = (state: RootState)=>state.user.user

// export default userSlice.reducer