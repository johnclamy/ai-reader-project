import { ReactNode } from "react"


type ParagraphProps = {
    children: ReactNode
}


const Paragraph = ({ children }: ParagraphProps) => (
    <p className="my-2 mx-4 text-base leading-relaxed font-normal text-gray-700">
        {children}
    </p>
)


export default Paragraph
