import React from 'react'
import './TeamSection.css'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function TeamSection() {
  const team = [
    {
      id: 1,
      name: 'Karolina Otero',
      role: 'Project Management',
      subrole: 'UI/UX Designer',
      image: '../../assets/teamSection/karolina.png',
      social: {
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      id: 2,
      name: 'Jereminth Muñoz',
      role: 'Developer Full Stack',
      subrole: 'UI/UX Designer',
      image: '../../assets/teamSection/jereminth.png',
      social: {
        instagram: 'https://instagram.com',
        youtube: 'https://youtube.com',
        linkedin: 'https://linkedin.com'
      }
    }
  ]

  return (
    <section id="team" className="team-section">
      <div className="team-header">
        <h2 className="section-title">Equipo creador</h2>
        <p className="section-subtitle">
          Este proyecto fue creado por dos estudiantes de ingeniería biomédica, con el fin de lograr su título profesional e iniciativa para el desarrollo de herramientas de inteligencia artificial para el ámbito médico.
        </p>
      </div>

      <div className="team-grid">
        {team.map((member) => (
          <div key={member.id} className="team-card">
            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-subrole">{member.subrole}</p>
            </div>
            <div className="team-social">
              <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              {member.social.youtube && (
                <a href={member.social.youtube} target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              )}
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
