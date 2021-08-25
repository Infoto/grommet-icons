import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const StackOverflow = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="StackOverflow" {...props}>
    <path fill="#FE7A15" fillRule="evenodd" d="M11.414.132a1.406 1.406 0 0 1 1.188 0l10.82 5.055a.421.421 0 0 1-.002.764l-10.905 5.017a1.215 1.215 0 0 1-1.016 0L.595 5.951a.42.42 0 0 1-.002-.764L11.413.132zm12.009 11.526a.42.42 0 0 1-.003.764l-10.904 5.017a1.215 1.215 0 0 1-1.016 0L.595 12.422a.42.42 0 0 1-.002-.764l2.235-1.044a1.216 1.216 0 0 1 1.023-.003l7.649 3.52c.322.148.694.148 1.016 0l7.649-3.52a1.22 1.22 0 0 1 1.023.003l2.235 1.044zm0 6.5a.42.42 0 0 1-.003.764l-10.904 5.017a1.215 1.215 0 0 1-1.016 0L.595 18.922a.42.42 0 0 1-.002-.764l2.235-1.044a1.216 1.216 0 0 1 1.023-.003l7.649 3.52c.322.148.694.148 1.016 0l7.649-3.52a1.22 1.22 0 0 1 1.023.003l2.235 1.044z" />
  </StyledIcon>
));

StackOverflow.displayName = 'StackOverflow';

export { StackOverflow };
