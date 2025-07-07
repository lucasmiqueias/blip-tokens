# GitHub Copilot Instructions para BLiP Design Tokens

## Visão Geral do Projeto

Este é um sistema de design tokens inspirado na linguagem visual da BLiP, implementado como uma biblioteca npm que oferece:

- **Design Tokens**: Sistema de tokens em JSON para cores, espaçamento, tipografia e sombras
- **CSS Custom Properties**: Variáveis CSS geradas automaticamente dos tokens
- **TypeScript Support**: Tipagem completa e utilitários para projetos JS/TS
- **Sistema de Temas**: Suporte a temas claro, escuro e automático
- **Utilitários CSS**: Classes prontas para uso comum

## Estrutura do Projeto

```
/home/lucas/blip-tokens/
├── tokens/           # Tokens JSON fonte
│   ├── colors.json   # Paleta de cores
│   ├── spacing.json  # Escala de espaçamento
│   ├── typography.json # Tokens de tipografia
│   └── shadows.json  # Definições de sombras
├── src/             # Código TypeScript
│   ├── tokens.ts    # Exportação dos tokens
│   ├── theme-manager.ts # Gerenciamento de temas
│   └── css/         # CSS fonte (gerado via build)
├── css/             # CSS final distribuído
├── dist/            # Build final JavaScript
└── scripts/         # Scripts de build
```

## Padrões de Código

### Naming Conventions
- **Tokens JSON**: Use snake_case para propriedades (`primary_500`, `text_primary`)
- **CSS Variables**: Prefixe com `--blip-` (`--blip-color-primary`, `--blip-spacing-md`)
- **TypeScript**: Use camelCase para funções e PascalCase para tipos/interfaces
- **CSS Classes**: Use BEM methodology (`.blip-button`, `.blip-button--primary`)

### Token Structure
- **Cores**: Organizadas em escalas de 50-900 (ex: `blue_500`)
- **Espaçamento**: Sistema baseado em rem (xs, sm, md, lg, xl, 2xl, etc.)
- **Tipografia**: Sizes (xs-4xl) com line-height e font-weight correspondentes
- **Sombras**: Níveis de elevação (sm, md, lg, xl, 2xl)

### Theme Management
- Temas suportados: `light`, `dark`, `auto`
- Use `ThemeManager` class para controle programático
- Hook `useTheme()` para React applications
- CSS custom properties automaticamente atualizadas

## Diretrizes de Desenvolvimento

### Quando adicionar novos tokens:
1. Adicione ao arquivo JSON apropriado em `/tokens/`
2. Execute `npm run build:tokens` para regenerar CSS
3. Atualize tipos TypeScript se necessário
4. Documente no README se for uma mudança breaking

### CSS Generation:
- CSS é gerado automaticamente via `scripts/build-tokens.js`
- Não edite arquivos CSS diretamente - eles são overwritten no build
- Use PostCSS para processamento adicional

### TypeScript:
- Mantenha tipagem estrita habilitada
- Exporte todos os tokens com tipos apropriados
- Use generics para flexibilidade quando apropriado
- Prefira `const assertions` para objetos de tokens

### Testing:
- Teste theme switching em múltiplos browsers
- Valide que CSS variables são aplicadas corretamente
- Teste SSR compatibility para React applications

## Build Process

O projeto usa um processo de build em múltiplas etapas:

1. **build:tokens** - Converte JSON tokens para CSS custom properties
2. **build:css** - Processa CSS com PostCSS (autoprefixer, import resolution)
3. **build:js** - Compila TypeScript e cria bundles UMD/ESM

### Scripts Importantes:
- `npm run dev` - Desenvolvimento com Vite
- `npm run build` - Build completo para produção
- `npm run build:tokens` - Apenas regenera CSS dos tokens
- `npm run lint` - ESLint check
- `npm run type-check` - TypeScript validation

## Exports & Usage Patterns

### Package Exports:
- **Main**: `@lucasmiqueias/blip-tokens` (JS/TS utilities)
- **CSS**: `@lucasmiqueias/blip-tokens/css` (all CSS)
- **Tokens**: `@lucasmiqueias/blip-tokens/tokens` (JSON tokens)

### Common Patterns:
```typescript
// Theme management
import { themeManager, useTheme } from '@lucasmiqueias/blip-tokens';

// Token access
import { tokens, colors, spacing } from '@lucasmiqueias/blip-tokens';

// CSS import
@import '@lucasmiqueias/blip-tokens/css';
```

## Design System Philosophy

Este projeto segue os princípios:

- **Consistência**: Tokens garantem valores consistentes across applications
- **Acessibilidade**: Contrast ratios e sizing seguem WCAG guidelines
- **Escalabilidade**: Sistema baseado em escalas matemáticas
- **Flexibilidade**: Fácil customização e extensão via CSS custom properties
- **Performance**: CSS otimizado e tree-shaking support

## Quando sugerir código:

- Priorize uso de tokens existentes ao invés de valores hardcoded
- Sugira classes utilitárias quando apropriado
- Implemente theme-aware solutions
- Mantenha compatibility com diferentes frameworks
- Considere mobile-first responsive design
- Use semantic naming para custom properties

## Debugging Common Issues:

- **CSS não aplica**: Verifique se theme CSS está importado
- **TypeScript errors**: Execute `npm run type-check` e rebuild
- **Theme não muda**: Verifique se `ThemeManager` está inicializado
- **Build fails**: Limpe dist/ e node_modules, reinstale dependencies
