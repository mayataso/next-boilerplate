import styled from '@emotion/styled'
import { Card, Paper } from '@mui/material'

const MyComponent = () => {
  const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  `
  const MyCard = styled(Card)`
    padding: 12px;
    text-align: center;
  `
  return (
    <Center>
      <MyCard>It works!</MyCard>
    </Center>
  )
}

export default MyComponent
