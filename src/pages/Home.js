import React from 'react'
import { links } from '../data/data'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="section">
        <h1>Dashboard - Home</h1>
        <br />
        <div className="cards">
          {links.map((link) => (
            <Link 
              to={link.url} 
              key={link.id}
              style={{ backgroundColor: `${link.colour}`}}
            >
              <article>
                <h2>
                  <span>{link.icon}</span>
                </h2>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
