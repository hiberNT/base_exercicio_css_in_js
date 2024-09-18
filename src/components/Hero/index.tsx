import { Hero as Baner } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Hero = (props: Props) => (
  <Baner>
    {props.children}
    <form className="form">
      <div className="container">
        <h2 className="heroTitle">
          As melhores vagas para tecnologia, design e artes visuais.
        </h2>
      </div>
    </form>
  </Baner>
)

export default Hero
