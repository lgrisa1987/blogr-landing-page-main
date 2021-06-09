"use strict";
/* var Blogr = function () {
    this.navigation = document.querySelector('.navigation');
    this.navigationMenu = document.querySelector('.navigation__menu');
    this.navigationInner = document.querySelector('.navigation__inner')
    this.navigationItem = document.querySelectorAll('.navigation__item');
} */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Blogr = /*#__PURE__*/function () {
  function Blogr() {
    _classCallCheck(this, Blogr);

    _defineProperty(this, "navigation", this.select('.navigation'));

    _defineProperty(this, "navigationMenu", this.select('.navigation__menu'));

    _defineProperty(this, "navigationInner", this.select('.navigation__inner'));

    _defineProperty(this, "navigationItem", this.selectAll('.navigation__item'));

    _defineProperty(this, "pageAnchorLinks", this.selectAll('a'));

    this.showPage(this);
  }

  _createClass(Blogr, [{
    key: "select",
    value: function select(el) {
      return document.querySelector(el);
    }
  }, {
    key: "selectAll",
    value: function selectAll(el) {
      return [].slice.call(document.querySelectorAll(el));
    }
  }, {
    key: "showPage",
    value: function showPage(el) {
      WebFont.load({
        google: {
          families: ['Overpass']
        },
        active: function active() {
          document.body.classList.add('show');
          el.preventDefaultBehaviour();
          el.toggleMenu();
          el.stickNav();
        }
      });
    }
  }, {
    key: "preventDefaultBehaviour",
    value: function preventDefaultBehaviour() {
      this.pageAnchorLinks.forEach(function (link) {
        return link.addEventListener('click', function (e) {
          return e.preventDefault();
        });
      });
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      var navigationItems = Array.prototype.concat.call(this.navigationMenu, [].slice.call(this.navigationItem)),
          self = this,
          removeStyle = function removeStyle(el, view) {
        if (!el.classList.contains('navigation__inner--active') || view) el.removeAttribute('style');
      };

      navigationItems.forEach(function (el, index) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          if (e.currentTarget === el && e.target.tagName !== "A") el.classList.toggle("".concat(el.classList[0], "--active"));

          if (index === 0) {
            self.navigationInner.classList.toggle('navigation__inner--active');
            self.navigationInner.setAttribute('style', '-webkit-transition: all .4s ease-in-out; transition: all .4s ease-in-out;');
            self.navigationInner.addEventListener('transitionend', function () {
              return removeStyle(el);
            });
          }
        });
      });
      window.addEventListener('resize', function () {
        self.desktopView = window.matchMedia('(min-width: 56.25em)').matches;
        removeStyle(self.navigationInner, self.desktopView);
      });
    }
  }, {
    key: "stickNav",
    value: function stickNav() {
      var _this = this;

      var stickyNav = function () {
        if (window.pageYOffset > 100) _this.navigation.classList.add('navigation--fixed');else _this.navigation.classList.remove('navigation--fixed');
      }.bind(this);

      stickyNav();
      window.addEventListener('scroll', stickyNav);
    }
  }]);

  return Blogr;
}();

var landingPage = new Blogr();

//# sourceMappingURL=script-compiled.js.map