export default function Icon({ name, fill = false, className = '' }) {
  return (
    <span className={`material-symbols-outlined${fill ? ' fill' : ''} ${className}`} aria-hidden="true">
      {name}
    </span>
  )
}
