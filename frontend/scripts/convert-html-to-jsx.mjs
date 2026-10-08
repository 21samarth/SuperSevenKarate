import fs from 'node:fs';
import path from 'node:path';

const pages = [
  ['home', 'HomePage'], ['events', 'EventsPage'], ['blackbelt', 'LegacyPage'],
  ['gallery', 'GalleryPage'], ['contact', 'ContactPage'],
];
const root = process.cwd();
const links = { 'index.html': '/', 'events.html': '/events', 'blackbelt.html': '/legacy', 'gallery.html': '/gallery', 'contact.html': '/contact' };

function styleObject(value) {
  const properties = value.split(';').map((part) => part.trim()).filter(Boolean).map((part) => {
    const [property, ...rest] = part.split(':');
    const key = property.trim().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    return `${JSON.stringify(key)}: ${JSON.stringify(rest.join(':').trim())}`;
  });
  return `{${properties.join(', ')}}`;
}

function jsxFromHtml(html) {
  let body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;
  body = body.replace(/\s*<script[\s\S]*?<\/script>/gi, '');
  body = body.replace(/<image\b/gi, '<img');
  body = body.replace(/<!--([\s\S]*?)-->/g, (_, comment) => `{/*${comment.replace(/\*\//g, '* /')}*/}`);
  body = body.replace(/\b(href)=['"](index|events|blackbelt|gallery|contact)\.html['"]/gi, (_, key, name) => key + '="' + links[name + '.html'] + '"');
  body = body.replace(/\b(src|href)=['"]images\//gi, '$1="/');
  body = body.replace(/\bclass=/gi, 'className=').replace(/\bfor=/gi, 'htmlFor=');
  body = body.replace(/\btabindex=/gi, 'tabIndex=').replace(/\bmaxlength=/gi, 'maxLength=');
  body = body.replace(/\breadonly=/gi, 'readOnly=').replace(/\ballowfullscreen\b/gi, 'allowFullScreen');
  body = body.replace(/\bstyle=(['"])([\s\S]*?)\1/gi, (_, __, styles) => `style={${styleObject(styles)}}`);
  body = body.replace(/\s+\/\s+(loading=)/gi, ' $1');
  body = body.replace(/<(img|input|br|hr|meta|link|source|area|base|col|embed|param|track|wbr)(\b[^>]*?)(?<!\/)\s*>/gi, '<$1$2 />');
  return body.trim();
}

fs.mkdirSync(path.join(root, 'src', 'pages'), { recursive: true });

for (const [file, component] of pages) {
  const source = fs.readFileSync(path.join(root, 'src', 'templates', `${file}.html`), 'utf8');
  const jsx = jsxFromHtml(source);
  const output = `// Generated from the original ${file}.html during the React migration.\nexport function ${component}() {\n  return (\n    <>\n${jsx.split('\n').map((line) => `      ${line}`).join('\n')}\n    </>\n  );\n}\n`;
  fs.writeFileSync(path.join(root, 'src', 'pages', `${component}.jsx`), output);
}
