import puppeteer from "puppeteer"
import faker from "faker";
import 'regenerator-runtime/runtime';
const search={
    q:faker.random.word()
};
let browser;
let page;

beforeAll(async ()=>{
    browser=await puppeteer.launch({headless:false});
    page = await browser.newPage();
});

afterAll(async ()=>{

});

describe('Google Search',()=>{
    test('Search random words',async ()=>{
        await page.goto('https://google.com');
        await page.type("input[name=q]",search.q);
    },16000);
});
