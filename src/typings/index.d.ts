import * as React from 'react';


declare module 'material-ui-breadcrumbs' {
  export interface Breadcrumbs {
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
    steps: {
      label: string;
      uri: string;
    }[];
  }
}
