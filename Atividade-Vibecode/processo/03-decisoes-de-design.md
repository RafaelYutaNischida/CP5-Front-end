# 03 — Decisões de Design

Registro das escolhas visuais e estruturais feitas durante o projeto, com justificativas.

---

## Tema: Dark Mode

O fundo escuro foi escolhido por se alinhar diretamente ao universo de academia e performance. Ambientes de treino são, em geral, associados a uma estética de intensidade, galpões industriais, iluminação focada e contraste marcante. O dark mode reforça essa atmosfera sem precisar de grandes recursos gráficos — o próprio fundo já comunica o tom do produto.

Além disso, em interfaces modernas o dark mode favorece o destaque de elementos como botões de call-to-action, ícones e dados, que ganham mais visibilidade sobre fundos escuros.

---

## Cor de destaque: Laranja (#FF5A1F)

O laranja foi escolhido por ser uma cor que carrega associações diretas com energia, movimento e calor — atributos centrais no contexto de atividade física. É uma cor com presença visual forte, que funciona bem como acento sobre fundos escuros sem perder legibilidade.

No contexto de academias e aplicativos de fitness, o laranja é uma escolha frequente e culturalmente consolidada, o que ajuda na identificação imediata do segmento pelo usuário.

---

## Layout: Split Screen

A divisão em duas colunas foi adotada por criar um equilíbrio entre conteúdo textual e impacto visual. A coluna esquerda concentra a hierarquia informacional — título, subtítulo e chamadas para ação — enquanto a coluna direita entrega o elemento emocional da página: a imagem do atleta, os dados de treino e o elemento gráfico circular.

Essa estrutura também facilita a leitura em telas grandes sem sobrecarregar o usuário com informações em um único bloco.

---

## Tipografia: Archivo Black

Escolhida pela personalidade visual de peso e impacto, ideal para títulos que precisam comunicar força. É uma fonte de uso livre (Google Fonts), com excelente legibilidade em tamanhos grandes e boa renderização em telas. O título em caixa alta com Archivo Black reforça a identidade de marca voltada para performance.

---

## Cards flutuantes com dados de treino

A decisão de inserir métricas (calorias, frequência cardíaca, percentual de gordura) como cards sobrepostos ao atleta serve a dois propósitos: transmite credibilidade ao produto, mostrando que a plataforma oferece monitoramento em tempo real; e cria camadas visuais que adicionam profundidade à composição sem poluir o layout.

---

## Animações

As animações foram pensadas para ter função, não apenas decoração:

- **Text-reveal no título** — direciona o olhar para o elemento mais importante da página no momento do carregamento
- **Floating nos cards** — simula um ambiente vivo, como se os dados estivessem sendo atualizados em tempo real
- **Microinterações nos botões** — dão feedback visual imediato ao usuário, indicando que os elementos são interativos
- **Parallax com o mouse** — adiciona profundidade à composição e aumenta o tempo de engajamento do usuário na seção
