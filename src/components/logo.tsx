import Image from 'next/image'

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src="/mascot.svg" alt="mascot" width={40} height={40} />
      <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">Lingo</h1>
    </div>
  )
}
