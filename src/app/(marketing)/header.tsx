import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'

export const Header = () => {
  return (
    <header className="h-[70px] border-b-2 px-4">
      <div className="h-full lg:max-w-screen-lg mx-auto flex items-center justify-between">
        <Logo />
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignInButton mode="modal" forceRedirectUrl="/learn" signUpForceRedirectUrl="/learn">
              <Button size="lg" variant="ghost">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ClerkLoaded>
      </div>
    </header>
  )
}
