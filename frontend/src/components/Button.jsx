import { Link } from 'react-router-dom'

const variants = {
  primary: 'btn-primary',
  ghost:   'btn-ghost',
  white:   'btn bg-white text-brand-700 hover:bg-slate-100',
  dark:    'btn bg-navy-900 text-white hover:bg-navy-800',
}

export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `${variants[variant] || variants.primary} ${className}`
  if (to)  return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button className={cls} {...rest}>{children}</button>
}
