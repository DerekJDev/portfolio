export const appSettings = {
  openForWork: true,
  socialLinks: [{
    platform: 'linkedin',
    url: 'https://linkedin.com/in/derek-m-johnson/',
    icon: 'lni lni-linkedin'
  }, {
    platform: 'github',
    url: 'https://github.com/DerekJDev',
    icon: 'lni lni-github'
  }, {
    platform: 'x',
    url: 'https://x.com/derekjdev',
    icon: 'lni lni-x'
  }],
  experiences: [
    {
      en: {
        image: './assets/images/experiences/tarvent.png',
        title: 'Front-End Architect & Co-Founder',
        company: 'Tarvent Inc.',
        duration: '2022 - 2025',
        description: 'As co-founder of Tarvent, I led the front-end architecture and development of a SaaS platform that scaled to serve 500+ clients, ranging in all different sizes. I guided the full product lifecycle, from concept and design to deployment and enterprise delivery, while shaping the company\'s technical foundation and user experience.',
        achievements: [
          'Scaled Angular/TypeScript application to serve 500+ clients, from small businesses to Fortune 500 enterprises',
          'Independently managed all front-end development and architecture, delivering enterprise-grade Angular applications while collaborating with backend team on API design and integration',
          'Improved development velocity 40% by establishing coding standards, reusable component libraries, and design system',
          'Reduced application load times 25% through optimized data fetching strategies and API integration patterns',
          'Maintained 99.9% uptime across Azure cloud infrastructure through proactive monitoring and disaster recovery protocols'
        ]
      },
      pt: {
        image: './assets/images/experiences/tarvent.png',
        title: 'Arquiteto Front-End e Co-Fundador',
        company: 'Tarvent Inc.',
        duration: '2022 - 2025',
        description: 'Como co-fundador da Tarvent, lidero a arquitetura e desenvolvimento front-end de uma plataforma SaaS que escalou para atender mais de 500 clientes, em todos os tamanhos. Guiei o ciclo de vida completo do produto, desde concepção e design até implantação e entrega empresarial, moldando a base técnica e a experiência do usuário da empresa.',
        achievements: [
          'Escalou a aplicação Angular/TypeScript para atender mais de 500 clientes, desde pequenas empresas até empresas Fortune 500',
          'Gerenciei o desenvolvimento e a arquitetura front-end sozinho, entregando aplicações Angular de grande escala enquanto colaborava com a equipe backend na design e integração de APIs',
          'Aumentou a velocidade de desenvolvimento 40% estabelecendo padrões de codificação, bibliotecas de componentes reutilizáveis e sistema de design',
          'Reduziu os tempos de carregamento da aplicação 25% por meio de estratégias de busca de dados otimizadas e padrões de integração de APIs',
          'Mantive 99.9% de disponibilidade na infraestrutura de nuvem Azure por meio de protocolos de monitoramento e recuperação de desastres'
        ]
      }
    },
    {
      en: {
        image: './assets/images/experiences/ixfactor.png',
        title: 'Front-End Developer',
        company: 'iXfactor Inc.',
        duration: '2015 - 2022',
        description: 'Delivered enterprise-scale front-end solutions for Fortune 500 financial services and travel companies, managing both application development and cloud infrastructure.',
        achievements: [
          'Built mission-critical applications for J.P. Morgan Chase, Visa, MasterCard, Citi, Air Canada, and Discover, meeting stringent performance, security, and compliance requirements',
          'Maintained and enhanced large-scale ASP.NET front-end ensuring stability and long-term maintainability for high-traffic financial applications',
          'Designed and integrated Angular modules into legacy ASP.NET environment, modernizing user experience while maintaining system stability',
          'Created drag-and-drop email builder with complex HTML generation and custom reporting dashboards for enterprise clients',
          'Contributed heavily to the migration from physical data center to Microsoft Azure, improving scalability and operational efficiency',
          'Managed Plesk web hosting server handling deployment, maintenance, and troubleshooting for production applications'
        ]
      },
      pt: {
        image: './assets/images/experiences/ixfactor.png',
        title: 'Desenvolvedor Front-End',
        company: 'iXfactor Inc.',
        duration: '2015 - 2022',
        description: 'Desenvolvi e mantenho soluções de front-end de grande escala para empresas Fortune 500 de serviços financeiros e viagens, gerenciando o desenvolvimento de aplicações e a infraestrutura de nuvem.',
        achievements: [
          'Construí aplicações críticas para J.P. Morgan Chase, Visa, MasterCard, Citi, Air Canada, e Discover, atendendo aos requisitos de desempenho, segurança e conformidade rigorosos',
          'Mantive e otimizei o front-end de grande escala ASP.NET, garantindo estabilidade e manutenibilidade a longo prazo para aplicações financeiras de alto tráfego',
          'Projetei e integrei módulos Angular em ambiente legado ASP.NET, modernizando a experiência do usuário mantendo a estabilidade do sistema',
          'Criei construtor de emails com geração de HTML complexa e dashboards de relatórios personalizados para clientes corporativos',
          'Contribuí para a migração do data center físico para Microsoft Azure, melhorando a escalabilidade e a eficiência operacional',
          'Gerenciei o servidor de hospedagem web Plesk, lidando com o deployment, manutenção e troubleshooting para aplicações de produção'
        ]

      }
    }
  ],
  projects: [
    {
      en: {
        image: './assets/images/projects/tarvent-app.png',
        title: 'Tarvent',
        description: 'Tarvent is an email marketing, marketing automation, and email API SaaS platform. Built with intuitive design, user-friendly interfaces, and powerful features.',
        technologies: ['Angular', 'TypeScript', 'Syncfusion Angular Components', 'SCSS', 'i18n', 'GraphQL'],
        links: [
          {
            icon: 'lni lni-globe-1',
            url: 'https://tarvent.com'
          }
        ]
      },
      pt: {
        image: './assets/images/projects/tarvent-app.png',
        title: 'Tarvent',
        description: 'Tarvent é uma plataforma SaaS de marketing de e-mail, automação de marketing e API de e-mail. Construído com design intuitivo, interfaces amigáveis e recursos poderosos.',
        technologies: ['Angular', 'TypeScript', 'Syncfusion Angular Components', 'SCSS', 'i18n', 'GraphQL'],
        links: [
          {
            icon: 'lni lni-globe-1',
            url: 'https://tarvent.com'
          }
        ]
      }
    },
    {
      en: {
        image: './assets/images/projects/tarvent-mobile-app.png',
        title: 'Tarvent Mobile App',
        description: 'This mobile app was built to provide reporting and contact management for the Tarvent platform.',
        technologies: ['.NET Maui', 'Blazor', 'Syncfusion Blazor Components', 'GraphQL'],
        links: [
          {
            icon: 'lni lni-globe-1',
            url: 'https://play.google.com/store/apps/details?id=com.tarventinc.tarvent'
          }
        ]
      },
      pt: {
        image: './assets/images/projects/tarvent-mobile-app.png',
        title: 'Tarvent Mobile App',
        description: 'Este aplicativo móvel foi construído para fornecer relatórios e gerenciamento de contatos para a plataforma Tarvent.',
        technologies: ['.NET Maui', 'Blazor', 'Syncfusion Blazor Components', 'GraphQL'],
        links: [
          {
            icon: 'lni lni-globe-1',
            url: 'https://play.google.com/store/apps/details?id=com.tarventinc.tarvent'
          }
        ]
      }
    },
    {
      en: {
        image: './assets/images/projects/tarvent-zapier.png',
        title: 'Zapier Integration',
        description: 'This integration was built to provide users a way to interact with Tarvent using Zapier.',
        technologies: ['Zapier','JavaScript', 'GraphQL'],
        links: [
          {
            icon: 'lni lni-globe-1',
            url: 'https://zapier.com/apps/tarvent/integrations'
          }
        ]
      },
      pt: {
        image: './assets/images/projects/tarvent-zapier.png',
        title: 'Integração Zapier',
        description: 'Esta integração foi construída para fornecer aos usuários uma forma de interagir com Tarvent usando Zapier.',
        technologies: ['Zapier','JavaScript', 'GraphQL'],
        links: [
          {
            icon: 'lni lni-globe-1',
            url: 'https://zapier.com/apps/tarvent/integrations'
          }
        ]
      }
    },
    {
      en: {
        image: './assets/images/projects/tarvent-activepieces.png',
        title: 'Activepieces Integration',
        description: 'This integration was built to provide users a way to interact with Tarvent using Activepieces.',
        technologies: ['Activepieces','TypeScript', 'GraphQL'],
        links: [
          {
            icon: 'lni lni-globe-1',
            url: 'https://www.activepieces.com/pieces/tarvent'
          },
          {
            icon: 'lni lni-github',
            url: 'https://github.com/activepieces/activepieces/tree/main/packages/pieces/community/tarvent'
          }
        ]
      },
      pt: {
        image: './assets/images/projects/tarvent-activepieces.png',
        title: 'Integração Activepieces',
        description: 'Esta integração foi construída para fornecer aos usuários uma forma de interagir com Tarvent usando Activepieces.',
        technologies: ['Activepieces','TypeScript', 'GraphQL'],
        links: [
          {
            icon: 'lni lni-globe-1',
            url: 'https://www.activepieces.com/pieces/tarvent'
          },
          {
            icon: 'lni lni-github',
            url: 'https://github.com/activepieces/activepieces/tree/main/packages/pieces/community/tarvent'
          }
        ]
      }
    },
    {
      en: {
        image: './assets/images/projects/dashboard.png',
        title: 'Enterprise Reporting and Template Management Dashboard',
        description: 'This dashboard was built to provide reporting and template management for emails sent through the iXfactor and Tarvent email API. It was built for major companies like J.P. Morgan Chase, Visa, MasterCard, Citi, Air Canada, and Discover.',
        technologies: ['Angular', 'TypeScript', 'Angular Material', 'REST APIs'],
        links: []
      },
      pt: {
        image: './assets/images/projects/dashboard.png',
        title: 'Dashboard de Relatórios e Gerenciamento de Modelos',
        description: 'Este dashboard foi construído para fornecer relatórios e gerenciamento de modelos para emails enviados através da API de email do iXfactor e Tarvent. Foi construído para grandes empresas como J.P. Morgan Chase, Visa, MasterCard, Citi, Air Canada e Discover.',
        technologies: ['Angular', 'TypeScript', 'Angular Material', 'REST APIs'],
        links: []
      }
    },
    {
      en: {
        image: './assets/images/projects/email-editor.png',
        title: 'Drag-and-drop Email Builder',
        description: 'This email builder was built to provide a drag-and-drop interface for creating marketing and transactionalemails.',
        technologies: ['Angular', 'TypeScript', 'Angular Material', 'handlebars.js'],
        links: []
      },
      pt: {
        image: './assets/images/projects/email-editor.png',
        title: 'Construtor de Emails Drag-and-drop',
        description: 'Este construtor de emails foi construído para fornecer uma interface drag-and-drop para criar emails de marketing e transacionais.',
        technologies: ['Angular', 'TypeScript', 'Angular Material', 'handlebars.js'],
        links: []
      }
    },
    {
      en: {
        image: './assets/images/projects/email-report.png',
        title: 'Report for Email Marketing Campaign Performance',
        description: 'This report was built to provide a report for email marketing campaign performance. It was integrated with an exsiting ASP.NET app.',
        technologies: ['Angular.JS', 'JavaScript', 'Angular Material', 'highcharts.js'],
        links: []
      },
      pt: {
        image: './assets/images/projects/email-report.png',
        title: 'Relatório para Desempenho de Campanhas de Marketing de Email',
        description: 'Este relatório foi construído para fornecer um relatório para o desempenho de campanhas de marketing de email. Foi integrado com um aplicativo ASP.NET existente.',
        technologies: ['Angular.JS', 'JavaScript', 'Angular Material', 'highcharts.js'],
        links: []
      }
    }
  ],
  email: 'derekjohnson277@gmail.com',
  phone: '+19522288768',
  phoneDisplay: '(952) 228-8768',
  location: 'Lone tree, CO',
};
export const getCurrentYear = () => {
  return new Date().getFullYear();
}
