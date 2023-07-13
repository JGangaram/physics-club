import PageLayout from "@/app/components/PageLayout"





export default function MembersPage({ params }: { params: { slug: string } }) {

  return (
    <PageLayout>
      <div className="mt-4 mb-6">
        <h1 className="text-3xl">Physics Club Member: {params.slug}</h1>
      </div>

    </PageLayout>
  )
}