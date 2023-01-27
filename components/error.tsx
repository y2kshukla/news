import { showNotification } from "@mantine/notifications";

export function runner(e: any) { 
    showNotification({
        title: 'Error Code',
        message: `${e}`,
        color: 'red',
    })
}