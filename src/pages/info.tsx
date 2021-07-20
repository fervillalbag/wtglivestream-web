import React from 'react'
import Link from 'next/link'

import { Info as InfoWrapper } from '../styles/pages/Info'

const Info: React.FC = () => {
  return (
    <InfoWrapper>
      <h1>Info</h1>

      <p>
        Hola Dalas, quiero comentarte que hace 5 años trabajo como desarrollador
        frontend y tengo experiencia trabajando en agencias digital y startups
        pequeñas.
      </p>

      <p style={{ marginTop: 20 }}>
        Por lo que estuve leyendo en el correo veo que necesitas una persona
        Fullstack que se encargue de todo el proyecto. Pero desde mi punto de
        vista creo que tener una persona encargada de todo el proyecto puede ser
        perjudicial a largo plazo. Estaría genial que tengas una persona
        especializada en ambos perfil (frontend, backend) para que cuando
        necesites cambiar de persona en el equipo no sea un estrés.
      </p>

      <p style={{ marginTop: 20 }}>
        En 7 horas pude desarrollar el Frontend de una página web utilizando
        React + Next.js y una aplicación nativa utilizando React Native, la
        ventaja de utilizar React Native es que compila código nativo para IOS y
        Android desarrollando solo una base de código. También se podría
        desarrollar ElectronJS con React para tener una aplicación de
        escritorio. Todas estas librerías son ecosistemas desarrolladas con
        Javascript.
      </p>

      <p style={{ marginTop: 20 }}>
        Ahora trabajo en un proyecto personal que tengo pensado sacarlo antes de
        fin de año, se trata de una aplicación nativa sobre gastronomía, me
        serviría generar ingresos a través de un modelo de negocio SAAS, similar
        a Spotify, Netflix ó darme la oportunidad de conseguir un empleo en una
        Startup del exterior.
      </p>

      <p style={{ marginTop: 20 }}>
        Ah, también trabajé la parte del diseño UI, para recortar costes de
        inversión en un principio, automatizo el sistema de diseño para luego
        hacer eficiente el desarrollo Frontend.
      </p>

      <div
        style={{ padding: '56.25% 0 0 0', position: 'relative', marginTop: 20 }}
      >
        <iframe
          src="https://player.vimeo.com/video/577033812?badge=0&autopause=0&player_id=0&app_id=58479"
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          title="2021-07-20 00-40-32"
        />
      </div>

      <Link href="https://airbnb.design/building-a-visual-language/">
        <a>Design System de Airbnb</a>
      </Link>

      <p style={{ marginTop: 20 }}>
        Respecto a lo que desarrollé en las 7 horas. Esta es la web que tomé de
        ejemplo de DRIBBBLE
      </p>

      <Link href="https://dribbble.com/shots/12215430-Online-Education-Platform-Webinar-page/attachments/3830715?mode=media">
        <a target="_blank">
          <img
            src="https://cdn.dribbble.com/users/43602/screenshots/12215430/media/5bbc7e112d2e24efbb86a74dcfead383.png"
            alt=""
          />
        </a>
      </Link>

      <Link href="/">
        <a target="_blank">Ver vista previa del sitio desarrollado</a>
      </Link>
      <Link href="https://github.com/fervillalbag/wtglivestream-web">
        <a target="_blank">Ver código fuente del sitio desarrollado</a>
      </Link>

      <hr style={{ marginTop: 30 }} />

      <p style={{ marginTop: 30 }}>
        También desarrollé una aplicación nativa con un diseño similar a la web,
        ojo que el sitio web es responsive, pero para una mejor experiencia
        estaría genial tener una aplicación para dispositivos móviles.
      </p>

      <div
        style={{ padding: '56.25% 0 0 0', position: 'relative', marginTop: 30 }}
      >
        <iframe
          src="https://player.vimeo.com/video/577223107?badge=0&autopause=0&player_id=0&app_id=58479"
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          title="2021-07-20 10-46-47"
        />
      </div>

      <p style={{ marginTop: 20 }}>Evidencia, ahr</p>

      <div
        style={{ padding: '56.25% 0 0 0', position: 'relative', marginTop: 20 }}
      >
        <iframe
          src="https://player.vimeo.com/video/577068714?badge=0&autopause=0&player_id=0&app_id=58479"
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          title="video_2021-07-20_02-53-37"
        />
      </div>

      <Link href="https://github.com/fervillalbag/wtglivestream-web">
        <a target="_blank">Ver código fuente de la app desarrollada</a>
      </Link>

      <p style={{ marginTop: 30 }}>
        Si tienes pensado desarrollarla con Vue.js no tengo problema de
        trabajar, ya que es muy similar a React, pero React te ofrece la
        posibilidad de tener aplicación nativa, web y de escritorio de una forma
        más amigable.
      </p>

      <p style={{ marginTop: 30 }}>
        <b>
          Muchas gracias por la oportunidad Dalas espero que te sirva, un
          saludo!
        </b>
      </p>
    </InfoWrapper>
  )
}

export default Info
