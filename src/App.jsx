import './App.css'
import mbokaLogo from './assets/icon.png'
import mbokaHome from './assets/picture (2).jpg'
import mbokaProduct from './assets/picture (3).jpg'
import mbokaProfile from './assets/picture (5).jpg'

function App() {
  const services = [
    { number: '01', title: 'Création de sites web', text: 'Des expériences web rapides, singulières et pensées pour transformer vos visiteurs en clients.', icon: '↗' },
    { number: '02', title: 'Applications mobiles', text: 'Des produits Android et iOS fluides qui restent proches de vos utilisateurs, partout.', icon: '⌁' },
    { number: '03', title: 'Solutions IA', text: 'Automatisez vos opérations et transformez vos données en décisions plus intelligentes.', icon: '✦' },
    { number: '04', title: 'Solutions digitales', text: 'Des plateformes métiers qui structurent votre activité et libèrent votre potentiel.', icon: '◌' },
    { number: '05', title: 'Marketing digital', text: 'Une présence qui se remarque, s’engage et construit une croissance durable.', icon: '◎' },
  ]

  return (
    <main>
      <nav className="nav container">
        <a className="brand" href="#top" aria-label="Kambexa, accueil"><span className="brand-mark">K</span><span>Kambexa</span></a>
        <div className="nav-links"><a href="#expertise">Expertise</a><a href="#realisations">Réalisations</a><a href="#vision">Notre vision</a><a href="#contact">Contact</a></div>
        <a className="nav-cta" href="#contact">Parlons projet <span>↗</span></a>
      </nav>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <h1>L’innovation<br /><em>qui avance</em> avec vous.</h1>
          <p className="hero-lead">Nous concevons des solutions digitales utiles, audacieuses et durables pour faire grandir les idées qui comptent.</p>
          <a className="primary-button" href="#contact">Démarrer une conversation <span>↗</span></a>
        </div>
        <div className="hero-art" aria-label="Composition graphique représentant la connexion et l'innovation">
          <div className="art-ring ring-one"></div><div className="art-ring ring-two"></div><div className="art-core">K<span>+</span></div>
          <span className="orbit-dot dot-one"></span><span className="orbit-dot dot-two"></span><span className="orbit-dot dot-three"></span>
        </div>
        <div className="hero-scroll"><span>↓</span> Faites défiler</div>
      </section>

      <section className="signal-band"><div className="container signal-inner"><p>Nous rendons le numérique<br /><strong>plus humain.</strong></p><div className="signal-stats"><div><strong>∞</strong><span>Possibilités</span></div><div><strong>24/7</strong><span>Curiosité</span></div><div><strong>01</strong><span>Équipe engagée</span></div></div></div></section>

      <section className="services container" id="expertise">
        <div className="section-intro"><p className="eyebrow">01 / Ce que nous faisons</p><h2>Des idées nettes.<br /><em>Des résultats concrets.</em></h2><p>De la première intuition au produit qui vit, nous réunissons stratégie, design et technologie sous un même toit.</p></div>
        <div className="service-list">{services.map((service) => <article className="service-item" key={service.number}><span className="service-number">{service.number}</span><div className="service-icon">{service.icon}</div><div><h3>{service.title}</h3><p>{service.text}</p></div><span className="service-arrow">↗</span></article>)}</div>
      </section>

      <section className="projects container" id="realisations"><div className="projects-heading"><p className="eyebrow">02 / Nos réalisations</p><h2>Des produits<br /><em>qui existent.</em></h2><p>Nous transformons les besoins du quotidien en expériences numériques simples, utiles et mémorables.</p></div><div className="project-grid"><article className="project-card project-web"><div className="project-visual"><span className="project-browser"><i></i><i></i><i></i><b>mbokamaket.com</b></span><div className="project-wordmark"><img src={mbokaLogo} alt="Logo MbokaMaket" />mboka<span>maket</span><small>Le marché près de chez vous</small></div></div><div className="project-meta"><div><span>Site web</span><h3>MbokaMaket.com</h3><p>Une marketplace locale qui rapproche les commerces, les produits et les communautés.</p></div><a href="https://mbokamaket.com" target="_blank" rel="noreferrer" aria-label="Visiter mbokamaket.com">↗</a></div></article><article className="project-card project-app"><div className="project-visual"><div className="app-screens"><img className="screen-back" src={mbokaProfile} alt="Écran profil de l'application MbokaMaket" /><img className="screen-front" src={mbokaHome} alt="Écran d'accueil de l'application MbokaMaket" /><img className="screen-detail" src={mbokaProduct} alt="Écran produit de l'application MbokaMaket" /></div><span className="app-orbit">APP<br />01</span></div><div className="project-meta"><div><span>Application mobile</span><h3>L’app MbokaMaket</h3><p>Une expérience mobile pensée pour découvrir et commander facilement, au quotidien.</p></div><a href="#contact" aria-label="Parler de l'application MbokaMaket">↗</a></div></article></div></section>

      <section className="vision container" id="vision"><div className="vision-stamp">KAMBEXA</div><div className="vision-copy"><p className="eyebrow">03 / Notre vision</p><h2>La technologie<br />a plus de <em>sens</em><br />quand elle rapproche.</h2><p>Nous croyons aux outils qui font gagner du temps, ouvrent des portes et donnent aux équipes l’envie d’aller plus loin. Notre ambition : devenir le partenaire numérique de celles et ceux qui construisent demain.</p><a className="text-link" href="#contact">Découvrir notre approche <span>↗</span></a></div></section>

      <section className="contact container" id="contact"><div><p className="eyebrow">04 / Écrivez-nous</p><h2>Un projet en tête ?<br /><em>Faisons-le exister.</em></h2><p>Parlez-nous de votre idée, même si elle n’est pas encore parfaitement définie.</p></div><form onSubmit={(event) => event.preventDefault()}><label>Votre nom<input type="text" placeholder="Comment peut-on vous appeler ?" /></label><label>Votre email<input type="email" placeholder="vous@entreprise.com" /></label><label>Votre projet<textarea placeholder="Quelques mots sur votre ambition..."></textarea></label><button className="primary-button" type="submit">Envoyer le message <span>↗</span></button></form></section>

      <section className="legal container"><article id="mentions-legales"><p className="eyebrow">Informations</p><h2>Mentions légales</h2><p><strong>Kambexa</strong> est une entreprise spécialisée dans la création de solutions technologiques et digitales.</p><p>Éditeur du site : Kambexa<br />Email : hello@kambexa.com</p><p>Les contenus, textes et éléments graphiques présents sur ce site sont protégés par les lois relatives à la propriété intellectuelle. Toute reproduction non autorisée est interdite.</p></article><article id="confidentialite"><p className="eyebrow">Données personnelles</p><h2>Politique de confidentialité</h2><p>Les informations envoyées via le formulaire de contact sont utilisées uniquement pour répondre à votre demande et ne sont pas revendues à des tiers.</p><p>Vous pouvez demander l’accès, la modification ou la suppression de vos données en écrivant à hello@kambexa.com.</p><p>Ce site n’utilise pas de cookies publicitaires sans votre consentement.</p></article></section>

      <footer className="footer container"><a className="brand" href="#top"><span className="brand-mark">K</span><span>Kambexa</span></a><p>Le numérique, avec intention.</p><div><a href="mailto:hello@kambexa.com">hello@kambexa.com</a><a href="#mentions-legales">Mentions légales</a><a href="#confidentialite">Confidentialité</a></div><small>© 2026 Kambexa. Tous droits réservés.</small></footer>
    </main>
  )
}

export default App
