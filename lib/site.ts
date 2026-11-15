import { isIP } from "node:net";

/** Set only after the public origin has been verified; never infer it from a request. */
export function getSiteUrl(value = process.env.SITE_URL): URL | undefined {
  if (!value?.trim()) return undefined;

  let url: URL;
  try {
    url = new URL(value.trim());
  } catch {
    throw new Error("SITE_URL must be a verified public HTTPS origin.");
  }

  const host = url.hostname.toLowerCase();
  const validHost = host.length <= 253 && host.includes(".")
    && host.split(".").every((label) => /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(label));
  const reservedHost = /(^|\.)(localhost|local|internal|test|invalid|example)$/.test(host)
    || /(^|\.)example\.(com|net|org)$/.test(host);
  if (url.protocol !== "https:" || !validHost || reservedHost
    || isIP(host.replace(/^\[|\]$/g, "")) || url.username || url.password
    || url.port || url.pathname !== "/" || url.search || url.hash) {
    throw new Error("SITE_URL must be a verified public HTTPS origin without credentials, a port, path, query, or fragment.");
  }

  return url;
}
