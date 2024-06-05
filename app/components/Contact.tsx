import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center px-6 py-24 text-white max-sm:mt-10 md:px-16 lg:h-screen xl:px-40"
    >
      <div>
        {/* Contact Header */}
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-bold uppercase md:text-5xl lg:text-6xl">
            Let&apos;s Chat
          </h2>
          <p className="tracking-wide text-slate-300 md:max-w-[550px]">
            Looking forward to connect with fellow developers, potential
            clients, and anyone interested in my work. Whether you have a
            project in mind or just want to say hello, feel free to reach out.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
