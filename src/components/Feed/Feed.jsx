import { Container } from '@chakra-ui/react'
import FeedPost from './FeedPosts'

const Feed = () => {
  return (
    <Container maxW={"Container.sm"} py={10} px={2}>
        <FeedPost />
        <FeedPost />
        <FeedPost />
        <FeedPost />
    </Container>
  )
}

export default Feed