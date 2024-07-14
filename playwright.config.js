import { devices } from '@playwright/test.mjs'

const config = {
    testDir: './lib/vector2/',
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' }
        },
        {
            name: 'firefox',
            use: { browserName: 'firefox' }
        },
        {
            name: 'webKit',
            use: { browserName: 'webkit' }
        },
        {
            name: 'mobile-chromium',

            use: devices['Pixel 5']
        },
        {
            name: 'mobile-webkit',
            use: devices['iPhone 13']
        }
    ]
}

export default config