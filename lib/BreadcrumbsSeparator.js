"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var PropTypes = require("prop-types");
var chevron_right_1 = require("material-ui/svg-icons/navigation/chevron-right");
var colorManipulator_1 = require("material-ui/utils/colorManipulator");
var getStyle = function (props, context) {
    var commonStyle = {
        margin: 0,
        padding: 0,
        cursor: 'default',
    };
    if (props.transparentBackground) {
        return tslib_1.__assign({}, context.muiTheme.icon, { color: colorManipulator_1.fade(context.muiTheme.palette.textColor, 0.7) }, commonStyle, (props.style ? props.style : {}));
    }
    return tslib_1.__assign({}, context.muiTheme.icon, { color: colorManipulator_1.fade(context.muiTheme.appBar.textColor, 0.7) }, commonStyle, (props.style ? props.style : {}));
};
var BreadcrumbsSeparator = /** @class */ (function (_super) {
    tslib_1.__extends(BreadcrumbsSeparator, _super);
    function BreadcrumbsSeparator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displayName = 'BreadcrumbsSeparator';
        return _this;
    }
    BreadcrumbsSeparator.prototype.render = function () {
        var className = this.props.className ? this.props.className : '';
        var style = getStyle(this.props, this.context);
        if (this.props.component) {
            return React.cloneElement(this.props.component, {
                className: className,
                style: style,
            });
        }
        return (React.createElement(chevron_right_1.default, { className: className, style: style }));
    };
    BreadcrumbsSeparator.contextTypes = {
        muiTheme: PropTypes.object,
    };
    return BreadcrumbsSeparator;
}(React.PureComponent));
exports.BreadcrumbsSeparator = BreadcrumbsSeparator;
