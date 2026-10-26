import { ReactNode } from "react"


type ParagraphProps = {
    className?: string
    style?: React.CSSProperties
    id?: string
    children: ReactNode
}


const Paragraph = ({ className, style, id, children }: ParagraphProps) => (
    <p className={className} style={style} id={id}>
        {children}
    </p>
)


export default Paragraph
