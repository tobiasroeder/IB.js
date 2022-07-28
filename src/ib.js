/**
 * Based on the ImageBox
 * @link https://github.com/tobiasroeder/imagebox
 * 
 * @name IB.js
 * @author Tobias Roeder
 * @version 1.0.1
 * @license MIT
 * @see https://github.com/tobiasroeder/IB.js
 */

/**
 * global IB object
 */
let ib = {
    /**
     * IB version
     */
    version: '1.0.1',

    /**
     * main IB element
     */
    elmt: null,

    /**
     * image tag in the main IB element
     */
    img: null,

    /**
     * initialize theme, elements and create IB
     */
    init() {
        ib.theme();
        ib.create(function() {
            ib.elmt = document.querySelector('#ib');
            ib.img = ib.elmt.querySelector('img');
            ib.crawler();

            ib.elmt.onclick = ib.hide;
        });
    },

    /**
     * add IB style on top in the head tag
     */
    theme() {
        /**
         * create the theme only if it does not already exist
         */
        if (!document.querySelector('#ib-style')) {
            const style = 'body.ib{overflow:hidden}img[data-ib]{cursor:zoom-in}#ib{--ib-fade-duration:300ms;visibility:hidden;opacity:0;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.8);cursor:zoom-out}#ib.fade-in{visibility:visible;opacity:1;transition:visibility 0s linear 0s,opacity var(--ib-fade-duration)}#ib.fade-out{visibility:hidden;opacity:0;transition:visibility 0s linear var(--ib-fade-duration),opacity var(--ib-fade-duration)}#ib img{display:block;position:fixed;object-fit:contain;max-width:100%;max-height:100%;padding:1rem;top:50%;left:50%;transform:translate(-50%, -50%)}';

            let newStyle = document.createElement('style');
            newStyle.id = 'ib-style';
            newStyle.innerHTML = style;

            // add the style tag right underneath the opening head tag
            document.head.insertBefore(newStyle, document.head.firstChild);
        }
    },

    /**
     * create the main element if it not already exists
     * 
     * @param {function} callback 
     */
    create(callback) {
        if (!document.querySelector('#ib')) {
            let newElmt = document.createElement('div');
            newElmt.id = 'ib';
            // class name is needed else the replace method would not work
            newElmt.className = 'fade-out';
            newElmt.innerHTML = '<img src="" alt="">';

            document.body.appendChild(newElmt);
        }

        if (callback) callback();
    },

    /**
     * finds all images with the data-ib attribute an add the click event
     */
    crawler() {
        let imgs = document.querySelectorAll('img[data-ib]');

        imgs.forEach(img => {
            img.onclick = function(event) {
                ib.img.src = event.target.src;
                ib.show();
            };
        });
    },

    /**
     * css based fade in animation by adding and remove classes
     */
    show() {
        // disable scroll on the whole body
        document.body.classList.add('ib');
        // fade the IB element in
        ib.elmt.classList.replace('fade-out', 'fade-in');
    },

    /**
     * css based fade out animation by adding and remove classes
     */
    hide() {
        // remove disable scroll
        document.body.classList.remove('ib');
        // fade the IB element out
        ib.elmt.classList.replace('fade-in', 'fade-out');
    }
};

/**
 * automatically initialize the IB after window load
 */
window.addEventListener('load', ib.init);