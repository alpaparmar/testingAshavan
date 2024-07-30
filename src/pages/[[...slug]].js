import { DynamicComponent } from '../components/components-registry';
// import { sourcebitDataClient } from 'sourcebit-target-next';
import { resolveStaticProps } from '../utils/static-props-resolvers.ts';
import { resolveStaticPaths } from '../utils/static-paths-resolvers';
import { allContent } from '../utils/content';
import { allPages } from '../utils/content';

const Page = (props) => {
    return <DynamicComponent {...props} />;
};

export async function getStaticPaths() {
    const allData = allContent();
    const allPagesData = allPages(allData);
    // console.info('allPagesallPages', allPagesData)
    // const data = await sourcebitDataClient.getData();
    // console.info('allData', allData)
    // console.info('datadatadatadata', allData)
    const pathsData = resolveStaticPaths({objects: allData, pages: allPagesData}).filter((path) => path !== '/404');
    // console.info('parttt/ststs', pathsData)
    // const paths = allData.map((obj) => obj.__metadata.urlPath).filter(Boolean);
    return { paths: pathsData, fallback: false };
}

export function getStaticProps({ params }) {
    const allData = allContent();
    // console.info('info from getStatic', params);
    const urlPath = '/' + (params.slug || []).join('/');
    const props = resolveStaticProps(urlPath, allData);
    // console.info('propapsppspspsspsp', props, urlPath)
    return { props };
}

export default Page;
