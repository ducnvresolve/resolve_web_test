export const fallbackLng = "en"
export const languages = [fallbackLng, "vi"]
export const defaultNS = "common"
export const cookieName = "i18next"

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    react: {
      useSuspense: false,
    },
  }
}
