import Link from 'next/link';

const VARIANTS = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  dark: 'btn-dark',
  outlineLight: 'btn-outline-light',
};

// Renders an <a> for external/tel/mailto/hash links, otherwise a Next <Link>.
export default function Button({ href = '#', variant = 'primary', className = '', children, ...rest }) {
  const cls = `${VARIANTS[variant] || VARIANTS.primary} ${className}`.trim();
  const isExternal = /^(https?:|tel:|mailto:)/.test(href) || href.startsWith('#');
  if (isExternal) {
    const ext = /^https?:/.test(href);
    return (
      <a href={href} className={cls} {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
