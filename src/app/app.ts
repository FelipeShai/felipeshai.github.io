import { Component } from '@angular/core';
import { TimelineComponent } from './shared/ui/timeline/timeline.component';

interface ContactLink {
  label: string;
  href: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

interface Education {
  institution: string;
  title: string;
  period: string;
}

@Component({
  selector: 'app-root',
  imports: [TimelineComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly profile = {
    name: 'Felipe Shai',
    role: 'Engenheiro de Software',
    location: 'Salvador, BA',
    intro:
      'Com experiência em e-commerce, pagamentos, crédito e logística, atuando em times multidisciplinares de backend e qualidade em projetos de grande escala, nacionais e internacionais.',
    highlights: [
      'Conectores de pagamento em ambiente PCI DSS',
      'Migração de dados em larga escala com multithreading',
      'Qualidade como prática transversal, do refinamento ao deploy',
    ],
  };

  protected readonly contactLinks: ContactLink[] = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/felipeshai/' },
    { label: 'GitHub', href: 'https://github.com/FelipeShai' },
    { label: 'Blog', href: 'https://github.com/FelipeShai' },
  ];

  protected readonly hardSkills: string[] = [
    'Java',
    'Spring Boot',
    'Kafka',
    'AWS',
    'Docker',
    'CI/CD',
    'Clean Architecture',
    'Testes (Unit, Integration, Mutation)',
  ];

  protected readonly experience: Experience[] = [
    {
      company: 'PagBank',
      role: 'Engenheiro de Software',
      period: 'Mar 2024 - Fev 2026',
      location: 'Remoto',
      summary:
        'Desenvolvimento e sustentação de conectores de pagamento para as principais plataformas de e-commerce do mercado — VTEX, Shopify, Nuvemshop, Wake e Wix — em ambiente de alta demanda transacional e padrão PCI DSS.',
      highlights: [
        'Atuação ponta a ponta: do refinamento técnico à documentação e apresentação em ritos ágeis',
        'Backend com Java 11/17/21, Spring Boot, Clean Architecture e mensageria assíncrona com Kafka',
        'Infraestrutura AWS (ECS, ECR, DynamoDB, Secrets Manager) e pipelines CI/CD via Jenkins',
        'Cultura rigorosa de testes: unitários, integração, mutação e API',
        'Desenvolvimento de novas features com foco em valor de produto e experiencia do cliente',
        'Melhoria de latencia em fluxos criticos de pagamento',
        'Evolucao de padrões de observabilidade e resiliencia',
      ],
    },
    {
      company: 'dti digital',
      role: 'Desenvolvedor Backend Java',
      period: 'Ago 2023 – Fev 2024',
      location: 'Remoto',
      summary:
        'Desenvolvimento de APIs REST para projeto internacional da Sherwin-Williams, com destaque para uma migração de dados crítica envolvendo mais de 1 milhão de usuários.',
      highlights: [
        'Migração de dados em larga escala com estratégia multithreading',
        'Java 17, Spring Boot, MapStruct, Lombok e integração com AWS S3 e Cloudinary',
        'Testes unitários com JUnit, versionamento com Git Flow e documentação no Confluence',
      ],
    },
    {
      company: 'dti digital',
      role: 'Desenvolvedor Backend .NET',
      period: 'Fev 2023 – Ago 2023',
      location: 'Remoto',
      summary:
        'Desenvolvimento de novas funcionalidades e manutenção de sistemas logísticos, com foco em qualidade de código e arquitetura limpa.',
      highlights: [
        'C#, Entity Framework, LINQ e princípios SOLID',
        'Criação de endpoints, migrações e consultas otimizadas',
        'Testes unitários com xUnit e participação ativa em code reviews e cerimônias Scrum',
      ],
    },
    {
      company: 'dti digital',
      role: 'QA',
      period: 'Ago 2022 – Fev 2023',
      location: 'Remoto',
      summary:
        'Garantia de qualidade em aplicativo mobile internacional (Android), cobrindo desde testes exploratórios até acessibilidade e usabilidade.',
      highlights: [
        'Elaboração de cenários em Gherkin e roteiros no TestRail',
        'Testes exploratórios, de usabilidade e acessibilidade em ambiente ágil',
        'Documentação no Confluence e integração com o time de desenvolvimento',
      ],
    },
    {
      company: 'BomConsorcio',
      role: 'Analista de Testes',
      period: 'Mar 2022 - Ago 2022',
      location: 'Salvador - BA (Híbrido)',
      summary:
        'Primeira experiência profissional na área, com atuação em qualidade de fluxos corporativos e marketplace.',
      highlights: [
        'Testes exploratórios, de aceitação, API e usabilidade',
        'Gestão de casos de teste no Jira (Xray/QAlity)',
        'Refinamento de histórias e participação nas cerimônias ágeis',
      ],
    },
  ];

  protected readonly education: Education[] = [
    {
      institution: 'FIAP',
      title: 'Pós-graduação em Arquitetura e Desenvolvimento Java',
      period: '2024 - 2025',
    },
    {
      institution: 'FIAP',
      title: 'Análise e Desenvolvimento de Sistemas',
      period: '2022 - 2024',
    },
  ];
}
