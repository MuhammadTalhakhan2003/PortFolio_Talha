import { profile } from '../data/profile'
import { MailIcon, PhoneIcon, WhatsAppIcon } from './Icons'

/** One-tap ways to reach Talha, shown under the portrait. */
export function QuickContact() {
  return (
    <div className="quick">
      <p className="quick-h">Got an idea, a role or a project?</p>
      <div className="quick-actions">
        <a className="quick-btn quick-call" href={profile.tel}>
          <PhoneIcon />
          <span>Call</span>
        </a>
        <a className="quick-btn quick-wa" href={profile.whatsappHire} target="_blank" rel="noopener">
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>
        <a className="quick-btn" href={profile.mailHire}>
          <MailIcon />
          <span>Email</span>
        </a>
      </div>
      <p className="quick-note">
        <span className="mono">{profile.phone}</span>
        <br />
        {profile.hours}
      </p>
    </div>
  )
}
