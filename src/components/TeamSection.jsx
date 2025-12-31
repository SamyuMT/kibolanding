import React from 'react'
import './TeamSection.css'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

export default function TeamSection() {
  const { t } = useLanguage()
  const team = [
    {
      id: 1,
      name: 'Karolina Otero',
      role: 'Project Management',
      subrole: 'UI/UX Designer',
      image: '../../assets/teamSection/karolina.png',
      social: {
        instagram: 'https://www.instagram.com/karolinaoteroa?igsh=MXRsbTF1bzNsbnF1Yw==',
        linkedin: 'https://www.linkedin.com/in/karolina-mar%C3%ADa-otero-argel-1884b6241/'
      }
    },
    {
      id: 2,
      name: 'Jereminth Muñoz',
      role: 'Developer Full Stack',
      subrole: 'UI/UX Designer',
      image: '../../assets/teamSection/jereminth.png',
      social: {
        instagram: 'https://www.instagram.com/jemy.mt.7?igsh=MTc2Z3IxZXlqMDhkeg==',
        youtube: 'https://www.youtube.com/@jereminthmunozdelatorre7376',
        linkedin: 'https://www.linkedin.com/in/jereminth-mu%C3%B1oz-de-la-torre/'
      }
    }
  ]

  return (
    <section id="team" className="team-section">
      <div className="team-header">
        <h2 className="section-title">{t.team.title}</h2>
        <p className="section-subtitle">{t.team.subtitle}</p>
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
