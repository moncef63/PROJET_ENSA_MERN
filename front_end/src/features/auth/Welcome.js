import { Link } from 'react-router-dom'

const Welcome = () => {

    const date = new Date()
    const today = new Intl.DateTimeFormat('fr-MA', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Bienvenu!</h1>

            <p><Link to="/dash/notes">Notes techniques</Link></p>

            <p><Link to="/dash/users">Paramètres Utilisateur</Link></p>

        </section>
    )

    return content
}
export default Welcome