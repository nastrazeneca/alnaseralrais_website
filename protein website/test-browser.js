const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function run() {
    console.log("Starting browser namespace inspection test...");
    const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    
    if (!fs.existsSync(chromePath)) {
        console.error("Google Chrome not found at path: " + chromePath);
        process.exit(1);
    }
    
    let browser;
    try {
        browser = await puppeteer.launch({
            executablePath: chromePath,
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        page.on('console', msg => {
            console.log(`BROWSER_CONSOLE: ${msg.text()}`);
        });
        
        page.on('pageerror', err => {
            console.error(`BROWSER_PAGE_ERROR: ${err.message}`);
        });
        
        await page.goto('http://localhost:8088/molstar.html', { waitUntil: 'load', timeout: 30000 });
        
        // Inspect the global molstar object inside the browser context
        console.log("Evaluating global molstar object keys...");
        const result = await page.evaluate(() => {
            if (typeof molstar === 'undefined') return "molstar is undefined";
            
            const keys = Object.keys(molstar);
            const libKeys = molstar.lib ? Object.keys(molstar.lib) : "molstar.lib is undefined";
            
            // Try to find MolScriptBuilder by searching common locations
            const paths = [
                'molstar.lib?.molScript?.language?.builder?.MolScriptBuilder',
                'molstar.MolScriptBuilder',
                'molstar.lib?.molScript?.language?.MolScriptBuilder',
                'molstar.lib?.molScript?.MolScriptBuilder',
                'molstar.MolScript?.MolScriptBuilder'
            ];
            
            const results = {};
            for (const p of paths) {
                try {
                    results[p] = !!eval(p);
                } catch(e) {
                    results[p] = "Error: " + e.message;
                }
            }
            
            return {
                keys,
                libKeys,
                results,
                viewerKeys: molstar.Viewer ? Object.keys(molstar.Viewer) : "molstar.Viewer is undefined"
            };
        });
        
        console.log("INSPECTION RESULT:", JSON.stringify(result, null, 2));
        
    } catch (err) {
        console.error("Test runner failed:", err);
    } finally {
        if (browser) {
            await browser.close();
        }
        console.log("Browser test finished.");
    }
}

run();
