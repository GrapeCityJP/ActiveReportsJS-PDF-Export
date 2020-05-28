import '@grapecity/activereports/dist/ie-polyfills';
import * as GCAR from '@grapecity/activereports';
import '@grapecity/activereports-localization';
import '@grapecity/activereports/styles/ar-js-viewer.css';

// レポートファイルとフォントファイル読込
import './reports/invoice_green_ipa.rdlx-json';
import './fonts/ipag.ttf';

// フォント記述子の定義
var IPAGothic = {
    name: 'IPAゴシック',
    source: './fonts/ipag.ttf'
};

var arjsviewer = new GCAR.Viewer.Viewer('#arjsviewer',{language:'ja'});

// サイドバーのエクスポート機能を有効化
arjsviewer.availableExports = ['pdf','xlsx','html'];

// 定義済みのフォント記述子を登録する
arjsviewer.registerFont(IPAGothic);
arjsviewer.open('./reports/invoice_green_ipa.rdlx-json');