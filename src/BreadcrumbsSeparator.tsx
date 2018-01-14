import * as React from 'react';
import * as PropTypes from 'prop-types';
import ChevronRightIcon from 'material-ui/svg-icons/navigation/chevron-right';
import {fade} from 'material-ui/utils/colorManipulator';

import {IStyles} from "./typings/index";


const styles = require('./style.scss');
const className = styles.layoutBreadcrumbsSeparator;

const getStyle = function (props: IProps, context: IContext): React.CSSProperties {
  if (props.transparentBackground) {
    return {
      ...context.muiTheme.icon,
      color: fade(context.muiTheme.palette.textColor, 0.7),
      ...(props.style ? props.style: {}),
    };
  }
  return {
    ...context.muiTheme.icon,
    color: fade(context.muiTheme.appBar.textColor, 0.7),
    ...(props.style ? props.style: {}),
  };
};

interface IProps extends IStyles {
  component?: React.ReactElement<any>;
  transparentBackground?: boolean;
}

interface IContext {
  muiTheme?: any;
}

export class BreadcrumbsSeparator extends React.PureComponent<IProps, any> {
  public displayName: string = 'BreadcrumbsSeparator';
  public context: IContext;
  public static contextTypes = {
    muiTheme: PropTypes.object,
  };

  public componentDidMount() {
    console.info('componentDidMount', this.props);
  }

  public render() {
    const combinedClassName = (this.props.className ? this.props.className + ' ' : '') + className;
    const style = getStyle(this.props, this.context);
    if (this.props.component) {
      return React.cloneElement(this.props.component, {
        className: combinedClassName,
        style,
      });
    }
    return (
      <ChevronRightIcon
        className={combinedClassName}
        style={style}
      />
    );
  }
}
