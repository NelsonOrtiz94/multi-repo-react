import { Link } from '../components/Link'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página base para crear un React Router desde cero</p>
      <Link to='/about'>Ir a Sobre nosotros</Link>
    </>
  )
}