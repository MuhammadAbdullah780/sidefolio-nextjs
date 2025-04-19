import { IoPencil } from "react-icons/io5"

type Props = {
    text: string
}

const TextWithEdit:React.FC<Props> = ({ text }) => {
  return (
    <div className="flex flex-1 gap-4 items-start w-full">
        <p className="max-w-[95%]" >{text}</p>
        <button className="w-[25px] h-[25px] rounded-full bg-primary flex items-center justify-center">
          <IoPencil color="white" className="flex-1" size={15} />
        </button>
      </div>
  )
}

export default TextWithEdit