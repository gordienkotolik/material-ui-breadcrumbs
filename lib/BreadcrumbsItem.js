"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var PropTypes = require("prop-types");
var react_router_dom_1 = require("react-router-dom");
var colorManipulator_1 = require("material-ui/utils/colorManipulator");
var getStyle = function (props, context) {
    var commonStyle = {
        margin: 0,
        padding: '0.5rem',
        cursor: 'pointer',
        fontSize: '1.25rem',
        fontWeight: 600,
        textDecoration: 'none',
    };
    var activeStyle = {
        cursor: 'default',
        textDecoration: 'none',
    };
    if (props.transparentBackground) {
        if (props.active) {
            return tslib_1.__assign({ color: context.muiTheme.palette.textColor }, commonStyle, activeStyle, (props.activeStyle ? props.activeStyle : {}));
        }
        return tslib_1.__assign({ color: colorManipulator_1.fade(context.muiTheme.palette.textColor, 0.7) }, commonStyle, (props.style ? props.style : {}));
    }
    if (props.active) {
        return tslib_1.__assign({ color: context.muiTheme.appBar.textColor }, commonStyle, activeStyle, (props.activeStyle ? props.activeStyle : {}));
    }
    return tslib_1.__assign({ color: colorManipulator_1.fade(context.muiTheme.appBar.textColor, 0.7) }, commonStyle, (props.style ? props.style : {}));
};
var BreadcrumbsItem = /** @class */ (function (_super) {
    tslib_1.__extends(BreadcrumbsItem, _super);
    function BreadcrumbsItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displayName = 'BreadcrumbsItem';
        return _this;
    }
    BreadcrumbsItem.prototype.render = function () {
        var className = this.props.className ? this.props.className : '';
        var style = getStyle(this.props, this.context);
        if (this.props.active) {
            return (React.createElement("span", { className: (this.props.activeClassName ? this.props.activeClassName + ' ' : '') +
                    className, style: style }, this.props.label));
        }
        return (React.createElement(react_router_dom_1.Link, { className: className, to: this.props.uri, title: this.props.label, style: style }, this.props.label));
    };
    BreadcrumbsItem.contextTypes = {
        muiTheme: PropTypes.object,
    };
    return BreadcrumbsItem;
}(React.PureComponent));
exports.BreadcrumbsItem = BreadcrumbsItem;
