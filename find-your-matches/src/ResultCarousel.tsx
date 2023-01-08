import React, { useState, FC, useEffect } from 'react';

import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Stack } from '@mui/material'

type UserData = {
    name: string, description: string
}

type IResultCarouselProps = {
    FirstUserList: UserData[]
    SecondUserList: UserData[]
}
const ResultCarousel: FC<IResultCarouselProps> = ({ FirstUserList, SecondUserList }) => {
    const [equalList, setEqualList] = useState<UserData[]>(FirstUserList.filter(x => SecondUserList.some(b => b.name == x.name)))

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{}}>Your Matchine Results! </h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Carousel sx={{ width: "100%" }}>
                    {
                        equalList.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button>Return to start</Button>
            </div>
        </>
    )
}

type ItemProps = {
    key: number
    item: UserData
}
const Item: FC<ItemProps> = (props) => {
    return (
        <Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack>
                <h1>{props.item.name}</h1>
                <p>{props.item.description}</p>
            </Stack>
        </Paper>
    )
}

export default ResultCarousel;