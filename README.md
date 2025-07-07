# BLiP Design Tokens

Um sistema de design completo com tokens, temas e utilitários para produtos BLiP.

> ⚠️ **Aviso**: Este é um projeto pessoal inspirado no design system da BLiP. Não é oficial e não possui afiliação com a BLiP.

## 🎨 Características

- **Tokens em JSON** - Para integração com ferramentas de design
- **CSS Custom Properties** - Para uso em qualquer framework
- **TypeScript Support** - Tipagem completa para projetos JS/TS
- **Temas Dark/Light** - Com suporte a tema automático baseado no sistema
- **Utilitários CSS** - Classes prontas para uso
- **Extensível** - Fácil customização e extensão

## 📦 Instalação

```bash
npm install @lucasmiqueias/blip-tokens
```

## 🚀 Uso

### CSS Puro

```css
/* Importe todos os tokens e temas */
@import "@lucasmiqueias/blip-tokens/css";

/* Ou importe apenas o que precisar */
@import "@lucasmiqueias/blip-tokens/css/tokens.css";
@import "@lucasmiqueias/blip-tokens/css/themes/light.css";
```

### JavaScript/TypeScript

```javascript
import { ThemeManager, tokens } from "@lucasmiqueias/blip-tokens";

// Gerenciamento de tema
const themeManager = new ThemeManager();
themeManager.setTheme("dark");

// Acesso aos tokens
console.log(tokens.colors.primary);
```

### React

```jsx
import "@lucasmiqueias/blip-tokens/css";
import { useTheme } from "@lucasmiqueias/blip-tokens";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-surface-0 text-content-default">
      <button onClick={() => setTheme("dark")}>Tema Escuro</button>
    </div>
  );
}
```

## 🎯 Tokens Disponíveis

### Cores

- **Surface**: `--surface-0` até `--surface-4`
- **Content**: `--content-default`, `--content-ghost`, `--content-bright`
- **Borders**: `--border-1`, `--border-2`, `--border-3`
- **Status**: `--color-success`, `--color-error`, `--color-warning`

### Tipografia

- **Sizes**: `--font-size-xs` até `--font-size-4xl`
- **Weights**: `--font-weight-normal`, `--font-weight-bold`
- **Families**: `--font-family-sans`, `--font-family-mono`

### Espaçamento

- **Sizes**: `--size-0` até `--size-12`
- **Radius**: `--radius-sm` até `--radius-3xl`

## 🌙 Temas

### Configuração do Tema

```html
<!-- Tema claro -->
<html data-theme="light">
  <!-- Tema escuro -->
  <html data-theme="dark">
    <!-- Tema automático (segue preferência do sistema) -->
    <html data-theme="auto"></html>
  </html>
</html>
```

### Classes Utilitárias

```html
<!-- Backgrounds -->
<div class="bg-primary">Background primário</div>
<div class="bg-surface-1">Background superficie</div>

<!-- Textos -->
<span class="text-content-default">Texto padrão</span>
<span class="text-error">Texto de erro</span>

<!-- Bordas -->
<div class="border-1 border-primary">Com borda</div>
```

## 📂 Estrutura dos Tokens

```json
{
  "colors": {
    "brand": "#0096FA",
    "light": {
      "primary": "#1E6BF1",
      "surface": {
        "0": "#FFFFFF",
        "1": "#F6F6F6"
      }
    },
    "dark": {
      "primary": "#498BFF",
      "surface": {
        "0": "#424242",
        "1": "#393939"
      }
    }
  }
}
```

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build
npm run build

# Lint
npm run lint
```
