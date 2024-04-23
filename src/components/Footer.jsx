import { SocialLinks, ServiesLinks, GeneralLinks } from "../components/Links"

function Footer() {
  const copyDate = new Date().getFullYear();
  return (
    <footer className="bg-dark-blue mt-5 pt-4 pb-2 text-white">
      <div className="container d-flex align-items-center flex-wrap flex-sm-row flex-column-reverse justify-content-center gap-5">
        <SocialLinks />
        <ServiesLinks />
        <GeneralLinks />
        <img src="./images/masar-logo-footer.png" alt="Logo-Masar" className="logo-footer col-4 col-lg-3" />
      </div>
      <div className="copy-rights text-center mt-4 pt-2">
        جميع الحقوق محفوظة لمسار التميز © {copyDate}
      </div>

    </footer>
  );
}

export default Footer;
