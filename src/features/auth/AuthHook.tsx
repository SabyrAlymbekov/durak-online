import { useSinginMutation, useSingupMutation, useUpdatePofileMutation, useSigninwithGoogleMutation } from "../../features/auth/authSlice"

export function useAuth () {
    const [singin, _res1] = useSinginMutation();
    const [singup, _res2] = useSingupMutation();
    const [updateProfile, _res3] = useUpdatePofileMutation();
    const [signinWithGoogle, _res4] = useSigninwithGoogleMutation();
    // const user = useGetUserQuery();
    return {singin, singup, updateProfile, signinWithGoogle};
}