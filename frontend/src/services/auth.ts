import {setPersistence, signInWithEmailAndPassword,  browserSessionPersistence, browserLocalPersistence,
    createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, confirmPasswordReset,
    reauthenticateWithCredential, EmailAuthProvider, updatePassword} from "firebase/auth";
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

export async function register(email: string, password: string): Promise<void> {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        if (userCredential.user) {
            await sendEmailVerification(userCredential.user);
        }
    } catch (error) {
        let errorMessage = "Ошибка регистрации";

        if (error && typeof error === "object" && 'code' in error) {
            switch (error.code) {
                case "auth/email-already-in-use":
                    errorMessage = "Такой email уже используется";
                    break;
                case "auth/invalid-email":
                    errorMessage = "Неверный формат email";
                    break;
                case "auth/weak-password":
                    errorMessage = "Пароль слишком слабый";
                    break;
            }
        }
        throw new Error(errorMessage);
    }
}

export async function forgotPassword(email: string): Promise<void> {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        let errorMessage = "Ошибка сброса пароля";

        if (error && typeof error === "object" && 'code' in error) {
            switch (error.code) {
                case "auth/invalid-email":
                    errorMessage = "Неверный формат email";
                    break;
                case "auth/user-not-found":
                    errorMessage = "Неверный email";
                    break;
            }
        }
        throw new Error(errorMessage);
    }
}

export async function setNewPassword(oobCode: string, newPassword: string): Promise<void> {
    try {
        await confirmPasswordReset(auth, oobCode, newPassword);
    } catch (error) {
        let errorMessage = "Ошибка смены пароля";
        console.log(error)
        if (error && typeof error === "object" && 'code' in error) {
            switch (error.code) {
                case "auth/expired-action-code":
                    errorMessage = "Действие формы истекло";
                    break;
                case "auth/invalid-action-code":
                    errorMessage = "Форма недействительна";
                    break;
                case "auth/user-not-found":
                    errorMessage = "Пользователь не найден";
                    break;
                case "auth/weak-password":
                    errorMessage = "Пароль слишком слабый";
                    break;
                case "auth/internal-error":
                    errorMessage = "Произошла внутренняя ошибка. Попробуйте еще раз позже.";
                    break;
            }
        }
        throw new Error(errorMessage);
    }
}

export async function changePassword(currentPassword: string, newPassword: string): Promise<void> {
    try {
        const user = auth.currentUser;
        if (!user) {
            const error = new Error();
            error.code = "auth/user-not-authorized";
            throw error;
        }

        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);

    } catch (error) {
        let errorMessage = "Ошибка смены пароля";

        if (error && typeof error === "object" && 'code' in error) {
            switch (error.code) {
                case "auth/wrong-password":
                    errorMessage = "Неверный текущий пароль";
                    break;
                case "auth/user-not-found":
                    errorMessage = "Пользователь не найден";
                    break;
                case "auth/weak-password":
                    errorMessage = "Пароль слишком слабый";
                    break;
                case "auth/user-not-authorized":
                    errorMessage = "Пользователь не в системе"
                    break;
            }
        }
        throw new Error(errorMessage);
    }
}
