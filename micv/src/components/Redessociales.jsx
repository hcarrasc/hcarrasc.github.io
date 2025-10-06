import { Image } from "react-bootstrap";

function redesSociales() {
  return (
    <div
      style={{ margin: "0" }}
      className="d-flex justify-content-center sticky-bottom p-2"
    >
      <a
        href="https://www.instagram.com/hcarrasc/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/instagram.svg" width={40} height={40} roundedCircle />
      </a>
      <a
        href="https://www.linkedin.com/in/hcarrasc/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/linkedin.svg" width={40} height={40} roundedCircle />
      </a>
      <a
        href="https://x.com/Htcarrasco"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/twitter.svg" width={40} height={40} roundedCircle />
      </a>
      <a
        href="https://github.com/hcarrasc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/github.png" width={40} height={40} roundedCircle />
      </a>
      <a
        href="https://stackoverflow.com/users/1768737/hcarrasko"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/stack.png" width={40} height={40} roundedCircle />
      </a>
      <a
        href="mailto:htcarrasc@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/email.png" width={40} height={40} roundedCircle />
      </a>
    </div>
  );
}

export default redesSociales;
