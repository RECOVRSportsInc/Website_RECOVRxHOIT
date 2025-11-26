// src/content/recovr/Contact.tsx

/* CONTACT on white, blue accent card */
export function Contact() {
  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="card card-accent-blue p-6">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#f3bd3e" }}>
            Contact
          </h2>
          <a
            href="mailto:recovrsports@proton.me"
            className="hover:underline"
            style={{ color: "#f3bd3e" }}
          >
            recovrsports@proton.me
          </a>
        </div>
      </div>
    </section>
  );
}