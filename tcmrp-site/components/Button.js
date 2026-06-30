import Link from 'next/link';

const VARIANTS = {
  green: 'btn-green',
  outlineLight: 'btn-outline-light',
  outlineGreen: 'btn-outline-green',
};

// Renders an <a> for external/tel/mailto/hash links, otherwise a Next <Link>.
export default function Button({ href = '#', variant = 'green', className = '', children, ...rest }) {
  const cls = `${VARIANTS[variant] || VARIANTS.green} ${className}`.trim();
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
