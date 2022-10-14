import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cwd } from 'process';
const hljs = require('highlight.js');
const { marked } = require('marked');

const renderer = new marked.Renderer();

renderer.link = ( href, title, text ) => {
    return `<a target="_blank" href="${href}" rel="noopener noreferrer" title="${title}">${text}</a>`;
}

marked.setOptions({
    renderer: renderer,
    highlight: (code, lang) => hljs.highlightAuto(code, [lang]).value,
    headerIds: true,
    gfm: true
});


const dir = path.join(cwd(), 'data/projects/posts');

export function getAllProjects() {
    const filenames = fs.readdirSync(dir);

    const allPostsData = filenames.map(filename => {
        const slug = filename.replace(/\.md$/, '');
    
        return getProjectData(slug);
      });

    return allPostsData;
}

export function getProjectData(slug) {
    const fullPath = path.join(dir, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    let { content: rawContent, data } = matter(fileContents);

    data.preview = '';
    const endIndex = rawContent.indexOf('[](preview end)');

    if(endIndex != -1) {
        data.preview = marked.parse(rawContent.slice(0, endIndex));
        rawContent = rawContent.replace('[](preview end)', '');
    }

    data.content = marked(rawContent);

    return data;
}