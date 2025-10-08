import {ResponseType, UserDataType} from "@/types";
import {doc, updateDoc} from "@firebase/firestore";
import {firestore} from "@/config/firebase";

export const updateUser = async (
    uid: string,
    updatedData: UserDataType
): Promise<ResponseType> => {
    try {
        // image upload pending
        const userRef = doc(firestore, "users", uid);
        await updateDoc(userRef, updatedData);

        return { success: true, msg: "updated successfully" }
    } catch (error: any) {
        console.error("error updating user: ", error);
        return { success: false, msg: error?.message };
    }

}