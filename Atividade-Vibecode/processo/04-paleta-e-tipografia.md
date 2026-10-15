# 04 — Paleta de Cores e Tipografia

---

## Paleta de Cores

### Cores principais

| Nome        | Hexadecimal | Uso                                                                 |
|-------------|-------------|---------------------------------------------------------------------|
| Grafite     | `#17181B`   | Cor de fundo principal. Base do dark mode.                         |
| Carvão      | `#141416`   | Variação escura do fundo, usada no gradiente central.              |
| Queimado    | `#1B1511`   | Tom de fundo quente, canto inferior do gradiente.                  |
| Brasa       | `#3A1A0C`   | Marrom-laranja profundo no canto inferior direito do gradiente.    |
| Ember       | `#FF5A1F`   | Laranja principal. Botão primário, barras do gráfico, acentos.     |
| Âmbar       | `#FF8A3D`   | Laranja mais claro. Usado no gradiente interno do círculo gráfico. |
| Cobre       | `#C2330A`   | Laranja escuro. Usado na base do gradiente do círculo gráfico.     |
| Pêssego     | `#FFB27A`   | Tom suave. Pincelada abstrata ao fundo.                            |

---

### Cores de texto e interface

| Nome              | Valor                      | Uso                                             |
|-------------------|----------------------------|-------------------------------------------------|
| Branco puro       | `#FFFFFF`                  | Texto principal sobre fundo escuro.            |
| Branco 80%        | `rgba(255,255,255,0.80)`   | Texto do botão secundário e nav.               |
| Branco 60%        | `rgba(255,255,255,0.60)`   | Parágrafo de apoio.                            |
| Glass card        | `rgba(255,255,255,0.82)`   | Fundo dos cards flutuantes (glassmorphism).    |
| Preto 50%         | `rgba(0,0,0,0.50)`         | Labels secundários dentro dos cards.           |
| Vermelho card     | `rgb(239,68,68) / 15%`     | Fundo do ícone de frequência cardíaca.         |

---

### Visualização da paleta principal

```
  ■ #17181B   Grafite       — fundo base
  ■ #3A1A0C   Queimado      — gradiente canto
  ■ #FF5A1F   Ember         — laranja principal
  ■ #FF8A3D   Âmbar         — laranja claro
  ■ #C2330A   Cobre         — laranja escuro
  □ #FFFFFF   Branco        — texto e cards
```

---

## Tipografia

### Famílias utilizadas

| Família       | Papel             | Peso          | Origem       |
|---------------|-------------------|---------------|--------------|
| Archivo Black | Títulos / Display | 900           | Google Fonts |
| Inter         | Corpo / UI        | 400, 500, 600 | Google Fonts |

---

### Escala tipográfica aplicada

| Elemento              | Família       | Tamanho (aprox.)                | Observação                        |
|-----------------------|---------------|---------------------------------|-----------------------------------|
| Título principal (H1) | Archivo Black | `clamp(2.75rem, 8.2vw, 6.6rem)` | Responsivo com caixa alta         |
| Logotipo (nav)        | Archivo Black | `1.25rem`                       | Tracking reduzido                 |
| Parágrafo de apoio    | Inter 400     | `1rem – 1.125rem`               | Cor branca a 60% de opacidade     |
| Labels dos cards      | Inter 500     | `0.75rem`                       | Cor preta a 50% de opacidade      |
| Valores dos cards     | Inter 600     | `1.125rem – 1.25rem`            | Cor preta sólida                  |
| Botão primário        | Inter 600     | `0.875rem`                      | Texto branco sobre laranja        |
| Botão secundário      | Inter 500     | `0.875rem`                      | Texto branco a 85% de opacidade   |
