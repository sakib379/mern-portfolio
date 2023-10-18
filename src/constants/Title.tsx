type Props ={
    title:string;
    className?: string
}
const Title = ({ title,className }:Props) => {

  return (
    <h2 className="text-2xl font-semibold ">{title}</h2>
  )
}

export default Title