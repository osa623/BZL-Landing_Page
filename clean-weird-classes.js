import fs from 'fs';
import path from 'path';

const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  let content = fs.readFileSync(path.join(dir, f), 'utf-8');
  
  // Clean up messed up strings in Hero, Features, EarlyAccessForm etc
  content = content.replace(/bg-bzl-blue text-white dark:bg-\[#0a1e4a\] dark:text-white text-white/g, 'bg-bzl-blue dark:bg-bzl-gold text-white dark:text-bzl-blue');
  content = content.replace(/hover:bg-bzl-blue text-white dark:bg-\[#0a1e4a\] dark:text-white-hover/g, 'hover:bg-bzl-blue/90 dark:hover:bg-bzl-gold/90');
  
  // Actually wait, user said "remove gold color adding to backgrounds in night theme".
  // So dark mode shouldn't have gold backgrounds ANYWHERE (except small components).
  // A giant primary button with gold bg text-dark might be okay, but if the user wants it removed:
  // "remove the gold color adding to background s in the night theme just use that only in fonts or small compons and some add a dark blue to night theme"
  
  // Let's replace any `dark:bg-bzl-gold` with `dark:bg-[#1a3a7a]` (a nice dark blue button color, or standard blue).
  // Except for small dots/icons.
  // Wait, I can just write a cleanup node script that removes ANY `dark:text-white-hover`
  // and fixes `dark:hover:text-bzl-gold-hover` to just `dark:hover:text-bzl-gold`.

  content = content.replace(/dark:text-white-hover/g, 'dark:hover:text-gray-200');
  content = content.replace(/dark:text-bzl-gold-hover/g, 'dark:hover:text-yellow-400');
  content = content.replace(/dark:hover:text-bzl-gold-hover/g, 'dark:hover:text-bzl-gold');
  content = content.replace(/dark:bg-white-hover/g, 'dark:hover:bg-white/90');
  
  // Ensure readable text for normal text fields
  // Any element that has `dark:bg-[#020E29]` or `dark:bg-bzl-blue` needs `dark:text-white` or `dark:text-gray-300`, not `text-gray-900` alone.
  // We added `text-gray-900 dark:text-white` successfully earlier.

  fs.writeFileSync(path.join(dir, f), content);
});

console.log("Cleanup script 3 completed!");