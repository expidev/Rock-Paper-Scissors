import { createContext } from "react";
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa'
import { HandOption, IOptions, IOptionContext, Props } from "./OptionContextType"

const options: IOptions[] = [
    { name: HandOption.rock, icon: <FaRegHandRock size={60} /> },
    { name: HandOption.paper, icon: <FaRegHandPaper size={60} /> },
    { name: HandOption.scissors, icon: <FaRegHandScissors size={60} /> },
  ];

const OptionsContext = createContext<IOptionContext>({
    options: [],
})

export function OptionsProvider(props: Props) {
    const contextValue = {
        options
    }

    return <OptionsContext.Provider value={contextValue}>{props.children}</OptionsContext.Provider>
}