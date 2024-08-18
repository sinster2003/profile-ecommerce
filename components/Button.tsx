
const Button = ({ title, type, length, onClick }: { title: string, type?: string, length?: number, onClick?: () => void }) => {
  return (
    <button className="py-4 mt-2 mb-0 px-8 bg-red-main text-white rounded-full" disabled={type === "checkout" && length === 0} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button