interface ButtonProps {
    handleClick : (event:React.MouseEvent<HTMLButtonElement>) => void
}
export const Button = (props:ButtonProps) => { 
    return <button onClick={props.handleClick}>Click</button>
}