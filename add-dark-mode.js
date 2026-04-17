import fs from 'fs';
import path from 'path';

const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  let content = fs.readFileSync(path.join(dir, f), 'utf-8');
  
  if (content.includes('dark:bg-bzl-blue')) return;

  content = content.replace(/bg-white/g, 'bg-white dark:bg-bzl-blue');
  content = content.replace(/bg-gray-50/g, 'bg-gray-50 dark:bg-[#03143a]');
  
  // Specific border
  content = content.replace(/border-gray-100/g, 'border-gray-100 dark:border-[#041a4a]');
  content = content.replace(/border-gray-200/g, 'border-gray-200 dark:border-[#041a4a]');
  content = content.replace(/border-bzl-blue/g, 'border-bzl-blue dark:border-bzl-gold');
  
  // Text colors
  content = content.replace(/text-gray-900/g, 'text-gray-900 dark:text-white');
  content = content.replace(/text-gray-500/g, 'text-gray-500 dark:text-gray-400');
  content = content.replace(/text-gray-600/g, 'text-gray-600 dark:text-gray-300');
  content = content.replace(/text-gray-700/g, 'text-gray-700 dark:text-gray-200');
  content = content.replace(/text-gray-300/g, 'text-gray-300 dark:text-gray-400');
  
  // Primary theming text (since it was formerly gray-900)
  content = content.replace(/text-bzl-blue/g, 'text-bzl-blue dark:text-white');
  content = content.replace(/hover:text-bzl-blue/g, 'hover:text-bzl-blue dark:hover:text-bzl-gold');
  content = content.replace(/text-bzl-blue-hover/g, 'text-bzl-blue-hover dark:text-bzl-gold-hover');
  
  // Gradients
  content = content.replace(/from-white/g, 'from-white dark:from-bzl-blue');
  content = content.replace(/via-gray-50/g, 'via-gray-50 dark:via-[#03143a]');
  content = content.replace(/to-gray-100/g, 'to-gray-100 dark:to-[#041a4a]');
  
  // Specific buttons mapping to bzl-blue/bg-gray-900
  content = content.replace(/bg-gray-900/g, 'bg-gray-900 dark:bg-bzl-gold/10');
  content = content.replace(/bg-bzl-blue/g, 'bg-bzl-blue dark:bg-bzl-gold text-white dark:text-bzl-blue');

  fs.writeFileSync(path.join(dir, f), content);
});
