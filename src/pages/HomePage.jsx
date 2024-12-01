import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/fotoku.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex-align-items-center pt-5">
        <Container>
          <Row className="header-box d-flex align-items-center pt-5">
            <Col lg="6">
              <h1 className="mb-4">
                PK PMII Al-Mubina<span> Pringsewu</span>
              </h1>
              <p className="mb-4">
                Pergerakan mahasiswa islam indonesia atau biasa disingkat dengan PMII merupakan organisasi eksternal kampus yang berdiri pada 17 april 1960 di surabaya.Mahbub djunaidi menjadi ketua umum pertama dengan A.Chalid Mawardi
                sebagai wakil ketua dan M.Said Budairy sebagai sekretaris umum.
              </p>
              <button className="btn btn-danger btn-lg rounded-2 me-2 mb-xs-0 mb-3">Gabung Sekarang</button>
              <button className="btn btn-outline-danger btn-lg rounded-2 me-2 mb-xs-0 mb-3">Lihat Selengkapnya</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100"></div>
    </div>
  );
};

export default HomePage;
