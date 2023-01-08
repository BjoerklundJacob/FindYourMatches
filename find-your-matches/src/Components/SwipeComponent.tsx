import { FC, ReactElement } from "react"
import TinderCard from "react-tinder-card"

const Swiper: FC<{ children: ReactElement | ReactElement[], onDirection: (a:string) => void }> = props => {
  const onSwipe = (direction: string) => {
    console.log('You swiped: ' + direction)
    props.onDirection(direction)
  }

  const onCardLeftScreen = (myIdentifier: string) => {
    console.log(myIdentifier + ' left the screen')
  }

  return (
    <TinderCard className='swipe' onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
      {props.children}
    </TinderCard>
  )
}

export default Swiper
