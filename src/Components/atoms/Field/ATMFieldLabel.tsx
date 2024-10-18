
type Props = {
  htmlFor?: string
  label: string;
}

const ATMFieldLabel = ({htmlFor= "" ,label}: Props) => {
  return (
    <label htmlFor={htmlFor} className='text-slate-700 font-medium' >{label}</label>
  )
}

export default ATMFieldLabel