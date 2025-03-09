import { CustomBr } from "@/components/atoms/custom-br";

export default {
  pt: {
    data: {
      navigation: {
        title: "Navegação",
        content: [
          { title: "Home", href: "/", children: [] },
          {
            title: "Cases",
            href: "/cases",
            children: [
              {
                title: "Pantas Paladar",
                href: "/cases/pantas-paladar",
              },
              {
                title: "Fiberweb",
                href: "/cases/fiberweb",
              },
              {
                title: "Baterias Galileu",
                href: "/cases/baterias-galileu",
              },
              {
                title: "Autority Comunicação Visual",
                href: "/cases/autority-comunicacao-visual",
              },
            ],
          },
          { title: "Serviços", href: "/servicos", children: [] },
          { title: "Sobre", href: "/sobre", children: [] },
          { title: "Contato", href: "/contato", children: [] },
        ],
      },
      social_share: {
        title: "Redes Sociais",
        content: [
          {
            title: "Instagram",
            link: "https://www.instagram.com/",
          },
          {
            title: "Whatsapp",
            link: "https://api.whatsapp.com/send?phone=5511995300421&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os",
          },
          {
            title: "Linkedin",
            link: "https://www.linkedin.com/",
          },
        ],
      },
      services: {
        title: "Serviços",
        content: [
          {
            title: "Criação de site criativos",
          },
          {
            title: "Posicionamento no Google - SEO",
          },
          {
            title: "Inteligência artificial",
          },
          {
            title: "Fabrica de softwares",
          },
        ],
      },
      contact: {
        title: "Contato",
        content: [
          {
            text: "Telefone",
            content: "+55 11 99530-0421",
            link: "tel:+5511995300421",
          },
          {
            text: "E-Mail",
            content: "contato@bubowl.com.br",
            link: "mailto:contato@bubowl.com.br",
          },
        ],
      },
      footer: {
        title: <>Contato</>,
        text: (
          <>
            Precisa de ajuda com a
            <CustomBr byViewport="desktop" /> sua empresa?{" "}
            <span>
              Entre em
              <CustomBr byViewport="desktop" /> contato conosco.
            </span>
          </>
        ),
        form: [
          {
            label: "Seu nome",
            name: "name",
            type: "text",
          },
          {
            label: "Telefone",
            name: "phone",
            type: "tel",
          },
          {
            label: "Enviar",
            name: "submit",
            type: "submit",
          },
        ],
      },
    },
    components: {
      home: {
        header: {
          content: {
            text: (
              <>
                Moldando o futuro com <span>&lt;</span> um código de cada vez <span>/&gt;</span>
              </>
            ),
            title: (
              <>
                Design e<br /> Criatividade
              </>
            ),
            description: (
              <>
                Fabrica de software, plataforma ou site.
                <CustomBr byViewport="mobile" /> Tire suas
                <CustomBr byViewport="desktop" /> ideias do papel e ganhe dinheiro
                <CustomBr byViewport="mobile" /> com elas, clique e
                <CustomBr byViewport="desktop" /> conheça nossos
                <CustomBr byViewport="mobile" /> projetos.
              </>
            ),
            button: {
              title: "Veja nossos cases",
              href: "/cases",
            },
          },
          globe: {
            active: true,
            list: [
              {
                title: "Sites únicos",
                description: "Criamos sites que conquistam e convertem.",
              },
              {
                title: "Plataformas",
                description: "Crie e monetize sua ferramenta como quiser.",
              },
              {
                title: "Projetos com IA",
                description: "Inclua tecnologias do ChatGPT nos seus projetos.",
              },
              {
                title: "Aplicativos",
                description: "Desenvolvemos aplicativos para Android e iOS.",
              },
            ],
          },
        },
        tecnology: {
          title: "Nossas Tecnologias:",
          imgs: [
            {
              src: "/imgs/tecnology/next.png",
              alt: "Next.js - Frontend, Backend e Mobile",
            },
            {
              src: "/imgs/tecnology/reactjs.png",
              alt: "React.js - Frontend, Mobile e Desktop",
            },
            {
              src: "/imgs/tecnology/unity.png",
              alt: "Unity - 3D, 2D, AR e VR",
            },
            {
              src: "/imgs/tecnology/openai.png",
              alt: "OpenAI - ChatGPT",
            },
          ],
        },
        case: {
          project: {
            info: {
              title: "Pantas Paladar",
              button: {
                title: "Veja o case",
                href: "/cases/pantas-paladar",
              },
            },
            awward: {
              title: "awwwards.com",
              description: "8.5",
              href: "https://www.awwwards.com/sites/pantas-paladar",
            },
            content: {
              title: "Avaliado positivamente em plataformas de design",
              description: "Conheça o projeto que conquistou o coração dos usuários.",
            },
          },
          content: {
            title: "Redesign de sites",
            text: (
              <>
                Se seu site não recebe uma
                <CustomBr byViewport="desktop" /> atualização de design a muito
                <CustomBr byViewport="desktop" /> tempo,{" "}
                <a href="" title="Entre em contato para ter um site moderno">
                  entre em contato
                </a>{" "}
                e tenha
                <CustomBr byViewport="desktop" /> um site moderno.
              </>
            ),
          },
        },
        services: {
          title: "Nossos Serviços",
          description: (
            <>
              Ficou interessado né? Veja um pouco mais do que a Bubowl pode te oferecer, tire suas
              ideias do
              <CustomBr byViewport="desktop" /> papel com quem entende do assunto.
            </>
          ),
          list: [
            {
              title: "Desenvolvimento Web",
              text: (
                <>
                  Criamos sites responsivos e
                  <CustomBr byViewport="desktop" /> dinâmicos, feitos sob medida para suas
                  <CustomBr byViewport="desktop" /> necessidades, garantindo uma
                  <CustomBr byViewport="desktop" /> experiência incrível em qualquer
                  <CustomBr byViewport="desktop" /> dispositivo. De lojas online a aplicativos
                  <CustomBr byViewport="desktop" /> interativos, nossos especialistas
                  <CustomBr byViewport="desktop" /> transformam sua ideia em realidade e
                  <CustomBr byViewport="desktop" /> fazem sua jornada online ser um sucesso.
                </>
              ),
              button: {
                title: "Saiba mais",
                href: "/servicos",
              },
            },
            {
              title: "Desenvolvimento Web",
              text: (
                <>
                  Criamos sites responsivos e
                  <CustomBr byViewport="desktop" /> dinâmicos, feitos sob medida para suas
                  <CustomBr byViewport="desktop" /> necessidades, garantindo uma
                  <CustomBr byViewport="desktop" /> experiência incrível em qualquer
                  <CustomBr byViewport="desktop" /> dispositivo. De lojas online a aplicativos
                  <CustomBr byViewport="desktop" /> interativos, nossos especialistas
                  <CustomBr byViewport="desktop" /> transformam sua ideia em realidade e
                  <CustomBr byViewport="desktop" /> fazem sua jornada online ser um sucesso.
                </>
              ),
              button: {
                title: "Saiba mais",
                href: "/servicos",
              },
            },
            {
              title: "Desenvolvimento Web",
              text: (
                <>
                  Criamos sites responsivos e
                  <CustomBr byViewport="desktop" /> dinâmicos, feitos sob medida para suas
                  <CustomBr byViewport="desktop" /> necessidades, garantindo uma
                  <CustomBr byViewport="desktop" /> experiência incrível em qualquer
                  <CustomBr byViewport="desktop" /> dispositivo. De lojas online a aplicativos
                  <CustomBr byViewport="desktop" /> interativos, nossos especialistas
                  <CustomBr byViewport="desktop" /> transformam sua ideia em realidade e
                  <CustomBr byViewport="desktop" /> fazem sua jornada online ser um sucesso.
                </>
              ),
              button: {
                title: "Saiba mais",
                href: "/servicos",
              },
            },
            {
              title: "Desenvolvimento Web",
              text: (
                <>
                  Criamos sites responsivos e
                  <CustomBr byViewport="desktop" /> dinâmicos, feitos sob medida para suas
                  <CustomBr byViewport="desktop" /> necessidades, garantindo uma
                  <CustomBr byViewport="desktop" /> experiência incrível em qualquer
                  <CustomBr byViewport="desktop" /> dispositivo. De lojas online a aplicativos
                  <CustomBr byViewport="desktop" /> interativos, nossos especialistas
                  <CustomBr byViewport="desktop" /> transformam sua ideia em realidade e
                  <CustomBr byViewport="desktop" /> fazem sua jornada online ser um sucesso.
                </>
              ),
              button: {
                title: "Saiba mais",
                href: "/servicos",
              },
            },
          ],
        },
        difference: {
          title: (
            <>
              <span>Site Bubowl</span>
              <span>X</span>
              <span>Site Comum</span>
            </>
          ),
          description: (
            <>
              É nítido a diferença de um site que da resultados, veja na prática oque a Bubowl pode
              <CustomBr byViewport="desktop" /> fazer pela sua empresa.
            </>
          ),
          imgs: [
            {
              src: "/imgs/difference/bubowl.png",
              alt: "Site Bubowl - Baterias Galileu",
            },
            {
              src: "/imgs/difference/common.png",
              alt: "Site Comum - Baterias Galileu antigo",
            },
          ],
          content: {
            leads: {
              text: "Leads recebidos",
              number: 700,
            },
            domain: {
              text: "Autoridade do domínio",
              number: 78,
            },
            hits: {
              text: "Acessos mensais",
              number: 2000,
            },
          },
        },
        how_it_works: {
          title: <>Como funciona?</>,
          steps: [
            {
              span: <>Bate Papo</>,
              title: <>Falamos da sua ideia</>,
              description: (
                <>
                  Depois que você entra em contato conosco iremos te chamar para bater um papo, a
                  ideia é conhecer suas necessidades e mostrar para você tudo que a Bubowl pode
                  oferecer.
                </>
              ),
              img: {
                src: "/imgs/how-it-works/chat.png",
                alt: "Bate papo",
              },
            },
            {
              span: <>Planejamento</>,
              title: <>Desenhamos a sua ideia</>,
              description: (
                <>
                  Com a ideia em mãos, nossa equipe de especialistas irá planejar e desenvolver o
                  projeto, sempre com você por dentro de cada etapa.
                </>
              ),
              img: {
                src: "/imgs/how-it-works/planning.png",
                alt: "Planejamento",
              },
            },
            {
              span: <>Entrega</>,
              title: <>Entregamos o projeto</>,
              description: (
                <>
                  Depois de tudo pronto, iremos te entregar o projeto, e claro, sempre com suporte
                  para qualquer dúvida que possa surgir.
                </>
              ),
              img: {
                src: "/imgs/how-it-works/delivery.png",
                alt: "Entrega",
              },
            },
          ],
        },
        business: {
          title: (
            <>
              Deixe a tecnologia da sua empresa
              <CustomBr byViewport="desktop" />
              nas mãos de quem entende
            </>
          ),
          list: [
            {
              type: "text",
              content: (
                <>
                  Gestão de
                  <br /> Servidores
                </>
              ),
            },
            {
              type: "icon",
              content: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="31"
                  viewBox="0 0 34 31"
                  fill="none"
                >
                  <mask
                    id="mask0_660_75"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="34"
                    height="31"
                  >
                    <path d="M33.575 0.5H0.424988V30.5H33.575V0.5Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_660_75)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M33.2811 14.0585C33.6684 14.7291 33.6684 15.5554 33.2811 16.2261L26.0784 28.7008C25.6911 29.3714 24.9755 29.7846 24.201 29.7846H9.79555C9.02108 29.7846 8.30543 29.3714 7.91812 28.7008L0.71547 16.2261C0.32816 15.5554 0.32816 14.7291 0.71547 14.0585L7.91812 1.58381C8.30543 0.913149 9.02108 0.5 9.79555 0.5H24.201C24.9755 0.5 25.6911 0.913149 26.0784 1.58381L33.2811 14.0585ZM26.9233 9.8054C27.2129 9.73633 27.4571 10.0274 27.3387 10.3005L25.3512 14.8853C25.2444 15.1318 24.9156 15.1797 24.7429 14.9739L24.0046 14.094L19.3998 18.1203C18.9506 18.513 18.2686 18.469 17.8738 18.0219L14.8219 14.5656L11.3118 17.621C11.3549 17.7974 11.3777 17.9818 11.3777 18.1716C11.3777 19.4484 10.3425 20.4837 9.06541 20.4837C7.78844 20.4837 6.75311 19.4484 6.75311 18.1716C6.75311 16.8945 7.78844 15.8594 9.06541 15.8594C9.34808 15.8594 9.61891 15.91 9.86922 16.0029L14.2104 12.224C14.6596 11.833 15.3403 11.8777 15.7345 12.3242L18.7848 15.7785L22.6108 12.4331L21.8699 11.5501C21.6972 11.3444 21.8014 11.0288 22.0627 10.9665L26.9233 9.8054Z"
                      fill="white"
                    />
                  </g>
                </svg>
              ),
            },
            {
              type: "text",
              content: (
                <>
                  Aplicações com
                  <br /> Realidade
                  <br /> aumentada
                </>
              ),
            },
            {
              type: "icon",
              content: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="31"
                  viewBox="0 0 32 31"
                  fill="none"
                >
                  <path d="M31.5 0.5H0.5V30.5H31.5V0.5Z" fill="white" />
                </svg>
              ),
            },
            {
              type: "text",
              content: (
                <>
                  Inteligência
                  <br /> artificialGenerativa
                </>
              ),
            },
            {
              type: "text",
              content: (
                <>
                  Aplicações com
                  <br /> Realidade
                  <br /> aumentada
                </>
              ),
            },
            {
              type: "icon",
              content: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="47"
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  <mask
                    id="mask0_660_105"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="46"
                    height="47"
                  >
                    <path d="M46 0.5H0V46.5H46V0.5Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_660_105)">
                    <path
                      d="M15.3328 31.1674C15.3328 32.2259 16.191 33.0841 17.2495 33.0841C18.3081 33.0841 19.1662 32.2259 19.1662 31.1674C19.1662 26.743 20.1453 23.9945 21.8192 22.3205C23.4932 20.6465 26.2417 19.6675 30.6663 19.6675C31.7246 19.6675 32.5828 18.8094 32.5828 17.7508C32.5828 16.6923 31.7246 15.8342 30.6663 15.8342C26.2417 15.8342 23.4932 14.8551 21.8192 13.1811C20.1453 11.5071 19.1662 8.75875 19.1662 4.33416C19.1662 3.27561 18.3081 2.41748 17.2495 2.41748C16.191 2.41748 15.3328 3.27561 15.3328 4.33416C15.3328 8.75875 14.3538 11.5071 12.6798 13.1811C11.0059 14.8551 8.25744 15.8342 3.83285 15.8342C2.7743 15.8342 1.9162 16.6923 1.9162 17.7508C1.9162 18.8094 2.7743 19.6675 3.83285 19.6675C8.25744 19.6675 11.0059 20.6465 12.6798 22.3205C14.3538 23.9945 15.3328 26.743 15.3328 31.1674Z"
                      fill="white"
                    />
                    <path
                      d="M31.6245 42.6675C31.6245 43.726 32.4827 44.5842 33.5413 44.5842C34.5996 44.5842 35.4578 43.726 35.4578 42.6675C35.4578 39.9069 36.0707 38.3564 36.9628 37.4643C37.855 36.5722 39.4054 35.9592 42.1663 35.9592C43.2246 35.9592 44.0828 35.101 44.0828 34.0425C44.0828 32.9842 43.2246 32.126 42.1663 32.126C39.4054 32.126 37.855 31.513 36.9628 30.6209C36.0707 29.7288 35.4578 28.1783 35.4578 25.4175C35.4578 24.3592 34.5996 23.501 33.5413 23.501C32.4827 23.501 31.6245 24.3592 31.6245 25.4175C31.6245 28.1783 31.0116 29.7288 30.1195 30.6209C29.2274 31.513 27.6769 32.126 24.9163 32.126C23.8577 32.126 22.9995 32.9842 22.9995 34.0425C22.9995 35.101 23.8577 35.9592 24.9163 35.9592C27.6769 35.9592 29.2274 36.5722 30.1195 37.4643C31.0116 38.3564 31.6245 39.9069 31.6245 42.6675Z"
                      fill="white"
                    />
                  </g>
                </svg>
              ),
            },
            {
              type: "text",
              content: (
                <>
                  Inteligência
                  <br /> artificial Generativa
                </>
              ),
            },
          ],
        },
        portfolio: {
          title: <>Nossos Projetos</>,
          description: (
            <>
              Conheça alguns dos nossos incríveis projetos, clique e veja no detalhe
              <CustomBr byViewport="desktop" /> cada um deles.
            </>
          ),
        },
        faq: {
          title: <>Perguntas frequentes</>,
          description: (
            <>
              Tudo o que você sempre quis saber sobre nossos serviços, explicado de
              <CustomBr byViewport="desktop" /> forma simples e direta!
            </>
          ),
          list: [
            {
              question: <>Qual o prazo de entrega?</>,
              answer: (
                <>
                  O prazo de entrega varia de acordo com o projeto, mas garantimos que será entregue
                  no prazo combinado.
                </>
              ),
            },
            {
              question: <>Como faço para entrar em contato com a Bubowl?</>,
              answer: (
                <>
                  Você pode entrar em contato conosco através do formulário de contato, pelo e-mail
                  <a href="mailto:contato@bubowl.com.br">contato@bubowl.com.br</a> ou pelo telefone{" "}
                  <a href="tel:+5511995300421">+55 11 99530-0421</a>.
                </>
              ),
            },
            {
              question: <>A Bubowl oferece suporte após a entrega do projeto?</>,
              answer: (
                <>
                  Sim, oferecemos suporte técnico e manutenção para os projetos entregues. No
                  entanto, esse serviço é opcional e pode ser contratado conforme a necessidade,
                  garantindo que o site ou aplicativo continue funcionando corretamente e
                  atualizado.
                </>
              ),
            },
            {
              question: <>Vocês desenvolvem aplicativos móveis? Quais plataformas suportam?</>,
              answer: (
                <>
                  Sim, desenvolvemos aplicativos móveis para Android e iOS. Utilizamos tecnologias
                  como React Native e Flutter para criar aplicativos multiplataforma, que funcionam
                  em ambos os sistemas operacionais.
                </>
              ),
            },
            {
              question: <>Como funciona o desenvolvimento de sites responsivos?</>,
              answer: (
                <>
                  O desenvolvimento de sites responsivos é feito utilizando técnicas de design e
                  programação que permitem que o site se adapte a diferentes tamanhos de tela,
                  garantindo uma boa experiência de navegação em dispositivos móveis e desktop.
                </>
              ),
            },
            {
              question: <>O que é SEO e por que é importante para meu site?</>,
              answer: (
                <>
                  SEO (Search Engine Optimization) é o conjunto de estratégias e técnicas utilizadas
                  para aumentar a visibilidade de um site nos motores de busca, como o Google. Um
                  bom SEO melhora o ranking do site, atraindo mais visitantes e, consequentemente,
                  aumentando as chances de conversão.
                </>
              ),
            },
            {
              question: <>Como funciona o serviço de posicionamento no Google?</>,
              answer: (
                <>
                  O serviço de posicionamento no Google é feito através de técnicas de SEO, que
                  otimizam o site para os motores de busca, melhorando o ranking nos resultados
                  orgânicos. Além disso, também é possível utilizar o Google Ads para anunciar o
                  site nos resultados pagos.
                </>
              ),
            },
            {
              question: <>Quais são as tecnologias utilizadas pela Bubowl?</>,
              answer: (
                <>
                  Utilizamos tecnologias modernas e inovadoras, como React.js, Next.js, Unity e
                  OpenAI, para criar sites, aplicativos e plataformas digitais de alta qualidade e
                  performance.
                </>
              ),
            },
          ],
        },
      },
    },
  },
  en: {
    data: {
      navigation: {
        title: "Navigation",
        content: [
          { title: "Home", href: "/", children: [] },
          {
            title: "Cases",
            href: "/cases",
            children: [
              {
                title: "Pantas Paladar",
                href: "/cases/pantas-paladar",
              },
              {
                title: "Fiberweb",
                href: "/cases/fiberweb",
              },
              {
                title: "Baterias Galileu",
                href: "/cases/baterias-galileu",
              },
              {
                title: "Autority Visual Communication",
                href: "/cases/autority-comunicacao-visual",
              },
            ],
          },
          { title: "Services", href: "/servicos", children: [] },
          { title: "About", href: "/sobre", children: [] },
          { title: "Contact", href: "/contato", children: [] },
        ],
      },
      social_share: {
        title: "Social Media",
        content: [
          {
            title: "Instagram",
            link: "https://www.instagram.com/",
          },
          {
            title: "Whatsapp",
            link: "https://api.whatsapp.com/send?phone=5511995300421&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os",
          },
          {
            title: "Linkedin",
            link: "https://www.linkedin.com/",
          },
        ],
      },
      services: {
        title: "Services",
        content: [
          {
            title: "Creative website development",
          },
          {
            title: "Google positioning - SEO",
          },
          {
            title: "Artificial intelligence",
          },
          {
            title: "Software factory",
          },
        ],
      },
      contact: {
        title: "Contact",
        content: [
          {
            text: "Phone",
            content: "+55 11 99530-0421",
            link: "tel:+5511995300421",
          },
          {
            text: "E-Mail",
            content: "contato@bubowl.com.br",
            link: "mailto:contato@bubowl.com.br",
          },
        ],
      },
      footer: {
        title: <>Contact</>,
        text: (
          <>
            Need help with
            <CustomBr byViewport="desktop" /> your business?{" "}
            <span>
              Get in
              <CustomBr byViewport="desktop" /> touch with us.
            </span>
          </>
        ),
        form: [
          {
            label: "Your name",
            name: "name",
            type: "text",
          },
          {
            label: "Phone",
            name: "phone",
            type: "tel",
          },
          {
            label: "Send",
            name: "submit",
            type: "submit",
          },
        ],
      },
    },
    components: {
      home: {
        header: {
          content: {
            text: (
              <>
                Shaping the future with <span>&lt;</span> one code at a time <span>/&gt;</span>
              </>
            ),
            title: (
              <>
                Design and
                <br /> Creativity
              </>
            ),
            description: (
              <>
                Software factory, platform or website.
                <CustomBr byViewport="mobile" /> Turn your
                <CustomBr byViewport="desktop" /> ideas into reality and make money
                <CustomBr byViewport="mobile" /> with them, click and
                <CustomBr byViewport="desktop" /> discover our
                <CustomBr byViewport="mobile" /> projects.
              </>
            ),
            button: {
              title: "See our cases",
              href: "/cases",
            },
          },
          globe: {
            active: true,
            list: [
              {
                title: "Unique websites",
                description: "We create websites that win and convert.",
              },
              {
                title: "Platforms",
                description: "Create and monetize your tool as you wish.",
              },
              {
                title: "AI Projects",
                description: "Include ChatGPT technologies in your projects.",
              },
              {
                title: "Applications",
                description: "We develop applications for Android and iOS.",
              },
            ],
          },
        },
        tecnology: {
          title: "Our Technologies:",
          imgs: [
            {
              src: "/imgs/tecnology/next.png",
              alt: "Next.js - Frontend, Backend and Mobile",
            },
            {
              src: "/imgs/tecnology/reactjs.png",
              alt: "React.js - Frontend, Mobile and Desktop",
            },
            {
              src: "/imgs/tecnology/unity.png",
              alt: "Unity - 3D, 2D, AR and VR",
            },
            {
              src: "/imgs/tecnology/openai.png",
              alt: "OpenAI - ChatGPT",
            },
          ],
        },
        case: {
          project: {
            info: {
              title: "Pantas Paladar",
              button: {
                title: "View the case",
                href: "/cases/pantas-paladar",
              },
            },
            awward: {
              title: "awwwards.com",
              description: "8.5",
              href: "https://www.awwwards.com/sites/pantas-paladar",
            },
            content: {
              title: "Positively reviewed on design platforms",
              description: "Learn about the project that won the hearts of users.",
            },
          },
          content: {
            title: "Website redesign",
            text: (
              <>
                If your website hasn&apos;t received a
                <CustomBr byViewport="desktop" /> design update for a long
                <CustomBr byViewport="desktop" /> time,{" "}
                <a href="" title="Contact us to get a modern website">
                  contact us
                </a>{" "}
                and have
                <CustomBr byViewport="desktop" /> a modern website.
              </>
            ),
          },
        },
        services: {
          title: "Our Services",
          description: (
            <>
              Interested, right? See a bit more of what Bubowl can offer you, bring your ideas to
              <CustomBr byViewport="desktop" /> life with those who understand the business.
            </>
          ),
          list: [
            {
              title: "Web Development",
              text: (
                <>
                  We create responsive and
                  <CustomBr byViewport="desktop" /> dynamic websites, tailored to your
                  <CustomBr byViewport="desktop" /> needs, ensuring an
                  <CustomBr byViewport="desktop" /> amazing experience on any
                  <CustomBr byViewport="desktop" /> device. From online stores to
                  <CustomBr byViewport="desktop" /> interactive applications, our experts
                  <CustomBr byViewport="desktop" /> turn your idea into reality and
                  <CustomBr byViewport="desktop" /> make your online journey a success.
                </>
              ),
              button: {
                title: "Learn more",
                href: "/servicos",
              },
            },
            {
              title: "Web Development",
              text: (
                <>
                  We create responsive and
                  <CustomBr byViewport="desktop" /> dynamic websites, tailored to your
                  <CustomBr byViewport="desktop" /> needs, ensuring an
                  <CustomBr byViewport="desktop" /> amazing experience on any
                  <CustomBr byViewport="desktop" /> device. From online stores to
                  <CustomBr byViewport="desktop" /> interactive applications, our experts
                  <CustomBr byViewport="desktop" /> turn your idea into reality and
                  <CustomBr byViewport="desktop" /> make your online journey a success.
                </>
              ),
              button: {
                title: "Learn more",
                href: "/servicos",
              },
            },
            {
              title: "Web Development",
              text: (
                <>
                  We create responsive and
                  <CustomBr byViewport="desktop" /> dynamic websites, tailored to your
                  <CustomBr byViewport="desktop" /> needs, ensuring an
                  <CustomBr byViewport="desktop" /> amazing experience on any
                  <CustomBr byViewport="desktop" /> device. From online stores to
                  <CustomBr byViewport="desktop" /> interactive applications, our experts
                  <CustomBr byViewport="desktop" /> turn your idea into reality and
                  <CustomBr byViewport="desktop" /> make your online journey a success.
                </>
              ),
              button: {
                title: "Learn more",
                href: "/servicos",
              },
            },
            {
              title: "Web Development",
              text: (
                <>
                  We create responsive and
                  <CustomBr byViewport="desktop" /> dynamic websites, tailored to your
                  <CustomBr byViewport="desktop" /> needs, ensuring an
                  <CustomBr byViewport="desktop" /> amazing experience on any
                  <CustomBr byViewport="desktop" /> device. From online stores to
                  <CustomBr byViewport="desktop" /> interactive applications, our experts
                  <CustomBr byViewport="desktop" /> turn your idea into reality and
                  <CustomBr byViewport="desktop" /> make your online journey a success.
                </>
              ),
              button: {
                title: "Learn more",
                href: "/servicos",
              },
            },
          ],
        },
        difference: {
          title: (
            <>
              <span>Bubowl Website</span>
              <span>VS</span>
              <span>Regular Website</span>
            </>
          ),
          description: (
            <>
              The difference between a website that delivers results is clear, see in practice what
              Bubowl can
              <CustomBr byViewport="desktop" /> do for your company.
            </>
          ),
          imgs: [
            {
              src: "/imgs/difference/bubowl.png",
              alt: "Bubowl Website - Baterias Galileu",
            },
            {
              src: "/imgs/difference/common.png",
              alt: "Regular Website - Old Baterias Galileu",
            },
          ],
          content: {
            leads: {
              text: "Leads received",
              number: 700,
            },
            domain: {
              text: "Domain authority",
              number: 78,
            },
            hits: {
              text: "Monthly visits",
              number: 2000,
            },
          },
        },
        how_it_works: {
          title: <>How does it work?</>,
          steps: [
            {
              span: <>Chat</>,
              title: <>We discuss your idea</>,
              description: (
                <>
                  After you contact us, we&apos;ll call you for a chat. The idea is to understand
                  your needs and show you everything that Bubowl can offer.
                </>
              ),
              img: {
                src: "/imgs/how-it-works/chat.png",
                alt: "Chat",
              },
            },
            {
              span: <>Planning</>,
              title: <>We design your idea</>,
              description: (
                <>
                  With the idea in hand, our team of experts will plan and develop the project,
                  always keeping you informed at every stage.
                </>
              ),
              img: {
                src: "/imgs/how-it-works/planning.png",
                alt: "Planning",
              },
            },
            {
              span: <>Delivery</>,
              title: <>We deliver the project</>,
              description: (
                <>
                  Once everything is ready, we&apos;ll deliver the project to you, and of course,
                  always with support for any questions that may arise.
                </>
              ),
              img: {
                src: "/imgs/how-it-works/delivery.png",
                alt: "Delivery",
              },
            },
          ],
        },
        business: {
          title: (
            <>
              Leave your company&apos;s technology
              <CustomBr byViewport="desktop" />
              in the hands of experts
            </>
          ),
          list: [
            {
              type: "text",
              content: (
                <>
                  Server
                  <br /> Management
                </>
              ),
            },
            {
              type: "icon",
              content: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="31"
                  viewBox="0 0 34 31"
                  fill="none"
                >
                  <mask
                    id="mask0_660_75"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="34"
                    height="31"
                  >
                    <path d="M33.575 0.5H0.424988V30.5H33.575V0.5Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_660_75)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M33.2811 14.0585C33.6684 14.7291 33.6684 15.5554 33.2811 16.2261L26.0784 28.7008C25.6911 29.3714 24.9755 29.7846 24.201 29.7846H9.79555C9.02108 29.7846 8.30543 29.3714 7.91812 28.7008L0.71547 16.2261C0.32816 15.5554 0.32816 14.7291 0.71547 14.0585L7.91812 1.58381C8.30543 0.913149 9.02108 0.5 9.79555 0.5H24.201C24.9755 0.5 25.6911 0.913149 26.0784 1.58381L33.2811 14.0585ZM26.9233 9.8054C27.2129 9.73633 27.4571 10.0274 27.3387 10.3005L25.3512 14.8853C25.2444 15.1318 24.9156 15.1797 24.7429 14.9739L24.0046 14.094L19.3998 18.1203C18.9506 18.513 18.2686 18.469 17.8738 18.0219L14.8219 14.5656L11.3118 17.621C11.3549 17.7974 11.3777 17.9818 11.3777 18.1716C11.3777 19.4484 10.3425 20.4837 9.06541 20.4837C7.78844 20.4837 6.75311 19.4484 6.75311 18.1716C6.75311 16.8945 7.78844 15.8594 9.06541 15.8594C9.34808 15.8594 9.61891 15.91 9.86922 16.0029L14.2104 12.224C14.6596 11.833 15.3403 11.8777 15.7345 12.3242L18.7848 15.7785L22.6108 12.4331L21.8699 11.5501C21.6972 11.3444 21.8014 11.0288 22.0627 10.9665L26.9233 9.8054Z"
                      fill="white"
                    />
                  </g>
                </svg>
              ),
            },
            {
              type: "text",
              content: (
                <>
                  Applications with
                  <br /> Augmented
                  <br /> Reality
                </>
              ),
            },
            {
              type: "icon",
              content: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="31"
                  viewBox="0 0 32 31"
                  fill="none"
                >
                  <path d="M31.5 0.5H0.5V30.5H31.5V0.5Z" fill="white" />
                </svg>
              ),
            },
            {
              type: "text",
              content: (
                <>
                  Generative
                  <br /> Artificial Intelligence
                </>
              ),
            },
            {
              type: "text",
              content: (
                <>
                  Applications with
                  <br /> Augmented
                  <br /> Reality
                </>
              ),
            },
            {
              type: "icon",
              content: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="47"
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  <mask
                    id="mask0_660_105"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="46"
                    height="47"
                  >
                    <path d="M46 0.5H0V46.5H46V0.5Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_660_105)">
                    <path
                      d="M15.3328 31.1674C15.3328 32.2259 16.191 33.0841 17.2495 33.0841C18.3081 33.0841 19.1662 32.2259 19.1662 31.1674C19.1662 26.743 20.1453 23.9945 21.8192 22.3205C23.4932 20.6465 26.2417 19.6675 30.6663 19.6675C31.7246 19.6675 32.5828 18.8094 32.5828 17.7508C32.5828 16.6923 31.7246 15.8342 30.6663 15.8342C26.2417 15.8342 23.4932 14.8551 21.8192 13.1811C20.1453 11.5071 19.1662 8.75875 19.1662 4.33416C19.1662 3.27561 18.3081 2.41748 17.2495 2.41748C16.191 2.41748 15.3328 3.27561 15.3328 4.33416C15.3328 8.75875 14.3538 11.5071 12.6798 13.1811C11.0059 14.8551 8.25744 15.8342 3.83285 15.8342C2.7743 15.8342 1.9162 16.6923 1.9162 17.7508C1.9162 18.8094 2.7743 19.6675 3.83285 19.6675C8.25744 19.6675 11.0059 20.6465 12.6798 22.3205C14.3538 23.9945 15.3328 26.743 15.3328 31.1674Z"
                      fill="white"
                    />
                    <path
                      d="M31.6245 42.6675C31.6245 43.726 32.4827 44.5842 33.5413 44.5842C34.5996 44.5842 35.4578 43.726 35.4578 42.6675C35.4578 39.9069 36.0707 38.3564 36.9628 37.4643C37.855 36.5722 39.4054 35.9592 42.1663 35.9592C43.2246 35.9592 44.0828 35.101 44.0828 34.0425C44.0828 32.9842 43.2246 32.126 42.1663 32.126C39.4054 32.126 37.855 31.513 36.9628 30.6209C36.0707 29.7288 35.4578 28.1783 35.4578 25.4175C35.4578 24.3592 34.5996 23.501 33.5413 23.501C32.4827 23.501 31.6245 24.3592 31.6245 25.4175C31.6245 28.1783 31.0116 29.7288 30.1195 30.6209C29.2274 31.513 27.6769 32.126 24.9163 32.126C23.8577 32.126 22.9995 32.9842 22.9995 34.0425C22.9995 35.101 23.8577 35.9592 24.9163 35.9592C27.6769 35.9592 29.2274 36.5722 30.1195 37.4643C31.0116 38.3564 31.6245 39.9069 31.6245 42.6675Z"
                      fill="white"
                    />
                  </g>
                </svg>
              ),
            },
            {
              type: "text",
              content: (
                <>
                  Generative
                  <br /> Artificial Intelligence
                </>
              ),
            },
          ],
        },
        portfolio: {
          title: <>Our Projects</>,
          description: (
            <>
              Discover some of our amazing projects, click and see in detail
              <CustomBr byViewport="desktop" /> each one of them.
            </>
          ),
        },
        faq: {
          title: <>Frequently asked questions</>,
          description: (
            <>
              Everything you&apos;ve always wanted to know about our services, explained in a
              <CustomBr byViewport="desktop" /> simple and direct way!
            </>
          ),
          list: [
            {
              question: <>What is the delivery time?</>,
              answer: (
                <>
                  The delivery time varies according to the project, but we guarantee it will be
                  delivered within the agreed timeframe.
                </>
              ),
            },
            {
              question: <>How do I contact Bubowl?</>,
              answer: (
                <>
                  You can contact us through the contact form, by email
                  <a href="mailto:contato@bubowl.com.br">contato@bubowl.com.br</a> or by phone{" "}
                  <a href="tel:+5511995300421">+55 11 99530-0421</a>.
                </>
              ),
            },
            {
              question: <>Does Bubowl offer support after project delivery?</>,
              answer: (
                <>
                  Yes, we offer technical support and maintenance for delivered projects. However,
                  this service is optional and can be contracted as needed, ensuring that the
                  website or application continues to function correctly and stays updated.
                </>
              ),
            },
            {
              question: <>Do you develop mobile applications? Which platforms do you support?</>,
              answer: (
                <>
                  Yes, we develop mobile applications for Android and iOS. We use technologies such
                  as React Native and Flutter to create cross-platform applications that work on
                  both operating systems.
                </>
              ),
            },
            {
              question: <>How does responsive website development work?</>,
              answer: (
                <>
                  Responsive website development is done using design and programming techniques
                  that allow the site to adapt to different screen sizes, ensuring a good browsing
                  experience on mobile and desktop devices.
                </>
              ),
            },
            {
              question: <>What is SEO and why is it important for my website?</>,
              answer: (
                <>
                  SEO (Search Engine Optimization) is the set of strategies and techniques used to
                  increase a website&apos;s visibility in search engines, such as Google. Good SEO
                  improves the site&apos;s ranking, attracting more visitors and, consequently,
                  increasing conversion chances.
                </>
              ),
            },
            {
              question: <>How does the Google positioning service work?</>,
              answer: (
                <>
                  The Google positioning service is done through SEO techniques, which optimize the
                  site for search engines, improving ranking in organic results. Additionally,
                  it&apos;s also possible to use Google Ads to advertise the site in paid results.
                </>
              ),
            },
            {
              question: <>What technologies does Bubowl use?</>,
              answer: (
                <>
                  We use modern and innovative technologies, such as React.js, Next.js, Unity, and
                  OpenAI, to create high-quality and high-performance websites, applications, and
                  digital platforms.
                </>
              ),
            },
          ],
        },
      },
    },
  },
  es: {
    data: {
      navigation: {
        title: "Navegación",
        content: [
          { title: "Inicio", href: "/", children: [] },
          {
            title: "Casos",
            href: "/cases",
            children: [
              {
                title: "Pantas Paladar",
                href: "/cases/pantas-paladar",
              },
              {
                title: "Fiberweb",
                href: "/cases/fiberweb",
              },
              {
                title: "Baterias Galileu",
                href: "/cases/baterias-galileu",
              },
              {
                title: "Autority Comunicación Visual",
                href: "/cases/autority-comunicacao-visual",
              },
            ],
          },
          { title: "Servicios", href: "/servicos", children: [] },
          { title: "Sobre", href: "/sobre", children: [] },
          { title: "Contacto", href: "/contato", children: [] },
        ],
      },
      social_share: {
        title: "Redes Sociales",
        content: [
          {
            title: "Instagram",
            link: "https://www.instagram.com/",
          },
          {
            title: "Whatsapp",
            link: "https://api.whatsapp.com/send?phone=5511995300421&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os",
          },
          {
            title: "Linkedin",
            link: "https://www.linkedin.com/",
          },
        ],
      },
      services: {
        title: "Servicios",
        content: [
          {
            title: "Creación de sitios web creativos",
          },
          {
            title: "Posicionamiento en Google - SEO",
          },
          {
            title: "Inteligencia artificial",
          },
          {
            title: "Fábrica de software",
          },
        ],
      },
      contact: {
        title: "Contacto",
        content: [
          {
            text: "Teléfono",
            content: "+55 11 99530-0421",
            link: "tel:+5511995300421",
          },
          {
            text: "E-Mail",
            content: "contato@bubowl.com.br",
            link: "mailto:contato@bubowl.com.br",
          },
        ],
      },
      footer: {
        title: <>Contacto</>,
        text: (
          <>
            ¿Necesitas ayuda con
            <CustomBr byViewport="desktop" /> tu empresa?{" "}
            <span>
              Ponte en
              <CustomBr byViewport="desktop" /> contacto con nosotros.
            </span>
          </>
        ),
        form: [
          {
            label: "Tu nombre",
            name: "name",
            type: "text",
          },
          {
            label: "Teléfono",
            name: "phone",
            type: "tel",
          },
          {
            label: "Enviar",
            name: "submit",
            type: "submit",
          },
        ],
      },
    },
    components: {
      home: {
        header: {
          content: {
            text: (
              <>
                Moldeando el futuro con <span>&lt;</span> un código a la vez <span>/&gt;</span>
              </>
            ),
            title: (
              <>
                Diseño y<br /> Creatividad
              </>
            ),
            description: (
              <>
                Fábrica de software, plataforma o sitio web.
                <CustomBr byViewport="mobile" /> Haz realidad tus
                <CustomBr byViewport="desktop" /> ideas y gana dinero
                <CustomBr byViewport="mobile" /> con ellas, haz clic y
                <CustomBr byViewport="desktop" /> conoce nuestros
                <CustomBr byViewport="mobile" /> proyectos.
              </>
            ),
            button: {
              title: "Ve nuestros casos",
              href: "/cases",
            },
          },
          globe: {
            active: true,
            list: [
              {
                title: "Sitios web únicos",
                description: "Creamos sitios web que conquistan y convierten.",
              },
              {
                title: "Plataformas",
                description: "Crea y monetiza tu herramienta como quieras.",
              },
              {
                title: "Proyectos con IA",
                description: "Incluye tecnologías ChatGPT en tus proyectos.",
              },
              {
                title: "Aplicaciones",
                description: "Desarrollamos aplicaciones para Android e iOS.",
              },
            ],
          },
        },
        tecnology: {
          title: "Nuestras Tecnologías:",
          imgs: [
            {
              src: "/imgs/tecnology/next.png",
              alt: "Next.js - Frontend, Backend y Móvil",
            },
            {
              src: "/imgs/tecnology/reactjs.png",
              alt: "React.js - Frontend, Móvil y Desktop",
            },
            {
              src: "/imgs/tecnology/unity.png",
              alt: "Unity - 3D, 2D, AR y VR",
            },
            {
              src: "/imgs/tecnology/openai.png",
              alt: "OpenAI - ChatGPT",
            },
          ],
        },
        case: {
          project: {
            info: {
              title: "Pantas Paladar",
              button: {
                title: "Ver el caso",
                href: "/cases/pantas-paladar",
              },
            },
            awward: {
              title: "awwwards.com",
              description: "8.5",
              href: "https://www.awwwards.com/sites/pantas-paladar",
            },
            content: {
              title: "Valorado positivamente en plataformas de diseño",
              description: "Conoce el proyecto que conquistó el corazón de los usuarios.",
            },
          },
          content: {
            title: "Rediseño de sitios web",
            text: (
              <>
                Si tu sitio web no recibe una
                <CustomBr byViewport="desktop" /> actualización de diseño desde hace
                <CustomBr byViewport="desktop" /> mucho tiempo,{" "}
                <a href="" title="Contacta con nosotros para tener un sitio web moderno">
                  contáctanos
                </a>{" "}
                y obtén
                <CustomBr byViewport="desktop" /> un sitio web moderno.
              </>
            ),
          },
        },
        services: {
          title: "Nuestros Servicios",
          description: (
            <>
              ¿Te interesa, verdad? Mira un poco más de lo que Bubowl puede ofrecerte, haz realidad
              tus ideas
              <CustomBr byViewport="desktop" /> con quienes entienden del tema.
            </>
          ),
          list: [
            {
              title: "Desarrollo Web",
              text: (
                <>
                  Creamos sitios web responsivos y
                  <CustomBr byViewport="desktop" /> dinámicos, hechos a medida para tus
                  <CustomBr byViewport="desktop" /> necesidades, garantizando una
                  <CustomBr byViewport="desktop" /> experiencia increíble en cualquier
                  <CustomBr byViewport="desktop" /> dispositivo. Desde tiendas online hasta
                  aplicaciones
                  <CustomBr byViewport="desktop" /> interactivas, nuestros especialistas
                  <CustomBr byViewport="desktop" /> transforman tu idea en realidad y
                  <CustomBr byViewport="desktop" /> hacen que tu viaje online sea un éxito.
                </>
              ),
              button: {
                title: "Saber más",
                href: "/servicos",
              },
            },
            {
              title: "Desarrollo Web",
              text: (
                <>
                  Creamos sitios web responsivos y
                  <CustomBr byViewport="desktop" /> dinámicos, hechos a medida para tus
                  <CustomBr byViewport="desktop" /> necesidades, garantizando una
                  <CustomBr byViewport="desktop" /> experiencia increíble en cualquier
                  <CustomBr byViewport="desktop" /> dispositivo. Desde tiendas online hasta
                  aplicaciones
                  <CustomBr byViewport="desktop" /> interactivas, nuestros especialistas
                  <CustomBr byViewport="desktop" /> transforman tu idea en realidad y
                  <CustomBr byViewport="desktop" /> hacen que tu viaje online sea un éxito.
                </>
              ),
              button: {
                title: "Saber más",
                href: "/servicos",
              },
            },
            {
              title: "Desarrollo Web",
              text: (
                <>
                  Creamos sitios web responsivos y
                  <CustomBr byViewport="desktop" /> dinámicos, hechos a medida para tus
                  <CustomBr byViewport="desktop" /> necesidades, garantizando una
                  <CustomBr byViewport="desktop" /> experiencia increíble en cualquier
                  <CustomBr byViewport="desktop" /> dispositivo. Desde tiendas online hasta
                  aplicaciones
                  <CustomBr byViewport="desktop" /> interactivas, nuestros especialistas
                  <CustomBr byViewport="desktop" /> transforman tu idea en realidad y
                  <CustomBr byViewport="desktop" /> hacen que tu viaje online sea un éxito.
                </>
              ),
              button: {
                title: "Saber más",
                href: "/servicos",
              },
            },
            {
              title: "Desarrollo Web",
              text: (
                <>
                  Creamos sitios web responsivos y
                  <CustomBr byViewport="desktop" /> dinámicos, hechos a medida para tus
                  <CustomBr byViewport="desktop" /> necesidades, garantizando una
                  <CustomBr byViewport="desktop" /> experiencia increíble en cualquier
                  <CustomBr byViewport="desktop" /> dispositivo. Desde tiendas online hasta
                  aplicaciones
                  <CustomBr byViewport="desktop" /> interactivas, nuestros especialistas
                  <CustomBr byViewport="desktop" /> transforman tu idea en realidad y
                  <CustomBr byViewport="desktop" /> hacen que tu viaje online sea un éxito.
                </>
              ),
              button: {
                title: "Saber más",
                href: "/servicos",
              },
            },
          ],
        },
        difference: {
          title: (
            <>
              <span>Sitio Bubowl</span>
              <span>VS</span>
              <span>Sitio Común</span>
            </>
          ),
          description: (
            <>
              Es clara la diferencia de un sitio web que da resultados, mira en la práctica lo que
              Bubowl puede
              <CustomBr byViewport="desktop" /> hacer por tu empresa.
            </>
          ),
          imgs: [
            {
              src: "/imgs/difference/bubowl.png",
              alt: "Sitio Bubowl - Baterias Galileu",
            },
            {
              src: "/imgs/difference/common.png",
              alt: "Sitio Común - Baterias Galileu antiguo",
            },
          ],
          content: {
            leads: {
              text: "Leads recibidos",
              number: 700,
            },
            domain: {
              text: "Autoridad del dominio",
              number: 78,
            },
            hits: {
              text: "Visitas mensuales",
              number: 2000,
            },
          },
        },
        how_it_works: {
          title: <>¿Cómo funciona?</>,
          steps: [
            {
              span: <>Charla</>,
              title: <>Hablamos de tu idea</>,
              description: (
                <>
                  Después de que nos contactas, te llamaremos para charlar. La idea es conocer tus
                  necesidades y mostrarte todo lo que Bubowl puede ofrecer.
                </>
              ),
              img: {
                src: "/imgs/how-it-works/chat.png",
                alt: "Charla",
              },
            },
            {
              span: <>Planificación</>,
              title: <>Diseñamos tu idea</>,
              description: (
                <>
                  Con la idea en mano, nuestro equipo de expertos planificará y desarrollará el
                  proyecto, manteniéndote siempre informado en cada etapa.
                </>
              ),
              img: {
                src: "/imgs/how-it-works/planning.png",
                alt: "Planificación",
              },
            },
            {
              span: <>Entrega</>,
              title: <>Entregamos el proyecto</>,
              description: (
                <>
                  Una vez que todo esté listo, te entregaremos el proyecto y, por supuesto, siempre
                  con soporte para cualquier duda que pueda surgir.
                </>
              ),
              img: {
                src: "/imgs/how-it-works/delivery.png",
                alt: "Entrega",
              },
            },
          ],
        },
        business: {
          title: (
            <>
              Deja la tecnología de tu empresa
              <CustomBr byViewport="desktop" />
              en manos de expertos
            </>
          ),
          list: [
            {
              type: "text",
              content: (
                <>
                  Gestión de
                  <br /> Servidores
                </>
              ),
            },
            {
              type: "icon",
              content: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="31"
                  viewBox="0 0 34 31"
                  fill="none"
                >
                  <mask
                    id="mask0_660_75"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="34"
                    height="31"
                  >
                    <path d="M33.575 0.5H0.424988V30.5H33.575V0.5Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_660_75)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M33.2811 14.0585C33.6684 14.7291 33.6684 15.5554 33.2811 16.2261L26.0784 28.7008C25.6911 29.3714 24.9755 29.7846 24.201 29.7846H9.79555C9.02108 29.7846 8.30543 29.3714 7.91812 28.7008L0.71547 16.2261C0.32816 15.5554 0.32816 14.7291 0.71547 14.0585L7.91812 1.58381C8.30543 0.913149 9.02108 0.5 9.79555 0.5H24.201C24.9755 0.5 25.6911 0.913149 26.0784 1.58381L33.2811 14.0585ZM26.9233 9.8054C27.2129 9.73633 27.4571 10.0274 27.3387 10.3005L25.3512 14.8853C25.2444 15.1318 24.9156 15.1797 24.7429 14.9739L24.0046 14.094L19.3998 18.1203C18.9506 18.513 18.2686 18.469 17.8738 18.0219L14.8219 14.5656L11.3118 17.621C11.3549 17.7974 11.3777 17.9818 11.3777 18.1716C11.3777 19.4484 10.3425 20.4837 9.06541 20.4837C7.78844 20.4837 6.75311 19.4484 6.75311 18.1716C6.75311 16.8945 7.78844 15.8594 9.06541 15.8594C9.34808 15.8594 9.61891 15.91 9.86922 16.0029L14.2104 12.224C14.6596 11.833 15.3403 11.8777 15.7345 12.3242L18.7848 15.7785L22.6108 12.4331L21.8699 11.5501C21.6972 11.3444 21.8014 11.0288 22.0627 10.9665L26.9233 9.8054Z"
                      fill="white"
                    />
                  </g>
                </svg>
              ),
            },
            {
              type: "text",
              content: (
                <>
                  Aplicaciones con
                  <br /> Realidad
                  <br /> Aumentada
                </>
              ),
            },
            {
              type: "icon",
              content: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="31"
                  viewBox="0 0 32 31"
                  fill="none"
                >
                  <path d="M31.5 0.5H0.5V30.5H31.5V0.5Z" fill="white" />
                </svg>
              ),
            },
            {
              type: "text",
              content: (
                <>
                  Inteligencia
                  <br /> Artificial Generativa
                </>
              ),
            },
            {
              type: "text",
              content: (
                <>
                  Aplicaciones con
                  <br /> Realidad
                  <br /> Aumentada
                </>
              ),
            },
            {
              type: "icon",
              content: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="47"
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  <mask
                    id="mask0_660_105"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="46"
                    height="47"
                  >
                    <path d="M46 0.5H0V46.5H46V0.5Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_660_105)">
                    <path
                      d="M15.3328 31.1674C15.3328 32.2259 16.191 33.0841 17.2495 33.0841C18.3081 33.0841 19.1662 32.2259 19.1662 31.1674C19.1662 26.743 20.1453 23.9945 21.8192 22.3205C23.4932 20.6465 26.2417 19.6675 30.6663 19.6675C31.7246 19.6675 32.5828 18.8094 32.5828 17.7508C32.5828 16.6923 31.7246 15.8342 30.6663 15.8342C26.2417 15.8342 23.4932 14.8551 21.8192 13.1811C20.1453 11.5071 19.1662 8.75875 19.1662 4.33416C19.1662 3.27561 18.3081 2.41748 17.2495 2.41748C16.191 2.41748 15.3328 3.27561 15.3328 4.33416C15.3328 8.75875 14.3538 11.5071 12.6798 13.1811C11.0059 14.8551 8.25744 15.8342 3.83285 15.8342C2.7743 15.8342 1.9162 16.6923 1.9162 17.7508C1.9162 18.8094 2.7743 19.6675 3.83285 19.6675C8.25744 19.6675 11.0059 20.6465 12.6798 22.3205C14.3538 23.9945 15.3328 26.743 15.3328 31.1674Z"
                      fill="white"
                    />
                    <path
                      d="M31.6245 42.6675C31.6245 43.726 32.4827 44.5842 33.5413 44.5842C34.5996 44.5842 35.4578 43.726 35.4578 42.6675C35.4578 39.9069 36.0707 38.3564 36.9628 37.4643C37.855 36.5722 39.4054 35.9592 42.1663 35.9592C43.2246 35.9592 44.0828 35.101 44.0828 34.0425C44.0828 32.9842 43.2246 32.126 42.1663 32.126C39.4054 32.126 37.855 31.513 36.9628 30.6209C36.0707 29.7288 35.4578 28.1783 35.4578 25.4175C35.4578 24.3592 34.5996 23.501 33.5413 23.501C32.4827 23.501 31.6245 24.3592 31.6245 25.4175C31.6245 28.1783 31.0116 29.7288 30.1195 30.6209C29.2274 31.513 27.6769 32.126 24.9163 32.126C23.8577 32.126 22.9995 32.9842 22.9995 34.0425C22.9995 35.101 23.8577 35.9592 24.9163 35.9592C27.6769 35.9592 29.2274 36.5722 30.1195 37.4643C31.0116 38.3564 31.6245 39.9069 31.6245 42.6675Z"
                      fill="white"
                    />
                  </g>
                </svg>
              ),
            },
            {
              type: "text",
              content: (
                <>
                  Inteligencia
                  <br /> Artificial Generativa
                </>
              ),
            },
          ],
        },
        portfolio: {
          title: <>Nuestros Proyectos</>,
          description: (
            <>
              Conoce algunos de nuestros increíbles proyectos, haz clic y mira en detalle
              <CustomBr byViewport="desktop" /> cada uno de ellos.
            </>
          ),
        },
        faq: {
          title: <>Preguntas frecuentes</>,
          description: (
            <>
              ¡Todo lo que siempre quisiste saber sobre nuestros servicios, explicado de forma
              <CustomBr byViewport="desktop" /> simple y directa!
            </>
          ),
          list: [
            {
              question: <>¿Cuál es el plazo de entrega?</>,
              answer: (
                <>
                  El plazo de entrega varía según el proyecto, pero garantizamos que se entregará
                  dentro del plazo acordado.
                </>
              ),
            },
            {
              question: <>¿Cómo puedo contactar con Bubowl?</>,
              answer: (
                <>
                  Puedes contactarnos a través del formulario de contacto, por email
                  <a href="mailto:contato@bubowl.com.br">contato@bubowl.com.br</a> o por teléfono{" "}
                  <a href="tel:+5511995300421">+55 11 99530-0421</a>.
                </>
              ),
            },
            {
              question: <>¿Bubowl ofrece soporte después de la entrega del proyecto?</>,
              answer: (
                <>
                  Sí, ofrecemos soporte técnico y mantenimiento para los proyectos entregados. Sin
                  embargo, este servicio es opcional y puede contratarse según sea necesario,
                  garantizando que el sitio web o la aplicación siga funcionando correctamente y se
                  mantenga actualizado.
                </>
              ),
            },
            {
              question: <>¿Desarrollan aplicaciones móviles? ¿Qué plataformas soportan?</>,
              answer: (
                <>
                  Sí, desarrollamos aplicaciones móviles para Android e iOS. Utilizamos tecnologías
                  como React Native y Flutter para crear aplicaciones multiplataforma que funcionan
                  en ambos sistemas operativos.
                </>
              ),
            },
            {
              question: <>¿Cómo funciona el desarrollo de sitios web responsivos?</>,
              answer: (
                <>
                  El desarrollo de sitios web responsivos se realiza utilizando técnicas de diseño y
                  programación que permiten que el sitio se adapte a diferentes tamaños de pantalla,
                  garantizando una buena experiencia de navegación en dispositivos móviles y de
                  escritorio.
                </>
              ),
            },
            {
              question: <>¿Qué es SEO y por qué es importante para mi sitio web?</>,
              answer: (
                <>
                  SEO (Search Engine Optimization) es el conjunto de estrategias y técnicas
                  utilizadas para aumentar la visibilidad de un sitio web en los motores de
                  búsqueda, como Google. Un buen SEO mejora el ranking del sitio, atrayendo más
                  visitantes y, en consecuencia, aumentando las posibilidades de conversión.
                </>
              ),
            },
            {
              question: <>¿Cómo funciona el servicio de posicionamiento en Google?</>,
              answer: (
                <>
                  El servicio de posicionamiento en Google se realiza a través de técnicas de SEO,
                  que optimizan el sitio para los motores de búsqueda, mejorando el ranking en los
                  resultados orgánicos. Además, también es posible utilizar Google Ads para anunciar
                  el sitio en los resultados pagados.
                </>
              ),
            },
            {
              question: <>¿Qué tecnologías utiliza Bubowl?</>,
              answer: (
                <>
                  Utilizamos tecnologías modernas e innovadoras, como React.js, Next.js, Unity y
                  OpenAI, para crear sitios web, aplicaciones y plataformas digitales de alta
                  calidad y rendimiento.
                </>
              ),
            },
          ],
        },
      },
    },
  },
};
