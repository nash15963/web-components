# NewButton Web Component

## 概述
`NewButton` 是一個原生 JavaScript 實現的 Web Component，用於創建自定義按鈕元素。這個組件支持自定義文本，並提供基本的樣式定義。

## 功能
- **自定義文本**：可以通過設置 `text` 屬性來改變按鈕上的文本。
- **簡單樣式**：提供了基礎的按鈕樣式，包括背景顏色、邊框樣式和鼠標懸停效果。

## 使用方法

### HTML 結構
要在 HTML 中使用 `NewButton`，您需要先引入對應的 JavaScript 模組檔案，然後就可以像使用普通 HTML 標籤一樣使用 `<new-button>` 標籤。

```html
<body>
    <new-button id="target" text="我是按鈕"></new-button>
    <button onclick="changeText()">Change Text</button>

    <script src="path/to/NewButton.mjs" type="module"></script>
    <script>
        function changeText() {
            const target = document.getElementById('target');
            target.setAttribute('text', '改變後的文本');
        }
    </script>
</body>
