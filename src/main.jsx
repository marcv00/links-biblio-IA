import React from 'react'
import { createRoot } from 'react-dom/client'
import { categories, resources } from './data.js'
import './styles.css'

function ResourceImage({ resource }) {
  const [src, setSrc] = React.useState(resource.image)

  return (
    <div className="resource-image-wrap">
      <img
        src={src}
        alt={`${resource.name} logo`}
        className="resource-image"
        style={{ objectPosition: resource.imagePosition || 'center' }}
        onError={() => {
          if (resource.imageFallback && src !== resource.imageFallback) setSrc(resource.imageFallback)
        }}
      />
    </div>
  )
}

function App() {
  const [query, setQuery] = React.useState('')
  const [activeCategory, setActiveCategory] = React.useState('todos')

  const normalizedQuery = query.trim().toLowerCase()

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      activeCategory === 'todos' ||
      resource.category === activeCategory ||
      (activeCategory === 'institucional' && resource.access === 'institutional')

    const haystack = `${resource.name} ${resource.description} ${resource.tag}`.toLowerCase()
    const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery)

    return matchesCategory && matchesQuery
  })

  return (
    <div className="page-shell">
      <header className="topbar">
        <a
          className="brand"
          href="https://www.ulima.edu.pe/"
          target="_blank"
          rel="noreferrer"
          aria-label="Universidad de Lima"
        >
          <img src="https://www.ulima.edu.pe/themes/custom/ulima/logo.svg" alt="Universidad de Lima" />
        </a>
      </header>

      <nav className="filterbar" aria-label="Categorías de herramientas">
        <div className="filterbar-inner">
          <div className="category-pills">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-pill ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                type="button"
              >
                {category.name}
              </button>
            ))}
          </div>

          <label className="search-wrap">
            <span aria-hidden="true">⌕</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por nombre..."
              aria-label="Buscar por nombre"
            />
          </label>
        </div>
      </nav>

      <main>
        <section className="intro">
          <div className="intro-inner">
            <h1>Recursos de IA</h1>
            <div className="orange-rule" />
            <p>
              Herramientas de inteligencia artificial seleccionadas para investigar, estudiar,
              resolver problemas y crear. Haz clic en cualquier recurso para acceder directamente.
            </p>
          </div>
        </section>

        <section className="resource-area" aria-label="Recursos de inteligencia artificial">
          <div className="resource-grid">
            {filteredResources.map((resource) => (
              <a
                className={`resource-card ${
                  resource.access === 'institutional' ? 'institutional-card' : ''
                }`}
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                key={resource.id}
              >
                <ResourceImage resource={resource} />

                <div className="card-content">
                  <div className="card-meta-row">
                    <span className="tag">{resource.tag}</span>
                    {resource.access === 'institutional' && (
                      <span
                        className="institutional-badge"
                        title={resource.accessDescription}
                      >
                        ✓ {resource.accessLabel}
                      </span>
                    )}
                  </div>

                  <h2>{resource.name}</h2>
                  <p>{resource.description}</p>
                  <span className="enter">Ingresar ↗</span>
                </div>
              </a>
            ))}
          </div>

          {!filteredResources.length && (
            <div className="empty-state">
              <strong>No encontramos ese recurso.</strong>
              <span>Prueba con otro término o cambia de categoría.</span>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">Biblioteca Antonio Pinilla · Universidad de Lima.</div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
