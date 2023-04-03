import { IconContainer, Superscript } from "./style";

const IconWithSuperscript = ({
  icon,
  superscript,
  right,
  top,
  smright,
  smtop,
}: {
  icon: React.ReactNode;
  superscript: string;
  top?: string;
  right?: string;
  smright?: string;
  smtop?: string;
}) => {
  return (
    <IconContainer>
      {icon}
      <Superscript right={right} top={top} smright={smright} smtop={smtop}>
        {superscript}
      </Superscript>
    </IconContainer>
  );
};
export default IconWithSuperscript;
