export enum HandOption {
    rock = 'rock',
    paper = 'paper',
    scissors = 'scissors'
}


export interface IOptions {
    name: HandOption, 
    icon: JSX.Element
}

export interface IOptionContext {
    options: IOptions[]
}

export interface Props {
    children: React.ReactNode;
}