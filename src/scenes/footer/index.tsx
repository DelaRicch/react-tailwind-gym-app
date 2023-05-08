import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="mt-[10rem] bg-primary-100 py-16">
      <div className="mx-auto w-5/6 justify-center md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At nam
            iusto vel eveniet doloribus beatae similique modi sapiente delectus
            enim officia dignissimos labore, eligendi rerum. Aspernatur culpa
            ratione voluptatibus quasi.
          </p>
          <p>&copy; Evogym All Rights Reserved {new Date().getFullYear()}</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5"> Massa dey gee</p>
          <p className="my-5"> Et gravidaa aserea </p>
          <p> Dela Tu le monde </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Yo Wossop, e do aa make we link up</p>
          <p>+233 248-596-367</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
