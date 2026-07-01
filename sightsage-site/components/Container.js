export default function Container({ className = '', children }) {
  return <div className={`container-tight ${className}`}>{children}</div>;
}
