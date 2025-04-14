import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    const date = new Date()
    const today = new Intl.DateTimeFormat('fr-MA', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Bienvenue {username}!</h1>

            <p><Link to="/dash/notes">Notes technique</Link></p>

            <p><Link to="/dash/notes/new">ajouter Notes technique</Link></p>

            {(isManager || isAdmin) && <p><Link to="/dash/users">utilisateur</Link></p>}

            {(isManager || isAdmin) && <p><Link to="/dash/users/new">Ajouter utilisateur</Link></p>}

        </section>
    )

    return content
}
export default Welcome