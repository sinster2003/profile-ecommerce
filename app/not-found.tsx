import Image from "next/image"

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="flex flex-col gap-5 w-[300px] h-[200px] md:w-[700px] md:h-[500px] relative">
        <Image src="/404.jpg" alt="success-page" fill objectFit="cover"/>
      </div>
    </div>
  )
}

export default NotFound