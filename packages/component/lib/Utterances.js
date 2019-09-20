"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _emotion = require("emotion");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        ", "\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(_ref) {
  var repo = _ref.repo,
      _ref$issueTerm = _ref.issueTerm,
      issueTerm = _ref$issueTerm === void 0 ? "pathname" : _ref$issueTerm,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "" : _ref$label,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? "github-light" : _ref$theme,
      _ref$crossorigin = _ref.crossorigin,
      crossorigin = _ref$crossorigin === void 0 ? "anonymous" : _ref$crossorigin,
      _ref$async = _ref.async,
      async = _ref$async === void 0 ? true : _ref$async,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? "" : _ref$style;

  var rootElm = _react["default"].createRef();

  (0, _react.useEffect)(function () {
    var utterances = document.createElement("script"); // set config to of script element

    Object.entries({
      src: "https://utteranc.es/client.js",
      repo: repo,
      "issue-term": issueTerm,
      label: label,
      theme: theme,
      crossorigin: crossorigin,
      async: async
    }).forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1];

      utterances.setAttribute(key, value);
    }); // attach script element

    rootElm.current.appendChild(utterances);
  }, []);
  return _react["default"].createElement("div", {
    id: "utterances_container",
    ref: rootElm,
    className: (0, _emotion.css)(_templateObject(), style)
  });
};

exports["default"] = _default;