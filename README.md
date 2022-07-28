# IB.js
IB.js is a 1.52 kB (minified) file based on [ImageBox](https://github.com/tobiasroeder/ImageBox) but way more simple. If you need a more advanced LightBox with keyboard/touch controls, multiple galleries and more, view [ImageBox](https://github.com/tobiasroeder/ImageBox#readme) on GitHub.

## Installation

Add this before the `</head>`:
```html
<script src="https://cdn.jsdelivr.net/gh/tobiasroeder/IB.js@1.0.0/dist/ib.min.js" defer></script>
```

## How To

Add to the `<img>` tag the attribute `data-ib`. It's that easy.

```html
<div class="images">
    <img src="img/img01.png" data-ib>
    <img src="img/img02.png" data-ib>
    <img src="img/img03.png" data-ib>
    <img src="img/img04.png" data-ib>
</div>
```

The IB.js file will automatically execute the `ib.init()` method after window load.

## Options (CSS)

```css
#ib {
    /* change fade duration */
    --ib-fade-duration: 400ms;

    /* change background color */
    background-color: rgba(50, 207, 217, 0.9);

    /* change cursor for indicate closing IB */
    cursor: pointer;
}

/* change cursor for indicate opening IB */
img[data-ib] {
    cursor: pointer;
}
```

## Example

[Try it out](https://codepen.io/tobiasroeder/pen/zYEgWoM)
