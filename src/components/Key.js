function Key({ status, children }) {
  console.log(status);
  const className = `key ${status}`;
  return <div className={className}>{children}</div>;
}

export default Key;
