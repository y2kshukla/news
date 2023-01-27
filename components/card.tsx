import { Card, Image, Text, Badge, Button, Group, Stack } from '@mantine/core';
import {PropsWithChildren} from 'react';

interface cardTypes {
    img: string | null,
    title: string | null,
    time: string | null,
    author: string | null,
    desc: string | null,
    link: string,
}

const Cards = (cardProps: PropsWithChildren<cardTypes>) => {
    return (
        <Card style={{ height: '100%' }} shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section component="a" href={cardProps.link}>
                <Image
                src={cardProps.img}
                height={160}
                alt="Norway"
                />
            </Card.Section>

            <Stack>
                <Group position="apart" mt="md" mb="xs">
                    <Stack spacing={`xs`}>
                        <Text weight={500} lineClamp={1}>{cardProps.title == null ? "Not Found" : cardProps.title}</Text>
                        <Text size={`xs`} color="dimmed">{ cardProps.time }</Text>
                    </Stack>
                    <Badge color="teal" variant="light">
                        {cardProps.author == null ? 'Anonymous' : cardProps.author }
                    </Badge>
                </Group>
            </Stack>

            <Text size="sm" color="dimmed" lineClamp={3}>
                {cardProps.desc == null ? 'Not Found' : cardProps.desc }
            </Text>

                <Button component='a' href={ cardProps.link } variant="light" color="teal" fullWidth mt="md" radius="md">
                    Source
                </Button>
        </Card>
    );
}
 
export default Cards;