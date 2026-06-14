# Colher de Pau - Gastronomia e Eventos

Site responsivo e moderno para o espaço de eventos Colher de Pau, com tema rústico em cores verdes e marrom.

## 📋 Características

✅ Design responsivo (funciona em desktop, tablet e mobile)
✅ Galeria de fotos com filtros por tipo de evento
✅ Seções: Início, Sobre, Tipos de Eventos, Galeria e Contato
✅ Tema rústico com cores verde e marrom
✅ Animações suaves e intuitivas
✅ Menu mobile com hamburger
✅ Formulário de contato (integração com serviço externo recomendada)

## 🗂️ Estrutura de Arquivos

```
sitecolherdepau/
├── index.html          # Página principal
├── styles.css          # Estilos e responsividade
├── script.js           # Funcionalidades JavaScript
├── img/                # Pasta com fotos dos eventos
│   ├── casamento-1.jpg até casamento-6.jpg
│   ├── formatura-1.jpg até formatura-3.jpg
│   └── confrateternizacao-1.jpg até confrateternizacao-3.jpg
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### 1. Adicionar/Atualizar Fotos
- Coloque as fotos na pasta `img/`
- Atualize os nomes no arquivo `script.js` na variável `galleryData`

### 2. Editar Informações de Contato
Abra `index.html` e procure pela seção `<!-- Contato Section -->`:
- Atualize o link do WhatsApp (linha ~190)
- Atualize o email (linha ~195)
- Atualize o endereço (linha ~173)

### 3. Hospedar o Site

#### Opção 1: Netlify (Recomendado - Grátis)
1. Vá em https://app.netlify.com
2. Faça login com GitHub
3. Clique em "Add new site" → "Deploy manually"
4. Arraste a pasta `sitecolherdepau` para o site

#### Opção 2: Vercel (Grátis)
1. Vá em https://vercel.com
2. Conecte seu GitHub
3. Crie um novo projeto apontando para o repositório

#### Opção 3: GitHub Pages (Grátis)
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings → Pages
4. Selecione "Deploy from a branch"

#### Opção 4: Seu próprio servidor
- Use FTP ou SSH para fazer upload dos arquivos
- Hospedagem recomendada: Hostinger, Bluehost, SiteGround

## 📱 Responsividade

O site é totalmente responsivo:
- **Desktop**: Layout completo com múltiplas colunas
- **Tablet**: Ajustes de coluna e espaçamento
- **Mobile**: Menu hamburger, layout em coluna única

## 🎨 Cores Utilizadas

```
Verde Principal: #2d5016
Verde Claro: #5a7c4d
Marrom Escuro: #6b4423
Marrom: #8b5a3c
Marrom Claro: #a67c52
Bege Claro: #f5f1e8
```

## 📧 Integração com Email

Para que o formulário de contato funcione de verdade, integre um serviço como:
- **EmailJS** (https://www.emailjs.com)
- **Formspree** (https://formspree.io)
- **Basin** (https://usebasin.com)

Exemplo com EmailJS:
```javascript
// Adicione no final do script.js
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Integrar EmailJS aqui
});
```

## 💡 Personalizações Recomendadas

1. **Adicionar Google Maps**: Integre um mapa mostrando a localização
2. **Vídeos**: Adicione vídeos dos eventos na galeria
3. **Depoimentos**: Crie uma seção com depoimentos de clientes
4. **Blog**: Adicione artigos sobre dicas para eventos
5. **Agenda Online**: Integre um calendário para marcação de visitas

## 🔧 Suporte Técnico

Para qualquer dúvida sobre o site, entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ para Colher de Pau - Gastronomia e Eventos**
