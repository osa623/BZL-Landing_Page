import fs from 'fs';
import path from 'path';

const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  let content = fs.readFileSync(path.join(dir, f), 'utf-8');
  
  // Fix the cascading replace error
  // Replace: bg-white dark:bg-bzl-blue dark:bg-bzl-gold text-white dark:text-bzl-blue
  // It should just be: bg-white dark:bg-bzl-blue
  content = content.replace(/bg-white dark:bg-bzl-blue dark:bg-bzl-gold text-white dark:text-bzl-blue/g, 'bg-white dark:bg-bzl-blue');
  content = content.replace(/bg-white dark:bg-bzl-blue dark:bg-bzl-gold text-white dark:text-bzl-blue /g, 'bg-white dark:bg-bzl-blue ');

  // The text color was also affected during this. 'text-white dark:text-bzl-blue' might have been added to other non-white bgs.
  // Original `bg-bzl-blue` became `bg-bzl-blue dark:bg-bzl-gold text-white dark:text-bzl-blue`.
  // The user says "remove the gold color adding to background s in the night theme just use that only in fonts or small compons and some add a dark blue to night theme".
  // So a button with `bg-bzl-blue` should maybe become `bg-bzl-blue dark:bg-white dark:text-bzl-blue` or `bg-bzl-blue dark:bg-[#1a2b53]`. Let's just keep dark matching bg-bzl-blue, changing nothing if it's already a dark element, or making it gold text but not gold bg. OR `bg-bzl-blue dark:bg-blue-600`. The user says "use that only in fonts".
  // How about for bg-bzl-blue => keep bg-bzl-blue or light blue, since it's already dark? If the whole theme is dark blue, `bg-bzl-blue` blends into the background. So in dark mode, a `bg-bzl-blue` card/button should be lighter blue maybe, or have a border. 
  
  // Let's just fix the specific cascaded error first:
  content = content.replace(/bg-bzl-blue dark:text-white dark:bg-bzl-gold text-white dark:text-bzl-blue/g, 'bg-bzl-blue text-white dark:bg-[#0a1e4a] dark:text-white');
  content = content.replace(/bg-bzl-blue dark:bg-bzl-gold text-white dark:text-bzl-blue/g, 'bg-bzl-blue text-white dark:bg-[#0a1e4a] dark:text-white');
  
  // Another casualty: text-bzl-blue dark:text-white dark:text-bzl-gold
  content = content.replace(/text-bzl-blue dark:text-white dark:text-bzl-gold/g, 'text-bzl-blue dark:text-white');
  content = content.replace(/text-bzl-blue dark:text-white-hover/g, 'text-bzl-blue dark:text-white hover:text-bzl-blue-hover');
  
  // Add dark blue to night theme, so make sure cards and backgrounds have borders or subtle differences.
  // The user also mentioned "some fonts are not visible".
  
  // Fix weird text combinations
  content = content.replace(/text-gray-900 dark:text-white dark:text-white/g, 'text-gray-900 dark:text-white');
  
  fs.writeFileSync(path.join(dir, f), content);
});

console.log("Cleanup script completed!");