import { Layout } from '../Layouts';
import { GetStaticProps } from 'next'
import { Inominiees } from '../interface/';
import { Categories } from '@/components/categories/';
import { NominateContext, NominateProvider } from '@/context';

interface Props {
  nominiees: Inominiees
}

export default function Home(nominiess: Props) {
  return (
    <NominateProvider>
      <Layout>
        <Categories
          nominiess={nominiess.nominiees}
        />
      </Layout>
    </NominateProvider>
  )
}



// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {
  const nominiees = await fetch('http://localhost:3000/api/seed')
    .then(res => res.json())


  return {
    props: {
      nominiees
    }
  }
}