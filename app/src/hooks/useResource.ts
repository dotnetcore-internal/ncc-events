//region locale

export function getLocaleResource(path: string, locale: string): any | null {
  const v = localStorage.getItem(`${locale}#${path}`);
  return v ? JSON.parse(v) : null;
}

export function updateLocaleResource(path: string, locale: string, resource: any) {
  localStorage.setItem(`${locale}#${path}`, JSON.stringify(resource));
}

//endregion

//region normal

export function getResource(path: string): any | null {
  const v = localStorage.getItem(`${path}`);
  return v ? JSON.parse(v) : null;
}

export function updateResource(path: string, resource: any) {
  localStorage.setItem(`${path}`, JSON.stringify(resource));
}

//endregion