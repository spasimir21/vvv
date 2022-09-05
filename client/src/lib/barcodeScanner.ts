import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Http } from '@capacitor-community/http';

interface Product {
  barcode: string;
  name: string;
  imageSrc: string;
}

async function scanBarcode() {
  BarcodeScanner.hideBackground();

  const result = await BarcodeScanner.startScan();

  return result.hasContent ? result.content : null;
}

async function getProductNameFromBarcode(barcode: string) {
  const res = await Http.request({
    method: 'GET',
    url: `https://barcode.bg/barcode/BG/%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F-%D0%B7%D0%B0-%D0%B1%D0%B0%D1%80%D0%BA%D0%BE%D0%B4.htm?barcode=${barcode}`
  });

  const html = new DOMParser().parseFromString(res.data, 'text/html');

  const productRow = Array.from(html.documentElement.querySelectorAll('.randomBarcodes tr'))[1];

  if (productRow == null) return null;

  const productName = productRow.querySelectorAll('td')[2].textContent.trim();

  return productName;
}

function checkIfImageCanLoad(src: string) {
  const image = new Image();
  image.src = src;

  return new Promise(resolve => {
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
  });
}

async function getProductImageFromName(productName: string) {
  const res = await Http.request({
    method: 'GET',
    url: `https://www.google.com/search?q=${encodeURIComponent(productName)}&tbm=isch`,
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
      'Cookie': 'CONSENT=YES+'
    }
  });

  const matches = res.data.matchAll(/<script.*?>(.*?)<\/script/g);

  let AF_initDataCallbackScript;
  for (const match of matches) {
    if (match[1].startsWith("AF_initDataCallback({key: 'ds:1")) {
      AF_initDataCallbackScript = match[1];
      break;
    }
  }

  function getData(script) {
    let data;
    const AF_initDataCallback = _data => (data = _data.data);
    eval(script);
    return data;
  }

  const data = getData(AF_initDataCallbackScript);

  for (const image of data[31][0][12][2]) {
    if (image[1] == null) continue;
    const src = image[1][3][0];
    if (await checkIfImageCanLoad(src)) return src;
  }

  return null;
}

async function getProductDetails(barcode: string): Promise<Product> {
  try {
    const productName = await getProductNameFromBarcode(barcode);
    if (productName == null) return null;

    const productImage = await getProductImageFromName(productName);
    if (productImage == null) return null;

    return { barcode, name: productName, imageSrc: productImage };
  } catch (err) {
    return null;
  }
}

export { scanBarcode, getProductDetails, Product };
