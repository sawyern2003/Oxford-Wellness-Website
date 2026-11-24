import { type ComponentType } from "react";

type PageModule = { default: ComponentType<any> };

export type LazyPage = ComponentType<any> & {
  preload: () => Promise<PageModule>;
  isLoaded: () => boolean;
};

/**
 * Code-split page loader that can be awaited before render/hydrate.
 * After preload(), render is synchronous (no React.lazy / Suspense), so
 * prerendered HTML keeps page content in <main> instead of a hidden slot.
 */
export function createLazyRoute(loader: () => Promise<PageModule>): LazyPage {
  let mod: PageModule | null = null;
  let pending: Promise<PageModule> | null = null;

  const preload = () => {
    if (!pending) {
      pending = loader().then((loaded) => {
        mod = loaded;
        return loaded;
      });
    }
    return pending;
  };

  function RoutePage(props: Record<string, unknown>) {
    if (!mod) {
      // Client navigations before preload: suspend via thrown promise.
      // (Wrapped by <Suspense> in App.) After preloadPath(), mod is set and
      // this branch is never hit on the initial hydrate of a prerendered page.
      throw preload();
    }
    const Comp = mod.default;
    return <Comp {...props} />;
  }

  RoutePage.preload = preload;
  RoutePage.isLoaded = () => mod !== null;
  return RoutePage as LazyPage;
}
