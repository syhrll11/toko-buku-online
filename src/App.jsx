function App() {
  return (
    <>
      {/* Header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" className="d-inline-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
            <span className="ms-2 fs-4">Syahrul Bookstore</span>
          </a>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#Home" className="nav-link px-2">Home</a></li>
            <li><a href="#Product" className="nav-link px-2 link-blue">Product</a></li>
            <li><a href="#Team" className="nav-link px-2 link-blue">Team</a></li>
            <li><a href="#Contact" className="nav-link px-2 link-blue">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* Hero Section */}
        <div id="Home" className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                Perjalanan Sang Penjaga Cincin:
              </h1>
              <p className="lead">
                Dalam upaya menyelamatkan dunia dari kekuatan gelap, seorang penjaga cincin memulai perjalanan melintasi daratan penuh bahaya bersama sahabat-sahabatnya, menghadapi cobaan demi menjaga harapan terakhir umat manusia.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Pesan Sekarang</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Lihat Selengkapnya</button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="border border-primary rounded-4 shadow-lg bg-white" style={{ padding: '10px' }}>
                <img
                  className="rounded-3"
                  src="https://picsum.photos/980/700"
                  alt="Bootstrap Docs"
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Featurette Section */}
        <div className="container my-5">
          <div className="p-5 rounded-4" style={{ backgroundColor: '#e7f5ff' }}>
            <div className="row featurette align-items-center">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">
                  Oh yeah, it’s that good.{' '}
                  <span className="text-muted">See for yourself.</span>
                </h2>
                <p className="lead">
                  Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <img
                  className="rounded-3 img-fluid"
                  src="https://picsum.photos/980/700?random=8"
                  alt="Bootstrap Docs"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tentang Bookstore */}
        <div className="container py-5">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-8">
              <img
                src="https://picsum.photos/600/400"
                className="img-fluid rounded mb-4"
                alt="Tentang Bookstore"
              />
              <h2 className="fw-bold">Tentang Bookstore</h2>
              <p className="lead">
                Kami menyediakan berbagai macam buku dari fiksi, non-fiksi, hingga buku edukasi untuk semua kalangan. Dengan harga terjangkau dan kualitas terjamin.
              </p>
              <p>
                Bookstore kami juga menawarkan layanan peminjaman dan rekomendasi buku pilihan setiap minggunya. Ayo mulai membaca!
              </p>
            </div>
          </div>

          {/* Kategori Buku */}
          <div className="container my-5">
            <h3 className="text-center mb-4 fw-bold">Kategori Buku</h3>
            <div className="row text-center">
              {/* Repeatable card components */}
              {/* Example below (others follow the same pattern): */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img src="https://picsum.photos/seed/fiksi/300/200" className="card-img-top" alt="Fiksi" />
                  <div className="card-body">
                    <h5 className="card-title">Fiksi</h5>
                    <p className="card-text">Novel, cerita rakyat, hingga dongeng penuh imajinasi.</p>
                  </div>
                </div>
              </div>
              {/* Tambahkan kartu lain seperti Edukasi, Non-Fiksi, dll */}
            </div>
          </div>
        </div>

        {/* Product Section */}
        <section id="Product" className="py-5 container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8">
              <h1 className="fw-bold text-primary text-start">Koleksi Buku Buku Populer</h1>
              <p className="lead text-muted text-start">
                Temukan berbagai buku populer dengan pilihan cerita yang menarik, cocok untuk mu yang hobi membaca dan suka hal-hal yang populer untuk menemani waktu luangmu.
              </p>
              <p className="text-start">
                <a href="#produk" className="btn btn-primary my-2 m-2">Lihat Koleksi</a>
                <a href="#kontak" className="btn btn-outline-primary my-2">Hubungi Kami</a>
              </p>
            </div>
          </div>
        </section>

        {/* Product Cards (Album) */}
        {/* Gunakan struktur card yang sama seperti sebelumnya */}

        {/* Team Section */}
        <div id="Team" className="container-lg my-5">
          <div className="p-4 pb-0 pe-lg-0 pt-lg-5 rounded-3 border shadow-lg bg-light">
            <div className="row text-center">
              <h1 className="display-5 fw-bold lh-1 text-body-emphasis mb-5">Team</h1>
              {/* Team member cards */}
              {/* Team 1, Team 2, Team 3 */}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="Contact" className="container my-5">
          <div className="text-center mb-4">
            <h1 className="display-5 fw-bold lh-1 text-body-emphasis">Contact Me 📬</h1>
            <p className="lead">Untuk pertanyaan dan info lebih lanjut, hubungi kami melalui form dibawah ini</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form className="border rounded-4 shadow-sm p-4 bg-light">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">Nama</label>
                  <input type="text" className="form-control" id="name" placeholder="Username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">Pesan</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Saran dan pesan"></textarea>
                </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-primary px-4 fw-bold">Kirim</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="container">
          <footer className="py-3 my-4">
            <p className="text-center text-body-secondary">&copy; Muhamad Syahrul - NFA - ReactJS</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App;
