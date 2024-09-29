import { Button } from '@/components/ui/button'
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import Image from 'next/image'

export const Header = () => {
  return (
    <div className="h-[70px] border-b-2 px-4">
      <div className="h-full lg:max-w-screen-lg mx-auto flex items-center justify-between">
        <div className='flex items-center gap-2'>
          <Image src="/mascot.svg" alt="mascot" width={40} height={40} />
          <h1 className='text-2xl font-extrabold text-green-500 tracking-wide'>Lingo</h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignInButton mode="modal" forceRedirectUrl="/learn" signUpForceRedirectUrl="/learn">
              <Button size="lg" variant="ghost">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  )
}
