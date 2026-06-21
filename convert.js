const fs = require('fs');
let html = fs.readFileSync('legacy_html/index.html', 'utf8');

// Extract body
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (!bodyMatch) process.exit(1);
let jsx = bodyMatch[1];

// Remove scripts
jsx = jsx.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

// Rename class and for
jsx = jsx.replace(/\bclass=/g, 'className=');
jsx = jsx.replace(/\bfor=/g, 'htmlFor=');

// Self-close tags
jsx = jsx.replace(/<(img|input|br|hr)([^>]*?)(?<!\/)>/gi, '<$1$2 />');

// Convert inline styles
jsx = jsx.replace(/style=\"([^\"]*)\"/g, (match, p1) => {
    const rules = p1.split(';').filter(Boolean);
    const obj = {};
    rules.forEach(rule => {
        let [key, val] = rule.split(':');
        if (key && val) {
            key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            obj[key] = val.trim();
        }
    });
    return 'style={' + JSON.stringify(obj) + '}';
});

// Some HTML comments to JSX comments
jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

const out = 'import React from "react";\nexport default function Home() {\n  return (\n    <main>\n' + jsx + '\n    </main>\n  );\n}\n';
fs.writeFileSync('src/app/page.tsx', out);
console.log('Done');
