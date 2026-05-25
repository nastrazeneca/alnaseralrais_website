const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('file://' + require('path').resolve('./index.html'));
    await new Promise(r => setTimeout(r, 2000));

    const res = await page.evaluate(() => {
        let p1 = new window.$3Dmol.Vector3(10, 0, 0);
        let p2 = new window.$3Dmol.Vector3(10, 0, 0);
        
        if (window._viewer.rotationGroup && window._viewer.rotationGroup.matrixWorld) {
            p2.applyMatrix4(window._viewer.rotationGroup.matrixWorld);
        } else if (window._viewer.modelGroup && window._viewer.modelGroup.matrixWorld) {
            p2.applyMatrix4(window._viewer.modelGroup.matrixWorld);
        }
        
        window._viewer.projector.projectVector(p1, window._viewer.camera);
        window._viewer.projector.projectVector(p2, window._viewer.camera);
        return {p1: {x: p1.x, y: p1.y}, p2: {x: p2.x, y: p2.y}};
    });
    console.log(JSON.stringify(res, null, 2));
    await browser.close();
})();
