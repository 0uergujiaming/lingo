import { Button } from '@/components/ui/button'
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex-1 w-full mx-auto lg:max-w-[988px] flex flex-col lg:flex-row items-center justify-center p-4 gap-4">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px]">
        <Image src="/hero.svg" alt="Hero" fill />
      </div>
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="text-xl font-bold text-neutral-600 lg:text-3xl text-center max-w-[500px]">Learn,pratice and master new languages with Lingo.</h1>
        <div className="flex flex-col gap-y-2 max-w-[330px]">
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal" forceRedirectUrl="/learn" signInForceRedirectUrl="/learn">
                <Button className="w-full" size="lg" variant="secondary">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal" forceRedirectUrl="/learn" signUpForceRedirectUrl="/learn">
                <Button className="w-full" size="lg" variant="primaryOutline">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="secondary">
                <Link href="/learn">Continue learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  )
}

export default Home
