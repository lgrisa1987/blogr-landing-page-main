"use strict";

var Blogr = function () {
    this.navigation = document.querySelector('.navigation');
    this.navigationMenu = document.querySelector('.navigation__menu');
    this.navigationInner = document.querySelector('.navigation__inner')
    this.navigationItem = document.querySelectorAll('.navigation__item');
}

Blogr.prototype.showPage = function (el) {
    WebFont.load({
        google: {
            families: [
                'Overpass'
            ]
        },
        active: function () {
            document.body.classList.add('show');
            el.toggleMenu();
            el.stickyNav();
        }
    });
}

Blogr.prototype.toggleMenu = function () {
    var navigationItems = Array.prototype.concat.call(this.navigationMenu, [].slice.call(this.navigationItem)),
        self = this,
        removeStyle = function (el, view) {
            if (!el.classList.contains('navigation__inner--active') || view) el.removeAttribute('style');
        }
    navigationItems.forEach(function (el, index) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            if (e.currentTarget === el && e.target.tagName !== "A") this.classList.toggle(this.classList[0] + "--active");
            if (index === 0) {
                self.navigationInner.classList.toggle('navigation__inner--active');
                self.navigationInner.setAttribute('style', '-webkit-transition: all .4s ease-in-out; transition: all .4s ease-in-out;');
                self.navigationInner.addEventListener('transitionend', function () {
                    removeStyle(this);
                })
            }
        });
    });
    window.addEventListener('resize', function () {
        self.desktopView = window.matchMedia('(min-width: 56.25em)').matches;
        removeStyle(self.navigationInner, self.desktopView);
    })
}

Blogr.prototype.stickyNav = function () {
    var stickyNav = (function () {
        if (window.pageYOffset > 100) this.navigation.classList.add('navigation--fixed');
        else this.navigation.classList.remove('navigation--fixed');
    }).bind(this);
    stickyNav();
    window.addEventListener('scroll', stickyNav);
}

var landingPage = new Blogr();
landingPage.showPage(landingPage);