import {setPersistence, signInWithEmailAndPassword,  browserSessionPersistence,
    browserLocalPersistence} from "firebase/auth";
import {auth} from "../../firebaseConfig.ts";

export async function login(email: string, password: string, rememberMe: boolean): Promise<void> {
    try {
        if (rememberMe)
            await setPersistence(auth, browserLocalPersistence);
        else
            await setPersistence(auth, browserSessionPersistence);
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        let errorMessage = "Ошибка авторизации";

        if (error && typeof error === "object" && 'code' in error) {
            switch (error.code) {
                case "auth/user-not-found":
                    errorMessage = "Неверный email";
                    break;
                case "auth/wrong-password":
                    errorMessage = "Неверный пароль";
                    break;
                case "auth/invalid-email":
                    errorMessage = "Неверный формат email";
                    break;
                case "auth/too-many-requests":
                    errorMessage = "Слишком много попыток входа. Пожалуйста, попробуйте позже";
                    break;
            }
        }
        throw new Error(errorMessage);
    }
}
