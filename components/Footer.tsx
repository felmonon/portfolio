export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="container-shell">
        <div className="footer-row">
          <p>Felmon Fekadu / Portfolio</p>
          <p className="footer-meta">© {year} / Built with Next.js</p>
        </div>
      </div>
    </footer>
  )
}
