import fs from 'fs';
import path from 'path';

const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  let content = fs.readFileSync(path.join(dir, f), 'utf-8');
  
  // Replace weird text colors like `text-white dark:text-bzl-blue` inside originally dark components
  content = content.replace(/bg-bzl-blue dark:bg-\[#0a1e4a\] text-white dark:text-bzl-blue/g, 'bg-bzl-blue dark:bg-[#041a4a] text-white dark:text-white border border-transparent dark:border-[#1a3a7a]');
  
  // Add dark blue to night theme: ensure bg-white becomes dark blue
  content = content.replace(/bg-white/g, 'bg-white dark:bg-[#020E29]');
  // It probably already has `dark:bg-bzl-blue`. 
  // Let's remove duplicate `dark:bg-[#020E29] dark:bg-bzl-blue` if it happens:
  content = content.replace(/bg-white dark:bg-\[#020E29\] dark:bg-bzl-blue/g, 'bg-white dark:bg-bzl-blue');
  content = content.replace(/bg-white dark:bg-bzl-blue dark:bg-\[#020E29\]/g, 'bg-white dark:bg-bzl-blue');
  
  // The issue: the text in dark mode might become dark and invisible. 
  // We need `text-gray-900` to be `dark:text-gray-100`.
  content = content.replace(/text-gray-900(?!\s*dark:text)/g, 'text-gray-900 dark:text-gray-100');
  content = content.replace(/text-gray-800(?!\s*dark:text)/g, 'text-gray-800 dark:text-gray-200');
  content = content.replace(/text-gray-700(?!\s*dark:text)/g, 'text-gray-700 dark:text-gray-300');
  content = content.replace(/text-gray-600(?!\s*dark:text)/g, 'text-gray-600 dark:text-gray-400');
  content = content.replace(/text-gray-500(?!\s*dark:text)/g, 'text-gray-500 dark:text-gray-400');
  content = content.replace(/text-bzl-blue(?!\s*-)(?!\s*dark:text)/g, 'text-bzl-blue dark:text-white');
  
  // Specific bug from the earlier cascading: 
  // `bg-white dark:bg-bzl-blue dark:bg-bzl-gold text-white dark:text-bzl-blue text-white`
  content = content.replace(/bg-white dark:bg-bzl-blue dark:bg-bzl-gold text-white dark:text-bzl-blue/g, 'bg-white dark:bg-bzl-blue text-gray-900 dark:text-white');
  content = content.replace(/bg-white dark:bg-bzl-blue dark:text-white/g, 'bg-white dark:bg-bzl-blue text-gray-900 dark:text-white');

  // Let's just fix up the file by writing it directly.
  fs.writeFileSync(path.join(dir, f), content);
});

console.log("Cleanup script 2 completed!");