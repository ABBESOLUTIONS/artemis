export interface UserModel {
    displayName: string | null,
    email: string | null,
    emailVerified: boolean,
    phoneNumber: string | null,
    photoURL: string | null,
    uid: string,
}