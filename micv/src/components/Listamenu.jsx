function listaMenu({ setSection }) {
  return (
    <div style={{ padding: "20px" }} className="d-flex justify-content-center">
      <ul className="list-unstyled">
        <li>
          <button className="btn  p-0" onClick={() => setSection("inicio")}>
            A cerca de mi
          </button>
        </li>
        <li>
          <button className="btn  p-0" onClick={() => setSection("proyectos")}>
            Experiencia Laboral
          </button>
        </li>
        <li>
          <button className="btn  p-0" onClick={() => setSection("contacto")}>
            Contacto
          </button>
        </li>
      </ul>
    </div>
  );
}

export default listaMenu;
