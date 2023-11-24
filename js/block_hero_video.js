// !(function (e) {
//   var o = {};
//   function n(r) {
//     if (o[r]) return o[r].exports;
//     var t = (o[r] = { i: r, l: !1, exports: {} });
//     return e[r].call(t.exports, t, t.exports, n), (t.l = !0), t.exports;
//   }
//   (n.m = e),
//     (n.c = o),
//     (n.d = function (e, o, r) {
//       n.o(e, o) || Object.defineProperty(e, o, { enumerable: !0, get: r });
//     }),
//     (n.r = function (e) {
//       "undefined" != typeof Symbol &&
//         Symbol.toStringTag &&
//         Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
//         Object.defineProperty(e, "__esModule", { value: !0 });
//     }),
//     (n.t = function (e, o) {
//       if (
//         (1 & o && (e = n(e)),
//         8 & o || (4 & o && "object" == typeof e && e && e.__esModule))
//       )
//         return e;
//       var r = Object.create(null);
//       if (
//         (n.r(r),
//         Object.defineProperty(r, "default", { enumerable: !0, value: e }),
//         2 & o && "string" != typeof e)
//       )
//         for (var t in e)
//           n.d(
//             r,
//             t,
//             function (o) {
//               return e[o];
//             }.bind(null, t)
//           );
//       return r;
//     }),
//     (n.n = function (e) {
//       var o =
//         e && e.__esModule
//           ? function o() {
//               return e.default;
//             }
//           : function o() {
//               return e;
//             };
//       return n.d(o, "a", o), o;
//     }),
//     (n.o = function (e, o) {
//       return Object.prototype.hasOwnProperty.call(e, o);
//     }),
//     (n.p = ""),
//     n((n.s = 10));
// })({
//   "./components/block_hero_video/block_hero_video.js": function (e, o, n) {
//     "use strict";
//     n.r(o),
//       n(/*! jquery */ "jquery"),
//       !(function (e) {
//         function o(e, o, n, r) {
//           e.play();
//         }
//         function n(e, o, n, r) {
//           e.pause();
//         }
//         e(document).ready(function () {
//           e(".block-shared-hero-video-container").each(function () {
//             var o = this;
//             e(o)
//               .find(".play-pause-buttons")
//               .on("click", function () {
//                 var n, r, t, i, a;
//                 (n = o),
//                   (r = !1),
//                   e(n).hasClass("active") && (r = !0),
//                   (t = e(n).find(".video-play")),
//                   (i = e(n).find(".video-pause")),
//                   (a = new Vimeo.Player(
//                     e(n).find(".vimeo-iframe-wrapper iframe")
//                   )),
//                   r
//                     ? (function (e, o, n, r) {
//                         e.pause();
//                       })(a, t, i, n)
//                     : (function (e, o, n, r) {
//                         e.play();
//                       })(a, t, i, n);
//               });
//           }),
//             e(".block-shared-hero-video-container").on(
//               "click",
//               ".play-pause-buttons",
//               function () {
//                 e(this)
//                   .closest(".block-shared-hero-video-container")
//                   .hasClass("active")
//                   ? e(this)
//                       .closest(".block-shared-hero-video-container")
//                       .removeClass("active")
//                   : (e(".block-shared-hero-video-container").removeClass(
//                       "active"
//                     ),
//                     e(this)
//                       .closest(".block-shared-hero-video-container")
//                       .addClass("active"));
//               }
//             );
//         });
//       })(jQuery);
//   },
//   10: function (e, o, n) {
//     e.exports = n(
//       /*! /Users/antoniobragaalmeida/Documents/Websites/2022aristocrat.local/wp-content/themes/aristocrat-wpms/wp-content/themes/aristocrat-2021/components/block_hero_video/block_hero_video.js */ "./components/block_hero_video/block_hero_video.js"
//     );
//   },
//   jquery: function (e, o) {
//     e.exports = jQuery;
//   },
// });
