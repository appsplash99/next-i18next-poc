export const CROWDIN_API_V2_BASE_URL = `https://${process.env.NEXT_PUBLIC_ENV_CROWDIN_ORGANIZATION_NAME}.crowdin.com/api/v2`;

export const getDynamicCrowdinURL = (slugs) => {
  return `https://${process.env.NEXT_PUBLIC_ENV_CROWDIN_ORGANIZATION_NAME}.crowdin.com/api/v2/${slugs}`;
};
