export const appSettings = {
  openForWork: false,
  socialLinks: [{
    platform: 'linkedin',
    url: 'https://linkedin.com/in/derek-m-johnson/',
    icon: 'lni lni-linkedin'
  }, {
    platform: 'github',
    url: 'https://github.com/DerekJDev',
    icon: 'lni lni-github'
  }],
  experiences: [
    {
      "en": {
        "image": "./assets/images/experiences/forta.png",
        "title": "Frontend Angular Developer",
        "company": "Forta Solutions | Agility",
        "duration": "Dec 2025 - Present",
        "scope": "Frontend architecture lead · GraphQL schema design · AI tooling",
        "description": "Lead frontend architecture for Agility, a cloud-native fintech platform for warehouse lending, and work across the stack in epic planning to shape API and backend design for complex financial workflows, while driving the team's adoption of AI-assisted development.",
        "achievements": [
          "GraphQL Schema Design: Help architect the GraphQL schema, deciding how each query and mutation is designed so the API fits real product workflows.",
          "API Governance & CI/CD Automation: Built a CI/CD pipeline task that lints the GraphQL schema against best-practice rules, catching naming, structure, and design issues before merge and enforcing consistent API contracts across frontend and backend teams.",
          "Cross-Stack Delivery: Collaborate on backend design during epic planning and make Java API changes to support new product requirements.",
          "AI Developer Tooling & Enablement: Co-architected the team's Model Context Protocol (MCP) server, built its TypeScript proof of concept, and authored shared Cursor rules adopted by all developers, so AI-generated code stays consistent with established architecture and standards.",
          "Component Library & Design System: Architected and deployed an application-wide theme system and reusable internal component library built on PrimeNG, improving UI consistency and developer velocity across engineering teams.",
          "Accessibility Compliance: Led a full accessibility overhaul to reach WCAG 2.2 compliance across the platform, customizing PrimeNG components to meet the standard.",
          "Analytics: Implemented GA4 and Google Tag Manager in the web application.",
          "Code Governance & Quality: Serve as the mandatory code reviewer for all production-bound pull requests, maintaining strict standards for performance, security, and maintainability.",
          "Technical Refinement & Design Alignment: Lead technical refinement sessions and partner with UI/UX designers to turn complex financial workflows into buildable technical specs."
        ]
      },
      "pt": {
        "image": "./assets/images/experiences/forta.png",
        "title": "Desenvolvedor Front-End Angular",
        "company": "Forta Solutions | Agility",
        "duration": "Dez 2025 - Presente",
        "scope": "Liderança de arquitetura front-end · Design de schema GraphQL · Ferramentas de IA",
        "description": "Lidero a arquitetura front-end do Agility, uma plataforma fintech cloud-native para warehouse lending, e atuo em toda a stack no planejamento de épicos, ajudando a definir o design de APIs e do back-end para fluxos financeiros complexos, além de impulsionar a adoção de desenvolvimento assistido por IA na equipe.",
        "achievements": [
          "Design de Schema GraphQL: Ajudo a arquitetar o schema GraphQL, definindo como cada query e mutation é projetada para que a API atenda aos fluxos reais do produto.",
          "Governança de API & Automação de CI/CD: Desenvolvi uma etapa no pipeline de CI/CD que executa lint no schema GraphQL com base em boas práticas, identificando problemas de nomenclatura, estrutura e design antes do merge e garantindo contratos de API consistentes entre as equipes de front-end e back-end.",
          "Entrega Cross-Stack: Colaboro no design do back-end durante o planejamento de épicos e faço alterações em APIs Java para atender a novos requisitos de produto.",
          "Ferramentas de IA & Capacitação de Desenvolvedores: Co-arquitetei o servidor MCP (Model Context Protocol) da equipe, construí sua prova de conceito em TypeScript e criei regras compartilhadas do Cursor adotadas por todos os desenvolvedores, para que o código gerado por IA permaneça consistente com a arquitetura e os padrões estabelecidos.",
          "Biblioteca de Componentes & Design System: Arquitetei e implantei um sistema de temas para toda a aplicação e uma biblioteca interna de componentes reutilizáveis com PrimeNG, melhorando a consistência da UI e a velocidade de desenvolvimento entre as equipes.",
          "Conformidade de Acessibilidade: Liderei uma reformulação completa de acessibilidade para alcançar conformidade com WCAG 2.2 em toda a plataforma, personalizando componentes PrimeNG para atender ao padrão.",
          "Analytics: Implementei GA4 e Google Tag Manager na aplicação web.",
          "Governança de Código & Qualidade: Atuo como revisor de código obrigatório para todos os pull requests destinados à produção, mantendo padrões rigorosos de performance, segurança e manutenibilidade.",
          "Refinamento Técnico & Alinhamento de Design: Lidero sessões de refinamento técnico e trabalho com as equipes de UI/UX para transformar fluxos financeiros complexos em especificações técnicas implementáveis."
        ]
      }
    },
    {
      "en": {
        "image": "./assets/images/experiences/tarvent.png",
        "title": "Senior Front-End Engineer & Architect",
        "company": "Tarvent Inc.",
        "duration": "Jan 2022 - Nov 2025",
        "scope": "Frontend architecture lead · Integrations · Production on-call",
        "description": "Led front-end architecture for a SaaS platform providing email marketing, marketing automation, and email API solutions. Scaled the product from concept to 500+ clients, including Fortune 500 companies.",
        "achievements": [
          "Prototype to Production: Took the Angular/TypeScript platform from prototype to production and 500+ clients, including Fortune 500 companies.",
          "GraphQL Schema Design: Helped architect the GraphQL schema behind the web app, mobile app, and integrations, deciding how each query and mutation was designed.",
          "Production Reliability: On call for production throughout, using Azure Monitor alerts and Uptime Robot SMTP and URL checks; helped add load balancers, health checks, and database autoscaling to maintain 99.9% uptime.",
          "Integrations: Built the Zapier and Activepieces integrations end to end, including small backend updates, and handled the handoff.",
          "Analytics & Experimentation: Owned GA4 and Google Tag Manager across the marketing site and web application, managed Google Search Console, and ran A/B-tested landing pages to track engagement.",
          "Performance: Reduced load times by 25% and improved development velocity by 40% through reusable component libraries and a unified design system.",
          "State Management: Implemented scalable state management with RxJS for efficient data flow and real-time updates.",
          "Mobile: Developed cross-platform mobile apps using .NET MAUI and Blazor.",
          "Mentorship: Mentored developers, led code reviews, and introduced standards that improved team efficiency and code quality."
        ]
      },
      "pt": {
        "image": "./assets/images/experiences/tarvent.png",
        "title": "Engenheiro Front-End Sênior & Arquiteto",
        "company": "Tarvent Inc.",
        "duration": "Jan 2022 - Nov 2025",
        "scope": "Liderança de arquitetura front-end · Integrações · Plantão em produção",
        "description": "Liderei a arquitetura front-end de uma plataforma SaaS de marketing por e-mail, automação de marketing e API de e-mail. Levei o produto do conceito a mais de 500 clientes, incluindo empresas Fortune 500.",
        "achievements": [
          "Do Protótipo à Produção: Levei a plataforma Angular/TypeScript do protótipo à produção e a mais de 500 clientes, incluindo empresas Fortune 500.",
          "Design de Schema GraphQL: Ajudei a arquitetar o schema GraphQL usado pela aplicação web, pelo app móvel e pelas integrações, definindo como cada query e mutation era projetada.",
          "Confiabilidade em Produção: Fiquei de plantão para a produção durante todo o período, usando alertas do Azure Monitor e verificações de SMTP e URL do Uptime Robot; ajudei a adicionar load balancers, health checks e autoescalonamento do banco de dados para manter 99,9% de disponibilidade.",
          "Integrações: Desenvolvi as integrações com Zapier e Activepieces de ponta a ponta, incluindo pequenas atualizações no back-end, e conduzi a entrega.",
          "Analytics & Experimentação: Fui responsável pelo GA4 e pelo Google Tag Manager no site institucional e na aplicação web, gerenciei o Google Search Console e conduzi testes A/B em landing pages para acompanhar o engajamento.",
          "Performance: Reduzi os tempos de carregamento em 25% e aumentei a velocidade de desenvolvimento em 40% por meio de bibliotecas de componentes reutilizáveis e um design system unificado.",
          "Gerenciamento de Estado: Implementei gerenciamento de estado escalável com RxJS para fluxo de dados eficiente e atualizações em tempo real.",
          "Mobile: Desenvolvi aplicativos móveis multiplataforma usando .NET MAUI e Blazor.",
          "Mentoria: Mentorei desenvolvedores, liderei revisões de código e introduzi padrões que melhoraram a eficiência da equipe e a qualidade do código."
        ]
      }
    },
    {
      "en": {
        "image": "./assets/images/experiences/ixfactor.png",
        "title": "Front-End Developer",
        "company": "iXfactor Inc. (now Tarvent)",
        "duration": "Jul 2015 - Oct 2022",
        "scope": "Enterprise dashboards · Legacy modernization · Production on-call",
        "description": "Built and modernized enterprise front-end applications for an email marketing and email API company, later rebuilt and rebranded as Tarvent under the same parent company.",
        "achievements": [
          "Enterprise Dashboards: Built 100% of the frontend for the reporting and template management dashboards used by J.P. Morgan Chase, Visa, Mastercard, Citi, Air Canada, and Discover, including installable libraries clients could optionally adopt.",
          "Production Ownership: On call for production systems throughout; supported the Azure cloud migration and managed Plesk-based hosting and production environments.",
          "Legacy Modernization: Built and maintained ASP.NET pages on a multi-tenant email marketing platform serving hundreds of customers, and integrated Angular modules into the legacy app to modernize the user experience.",
          "Advanced UIs: Built a drag-and-drop email builder and campaign reporting dashboards."
        ]
      },
      "pt": {
        "image": "./assets/images/experiences/ixfactor.png",
        "title": "Desenvolvedor Front-End",
        "company": "iXfactor Inc. (atual Tarvent)",
        "duration": "Jul 2015 - Out 2022",
        "scope": "Dashboards corporativos · Modernização de legado · Plantão em produção",
        "description": "Desenvolvi e modernizei aplicações front-end corporativas para uma empresa de marketing por e-mail e API de e-mail, que depois foi reconstruída e renomeada como Tarvent sob a mesma empresa controladora.",
        "achievements": [
          "Dashboards Corporativos: Desenvolvi 100% do front-end dos dashboards de relatórios e gerenciamento de templates usados por J.P. Morgan Chase, Visa, Mastercard, Citi, Air Canada e Discover, incluindo bibliotecas instaláveis que os clientes podiam adotar opcionalmente.",
          "Responsabilidade pela Produção: Fiquei de plantão para os sistemas em produção durante todo o período; dei suporte à migração para a nuvem Azure e gerenciei ambientes de hospedagem e produção baseados em Plesk.",
          "Modernização de Legado: Desenvolvi e mantive páginas ASP.NET em uma plataforma multi-tenant de marketing por e-mail que atendia centenas de clientes e integrei módulos Angular à aplicação legada para modernizar a experiência do usuário.",
          "Interfaces Avançadas: Desenvolvi um construtor de e-mails com arrastar e soltar e dashboards de relatórios de campanhas."
        ]
      }
    }
  ],
  projects: [
    {
      "en": {
        "image": "./assets/images/projects/tarvent-activepieces.png",
        "title": "Activepieces Integration",
        "description": "Open-source Activepieces integration I built end to end in TypeScript, published in the public Activepieces repository. I wrote the triggers and actions against Tarvent's GraphQL API, made the small backend updates it needed, and handled the handoff.",
        "technologies": [
          "Activepieces",
          "TypeScript",
          "GraphQL"
        ],
        "links": [
          {
            "icon": "lni lni-globe-1",
            "url": "https://www.activepieces.com/pieces/tarvent"
          },
          {
            "icon": "lni lni-github",
            "url": "https://github.com/activepieces/activepieces/tree/main/packages/pieces/community/tarvent"
          }
        ]
      },
      "pt": {
        "image": "./assets/images/projects/tarvent-activepieces.png",
        "title": "Integração Activepieces",
        "description": "Integração open-source com o Activepieces que desenvolvi de ponta a ponta em TypeScript, publicada no repositório público do Activepieces. Escrevi os triggers e actions sobre a API GraphQL da Tarvent, fiz as pequenas atualizações necessárias no back-end e conduzi a entrega.",
        "technologies": [
          "Activepieces",
          "TypeScript",
          "GraphQL"
        ],
        "links": [
          {
            "icon": "lni lni-globe-1",
            "url": "https://www.activepieces.com/pieces/tarvent"
          },
          {
            "icon": "lni lni-github",
            "url": "https://github.com/activepieces/activepieces/tree/main/packages/pieces/community/tarvent"
          }
        ]
      }
    },
    {
      "en": {
        "image": "./assets/images/projects/tarvent-zapier.png",
        "title": "Zapier Integration",
        "description": "Zapier integration I built end to end in JavaScript so users can connect Tarvent to the apps in Zapier's ecosystem. I designed the triggers and actions against Tarvent's GraphQL API, made small backend updates, and handled the handoff.",
        "technologies": [
          "Zapier",
          "JavaScript",
          "GraphQL"
        ],
        "links": [
          {
            "icon": "lni lni-globe-1",
            "url": "https://zapier.com/apps/tarvent/integrations"
          }
        ]
      },
      "pt": {
        "image": "./assets/images/projects/tarvent-zapier.png",
        "title": "Integração Zapier",
        "description": "Integração com o Zapier que desenvolvi de ponta a ponta em JavaScript para que os usuários conectem a Tarvent aos apps do ecossistema Zapier. Projetei os triggers e actions sobre a API GraphQL da Tarvent, fiz pequenas atualizações no back-end e conduzi a entrega.",
        "technologies": [
          "Zapier",
          "JavaScript",
          "GraphQL"
        ],
        "links": [
          {
            "icon": "lni lni-globe-1",
            "url": "https://zapier.com/apps/tarvent/integrations"
          }
        ]
      }
    },
    {
      "en": {
        "image": "./assets/images/projects/tarvent-app.png",
        "title": "Tarvent",
        "description": "Email marketing, marketing automation, and email API SaaS platform. I led its Angular/TypeScript frontend from prototype to 500+ clients, including Fortune 500 companies, helped architect its GraphQL schema, and was on call for production.",
        "technologies": [
          "Angular",
          "TypeScript",
          "GraphQL",
          "RxJS",
          "Syncfusion Angular Components",
          "SCSS",
          "i18n"
        ],
        "links": [
          {
            "icon": "lni lni-globe-1",
            "url": "https://tarvent.com"
          }
        ]
      },
      "pt": {
        "image": "./assets/images/projects/tarvent-app.png",
        "title": "Tarvent",
        "description": "Plataforma SaaS de marketing por e-mail, automação de marketing e API de e-mail. Liderei o front-end em Angular/TypeScript do protótipo a mais de 500 clientes, incluindo empresas Fortune 500, ajudei a arquitetar o schema GraphQL e fiquei de plantão para a produção.",
        "technologies": [
          "Angular",
          "TypeScript",
          "GraphQL",
          "RxJS",
          "Syncfusion Angular Components",
          "SCSS",
          "i18n"
        ],
        "links": [
          {
            "icon": "lni lni-globe-1",
            "url": "https://tarvent.com"
          }
        ]
      }
    },
    {
      "en": {
        "image": "./assets/images/projects/tarvent-mobile-app.png",
        "title": "Tarvent Mobile App",
        "description": "Cross-platform mobile app for Tarvent reporting and contact management, built with .NET MAUI and Blazor on the same GraphQL API as the web app.",
        "technologies": [
          ".NET MAUI",
          "Blazor",
          "C#",
          "Syncfusion Blazor Components",
          "GraphQL"
        ],
        "links": [
          {
            "icon": "lni lni-globe-1",
            "url": "https://play.google.com/store/apps/details?id=com.tarventinc.tarvent"
          }
        ]
      },
      "pt": {
        "image": "./assets/images/projects/tarvent-mobile-app.png",
        "title": "App Móvel Tarvent",
        "description": "Aplicativo móvel multiplataforma para relatórios e gerenciamento de contatos da Tarvent, desenvolvido com .NET MAUI e Blazor sobre a mesma API GraphQL da aplicação web.",
        "technologies": [
          ".NET MAUI",
          "Blazor",
          "C#",
          "Syncfusion Blazor Components",
          "GraphQL"
        ],
        "links": [
          {
            "icon": "lni lni-globe-1",
            "url": "https://play.google.com/store/apps/details?id=com.tarventinc.tarvent"
          }
        ]
      }
    },
    {
      "en": {
        "image": "./assets/images/projects/dashboard.png",
        "title": "Enterprise Reporting and Template Management Dashboard",
        "description": "Reporting and template management for emails sent through the iXfactor and Tarvent email API, used by J.P. Morgan Chase, Visa, Mastercard, Citi, Air Canada, and Discover. I built 100% of the frontend, including installable libraries clients could optionally adopt.",
        "technologies": [
          "Angular",
          "TypeScript",
          "Angular Material",
          "REST APIs"
        ],
        "links": []
      },
      "pt": {
        "image": "./assets/images/projects/dashboard.png",
        "title": "Dashboard de Relatórios e Gerenciamento de Templates",
        "description": "Relatórios e gerenciamento de templates para e-mails enviados pela API de e-mail da iXfactor e da Tarvent, usados por J.P. Morgan Chase, Visa, Mastercard, Citi, Air Canada e Discover. Desenvolvi 100% do front-end, incluindo bibliotecas instaláveis que os clientes podiam adotar opcionalmente.",
        "technologies": [
          "Angular",
          "TypeScript",
          "Angular Material",
          "REST APIs"
        ],
        "links": []
      }
    },
    {
      "en": {
        "image": "./assets/images/projects/email-editor.png",
        "title": "Drag-and-drop Email Builder",
        "description": "Drag-and-drop interface for building marketing and transactional emails, with Handlebars templating for personalized content.",
        "technologies": [
          "Angular",
          "TypeScript",
          "Angular Material",
          "handlebars.js"
        ],
        "links": []
      },
      "pt": {
        "image": "./assets/images/projects/email-editor.png",
        "title": "Construtor de E-mails Drag-and-drop",
        "description": "Interface de arrastar e soltar para criar e-mails de marketing e transacionais, com templates Handlebars para conteúdo personalizado.",
        "technologies": [
          "Angular",
          "TypeScript",
          "Angular Material",
          "handlebars.js"
        ],
        "links": []
      }
    },
    {
      "en": {
        "image": "./assets/images/projects/email-report.png",
        "title": "Report for Email Marketing Campaign Performance",
        "description": "Campaign performance reporting for email marketing, built in AngularJS and integrated into an existing ASP.NET application.",
        "technologies": [
          "Angular.JS",
          "JavaScript",
          "Angular Material",
          "highcharts.js"
        ],
        "links": []
      },
      "pt": {
        "image": "./assets/images/projects/email-report.png",
        "title": "Relatório de Desempenho de Campanhas de E-mail",
        "description": "Relatórios de desempenho de campanhas de e-mail marketing, desenvolvidos em AngularJS e integrados a uma aplicação ASP.NET existente.",
        "technologies": [
          "Angular.JS",
          "JavaScript",
          "Angular Material",
          "highcharts.js"
        ],
        "links": []
      }
    }
  ],
  architectures: [
    {
      "id": "integrations",
      "en": {
        "title": "Integrations, end to end",
        "caption": "Zapier and Activepieces integrations for Tarvent. I wrote all of the integration code, helped design the GraphQL API it calls, and made the backend updates it needed."
      },
      "pt": {
        "title": "Integrações de ponta a ponta",
        "caption": "Integrações da Tarvent com Zapier e Activepieces. Escrevi todo o código das integrações, ajudei a projetar a API GraphQL que elas consomem e fiz as atualizações necessárias no back-end."
      },
      "stages": [
        [
          {
            "role": "external",
            "en": {
              "label": "Zapier / Activepieces",
              "detail": "User automations"
            },
            "pt": {
              "label": "Zapier / Activepieces",
              "detail": "Automações dos usuários"
            }
          }
        ],
        [
          {
            "role": "built",
            "en": {
              "label": "Tarvent integration",
              "detail": "Triggers, actions, auth"
            },
            "pt": {
              "label": "Integração Tarvent",
              "detail": "Triggers, actions, autenticação"
            }
          }
        ],
        [
          {
            "role": "contributed",
            "en": {
              "label": "Tarvent GraphQL API",
              "detail": "Queries and mutations"
            },
            "pt": {
              "label": "API GraphQL da Tarvent",
              "detail": "Queries e mutations"
            }
          }
        ],
        [
          {
            "role": "contributed",
            "en": {
              "label": "Backend services",
              "detail": "Updates for the integrations"
            },
            "pt": {
              "label": "Serviços de back-end",
              "detail": "Atualizações para as integrações"
            }
          }
        ]
      ]
    },
    {
      "id": "platform",
      "en": {
        "title": "Tarvent platform",
        "caption": "One GraphQL API behind every client. I built the web app, the mobile app, and the integrations, helped design the schema, and was on call for production."
      },
      "pt": {
        "title": "Plataforma Tarvent",
        "caption": "Uma única API GraphQL atrás de todos os clientes. Desenvolvi a aplicação web, o app móvel e as integrações, ajudei a projetar o schema e fiquei de plantão para a produção."
      },
      "stages": [
        [
          {
            "role": "built",
            "en": {
              "label": "Angular web app",
              "detail": "500+ clients"
            },
            "pt": {
              "label": "App web Angular",
              "detail": "Mais de 500 clientes"
            }
          },
          {
            "role": "built",
            "en": {
              "label": ".NET MAUI app",
              "detail": "Mobile reporting"
            },
            "pt": {
              "label": "App .NET MAUI",
              "detail": "Relatórios no celular"
            }
          },
          {
            "role": "built",
            "en": {
              "label": "Integrations",
              "detail": "Zapier, Activepieces"
            },
            "pt": {
              "label": "Integrações",
              "detail": "Zapier, Activepieces"
            }
          }
        ],
        [
          {
            "role": "contributed",
            "en": {
              "label": "GraphQL API",
              "detail": "Schema co-designed"
            },
            "pt": {
              "label": "API GraphQL",
              "detail": "Schema projetado em conjunto"
            }
          }
        ],
        [
          {
            "role": "contributed",
            "en": {
              "label": "Azure infrastructure",
              "detail": "Load balancers, health checks, DB autoscaling"
            },
            "pt": {
              "label": "Infraestrutura Azure",
              "detail": "Load balancers, health checks, autoescalonamento do banco"
            }
          }
        ],
        [
          {
            "role": "contributed",
            "en": {
              "label": "Monitoring and on-call",
              "detail": "Azure Monitor, Uptime Robot, 99.9% uptime"
            },
            "pt": {
              "label": "Monitoramento e plantão",
              "detail": "Azure Monitor, Uptime Robot, 99,9% de disponibilidade"
            }
          }
        ]
      ]
    }
  ],
  aiCapabilities: [
    {
      "id": "delivery",
      "icon": "lni lni-select-cursor-1"
    },
    {
      "id": "mcp",
      "icon": "lni lni-plug-1"
    },
    {
      "id": "guardrails",
      "icon": "lni lni-shield-2-check"
    },
    {
      "id": "enablement",
      "icon": "lni lni-user-multiple-4"
    }
  ],
  email: 'me@derekjohnson.dev',
  phone: '+17206936987',
  phoneDisplay: '(720) 693-6987',
  location: 'Lone tree, CO',
};
export const getCurrentYear = () => {
  return new Date().getFullYear();
}
