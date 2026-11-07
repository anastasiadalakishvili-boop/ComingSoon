function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none">
      <path
        d="m5 10 3.1 3.1L15.5 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Hupy home">
          <img src="/brand/hupy-mark.png" alt="" />
          <span>Hupy</span>
        </a>
        <div className="header-note">
          <span className="status-dot" />
          Building something remarkable for pets
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span>Coming soon</span>
              <span className="eyebrow-line" />
            </div>

            <h1>
              Better pet care,
              <br />
              <em>all in one place.</em>
            </h1>

            <p className="intro">
              Hupy is bringing trusted pet care professionals, comfortable pet hotels, training
              services, and more together in one thoughtful place.
            </p>

            <div className="trust-list" aria-label="Hupy benefits">
              <span>
                <CheckIcon /> Verified professionals
              </span>
              <span>
                <CheckIcon /> Trusted businesses
              </span>
              <span>
                <CheckIcon /> Clear booking
              </span>
            </div>

            {/*
              The design's "Notify me" email sign-up is intentionally not rendered: no approved email
              collection service exists yet, and the page must not pretend to collect addresses.
              Add it back here once a real, secure provider has been approved.
            */}
          </div>

          <div className="hero-visual">
            <div className="image-frame">
              <img
                src="/images/hugo.jpg"
                alt="A happy German Shepherd against Hupy's orange background"
              />
              <div className="image-wash" />
            </div>
            <div className="care-card">
              <img src="/brand/hupy-mark.png" alt="" />
              <div>
                <span>Our promise</span>
                <strong>Care you can trust.</strong>
              </div>
            </div>
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
          </div>
        </section>
      </main>

      <footer>
        <p>Remarkable care for very good pets.</p>
        <span>© 2026 Hupy. All rights reserved.</span>
      </footer>
    </div>
  );
}
