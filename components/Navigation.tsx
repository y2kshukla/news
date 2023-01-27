import { AppShell, Navbar, Header, Group, Text, Avatar, Space, ActionIcon, Button } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from './authcontextprovider';
import { runner } from './error';

export function Navigation({children}: {
    children: React.ReactNode;
}) {
    const { user, logOut } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await logOut();
            router.push("/signin");
        } catch (error: any) {
            console.log(error.message);
            runner(error);
        }
    };
    return (
        <AppShell
            navbarOffsetBreakpoint="sm"
            padding="md"
            // navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
            header={
                <Header height={{ base: 50, md: 70 }} p="md">
                    {/* <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}> */}
                        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                            <Group position={`apart`} w={`100%`}>
                                <Group>
                                    <Avatar size={`md`} radius={`xl`} color={`teal`}>D</Avatar>
                                    <Text weight={`bold`}>Application Name</Text>
                                </Group>
                                <Group>
                                    <Text>{ user.email }</Text>
                                    <Button variant={`subtle`} onClick={handleLogout}>Log out</Button>
                                </Group>
                            </Group>
                        </div>
                    {/* </div> */}
                </Header>
            }
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            { children }
        </AppShell>
    );
}