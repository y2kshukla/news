import { showNotification } from "@mantine/notifications";

export function success(type: boolean) { 
    showNotification({
        title: type ? 'Sign Up' : 'Log In',
        message: type ? 'You successfully Signed Up.' : 'You are successfully Logged in.',
        color: 'green',
    })
}