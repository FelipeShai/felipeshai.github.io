import { BlogPost } from '../blog.types';

export const cloneableJavaDeepCopyPost: BlogPost = {
  slug: 'cloneable-java-deep-copy',
  title: 'Cloneable no Java: shallow copy, deep copy e por quê evitar',
  description:
    'Ao clonar um objeto em Java, há duas abordagens: Shallow Copy (cópia rasa) e Deep Copy (cópia profunda).',
  publishedAt: '2026-04-20',
  readingTime: '10 min',
  author: 'Felipe Shai',
  tags: ['Java', 'Cloneable', 'Boas práticas'],
  sections: [
    {
      title: 'Shallow Copy (Cópia Rasa)',
      paragraphs: [
        'Apenas copia as referências dos objetos internos, sem criar novas instâncias.',
        'Problema:',
      ],
      bullets: [
        'Objetos internos continuam compartilhados entre a cópia e o original.',
        'Qualquer modificação pode afetar ambos, resultando em efeitos colaterais inesperados.',
      ],
    },
    {
      title: 'Deep Copy (Cópia Profunda)',
      paragraphs: [
        'Cria novas instâncias para todos os objetos internos, garantindo independência entre cópia e original.',
        'Vantagens:',
      ],
      bullets: [
        'Alterações na cópia não afetam o original.',
        'Evita compartilhamento indesejado de referências.',
      ],
    },
    {
      title: 'Problemas com Cloneable',
      paragraphs: [
        'A interface Cloneable no Java foi mal projetada e é amplamente desencorajada por especialistas como Joshua Bloch e Brian Goetz, além da própria documentação oficial do Java.',
        'Principais problemas de Cloneable:',
      ],
      bullets: [
        '1. Não fornece um método clone(), tornando seu uso inconsistente.',
        '2. super.clone() faz apenas uma cópia rasa (shallow copy), podendo causar efeitos colaterais imprevisíveis.',
        '3. Quebra encapsulamento, pois cria objetos sem chamar o construtor.',
        '4. Objetos internos mutáveis podem ser compartilhados indevidamente, levando a bugs difíceis de rastrear.',
        '5. Melhores alternativas existem, como construtores de cópia e métodos de fábrica.',
      ],
    },
    {
      title: 'O que especialistas dizem sobre Cloneable?',
      paragraphs: [
        'Os especialistas seguem uma linha consistente: evitar Cloneable e preferir alternativas mais seguras.',
      ],
    },
    {
      title: 'Effective Java (Joshua Bloch)',
      paragraphs: [
        'Joshua Bloch recomenda evitar Cloneable e usar construtores de cópia ou métodos de fábrica como alternativa mais segura:',
      ],
      links: [
        {
          label: 'Effective Java (3ª edição, 2018), Item 13 - Override clone judiciously',
          href: 'https://www.oreilly.com/library/view/effective-java-3rd/9780134686097/',
        },
      ],
      quotes: [
        '"The resulting mechanism is fragile, dangerous, and extralinguistic: it creates objects without calling a constructor."',
        '"A better approach to object copying is to provide a copy constructor or copy factory."',
      ],
    },
    {
      title: 'Entrevista de Joshua Bloch para Bill Venners',
      paragraphs: [
        'Bloch reforça que Cloneable não define um método clone() e super.clone() compartilha estado entre objetos clonados, podendo gerar comportamentos imprevisíveis:',
      ],
      links: [
        {
          label: 'Entrevista para Bill Venners',
          href: 'https://www.artima.com/articles/joshua-bloch-on-design#part13',
        },
      ],
      quotes: [
        '"Clone is deeply broken."',
        '"The biggest flaw is that the Cloneable interface does not have a clone method. Making something Cloneable doesn’t say anything about what you can do with it."',
        '"If you just call super.clone() up the chain, you have a shallow copy of the object. The clone generally shares state with the object being cloned. If that state is mutable, you don’t have two independent objects. If you modify one, the other changes as well. And all of a sudden, you get random behavior."',
      ],
    },
    {
      title: 'Documentação Oficial do Java',
      paragraphs: [
        'A própria documentação oficial desencoraja o uso de Cloneable, pois não há garantia de comportamento consistente:',
      ],
      links: [
        {
          label: 'Java 11 API - Cloneable',
          href: 'https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Cloneable.html',
        },
      ],
      quotes: [
        '"By convention, classes that implement Cloneable should override Object.clone() (which is protected) with a public method. [...] If a class does not implement Cloneable, an attempt to call clone() will result in CloneNotSupportedException."',
      ],
    },
    {
      title: 'Brian Goetz - Arquiteto de Linguagem Java na Oracle',
      paragraphs: [
        'Brian Goetz reforça que a abordagem correta é usar um construtor de cópia, pois é mais segura e previsível:',
      ],
      links: [
        {
          label: 'Stack Overflow - Brian Goetz',
          href: 'https://stackoverflow.com/questions/67334593/is-it-okay-to-make-a-record-cloneable',
        },
      ],
      quotes: [
        '"The standard advice for Cloneable is just write a copy constructor instead. That\'s perfectly good advice for records too."',
      ],
    },
  ],
  conclusion: [
    'Cloneable é um mecanismo falho e deve ser evitado.',
    'Os próprios criadores e arquitetos do Java recomendam não usá-lo e preferir abordagens mais seguras como:',
    'Construtores de cópia → Garante uma cópia controlada e previsível.',
    'Métodos de fábrica (copy()) → Melhor prática para testes e produção.',
    'Uso de MapStruct → Automação eficiente para cópias profundas de objetos complexos.',
  ],
  references: [
    {
      label: 'Effective Java (3ª edição, 2018), Item 13 - Override clone judiciously',
      href: 'https://www.oreilly.com/library/view/effective-java-3rd/9780134686097/',
    },
    {
      label: 'Entrevista para Bill Venners',
      href: 'https://www.artima.com/articles/joshua-bloch-on-design#part13',
    },
    {
      label: 'Java 11 API - Cloneable',
      href: 'https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Cloneable.html',
    },
    {
      label: 'Stack Overflow - Brian Goetz',
      href: 'https://stackoverflow.com/questions/67334593/is-it-okay-to-make-a-record-cloneable',
    },
  ],
};
