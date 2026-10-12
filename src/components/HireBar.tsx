import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { FileIcon, MailIcon, PhoneIcon, WhatsAppIcon } from './Icons'

/** Floating contact bar. On phones it is always on (the hero card is hidden there); on wider screens it appears past the title page. Hidden at the contact section. */
export function HireBar() {
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('top')
      const contact = document.getElementById('contact')
      const phone = window.matchMedia?.('(max-width: 720px)').matches ?? false
      const pastHero = phone || (hero ? hero.getBoundingClientRect().bottom < 0 : window.scrollY > 600)
      const atContact = contact ? contact.getBoundingClientRect().top < window.innerHeight * 0.6 : false
      setShown(pastHero && !atContact)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <aside className={`hirebar${shown ? ' is-shown' : ''}`} aria-label="Quick contact" aria-hidden={!shown} inert={!shown}>
      <img src={profile.portrait} alt="" width={40} height={40} />
      <p className="hirebar-text">
        <strong>Talha is available now</strong>
        <span>Full-time, contract or freelance</span>
      </p>
      <div className="hirebar-actions">
        <a className="hb hb-primary" href={profile.tel}>
          <PhoneIcon />
          <span>Call</span>
        </a>
        <a className="hb hb-wa" href={profile.whatsappHire} target="_blank" rel="noopener">
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>
        <a className="hb" href={profile.mailHire}>
          <MailIcon />
          <span>Email</span>
        </a>
        <a className="hb hb-resume" href={profile.resume} target="_blank" rel="noopener">
          <FileIcon />
          <span>Résumé</span>
        </a>
      </div>
    </aside>
  )
}
