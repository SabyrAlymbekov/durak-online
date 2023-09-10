import { apiSlice } from "../api/apiSlice";
import { auth, storage } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import type { User } from "firebase/auth";
import { googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth"

import { ref, uploadBytesResumable } from "firebase/storage";

interface payload2 {
  email: string
  password: string
}
interface updatedProfile {
  user: object
  updateData: {[key: string]: string}
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    singup: build.mutation<object, payload2>({
      async queryFn({ email, password}, _api, _extraOptions, _baseQuery) {
        let user: User | null = null;
        let error = { message: "none" };
        await createUserWithEmailAndPassword(auth, email, password)
          .then(userCredential => {
            user = userCredential.user;
          })
          .catch(err => {
            if (err instanceof Error)
              error.message = err.message;
            else
              error = err;
          });
        if (user!=null){
          const user2: User = user;
          return { data: user2.toJSON() }
        }
        else {
          console.log("errorororogdjfgnosngodsng2222: ", error);
          return { error }
        }
      },
      invalidatesTags: ["User"],
    }),
    singin: build.mutation<object, payload2>({
      async queryFn({ email, password }, _api, _extraOptions, _baseQuery) {
        let user: User | null = null;
        let error = { message: "none" };
        await signInWithEmailAndPassword(auth, email, password)
          .then(userCredential => {
            user = userCredential.user;
          })
          .catch(err => {
            if (err instanceof Error)
              error.message = err.message;
            else
              error = err;
          });
        if (user!=null){
          const user2: User = user;
          return { data: user2.toJSON() }
        }
        else {
          console.log("errorororogdjfgnosngodsng2222: ", error);
          return { error }
        }
      },
      invalidatesTags: ["User"],
    }),
    signinwithGoogle: build.mutation<object, void>({
      async queryFn(_arg, _api, _extraOptions, _baseQuery) {
          let user: User | null = null;
        let error = { message: "none" };
        await signInWithPopup(auth, googleProvider)
          .then(userCredential => {
            user = userCredential.user;
          })
          .catch(err => {
            if (err instanceof Error)
              error.message = err.message;
            else
              error = err;
          });
        if (user!=null){
          const user2: User = user;
          return { data: user2.toJSON() }
        } else {
          return { error }
        }
      },
      invalidatesTags: ["User"],
    }),
    updatePofile: build.mutation<null, updatedProfile>({
      async queryFn(arg, _api, _extraOptions, _baseQuery) {
        if (auth.currentUser!=null)
          await updateProfile(auth.currentUser, arg.updateData)
        else
          return {error: {message:"Sign up first!"}}
        return {data: null};
      },
      invalidatesTags: ["User"],
    }),
    // getUser: build.query<object | null, void>({
    //   queryFn(_arg, _api, _extraOptions, _baseQuery) {
    //     let user: User | null = auth.currentUser;
    //     if (user) {
    //       return {data: user.toJSON()};
    //     }
    //     return {data: null};
    //   },
    //   providesTags: ["User"],
    // })
  })
})

export const {
  useSingupMutation,
  useSinginMutation,
  useSigninwithGoogleMutation,
  useUpdatePofileMutation,
  // useGetUserQuery,
} = authApiSlice