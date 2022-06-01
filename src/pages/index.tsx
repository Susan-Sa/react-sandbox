import {
  getBannerPostsFromServer,
  getFeaturedCategoriesFromServer,
  getFeaturedPostsFromServer,
} from '../lib/utils';
import { Banner } from '../../common-components/Banner';
import { Heading } from '../../common-components/Heading';
import { FeaturedPost } from '../components/FeaturedPost';
import { FilterableList } from '../../common-components/FilterableList';
import { Outdent } from '../../common-components/Outdent';
import { Placeholder } from '../../common-components/Placeholder';
import { PageShell } from '../components/PageShell';
import { FEATURED_CATEGORY_ID } from '../lib/constants';
import { colors, spacing } from '../../common-components/design-tokens';
import { useStorageDarkMode } from '../../common-components/storage-dark-mode-context';

const Featured = ({ bannerPosts, categories, featuredPosts }) => {
  const { isDarkMode } = useStorageDarkMode();

  return (
    <PageShell>
      {bannerPosts.length > 0 ? (
        <Banner slides={bannerPosts} />
      ) : (
        <Placeholder height={450} />
      )}

      {featuredPosts.length > 0 ? (
        <>
          <div>
            <Heading
              color={isDarkMode ? colors.white : colors.grayDarker}
              size={2}
            >
              Highlighted Articles
            </Heading>
          </div>
          <Outdent horizontal={5}>
            <FilterableList
              allCategoryId={FEATURED_CATEGORY_ID}
              categories={categories}
              gap={spacing.x2}
              itemsWithCategories={featuredPosts}
              minWidth="180px"
            >
              {featuredPosts.map((post, index) => (
                <FeaturedPost key={index} post={post} />
              ))}
            </FilterableList>
          </Outdent>
        </>
      ) : (
        <Placeholder height={300} topMargin={125} />
      )}
    </PageShell>
  );
};

// This also gets called at build time
export const getStaticProps = async () => {
  const bannerPosts = await getBannerPostsFromServer() || [];
  const featuredPosts = await getFeaturedPostsFromServer() || [];
  const categories = await getFeaturedCategoriesFromServer() || [];

  return {
    props: {
      bannerPosts,
      categories,
      featuredPosts,
    },
  };
};

export default Featured;