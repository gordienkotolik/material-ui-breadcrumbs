import * as React from 'react';
import Paper from 'material-ui/Paper';
import * as PropTypes from 'prop-types';

import {IStyles} from "./typings/index";
import {BreadcrumbsItem} from "./BreadcrumbsItem";
import {BreadcrumbsSeparator} from "./BreadcrumbsSeparator";


const styles = require('./style.scss');
const className = styles.layoutBreadcrumbs;

const getStyle = function (props: IProps, context: IContext): React.CSSProperties {
  const commonStyle: React.CSSProperties = {
    height: context.muiTheme.appBar.height,
    margin: '0',
    ...(props.style ? props.style: {}),
  };
  if (props.transparentBackground) {
    return {
      maxWidth: '50%',

      backgroundColor: 'transparent',

      ...commonStyle,
    };
  }
  return {
    width: '100%',

    backgroundColor: context.muiTheme.appBar.color,

    ...commonStyle,
  };
};

export interface IStep {
  label: string;
  uri: string;
}

interface IProps extends IStyles {
  itemClassName?: string;
  itemStyle?: {};
  activeItemClassName?: string;
  activeItemStyle?: {};
  separatorClassName?: string;
  separatorStyle?: {};
  separator?: React.ReactElement<any>;
  transparentBackground?: boolean;
  customBackgroundClassName?: string;
  customBackgroundStyle?: {};
  customBackground?: React.ReactElement<any>;
  currentStep: string;
  steps: IStep[];
}

interface IContext {
  muiTheme?: any;
}

export class Breadcrumbs extends React.PureComponent<IProps, any> {
  public displayName: string = 'Breadcrumbs';
  public context: IContext;
  public static defaultProps: IProps = {
    currentStep: null,
    steps: [],
  };
  public static contextTypes = {
    muiTheme: PropTypes.object,
  };

  public componentDidMount() {
    console.info('componentDidMount', this.props);
  }

  public componentWillReceiveProps(nextProps: IProps) {
    console.info('componentWillReceiveProps', this.props);
    console.info('componentWillReceiveProps', nextProps);
  }

  public renderContent() {
    return this.props.steps.map((step: IStep, index: number) => [
      (index !== 0 ? (
        <BreadcrumbsSeparator
          key={index + 's'}
          className={this.props.separatorClassName}
          style={this.props.separatorStyle}
          component={this.props.separator}
          transparentBackground={this.props.transparentBackground}
        />
      ): null),
      <BreadcrumbsItem
        key={index + 'i'}
        className={this.props.itemClassName}
        style={this.props.itemStyle}
        active={this.props.currentStep === step.uri}
        activeClassName={this.props.activeItemClassName}
        activeStyle={this.props.activeItemStyle}
        transparentBackground={this.props.transparentBackground}
        index={index}
        label={step.label}
        uri={step.uri}
      />,
    ]);
  }

  public render() {
    const style = getStyle(this.props, this.context);
    const combinedClassName = (this.props.className ? this.props.className + ' ' : '') + className;

    if (this.props.customBackground) {
      return React.cloneElement(this.props.customBackground, {
        className: this.props.customBackgroundClassName,
        style: this.props.customBackgroundStyle,
        children: this.renderContent(),
      });
    }

    if (this.props.transparentBackground) {
      return (
        <nav
          className={combinedClassName}
          style={style}
        >
          {this.renderContent()}
        </nav>
      );
    }

    return (
      <Paper
        className={combinedClassName}
        style={style}
        zDepth={2}
        rounded={false}
      >
        {this.renderContent()}
      </Paper>
    );
  }
}
