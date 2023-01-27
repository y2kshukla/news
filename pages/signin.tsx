import { Box, Button, Center, Checkbox, PasswordInput, Stack, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import Head from 'next/head'

export default function SignIn() {

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            termsofservice: false,
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length > 6 ? null : 'Password should be longer than 6 words'),
            termsofservice: (value) => (value == true ? null : 'Agree to work' ),
        }
    })

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Center component='main' sx={(theme) => ({
                height: '100vh'
            })}>
                <Box mx="auto" p={`md`} sx={(theme) => ({
                    borderRadius: theme.radius.sm,
                    backgroundColor: theme.colors.gray, 
                    width: `300px`,
                })}>
                    <Center>
                        <Title size={`h4`} mb={`sm`}>Sign Up</Title>
                    </Center>
                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <Stack spacing={`sm`}>
                            <TextInput
                                withAsterisk
                                label="Email"
                                placeholder="Your Email"
                                {...form.getInputProps('email')}
                            />
                            <PasswordInput
                                placeholder="Password"
                                label="Password"
                                withAsterisk
                                {...form.getInputProps('password')}
                            />
                            <Checkbox
                                label="I agree to work till the end"
                                {...form.getInputProps('termsofservice', { type: 'checkbox' })}
                            />
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </form>
                </Box>
            </Center>
        </>
    )
}
