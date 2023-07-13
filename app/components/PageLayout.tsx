import { ReactNode } from "react";


interface PageLayoutProps {
  children: ReactNode;
}


const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main className="flex justify-center ">
      <div className="max-w-3xl w-full">
        {children}
      </div>
    </main>
  )
}

export default PageLayout;