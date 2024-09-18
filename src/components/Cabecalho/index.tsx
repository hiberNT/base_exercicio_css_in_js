import { Cabecalho as Titulo } from './styles'

export type Props = {
  children: string
}

const Cabecalho = (props: Props) => <Titulo>{props.children}</Titulo>

export default Cabecalho
