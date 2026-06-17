import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto('http://localhost:3030', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/mls-homepage.png', fullPage: true });
console.log('Homepage: OK');

await page.goto('http://localhost:3030/about', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/mls-about.png', fullPage: true });
console.log('About: OK');

await page.goto('http://localhost:3030/philosophy', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/mls-philosophy.png', fullPage: true });
console.log('Philosophy: OK');

await page.goto('http://localhost:3030/courses', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/mls-courses.png', fullPage: true });
console.log('Courses: OK');

await page.goto('http://localhost:3030/contact', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/mls-contact.png', fullPage: true });
console.log('Contact: OK');

await page.goto('http://localhost:3030/achievements', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/mls-achievements.png', fullPage: true });
console.log('Achievements: OK');

await browser.close();
