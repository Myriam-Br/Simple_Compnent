"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function DropDown(_ref) {
  var name = _ref.name,
    label = _ref.label,
    id = _ref.id,
    list = _ref.list,
    onChange = _ref.onChange;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id
  }, label), /*#__PURE__*/_react.default.createElement("select", {
    defaultValue: 'DEFAULT',
    name: name,
    id: id,
    onChange: onChange
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "DEFAULT",
    disabled: true
  }, "Select a ", label), list.map(function (option, index) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: index
    }, option.name);
  })));
}
;
var _default = DropDown;
exports.default = _default;