"use strict";

/* var Blogr = function () {
    this.navigation = document.querySelector('.navigation');
    this.navigationMenu = document.querySelector('.navigation__menu');
    this.navigationInner = document.querySelector('.navigation__inner')
    this.navigationItem = document.querySelectorAll('.navigation__item');
} */

const Blogr = class {
    navigation = this.select('.navigation');
    navigationMenu = this.select('.navigation__menu');
    navigationInner = this.select('.navigation__inner')
    navigationItem = this.selectAll('.navigation__item');
    pageAnchorLinks = this.selectAll('a');
    constructor() {
        this.showPage(this);
    }
    select(el) {
        return document.querySelector(el);
    }
    selectAll(el) {
        return [].slice.call(document.querySelectorAll(el));
    }
    showPage(el) {
        WebFont.load({
            google: {
                families: [
                    'Overpass'
                ]
            },
            active() {
                document.body.classList.add('show');
                el.preventDefaultBehaviour();
                el.toggleMenu();
                el.stickNav();
            }
        });
    }
    preventDefaultBehaviour() {
        this.pageAnchorLinks.forEach(link => link.addEventListener('click', e => e.preventDefault()));
    }
    toggleMenu() {
        const navigationItems = Array.prototype.concat.call(this.navigationMenu, [].slice.call(this.navigationItem)),
            self = this,
            removeStyle = (el, view) => {
                if (!el.classList.contains('navigation__inner--active') || view) el.removeAttribute('style');
            }
        navigationItems.forEach((el, index) => {
            el.addEventListener('click', e => {
                e.preventDefault();
                if (e.currentTarget === el && e.target.tagName !== "A") el.classList.toggle(`${el.classList[0]}--active`);
                if (index === 0) {
                    self.navigationInner.classList.toggle('navigation__inner--active');
                    self.navigationInner.setAttribute('style', '-webkit-transition: all .4s ease-in-out; transition: all .4s ease-in-out;');
                    self.navigationInner.addEventListener('transitionend', () => removeStyle(el));
                }
            });
        });
        window.addEventListener('resize', () => {
            self.desktopView = window.matchMedia('(min-width: 56.25em)').matches;
            removeStyle(self.navigationInner, self.desktopView);
        })
    }
    stickNav() {
        const stickyNav = (() => {
            if (window.pageYOffset > 100) this.navigation.classList.add('navigation--fixed');
            else this.navigation.classList.remove('navigation--fixed');
        }).bind(this);
        stickyNav();
        window.addEventListener('scroll', stickyNav);
    }
}
const landingPage = new Blogr();