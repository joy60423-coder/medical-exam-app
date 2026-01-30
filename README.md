# 醫檢師國考刷題系統 - 安裝使用指南

## 📱 如何將網頁變成 App

### 方法一:直接使用網頁版 (最簡單)

1. **開啟應用**
   - 雙擊 `index.html` 文件,在瀏覽器中打開
   - 或將所有文件上傳到網頁伺服器

2. **開始使用**
   - 選擇登入方式(Google 或 Apple)
   - 開始新增題目或刷題

### 方法二:安裝為 PWA (手機/平板專用)

#### iPhone/iPad 安裝步驟:

1. 使用 Safari 瀏覽器開啟 `index.html`
2. 點擊底部的「分享」按鈕 (方框+箭頭圖示)
3. 向下滾動,選擇「加入主畫面」
4. 設定名稱為「醫檢國考」
5. 點擊「加入」
6. 現在您的主畫面會出現 App 圖示!

#### Android 手機/平板安裝步驟:

1. 使用 Chrome 瀏覽器開啟 `index.html`
2. 點擊右上角的「選單」(三個點)
3. 選擇「加到主畫面」或「安裝應用程式」
4. 設定名稱為「醫檢國考」
5. 點擊「安裝」或「新增」
6. App 圖示會出現在主畫面上!

#### 電腦版 (Chrome/Edge) 安裝步驟:

1. 使用 Chrome 或 Edge 瀏覽器開啟 `index.html`
2. 點擊網址列右側的「安裝」圖示 (電腦+箭頭)
3. 點擊「安裝」確認
4. App 會以獨立視窗開啟,並新增到應用程式列表

### 方法三:使用 GitHub Pages 部署 (線上版)

1. **建立 GitHub 帳號**
   - 前往 https://github.com 註冊

2. **建立新的儲存庫**
   - 點擊右上角「+」→「New repository」
   - 命名為 `medical-exam-app`
   - 設為 Public
   - 點擊「Create repository」

3. **上傳文件**
   - 將所有文件(index.html, manifest.json, sw.js 等)上傳到儲存庫

4. **啟用 GitHub Pages**
   - 進入儲存庫設定 (Settings)
   - 左側選單找到「Pages」
   - Source 選擇「main」分支
   - 點擊「Save」

5. **取得網址**
   - 等待幾分鐘
   - 您的 App 會在 `https://你的用戶名.github.io/medical-exam-app` 上線
   - 用手機/平板開啟此網址,按照方法二安裝為 App!

### 方法四:使用 Vercel 部署 (推薦,最快速)

1. **建立 Vercel 帳號**
   - 前往 https://vercel.com
   - 使用 GitHub 帳號登入

2. **新增專案**
   - 點擊「Add New」→「Project」
   - 選擇「Import Git Repository」
   - 選擇您的 `medical-exam-app` 儲存庫
   - 點擊「Import」

3. **部署設定**
   - Framework Preset: 選擇「Other」
   - Root Directory: 保持預設
   - 點擊「Deploy」

4. **取得網址**
   - 部署完成後會得到一個網址(例如: your-app.vercel.app)
   - 用任何裝置開啟此網址
   - 按照方法二安裝為 App!

## 📋 文件清單

- `index.html` - 主應用程式文件
- `manifest.json` - PWA 設定文件
- `sw.js` - Service Worker (離線功能)
- `create-icons.html` - 圖標生成器
- `README.md` - 本說明文件

## 🎨 生成 App 圖標

1. 開啟 `create-icons.html`
2. 會自動下載兩個圖標文件:
   - `icon-192.png` (192x192 像素)
   - `icon-512.png` (512x512 像素)
3. 將這兩個圖標文件放在與 `index.html` 相同的目錄中

## ✨ 主要功能

### 1. 題目管理
- ✅ 新增題目(單選/多選/圖片/填充)
- ✅ 編輯題目
- ✅ 刪除題目
- ✅ 按科目分類

### 2. 智能刷題
- ✅ 10 大科目分類
- ✅ 艾賓浩斯記憶曲線智能推薦
- ✅ 詳細解析與知識點
- ✅ 答題記錄追蹤

### 3. 統計分析
- ✅ 錯題分布比例
- ✅ 知識點掌握度
- ✅ 題型錯誤統計
- ✅ 艾賓浩斯復習提醒

### 4. 參考值查詢
- ✅ 血液學檢查參考值
- ✅ 生化學檢查參考值
- ✅ 凝血檢查參考值

### 5. 帳號登入
- ✅ Google 帳號登入
- ✅ Apple ID 登入
- ✅ 學習進度雲端保存

## 🎨 設計特色

- **莫蘭迪淺色系配色**:柔和優雅的視覺體驗
- **深色/淺色模式**:護眼深色模式隨時切換
- **標楷體 + Times New Roman**:專業醫學風格字型
- **響應式設計**:完美適配手機/平板/電腦

## 💾 資料儲存

- 使用瀏覽器本地儲存 (localStorage)
- 資料會自動保存在您的裝置上
- 不同帳號的資料分開儲存
- 支援離線使用

## 🔧 技術規格

- **前端框架**: React 18
- **圖標庫**: Lucide Icons
- **PWA 支援**: 可安裝為獨立 App
- **離線功能**: Service Worker 支援
- **跨平台**: iOS / Android / Windows / macOS

## ❓ 常見問題

### Q1: 為什麼看不到我新增的題目?
A: 請確認您已經登入帳號,題目資料會綁定帳號儲存。

### Q2: 可以在多個裝置上使用嗎?
A: 可以!但目前資料儲存在本地,建議使用方法三或四部署到網路上,配合真實的 Google/Apple 登入來同步資料。

### Q3: 圖標顯示不出來怎麼辦?
A: 請確認 icon-192.png 和 icon-512.png 與 index.html 在同一個目錄中。

### Q4: 如何備份我的題目?
A: 瀏覽器開發者工具 → Application → Local Storage → 複製資料。

### Q5: 可以匯入/匯出題目嗎?
A: 目前版本需要手動輸入,未來版本會加入批量匯入功能。

## 📞 技術支援

如有任何問題,歡迎聯繫開發者或提交 Issue!

---

**祝您考試順利! 🎓✨**
