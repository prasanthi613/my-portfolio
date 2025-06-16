import { Container } from 'react-bootstrap';

export default function Hero() {
  return (
    <section id="home" className="bg-dark text-white py-5 mt-5">
      <Container className="text-center">
        <h1 className="display-4 mb-3">Hi, I'm Lakshmi 👋</h1>
       <p className="typing-text lead text-light fst-italic">
   I build elegant, responsive, and scalable web applications.
</p>

        <img
          src="/profile.png"
          alt="Lakshmi"
          className="rounded-circle mt-4"
          style={{ width: '150px', height: '150px', objectFit: 'cover', border: '3px solid #c084fc' }}
        />
      </Container>
    </section>
  );
}


