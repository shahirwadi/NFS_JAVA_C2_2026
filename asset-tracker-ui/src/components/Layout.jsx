import AppHeader from './AppHeader.jsx';

export default function Layout({ children }) {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
    </>
  );
}
