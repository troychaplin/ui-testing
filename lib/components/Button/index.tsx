interface ButtonProps {
  isOutline?: boolean
  color?: string
  size?: 'sm' | 'md' | 'lg'
  label: string
  onClick?: () => void
}

export const Button = ({ isOutline = false, size = 'md', color = '#369173', label, ...props }: ButtonProps) => {
  const type = isOutline ? 'ui-button--outline' : 'ui-button--solid'

  console.log(color)

  return (
    <button
      type="button"
      className={['ui-button', `ui-button--${size}`, type].join(' ')}
      style={isOutline ? { borderColor: color } : { backgroundColor: color }}
      {...props}
    >
      {label}
    </button>
  )
}
