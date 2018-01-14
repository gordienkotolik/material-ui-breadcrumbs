import * as React from 'react';
import * as PropTypes from 'prop-types';
import ChevronRightIcon from 'material-ui/svg-icons/navigation/chevron-right';
import {fade} from 'material-ui/utils/colorManipulator';

import {IStyles} from "./style";


const getStyle = function (props: IProps, context: IContext): React.CSSProperties {
  const commonStyle: React.CSSProperties = {
    margin: 0,
    padding: 0,

    cursor: 'default',
  };
  if (props.transparentBackground) {
    return {
      ...context.muiTheme.icon,
      color: fade(context.muiTheme.palette.textColor, 0.7),

      ...commonStyle,
      ...(props.style ? props.style: {}),
    };
  }
  return {
    ...context.muiTheme.icon,
    color: fade(context.muiTheme.appBar.textColor, 0.7),

    ...commonStyle,
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

  public render() {
    const className = this.props.className ? this.props.className : '';
    const style = getStyle(this.props, this.context);
    if (this.props.component) {
      return React.cloneElement(this.props.component, {
        className,
        style,
      });
    }
    return (
      <ChevronRightIcon
        className={className}
        style={style}
      />
    );
  }
}
