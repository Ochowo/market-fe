import { TableWrapper } from "./styles/tab.styles";

type TabsProps = {
    onClick?: () => void;
    hideSearch: boolean;
    searchTerm?: string
    handleSearch?: (e?: React.ChangeEvent<HTMLInputElement>) => void
    showBtn: boolean;
} & React.ComponentProps<typeof TableWrapper>