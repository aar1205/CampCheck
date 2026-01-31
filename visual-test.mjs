import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Collect console messages and errors
  const consoleMessages = [];
  const errors = [];
  
  page.on('console', msg => {
    consoleMessages.push({ type: msg.type(), text: msg.text() });
  });
  
  page.on('pageerror', error => {
    errors.push(error.toString());
  });
  
  try {
    // Navigate to the page
    console.log('Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
    
    // Take full page screenshot
    console.log('Taking screenshot...');
    await page.screenshot({ path: '/home/projekte/claude-code-agents-wizard-v2/camping-blog/screenshot-homepage.png', fullPage: true });
    
    // Get page title
    const title = await page.title();
    console.log('Page title:', title);
    
    // Check for errors
    if (errors.length > 0) {
      console.log('\n❌ PAGE ERRORS DETECTED:');
      errors.forEach(err => console.log('  -', err));
    } else {
      console.log('\n✅ No page errors detected');
    }
    
    // Check console messages for errors
    const consoleErrors = consoleMessages.filter(msg => msg.type === 'error');
    if (consoleErrors.length > 0) {
      console.log('\n❌ CONSOLE ERRORS:');
      consoleErrors.forEach(msg => console.log('  -', msg.text));
    } else {
      console.log('✅ No console errors');
    }
    
    console.log('\n✅ Screenshot saved to: /home/projekte/claude-code-agents-wizard-v2/camping-blog/screenshot-homepage.png');
    
  } catch (error) {
    console.error('\n❌ TEST FAILED:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
