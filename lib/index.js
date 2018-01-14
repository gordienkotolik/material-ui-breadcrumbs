"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Paper_1 = require("material-ui/Paper");
var PropTypes = require("prop-types");
var BreadcrumbsItem_1 = require("./BreadcrumbsItem");
var BreadcrumbsSeparator_1 = require("./BreadcrumbsSeparator");
var getStyle = function (props, context) {
    var commonStyle = tslib_1.__assign({ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: context.muiTheme.appBar.height, margin: 0, padding: '0 0.5rem' }, (props.style ? props.style : {}));
    if (props.transparentBackground) {
        return tslib_1.__assign({ maxWidth: '50%', backgroundColor: 'transparent' }, commonStyle);
    }
    return tslib_1.__assign({ width: '100%', backgroundColor: context.muiTheme.appBar.color }, commonStyle);
};
var Breadcrumbs = /** @class */ (function (_super) {
    tslib_1.__extends(Breadcrumbs, _super);
    function Breadcrumbs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displayName = 'Breadcrumbs';
        return _this;
    }
    Breadcrumbs.prototype.renderContent = function () {
        var _this = this;
        return this.props.steps.map(function (step, index) { return [
            (index !== 0 ? (React.createElement(BreadcrumbsSeparator_1.BreadcrumbsSeparator, { key: index + 's', className: _this.props.separatorClassName, style: _this.props.separatorStyle, component: _this.props.separator, transparentBackground: _this.props.transparentBackground })) : null),
            React.createElement(BreadcrumbsItem_1.BreadcrumbsItem, { key: index + 'i', className: _this.props.itemClassName, style: _this.props.itemStyle, active: _this.props.currentStep === step.uri, activeClassName: _this.props.activeItemClassName, activeStyle: _this.props.activeItemStyle, transparentBackground: _this.props.transparentBackground, index: index, label: step.label, uri: step.uri }),
        ]; });
    };
    Breadcrumbs.prototype.render = function () {
        var className = this.props.className ? this.props.className : '';
        var style = getStyle(this.props, this.context);
        if (this.props.customBackground) {
            return React.cloneElement(this.props.customBackground, {
                className: this.props.customBackgroundClassName,
                style: this.props.customBackgroundStyle,
                children: this.renderContent(),
            });
        }
        if (this.props.transparentBackground) {
            return (React.createElement("nav", { className: className, style: style }, this.renderContent()));
        }
        return (React.createElement(Paper_1.default, { className: className, style: style, zDepth: 2, rounded: false }, this.renderContent()));
    };
    Breadcrumbs.defaultProps = {
        currentStep: null,
        steps: [],
    };
    Breadcrumbs.contextTypes = {
        muiTheme: PropTypes.object,
    };
    return Breadcrumbs;
}(React.PureComponent));
exports.Breadcrumbs = Breadcrumbs;
