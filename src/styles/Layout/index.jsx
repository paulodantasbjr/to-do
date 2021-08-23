import { ContainerLayout } from './styled'

export const Layout = ({ children }) => {
  return (
    <ContainerLayout>
      {children}
      <div className='background-img'>
        <img src='/BackgroundScene.svg' alt='background' />
      </div>
    </ContainerLayout>
  )
}
