import { Image } from "react-bootstrap";

function acercademi() {
  return (
    <div>
      <p>
        Soy Héctor Carrasco, chileno 🇨🇱, Ingeniero Civil Informático con un
        máster en Ingeniería Informática 💻. Me apasiona la tecnología y la
        innovación 🤖. A lo largo de mi carrera, he trabajado en compañías
        multinacionales en proyectos desafiantes que me han permitido
        desarrollar mis habilidades técnicas y de gestión de proyectos aplicando
        metodologías ágiles como Scrum y Kanban. He trabajado como desarrollador
        backend, ingeniero de procesos IT (bussines analyst), Technical Lead y
        Product Owner. En mis tiempos libres me gusta jugar al ajedrez, escuchar
        música y leer libros.
      </p>

      <Image src="/fastfetch.png" width={860} />
    </div>
  );
}

export default acercademi;
