//import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center text-white py-12">
  {/* Divider */}
  <div className="mb-8 w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

  {/* Heading */}
  <h2 className="text-4xl font-semibold text-center mb-4">Contact</h2>

  {/* Contact Info */}
  <p className="text-xl text-center mb-2">fmhate0000@gmail.com</p>
  <p className="text-xl text-center">+971 0569780795</p>

      {/* <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div> */}
      
    </section>
  );
};

export default Footer;