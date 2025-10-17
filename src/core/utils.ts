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
        title: 'Senior Front-End Engineer & Architect',
        company: 'Tarvent Inc.',
        duration: '2022 - Present',
        description: 'Led front-end architecture for a SaaS platform providing email marketing, marketing automation, and email API solutions. Scaled the product from concept to 500+ clients, including Fortune 500 companies.',
        achievements: [
          'Developed the Angular/TypeScript front-end from prototype to production.',
          'Reduced load times by 25% and improved development velocity by 40% through reusable component libraries and a unified design system.',
          'Implemented scalable state management with RxJS for efficient data flow and real-time updates.',
          'Developed cross-platform mobile apps using .NET MAUI and Blazor.',
          'Maintained 99.9% uptime through Azure automation and system monitoring.',
          'Worked closely with backend, product, and design teams to translate complex business requirements into secure, compliant enterprise solutions.',
          'Mentored developers, led code reviews, and introduced standards that improved team efficiency and code quality.'
        ]
      },
      pt: {
        image: './assets/images/experiences/tarvent.png',
        title: 'Engenheiro Front-End Sênior & Arquiteto',
        company: 'Tarvent Inc.',
        duration: '2022 - Present',
        "description": "Liderei a arquitetura e o desenvolvimento front-end de uma plataforma SaaS de marketing por e-mail, automação de marketing e API de e-mail que escalou para atender mais de 500 clientes, incluindo empresas Fortune 500.",
        "achievements": [
          "Desenvolvi a arquitetura e o front-end da aplicação Angular/TypeScript desde o protótipo até a produção.",
          "Reduzi os tempos de carregamento da aplicação em 25% e aumentei a velocidade de desenvolvimento em 40% por meio de bibliotecas de componentes reutilizáveis e um sistema de design unificado.",
          "Implementei gerenciamento de estado escalável com RxJS para fluxo de dados eficiente e atualizações em tempo real.",
          "Desenvolvi aplicativos móveis multiplataforma usando .NET MAUI e Blazor.",
          "Mantive 99,9% de disponibilidade na infraestrutura de nuvem Azure por meio de automação e monitoramento de sistemas.",
          "Colaborei com as equipes de backend, produto e design para traduzir requisitos de negócio complexos em soluções seguras e compatíveis com padrões de conformidade empresarial.",
          "Mentorei desenvolvedores, liderei revisões de código e introduzi padrões que melhoraram a eficiência da equipe e a qualidade do código."
        ]
      }
    },
    {
      en: {
        image: './assets/images/experiences/ixfactor.png',
        title: 'Front-End Developer',
        company: 'iXfactor Inc.',
        duration: '2015 - 2022',
        description: 'Built and modernized enterprise front-end applications and maintained a multi-tenant email marketing platform used by clients across various industries.',
        achievements: [
          'Delivered enterprise-scale front-end solutions for J.P. Morgan Chase, Visa, MasterCard, Citi, Air Canada, and Discover.',
          'Maintained and enhanced a multi-tenant ASP.NET email marketing platform serving hundreds of customers across diverse industries.',
          'Designed and integrated Angular modules into legacy ASP.NET environment, modernizing user experience while maintaining system stability',
          'Built advanced UIs including a drag-and-drop email builder and reporting dashboards.',
          'Supported Azure cloud migration and managed Plesk-based hosting and production environments.'
        ]
      },
      pt: {
        image: './assets/images/experiences/ixfactor.png',
        title: 'Desenvolvedor Front-End',
        company: 'iXfactor Inc.',
        duration: '2015 - 2022',
        description: 'Desenvolvi e modernizei aplicações front-end corporativas e mantive uma plataforma de marketing por e-mail multi-tenant utilizada por clientes de diversos setores.',
        achievements: [
          'Entreguei soluções front-end em escala corporativa para J.P. Morgan Chase, Visa, MasterCard, Citi, Air Canada e Discover.',
          'Mantive e aprimorei uma plataforma de marketing por e-mail multi-tenant em ASP.NET, atendendo centenas de clientes em diferentes segmentos.',
          'Projetei e integrei módulos Angular em um ambiente legado ASP.NET, modernizando a experiência do usuário sem comprometer a estabilidade do sistema.',
          'Desenvolvi interfaces avançadas, incluindo um construtor de e-mails com recurso de arrastar e soltar e painéis de relatórios interativos.',
          'Dei suporte à migração para a nuvem Azure e gerenciei ambientes de hospedagem e produção baseados em Plesk.'
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
        technologies: ['Zapier', 'JavaScript', 'GraphQL'],
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
        technologies: ['Zapier', 'JavaScript', 'GraphQL'],
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
        technologies: ['Activepieces', 'TypeScript', 'GraphQL'],
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
        technologies: ['Activepieces', 'TypeScript', 'GraphQL'],
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
  email: 'me@derekjohnson.dev',
  phone: '+19522288768',
  phoneDisplay: '(952) 228-8768',
  location: 'Lone tree, CO',
};
export const getCurrentYear = () => {
  return new Date().getFullYear();
}
