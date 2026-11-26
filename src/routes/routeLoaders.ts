// Centralized lazy loaders so both React.lazy and idle/hover prefetching share the exact same chunks.
export const loadHome = () => import('../pages/Home');
export const loadAbout = () => import('../pages/About');
export const loadCollections = () => import('../pages/Collections');
export const loadFragranceDetail = () => import('../pages/FragranceDetail');
export const loadManufacturing = () => import('../pages/Manufacturing');
export const loadPrivateLabel = () => import('../pages/PrivateLabel');
export const loadCraftsmanship = () => import('../pages/Craftsmanship');
export const loadPackaging = () => import('../pages/Packaging');
export const loadProcess = () => import('../pages/Process');
export const loadUpcomingLaunch = () => import('../pages/UpcomingLaunch');
export const loadLookbook = () => import('../pages/Lookbook');
export const loadContact = () => import('../pages/Contact');
export const loadFAQ = () => import('../pages/FAQ');
export const loadPrivacy = () => import('../pages/Privacy');
export const loadTerms = () => import('../pages/Terms');
export const loadNotFound = () => import('../pages/NotFound');

const prefetchedPaths = new Set<string>();
let allPrefetched = false;

const routeLoaderEntries: Array<[string, () => Promise<unknown>]> = [
  ['/', loadHome],
  ['/about', loadAbout],
  ['/collections', loadCollections],
  ['/fragrances/', loadFragranceDetail],
  ['/manufacturing', loadManufacturing],
  ['/private-label', loadPrivateLabel],
  ['/craftsmanship', loadCraftsmanship],
  ['/ingredients', loadCraftsmanship],
  ['/packaging', loadPackaging],
  ['/process', loadProcess],
  ['/upcoming-launch', loadUpcomingLaunch],
  ['/lookbook', loadLookbook],
  ['/gallery', loadLookbook],
  ['/contact', loadContact],
  ['/faq', loadFAQ],
  ['/privacy', loadPrivacy],
  ['/terms', loadTerms],
];

export function prefetchRoute(pathname: string): void {
  const cleanPath = pathname.split('?')[0].split('#')[0];
  if (prefetchedPaths.has(cleanPath)) return;
  prefetchedPaths.add(cleanPath);

  if (cleanPath.startsWith('/fragrances/')) {
    void loadFragranceDetail();
    return;
  }

  const exact = routeLoaderEntries.find(([prefix]) => prefix === cleanPath);
  if (exact) {
    void exact[1]();
  }
}

export function prefetchAllRoutes(): void {
  if (allPrefetched) return;
  allPrefetched = true;

  const uniqueLoaders = [
    loadAbout,
    loadCollections,
    loadFragranceDetail,
    loadManufacturing,
    loadPrivateLabel,
    loadCraftsmanship,
    loadPackaging,
    loadProcess,
    loadUpcomingLaunch,
    loadLookbook,
    loadContact,
    loadFAQ,
    loadPrivacy,
    loadTerms,
    loadNotFound,
  ];

  // Stagger chunk warming gently so main thread stays responsive
  uniqueLoaders.forEach((loader, idx) => {
    window.setTimeout(() => {
      void loader();
    }, 150 + idx * 65);
  });
}
