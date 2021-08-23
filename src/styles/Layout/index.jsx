import { Container } from './styled'
import { Header } from '../../components/Header'

export const Layout = ({ children }) => {
  return (
    <Container>
      <div>
        <Header />
      </div>
      <div>{children}</div>
    </Container>
  )
}
