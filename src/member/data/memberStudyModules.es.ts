import { StudyModule } from './types';

export const memberStudyModulesEs: StudyModule[] = [
  {
    id: 'doctrina-de-cristo-en-mi-vida',
    title: 'La doctrina de Cristo en la vida diaria',
    subtitle:
      'Fe, arrepentimiento, convenios y perseverar -- como miembro, no solo como investigador.',
    description:
      'Este módulo ayuda al miembro a ver la doctrina de Cristo como un ciclo continuo y no como un evento de una sola vez. El objetivo es que el miembro se sienta responsable de aplicar esta doctrina a su propia vida y de ayudar a otros a hacerlo, preparándose para apoyar la obra misional y la Segunda Venida.',
    levelRecommended: 1,
    sections: [
      {
        id: 'fe-centrada-en-cristo',
        title: 'Fe en Jesucristo que impulsa acción',
        summary:
          'La fe verdadera no es solo creer que Cristo existe, sino confiar tanto en Él que estamos dispuestos a actuar, cambiar y abrir la boca para testificar.',
        estimatedMinutes: 12,
        content: `
### ¿Qué significa realmente tener fe en Cristo como miembro?

La fe en Jesucristo no es solo aceptar que Él es el Hijo de Dios. Es confiar tanto en Su carácter que estamos dispuestos a arriesgar comodidad, prestigio y tiempo para seguirle. Un miembro con fe viva:

- Asume que el Señor está preparando personas a su alrededor.
- Ora con la expectativa de recibir impresiones sobre a quién servir, invitar o consolar.
- Ve los mandamientos como oportunidades para demostrar amor, no como una lista fría de obligaciones.

Predicad Mi Evangelio enseña que la fe conduce a la acción y al arrepentimiento. Para un miembro de barrio, esa acción incluye:

- Estudiar el evangelio con intención de compartir.
- Preguntarse: "¿Quién necesita hoy una invitación, un mensaje o una sonrisa?"
- Creer que, aunque uno se sienta torpe al hablar, el Espíritu puede magnificar un testimonio sincero.

Cuando un miembro actúa de esta manera, la obra misional deja de ser una actividad de los élderes y se convierte en su propio estilo de vida.
        `,
        references: [
          {
            type: 'scripture',
            source: '2 Nefi 25:26',
            quote: 'Hablamos de Cristo, nos regocijamos en Cristo, predicamos de Cristo...',
          },
          {
            type: 'manual',
            source: 'Predicad Mi Evangelio, cap. 3, Doctrina de Cristo',
            title: 'Fe en Jesucristo',
          },
          {
            type: 'talk',
            source: 'Élder Dieter F. Uchtdorf, "Enfrenten el futuro con fe"',
            quote: 'La fe en el Salvador nos da la fortaleza para hacer cosas que de otro modo no haríamos.',
          },
        ],
      },
      {
        id: 'arrepentimiento-continuo',
        title: 'Arrepentimiento continuo: cómo luce en un miembro',
        summary:
          'El arrepentimiento no es solo para grandes pecados; es el proceso diario de ajustar el corazón hacia Cristo y dejar que Él nos cambie.',
        estimatedMinutes: 14,
        content: `
### Arrepentimiento como estilo de vida

Un miembro que entiende la doctrina de Cristo no ve el arrepentimiento como castigo, sino como privilegio diario. El arrepentimiento continuo incluye:

- Reconocer patrones de orgullo, pereza espiritual o indiferencia hacia los demás.
- Confesar honestamente al Padre en oración dónde estamos fallando al amar como Cristo ama.
- Tomar decisiones concretas: cambiar rutinas, pedir perdón, hacer restitución, ajustar prioridades.

En la obra misional, un miembro en constante arrepentimiento:

- Es más comprensivo con los investigadores y nuevos conversos.
- Habla de Cristo desde la experiencia personal, no solo desde la teoría.
- No pretende ser perfecto, sino humilde testigo de que el Señor cambia corazones.

Este tipo de miembro crea un ambiente donde los investigadores sienten que la Iglesia es un lugar de procesos reales de cambio, no de apariencias.
        `,
        references: [
          {
            type: 'scripture',
            source: 'Alma 36',
            title: 'La experiencia de arrepentimiento de Alma el Joven',
          },
          {
            type: 'talk',
            source: 'Presidente Russell M. Nelson, "El milagro del arrepentimiento"',
          },
        ],
      },
      {
        id: 'perseverar-hasta-el-fin',
        title: 'Perseverar hasta el fin en un mundo distraído',
        summary:
          'Perseverar no es aguantar aburridos, sino seguir avanzando con propósito, cargando las cargas unos de otros y cumpliendo convenios.',
        estimatedMinutes: 10,
        content: `
### Perseverar como comunidad de convenio

Perseverar hasta el fin no es una experiencia solitaria. El Señor estableció la Iglesia para que:

- Nos sostengamos mutuamente.
- Cuidemos de los nuevos conversos.
- Trabajemos con los misioneros para edificar el reino.

Un miembro que persevera:

- Nutre su fe con estudio diario y oración real.
- Busca oportunidades para servir en silencio.
- No abandona a los nuevos conversos cuando el entusiasmo inicial se enfría.

Perseverar es seguir viniendo a Cristo una y otra vez, trayendo también a otros con nosotros.
        `,
        references: [
          {
            type: 'scripture',
            source: '2 Nefi 31:20',
          },
          {
            type: 'talk',
            source: 'Élder Jeffrey R. Holland, "No temas, cree solamente"',
          },
        ],
      },
    ],
  },
  {
    id: 'trabajar-con-los-misioneros',
    title: 'Trabajar hombro a hombro con los misioneros',
    subtitle: 'De miembro espectador a compañero de confianza.',
    description:
      'Este módulo enseña al miembro cómo ser un verdadero compañero de los misioneros: preparar referencias, acompañar en lecciones, coordinar con los líderes y seguir cuidando a las personas después del bautismo.',
    levelRecommended: 2,
    sections: [
      {
        id: 'principios-de-trabajo-conjunto',
        title: 'Principios para trabajar con los misioneros',
        summary:
          'El Señor confía en los miembros para preparar el terreno. Los misioneros traen poder y autoridad; los miembros aportan relaciones duraderas.',
        estimatedMinutes: 12,
        content: `
### Dos fuerzas que se complementan

Los misioneros a tiempo completo tienen autoridad para enseñar y recoger a Israel. Los miembros tienen acceso diario a sus vecinos, compañeros de trabajo, familiares y amigos. Cuando ambos trabajan juntos:

- El Espíritu se derrama con mayor poder.
- Las personas investigan el evangelio rodeadas de apoyo real.
- Los nuevos conversos permanecen porque ya tienen lazos en el barrio.

Este apartado explica roles, límites sanos, y cómo comunicarse con los misioneros sin agobiarlos ni ser pasivos. Ser proactivos no significa imponer un plan propio, sino preguntar con frecuencia: "¿En qué les puedo ayudar esta semana?" y luego cumplir con exactitud los compromisos asumidos. Asimismo, implica compartir información relevante (fechas, necesidades, contexto familiar) para que las lecciones sean personalizadas y no genéricas. La coordinación regular con el líder misional de barrio asegura que el esfuerzo sea sostenible y no dependa solo de la buena voluntad de unos cuantos miembros.
        `,
        references: [
          {
            type: 'talk',
            source: 'Presidente Gordon B. Hinckley, "Cada miembro, un misionero"',
          },
          {
            type: 'manual',
            source: 'Predicad Mi Evangelio, cap. 13',
            title: 'Trabajar con los miembros',
          },
        ],
      },
      {
        id: 'preparar-y-ofrecer-referencias',
        title: 'Cómo preparar y ofrecer referencias de manera inspirada',
        summary:
          'Dar una referencia no es simplemente pasar un número de teléfono. Es orar, preparar el corazón de la persona y acompañar el proceso.',
        estimatedMinutes: 15,
        content: `
Preparar una referencia eficaz comienza mucho antes de hablar con los misioneros. El discípulo que desea compartir el evangelio escribe nombres específicos, ayuna o al menos ora con real intención y pide confirmación sobre el momento adecuado. Esa preparación incluye observar qué necesidades espirituales o temporales tiene la persona y cómo el evangelio puede responderlas sin presionar ni manipular.

Al extender una invitación, conviene usar un lenguaje natural: "Estoy estudiando algo que me recordó a ti" o "Los misioneros están enseñando sobre la esperanza en Cristo; ¿te gustaría escucharlo?". Después, se registra la referencia con detalles útiles (horarios disponibles, contexto familiar, posibles preocupaciones) para que los misioneros lleguen mejor preparados. Finalmente, el miembro sigue acompañando: envía un mensaje para saber cómo se sintieron, ofrece transporte a la capilla, se sienta junto a ellos y responde preguntas sin adelantarse a los misioneros. La meta no es "pasar" a la persona, sino caminar con ella.
        `,
        references: [
          {
            type: 'scripture',
            source: 'DyC 18:15--16',
          },
        ],
      },
      {
        id: 'cuidado-post-ensena',
        title: 'Acompañar después de cada lección',
        summary:
          'Los compromisos se cumplen con mayor facilidad cuando un miembro ayuda a aterrizarlos en la vida diaria.',
        estimatedMinutes: 11,
        content: `
Después de cada enseñanza, los misioneros dejan compromisos inspirados: leer, orar, asistir a la Iglesia o dejar un hábito. El miembro que acompañó la lección puede fortalecer esos compromisos al visitarlos en la semana, enviar un audiomensaje sobre lo aprendido o invitarles a una actividad del barrio donde sigan sintiendo apoyo. La clave está en reforzar lo espiritual con acciones concretas: ofrecer transporte, coordinar cuidado de niños, o enseñar cómo usar la app de las Escrituras.

Cuando un investigador o nuevo converso sabe que tiene un amigo del barrio que seguirá ahí después de que los misioneros sean transferidos, desarrolla raíces más profundas. Además, el miembro obtiene experiencias personales de ministración que aumentan su propio testimonio sobre la obra misional.
        `,
        references: [
          {
            type: 'manual',
            source: 'Predicad Mi Evangelio, cap. 11',
            title: 'Progresar con el bautismo',
          },
        ],
      },
    ],
  },
  {
    id: 'cuidado-de-nuevos-conversos-y-preparacion-para-el-templo',
    title: 'Cuidado de nuevos conversos y preparación para el templo',
    subtitle: 'Acompañar más allá del bautismo.',
    description:
      'Este módulo guía al miembro regular y a las organizaciones auxiliares a cuidar a los nuevos conversos, ayudarles a recibir el Sacerdocio Aarónico o de Melquisedec, y prepararlos para el templo con expectativas sanas.',
    levelRecommended: 2,
    sections: [
      {
        id: 'principios-cuidado-conversos',
        title: 'Principios para cuidar a los nuevos conversos',
        summary:
          'Un nuevo converso no necesita programas complicados, sino amistades reales, oportunidades de servir y enseñanzas claras.',
        estimatedMinutes: 14,
        content: `
El primer principio es sensibilidad espiritual: los nuevos conversos experimentan cambios profundos y, a veces, resistencia familiar. Preguntar "¿Cómo puedo ayudarte esta semana?" vale más que ofrecer soluciones genéricas. El segundo principio es constancia; no basta con visitar los primeros domingos. Se establece un plan de ministración coordinado entre misioneros, líderes y miembros, para que cada semana reciban contacto significativo. Finalmente, se enseña doctrina básica con paciencia, usando ejemplos de la vida diaria y verificando comprensión antes de avanzar.

También se debe evitar tratarlos como "proyecto de los misioneros". El barrio entero es responsable de su progreso. Eso significa aprender sus nombres, involucrar a sus hijos, invitarles a actividades familiares y celebrar cada pequeño logro con gratitud. La confianza crece cuando sienten que pertenecen a una familia de convenios, no a un club exclusivo.
        `,
        references: [
          {
            type: 'scripture',
            source: 'Mosíah 18:21--23',
          },
        ],
      },
      {
        id: 'llamamientos-y-organizaciones',
        title: 'Rol de las organizaciones auxiliares y ejemplos de llamamientos',
        summary:
          'Los nuevos conversos crecen más rápido cuando sirven y participan en la organización que mejor se ajusta a su situación.',
        estimatedMinutes: 16,
        content: `
Los líderes deben orar y coordinar para extender llamamientos sencillos pero significativos: recibir en la puerta, ayudar a preparar la Santa Cena, apoyar en actividades, ayudar con indexación o música sencilla. Estos llamamientos se explican claramente, se capacita durante las primeras semanas y se asigna un mentor que acompañe hasta que el converso se sienta confiado.

Cada organización tiene un rol específico. La Sociedad de Socorro y el Cuórum de Élderes enseñan cómo ministrar y cómo sostener reuniones de consejo. Las organizaciones de Jóvenes Adultos prestan atención a sus pares recién bautizados para que encuentren amistades santas. El presidente de la Escuela Dominical puede ofrecer clases de repaso doctrinal adaptadas. Cuando todo el barrio trabaja en armonía, los nuevos conversos perciben que hay espacio para sus talentos y que el Señor espera contribuciones reales de ellos.
        `,
        references: [
          {
            type: 'manual',
            source: 'Manual General, 38.2, 38.8',
            title: 'Responsabilidad del barrio y del obispado',
          },
        ],
      },
      {
        id: 'sacerdocio-y-templo',
        title: 'Primeros pasos con el Sacerdocio y el templo',
        summary:
          'Guía básica para que los nuevos conversos varones comprendan el Sacerdocio de Aarón y luego el de Melquisedec, y para que todos se preparen para la recomendación limitada y luego de uso general.',
        estimatedMinutes: 18,
        content: `
El Sacerdocio de Aarón introduce a los varones a la administración de ordenanzas preparatorias: bautismo y Santa Cena. Se debe explicar con lenguaje claro qué significa portar la autoridad de Dios, cómo mantenerse digno y por qué la puntualidad y el respeto son parte del convenio. Una vez que el converso demuestra fidelidad, los líderes enseñan sobre el Sacerdocio de Melquisedec como una expansión natural, no un privilegio elitista, destacando las bendiciones de oficiar y dar bendiciones.

Respecto al templo, se comienza con la recomendación limitada para bautismos por los muertos. Se describe el proceso paso a paso: entrevista, vestimenta blanca, reverencia y la experiencia de servir a antepasados. Posteriormente se acompaña el deseo de recibir la investidura, subrayando que el templo no es un premio final, sino la continuación de los convenios bautismales. Preparar para el templo implica establecer hábitos diarios: estudio de las Escrituras, obediencia a la Palabra de Sabiduría, diezmo íntegro y participación plena en la Iglesia. Así, el converso entiende que el templo es la casa del Señor y que su vida puede alinearse con ese estándar.
        `,
        references: [
          {
            type: 'scripture',
            source: 'DyC 84:33--44',
          },
          {
            type: 'talk',
            source: 'Presidente Russell M. Nelson, "El templo y su hogar"',
          },
        ],
      },
    ],
  },
];

