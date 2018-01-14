import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {fade} from 'material-ui/utils/colorManipulator';

import {IStyles} from "./typings/index";


const styles = require('./style.scss');
const className = styles.layoutBreadcrumbsItem;
const activeClassName = styles.active;

const getStyle = function (props: IProps, context: IContext): React.CSSProperties {
  if (props.transparentBackground) {
    if (props.active) {
      return {
        color: context.muiTheme.palette.textColor,
        ...(props.activeStyle ? props.activeStyle: {}),
      };
    }
    return {
      color: fade(context.muiTheme.palette.textColor, 0.7),
      ...(props.style ? props.style: {}),
    };
  }
  if (props.active) {
    return {
      color: context.muiTheme.appBar.textColor,
      ...(props.activeStyle ? props.activeStyle: {}),
    };
  }
  return {
    color: fade(context.muiTheme.appBar.textColor, 0.7),
    ...(props.style ? props.style: {}),
  };
};

interface IProps extends IStyles {
  activeClassName?: string;
  activeStyle?: {};
  active?: boolean;
  transparentBackground?: boolean;
  index: number;
  label: string;
  uri: string;
}

interface IContext {
  muiTheme?: any;
}

export class BreadcrumbsItem extends React.PureComponent<IProps, any> {
  public displayName: string = 'BreadcrumbsItem';
  public context: IContext;
  public static contextTypes = {
    muiTheme: PropTypes.object,
  };

  public componentDidMount() {
    console.info('componentDidMount', this.props);
  }

  public render() {
    const style = getStyle(this.props, this.context);
    if (this.props.active) {
      return (
        <span
          className={
            (this.props.activeClassName ? this.props.activeClassName + ' ' : '') + className + ' ' + activeClassName
          }
          style={style}
        >
          {this.props.label}
        </span>
      );
    }
    return (
      <Link
        className={(this.props.className ? this.props.className + ' ' : '') + className}
        to={this.props.uri}
        title={this.props.label}
        style={style}
        >
      {this.props.label}
      </Link>
    );
  }
}
