import { Box, Card, CardContent, CardHeader } from "@mui/material";
import SwipeComponent from "./Components/SwipeComponent";
import "./app.css"
import { useEffect, useState } from "react";

const db = [
  {
    "char": "Jacob",
    "skill": "bettererest"
  },
  {
    "char": "rasmus",
    "skill": "betterest"
  },
  {
    "char": "thomas",
    "skill": "betterer"
  },
  {
    "char": "thor",
    "skill": "better"
  },
]

const Swiper = () => {
    
  const [swipes, setSwipes] = useState<Map<string, string>>(new Map())

  useEffect(() => {
    if (swipes.size === db.length)
      //send til rasmus
      console.log(swipes)
  }, [swipes])

  const AddDirection = (char:string, direction:string) => {
    let map = new Map(swipes)
    map.set(char, direction)
    setSwipes(map)
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
      minHeight="100vh"
    >
      {db.map(char => {
        return (
          <SwipeComponent key={char.char} onDirection={dir => AddDirection(char.char, dir)}>
            <Card sx={{ minWidth: 275, maxWidth: 275, position: "relative" }}>
              <CardHeader title={char.char}/>
              <CardContent>
                <Box>Skill: {char.skill}</Box>
              </CardContent>
            </Card>
          </SwipeComponent>
        )
      })}
    </Box>
  );
}

export default Swiper