import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Bienvenue à : <span className="nowrap">ENSA réparation</span></h1>
            </header>
            <main className="public__main">
                <p>Située à Fès, ENSA réparation met à votre disposition un personnel qualifié prêt à répondre à vos besoins de réparation technique.                </p>
                <address className="public__addr">
                ENSA réparation<br />
                FES <br />
                FES<br />
                    <a href="tel:+212666666">+212 6 8267 2560</a>
                </address>
                <br />
                <p>Owner: Moncif ayouch, Jihane el Hadedy, Soukayna Sqalli Houssaini</p>
            </main>
            <footer>
                <Link to="/login">Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public