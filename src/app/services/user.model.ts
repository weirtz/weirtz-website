console.log("User model touched");
export interface User{
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    myCustomData?: string;
}