/* tslint:disable:member-access */
import * as React from 'react';


declare module 'material-ui-breadcrumbs' {
  export import Breadcrumbs = __components.Breadcrumbs;
  export import BreadcrumbStep = __components.BreadcrumbStep;
  export import BreadcrumbsProps = __components.BreadcrumbsProps;
  export import BreadcrumbsContext = __components.BreadcrumbsContext;
  export default {
    Breadcrumbs, BreadcrumbStep, BreadcrumbsProps, BreadcrumbsContext,
  } as {
    Breadcrumbs, BreadcrumbStep, BreadcrumbsProps, BreadcrumbsContext,
  };
  declare namespace __components {
    export interface BreadcrumbStep {
      label: string;
      uri: string;
    }
    export interface BreadcrumbsProps {
      className?: string;
      style?: {};
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
      steps: BreadcrumbStep[];
    }
    interface BreadcrumbsContext {
      muiTheme?: any;
    }
    export class Breadcrumbs extends React.PureComponent<BreadcrumbsProps, any> {
      public static defaultProps: BreadcrumbsProps;
      public static context: BreadcrumbsContext;
      public static contextTypes: any;
    }
  }
}
