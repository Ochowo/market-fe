/* eslint-disable react/function-component-definition */

import { TabWrapper, Tab, Body, TabInner } from "./styles/tab.styles";
import { TabsProps } from "./type";

const Tabs = ({
  direction,
  showBtn,
  searchTerm,
  handleSearch,
  hideFilter,
  children,
  ...restProps
}: TabsProps) => {
  return (
    <TabWrapper {...restProps} showBorder={!hideFilter}>
      <TabInner>{children}</TabInner>
    </TabWrapper>
  );
};

export default Tabs;

Tabs.Tab = function TabsTab({ children, ...restProps }: TabsProps) {
  return <Tab {...restProps}>{children}</Tab>;
};
Tabs.Body = function TabsTab({ children, ...restProps }: TabsProps) {
  return <Body {...restProps}>{children}</Body>;
};
