const Home = () => {
    return <>
        <header>
        <div class="logo">
            <h1>Centro de Impresión Documental</h1>
            <p class="subtitulo">Colegio San Martín — Servicio Interno Gratuito</p>
        </div>
        <nav>
            <ul>
                <li><a href="index.html" class="activo">Inicio</a></li>
                <li><a href="servicios.html">Servicios</a></li>
                <li><a href="solicitud.html">Solicitar Impresión</a></li>
                <li><a href="registro.html">Registrar Usuario</a></li>
                <li><a href="tutorial.html">Tutorial</a></li>
                <li><a href="contacto.html">Soporte</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="hero">
            <article>
                <h2>Bienvenido al Centro de Impresión Documental</h2>
                <p>El servicio centralizado de impresión, fotocopiado y escaneo para toda la comunidad educativa del Colegio San Martín. Sin costo, sin trámites complicados.</p>
                <a href="solicitud.html" class="boton-principal">Solicitar Impresión Ahora</a>
            </article>
            <img src="img/impresora-central.jpg" alt="Centro de impresión del colegio">
        </section>

        <section class="info-rapida">
            <h2>¿Qué puedes solicitar?</h2>
            <div class="grid-tarjetas">
                <article class="tarjeta">
                    <img src="img/impresion-bn.jpg" alt="Impresión blanco y negro">
                    <h3>Impresión BN</h3>
                    <p>Documentos en blanco y negro, una o dos caras, ideal para guías y material pedagógico.</p>
                </article>
                <article class="tarjeta">
                    <img src="img/impresion-color.jpg" alt="Impresión a color">
                    <h3>Impresión Color</h3>
                    <p>Documentos a color para presentaciones, certificados y trabajos visuales.</p>
                </article>
                <article class="tarjeta">
                    <img src="img/encuadernacion.jpg" alt="Encuadernación">
                    <h3>Encuadernación</h3>
                    <p>Anillado y encuadernación para informes extensos y tesis de curso.</p>
                </article>
                <article class="tarjeta">
                    <img src="img/escaneo.jpg" alt="Escaneo de documentos">
                    <h3>Escaneo</h3>
                    <p>Digitalización de documentos al correo institucional del solicitante.</p>
                </article>
            </div>
        </section>

        <section class="como-funciona">
            <h2>¿Cómo funciona?</h2>
            <ol>
                <li><strong>Regístrate</strong> como usuario en el sistema (profesor, administrativo o estudiante con permiso).</li>
                <li><strong>Completa el formulario</strong> de solicitud indicando tipo, cantidad y características.</li>
                <li><strong>Retira tu documento</strong> en el Centro de Impresión el día y hora indicados.</li>
            </ol>
        </section>

        <section class="horario">
            <h2>Horario de Atención</h2>
            <p>Lunes a Viernes: <strong>08:00 — 17:00 hrs</strong></p>
            <p>Ubicación: <strong>Bloque B, Subterráneo, Sala B-12</strong></p>
        </section>
    </main>

    <footer>
        <div class="footer-contenido">
            <div class="footer-seccion">
                <h4>Centro de Impresión Documental</h4>
                <p>Colegio San Martín</p>
                <p>Bloque B, Sala B-12</p>
                <p>Fono: 45 2 345 678</p>
            </div>
            <div class="footer-seccion">
                <h4>Enlaces</h4>
                <ul>
                    <li><a href="servicios.html">Servicios</a></li>
                    <li><a href="solicitud.html">Solicitar Impresión</a></li>
                    <li><a href="registro.html">Registrar Usuario</a></li>
                    <li><a href="tutorial.html">Tutorial</a></li>
                    <li><a href="contacto.html">Soporte</a></li>
                </ul>
            </div>
            <div class="footer-seccion">
                <h4>Horario</h4>
                <p>Lunes a Viernes</p>
                <p>08:00 — 17:00 hrs</p>
            </div>
        </div>
        <p class="copyright">© 2024 Colegio San Martín — Centro de Impresión Documental. Servicio interno gratuito.</p>
    </footer>
    </>
}

export default Home